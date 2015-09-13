/**
 * Created by greg on 11/09/15.
 */

import {Behavior, Collection} from 'marionette';
import d3 from 'd3';

export default Behavior.extend({

    defaults: {
        tag: 'svg',
        width: 200,
        height: 200,
        data: [],
        shape: 'circle'
    },

    initialize: function (options) {
        console.log('options.data', options.model.data);
      if(options.model.data instanceof Collection) {

          //this.data = options.model.data.toJSON();
      }
    },

    onShow: function () {

        var container = d3.select(this.el)
            .append(this.options.tag)
            .attr('width', this.options.width)
            .attr('height', this.options.height);

        var shapes = container.selectAll(this.options.shape).data(this.options.data)
            .enter().append(this.options.shape);

        var circleAttrs = shapes
            .attr('cx', function (d) {
                return d.x_axis;
            })
            .attr('cy', function (d) {
                return d.y_axis;
            })
            .attr('r', function (d) {
                return d.radius;
            })
            .style('fill', function (d) {
                return d.color;
            });
    }
});