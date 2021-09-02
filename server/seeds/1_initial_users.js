exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('mercury_users')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('mercury_users').insert([
				{ username: 'JRambo', email: 'JRambo@gmail.com', password: 'secret' },
				{ username: 'JMatrix', email: 'JMatrix@gmail.com', password: 'secret' },
				{ username: 'MForce', email: 'MForce@gmail.com', password: 'secret' }
			]);
		});
};
