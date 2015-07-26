import Marionette from "backbone.marionette";
import Radio from "backbone.radio";
import PeopleListController from "./list/controller";

class PeopleApp {
    constructor(options = {}) {
        this.options = options;
        this.setRegion(options.region);
        this.setUpListeners();
        this.registerRoutes();
    }

    setRegion(region) {
        let ch = Radio.channel("global");
        this.region = region || ch.request("region", "mainRegion");
    }

    registerRoutes() {
        this.Router = new Marionette.AppRouter({
            controller: this,
            appRoutes: {
                "people": "showPeopleList"
            }
        });
    }

    showPeopleList() {
        return new PeopleListController({ region: this.region });
    }

    setUpListeners() {
        Radio.channel("global").on("show:people", () => this.showPeopleList());
    }

}

export default PeopleApp;