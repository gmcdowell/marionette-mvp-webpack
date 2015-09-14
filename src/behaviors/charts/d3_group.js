/**
 * Created by greg on 14/09/15.
 */
import {Behavior} from 'marionette';
import d3 from 'd3';
import _ from 'lodash';

export default Behavior.extend({

  defaults: {
    tag: 'svg',
    width: 200,
    height: 200

  },

  initialize() {
    _.extend(this.options,
      {circleData: this.view.options.model.get('circleData')},
      {rectangleData: this.view.options.model.get('rectangleData')}
    );
  },

  onShow() {

    var svgContainer = d3.select(this.el).append(this.options.tag)
      .attr("width", 200).attr("height", 200);

    var circleGroup = svgContainer.append("g")
      .attr('transform', 'translate(80,0)');

    var circles = circleGroup.selectAll("circle")
      .data(this.options.circleData).enter().append('circle');

    var circleAttributes = circles
      .attr("cx", function (d) {
        return d.cx;
      })
      .attr("cy", function (d) {
        return d.cy;
      })
      .attr("r", function (d) {
        return d.radius;
      })
      .style("fill", function (d) {
        return d.color;
      });

    var text = svgContainer.selectAll('text')
      .data(this.options.circleData).enter().append('text');

    var textLabels = text
      .attr('x', function (d) {
        return d.cx;
      })
      .attr('y', function (d) {
        return d.cy;
      })
      .text(function (d) {
        return '(' + d.cx + ', ' + d.cy + ')';
      })
    .attr('font-family', 'sans-serif')
    .attr('font-size', '20px')
    .attr('fill', 'red');

    var rectangles = svgContainer.selectAll("rect")
      .data(this.options.rectangleData).enter().append('rect');

    var rectangleAttributes = rectangles
      .attr("x", function (d) {
        return d.rx;
      })
      .attr("y", function (d) {
        return d.ry;
      })
      .attr("height", function (d) {
        return d.height;
      })
      .attr("width", function (d) {
        return d.width;
      })
      .style("fill", function (d) {
        return d.color;
      });
  }
});