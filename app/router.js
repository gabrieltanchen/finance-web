import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('dashboard');
  this.route('household-members', function() {
    this.route('edit', { path: '/:member_id/edit' });
    this.route('expenses', { path: '/:member_id/expenses' });
    this.route('income', { path: '/:member_id/income' });
    this.route('new');
    this.route('settings', { path: '/:member_id/settings' });
    this.route('show', { path: '/:member_id' });
  });
  this.route('income', function() {
    this.route('edit', { path: '/:income_id/edit' });
    this.route('new');
    this.route('settings', { path: '/:income_id/settings' });
    this.route('show', { path: '/:income_id' });
  });
  this.route('login');
  this.route('vendors', function() {
    this.route('edit', { path: '/:vendor_id/edit' });
    this.route('expenses', { path: '/:vendor_id/expenses' });
    this.route('new');
    this.route('settings', { path: '/:vendor_id/settings' });
    this.route('show', { path: '/:vendor_id' });
  });
});
