exports.load = function(res, app) {
	res.sendFile(__dirname + '/public/test.html');
	
	console.log("HEY THIS WORKS!");

};