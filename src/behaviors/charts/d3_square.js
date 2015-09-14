/**
 * Created by greg on 11/09/15.
 */

import {Behavior} from 'marionette';
import d3 from 'd3';
import _ from 'lodash';

export default Behavior.extend({

  defaults: {
    tag: 'svg',
    width: 200,
    height: 200,

    data: [],

    shape: 'rect'
  },

  initialize: function (options) {
    _.extend(this.options, {data: this.view.options.model.get('data')});

    // resize the container to fit data
    // determine max_x & max_y
    let maxX =_.max(this.options.data, 'x_axis');
    this.options.maxX = maxX.x_axis + maxX.width;

    let maxY = _.max(this.options.data, 'y_axis');
    this.options.maxY = maxY.y_axis + maxY.height;
  },

  onShow(){
    var container = d3.select(this.el)
        .append(this.options.tag)
        .attr('width', this.options.maxX)
        .attr('height', this.options.maxY);

    var shapes = container.selectAll(this.options.shape)
      .data(this.options.data)
      .enter().append(this.options.shape);

    var attrs = shapes
      .attr('x', function (d) {
        return d.x_axis;
      })
      .attr('y', function (d) {
        return d.y_axis;
      })
      .attr('width', function (d) {
        return d.width;
      })
      .attr('height', function (d) {
        return d.height;
      })
      .style('fill', function (d) {
        return d.color;
      });
  }
});
