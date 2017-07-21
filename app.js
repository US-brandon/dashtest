var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.post('/data', function(req, res) {
	var data = req.body.data;
	console.log(data);
});

app.get('/', function(req, res) {
	app.render('HI');
});

app.listen(3030);