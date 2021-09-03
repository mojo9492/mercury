// Initializes the `recipients` service on path `/recipients`
const { Recipients } = require('./recipients.class');
const createModel = require('../../models/recipients.model');
const hooks = require('./recipients.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/recipients', new Recipients(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('recipients');

  service.hooks(hooks);
};
