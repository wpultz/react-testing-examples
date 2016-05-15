var path = require('path');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000);
console.log('started on port 8000');
