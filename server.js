// Require dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Set up Express App and PORT
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware to serve static content from public folder
app.use(express.static('public'));

// Parse application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set Handlebars.
var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Require routing module so the server can access to it
app.use(require('./controllers/burgers_controller.js'));

// Start the server to begin listening
app.listen(PORT, function() {
    console.log('Server is listening on port ' + PORT);
});
