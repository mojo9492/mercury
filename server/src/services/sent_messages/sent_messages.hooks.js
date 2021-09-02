

module.exports = {
    before: {
        all: [],
        find: [],
        get: [
            context => {
                const query = context.service.createQuery(context.params);
                query
                    .select('*')
                   .where({ 'sent_messages.sender_id': context.id })
                    .join('mercury_users', 'sent_messages.sender_id', '=', 'mercury_users.user_id')
                    // .join('mercury_users', 'sent_messages.recipient_id', '=','mercury_users.user_id')
                //.join('permissions', 'users_permissions_table.permission_id', '=', 'permissions.permission_id')
                //.join('sent_messages', 'mercury_users.user_id', '=', 'sent_messages.sender_id')
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
