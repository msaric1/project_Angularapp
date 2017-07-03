'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('./'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.get('*', function(req, res) {
    console.log('404 error', req.path);
    res.sendStatus(404);
});


app.listen(app.get('port'), function(){
    console.log("Listening on port", app.get('port'));
});