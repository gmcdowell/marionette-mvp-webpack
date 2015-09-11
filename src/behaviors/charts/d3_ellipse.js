/**
 * Created by greg on 11/09/15.
 */

import {Behavior} from 'marionette';
import d3 from 'd3';

export default Behavior.extend({

  defaults: {
    element: '#ellipse',
    container: {
      tag: 'svg',
      width: 50,
      height: 50
    },
    data: [],

    shape: 'ellipse'
  },

  onShow: function () {

    var container = d3.select(this.options.element)
      .append(this.options.container.tag)
      .attr('width', this.options.container.width)
      .attr('height', this.options.container.height);

    var shapes = container.selectAll(this.options.shape).data(this.options.data)
      .enter().append(this.options.shape);

    var attrs = shapes
      .attr('cx', function(d) { return d.x_axis; })
      .attr('cy', function (d) { return d.y_axis; })
      .attr('rx', function (d) { return d.x_radius; })
      .attr('ry', function (d) { return d.y_radius; })
      .style('fill', function (d) { return d.color; });
  }
});