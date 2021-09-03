// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    // Add your custom middleware here. Remember that
    // in Express, the order matters.
    const knex = require('knex')({
        client: 'pg',
        connection: process.env.DB_CONNECTION_STRING
    })

    app.post('/login', async (req, res) => {
        try {
            const result = await knex
                            .select('*').from('mercury_users').where({ email: req.body.email })
                            res.status(200).send(result)
        }
        catch (e) {
            res.status(400).send(e)
        }
    })
};


