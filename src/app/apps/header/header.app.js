import HeaderController from "./show/controller";

class HeaderApp {
    constructor(options = {}){
        this.options = options;
        this.region = options.region;
    }

    start() {
        return new HeaderController({ region: this.region });
    }

}

export default HeaderApp;