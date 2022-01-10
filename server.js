//import express
const express = require('express');
//import (CRUD RESTful API) routes
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

//express server at PORT 3001 (or any port #) 
//credentials hidden in a .env file that does not get pushed to github as it is in the .gitignore file
const app = express();
const PORT = process.env.PORT || 3001;

//express middleware to parse the Request Object
//parses JSON object
app.use(express.json());
//parses strings or arrays
app.use(express.urlencoded({ extended: true }));

//use the API routes imported above
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
