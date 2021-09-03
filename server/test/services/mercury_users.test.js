const app = require('../../src/app');

describe('\'mercury_users\' service', () => {
  it('registered the service', () => {
    const service = app.service('mercury_users');
    expect(service).toBeTruthy();
  });
});
