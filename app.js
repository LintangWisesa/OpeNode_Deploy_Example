var express = require('express');
var bodyParser = require('body-parser');
var compress = require('compression');
var renderer = require('./routes/renderer');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(compress());
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', renderer);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    var html = '<!DOCTYPE html>';
    html+= '<html>';
    html+= '  <head>';
    html+= '    <title></title>';
    html+= '  </head>';
    html+= '  <body>';
    html+= '    <h1>'+err.message+'</h1>';
    html+= '    <h2>'+err.status+'</h2>';
    html+= '    <h2>More information: lintangwisesa@ymail.com</h2>';
    html+= '    <pre>'+err.stack+'</pre>';
    html+= '  </body>';
    html+= '</html>';
    res.send(html);
}); 

module.exports = app;
