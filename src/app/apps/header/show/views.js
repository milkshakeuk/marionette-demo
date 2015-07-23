/// <reference path="../../../../../typings/tsd.d.ts" />
import layoutTemplate from "./templates/layout.html!text";
import navItemTemplate from "./templates/nav.item.html!text";
import Backbone from "backbone";
import Marionette from "backbone.marionette";


var NavigationItemView = Marionette.ItemView.extend({
    template: navItemTemplate,
    tagName: "li",
        onRender() {
            this.toggleChosen();
        },

        events: {
            "click": "clicked"
        },

        modelEvents: {
            "change:chosen": "toggleChosen"
        },

        toggleChosen() {
            this.$el.toggleClass("active", this.model.get("chosen"));
        },

        clicked(e) {
            e.preventDefault();
            if (this.model.get("chosen")) return;
            this.model.collection.each(m => m.set("chosen", false));
            this.model.set("chosen", true);
            this.$el.toggleClass("active", this.model.get("chosen"));
            this.trigger("clicked", this.model, this.model.collection);
        }
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
