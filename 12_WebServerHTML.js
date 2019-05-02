var http = require("http");
//call module fs to read html file in server
var fs = require("fs");

http.createServer(function(req, res){
	res.writeHead(200,{"Content-type":"text/html"});
	var data = fs.readFileSync(__dirname + "/12_index.html", "utf-8");
	data = data.replace("[REPLACE_STR]","Welcome !");
	res.end(data);
}).listen(8080);