const express = require('express');
const http = require('http');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const app = express();

app.use(cookieParser());
app.use(session({
    secret: process.env.secret ? process.env.secret : "123654",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000,
    }
}));

// // CSRF protection
// const csrfMiddleware = csrf({ cookie: true });
// app.use(csrfMiddleware);

// app.use(function (req, res, next) {
//     var token = req.csrfToken();
//     res.locals.csrfToken = token;
//     next();
// });


// Create a server
var server = http.createServer(app);

// Base url
app.locals.baseURL = "localhost:8080/";

// Set the templating engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use Static files directory
app.use('/static', express.static('public'));

// Set global useable variables
app.locals.baseURL = 'http://localhost:8080/';

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


/**
 * Template import guide
 * eg. If you have create a template in ejs view/home.ejs
 * Now to render this template create
 * var data = {};
 * data.view = 'home.ejs' (assign the relative path the views directory to render the home.ejs template)
 */

var home = require('./controllers/home');
app.use('/', home);

// Admin router
var admin = require('./controllers/admin');
app.use('/admin', admin);

// Authentication router
var auth = require('./controllers/auth');
app.use('/auth', auth);

var voter = require('./controllers/voter');
app.use('/voter', voter);

// Listen the server port
server.listen('8080', () => console.log('Server is up and running at port 8080'));
