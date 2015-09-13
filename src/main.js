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

// load data from file
var data = require('json!../data.json');


// load data from json file
const Data = new DataStore(data, {parse:true}); // transform data

let App = new Application();

// Child Apps
App.Home = new HomeRouter({
    container: App.layout.getRegion('content'),
    collection: Data
});

// Services
HeaderService.setup({
    container: App.layout.getRegion('header'),
    collection: Data
});

// Application initialization
$(document).on('ready', function () {
    App.start();
});