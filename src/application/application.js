/**
 * Created by greg on 10/09/15.
 */

import $ from 'jquery';
import _ from 'lodash';
import Radio from 'backbone.radio';
import Backbone from 'backbone';

import {Application, RegionManager} from 'marionette';
import LayoutView from './layout_view';

let routerChannel = Radio.channel('router');

export default Application.extend({

  initialize: function () {

    //this.$body = $(document.body);
    this.layout = new LayoutView();
    this.layout.render();

    // Setup Router channel
    /*this.listenTo(routerChannel, {
      'before:enter:route': this.onBeforeEnterRoute,
      'enter:route': this.onEnterRoute,
      'error:route': this.onErrorRoute
    });*/
  },

  onBeforeStart: function () {
    console.log('App before:start');
  },

  onStart: function () {

    function currentRoute() {
      return (_.isEmpty(Backbone.history.fragment)) ? null : Backbone.history.fragment;
    }

    if (Backbone.history) {
      Backbone.history.start();
      Backbone.history.navigate(currentRoute(), {trigger: true});
    }

  }

  /*onBeforeEnterRoute() {
    this.transitioning = true;
    // Don't show for synchronous route changes
    _.defer(() => {
      if (this.transitioning) {
        //nprogress.start();
        console.log('start progress ticker');
      }
    });
  },

  onEnterRoute() {
    this.transitioning = false;
    this.$body.scrollTop(0);
    nprogress.done();
  },

  onErrorRoute() {
    this.transitioning = false;
    //nprogress.done(true);
    console.log('error hide progress ticker');
  }*/
});
