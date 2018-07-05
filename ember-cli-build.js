'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('node_modules/foundation-sites/dist/css/foundation.css');

  app.import('vendor/jquery-3.3.1.min.js');
  app.import('node_modules/foundation-sites/dist/js/foundation.js');

  return app.toTree();
};
