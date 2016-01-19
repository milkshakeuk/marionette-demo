'use strict';

import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import AppRegistry from './apps/registry';

var AppLayout = Marionette.LayoutView.extend({
  el: 'body',
  regions: {
    headerRegion: '#header-region',
    mainRegion: '#main-region'
  }
});

var Application = Marionette.Application.extend({
  initialize() {
    this.Layout = new AppLayout();
  }
});

var App = new Application();

App.on('before:start', () => AppRegistry.initApps());
App.on('start', function() {
  if (!Backbone.History.started) {
    Backbone.history.start({ pushState: true });
  }
});

App.channel.reply('region', name => App.Layout.getRegion(name));

export default App;
