import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | categories/subcategories', function() {
  setupTest('route:categories/subcategories', {
    needs: ['service:session'],
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
