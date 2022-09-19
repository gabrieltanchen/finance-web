import Mirage from 'ember-cli-mirage';
import { Response } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

export default function() {
  this.get('/budget-reports', () => {
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': [],
    });
  });

  this.get('/budgets', (db, request) => {
    let data;
    if (request.queryParams.page === '2') {
      data = [{
        'attributes': {
          'amount': 1,
          'month': 1,
          'year': 2020,
        },
        'id': uuidv4(),
        'type': 'budgets',
      }];
    } else {
      data = [...Array(25).keys()].map((ind) => {
        return {
          'attributes': {
            'amount': 1,
            'month': ind % 12,
            'year': 2018 + parseInt(ind / 12, 10),
          },
          'id': uuidv4(),
          'type': 'budgets',
        };
      });
    }
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': data,
      'meta': {
        'pages': 2,
        'total': 26,
      },
    });
  });
  this.post('/budgets', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.amount
        && params.data.attributes.amount === 400) {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test budget post error 1.',
        }, {
          detail: 'Test budget post error 2.',
        }],
      });
    }
    return new Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': params.data.attributes.amount,
          'month': params.data.attributes.month,
          'year': params.data.attributes.year,
        },
        'id': '139cab77-e185-44c2-bf46-6b8555aaaa30',
        'type': 'budgets',
      },
    });
  });
  this.delete('/budgets/:id', (db, request) => {
    if (request.params.id === '65b3bef7-6e22-47bf-865a-3939ab53d6b1') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test budget delete error 1.',
        }, {
          detail: 'Test budget delete error 2.',
        }],
      });
    }
    return new Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/budgets/:id', (db, request) => {
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': 1000,
          'month': 0,
          'year': 2020,
        },
        'id': request.params.id,
        'relationships': {
          'subcategory': {
            'data': {
              'id': 'd133a7d5-58c6-458d-8b4c-e9e7dee28334',
              'type': 'subcategories',
            },
          },
        },
        'type': 'budgets',
      },
    });
  });
  this.patch('/budgets/:id', (db, request) => {
    if (request.params.id === 'a6da3f05-a6af-485d-808f-679db25932db') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test budget patch error 1.',
        }, {
          detail: 'Test budget patch error 2.',
        }],
      });
    }
    const params = JSON.parse(request.requestBody);
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': params.data.attributes.amount,
          'month': params.data.attributes.month,
          'year': params.data.attributes.year,
        },
        'id': request.params.id,
        'type': 'budgets',
      },
    });
  });

  this.get('/categories', (db, request) => {
    let data;
    if (request.queryParams.page === '2') {
      data = [{
        'attributes': {
          'name': 'Category 26',
        },
        'id': uuidv4(),
        'type': 'categories',
      }];
    } else {
      data = [...Array(25).keys()].map((ind) => {
        return {
          'attributes': {
            'name': `Category ${ind}`,
          },
          'id': uuidv4(),
          'type': 'categories',
        };
      });
    }
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': data,
      'meta': {
        'pages': 2,
        'total': 26,
      },
    });
  });
  this.post('/categories', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.name
        && params.data.attributes.name === 'Error Category') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test category post error 1.',
        }, {
          detail: 'Test category post error 2.',
        }],
      });
    }
    return new Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': 'ba4fa7e8-ebb2-4b56-9639-15411e05356d',
        'type': 'categories',
      },
    });
  });
  this.delete('/categories/:id', (db, request) => {
    if (request.params.id === 'fa418da1-c598-41f5-a5e7-192d023e74ed') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test category delete error 1.',
        }, {
          detail: 'Test category delete error 2.',
        }],
      });
    }
    return new Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/categories/:id', (db, request) => {
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Test Category',
        },
        'id': request.params.id,
        'type': 'categories',
      },
    });
  });
  this.patch('/categories/:id', (db, request) => {
    if (request.params.id === 'e99f2eba-b6f5-4563-99b9-8e30224b4d5a') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test category patch error 1.',
        }, {
          detail: 'Test category patch error 2.',
        }],
      });
    }
    const params = JSON.parse(request.requestBody);
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': request.params.id,
        'type': 'categories',
      },
    });
  });

  this.get('/deposits', (db, request) => {
    let data;
    if (request.queryParams.page === '2') {
      data = [{
        'attributes': {
          'amount': 1,
          'date': '2021-01-01',
        },
        'id': uuidv4(),
        'type': 'deposits',
      }];
    } else {
      data = [...Array(25).keys()].map(() => {
        return {
          'attributes': {
            'amount': 1,
            'date': '2021-01-01',
          },
          'id': uuidv4(),
          'type': 'deposits',
        };
      });
    }
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': data,
      'meta': {
        'pages': 2,
        'total': 26,
      },
    });
  });
  this.post('/deposits', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.amount
        && params.data.attributes.amount === 9876) {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test deposit post error 1.',
        }, {
          detail: 'Test deposit post error 2.',
        }],
      });
    }
    return new Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': params.data.attributes.amount,
          'date': params.data.attributes.date,
        },
        'id': 'ecb685d8-9e96-4d8d-acfa-f73ac732d22c',
        'type': 'deposits',
      },
    });
  });
  this.delete('/deposits/:id', (db, request) => {
    if (request.params.id === '90753de1-66c8-472c-b5e7-fb5fc63fe8f5') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test deposit delete error 1.',
        }, {
          detail: 'Test deposit delete error 2.',
        }],
      });
    }
    return new Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/deposits/:id', (db, request) => {
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': 1000,
          'date': '2021-01-01',
        },
        'id': request.params.id,
        'relationships': {
          'fund': {
            'data': {
              'id': 'fd16392e-8a8e-4f04-8feb-0286513b2608',
              'type': 'funds',
            },
          },
        },
        'type': 'deposits',
      },
    });
  });
  this.patch('/deposits/:id', (db, request) => {
    if (request.params.id === 'f75cfdf1-99b5-4bf0-afcc-630d14133ffa') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test deposit patch error 1.',
        }, {
          detail: 'Test deposit patch error 2.',
        }],
      });
    }
    const params = JSON.parse(request.requestBody);
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': params.data.attributes.amount,
          'date': params.data.attributes.date,
        },
        'id': request.params.id,
        'type': 'deposits',
      },
    });
  });

  this.get('/expenses', (db, request) => {
    let data;
    if (request.queryParams.page === '2') {
      data = [{
        'attributes': {
          'amount': 1,
          'date': '2020-01-01',
          'description': 'Expense 26',
          'reimbursed-amount': 0,
        },
        'id': uuidv4(),
        'type': 'expenses',
      }];
    } else {
      data = [...Array(25).keys()].map((ind) => {
        return {
          'attributes': {
            'amount': 1,
            'date': '2020-01-01',
            'description': `Expense ${ind}`,
            'reimbursed-amount': 0,
          },
          'id': uuidv4(),
          'type': 'expenses',
        };
      });
    }
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': data,
      'meta': {
        'pages': 2,
        'total': 26,
      },
    });
  });
  this.post('/expenses', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.description
        && params.data.attributes.description === 'Error Expense') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test expense post error 1.',
        }, {
          detail: 'Test expense post error 2.',
        }],
      });
    }
    return new Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': params.data.attributes.amount,
          'date': params.data.attributes.date,
          'description': params.data.attributes.description,
          'reimbursed-amount': params.data.attributes['reimbursed-amount'],
        },
        'id': '40a4f2d5-fd93-46a3-bdcb-6828168dae28',
        'type': 'expenses',
      },
    });
  });
  this.delete('/expenses/:id', (db, request) => {
    if (request.params.id === '0033fbc2-3211-4e93-805d-b85b363bee39') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test expense delete error 1.',
        }, {
          detail: 'Test expense delete error 2.',
        }],
      });
    }
    return new Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/expenses/:id', (db, request) => {
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': 1000,
          'date': '2020-01-01',
          'description': 'Test Expense',
          'reimbursed-amount': 500,
        },
        'id': request.params.id,
        'relationships': {
          'household-member': {
            'data': {
              'id': '39eea981-1054-4614-959c-21a1f450c857',
              'type': 'household-members',
            },
          },
          'subcategory': {
            'data': {
              'id': '8e052327-006b-494d-a33b-0e2d951433f9',
              'type': 'subcategories',
            },
          },
          'vendor': {
            'data': {
              'id': '06808f93-f422-4145-bb0b-73dfb2619e6f',
              'type': 'vendors',
            },
          },
        },
        'type': 'expenses',
      },
    });
  });
  this.patch('/expenses/:id', (db, request) => {
    if (request.params.id === '20808e7b-c243-47f8-b936-ed7d7577d4d1') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test expense patch error 1.',
        }, {
          detail: 'Test expense patch error 2.',
        }],
      });
    }
    const params = JSON.parse(request.requestBody);
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': params.data.attributes.amount,
          'date': params.data.attributes.date,
          'description': params.data.attributes.description,
          'reimbursed-amount': params.data.attributes['reimbursed-amount'],
        },
        'id': request.params.id,
        'type': 'expenses',
      },
    });
  });

  this.get('/funds', (db, request) => {
    let data;
    if (request.queryParams.page === '2') {
      data = [{
        'attributes': {
          'name': 'Fund 26',
        },
        'id': uuidv4(),
        'type': 'funds',
      }];
    } else {
      data = [...Array(25).keys()].map((ind) => {
        return {
          'attributes': {
            'name': `Fund ${ind}`,
          },
          'id': uuidv4(),
          'type': 'funds',
        };
      });
    }
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': data,
      'meta': {
        'pages': 2,
        'total': 26,
      },
    });
  });
  this.post('/funds', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.name
        && params.data.attributes.name === 'Error Fund') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test fund post error 1.',
        }, {
          detail: 'Test fund post error 2.',
        }],
      });
    }
    return new Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': '86f6b9b3-b244-464c-a7e9-273b08d76230',
        'type': 'funds',
      },
    });
  });
  this.delete('/funds/:id', (db, request) => {
    if (request.params.id === 'd8967568-edcf-48c0-a48b-777dacf73061') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test fund delete error 1.',
        }, {
          detail: 'Test fund delete error 2.',
        }],
      });
    }
    return new Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/funds/:id', (db, request) => {
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Test Fund',
        },
        'id': request.params.id,
        'type': 'funds',
      },
    });
  });
  this.patch('/funds/:id', (db, request) => {
    if (request.params.id === '2883963b-63bc-493d-b90c-fbe18aca9be2') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test fund patch error 1.',
        }, {
          detail: 'Test fund patch error 2.',
        }],
      });
    }
    const params = JSON.parse(request.requestBody);
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': request.params.id,
        'type': 'funds',
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
    return new Response(200, {
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
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test household member post error 1.',
        }, {
          detail: 'Test household member post error 2.',
        }],
      });
    }
    return new Response(201, {
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
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test household member delete error 1.',
        }, {
          detail: 'Test household member delete error 2.',
        }],
      });
    }
    return new Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/household-members/:id', (db, request) => {
    return new Response(200, {
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
      return new Response(403, {
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
    return new Response(200, {
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
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': data,
      'meta': {
        'pages': 2,
        'total': 26,
      },
    });
  });
  this.post('/incomes', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.description
        && params.data.attributes.description === 'Error Income') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test income post error 1.',
        }, {
          detail: 'Test income post error 2.',
        }],
      });
    }
    return new Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'amount': params.data.attributes.amount,
          'date': params.data.attributes.date,
          'description': params.data.attributes.description,
        },
        'id': '1bb74fb6-30c1-480d-a0ed-4d7b36d93168',
        'type': 'incomes',
      },
    });
  });
  this.delete('/incomes/:id', (db, request) => {
    if (request.params.id === 'b2a60746-3bb4-47b6-978a-4af4cdb68d2e') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test income delete error 1.',
        }, {
          detail: 'Test income delete error 2.',
        }],
      });
    }
    return new Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/incomes/:id', (db, request) => {
    return new Response(200, {
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
      return new Response(403, {
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
    return new Response(200, {
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

  this.get('/monthly-reports/:id', (db, request) => {
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'actual': 0,
          'budget': 0,
          'income': 0,
        },
        'id': request.params.id,
        'type': 'monthly-reports',
      },
    });
  });

  this.get('/subcategories', (db, request) => {
    let data;
    if (request.queryParams.page === '2') {
      data = [{
        'attributes': {
          'name': 'Subcategory 26',
        },
        'id': uuidv4(),
        'type': 'subcategories',
      }];
    } else {
      data = [...Array(25).keys()].map((ind) => {
        return {
          'attributes': {
            'name': `Subcategory ${ind}`,
          },
          'id': uuidv4(),
          'type': 'subcategories',
        };
      });
    }
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': data,
      'meta': {
        'pages': 2,
        'total': 26,
      },
    });
  });
  this.post('/subcategories', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.name
        && params.data.attributes.name === 'Error Subcategory') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test subcategory post error 1.',
        }, {
          detail: 'Test subcategory post error 2.',
        }],
      });
    }
    return new Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': 'e79685f1-9419-4f88-b2d6-6b5c1f75758b',
        'type': 'subcategories',
      },
    });
  });
  this.delete('/subcategories/:id', (db, request) => {
    if (request.params.id === '1187060b-8321-4cfb-b3bf-f2d7a8b501b3') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test subcategory delete error 1.',
        }, {
          detail: 'Test subcategory delete error 2.',
        }],
      });
    }
    return new Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/subcategories/:id', (db, request) => {
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': 'Test Subcategory',
        },
        'id': request.params.id,
        'relationships': {
          'category': {
            'data': {
              'id': 'd44a4e6e-90d7-4574-b5c8-eb5c0772e1a1',
              'type': 'categories',
            },
          },
        },
        'type': 'subcategories',
      },
    });
  });
  this.patch('/subcategories/:id', (db, request) => {
    if (request.params.id === '1e89e24d-82bc-4f8b-a4e9-d0d2550bd0dd') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test subcategory patch error 1.',
        }, {
          detail: 'Test subcategory patch error 2.',
        }],
      });
    }
    const params = JSON.parse(request.requestBody);
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'name': params.data.attributes.name,
        },
        'id': request.params.id,
        'type': 'subcategories',
      },
    });
  });

  this.get('/subcategory-annual-reports', () => {
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': [...Array(5).keys()].map((ind) => {
        return {
          'attributes': {
            'year': 2015 + ind,
          },
          'id': uuidv4(),
          'type': 'subcategory-annual-reports',
        };
      }),
      'meta': {
        'pages': 2,
        'total': 6,
      },
    });
  });
  this.get('/subcategory-annual-reports/:id', (db, request) => {
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'year': 2021,
        },
        'id': request.params.id,
        'type': 'subcategory-annual-reports',
      },
    });
  });

  this.post('/users/login', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.email
        && params.data.attributes.email === 'hello@error.com') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test login error 1',
        }, {
          detail: 'Test login error 2',
        }],
      });
    }
    return new Response(200, {
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

  this.get('/users', (db, request) => {
    let data;
    if (request.queryParams.page === '2') {
      data = [{
        'attributes': {
          'email': 'user26@example.com',
          'first-name': 'User 26',
          'last-name': 'Tan-Chen',
        },
        'id': uuidv4(),
        'type': 'users',
      }];
    } else {
      data = [...Array(25).keys()].map((ind) => {
        return {
          'attributes': {
            'email': `user${ind}@example.com`,
            'first-name': `User ${ind}`,
            'last-name': 'Tan-Chen',
          },
          'id': uuidv4(),
          'type': 'users',
        };
      });
    }
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': data,
      'meta': {
        'pages': 2,
        'total': 26,
      },
    });
  });
  this.post('/users', (db, request) => {
    const params = JSON.parse(request.requestBody);
    if (params.data
        && params.data.attributes
        && params.data.attributes.email
        && params.data.attributes.email === 'error@example.com') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test user post error 1.',
        }, {
          detail: 'Test user post error 2.',
        }],
      });
    }
    return new Response(201, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'email': params.data.attributes.email,
          'first-name': params.data.attributes['first-name'],
          'last-name': params.data.attributes['last-name'],
          'token': 'token',
        },
        'id': 'bf24a57c-b5d4-49a6-9cfd-6fd97a8b5366',
        'type': 'users',
      },
    });
  });
  this.get('/users/:id', (db, request) => {
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'email': 'test@example.com',
          'first-name': 'Test',
          'last-name': 'User',
        },
        'id': request.params.id,
        'type': 'users',
      },
    });
  });
  this.patch('/users/:id', (db, request) => {
    if (request.params.id === '9bead3e6-b0d5-4bce-a855-c277084da274') {
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test user patch error 1.',
        }, {
          detail: 'Test user patch error 2.',
        }],
      });
    }
    const params = JSON.parse(request.requestBody);
    return new Response(200, {
      'Content-Type': 'application/vnd.api+json',
    }, {
      'data': {
        'attributes': {
          'email': params.data.attributes.email,
          'first-name': params.data.attributes['first-name'],
          'last-name': params.data.attributes['last-name'],
        },
        'id': request.params.id,
        'type': 'users',
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
    return new Response(200, {
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
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test vendor post error 1.',
        }, {
          detail: 'Test vendor post error 2.',
        }],
      });
    }
    return new Response(201, {
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
      return new Response(403, {
        'Content-Type': 'application/vnd.api+json',
      }, {
        errors: [{
          detail: 'Test vendor delete error 1.',
        }, {
          detail: 'Test vendor delete error 2.',
        }],
      });
    }
    return new Response(204, {
      'Content-Type': 'application/vnd.api+json',
    });
  });
  this.get('/vendors/:id', (db, request) => {
    return new Response(200, {
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
      return new Response(403, {
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
    return new Response(200, {
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
