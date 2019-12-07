require(
		[ "dojo/node!bridge", "dojo/node!util", "dojo/node!fs",
				"dojo/node!url", "dojo/node!path", "dojo/node!http",
				"dojo/node!querystring", "dojo/node!eventproxy",
				"dojo/node!socket.io" ], function(bridge, sys, fs, url, path,
				http, querystring, eventproxy, socket_io) {
			// console.log(require.nodeRequire);
			// for (o in require) {
			// if (o.indexOf('__') != 0)
			// console.log(o + ' = ' + require[o]);
			// }

			require([ "ddz-server/slog", "ddz-server/shttp",
					"ddz-server/wsocket"], function(Slog, Shttp, Wsocket,
					Table, Player) {
				var slog = new Slog();
				var shttp = new Shttp();
				var wsocket = new Wsocket();
//				var player = new Player({
//					uid : 'asdfasdfasdfasdf',
//					name : 'owen'
//				});
//				var table = new Table();
				// for (o in player) {
				// if (o.indexOf('__') != 0)
				// console.log(o + ' = ' + player[o]);
				// }
//				player.log('require player');

				// sys.puts("I loaded!");
				var ep = eventproxy.create();

				// var ep = eventproxy.create();
				// var helloworld = require('helloworld');
				// console.log(helloworld.say());
				var tick = 1000;
				// var play1 = 3723932;
				// var play2 = 1871795;
				var play3 = 1611607;
				
				/*-----------------------------------------------
				 logging:
				 -----------------------------------------------*/

				// var gameIp = '192.168.1.189';// ddz.h5.game.uc.cn
				var gameIp = '192.168.102.29';// ddz.h5.game.uc.cn
				var actiPort = 8000;// action 8022
				var gamePort = 8000;// ws 8020
				// var imageIp = '192.168.1.189';// ddz.image.h5.game.uc.cn
				var imageIp = '192.168.102.29';// ddz.image.h5.game.uc.cn
				var imagePort = 8000;// img 8000
				var apk = '/data/app/com.qhkly.ddz-1.apk';

				/*-----------------------------------------------
				 Spin up our server:
				 -----------------------------------------------*/
				var httpServer = http.createServer(function(req, res) {
					shttp.serveFile(req, res, gameIp, imageIp, gamePort,
							actiPort, play3, apk)
				});
				if (gamePort != imagePort) {
					http.createServer(
							function(req, res) {
								shttp.serveFile(req, res, gameIp, imageIp,
										gamePort, actiPort, play3, apk)
							}).listen(imagePort);
				}
				if (gamePort != actiPort) {
					http.createServer(
							function(req, res) {
								shttp.serveFile(req, res, gameIp, imageIp,
										gamePort, actiPort, play3, apk)
							}).listen(actiPort);
				}
				// var server = ws.createServer({
				// debug : true
				// }, httpServer);
				io = socket_io.listen(httpServer);
				// var bridge = require.nodeRequire('bridge');
				var pi = bridge.load('com.qhkly.base.impl.PlatformImplExample',
						this);
				var dic = {
					member1 : "4321"
				}
				var cb = {
					operation1 : function(data) {
						data = JSON.parse(data);
						gameIp = data.ip;
						imageIp = data.ip;
						actiPort = data.port;
						gamePort = data.port;
						imagePort = data.port;
						apk = data.apk;
						httpServer.listen(gamePort);
					}
				}
				pi.operation1('1234', dic, cb);
				// server.addListener("listening", function() {
				// slog.log("start");
				// });
				// Handle WebSocket Requests
				io.sockets.on("connection", function(conn) {
					wsocket.connection(fs, conn, slog)
				});
				// server.addListener("close", function(conn) {
				// slog.log("closed connection: " + conn.id);
				// connected--;
				// conn.broadcast(connected + '');
				// });
				// server.listen(gamePort);
				// Handle HTTP Requests:
				// This will hijack the http server, if the httpserver doesn't
				// already respond to http.Server#request
				// server.addListener("request", shttp.serveFile);

			});

		});