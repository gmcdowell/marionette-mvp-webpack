/**
 * Created by greg on 10/09/15.
 */

import * as Marionette from 'marionette';
import View from './view';

export default Marionette.Object.extend({
    initialize: function (options) {
        this.container = options.container;
        this.collection = options.collection
    },

    index: function () {
       this.view = new View({collection: this.collection});
        this.container.show(this.view);
    }
});