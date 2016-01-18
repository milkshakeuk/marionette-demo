import _ from "underscore";
import HeaderApp from "./header/header.app";
import HomeApp from "./home/home.app";
import PeopleApp from "./people/people.app";

class AppRegistry {
    constructor() {
        this._apps = [];
    }

    add(app) {
        if (!app || !app.name || !app.app) {
            throw new Error("registering an app requires properties {name: string}, {app: class definition}");
        }
        this._apps.push(app);
    }

    remove(name) {
        let registered = _.findWhere(this._apps, { name: name });
        this._apps = _.without(this._apps, registered);
    }

    get(name) {
        let registered = _.findWhere(this._apps, { name: name });
        return registered;
    }

    initApp(name) {
        let registered = _.findWhere(this._apps, { name: name });
        if (!registered) return;
        registered.instance = registered.instance || new registered.app();
    }

    initApps() {
        this._apps.forEach((registered) => {
            registered.instance = new registered.app();
        });
    }
}

var Registry = new AppRegistry();

Registry.add({ name: "HeaderApp", app: HeaderApp });
Registry.add({ name: "HomeApp", app: HomeApp });
Registry.add({ name: "PeopleApp", app: PeopleApp });

export default Registry;