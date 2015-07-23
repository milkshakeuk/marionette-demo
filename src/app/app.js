/// <reference path="../../typings/tsd.d.ts" />
import Backbone from "backbone";
import Marionette from "backbone.marionette";
import HeaderApp from "./apps/header/header.app";


var AppLayout = Marionette.LayoutView.extend({
    el: 'body',
    regions: {
        headerRegion: "#header-region",
        mainRegion: "#main-region"
    }
});

var Application = Marionette.Application.extend({

    initialize(options) {
        this.Layout = new AppLayout();
        this.Router = new Marionette.AppRouter();
    },

    onBeforeStart() {
        // do stuff before start of main application
    },

    onStart() {
        var headerApp = new HeaderApp({ region: this.Layout.headerRegion });
        headerApp.start();

        if (!Backbone.History.started) {
            Backbone.history.start({ pushState: true });
        }
    }
});

var App = new Application();

export default App;