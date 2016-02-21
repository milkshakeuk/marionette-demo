'use strict';

import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import HomeController from './show/controller';

class HomeApp {
    constructor(options = {}) {
      this.options = options;
      this.setRegion(options.region);
      this.setUpListeners();
      this.registerRoutes();
    }

    setRegion(region) {
      let ch = Radio.channel('global');
      this.region = region || ch.request('region', 'mainRegion');
    }

    registerRoutes() {
      this.Router = new Marionette.AppRouter({
        controller: this,
        appRoutes: {
          '': 'showHome'
        }
      });
    }

    showHome() {
      return new HomeController({ region: this.region });
    }

    setUpListeners() {
      Radio.channel('navigation').request('add:navigation', {
        path: '/',
        text: 'Home',
        event: 'show:home',
        chosen: true
      });
      Radio.channel('global').reply('show:home', () => this.showHome());
    }

}

export default HomeApp;
