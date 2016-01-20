# Marionette Demo
Marionette application demo using ES6 Syntax where possible, JSPM/SystemJS for loading and managing modules/packages.

## the following libs were used:

* [Backbone (inc. underscore, jquery)](https://github.com/jashkenas/backbone)
* [Backbone.Cocktail (Mixin Support)](https://github.com/onsi/cocktail)
* [Backbone.Marionette](https://github.com/marionettejs/backbone.marionette)
* [Backbone.Radio (replacing Backbone.Wreqr)](https://github.com/marionettejs/backbone.radio/)
* [Handlebars (replacing underscores template system)](https://github.com/wycats/handlebars.js/)

## Get set up
To get started simply clone the repository and install the developer dependancies:
```
$ npm install
```

Next we want to install a couple of node cli-tools:
```
$ npm install -g gulp karma-cli tsd jspm@beta eslint json-server
```

Next we want tell jspm to install our modules/packages:
```
$ jspm install
```

Finally the typescript declaration files which will provide the IDE with loveley information around the shape of external libs (helps with auto completion and intelisense).
```
$ tsd install -o
```

## Build the Application
The included gulpfile has some usefull tasks for building and the application and running karma tests

```
$ gulp
```

will run the defaul task - this task will:

1. `lint` runs eslint against the codebase and stops on error
2. `clean:build` cleans out our `httpdocs/` folder ready for our `build` step
3. `build` copies the contents of our `src/` directory to `httpdocs/`
4. `json-server` serves up the our demo api using json-server
5. `serve` serves up the demo website and lauches the browser
6. `watch` watches all the `.js` and `.html` files for changes then `clean:build` and `build` again

