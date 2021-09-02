module.exports = {
	before: {
		all: [],
		find: [],
		get: [
            context => {
                const query = context.service.createQuery(context.params);

                query
                    .select('*')
                    .where({ 'recipients.recipient_id': context.id })
                    .join('languages', 'recipients.preferred_language', '=', 'languages.language_id')
                    .join('provider_capabilities', 'recipients.comm_method', '=', 'provider_capabilities.pc_id')
                    .join('recipients_groups_table', 'recipients.recipient_id', '=', 'recipients_groups_table.recipient_id')
    

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
