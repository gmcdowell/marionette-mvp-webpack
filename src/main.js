import './plugins';

import Backbone from 'backbone';
import $ from 'jquery';

import Application from './application/application';

import HeaderService from 'services/header/service';

import HomeRouter from 'apps/home/router';

let App = new Application();

// Services
HeaderService.setup({
  container: App.layout.getRegion('header')
});

App.Home = new HomeRouter({
  container: App.layout.getRegion('content')
});

$(document).on('ready', function () {
  App.start();
});