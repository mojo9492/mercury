const { Service } = require('feathers-knex');

exports.Recipients = class Recipients extends Service {
  constructor(options) {
    super({
      ...options,
      id: 'recipient_id',
      name: 'recipients'
    });
  }
};
