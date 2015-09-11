/**
 * Created by greg on 11/09/15.
 */

import {Behavior} from 'marionette';
import d3 from 'd3';

export default Behavior.extend({

  defaults: {
    element: '#line', // svg element
    container: {
      tag: 'svg',
      width: 50,
      height: 50
    },
    data: [],

    shape: 'line'
  },

  onShow() {

    var container = d3.select(this.options.element)
      .append(this.options.container.tag)
      .attr('width', this.options.container.width)
      .attr('height', this.options.container.height);

    var shapes = container.selectAll(this.options.shape).data(this.options.data)
      .enter().append(this.options.shape);

    var attrs = shapes
      .attr('x1', function(d) { return d.x_axis_1; })
      .attr('y1', function (d) { return d.y_axis_1; })
      .attr('x2', function (d) { return d.x_axis_2; })
      .attr('y2', function (d) { return d.y_axis_2; })
      .attr('stroke-width', function (d) { return d.width; })
      .attr('stroke', function (d) { return d.color; });
  }
});