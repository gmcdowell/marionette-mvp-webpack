/**
 * Created by greg on 10/09/15.
 */

import Backbone from 'backbone';
import $ from 'jquery';
Backbone.$ = $;
import Marionette from 'backbone.marionette';

// start Marionette Inspector
if(window.__agent){
  window.__agent.start(Backbone, Marionette);
}