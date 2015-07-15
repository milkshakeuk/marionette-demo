/// <reference path="../../../../typings/tsd.d.ts" />
import template from 'templates/nav.html!text';

// models
class MenuItems extends Backbone.Collection<Backbone.Model> {
    constructor(options?: any){
        super(options);
    }
}

//views
class MenuComponant extends Marionette.ItemView<Backbone.Model> {
    private _template: string;

    get template() {
        return template;
    }
}