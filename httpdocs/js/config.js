System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime"
    ]
  },
  paths: {
    "github:*": "../jspm/github/*",
    "npm:*": "../jspm/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "backbone": "npm:backbone@1.2.3",
    "backbone.cocktail": "npm:backbone.cocktail@0.5.10",
    "backbone.marionette": "npm:backbone.marionette@2.4.4",
    "backbone.radio": "npm:backbone.radio@1.0.2",
    "core-js": "npm:core-js@1.2.6",
    "handlebars": "github:components/handlebars.js@3.0.3",
    "hbs": "github:davis/plugin-hbs@1.2.1",
    "jquery": "github:components/jquery@2.1.4",
    "underscore": "npm:underscore@1.8.3",
    "github:davis/plugin-hbs@1.2.1": {
      "handlebars": "github:components/handlebars.js@4.0.5"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:backbone.babysitter@0.1.10": {
      "backbone": "npm:backbone@1.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone.cocktail@0.5.10": {
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone.marionette@2.4.4": {
      "backbone": "npm:backbone@1.2.3",
      "backbone.babysitter": "npm:backbone.babysitter@0.1.10",
      "backbone.wreqr": "npm:backbone.wreqr@1.3.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone.radio@1.0.2": {
      "backbone": "npm:backbone@1.2.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone.wreqr@1.3.5": {
      "backbone": "npm:backbone@1.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone@1.2.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
