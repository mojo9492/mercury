// Initializes the `sent_messages` service on path `/sent-messages`
const { SentMessages } = require('./sent_messages.class');
const createModel = require('../../models/sent_messages.model');
const hooks = require('./sent_messages.hooks');

module.exports = function (app) {
  const options = {
    id: 'sent_messages_id',
	name: 'sent_messages',
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sent-messages', new SentMessages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sent-messages');

  service.hooks(hooks);

};
