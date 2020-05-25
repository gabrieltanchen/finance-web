import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('dashboard');
  this.route('login');
  this.route('vendors', function() {
    this.route('edit', { path: '/:vendor_id/edit' });
    this.route('expenses', { path: '/:vendor_id/expenses' });
    this.route('settings', { path: '/:vendor_id/settings' });
    this.route('show', { path: '/:vendor_id' });
  });
});
