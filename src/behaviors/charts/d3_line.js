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

    shape: 'line'
  },

  initialize: function (options) {
    _.extend(this.options, {data: this.view.options.model.get('data')});
  },

  onShow() {

    let _line = d3.svg.line()
      .x(function (d) { return d.x; })
      .y(function(d){ return d.y; })
      .interpolate('basis');
    // 11 different line interpolations: linear, step-before, step-after, basis, basis-open, etc
    // https://www.dashingd3js.com/svg-paths-and-d3js

    var container = d3.select(this.el)
      .append(this.options.tag)
      .attr('width', this.options.width)
      .attr('height', this.options.height);

    var shape = container.append('path')
      .attr('d', _line(this.options.data))
      .attr('stroke', this.options.stroke)
      .attr('stroke-width', this.options.strokeWidth)
      .attr('fill', this.options.fill)

  }

});