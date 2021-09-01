module.exports = {
    before: {
        all: [],
        find: [],
        get: [
            context => {
                console.log('CUSTOM HOOK CALLED');
                const query = context.service.createQuery(context.params);

                query
                    .select('*')
                    .where({ group_id: context.rg_id })
                    .innerJoin('groups', 'recipients_groups_id.group_id', 'groups.group_id');

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
        get: [
            context => {
                console.log('CUSTOM HOOK CALLED');
                const query = context.service.createQuery(context.params);

                query
                    .select('*')
                    .where({ group_id: context.rg_id })
                    .innerJoin('groups', 'recipients_groups_id.group_id', 'groups.group_id');

                context.params.knex = query;
                return context;
            }
        ],
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
