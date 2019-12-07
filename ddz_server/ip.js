os = require('os');
child_proc = require('child_process');
var getIPApp = undefined;
var matches = [];
var pmHosts = [];
var filterRE = undefined;
var pingResult = '';
var pmHost = null;
console.log(os.platform());
if ('win32' == os.platform()) {
	getIPApp = child_proc.spawn("ipconfig", null);
	// only get the IPv4 address
	filterRE = /\b(IPv4|IP\s)[^:\r\r\n]+:\s+([^\s]+)/g;
} else if ('darwin' == os.platform()) {
	getIPApp = child_proc.spawn("ifconfig", null);
	// only get the IPv4 address
	filterRE = /\b(IPv4|IP\s)[^:\r\r\n]+:\s+([^\s]+)/g;
} else if ('android' == os.platform()) {
	getIPApp = child_proc.spawn("ifconfig", null);
	// only get the IPv4 address
	filterRE = /\b(IPv4|IP\s)[^:\r\r\n]+:\s+([^\s]+)/g;
} else {
	// TODO: we need try to get the local IP for other os, such as unix/mac
	return false;
}

getIPApp.on('exit', function(code, signal) {
	console.log(pingResult);
	matches = pingResult.match(filterRE) || [];
	for ( var i = 0; i < matches.length; i++) {
		var host = matches[i].split(':')[1];

		// trim the spaces in the string's start/end position.
		host = host.replace(/(^[\s]*)|([\s]*$)/g, "");
		pmHosts.push(host);
	}

	if (pmHosts.length > 0)
		pmHost = pmHosts[0];

	// do other things
	console.log(pmHost);

});

getIPApp.stdout.on('data', function(data) {
	// get ping result.
	pingResult += data.toString();
});
// var os = require('os');
// var ifaces = os.networkInterfaces();
// for ( var dev in ifaces) {
// var alias = 0;
// ifaces[dev].forEach(function(details) {
// if (details.family == 'IPv4') {
// console.log(dev + (alias ? ':' + alias : ''), details.address);
// ++alias;
// }
// });
// }
