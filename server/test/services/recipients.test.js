const app = require('../../src/app');

describe('\'recipients\' service', () => {
  it('registered the service', () => {
    const service = app.service('recipients');
    expect(service).toBeTruthy();
  });
});
