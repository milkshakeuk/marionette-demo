'use strict';

import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import { HeaderLayout, NavigationView } from './views';
import { NavCollection } from './models';

var HeaderController = Marionette.Object.extend({

  initialize(options = {}) {
    this.options = options;
    this.region = options.region;

    this.layout = new HeaderLayout();
    this.listenTo(this.layout, 'before:show', this.fillRegions);
    this.navCollection = new NavCollection();

    Radio.channel('navigation')
         .reply({
           'app:navigation': this.setChosenNavigationItem,
           'add:navigation': this.addNavItem
         }, this);

    this.region.show(this.layout);
  },

  fillRegions() {
    this.showNavigation();
  },

  showNavigation() {
    var view = new NavigationView({ collection: this.navCollection });

    this.listenTo(view, 'childview:clicked', this.navigationItemClicked);

    this.layout.showChildView('navRegion', view);
  },

  navigationItemClicked(view, model) {
    Backbone.history.navigate(model.get('path'));
    Radio.channel('global').request(model.get('event'));
  },

  setChosenNavigationItem(event) {
    let navigationitem = this.navCollection.findWhere({ event: event });
    navigationitem.chooseByCollection();
  },

  addNavItem(item) {
    this.navCollection.add(item);
  }

});

export default HeaderController;
