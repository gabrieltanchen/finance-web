import Mirage from 'ember-cli-mirage';
import { v4 as uuidv4 } from 'uuid';

export default function() {
  this.get('/expenses', (db, request) => {
    let data;
    if (request.queryParams.page === '2') {
      data = [{
        'attributes': {
          'amount-cents': 1,
          'date': '2020-01-01',
          'description': 'Expense 26',
          'reimbursed-cents': 0,
        },
        'id': uuidv4(),
        'type': 'expenses',
      }];
    } else {
      data = [...Array(25).keys()].map((ind) => {
        return {
          'attributes': {
            'amount-cents': 1,
            'date': '2020-01-01',
            'description': `Expense ${ind}`,
            'reimbursed-cents': 0,
          },
          'id': uuidv4(),
          'type': 'expenses',
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
  this.delete('/vendors/:id', (db, request) => {
    if (request.params.id === 'b6f0441e-bdee-4172-a646-4d8c9191db57') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test error.',
        }],
      });
    }
    return new Mirage.Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/vendors/:id', (db, request) => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Test Vendor',
        },
        'id': request.params.id,
        'type': 'vendors',
      },
    });
  });
  this.patch('/vendors/:id', (db, request) => {
    if (request.params.id === 'b6f0441e-bdee-4172-a646-4d8c9191db57') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test vendor patch error 1.',
        }, {
          detail: 'Test vendor patch error 2.',
        }],
      });
    }
    const params = JSON.parse(request.requestBody);
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': request.params.id,
        'type': 'vendors',
      },
    });
  });
}
