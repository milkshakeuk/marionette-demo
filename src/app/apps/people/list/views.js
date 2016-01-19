'use strict';

import peopleTemplate from './templates/people.html!hbs';
import personTemplate from './templates/person.html!hbs';
import Marionette from 'backbone.marionette';

var PersonView = Marionette.ItemView.extend({
  template: personTemplate,
  tagName: 'tr'
});

var PeopleView = Marionette.CompositeView.extend({
  template: peopleTemplate,
  className: 'panel panel-default',
  childViewContainer: 'tbody',
  childView: PersonView,
  ui: {
    loadingRow: '.loading'
  },
  onBeforeShow() {
    this.collection.fetch();
  },
  collectionEvents: {
    'sync': 'removeLoadingRow'
  },
  removeLoadingRow() {
    this.ui.loadingRow.hide();
  }
});

export { PeopleView, PersonView };
