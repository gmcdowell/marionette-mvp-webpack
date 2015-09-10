/**
 * Created by greg on 10/09/15.
 */

import * as Marionette from 'marionette';
import View from './view';

export default Marionette.Object.extend({

  initialize: function(options) {
    this.container = options.container;
  },

  index:function() {
    this.view = new View();
    this.container.show(this.view);
  }
});