# server

## Endpoints
>base url is http://localhost:3030

- each endpoint was built with all service methods (CRUD)

Translation of Feathers service to HTTP method: 
Feathers  //  HTTP method

.find()	----	GET	

.get()	----	GET	

.create() ----	POST	

.update() ----	PUT	

.patch() ----	PATCH	

.remove() ----	DELETE	



```/recipients```
- a get request will return all recipients
- a get request with a req.param of the recipient_id will return an object that looks like:

```
{
    "recipient_id": 2,
    "first_name": "Gordon",
    "middle_name": null,
    "last_name": "Ramsey",
    "phone_number": "2222222222",
    "preferred_language": 1,
    "comments": null,
    "time_made": "2021-09-02T21:28:48.394Z",
    "added_by": 1,
    "comm_method": 2,
    "language_id": 1,
    "trigraph_code": "ACE",
    "digraph_code": "AF",
    "name": "Group2",
    "alternate_name": null,
    "pc_id": 2,
    "rg_id": 3,
    "group_id": 2,
    "description": "CBSD -- Non-Vetted Interpreters"
}
```
```/mercury_users```
- a get will get all users

- a get of /mercury_users/:user_id will return users with their permissions and  sent messages in an object like this:

```
{
    "user_id": 3,
    "username": "MForce",
    "password": "secret",
    "email": "mark@gmail.com",
    "up_id": 3,
    "permission_id": 1,
    "name": "super_doer"
}
```

```/sent-messages```
- a get request will return all sent messages in the database
```
{
    "total": 9,
    "limit": 10,
    "skip": 0,
    "data": [
        {
            "sent_messages_id": 1,
            "sender_id": 1,
            "recipient_id": 1,
            "content": "Rosebud",
            "time_made": "2021-09-02T21:28:48.403Z"
        },
        {
            "sent_messages_id": 2,
            "sender_id": 1,
            "recipient_id": 2,
            "content": "Rosebud",
            "time_made": "2021-09-02T21:28:48.403Z"
        },
        {
            "sent_messages_id": 3,
            "sender_id": 1,
            "recipient_id": 3,
            "content": "Rosebud",
            "time_made": "2021-09-02T21:28:48.403Z"
        },
        {
            "sent_messages_id": 4,
            "sender_id": 2,
            "recipient_id": 1,
            "content": "Goosebumps was an okay show back in the day",
            "time_made": "2021-09-02T21:28:48.403Z"
        },
        {
            "sent_messages_id": 5,
            "sender_id": 2,
            "recipient_id": 2,
            "content": "Goosebumps was an okay show back in the day",
            "time_made": "2021-09-02T21:28:48.403Z"
        },
        {
            "sent_messages_id": 6,
            "sender_id": 2,
            "recipient_id": 3,
            "content": "Goosebumps was an okay show back in the day",
            "time_made": "2021-09-02T21:28:48.403Z"
        },
        {
            "sent_messages_id": 7,
            "sender_id": 3,
            "recipient_id": 1,
            "content": "Did you see that movie Tomorrow War?",
            "time_made": "2021-09-02T21:28:48.403Z"
        },
        {
            "sent_messages_id": 8,
            "sender_id": 3,
            "recipient_id": 2,
            "content": "Did you see that movie Tomorrow War?",
            "time_made": "2021-09-02T21:28:48.403Z"
        },
        {
            "sent_messages_id": 9,
            "sender_id": 3,
            "recipient_id": 3,
            "content": "Did you see that movie Tomorrow War?",
            "time_made": "2021-09-02T21:28:48.403Z"
        }
    ]
}
```

```/sent-messages/2```
```
- a get request will the specific message with sent_messages_id=2:
        {   
            "sent_messages_id":2,
            "sender_id":1,
            "recipient_id":2,
            "content":"Rosebud",
            "time_made":"2021-09-02T21:28:48.403Z"}

```
```/groups```
- a get request will return all groups in the database:
{"total":3,"limit":10,"skip":0,"data":[{"group_id":1,"name":"Group1","description":"CBSD -- Vetted Interpreters","time_made":"2021-09-02T21:28:48.394Z"},{"group_id":2,"name":"Group2","description":"CBSD -- Non-Vetted Interpreters","time_made":"2021-09-02T21:28:48.394Z"},{"group_id":3,"name":"Group3","description":"CBSD -- Linguists","time_made":"2021-09-02T21:28:48.394Z"}]}

```/groups/3```
- a get request with a group id passed will return that groups from the database:
```
{"group_id":2,
"name":"Group2",
"description":"CBSD -- Non-Vetted Interpreters",
"time_made":"2021-09-02T21:28:48.394Z"}
```


Available endpoints : 
    /groups : 
    /languages: 
    /mercury-users:
    /permissions:
    /provider-capabilites:
    /recipients:
    /recipient-groups:
    /sent-messages:
    /users-permissions-table: 

## Adding a custom endpoint

>if you want to create a custom endpoint you need to place an express style method in ```/src/app.js``` under the :

>```app.use('/', feathers.static(app.get('public')));``` line

for example:
```
// Host the public folder
app.use('/', feathers.static(app.get('public')));

app.get('/login', (req, res) => {
    res.status(200).send('it works')
})
```