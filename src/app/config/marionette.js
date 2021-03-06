'use strict';

import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import _ from 'underscore';

(function() {
  Marionette.Application.prototype._initChannel = function() {
    this.channelName = _.result(this, 'channelName') || 'global';
    this.channel = _.result(this, 'channel') || Radio.channel(this.channelName);
  };
})();

