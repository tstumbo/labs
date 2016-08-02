var ex = require("./script.js");
var http = require("http");

// console.log(ex[selection]);

// http.createServer(function(request, response) { 
// 	var selection = Math.floor(Math.random()*ex.length)
// 	response.writeHead(200, { "Content-type": "text/plain" }); 
// 	response.write(ex[selection]);
// 	response.end();
// }).listen(8888);



var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var lyrics = ["I fell in love with the girl at the rock show", 
	"yeah! yeah!", 
	"Lights will guide you home",
	"525,000 minutes"
	];

var selection = Math.floor(Math.random()*lyrics.length)

app.get('/', function (req, res) {
  res.send(lyrics[selection]);

});


app.get('/api/lyrics', function (req, res) {
  res.send(lyrics);

});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});