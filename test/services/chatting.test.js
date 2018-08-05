const assert = require('assert');
const app = require('../../src/app');

describe('\'chatting\' service', () => {
  it('registered the service', () => {
    const service = app.service('chatting');

    assert.ok(service, 'Registered the service');
  });
});
