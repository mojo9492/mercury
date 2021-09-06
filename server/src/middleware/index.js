const STATUS_200_MESSAGE = "Good Request";
const STATUS_400_MESSAGE = "Improper Data Received";
const STATUS_404_MESSAGE = "No Data Found";
const STATUS_422_MESSAGE = "Unable to Process Request";

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

    app.get('/languages', (req, res) => {
        knex('languages').select('*')
            .then((result) => {
                if (result.length < 1) {
                    res.status(404).send(STATUS_400_MESSAGE);
                } else {
                    res.status(200).json(result);
                }
            })
    });

    app.get('/test', (req, res) => {
        knex
            .select('*')
            .from('mercury_users')
            .then((data) => res.status(200).send(data))
    })

    app.get('/recipients/id/:groupID', (req, res) => {
        let id = parseInt(req.params.groupID);

        if (id === undefined || typeof id !== 'number') {
            res.status(400).send(STATUS_400_MESSAGE);
        } else {
            knex.raw(`SELECT * FROM recipients WHERE recipient_id IN
                 (SELECT recipient_id FROM recipients_groups_table WHERE group_id IN
                 (SELECT group_id FROM groups WHERE group_id = ${id}))`)
                .then((result) => {
                    if (result.rows.length < 1) {
                        res.status(200).send([]);
                    } else {
                        res.status(200).json(result.rows);
                    }
                })
        }
    });

    app.post('/recipients/withGroupID/:groupID', (req, res) => {
        let firstName = req.body.first_name;
        let lastName = req.body.last_name;
        let phoneNumber = req.body.phone_number;
        let language = parseInt(req.body.language);
        let commMethod = parseInt(req.body.comm_method);
        let groupID = parseInt(req.params.groupID);

        let returnObject = [];
        let languageID = -1;

        if (firstName === undefined || typeof firstName !== 'string' || firstName === '' ||
            lastName === undefined || typeof lastName !== 'string' || lastName === '' ||
            phoneNumber === undefined || typeof phoneNumber !== 'string' || phoneNumber === '' ||
            language === undefined || typeof language !== 'number' || language === -1 ||
            commMethod === undefined || typeof commMethod !== 'number' || commMethod === -1 ||
            groupID === undefined || typeof groupID !== 'number' || groupID < 0) {
            res.status(400).send(STATUS_400_MESSAGE);
        } else {
            // check to make sure a group exists with the provided group ID
            knex.raw(`SELECT 1 FROM groups WHERE group_id = ${groupID}`)
                .then((result) => {
                    if (result.rowCount !== 1) {
                        res.status(400).send('There is no Group in the Database with that ID to add a user to');
                    } else {
                        knex.insert({
                            first_name: firstName,
                            last_name: lastName,
                            phone_number: phoneNumber,
                            preferred_language: language,
                            comm_method: commMethod
                        })
                            .returning('*')
                            .into('recipients')
                            .then((result) => {
                                console.log('RESULT', result);
                                if (!result) {
                                    res.status(422).send(STATUS_422_MESSAGE);
                                } else {
                                    returnObject = result;
                                    knex.insert({
                                        recipient_id: result[0].recipient_id,
                                        group_id: groupID
                                    })
                                        .into('recipients_groups_table')
                                        .then((result) => {
                                            if (result.rowCount.length < 1) {
                                                res.status(422).send(STATUS_422_MESSAGE);
                                            } else {
                                                res.status(200).json(returnObject);
                                            }
                                        })
                                }
                            })
                    }
                })

        }
    });
}


