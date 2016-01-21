'use strict';

import Backbone from 'backbone';
import _ from 'underscore';

(function() {
  var get = Backbone.Model.prototype.get;
  var toJson = Backbone.Model.prototype.toJSON;

  Backbone.Model.prototype.get = function(attr) {
    let hasComputed = Boolean(this.computed) && Boolean(this.computed[attr]);
    let hasProperty = Boolean(this.attributes[attr]);

    if (hasComputed && !hasProperty) {
      let value = this.computed[attr];
      return _.isFunction(value) ? value.call(this) : value;
    }

    return get.call(this, attr);
  };

  Backbone.Model.prototype.toJSON = function(options = {}) {
    let isSaving = _.has(options, 'emulateHTTP');
    let json = toJson.apply(this, arguments);

    if (isSaving) {
      return json;
    }

    let hasComputed = Boolean(this.computed);
    let computed = {};

    if (hasComputed) {
      _.each(this.computed, (value, key) => {
        computed[key] = _.isFunction(value) ? value.call(this) : value;
      });
    }

    return _.extend({}, computed, json);
  };
})();

