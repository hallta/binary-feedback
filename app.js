const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(morgan('short'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static('static'))

app.get('/', function(req, res) {
    res.render('index.jade', {
    });
});

app.listen(3000, function() {
    console.log('App running ... ');
});
