import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('categories', function() {
    this.route('edit', { path: '/:category_id/edit' });
    this.route('new');
    this.route('settings', { path: '/:category_id/settings' });
    this.route('show', { path: '/:category_id' });
    this.route('subcategories', { path: '/:category_id/subcategories' });
  });
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
  this.route('subcategories', function() {
    this.route('annual-report', { path: '/:subcategory_id/annual-report' });
    this.route('budgets', { path: '/:subcategory_id/budgets' });
    this.route('expenses', { path: '/:subcategory_id/expenses' });
    this.route('settings', { path: '/:subcategory_id/settings' });
    this.route('show', { path: '/:subcategory_id' });
  });
  this.route('vendors', function() {
    this.route('edit', { path: '/:vendor_id/edit' });
    this.route('expenses', { path: '/:vendor_id/expenses' });
    this.route('new');
    this.route('settings', { path: '/:vendor_id/settings' });
    this.route('show', { path: '/:vendor_id' });
  });
});
