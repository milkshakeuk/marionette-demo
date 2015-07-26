/// <reference path="../../../../../typings/tsd.d.ts" />
import homeTemplate from "./templates/home.html!text";
import Marionette from "backbone.marionette";


var HomeView = Marionette.ItemView.extend({
    template: homeTemplate,
    className: "jumbotron"
});

export { HomeView };
