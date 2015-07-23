System.config({
    "baseURL": "/",
    "defaultJSExtensions": true,
    "transpiler": "babel",
    "babelOptions": {
        "optional": [
            "runtime"
        ]
    },
    "paths": {
        "github:*": "../jspm/github/*",
        "npm:*": "../jspm/npm/*"
    }
});

System.config({
    "map": {
        "babel": "npm:babel-core@5.7.4",
        "babel-runtime": "npm:babel-runtime@5.7.0",
        "backbone": "npm:backbone@1.2.1",
        "backbone.cocktail": "npm:backbone.cocktail@0.5.10",
        "backbone.marionette": "npm:backbone.marionette@2.4.2",
        "backbone.radio": "npm:backbone.radio@1.0.0",
        "core-js": "npm:core-js@0.9.18",
        "handlebars": "github:components/handlebars.js@3.0.3",
        "jquery": "github:components/jquery@2.1.4",
        "text": "github:systemjs/plugin-text@0.0.2",
        "underscore": "npm:underscore@1.8.3",
        "github:jspm/nodelibs-path@0.1.0": {
            "path-browserify": "npm:path-browserify@0.0.0"
        },
        "github:jspm/nodelibs-process@0.1.1": {
            "process": "npm:process@0.10.1"
        },
        "npm:babel-runtime@5.7.0": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:backbone.babysitter@0.1.8": {
            "backbone": "npm:backbone@1.2.1",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "underscore": "npm:underscore@1.8.3"
        },
        "npm:backbone.cocktail@0.5.10": {
            "underscore": "npm:underscore@1.5.2"
        },
        "npm:backbone.marionette@2.4.2": {
            "backbone": "npm:backbone@1.2.1",
            "backbone.babysitter": "npm:backbone.babysitter@0.1.8",
            "backbone.wreqr": "npm:backbone.wreqr@1.3.3",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "underscore": "npm:underscore@1.8.3"
        },
        "npm:backbone.radio@1.0.0": {
            "backbone": "npm:backbone@1.2.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0",
            "underscore": "npm:underscore@1.8.3"
        },
        "npm:backbone.wreqr@1.3.3": {
            "backbone": "npm:backbone@1.2.1",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "underscore": "npm:underscore@1.8.3"
        },
        "npm:backbone@1.2.1": {
            "process": "github:jspm/nodelibs-process@0.1.1",
            "underscore": "npm:underscore@1.8.3"
        },
        "npm:core-js@0.9.18": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:path-browserify@0.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        }
    }
});

