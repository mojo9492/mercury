const { Service } = require('feathers-knex');

exports.Permissions = class Permissions extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'permissions'
    });
  }
};
