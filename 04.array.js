//04.Array.js
var strArray = ["Orange","strArrayo","Banana"];
//position 			0		  1			2

console.log("------------- Fruit Array ------------------");

console.log("There is " + strArray.length + " values of fruit Array");
i = 0;
while (i < strArray.length) {
	console.log("The " + (i+1) + " value of Fruit Array is: " + strArray[i]);
	i = i + 1;
}
console.log("-------------- Fruit Array after add Coconut -----------------");
//Add more fruit
strArray.push("Coconut");
console.log("There is " + strArray.length + " values of fruit Array");
i = 0;
while (i < strArray.length) {
	console.log("The " + (i+1) + " value of Fruit Array is: " + strArray[i]);
	i = i + 1;
}
console.log("--------------- How to split string to array ----------------");

var strWord = 'The quick brown fox jumps over the lazy dog.';
console.log("The string is: " + strWord);
// Split strWord to array "words"
var words = strWord.split(' ');
console.log("There is " + words.length + " values of fruit Array");
for (i=0; i<words.length; i++){
	console.log("The " + (i+1) + " value of Words is: " + words[i]);
}