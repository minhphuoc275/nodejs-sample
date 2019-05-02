var buffer = new Buffer("Hello","utf-8");
console.log("Show value buffer of Hello: ");
console.log(buffer);
console.log("--------------------------");
// buffer --> string
console.log("Show value <Buffer 48 65 6c 6c 6f> toString: ");
console.log(buffer.toString());
console.log("--------------------------");
console.log("Show value converted buffer to JSON: ");
console.log(buffer.toJSON());