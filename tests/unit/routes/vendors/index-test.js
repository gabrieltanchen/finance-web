import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | vendors/index', function() {
  setupTest('route:vendors/index', {
    needs: ['service:session'],
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
