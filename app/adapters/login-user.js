import ApplicationAdapter from './application';

export default class LoginUserAdapter extends ApplicationAdapter {
  namespace = 'users';

  pathForType() {
    return 'login';
  }
}
