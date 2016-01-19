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

    Radio.channel('navigation')
         .reply('app:navigation', event => this.setChosenNavigationItem(event));

    this.region.show(this.layout);
  },

  fillRegions() {
    this.showNavigation();
  },

  showNavigation() {
    this.navCollection = this.getNavCollection();
    var view = new NavigationView({ collection: this.navCollection });

    this.listenTo(view, 'childview:clicked', this.navigationItemClicked);

    this.layout.showChildView('navRegion', view);
  },

  navigationItemClicked(view, model) {
    Backbone.history.navigate(model.get('path'));
    Radio.trigger('global', model.get('event'));
  },

  setChosenNavigationItem(event) {
    let navigationitem = this.navCollection.findWhere({ event: event });
    navigationitem.chooseByCollection();
  },

  getNavCollection() {
    var navs = [
            { path: '/', text: 'Home', event: 'show:home', chosen: true },
            { path: '/people', text: 'People', event: 'show:people' }
    ];
    return new NavCollection(navs);
  }

});

export default HeaderController;
