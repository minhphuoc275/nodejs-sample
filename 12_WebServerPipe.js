var http = require("http");
//call module fs to read html file in server
var fs = require("fs");

http.createServer(function(req, res){
	res.writeHead(200,{"Content-type":"text/html"});
	fs.createReadStream(__dirname + "/12_index.html").pipe(res);
}).listen(8080);