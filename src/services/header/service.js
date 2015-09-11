/**
 * Created by greg on 10/09/15.
 */

import Service from 'backbone.service';
import Views from './view';

const HeaderService = Service.extend({
  setup(options = {}) {
    this.container = options.container;
    this.collection = options.collection
  },

  start() {
    console.log('HeaderService.start');
    this.view = new Views({collection: this.collection});
    this.container.show(this.view);
  }
});

export default new HeaderService();