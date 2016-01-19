'use strict';

import _ from 'underscore';
import HeaderApp from './header/header.app';
import HomeApp from './home/home.app';
import PeopleApp from './people/people.app';

class AppRegistry {
    constructor() {
      this._apps = [];
    }

    add(app) {
      if (!app || typeof app !== 'function') {
        throw new Error(`registering an app requires its class definition`);
      }
      console.log(`registering app ${app.name}`);
      this._apps.push({ Definition: app, name: app.name });
    }

    remove(name) {
      let registered = this.get(name);
      this._apps = _.without(this._apps, registered);
    }

    get(name) {
      let registered = _.find(this._apps, { name: name });
      return registered;
    }

    initApp(name) {
      let registered = this.get(name);

      if (!registered) {
        return;
      }

      registered.instance = registered.instance || new registered.Definition();
    }

    initApps() {
      this._apps.forEach(registered => this.initApp(registered.name));
    }
}

var Registry = new AppRegistry();

Registry.add(HeaderApp);
Registry.add(HomeApp);
Registry.add(PeopleApp);

export default Registry;
