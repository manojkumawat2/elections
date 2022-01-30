var express = require('express');
var http = require('http');
var app = express();

// Create a server
var server = http.createServer(app);

// Set the templating engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use Static files directory
app.use('/static', express.static('public'));

// Set global useable variables
app.locals.baseURL = 'http://localhost:8080/';

// Import home routers
/**
 * Template import guide
 * eg. If you have create a template in ejs view/home.ejs
 * Now to render this template create
 * var data = {};
 * data.view = 'home.ejs' (assign the relative path the views directory to render the home.ejs template)
 */
var home = require('./controllers/home');
app.use('/', home);

// Listen the server port
server.listen('8080', () => console.log('Server is up and running at port 8080'));