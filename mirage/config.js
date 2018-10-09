import Mirage from 'ember-cli-mirage';

export default function() {
  this.get('/categories', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': [],
    });
  });
  this.get('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Hello world',
        },
        'id': '14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee',
        'type': 'categories',
      },
    });
  });

  this.post('/users', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.email
        && params.data.attributes.email === 'hello@error.com') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test error.',
        }],
      });
    }
    return new Mirage.Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'email': params.data.attributes.email,
          'first-name': params.data.attributes['first-name'],
          'last-name': params.data.attributes['last-name'],
          'token': 'token',
        },
        'id': '07ae7b13-338c-4ac0-a122-615075066527',
        'type': 'users',
      },
    });
  });

  this.post('/users/login', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.email
        && params.data.attributes.email === 'hello@error.com') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test error.',
        }],
      });
    }
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'email': 'hello@mail.com',
          'first-name': 'John',
          'last-name': 'Smith',
          'token': 'token',
        },
        'id': '07ae7b13-338c-4ac0-a122-615075066527',
        'type': 'suers',
      },
    });
  });

  this.post('/users/login/token', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.token
        && params.data.attributes.token === 'invalidtoken') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test error.',
        }],
      });
    }
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'email': 'hello@mail.com',
          'first-name': 'John',
          'last-name': 'Smith',
        },
        'id': '07ae7b13-338c-4ac0-a122-615075066527',
        'type': 'suers',
      },
    });
  });

  this.get('/vendors', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': [],
    });
  });
}
