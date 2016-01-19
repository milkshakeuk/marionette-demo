'use strict';

import Backbone from 'backbone';
import Cocktail from 'backbone.cocktail';
import { Chooseable } from '../../../common/models/mixins.js';

var NavItem = Backbone.Model.extend({});
Cocktail.mixin(NavItem, Chooseable);

var NavCollection = Backbone.Collection.extend({
  model: NavItem
});

export { NavCollection, NavItem };
