'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    fontawesome: {
      icons: {
        'free-brands-svg-icons': 'all',
        'free-regular-svg-icons': 'all',
        'free-solid-svg-icons': 'all',
      },
    },
  });

  app.import('node_modules/foundation-sites/dist/css/foundation.css');

  app.import('node_modules/foundation-sites/dist/js/foundation.js');

  return app.toTree();
};
