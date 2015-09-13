/**
 * Created by greg on 10/09/15.
 */

import {CollectionView, ItemView} from 'marionette';
import layout from './layout.hbs';
import chart from './d3-template.hbs';
import charts from './home-template.hbs';

import D3Charts from 'behaviors/charts/index';


// D3 ItemViews
var Item = ItemView.extend({
    template: chart,
    tagName: 'div',
    className: 'tab-pane fade',
    attributes: {
        role: 'tabpanel'
    },
    onBeforeRender: function () {
        this.$el.attr('id', this.model.cid);
    }
});
var Circle = Item.extend({
    behaviors:{
        CirleChart: {
            behaviorClass: D3Charts.Circle,
            width: 200,
            height: 200/*,
            data: [
                {
                    x_axis: 50,
                    y_axis: 50,
                    radius: 40,
                    color: "green"
                },
                {
                    x_axis: 50,
                    y_axis: 50,
                    radius: 25,
                    color: "purple"
                },
                {
                    x_axis: 50,
                    y_axis: 50,
                    radius: 10,
                    color: "red"
                }
            ]*/
        }
    }
});
var Square = Item.extend({
    behaviors: {
        SquareChart: {
            behaviorClass: D3Charts.Square,
            width: 200,
            height: 200,
            data: [
                {
                    x_axis: 30,
                    y_axis: 30,
                    width: 50,
                    height: 100,
                    color: "green"
                }
            ]
        }
    }
});
var Ellipse = Item.extend({
    behaviors: {
        EllipseChart: {
            behaviorClass: D3Charts.Ellipse,
            width: 200,
            height: 200,
            data: [
                {
                    x_axis: 50,
                    y_axis: 50,
                    x_radius: 50,
                    y_radius: 20,
                    color: "green"
                }
            ]
        }
    }
});
var Line = Item.extend({
    behaviors: {
        LineChart: {
            behaviorClass: D3Charts.Line,
            width: 200,
            height: 200,
            data: [
                {
                    x_axis_1: 5,
                    y_axis_1: 5,
                    x_axis_2: 50,
                    y_axis_2: 50,
                    color: "green",
                    width: 2
                }
            ]
        }
    }
});
var Polyline = Item.extend({
    behaviors: {
        PolylineChart: {
            behaviorClass: D3Charts.Polyline,
            width: 200,
            height: 200,
            data: []
        }
    }
});
var Polygon = Item.extend({
    behaviors: {
        PolylineChart: {
            behaviorClass: D3Charts.Polygon,
            width: 200,
            height: 200,
            data: []
        }
    }
});


export default CollectionView.extend({
    tagName: 'div',
    className: 'tab-content',
    getChildView: function (item) {
        switch (item.get('type')) {
            default: // circle
                return Circle;
            case 'square':
                return Square;
            case 'ellipse':
                return Ellipse;
            case 'line':
                return Line;
            case 'polyline':
                return Polyline;
                break;
            case 'polygon':
                return Polygon;
        }
    },
    onRenderCollection: function () {
        this.children.findByIndex(0).$el.addClass('in active');
    }
});
