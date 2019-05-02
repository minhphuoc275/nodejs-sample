// create OOP Person (class)
var person = {
	Ssurname	:	"Tran",
	Sfirstname	:	"Phuoc",
	fwelcome	:	function(){
		console.log("Hello " + this.Ssurname + " " + this.Sfirstname);
	}
}

console.log("Show value after call function in class person: ");
person.fwelcome();

console.log("Show Ssurname variable in class person: " + person["Sfirstname"]);