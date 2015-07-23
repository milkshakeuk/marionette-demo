import Marionette from "backbone.marionette";
import _ from "underscore";


var Chooseable = Marionette.Behavior.extend({
    defaults: {
        "class": "active"
    },
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
        this.$el.toggleClass(this.options.class, this.view.model.get("chosen"));
    },
    clicked(event) {
        event.preventDefault();

        var view = this.view;
        var model = view.model;

        if (!model || !model.collection){
            throw new Error("behaviour requires model in a collection")
        }

        if (model.get("chosen")) return;
        model.chooseByCollection();

        view.trigger("clicked", model, model.collection);
    }
});

export { Chooseable };