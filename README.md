# mdph-evaluation
projet de l'outil d'evaluation pour les MDPH
================================================

[![Build Status](https://circleci.com/gh/sgmap/mdph-evaluation.svg?style=svg)](https://circleci.com/gh/sgmap/mdph-evaluation)

## Getting Started

### Prerequisites

- [Node.js and npm](https://nodejs.org/) Node ^6.5.9, npm ^3.*
- [yarn](https://yarnpkg.com/) ^0.24
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod` ^3.0

### Testing

#### Unit tests

- `yarn test` will run the tests with karma and mocha.
  - You can also add `:front` or `:back` to run either front or back tests.

## Running

### Running the app in development

1. Run `yarn install` to install server dependencies

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `yarn dev` to start the development server. It should automatically open the client in your browser when ready.

### Running the app in production

1. Run `yarn build` to install server dependencies

2. Run `yarn start` to run the app in production mode

## Deployment

We use [PM2 deploy](http://pm2.keymetrics.io/docs/usage/deployment/), `pm2 deploy pm2.json` to deploy the application and run it.

## Use

Add manualy data in MongoDB.

### User

{
    "_id" : ObjectId("589adfdf4dcb8920e88eb377"),
    "name" : "evaluateur",
    "email" : "evaluateur@evaluation.cnsa.fr",
    "hashedPassword" : "Vg0+y7TKEOn4ul4MDBJtccet5lZpFAN3io2w7fCDu5v6I2/FpJwGsrHDjYv4dmoJMOuAIgwQpmeWWMzfbsGdHA==", // mot de passe (encrypted with SHA1)
    "salt" : "OnBOl0aN4uo7yFGZhTOhGQ==",
    "mdph" : ObjectId("560bdb46767f719e73c9fcbd"),
    "__v" : 0
}

### Mdph

{
    "_id" : ObjectId("560bdb46767f719e73c9fcbd"),
    "name" : "test",
    "zipcode" : "test",
    "__v" : 0
}
