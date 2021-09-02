module.exports = {
    before: {
        all: [],
        find: [],
        get: [
            context => {
                const query = context.service.createQuery(context.params);

                query
                    .select('*').from('recipients_groups_table')
                    .where({ recipient_id: context.id })
                    .innerJoin('groups', 'recipients_groups_table.group_id', 'groups.group_id');
                    //.innerJoin('recipients', 'recipients_groups_table.recipient_id', 'recipients.recipient_id');

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
