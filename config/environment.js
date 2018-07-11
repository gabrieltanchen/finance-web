'use strict';

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'finance-web',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },
    pageTitle: {
      prepend: true,
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    ENV.apiURL = 'http://localhost:8080';
    ENV['ember-cli-mirage'] = {
      enabled: false,
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    ENV.apiURL = '';
    ENV['ember-cli-mirage'] = {
      enabled: true,
    };
  }

  if (environment === 'production') {
    ENV.apiURL = '';
    ENV['ember-cli-mirage'] = {
      enabled: false,
    };
  }

  return ENV;
};
