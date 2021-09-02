# server

## Endpoints
>base url is http://localhost:3030

- each endpoint was built with all service methods (CRUD)

Translation of Feathers service to HTTP method: 
Feathers  //  HTTP method
.find()		GET	

.get()		GET	

.create()	POST	

.update()	PUT	

.patch()	PATCH	

.remove()	DELETE	



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
    "time_made": "2021-09-01T21:23:14.422Z",
    "added_by": 1,
    "comm_method": 2,
    "language_id": 1,
    "trigraph_code": "ACE",
    "digraph_code": "AF",
    "name": "signal",
    "alternate_name": null,
    "pc_id": 2,
    "rg_id": 3,
    "group_id": 2
}
````

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