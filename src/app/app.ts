/// <reference path="../../typings/tsd.d.ts" />
import "oberrides/marionette"

class AppLayout extends Marionette.LayoutView<any> {
    constructor(options?: any){
        super(options);
        this.addRegions({
            navbarRegion: "#nav-region",
            mainRegion: "#main-region"
            });
    }
}

class DemoApp extends Marionette.Application {
    Layout: Marionette.LayoutView<any>;
    onStart(options: any) {
        this.Layout = new AppLayout();
    }
}

export default DemoApp;