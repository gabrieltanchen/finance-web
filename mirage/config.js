import Mirage from 'ember-cli-mirage';
import { v4 as uuidv4 } from 'uuid';

export default function() {
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
          detail: 'Test login error 1',
        }, {
          detail: 'Test login error 2',
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
        'type': 'login-users',
      },
    });
  });

  this.get('/vendors', (db, request) => {
    let data;
    if (request.queryParams.page === '2') {
      data = [{
        'attributes': {
          'name': 'Vendor 26',
        },
        'id': uuidv4(),
        'type': 'vendors',
      }];
    } else {
      data = [...Array(25).keys()].map((ind) => {
        return {
          'attributes': {
            'name': `Vendor ${ind}`,
          },
          'id': uuidv4(),
          'type': 'vendors',
        };
      });
    }
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': data,
      'meta': {
        'pages': 2,
        'total': 26,
      },
    });
  });
}
