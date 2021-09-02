const { Service } = require('feathers-knex');

exports.ProviderCapabilities = class ProviderCapabilities extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'provider_capabilities'
    });
  }
};
