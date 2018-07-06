export function initialize(application) {
  application.inject('service', 'cookie', 'cookie:main');
}

export default {
  after: ['cookie'],
  initialize,
  name: 'cookie-injector',
};
