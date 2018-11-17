// import {
//   describe,
//   it,
//   beforeEach,
//   afterEach,
// } from 'mocha';
// import { assert, expect } from 'chai';
// import startApp from 'finance-web/tests/helpers/start-app';
// import destroyApp from 'finance-web/tests/helpers/destroy-app';
//
// describe('Acceptance | sign up', function() {
//   let application;
//
//   beforeEach(function() {
//     application = startApp();
//     const container = application.__container__;
//     const session = container.lookup('service:session');
//     session.logout();
//   });
//
//   afterEach(function() {
//     destroyApp(application);
//   });
//
//   it('should show all email errors', function() {
//     visit('/sign-up');
//     triggerEvent('#sign-up-email', 'blur');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/sign-up');
//       assert.include(find('p.validated-input-error').text(), 'Email must be a valid email address');
//       assert.include(find('p.validated-input-error').text(), 'Email can\'t be blank');
//     });
//   });
//
//   it('should show valid email error', function() {
//     visit('/sign-up');
//     fillIn('#sign-up-email', 'hello');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/sign-up');
//       assert.include(find('p.validated-input-error').text(), 'Email must be a valid email address');
//       assert.notInclude(find('p.validated-input-error').text(), 'Email can\'t be blank');
//     });
//   });
//
//   it('should show first name errors', function() {
//     visit('/sign-up');
//     triggerEvent('#sign-up-first-name', 'blur');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/sign-up');
//       assert.include(find('p.validated-input-error').text(), 'First name can\'t be blank');
//     });
//   });
//
//   it('should show last name errors', function() {
//     visit('/sign-up');
//     triggerEvent('#sign-up-last-name', 'blur');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/sign-up');
//       assert.include(find('p.validated-input-error').text(), 'Last name can\'t be blank');
//     });
//   });
//
//   it('should show all password errors', function() {
//     visit('/sign-up');
//     triggerEvent('#sign-up-password', 'blur');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/sign-up');
//       assert.include(find('p.validated-input-error').text(), 'Password is too short (minimum is 8 characters)');
//       assert.include(find('p.validated-input-error').text(), 'Password can\'t be blank');
//     });
//   });
//
//   it('should show password length error', function() {
//     visit('/sign-up');
//     fillIn('#sign-up-password', 'a');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/sign-up');
//       assert.include(find('p.validated-input-error').text(), 'Password is too short (minimum is 8 characters)');
//       assert.notInclude(find('p.validated-input-error').text(), 'Password can\'t be blank');
//     });
//   });
//
//   it('should show error from api', function() {
//     visit('/sign-up');
//     fillIn('#sign-up-email', 'hello@error.com');
//     fillIn('#sign-up-first-name', 'John');
//     fillIn('#sign-up-last-name', 'Smith');
//     fillIn('#sign-up-password', 'password');
//     click('#sign-up-button');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/sign-up');
//       assert.include(find('.alert').text(), 'Test error.');
//     });
//   });
//
//   it('should go to dashboard on successful sign up', function() {
//     visit('/sign-up');
//     fillIn('#sign-up-email', 'hello@mail.com');
//     fillIn('#sign-up-first-name', 'John');
//     fillIn('#sign-up-last-name', 'Smith');
//     fillIn('#sign-up-password', 'password');
//     click('#sign-up-button');
//     return andThen(() => {
//       expect(currentURL()).to.equal('/dashboard');
//     });
//   });
// });
