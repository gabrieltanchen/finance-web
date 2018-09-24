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
    this.route('expenses', {
      path: '/:category_uuid/expenses',
    });
  });
  this.route('dashboard');
  this.route('login');
  this.route('sign-up');
});

export default Router;
