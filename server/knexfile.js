// Update with your config settings.

module.exports = {
	local: {
		client: 'pg',
		connection: process.env.DB_CONNECTION_STRING
	},

	development: {
		client: 'postgres',
		connection: process.env.DB_CONNECTION_STRING
	}
};
