const assert = require('assert');
const app = require('../../src/app');

describe('\'berita\' service', () => {
  it('registered the service', () => {
    const service = app.service('berita');

    assert.ok(service, 'Registered the service');
  });
});
