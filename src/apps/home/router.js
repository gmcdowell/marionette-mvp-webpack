/**
 * Created by greg on 10/09/15.
 */

import {AppRouter} from 'marionette';
import HeaderService from 'services/header/service';

import Controller from './controller';

export default AppRouter.extend({
  appRoutes: {
    '': 'index'
  },

  initialize: function (options) {
    this.controller = new Controller(options);
    console.log('HomeRouter init');

    //this.on('*', this.onRoute);
  },
  onRoute: function (name, path, args) {
    console.log('HomeRouter routed', name, path, args);
    HeaderService.start();
  }
});