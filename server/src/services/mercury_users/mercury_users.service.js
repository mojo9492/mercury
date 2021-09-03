// Initializes the `mercury_users` service on path `/mercury_users`
const { MercuryUsers } = require('./mercury_users.class');
const createModel = require('../../models/mercury_users.model');
const hooks = require('./mercury_users.hooks');
//const filters = require('./mercury-users.filters');


module.exports = function (app) {
  const options = {
    id: 'user_id',
	name: 'mercury_users',
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mercury-users', new MercuryUsers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mercury-users');

  service.hooks(hooks);

//   if (service.filter) {
// 		service.filter(filters);
// 	}
};
