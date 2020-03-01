import Mirage from 'ember-cli-mirage';

export default function() {
  this.get('/budget-reports', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': [],
    });
  });
  this.get('/budgets', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': [],
    });
  });
  this.post('/budgets', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes['budget-cents']
        && params.data.attributes['budget-cents'] === 400) {
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
          'budget': params.data.attributes.budget,
          'budget-cents': params.data.attributes['budget-cents'],
          'month': params.data.attributes.month,
          'year': params.data.attributes.year,
        },
        'id': 'af805297-150c-4c66-adc1-a457d62160a4',
        'type': 'budgets',
      },
    });
  });
  this.delete('/budgets/af805297-150c-4c66-adc1-a457d62160a4', () => {
    return new Mirage.Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/budgets/af805297-150c-4c66-adc1-a457d62160a4', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'budget': 5.64,
          'budget-cents': 564,
          'month': 3,
          'year': 2019,
        },
        'id': 'af805297-150c-4c66-adc1-a457d62160a4',
        'relationships': {
          'subcategory': {
            'data': {
              'id': '6948ad4c-f78b-4ce5-b7d5-0b552234fc4e',
              'type': 'subcategories',
            },
          },
        },
        'type': 'budgets',
      },
    });
  });
  this.patch('/budgets/af805297-150c-4c66-adc1-a457d62160a4', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes['budget-cents']
        && params.data.attributes['budget-cents'] === 400) {
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
          'budget': params.data.attributes.budget,
          'budget-cents': params.data.attributes['budget-cents'],
          'month': params.data.attributes.month,
          'year': params.data.attributes.year,
        },
        'id': 'af805297-150c-4c66-adc1-a457d62160a4',
        'type': 'budgets',
      },
    });
  });
  this.delete('/budgets/acf1d59c-3d7d-4fc1-939b-5566e3d35685', () => {
    return new Mirage.Response(403, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      errors: [{
        detail: 'Test error.',
      }],
    });
  });
  this.get('/budgets/acf1d59c-3d7d-4fc1-939b-5566e3d35685', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'budget': 1,
          'budget-cents': 100,
          'month': 3,
          'year': 2019,
        },
        'id': 'acf1d59c-3d7d-4fc1-939b-5566e3d35685',
        'relationships': {
          'subcategory': {
            'data': {
              'id': '6948ad4c-f78b-4ce5-b7d5-0b552234fc4e',
              'type': 'subcategories',
            },
          },
        },
        'type': 'budgets',
      },
    });
  });
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
    return new Mirage.Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': '14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee',
        'type': 'categories',
      },
    });
  });
  this.delete('/categories/ad16b2f5-1dbc-4716-bb0a-96f78add961c', () => {
    return new Mirage.Response(403, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      errors: [{
        detail: 'Test error.',
      }],
    });
  });
  this.delete('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee', () => {
    return new Mirage.Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/categories/ad16b2f5-1dbc-4716-bb0a-96f78add961c', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Hello world',
        },
        'id': 'ad16b2f5-1dbc-4716-bb0a-96f78add961c',
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
  this.patch('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee', (db, request) => {
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
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
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
  this.delete('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d', () => {
    return new Mirage.Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': '12.34',
          'amount-cents': 1234,
          'date': '2019-01-01',
          'description': 'Hello world',
          'reimbursed-amount': '43.21',
          'reimbursed-cents': 4321,
        },
        'id': 'ba03c363-0670-43cf-bef7-07cd6bb6694d',
        'relationships': {
          'household-member': {
            'data': {
              'id': '6c8e8279-1d98-47ad-aa9a-bf41d57e1db7',
              'type': 'household-members',
            },
          },
          'subcategory': {
            'data': {
              'id': '6948ad4c-f78b-4ce5-b7d5-0b552234fc4e',
              'type': 'subcategories',
            },
          },
          'vendor': {
            'data': {
              'id': '7fdadf7a-9561-4950-aca6-438d554536db',
              'type': 'vendors',
            },
          },
        },
        'type': 'expenses',
      },
    });
  });
  this.patch('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d', (db, request) => {
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
  this.delete('/expenses/b60b0cd4-db77-4da9-a5f0-acf78bd90003', () => {
    return new Mirage.Response(403, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      errors: [{
        detail: 'Test error.',
      }],
    });
  });
  this.get('/expenses/b60b0cd4-db77-4da9-a5f0-acf78bd90003', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': '12.34',
          'amount-cents': 1234,
          'date': '2019-01-01',
          'description': 'Hello world',
          'reimbursed-amount': '43.21',
          'reimbursed-cents': 4321,
        },
        'id': 'b60b0cd4-db77-4da9-a5f0-acf78bd90003',
        'relationships': {
          'household-member': {
            'data': {
              'id': '6c8e8279-1d98-47ad-aa9a-bf41d57e1db7',
              'type': 'household-members',
            },
          },
          'subcategory': {
            'data': {
              'id': '6948ad4c-f78b-4ce5-b7d5-0b552234fc4e',
              'type': 'subcategories',
            },
          },
          'vendor': {
            'data': {
              'id': '7fdadf7a-9561-4950-aca6-438d554536db',
              'type': 'vendors',
            },
          },
        },
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
  this.delete('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7', () => {
    return new Mirage.Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.delete('/household-members/fa41378d-8c5a-4ff0-b61f-e7726cb13ddb', () => {
    return new Mirage.Response(403, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      errors: [{
        detail: 'Test error.',
      }],
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
  this.get('/household-members/fa41378d-8c5a-4ff0-b61f-e7726cb13ddb', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Household Member 2',
        },
        'id': 'fa41378d-8c5a-4ff0-b61f-e7726cb13ddb',
        'type': 'household-members',
      },
    });
  });
  this.patch('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7', (db, request) => {
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
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': '6c8e8279-1d98-47ad-aa9a-bf41d57e1db7',
        'type': 'household-members',
      },
    });
  });

  this.get('/incomes', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': [],
    });
  });
  this.post('/incomes', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.description
        && params.data.attributes.description === 'Error Income') {
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
          'date': params.data.attributes.date,
          'description': params.data.attributes.description,
        },
        'id': 'f347b74e-5980-4324-b629-98490f74ed53',
        'type': 'incomes',
      },
    });
  });
  this.delete('/incomes/f347b74e-5980-4324-b629-98490f74ed53', () => {
    return new Mirage.Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/incomes/f347b74e-5980-4324-b629-98490f74ed53', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': '12.34',
          'amount-cents': 1234,
          'date': '2020-01-01',
          'description': 'Hello world',
        },
        'id': 'f347b74e-5980-4324-b629-98490f74ed53',
        'relationships': {
          'household-member': {
            'data': {
              'id': '6c8e8279-1d98-47ad-aa9a-bf41d57e1db7',
              'type': 'household-members',
            },
          },
        },
        'type': 'incomes',
      },
    });
  });
  this.patch('/incomes/f347b74e-5980-4324-b629-98490f74ed53', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.description
        && params.data.attributes.description === 'Error Income') {
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
          'date': params.data.attributes.date,
          'description': params.data.attributes.description,
        },
        'id': 'f347b74e-5980-4324-b629-98490f74ed53',
        'type': 'incomes',
      },
    });
  });
  this.delete('/incomes/b1c89087-1da8-40d5-a43d-e391f8e6b68a', () => {
    return new Mirage.Response(403, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      errors: [{
        detail: 'Test error.',
      }],
    });
  });
  this.get('/incomes/b1c89087-1da8-40d5-a43d-e391f8e6b68a', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': '12.34',
          'amount-cents': 1234,
          'date': '2020-01-01',
          'description': 'Hello world',
        },
        'id': 'b1c89087-1da8-40d5-a43d-e391f8e6b68a',
        'relationships': {
          'household-member': {
            'data': {
              'id': '6c8e8279-1d98-47ad-aa9a-bf41d57e1db7',
              'type': 'household-members',
            },
          },
        },
        'type': 'incomes',
      },
    });
  });

  this.get('/monthly-reports/:id', (db, request) => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'actual-cents': 0,
          'budget-cents': 0,
          'income-cents': 0,
        },
        'id': request.params.id,
        'type': 'monthly-reports',
      },
    });
  });

  this.get('/subcategories', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': [],
    });
  });
  this.post('/subcategories', (db, request) => {
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
    return new Mirage.Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': '6948ad4c-f78b-4ce5-b7d5-0b552234fc4e',
        'type': 'subcategories',
      },
    });
  });
  this.delete('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e', () => {
    return new Mirage.Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.delete('/subcategories/dfa36b20-55cb-466e-ab55-ff3ffd48388f', () => {
    return new Mirage.Response(403, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      errors: [{
        detail: 'Test error.',
      }],
    });
  });
  this.get('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Hello world',
        },
        'id': '6948ad4c-f78b-4ce5-b7d5-0b552234fc4e',
        'relationships': {
          'category': {
            'data': {
              'id': '14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee',
              'type': 'categories',
            },
          },
        },
        'type': 'subcategories',
      },
    });
  });
  this.get('/subcategories/dfa36b20-55cb-466e-ab55-ff3ffd48388f', () => {
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Hello world',
        },
        'id': 'dfa36b20-55cb-466e-ab55-ff3ffd48388f',
        'type': 'subcategories',
      },
    });
  });
  this.patch('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e', (db, request) => {
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
    return new Mirage.Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': '6948ad4c-f78b-4ce5-b7d5-0b552234fc4e',
        'type': 'subcategories',
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
  this.delete('/vendors/7fdadf7a-9561-4950-aca6-438d554536db', () => {
    return new Mirage.Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.delete('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57', () => {
    return new Mirage.Response(403, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      errors: [{
        detail: 'Test error.',
      }],
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
  this.patch('/vendors/7fdadf7a-9561-4950-aca6-438d554536db', (db, request) => {
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
    return new Mirage.Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': '7fdadf7a-9561-4950-aca6-438d554536db',
        'type': 'vendors',
      },
    });
  });
}
