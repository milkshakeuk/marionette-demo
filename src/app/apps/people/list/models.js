/// <reference path="../../../../../typings/tsd.d.ts" />
import Backbone from "backbone";
import Marionette from "backbone.marionette";

var Person = Backbone.Model.extend({});

var People = Backbone.Collection.extend({
    url: "http://jsonplaceholder.typicode.com/users",
    model: Person
});

export { People, Person }