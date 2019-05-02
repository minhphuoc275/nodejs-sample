// 3 ways to create and call functions

function itotal(a,b){
	return a+b;
}

var x = itotal(7,8);
console.log("Total function: " + x);

function sayhello(){
	console.log("Hello everyone! This test from callFun fn()");
}

function callFun(fn){
	fn();
}

callFun(sayhello);

var callFuntionByVariable = function(){
	console.log("Test call function by define variable! --> callFuntionByVariable()");
}

callFuntionByVariable();
