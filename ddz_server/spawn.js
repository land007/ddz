var spawn = require('child_process').spawn;
var child  = spawn('ifconfig', [ ]);
console.log('Spawned child pid: ' + child.pid);
if (child.stdout) {
	// node < 0.8 doesn't understand the 'inherit' option, so pass through
	// manually
	child.stdout.addListener("data", function(chunk) {
		console.log('++++++++++++' + chunk);
	});
	child.stderr.addListener("data", function(chunk) {
		console.log('++++++++++++' + chunk);
	});
}
console.log('++++++++++++stdout:');
child.addListener("exit", function(code) {
	console.log('++++++++++++' + code);
});
console.log('++++++++++++exit:');
child.stdin.end();