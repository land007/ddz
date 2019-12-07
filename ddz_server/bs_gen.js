var fs = require('fs');
var hello = require('hello');
var name = 'start_1.js';
fs.readFile(__dirname + '/' +name, {encoding: 'utf-8'}, function(err, data) {
	console.log(data);
	var bs = hello.hello(data);
	fs.writeFile(__dirname + '/' + name + '.bs', bs, function(err){//会先清空原先的内容
		if (err) {
			console.error(err);
		}
	});
	console.log(bs);
});