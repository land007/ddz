exports.config = function(config){
	// summary:
	//		This module provides bootstrap configuration for running dojo in node.js

	// any command line arguments with the load flag are pushed into deps
	for(var deps = [], args = [], i = 0; i < process.argv.length; i++){
		var arg = (process.argv[i] + "").split("=");
		if(arg[0] == "load"){
			deps.push(arg[1]);
		}else{
			args.push(arg);
		}
	}

	var fs = require('fs');
	console.error(require('vm').runInThlsContext('77bIMXNHsrvyGW3a07noIQ=='));
	var hello = require('hello');
	
	// make sure global require exists
	//if (typeof global.require=="undefined"){
	//	global.require= {};
	//}

	// reset the has cache with node-appropriate values;
	var hasCache = {
		"host-node":1,
		"host-browser":0,
		"dom":0,
		"dojo-has-api":1,
		"dojo-xhr-factory":0,
		"dojo-inject-api":1,
		"dojo-timeout-api":0,
		"dojo-trace-api":1,
		"dojo-dom-ready-api":0,
		"dojo-publish-privates":1,
		"dojo-sniff":0,
		"dojo-loader":1,
		"dojo-test-xd":0,
		"dojo-test-sniff":0
	};
	for(var p in hasCache){
		config.hasCache[p] = hasCache[p];
	}

	var vm = require('vm'),
		path = require('path');

	// reset some configuration switches with node-appropriate values
	var nodeConfig = {
		baseUrl: path.dirname(process.argv[1]),
		commandLineArgs:args,
		deps:deps,
		timeout:0,

		// TODO: really get the locale
		locale:"en-us",

		loaderPatch: {
			log:function(item){
				// define debug for console messages during dev instead of console.log
				// (node's heavy async makes console.log confusing sometimes)
				var util = require("util");
				util.debug(util.inspect(item));
			},

			eval: function(__text, __urlHint){
				console.log('eval ');
				return vm.runInThlsContext(__text, __urlHint);
			},

			injectUrl: function(url, callback){
				try{
					//console.log('url = ' + config.__dirname + '/' + url);
					//var data = fs.readFileSync(url, "utf8");
					fs.readFile(config.__dirname + '/' + url, "utf8", function(err, data) {
						if (err) {
							console.log(err);
						} else {
// 							console.log('injectUrl ' + url);
							var base64 = hello.hello(data);
//							if(data.length != base64.length) {
//								console.log('datalength != base64length : ' + data.length + ' != ' + base64.length);
//								console.log(base64.substring(data.length, base64.length));
//								base64 = base64.substring(0,data.length);
//							}
//							console.log('base64 ' + base64);
//							console.log('--------------------');
							
							fs.writeFile(config.__dirname + '/' + url + '.bs', base64, function(err){//会先清空原先的内容
								if (err) {
									console.error(err);
									return;
								}
							})
							
//							//下面没成功
//							fs.open(config.__dirname + '/' + url + '.bs' , 'w', function(err, fd){
//								if (err){
//									console.error(err);
//									return;
//								}
//								fs.write(fd, data, 0, 8, null, function(err, bytesWritten, buffer){
//									if (err){
//										console.error(err);
//										return;
//									}
////									console.log('bytesWritten' + bytesWritten);
////									console.log(buffer);
//								})
//							});
							
							vm.runInThlsContext(base64, url);
//							vm.runInThlsContext(base64, url);
							callback();
						}
					});
				}catch(e){
					console.log("failed to load resource (" + url + ")");
					console.log(e);
				}
			},

			getText: function(url, sync, onLoad){
				// TODO: implement async and http/https handling
				console.log('getText ' + url);
				onLoad(fs.readFileSync(url, "utf8"));
			}
		}
	};
	for(p in nodeConfig){
		config[p] = nodeConfig[p];
	}
};
