'use strict';

import Backbone from 'backbone';

var Person = Backbone.Model.extend({});

var People = Backbone.Collection.extend({
  url: 'http://localhost:3000/users',
  model: Person
});

export { People, Person };
