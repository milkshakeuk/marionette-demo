'use strict';

import Backbone from 'backbone';

var Person = Backbone.Model.extend({});

var People = Backbone.Collection.extend({
  url: 'http://jsonplaceholder.typicode.com/users',
  model: Person
});

export { People, Person };
