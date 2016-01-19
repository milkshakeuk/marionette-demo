'use strict';

import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import { PeopleView } from './views';
import { People } from './models';

var PeopleListController = Marionette.Object.extend({

  initialize(options = {}) {
    this.options = options;
    this.region = options.region;
    this.fillRegions();
  },

  fillRegions() {
    this.showPeople();
  },

  showPeople() {
    var collection = this.getPeopleCollection();
    var view = new PeopleView({ collection: collection });

    Radio.channel('navigation').request('app:navigation', 'show:people');
    this.region.show(view);
  },

  getPeopleCollection() {
    return new People();
  }

});

export default PeopleListController;
