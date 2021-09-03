const app = require('../../src/app');

describe('\'provider_capabilities\' service', () => {
  it('registered the service', () => {
    const service = app.service('provider-capabilities');
    expect(service).toBeTruthy();
  });
});
