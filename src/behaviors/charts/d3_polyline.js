/**
 * Created by greg on 11/09/15.
 */

import {Behavior} from 'marionette';
import d3 from 'd3';

export default Behavior.extend({

  defaults: {
    tag: 'svg',
    width: 200,
    height: 200,

    data: [],

    shape: 'polyline'
  },

  initialize: function (options) {
    //_.extend(this.options, {data: this.view.options.model.get('data')});
  },

  onShow: function () {
    var container = d3.select(this.el)
      .append(this.options.tag)
      .attr('width', this.options.width)
      .attr('height', this.options.height);

    var shapes = container.append(this.options.shape);

    var attrs = shapes
      .attr('points', this.options.data)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 2);

  }
});