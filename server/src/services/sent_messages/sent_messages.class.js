const { Service } = require('feathers-knex');

exports.SentMessages = class SentMessages extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'sent_messages'
    });
  }
};
