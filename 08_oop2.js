function course(name, tuition){
	this.sName = name;
	this.iTuition = tuition;
}

course.prototype.describe = function(){
	console.log("Hello " + this.sName + " " + this.iTuition);
}

//Create oop nodejs with name is "NodeJS Programming" and tuition is 100 USD
var nodejsCourse = new course("NodeJS Programming", 100);

nodejsCourse.describe();