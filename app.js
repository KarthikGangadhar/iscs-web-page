var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');

var index = require('./routes/index');
var news = require('./routes/news');
var alumini = require('./routes/alumini');
var conference_publication = require('./routes/conference_publication');
var current_member = require('./routes/current_member');
var gallery = require('./routes/gallery');
var journal_publication = require('./routes/journal_publication');
var power_systems = require('./routes/power_systems');
var sensors = require('./routes/sensors');
var showcase_projects = require('./routes/showcase_projects');
var bilogical_toxin = require('./routes/bilogical_toxin');
var glucose_sensing = require('./routes/glucose_sensing');
var high_throughput = require('./routes/high_throughput');
var low_noise = require('./routes/low_noise');
var ultra_wideband = require('./routes/ultra_wideband');
var memristors = require('./routes/memristors')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/news', news);
app.use('/alumini', alumini);
app.use('/conference_publication', conference_publication);
app.use('/current_member', current_member);
app.use('/gallery', gallery);
app.use('/journal_publication', journal_publication);
app.use('/power_systems', power_systems);
app.use('/sensors', sensors);
app.use('/showcase_projects', showcase_projects);
app.use('/bilogical_toxin', bilogical_toxin);
app.use('/glucose_sensing', glucose_sensing);
app.use('/high_throughput', high_throughput);
app.use('/low_noise', low_noise);
app.use('/ultra_wideband', ultra_wideband);
app.use('/memristors', memristors);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
