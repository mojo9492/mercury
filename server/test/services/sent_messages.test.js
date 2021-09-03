const app = require('../../src/app');

describe('\'sent_messages\' service', () => {
  it('registered the service', () => {
    const service = app.service('sent-messages');
    expect(service).toBeTruthy();
  });
});
