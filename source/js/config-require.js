if (typeof define !== 'function') {
  // to be able to require file from node
  var define = require('amdefine')(module);
}

define({
  // Here paths are set relative to `/source/js` folder
  paths: {
    'angular': '../vendor/angular/angular',
    'angular-resource': '../vendor/angular-resource/angular-resource',
    'angular-route': '../vendor/angular-route/angular-route',
    'angular-local-storage': '../vendor/angular-local-storage/angular-local-storage',
    'raphael': '../vendor/raphael/raphael',
    'async': '../vendor/requirejs-plugins/src/async',
    'domReady': '../vendor/requirejs-domready/domReady'
  },

  shim: {
    'angular': {
      'exports': 'angular'
    },
    'angular-mocks': ['angular'],
    'angular-route': ['angular'],
    'angular-resource': ['angular'],
    'angular-local-storage': ['angular']
  }
});