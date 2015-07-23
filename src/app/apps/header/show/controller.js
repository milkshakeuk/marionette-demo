/// <reference path="../../../../../typings/tsd.d.ts" />
import Backbone from "backbone";
import Marionette from "backbone.marionette";
import { HeaderLayout, NavigationView } from "./views";
import { NavCollection } from "./models";


var HeaderController = Marionette.Object.extend({

    initialize(options = {}) {
        this.options = options;
        this.region = options.region;

        this.layout = new HeaderLayout();
        this.listenTo(this.layout, 'before:show', this.fillRegions);
        this.region.show(this.layout);
    },

    fillRegions(){
        this.showNavigation();
    },

    showNavigation(){
        var collection = this.getNavCollection();
        var view = new NavigationView({ collection: collection });

        this.listenTo(view, 'childview:clicked', (view, model, collection) => {
            Backbone.history.navigate(model.get("path"));
        })

        this.layout.showChildView("navRegion", view);
    },

    getNavCollection() {
        var navs = [
            { path: "/", text: "Home", chosen: true },
            { path: "/users", text: "Users", chosen: false }
        ];
        return new NavCollection(navs);
    }

});

export default HeaderController;