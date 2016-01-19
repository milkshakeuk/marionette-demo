'use strict';

import homeTemplate from './templates/home.html!hbs';
import Marionette from 'backbone.marionette';

var HomeView = Marionette.ItemView.extend({
  template: homeTemplate,
  className: 'jumbotron'
});

export { HomeView };
