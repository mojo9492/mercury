# mercury(api)

## setup
- clone project
- navigate to mercury/server
  - ``npm install`` or ``yarn install``
- navigate back to project root
- run ``docker compose up --build -d`` (omit the -d if you want the process to attach)
- server will be up on 3030

## usage
the server uses many services to access resources in the form of endpoints:
- /groups
- /languages
- /mercury_users
- /permissions
- /provider_capabilities
- /recipients
- /recipients_groups_table
- /sent_messages
- /users_permissions_table

