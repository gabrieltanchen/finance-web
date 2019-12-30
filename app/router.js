import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('categories', function() {
    this.route('show', {
      path: '/:category_uuid',
    });
    this.route('subcategories', {
      path: '/:category_uuid/subcategories',
    });
  });
  this.route('dashboard');
  this.route('household-members', function() {
    this.route('expenses', {
      path: '/:member_uuid/expenses',
    });
    this.route('show', {
      path: '/:member_uuid',
    });
  });
  this.route('login');
  this.route('sign-up');
  this.route('subcategories', function() {
    this.route('budgets', {
      path: '/:subcategory_uuid/budgets',
    });
    this.route('expenses', {
      path: '/:subcategory_uuid/expenses',
    });
    this.route('show', {
      path: '/:subcategory_uuid',
    });
  });
  this.route('vendors', function() {
    this.route('expenses', {
      path: '/:vendor_uuid/expenses',
    });
    this.route('show', {
      path: '/:vendor_uuid',
    });
  });
});

export default Router;
