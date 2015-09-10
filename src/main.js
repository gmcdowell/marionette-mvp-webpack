import './plugins';

import Backbone from 'backbone';
import $ from 'jquery';

// Parent Application
import Application from './application/application';

// Services used by Application (non-routing)
import HeaderService from 'services/header/service';

// Child Apps that provide atomic functionality
import HomeRouter from 'apps/home/router';

let App = new Application();

// Services
HeaderService.setup({
  container: App.layout.getRegion('header')
});

// Child Apps
App.Home = new HomeRouter({
  container: App.layout.getRegion('content')
});

// Application initialization
$(document).on('ready', function () {
  App.start();
});