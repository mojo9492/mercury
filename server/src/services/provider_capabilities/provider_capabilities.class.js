const { Service } = require('feathers-knex');

exports.ProviderCapabilities = class ProviderCapabilities extends Service {
  constructor(options) {
    super({
      ...options,
      id: 'pc_id',
      name: 'provider_capabilities'
    });
  }
};
