/// <reference path="../../../../../typings/tsd.d.ts" />
import layoutTemplate from "./templates/layout.html!text";
import navItemTemplate from "./templates/nav.item.html!text";
import Backbone from "backbone";
import Marionette from "backbone.marionette";
import { Chooseable } from "../../../common/views/behaviours";


var NavigationItemView = Marionette.ItemView.extend({
    template: navItemTemplate,
    tagName: "li",
    behaviors: [{
        behaviorClass: Chooseable
    }]
});

var NavigationView = Marionette.CollectionView.extend({
    template: false,
    tagName: "ul",
    className: "nav navbar-nav navbar-right",
    childView: NavigationItemView
});

var HeaderLayout = Marionette.LayoutView.extend({
    template: layoutTemplate,
    className: "container",
    regions: {
        navRegion: "#navbar"
    }
});

export { HeaderLayout, NavigationView, NavigationItemView };
