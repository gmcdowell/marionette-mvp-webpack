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
var Group = Item.extend({
  behaviors: {
    GroupChart: {
      behaviorClass: D3Charts.Group,
      width: 200,
      height: 200
    }
  }
});
var Circle = Item.extend({
  behaviors: {
    CirleChart: {
      behaviorClass: D3Charts.Circle,
      width: 200,
      height: 200
    }
  }
});
var Square = Item.extend({
  behaviors: {
    SquareChart: {
      behaviorClass: D3Charts.Square,
      width: 200,
      height: 200
    }
  }
});
var Ellipse = Item.extend({
  behaviors: {
    EllipseChart: {
      behaviorClass: D3Charts.Ellipse,
      width: 200,
      height: 200
    }
  }
});
var Line = Item.extend({
  behaviors: {
    LineChart: {
      behaviorClass: D3Charts.Line,
      width: 200,
      height: 200,
      stroke: 'blue',
      strokeWidth: 2,
      fill: 'none'
    }
  }
});
var Polyline = Item.extend({
  behaviors: {
    PolylineChart: {
      behaviorClass: D3Charts.Polyline,
      width: 200,
      height: 200,
      data: "05,30 15,30 15,20 25,20 25,10 35,10"
    }
  }
});
var Polygon = Item.extend({
  behaviors: {
    PolylineChart: {
      behaviorClass: D3Charts.Polygon,
      width: 200,
      height: 200,
      data: "05,30 15,10 25,30"
    }
  }
});


export default CollectionView.extend({
  tagName: 'div',
  className: 'tab-content',
  getChildView: function (item) {
    switch (item.get('type')) {
      default: // item
        return Group;
      case 'circle':
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
