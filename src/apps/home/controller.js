/**
 * Created by greg on 10/09/15.
 */

import * as Marionette from 'marionette';
import Views from './view';

export default Marionette.Object.extend({

  initialize: function(options) {
    this.container = options.container;
  },

  index:function() {
    /*this.layout = new Views.Layout();
    this.layout.on('before:show', function () {
      this.layout.showChildView('chart1', new Views.BarChart);
      /!*this.layout.showChildView('chart2', new Views.ColumnChart);
      this.layout.showChildView('chart3', new Views.PieChart);
      this.layout.showChildView('chart4', new Views.LineChart);*!/
    }, this);
    this.container.show(this.layout);*/

    this.view = new Views.Charts();
    this.container.show(this.view);
  }
});