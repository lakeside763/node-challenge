# Node Challenge

Take home test for Node.js developers.

### Steps taken for the challenge solution

1. Refactoring of application connection
   - application server connection was refactor to allow the application connect over secure endpoints
2. Setting up of environment variable both for dev and test environment.
3. evn.local.example added to the application as a guide for setting up env variables.
4. Database Migration setup using DB-Migrate.
   - The essence of database migration is to allow easy database setup
   - Create database schema etc.
   - Allow to Alter database schema, fields etc if needed.
5. Prisma Setup
   - Prisma is consider as Next-generation Node.js and Typescript ORM
   - It helps to communcate with database using json data format
   - it also provide datatype typings
6. Domain Route Setup
7. Domain Service Setup
8. Unit testing and Integration testing for Domain route endpoints queries
9. Refactoring of User Route to more conform standard.
10. Update README.md files

### Starts the application

```
- Setup the env configuration using env.local.example file
- yarn prepdb (to setup database migration and seed sammple data)
- yarn start (to start the application).
- yarn test (to run test).
```
