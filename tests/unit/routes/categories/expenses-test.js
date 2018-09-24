import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | categories/expenses', function() {
  setupTest('route:categories/expenses', {
    needs: ['service:session'],
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
