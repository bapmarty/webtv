const express = require("express");
const mongoose = require('mongoose');
const favicon = require("serve-favicon");
var bodyParser = require('body-parser');
var cors = require("cors");
require('dotenv').config();
const app = express();

// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// favicon
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use((req, res, next) => {
  const origin = req.get('Access-Control-Allow-Origin');
  
  // TODO Add origin validation
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');
  
  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
});

// Default route
app.get('/', (req, res) => {
  console.log("[ROUTE]: /");
  res.json('hello world !');
})

// Import routes
require('./Routes/auth.routes')(app);
require('./Routes/user.routes')(app);
require('./Routes/stream.routes')(app);

// Mongo connection
mongoose.connect(`mongodb://${process.env.MONGO_ROOT_USERNAME}:${encodeURIComponent(process.env.MONGO_ROOT_PASSWORD)}@${process.env.MONGO_HOST}:27017/${process.env.MONGO_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log("Successfully connected to the database"))
  .catch(e => {
    console.log(e);
    process.exit();
  });

// Port listen
app.listen(process.env.WEBTV_API_PORT, function () {
  console.log('localhost listening on port ' + process.env.WEBTV_API_PORT + '!');
})
