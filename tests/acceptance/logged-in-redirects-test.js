// import {
//   describe,
//   it,
//   beforeEach,
//   afterEach,
// } from 'mocha';
// import { expect } from 'chai';
// import startApp from 'finance-web/tests/helpers/start-app';
// import destroyApp from 'finance-web/tests/helpers/destroy-app';
// import { get } from '@ember/object';
//
// describe('Acceptance | logged in redirects', function() {
//   let application;
//
//   beforeEach(function() {
//     application = startApp();
//     const container = application.__container__;
//     const session = container.lookup('service:session');
//     session.logout();
//     get(session, 'cookie').setCookie('token', 'token');
//   });
//
//   afterEach(function() {
//     destroyApp(application);
//   });
//
//   it('should redirect away from /', function() {
//     visit('/');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/dashboard');
//     });
//   });
//
//   it('can visit /categories', function() {
//     visit('/categories');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/categories');
//     });
//   });
//
//   it('can visit /categories/:uuid', function() {
//     visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
//     });
//   });
//
//   it('can visit /categories/:uuid/expenses', function() {
//     visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses');
//     });
//   });
//
//   it('can visit /categories/:uuid/subcategories', function() {
//     visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/subcategories');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/subcategories');
//     });
//   });
//
//   it('can visit /dashboard', function() {
//     visit('/dashboard');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/dashboard');
//     });
//   });
//
//   it('should redirect away from /login', function() {
//     visit('/login');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/dashboard');
//     });
//   });
//
//   it('should redirect away from /sign-up', function() {
//     visit('/sign-up');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/dashboard');
//     });
//   });
//
//   it('can visit /vendors', function() {
//     visit('/vendors');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/vendors');
//     });
//   });
//
//   it('can visit /vendors/:uuid', function() {
//     visit('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57');
//     });
//   });
//
//   it('can visit /vendors/:uuid/expenses', function() {
//     visit('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/expenses');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/expenses');
//     });
//   });
// });
