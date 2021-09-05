# mercury api <i>local</i>

# usage
1. clone the branch ``git clone -b next git@github.com:mojo9492/mercury.git --recursive``
2. authenticate registry access at p1 il2 ``docker login registry.il2.dso.mil``
3. run ``yarn local:up`` or ``npm run local:up`` 
    - starts a postgres container and mercury-api container
    - migrates back and then migrates to latest and seeds postgres
    - starts the server with nodemon to view changes on 8080 locally