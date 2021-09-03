

module.exports = {
  before: {
    all: [],
    find: [],
    get: [
        context => {
            const query = context.service.createQuery(context.params);
            query
                .select('*')
                .where({ 'groups.group_id': context.id })
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
