var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/app'));
var port = Number(process.env.PORT || 3000);
app.listen(port, function() { 
});