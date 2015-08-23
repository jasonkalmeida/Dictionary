var express = require('express');
var path = require('path');
var fs = require('fs');

exports.load = function(res, app, que) {
	res.sendFile(__dirname + '/public/test.html');
	
	//console.log("HEY THIS WORKS!");
	
	var hold = require('./issues.json');
	
	console.log(hold);
	

};