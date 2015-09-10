/**
 * Created by greg on 10/09/15.
 */
import {LayoutView} from 'marionette';
import template from './layout-template.hbs';

//require('bootstrap-sass-loader');

export default LayoutView.extend({
  el: '#app-layout',
  template: template,

  regions: {
    header  : 'header',
    /*flashes : '.application__flashes',*/
    content : '#app-main'
    /*overlay : '.application__overlay'*/
  }
});
