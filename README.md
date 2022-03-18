# Node Challenge

Take home test for Node.js developers.

### Steps taken for the challenge solution

1. Refactoring of application connection
   - application server connection was refactor to allow the application connect over secure endpoints
2. Setting up of environment variable both for dev and test environment.
3. evn.local.example added to the application as a guide for setting up env variables.
4. Database package was setup to allow to manage Database migration and Prisma configuration
5. Database Migration setup using DB-Migrate.
   - The essence of database migration is to allow easy database setup
   - Create database schema etc.
   - Allow to Alter database schema, fields etc if needed.
6. Prisma Setup
   - Prisma is consider as Next-generation Node.js and Typescript ORM
   - It helps to communcate with database using json data format
   - it also provide datatype typings
7. Domain Routes Setup
8. Domain Services Setup
9. Unit testing and Integration testing for Domain route endpoints queries
10. Refactoring of User Routes to more conform standard.
11. Update README.md files

### Application setup

```
- Run yarn install (to install all the application packages).
```

### Env setup

```
- Setup .env.local file in the root directory for running the application
- Setup .env.test.local file the root directory for running test
- Use env.local.example file as a guide for setting up both the .env.local and env.test.local file
```

### Database Migration Setup

```
- Navigate into database package directory using (cd packages/database).
- Run yarn prepdb (to setup the database migration and seed sample data into database)
```

### Starts the application

```
- Run NODE_DEBUG=DEBUG yarn start
```

### Run test(Unit and Integration testing)

```
- Run yarn test
```

### Application Routes

1. Domain Route

```
GET Request
1. https://localhost:9001/expense/v1/get-all-expenses

2. https://localhost:9001/expense/v1/get-user-expenses
   - req.body data
   {
      "user_id": "da140a29-ae80-4f0e-a62d-6c2d2bc8a474",
      "pagination": {
         "skip": 0,
         "take": 10,
         "search": "Cafe"
      }
   }
```

2. User Route

```
GET Request
https://localhost:9001/user/v1/get-user-details/e17825a6-ad80-41bb-a76b-c5ee17b2f29d
```
