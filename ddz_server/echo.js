// slightly modified version of echo-server.js for the web-sockets demo
var sys = require("util"), fs = require("fs"), url = require("url"), path = require("path"), http = require("http"), ws = require(__dirname
		+ '/node-websocket-server'), querystring = require('querystring');
/*-----------------------------------------------
 logging:
 -----------------------------------------------*/
var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
		'Oct', 'Nov', 'Dec' ];
function pad(n) {
	return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
function timestamp() {
	var d = new Date();
	return [
			d.getDate(),
			months[d.getMonth()],
			[ pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds()),
					(d.getTime() + "").substr(-4, 4) ].join(':') ].join(' ');
};
function log(msg) {
	sys.puts(timestamp() + ' - ' + msg.toString());
};
function serveFile(req, res) {

//	var host = req.headers.host;
//	if (host.indexOf('ddz.h5.game.uc.cn') == 0) {
//		var pathname = __dirname + '/ddz.h5.game.uc.cn'
//				+ url.parse(req.url).pathname;
//	} else if (host.indexOf('hall.h5.game.uc.cn') == 0) {
//		var pathname = __dirname + '/hall.h5.game.uc.cn'
//				+ url.parse(req.url).pathname;
//	} else {
		var pathname = __dirname + url.parse(req.url).pathname;
//	}

	fs
			.stat(
					pathname,
					function(stat_error, stat) {
						if (!stat_error && stat.isFile()) {
							switch (path.extname(pathname)) {
							case ".html":
								res.writeHead(200, {
									"Content-Type" : "text/html"
								});
								break;
							case ".action":
								res.writeHead(200, {
									"Content-Type" : "application/json",
									"Access-Control-Allow-Origin" : "*"
								});
								break;
							case ".log":
								res.writeHead(200, {
									"Content-Type" : "application/json",
									"Access-Control-Allow-Origin" : "*"
								});
								break;
							case ".sign":
								res.writeHead(200, {
									"Content-Type" : "application/json",
									"Access-Control-Allow-Origin" : "*"
								});
								break;
							case ".js":
								res.writeHead(200, {
									"Content-Type" : "text/javascript"
								});
								break;
							case ".css":
								res.writeHead(200, {
									"Content-Type" : "text/css"
								});
								break;
							case ".gif":
								res.writeHead(200, {
									"Content-Type" : "image/gif"
								});
								break;
							case ".jpg":
								res.writeHead(200, {
									"Content-Type" : "image/jpeg"
								});
								break;
							case ".png":
								res.writeHead(200, {
									"Content-Type" : "image/png"
								});
								break;
							default:
								res.writeHead(200, {
									"Content-Type" : "application/octet-stream"
								});
							}
							if (path.extname(pathname) == '.action') {
								var arg = url.parse(req.url).query;
								var info = arg;
								req.addListener('data', function(chunk) {
									info += chunk;
								}).addListener('end', function() {
									var args = querystring.parse(info);
									var param = args.param;
									if (param != undefined) {
										var params = JSON.parse(args.param);
										var action = params[0]['action'];
										if (action != undefined) {
											switch (action) {
											//hall.h5.game.uc.cn
											case "/user.checkThirdToken":
												res
														.end('{"status":200,"data":[{"requestId":"1","status":404,"action":"/user.checkThirdToken"},{"requestId":"2","status":200,"action":"/game.list","data":[{"gameId":1,"gameName":"欢乐斗地主","apiUrl":"http://ddz.h5.game.uc.cn:8022/","state":1,"gameUrl":"http://ddz.image.h5.game.uc.cn/games/ddz/index.html","thirdpartyType":0,"tag":5}]},{"requestId":"3","status":200,"action":"/notice.list","data":{"msgs":[],"interval":90}},{"requestId":"4","status":200,"action":"/superNotice.list","data":{"msgs":[],"interval":1800}},{"requestId":"5","status":200,"action":"/pop.list","data":{"msgs":[],"interval":1800}}]}');
												break;
											case "/user.gameAuthorize":
												res
														.end('{"status":200,"data":[{"requestId":"11","status":200,"action":"/user.gameAuthorize","data":"f59b3552-037f-45df-8609-d05eba103708-1611607"},{"requestId":"12","status":200,"action":"/box.gameNotice","data":{"message":""}}]}');
												break;
											case "/notice.list":
												res
														.end('{"status":200,"data":[{"requestId":"19","status":200,"action":"/notice.list","data":{"msgs":[],"interval":90}}]}');
												break;
											case "/user.heartbeat":
												res
														.end('{"status":200,"data":[{"requestId":"8","status":200,"action":"/user.heartbeat","data":{"exp":1242,"sTime":1372821743873,"isLvBonus":1}}]}');
												break;
											//ddz.h5.game.uc.cn
											case "/user.reconn":
												res
														.end('{"status":200,"data":[{"requestId":"6","status":200,"action":"/user.reconn"}]}');
												break;
											case "/user.enterGame":
												res
														.end('{"status":200,"data":[{"requestId":"7","status":200,"action":"/user.enterGame","data":{"gameUrl":"http://ddz.image.h5.game.uc.cn/games/ddz/index.html","gameServerUrl":"ws://ddz.h5.game.uc.cn:8020/game","type":1}}]}');
												break;
											default:
												res.end('action switch default');
											}
										} else {
											res.end('action = undefined');
										}
									} else {
										res.end('param = undefined');
									}
								})
							} else {
								fs.readFile(pathname, function(err, data) {
									res.end(data);
								});
							}
						} else {
							if (path.extname(pathname) == "") {
								pathname += "/";
							}
							if (pathname.charAt(pathname.length - 1) == "/") {
								pathname += "index.html";
							}
							path.exists(pathname, function(exists) {
								if (exists) {
									res.writeHead(200, {
										"Content-Type" : "text/html"
									});
									fs.readFile(pathname, function(err, data) {
										res.end(data);
									});
								} else {
									res.writeHead(404, {
										"Content-Type" : "text/html"
									});
									res.end("<h1>404 Not Found</h1>");
								}
							});
						}
					});
	// fs.exists(pathname, function(exists) {
	// if (exists) {
	//					
	// } else {
	//					
	// }
	// });
};
/*-----------------------------------------------
 Spin up our server:
 -----------------------------------------------*/
var httpServer = http.createServer(serveFile);
http.createServer(serveFile).listen(8000);
http.createServer(serveFile).listen(8022);
var connected = 0;
var server = ws.createServer({
	debug : true
}, httpServer);
server
		.addListener(
				"listening",
				function() {
					log("Listening for connections on http://127.0.0.1/?tt=7f5b04d2-1001-41cc-8170-e2a86b298e19&globalConfig=http%3A%2F%2Fh5.game.uc.cn%2FglobalConfig.js%3Fv%3D2.3.1.13060715&backUrl=http%3A%2F%2Fh5.game.uc.cn%2F%3FbackSource%3Dgame&&ch=XX_02_001&ptype=%E9%A1%B5%E9%9D%A2&embedded=true");
				});
// Handle WebSocket Requests
server.addListener("connection", function(conn) {
	log("opened connection: " + conn.id);

	connected++;
	//server.send(conn.id, '欢迎加入firechat');
	//conn.broadcast(connected + '加入了firechat');

	conn.addListener("message", function(message) {
		log("<" + conn.id + "> " + message);
		//server.send(conn.id, message);
		//conn.broadcast(message);
		server.send(conn.id, '[{"basicScore":5,"roomMultiple":1,"basicMultiple":15,"timers":[30,20,20,30],"ctype":24},{"user":{"fleeNum":0,"icon":3,"uid":3720485,"state":0,"flag":0,"sex":0,"money1":6000,"winNum":0,"name":"李九","failNum":0,"tid":2351,"pos":2},"ctag":1,"tid":2351,"ctype":6,"others":[{"fleeNum":0,"icon":4,"uid":1871795,"state":0,"flag":0,"sex":0,"money1":191849,"winNum":316,"name":"潘八","failNum":369,"tid":2351,"pos":0},{"fleeNum":0,"icon":2,"uid":3723932,"state":0,"flag":0,"sex":0,"money1":2100,"winNum":4,"name":"阿七","failNum":8,"tid":2351,"pos":1}]},{"total":15,"uid":0,"ctag":0,"ctype":13}]');
		//server.send(conn.id, '[{"code":6,"ctag":0,"ctype":20}]');
	});
});
server.addListener("close", function(conn) {
	log("closed connection: " + conn.id);
	connected--;
	conn.broadcast(connected + '');
});
server.listen(8020);
// Handle HTTP Requests:
// This will hijack the http server, if the httpserver doesn't
// already respond to http.Server#request
server.addListener("request", serveFile);