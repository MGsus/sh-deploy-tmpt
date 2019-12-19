const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require("passport");
const json2xls = require("json2xls");
const morgan = require('morgan');
const console = require('./log');

const routes = require("./www/routes/api/routes");

let app = express();

// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(json2xls.middleware);

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/app", routes);

// catch 404 and forward to the error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// app.use(function (err, req, res, next) {
//     // responds to client or test with error
//     res.status(err.status || 500).json({
//         message: "this is not the web page you're looking for. - obi-wan codenobi"
//     });
// });

module.exports = app;
