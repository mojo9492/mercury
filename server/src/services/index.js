const mercuryUsers = require('./mercury_users/mercury_users.service.js');
const recipients = require('./recipients/recipients.service.js');
const groups = require('./groups/groups.service.js');
const languages = require('./languages/languages.service.js');
const permissions = require('./permissions/permissions.service.js');
const providerCapabilities = require('./provider_capabilities/provider_capabilities.service.js');
const sentMessages = require('./sent_messages/sent_messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(mercuryUsers);
  app.configure(recipients);
  app.configure(groups);
  app.configure(languages);
  app.configure(permissions);
  app.configure(providerCapabilities);
  app.configure(sentMessages);
};
