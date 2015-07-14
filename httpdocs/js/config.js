System.config({
    "baseURL": "/",
    "defaultJSExtensions": true,
    "transpiler": "typescript",
    "paths": {
        "github:*": "../jspm/github/*",
        "npm:*": "../jspm/npm/*"
    },
    "packages": {
        "js": {
            "main": "main.ts",
            "defaultExtension": "ts"
        }
    }
});

System.config({
    "map": {
        "marionette": "github:marionettejs/backbone.marionette@2.4.2",
        "typescript": "github:mhegazy/typescript@v1.5-beta2"
    }
});

