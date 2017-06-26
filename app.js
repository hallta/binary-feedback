const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const routing = require('./lib/routing');

app.use(morgan('short'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.locals.pretty = true;

app.use(express.static('static'))

routing.bootstrap(app);

app.listen(3000, function() {
    console.log('binary-feedback running ... ');
});
