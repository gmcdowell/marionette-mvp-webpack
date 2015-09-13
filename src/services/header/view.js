/**
 * Created by greg on 10/09/15.
 */

import {CompositeView, ItemView} from 'marionette';
import template from './template.hbs';
import link_template from './link.hbs';

var LinkView = ItemView.extend({
    tagName: 'li',
    template: link_template,
    attributes: {
        role: 'presentation'
    },
    templateHelpers: function () {
        var self = this;
        return {
          cid: function () {
              return self.model.cid;
          }
        };
    }
});

export default CompositeView.extend({
    template: template,
    tagName: 'div',
    childView: LinkView,
    childViewContainer: '#nav-tabs', // ul

    onRenderCollection() {
        this.children.findByIndex(0).$el.addClass('active');
    }
});