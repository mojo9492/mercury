const mercuryUsers = require('./mercury_users/mercury_users.service.js');
const recipients = require('./recipients/recipients.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(mercuryUsers);
  app.configure(recipients);
};
