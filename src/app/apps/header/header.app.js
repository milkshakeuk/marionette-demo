'use strict';

import Radio from 'backbone.radio';
import HeaderController from './show/controller';

class HeaderApp {
    constructor(options = {}) {
      this.options = options;
      this.setRegion(options);
      this.showHeader();
    }

    setRegion(options) {
      let ch = Radio.channel('global');
      this.region = options.region || ch.request('region', 'headerRegion');
    }

    showHeader() {
      return new HeaderController({ region: this.region });
    }

}

export default HeaderApp;
