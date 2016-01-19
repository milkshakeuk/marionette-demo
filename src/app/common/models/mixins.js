'use strict';

var Chooseable = {
  choose() {
    this.set('chosen', true);
  },
  unchoose() {
    this.set('chosen', false);
  },
  toggleChoose() {
    this.set('chosen', !this.get('chosen'));
  },
  chooseByCollection() {
    if (!this.collection) {
      throw new Error('requires model to be part of collection');
    }
    this.collection.each(m => m.unchoose());
    this.choose();
  }
};

export { Chooseable };
