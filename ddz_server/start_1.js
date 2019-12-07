(function() {
	// Configuration Object for Dojo Loader:
	dojoConfig = {
		baseUrl : "", // Where we will put our packages
		async : true, // We want to make sure we are using the "modern" loader
		hasCache : {
			"host-node" : 1, // Ensure we "force" the loader into Node.js
								// mode
			"dom" : 0
		// Ensure that none of the code assumes we have a DOM
		},
		// While it is possible to use config-tlmSiblingOfDojo to tell the
		// loader that your packages share the same root path as the loader,
		// this really isn't always a good idea and it is better to be
		// explicit about our package map.
		__dirname : __dirname,
		packages : [ {
			name : "dojo",
			location : "dojo"
		}, {
			name : "dojox",
			location : "dojox"
		}, {
			name : "ddz-server",
			location : "ddz-server"
		} ],
		deps : [ "ddz-server/server" ]
	};

	// Now load the Dojo loader
	require("./dojo/dojo.js");
})()
