const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');

//express server at PORT 3001 (can change to any available port) 
//credentials hidden in a .env file that does not get pushed to github as it is in the .gitignore file
const app = express();
const PORT = process.env.PORT || 3001;

//express middleware to parse the Request Object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}!`));
});