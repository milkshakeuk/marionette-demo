# Marionette Demo
Marionette application demo using TypeScript/ES6 and JSPM/SystemJS for loading and managing modules.

## Get set up
To get started simply clone the repository and install the developer dependancies:
```
$ npm install
```

Next we want to install a couple of node cli-tools:
```
$ npm install -g gulp karma-cli tsd jspm@beta
```

Finally the typescript declaration files which will provide the IDE with loveley information around the shape of external libs (helps with auto completion and intelisense).
```
$ tsd install -o
```

## Build the Application
The included gulpfile has some usefull tasks for building and the application and running karma tests