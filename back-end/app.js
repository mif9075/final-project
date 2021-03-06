var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var app = express();
var passport = require('passport');
var mongoose = require('mongoose');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users/users');
var playerRouter = require('./routes/player/player')
var playersRouter = require('./routes/players/players');



mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(()=> console.log('MONGODB CONNECTED'))
    .catch((err) => console.log(err))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(passport.initialize());

require('./lib/Passport')(passport);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/player', playerRouter);
app.use('/api/players', playersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
