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

  this.get('/household-members', (db, request) => {
    let data;
    if (request.queryParams.page === '2') {
      data = [{
        'attributes': {
          'name': 'Member 26',
        },
        'id': uuidv4(),
        'type': 'household-members',
      }];
    } else {
      data = [...Array(25).keys()].map((ind) => {
        return {
          'attributes': {
            'name': `Member ${ind}`,
          },
          'id': uuidv4(),
          'type': 'household-members',
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
  this.post('/household-members', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.name
        && params.data.attributes.name === 'Error Household Member') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test household member post error 1.',
        }, {
          detail: 'Test household member post error 2.',
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
        'id': '3e1b0321-d588-405e-a227-8ce545ffd837',
        'type': 'household-members',
      },
    });
  });
  this.delete('/household-members/:id', (db, request) => {
    if (request.params.id === 'e05557f8-1010-4978-86fb-0cdbe71ef811') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test household member delete error 1.',
        }, {
          detail: 'Test household member delete error 2.',
        }],
      });
    }
    return new Mirage.Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/household-members/:id', (db, request) => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Test Household Member',
        },
        'id': request.params.id,
        'type': 'household-members',
      },
    });
  });
  this.patch('/household-members/:id', (db, request) => {
    if (request.params.id === 'e05557f8-1010-4978-86fb-0cdbe71ef811') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test household member patch error 1.',
        }, {
          detail: 'Test household member patch error 2.',
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
        'type': 'household-members',
      },
    });
  });

  this.get('/incomes', (db, request) => {
    let data;
    if (request.queryParams.page === '2') {
      data = [{
        'attributes': {
          'amount': 1000,
          'date': '2020-01-01',
          'description': 'Income 26',
        },
        'id': uuidv4(),
        'type': 'incomes',
      }];
    } else {
      data = [...Array(25).keys()].map((ind) => {
        return {
          'attributes': {
            'amount': 1000,
            'date': '2020-01-01',
            'description': `Income ${ind}`,
          },
          'id': uuidv4(),
          'type': 'incomes',
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
  this.delete('/incomes/:id', (db, request) => {
    if (request.params.id === 'b2a60746-3bb4-47b6-978a-4af4cdb68d2e') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test income delete error 1.',
        }, {
          detail: 'Test income delete error 2.',
        }],
      });
    }
    return new Mirage.Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/incomes/:id', (db, request) => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': 1000,
          'date': '2020-01-01',
          'description': 'Test Income',
        },
        'id': request.params.id,
        'type': 'incomes',
      },
    });
  });
  this.patch('/incomes/:id', (db, request) => {
    if (request.params.id === '09571b16-7f41-404a-8387-a18b97cbad8e') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test income patch error 1.',
        }, {
          detail: 'Test income patch error 2.',
        }],
      });
    }
    const params = JSON.parse(request.requestBody);
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': params.data.attributes.amount,
          'date': params.data.attributes.date,
          'description': params.data.attributes.description,
        },
        'id': request.params.id,
        'type': 'incomes',
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
          detail: 'Test vendor post error 1.',
        }, {
          detail: 'Test vendor post error 2.',
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
        'id': '7933a7b5-5c56-43ab-ae16-5bfdf21b03b5',
        'type': 'vendors',
      },
    });
  });
  this.delete('/vendors/:id', (db, request) => {
    if (request.params.id === 'b6f0441e-bdee-4172-a646-4d8c9191db57') {
      return new Mirage.Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test vendor delete error 1.',
        }, {
          detail: 'Test vendor delete error 2.',
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
