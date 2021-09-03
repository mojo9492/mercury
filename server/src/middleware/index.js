// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    // Add your custom middleware here. Remember that
    // in Express, the order matters.
    const knex = require('knex')({
        client: 'pg',
        connection: process.env.DB_CONNECTION_STRING
    })

    //endpoint to login, requires a:
    // {
    //     email: req.body.email,
    //     password: req.body.password
    // }
    app.post('/login', (req, res) => {
        const query = knex
            .select('*')
            .from('mercury_users')
            .where({
                email: req.body.email,
                password: req.body.password
            })
            .then(data => res.status(200).send(data))
    })

    app.get('/test', (req, res) => {
        knex
            .select('*')
            .from('mercury_users')
            .then((data) => res.status(200).send(data))
    })
}


