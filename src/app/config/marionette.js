/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import Marionette from "backbone.marionette";
import Radio from "backbone.radio";
import _ from "underscore";
import Handlebars from "handlebars";

Marionette.Renderer.render = function (template, data) {
    if (!template) return null;
    if (typeof template === "function") template = template();
    var compiled = Marionette.TemplateCache.get(template);
    return compiled(data);
};

Marionette.TemplateCache.prototype.loadTemplate = function (template) {
    return template;
}

Marionette.TemplateCache.prototype.compileTemplate = function (template) {
    // use Handlebars.js to compile the template
    return Handlebars.compile(template);
}

Marionette.Application.prototype._initChannel = function () {
    this.channelName = _.result(this, 'channelName') || 'global';
    this.channel = _.result(this, 'channel') || Radio.channel(this.channelName);
}