const { Service } = require('feathers-knex');

exports.MercuryUsers = class MercuryUsers extends Service {
    constructor(options) {
        super({
            ...options,
            id: 'user_id',
            name: 'mercury_users'
        });
    }
};
