import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | sign-up', function() {
  setupTest('route:sign-up', {
    needs: ['service:session'],
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
