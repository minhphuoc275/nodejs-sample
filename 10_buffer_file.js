//call module using file
var fs = require("fs");

var content = fs.readFileSync(__dirname + "/10_DanhSachSkills.txt");
console.log("Filename: " + __dirname + "/10_DanhSachSkills.txt");
console.log("-------------------------------------------------");
console.log("Value buffer and content of file");
console.log("----- buffer -----");
console.log(content);
console.log("----- content -----");
console.log(content.toString());
console.log("----------------------------");