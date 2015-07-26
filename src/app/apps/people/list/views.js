/// <reference path="../../../../../typings/tsd.d.ts" />
import peopleTemplate from "./templates/people.html!text";
import personTemplate from "./templates/person.html!text";
import Marionette from "backbone.marionette";


var PersonView = Marionette.ItemView.extend({
    template: personTemplate,
    tagName: "tr"
});

var PeopleView = Marionette.CompositeView.extend({
    template: peopleTemplate,
    className: "panel panel-default",
    childViewContainer: "tbody",
    childView: PersonView,
    ui: {
        loadingRow: '.loading'
    },
    onBeforeShow() {
        this.collection.fetch();
    },
    collectionEvents: {
        "sync": "removeLoadingRow"
    },
    removeLoadingRow() {
        this.ui.loadingRow.hide();
    }
});


export { PeopleView, PersonView };
