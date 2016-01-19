'use strict';

import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import { HomeView } from './views';

var HomeController = Marionette.Object.extend({

  initialize(options = {}) {
    this.options = options;
    this.region = options.region;
    this.fillRegions();
  },

  fillRegions() {
    this.showHome();
  },

  showHome() {
    var view = new HomeView();
    Radio.channel('navigation').request('app:navigation', 'show:home');
    this.region.show(view);
  }

});

export default HomeController;
