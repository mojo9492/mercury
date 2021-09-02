exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('mercury_users')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('mercury_users').insert([
				{ username: 'JRambo', password: 'secret', email: "admin@localhost.com"},
				{ username: 'JMatrix', password: 'secret', email: "jason@yahoo.com" },
				{ username: 'MForce', password: 'secret', email: "mark@gmail.com" }
			]);
		});
};
