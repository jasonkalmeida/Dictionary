var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


console.log("hi");
app.use(express.static(__dirname + '/public'));




app.post('/myaction', function (req, res) {
	var s = req.body.local
	console.log(s);
	
	var lolroll = require('./query.js');
	
	lolroll.load(res, app);
	
	
});








app.listen(process.env.PORT || 3000);


console.log("Running at Port 3000");