import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('budgets', function() {
    this.route('edit', {
      path: '/:budget_uuid/edit',
    });
    this.route('show', {
      path: '/:budget_uuid',
    });
  });
  this.route('categories', function() {
    this.route('edit', {
      path: '/:category_uuid/edit',
    });
    this.route('show', {
      path: '/:category_uuid',
    });
    this.route('subcategories', {
      path: '/:category_uuid/subcategories',
    });
  });
  this.route('dashboard');
  this.route('expenses', function() {
    this.route('edit', {
      path: '/:expense_uuid/edit',
    });
    this.route('show', {
      path: '/:expense_uuid',
    });
  });
  this.route('household-members', function() {
    this.route('edit', {
      path: '/:member_uuid/edit',
    });
    this.route('expenses', {
      path: '/:member_uuid/expenses',
    });
    this.route('show', {
      path: '/:member_uuid',
    });
  });
  this.route('income', function() {
    this.route('show', {
      path: '/:income_uuid',
    });
  });
  this.route('login');
  this.route('sign-up');
  this.route('subcategories', function() {
    this.route('annual-report', {
      path: '/:subcategory_uuid/annual-report',
    });
    this.route('budgets', {
      path: '/:subcategory_uuid/budgets',
    });
    this.route('edit', {
      path: '/:subcategory_uuid/edit',
    });
    this.route('expenses', {
      path: '/:subcategory_uuid/expenses',
    });
    this.route('show', {
      path: '/:subcategory_uuid',
    });
  });
  this.route('vendors', function() {
    this.route('edit', {
      path: '/:vendor_uuid/edit',
    });
    this.route('expenses', {
      path: '/:vendor_uuid/expenses',
    });
    this.route('show', {
      path: '/:vendor_uuid',
    });
  });
});

export default Router;
