const { Service } = require('feathers-knex');

exports.Languages = class Languages extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'languages'
    });
  }
};
