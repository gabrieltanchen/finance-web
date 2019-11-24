import Mirage from 'ember-cli-mirage';

export default function() {
  this.get('/categories', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': [],
    });
  });
  this.post('/categories', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.name
        && params.data.attributes.name === 'Error Category') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test error.',
        }],
      });
    }
    let categoryId = '14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee';
    if (params.data
        && params.data.attributes
        && params.data.attributes.name
        && params.data.attributes.name === 'New Subcategory') {
      categoryId = '6948ad4c-f78b-4ce5-b7d5-0b552234fc4e';
    }
    return new Mirage.Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': categoryId,
        'type': 'categories',
      },
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

  this.get('/expenses', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': [],
    });
  });
  this.post('/expenses', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.description
        && params.data.attributes.description === 'Error Expense') {
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
          'amount': params.data.attributes.amount,
          'amount-cents': params.data.attributes['amount-cents'],
          'category': params.data.attributes.category,
          'date': params.data.attributes.date,
          'description': params.data.attributes.description,
          'reimbursed-amount': params.data.attributes['reimbursed-amount'],
          'reimbursed-cents': params.data.attributes['reimbursed-cents'],
        },
        'id': 'ba03c363-0670-43cf-bef7-07cd6bb6694d',
        'type': 'expenses',
      },
    });
  });

  this.get('/household-members', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': [{
        'attributes': {
          'name': 'Household Member 1',
        },
        'id': '6c8e8279-1d98-47ad-aa9a-bf41d57e1db7',
        'type': 'household-members',
      }],
    });
  });
  this.post('household-members', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.name
        && params.data.attributes.name === 'Error Member') {
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
          'name': params.data.attributes.name,
        },
        'id': '79ae35d8-01d4-4d73-a415-ba1d6265e39f',
        'type': 'household-members',
      },
    });
  });
  this.get('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Household Member 1',
        },
        'id': '6c8e8279-1d98-47ad-aa9a-bf41d57e1db7',
        'type': 'household-members',
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
      'data': [{
        'attributes': {
          'name': 'Vendor 1',
        },
        'id': '7fdadf7a-9561-4950-aca6-438d554536db',
        'type': 'vendors',
      }],
    });
  });
  this.post('/vendors', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.name
        && params.data.attributes.name === 'Error Vendor') {
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
          'name': params.data.attributes.name,
        },
        'id': 'b6f0441e-bdee-4172-a646-4d8c9191db57',
        'type': 'vendors',
      },
    });
  });
  this.get('/vendors/7fdadf7a-9561-4950-aca6-438d554536db', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Vendor 1',
        },
        'id': '7fdadf7a-9561-4950-aca6-438d554536db',
        'type': 'vendors',
      },
    });
  });
  this.get('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Hello world',
        },
        'id': 'b6f0441e-bdee-4172-a646-4d8c9191db57',
        'type': 'vendors',
      },
    });
  });
}
