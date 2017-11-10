const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const expressStaticGzip = require("express-static-gzip");
// var compression = require('compression')
dotenv.load({ path: '.env' });

const PORT = process.env.PORT || 3001;
const app = express();
// const sequelize = require('./Sequelize');

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// Middleware
// app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')));

// Controllers
const userCtrl = require('./controllers/userCtrl');

// Routes
app.post('/sign-up', userCtrl.postUser);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


// Server
app.listen(PORT, () => {
  console.log(`App is up on port ${PORT}`);
});
