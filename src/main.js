import './plugins';

import Backbone from 'backbone';
import $ from 'jquery';

// Parent Application
import Application from './application/application';

// Services used by Application (non-routing)
import HeaderService from 'services/header/service';

// Child Apps that provide atomic functionality
import HomeRouter from 'apps/home/router';

import DataStore from './models/chart_collection.js';

var data = [
  {
    "name": "Cirlce Chart",
    "type": "circle"
  },
  {
    "name": "Square Chart",
    "type": "square"
  },
  {
    "name": "Line Chart",
    "type": "line"
  },
  {
    "name": "Ellipse Chart",
    "type": "ellipse"
  }
];

// load data from json file
let Data = new DataStore(data);


let App = new Application();

// Services
HeaderService.setup({
  container: App.layout.getRegion('header'),
  collection: Data
});

// Child Apps
App.Home = new HomeRouter({
  container: App.layout.getRegion('content'),
  collection: Data
});

// Application initialization
$(document).on('ready', function () {
  App.start();
});