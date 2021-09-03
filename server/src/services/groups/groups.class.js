const { Service } = require('feathers-knex');

exports.Groups = class Groups extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'groups'
    });
  }
};
