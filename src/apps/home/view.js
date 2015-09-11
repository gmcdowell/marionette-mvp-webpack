/**
 * Created by greg on 10/09/15.
 */

import {LayoutView, ItemView} from 'marionette';
import layout from './layout.hbs';
import bar from './d3-template.hbs';
import column from './d3-template.hbs';
import pie from './d3-template.hbs';
import line from './d3-template.hbs';
import charts from './home-template.hbs';

import D3Charts from 'behaviors/charts/index';


var Views = {};
Views.Layout = LayoutView.extend({
  template: layout,
  className: 'tab-content',
  regions: {
    chart1: '#chart_region_1'/*,
    chart2: '#chart_region_2',
    chart3: '#chart_region_3',
    chart4: '#chart_region_4'*/
  }
});

Views.BarChart =  ItemView.extend({
  template: bar({name:'Bar Chart'}),
  id: 'bar',
  className: 'tab-pane fade in active',
  attributes: {
    role: 'tabpanel'
  }
});

Views.ColumnChart =  ItemView.extend({
  template: column({name:'Column Chart'}),
  id: 'column',
  className: 'tab-pane fade',
  attributes: {
    role: 'tabpanel'
  }
});

Views.PieChart =  ItemView.extend({
  template: pie({name:'Pie Chart'}),
  id: 'pie',
  className: 'tab-pane fade',
  attributes: {
    role: 'tabpanel'
  }
});

Views.LineChart =  ItemView.extend({
  template: line({name:'Line Chart'}),
  id: 'line',
  className: 'tab-pane fade',
  attributes: {
    role: 'tabpanel'
  }
});

Views.Charts = ItemView.extend({
  className: 'tab-content',
  template: charts,
  behaviors: {
    CircleChart: {
      behaviorClass: D3Charts.Circle,
      element: '#bar',
      container: {
        tag: 'svg',
        width: 200,
        height: 200
      },
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
      ]
    },
    CoordinateSpaceChart: {
      behaviorClass: D3Charts.Circle,
      element: '#column',
      container: {
        tag: 'svg',
        width: 200,
        height: 200
      },
      data: [
        {
          x_axis: 30,
          y_axis: 30,
          radius: 20,
          color: "green"
        },
        {
          x_axis: 70,
          y_axis: 70,
          radius: 20,
          color: "purple"
        },
        {
          x_axis: 110,
          y_axis: 110,
          radius: 20,
          color: "red"
        }
      ]
    },
    SquareChart: {
      behaviorClass: D3Charts.Square,
      element: '#pie',
      container: {
        tag: 'svg',
        width: 200,
        height: 200
      },
      data: [
        {
          x_axis: 30,
          y_axis: 30,
          width: 50,
          height: 100,
          color: "green"
        }
      ]
    },
    EllipseChart: {
      behaviorClass: D3Charts.Ellipse,
      element: '#line',
      container: {
        tag: 'svg',
        width: 200,
        height: 200
      },
      data: [
        {
          x_axis: 50,
          y_axis: 50,
          x_radius: 50,
          y_radius: 20,
          color: "green"
        }
      ]
    },
    LineChart: {
      behaviorClass: D3Charts.Line,
      element: '#ellipse',
      container: {
        tag: 'svg',
        width: 200,
        height: 200
      },
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

export default Views;