var conf = require('./index.js');

async function test(){
	// var config = conf({
	// 	name: "demo",
	// 	state: 1
	// }, "./config.json");
	
	this.filename = "./config.json";
	var config = conf({
		name: "demo",
		state: 2
	});
	config.name = "test";
	config.sort = 2;
	
	config = conf(null, this.filename);
	console.log(config);
	config.age = 26;
}
test();