

module.exports = {
  before: {
    all: [],
    find: [],
    get: [
        context => {
            const query = context.service.createQuery(context.params);
            query
                .select('*')
                .where({ 'mercury_users.user_id': context.id })
                .join('users_permissions_table', 'mercury_users.user_id', '=', 'users_permissions_table.user_id')
                .join('permissions', 'users_permissions_table.permission_id', '=', 'permissions.permission_id')
                //.join('sent_messages', 'sent_messages.user_id', '=', 'sent_messages.sender_id')
            context.params.knex = query;
            return context;
        }
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
