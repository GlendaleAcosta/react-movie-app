const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const expressStaticGzip = require("express-static-gzip");
// var compression = require('compression')
dotenv.load({ path: '.env' });

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
// app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('../client'));
app.use(express.static(path.join(__dirname, '../build')));
// app.use("/", expressStaticGzip("/my/rootFolder/"))
// app.get('*.js', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

// Controllers


// Routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


// Server
app.listen(PORT, () => {
  console.log(`App is up on port ${PORT}`);
});
