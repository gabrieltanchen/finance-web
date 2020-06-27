import ApplicationAdapter from './application';

export default class LoginTokenAdapter extends ApplicationAdapter {
  namespace = 'users/login';

  pathForType() {
    return 'token';
  }
}
