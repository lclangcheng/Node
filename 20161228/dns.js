
var dns = require('dns');
dns.lookup('www.baidu.com', function onLookup(err, address, family) {
	console.log('ip address:', address);
	dns.reverse(address, function (err, hostnames) {
		if (err) {
			console.log(err.stack);
		}

		console.log('reverse ' + address + ': ' + JSON.stringify(hostnames));
	});
});
