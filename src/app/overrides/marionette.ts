/// <reference path="../../../typings/tsd.d.ts" />
import Handlebars from 'handlebars';

Marionette.TemplateCache.prototype.loadTemplate = function(template: string) {
    return template;
}

Marionette.TemplateCache.prototype.compileTemplate = function(template: string) {
    // use Handlebars.js to compile the template
    return Handlebars.compile(template);
}