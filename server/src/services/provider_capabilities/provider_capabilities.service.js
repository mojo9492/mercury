// Initializes the `provider_capabilities` service on path `/provider-capabilities`
const { ProviderCapabilities } = require('./provider_capabilities.class');
const createModel = require('../../models/provider_capabilities.model');
const hooks = require('./provider_capabilities.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/provider-capabilities', new ProviderCapabilities(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('provider-capabilities');

  service.hooks(hooks);
};
