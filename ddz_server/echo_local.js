// slightly modified version of echo-server.js for the web-sockets demo
var sys = require("util"), fs = require("fs"), url = require("url"), path = require("path"), http = require("http"), ws = require(__dirname
		+ '/node-websocket-server'), querystring = require('querystring');
var helloworld = require(__dirname + '/helloworld.node');
var EventProxy = require('eventproxy');
console.log(helloworld.say());
var ep = EventProxy.create();
var tick = 1000;
// var play1 = 3723932;
// var play2 = 1871795;
var play3 = 1611607;
var tables = [];
var players = {};
var names = [ '阿七', '李九', '潘八' ];
var icons = [ 1, 5, 7 ];
var sexs = [ 0, 0, 0 ]
var moneys = [ 1000, 1200, 1500 ]
var array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
		19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
		37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53 ];
/*-----------------------------------------------
 logging:
 -----------------------------------------------*/
var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
		'Oct', 'Nov', 'Dec' ];
var gameIp = '192.168.1.189';// ddz.h5.game.uc.cn
var actiPort = 8000;// action 8022
var gamePort = 8000;// ws 8020
var imageIp = '192.168.1.189';// ddz.image.h5.game.uc.cn
var imagePort = 8000;// img 8000
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
var serveFile = function(req, res) {
	// var host = req.headers.host;
	// if (host.indexOf('ddz.h5.game.uc.cn') == 0) {
	// var pathname = __dirname + '/ddz.h5.game.uc.cn'
	// + url.parse(req.url).pathname;
	// } else if (host.indexOf('hall.h5.game.uc.cn') == 0) {
	// var pathname = __dirname + '/hall.h5.game.uc.cn'
	// + url.parse(req.url).pathname;
	// } else {
	var pathname = __dirname + url.parse(req.url).pathname;
	// }
	if (path.extname(pathname) == '.action' && req.method == 'POST') {
		res.writeHead(200, {
			"Content-Type" : "application/json",
			"Access-Control-Allow-Origin" : "*"
		});
		return post(req, res);
	} else {
		if (path.extname(pathname) == "") {
			pathname += "/";
		}
		if (pathname.charAt(pathname.length - 1) == "/") {
			pathname += "index.html";
		}
		fs.stat(pathname, function(stat_error, stat) {
			if (!stat_error && stat.isFile()) {
				switch (path.extname(pathname)) {
				case ".html":
					res.writeHead(200, {
						"Content-Type" : "text/html"
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
				fs.readFile(pathname, function(err, data) {
					res.end(data);
				});
				// path.exists(pathname, function(exists) {
				// if (exists) {
				// } else {
				// }
				// });
			} else {
				res.writeHead(404, {
					"Content-Type" : "text/html"
				});
				res.end("<h1>404 Not Found</h1>");
			}
		});
	}
	// fs.exists(pathname, function(exists) {
	// if (exists) {
	//					
	// } else {
	//					
	// }
	// });
};
var post = function(req, res) {
	var info = url.parse(req.url).query;
	req.addListener('data', function(chunk) {
		info += chunk;
	});
	req
			.addListener(
					'end',
					function() {
						var args = querystring.parse(info);
						var param = args.param;
						if (param != undefined) {
							var params = JSON.parse(args.param);
							var content = '{"status":200,"data":[';
							for ( var i = 0; i < params.length; i++) {
								var action = params[i]['action'];
								if (action != undefined) {
									var requestId = params[i]['requestId'];
									switch (action) {
									// hall.h5.game.uc.cn
									case "/user.checkThirdToken":
										content += '{"requestId":"'
												+ requestId
												+ '","status":404,"action":"/user.checkThirdToken"}';
										break;
									case "/game.list":
										content += ',{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/game.list","data":[{"gameId":1,"gameName":"欢乐斗地主","apiUrl":"http://'
												+ gameIp
												+ ':'
												+ actiPort
												+ '/","state":1,"gameUrl":"http://'
												+ imageIp
												+ '/games/ddz/index.html","thirdpartyType":0,"tag":5}]}';
										break;
									case "/notice.list":
										content += ',{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/notice.list","data":{"msgs":[],"interval":90}}';
										break;
									case "/superNotice.list":
										content += ',{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/superNotice.list","data":{"msgs":[],"interval":1800}}';
										break;
									case "/pop.list":
										content += ',{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/pop.list","data":{"msgs":[],"interval":1800}}';
										break;
									case "/user.gameAuthorize":
										content += '{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/user.gameAuthorize","data":"f59b3552-037f-45df-8609-d05eba103708-'
												+ play3 + '"}';
										break;
									case "/box.gameNotice":
										content += ',{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/box.gameNotice","data":{"message":""}}';
										break;
									case "/notice.list":
										content += '{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/notice.list","data":{"msgs":[],"interval":90}}';
										break;
									case "/user.heartbeat":
										content += '{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/user.heartbeat","data":{"exp":1242,"sTime":'
												+ new Date().getTime()
												+ ',"isLvBonus":1}}';
										break;
									case "/dt.conf":
										content += '{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/dt.conf","data":{"regAgreement":"http://login.uc.cn/public/html/terms_zh.html","upoint":"https://pay.uc.cn/login/autologin.htm?path\u003dh5RechargeRecharge\u0026uc_param_str\u003ddnsnfrpfbivesscpligimichwiniei","passwordCenter":"http://id.uc.cn/security/password/change?uc_param_str\u003dfrpfvesscpmilaprnisieiut\u0026appId\u003d8\u0026backUrl\u003dhttp%3A%2F%2Fh5.game.uc.cn","defaultBackUrl":"http://a.9game.cn/game/2/64196.html?template_id\u003d589","flashsocket":"ws://hall.h5.game.uc.cn/wstest","serviceCenter":"http://feedback.uc.cn/self_service/wap/index?instance\u003dgamehall\u0026uc_param_str\u003deinibicppfmivesifr","matchStratedyUrl":"http://bsddz.h5.game.uc.cn:8220/","userCenter":"http://id.uc.cn/misc/home/account?uc_param_str\u003dfrpfvesscpmilaprnisieiut\u0026appId\u003d8\u0026backUrl\u003dhttp%3A%2F%2Fh5.game.uc.cn","websocket":"ws://hall.h5.game.uc.cn/wstest"}}';
										break;
									case "/ucoin.autoLogin":
										content += ',{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/ucoin.autoLogin","data":{"url":"https://pay.uc.cn/login/autologin.htm?sign\u003d8419f7fb27da1f8c99da3355dd1a1aef\u0026auto_token\u003dC8466F8A237E40C58115EE8E2546A769\u0026path\u003dh5RechargeRecharge\u0026store_nbr\u003d2233\u0026user_id\u003d219648674\u0026uc_param_str\u003ddnsnfrpfbivesscpligimichwiniei"}}';
										break;
									// ddz.h5.game.uc.cn
									case "/user.reconn":
										content += '{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/user.reconn"}';
										break;
									case "/user.enterGame":
										content += '{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/user.enterGame","data":{"gameUrl":"http://'
												+ imageIp
												+ '/games/ddz/index.html","gameServerUrl":"ws://'
												+ gameIp + ':' + gamePort
												+ '/game","type":1}}';
										break;
									case "/user.info":
										content += '{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/user.info","data":{"uid":'
												+ play3
												+ ',"sex":0,"ucoin":0,"avatarId":2,"isVip":0,"pUid":219648674,"uname":"land007","coin":26347,"lv":10,"recent":[{"gameId":1,"gameName":"欢乐斗地主"},{"gameId":5,"gameName":"德州扑克"},{"gameId":3,"gameName":"欢乐斗牛"},{"gameId":7,"gameName":"一站到底"},{"gameId":8,"gameName":"欢乐宝箱"}],"exp":1714,"isActivate":1,"lvExp":2100,"puid":219648674}}';
										break;
									case "/user.goods":
										content += ',{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/user.goods","data":[{"goodsId":3,"state":1,"expireIn":0,"goodsName":"panda喵"},{"goodsId":4,"state":1,"expireIn":0,"goodsName":"C小姬"},{"goodsId":5,"state":1,"expireIn":0,"goodsName":"U小将"},{"goodsId":6,"state":1,"expireIn":0,"goodsName":"篮球兔"},{"goodsId":7,"state":1,"expireIn":0,"goodsName":"理查羊"},{"goodsId":8,"state":1,"expireIn":0,"goodsName":"萌草"},{"goodsId":1,"state":2,"expireIn":0,"goodsName":"男"},{"goodsId":2,"state":2,"expireIn":0,"goodsName":"女"}]}';
										break;
									case "/goods.list":
										content += ',{"requestId":"'
												+ requestId
												+ '","status":200,"action":"/goods.list","data":[{"expireIn":2592000000,"goodsId":9,"coinGift":10000,"goodsName":"艾尔","price":10,"intro":"10000","state":3},{"expireIn":2592000000,"goodsId":10,"coinGift":10000,"goodsName":"猪小妹","price":10,"intro":"10000","state":3},{"expireIn":2592000000,"goodsId":11,"coinGift":53000,"goodsName":"猪小弟","price":50,"intro":"50000","state":3},{"expireIn":2592000000,"goodsId":12,"coinGift":53000,"goodsName":"松鼠CC","price":50,"intro":"赠送欢乐豆：5.3万","state":3},{"expireIn":2592000000,"goodsId":13,"coinGift":53000,"goodsName":"松鼠UU","price":50,"intro":"赠送欢乐豆：5.3万","state":3},{"expireIn":2592000000,"goodsId":14,"coinGift":110000,"goodsName":"果子","price":100,"intro":"赠送欢乐豆：11万","state":3},{"expireIn":2592000000,"goodsId":15,"coinGift":110000,"goodsName":"御宅喵星人","price":100,"intro":"赠送欢乐豆：11万","state":3},{"expireIn":2592000000,"goodsId":16,"coinGift":110000,"goodsName":"章鱼杰克","price":100,"intro":"赠送欢乐豆：11万","state":3},{"expireIn":2592000000,"goodsId":17,"coinGift":110000,"goodsName":"小优","price":100,"intro":"赠送欢乐豆：11万","state":3},{"expireIn":2592000000,"goodsId":18,"coinGift":230000,"goodsName":"菲儿","price":200,"intro":"赠送欢乐豆：23万","state":3},{"expireIn":2592000000,"goodsId":19,"coinGift":230000,"goodsName":"切克闹大叔","price":200,"intro":"赠送欢乐豆：23万","state":3},{"expireIn":2592000000,"goodsId":20,"coinGift":230000,"goodsName":"C伯爵","price":200,"intro":"赠送欢乐豆：23万","state":3}]}';
										break;
									default:
										content += '{"error":"action ' + action
												+ ' switch default"}';
									}
								} else {
									content += '{"error":"action = undefined"}';
								}
							}
							content += ']}';
							res.end(content);
						} else {
							res.end('param = undefined');
						}
					});
}
/*-----------------------------------------------
 Spin up our server:
 -----------------------------------------------*/
var httpServer = http.createServer(serveFile);
if (gamePort != imagePort) {
	http.createServer(serveFile).listen(imagePort);
}
if (gamePort != actiPort) {
	http.createServer(serveFile).listen(actiPort);
}
var connected = 0;
var server = ws.createServer({
	debug : true
}, httpServer);
server.addListener("listening", function() {
	log("start");
});
// Handle WebSocket Requests
server
		.addListener(
				"connection",
				function(conn) {
					log("opened connection: " + conn.id);
					connected++;
					// server.send(conn.id, '欢迎加入firechat');
					// conn.broadcast(connected + '加入了firechat');
					conn
							.addListener(
									"message",
									function(message) {
										log("<" + conn.id + "> " + message);
										var json = JSON.parse(message);
										for ( var m = 0; m < json.length; m++) {
											if (json[m]['ctype'] != undefined) {
												switch (json[m]['ctype']) {
												case 0:
												case 3: // 开始 换桌
													var uid = json[m]['uid'];
													if (uid == undefined
															|| uid == 0) {
														uid = conn.id;
													}
													log('加入游戏：' + uid);
													// 寻找空闲的桌子
													var tnumb;
													// 寻找座位
													var seat;
													for ( var i = 0; i < tables.length; i++) {
														var plays = tables[i]['plays'];
														for ( var j = 0; j < plays.length; j++) {
															if (plays[j] == null) {
																tnumb = i;
																seat = j;
																break;
															}
														}

													}
													// 没有空闲的桌子，添加新桌子
													if (tnumb == undefined) {
														tnumb = tables.length;
														seat = 0;
														tables[tnumb] = {
															tid : tnumb,
															plays : [ null,
																	null, null ]
														};
													}
													var ctag = json[m]['ctag'];
													if (json[m]['ctype'] == 3) {
														var oldtnumb = players[uid]['tnumb'];
														if (oldtnumb != tnumb) {
															log("+++++++++++++ 换桌: "
																	+ uid);
															var oldseat = players[uid]['seat'];
															tables[oldtnumb]['plays'][oldseat] = null;
															// 老桌子其他玩家
															for ( var i = 0; i < tables[oldtnumb]['plays'].length; i++) {
																if (tables[oldtnumb]['plays'][i] != null) {
																	log("+++++++++++++ 通知: "
																			+ tables[oldtnumb]['plays'][i]['uid']);
																	// 离开
																	// [{"uid":4006875,"ctag":0,"ctype":4},{"total":15,"uid":0,"ctag":0,"ctype":13}]
																	server
																			.send(
																					tables[oldtnumb]['plays'][i]['uid'],
																					'[{"uid":'
																							+ uid
																							+ ',"ctag":'
																							+ ctag
																							+ ',"ctype":4},{"total":15,"uid":0,"ctag":'
																							+ ctag
																							+ ',"ctype":13}]');
																}
															}
														}
													}
													// 纪录新位置
													players[uid] = {
														tnumb : tnumb,
														seat : seat
													};
													var contents = [];
													contents[0] = JSON
															.parse('{"basicScore":5,"roomMultiple":1,"basicMultiple":15,"timers":[30,20,20,30],"ctype":24}');
													contents[1] = JSON
															.parse('{"ctag":'
																	+ ctag
																	+ ',"tid":2351,"ctype":6,"others":[]}');
													// 新桌子其他玩家
													for ( var i = 0; i < tables[tnumb]['plays'].length; i++) {
														if (tables[tnumb]['plays'][i] != null) {
															if (json[m]['ctype'] == 3) {// 换桌需要告知桌友
																if (tables[tnumb]['plays'][i]['uid'] == uid) {
																	tables[tnumb]['plays'][i] = null;
																	log("+++++++++++++ delete uid: "
																			+ uid);
																	continue;// 不执行下面代码，这个人已经离开座位
																} else {
																	// 离开
																	// [{"uid":4006875,"ctag":0,"ctype":4},{"total":15,"uid":0,"ctag":0,"ctype":13}]
																	server
																			.send(
																					tables[tnumb]['plays'][i]['uid'],
																					'[{"uid":'
																							+ uid
																							+ ',"ctag":'
																							+ ctag
																							+ ',"ctype":4},{"total":15,"uid":0,"ctag":'
																							+ ctag
																							+ ',"ctype":13}]');
																}
															}
															contents[1]['others'][contents[1]['others'].length] = JSON
																	.parse('{"fleeNum":0,"icon":'
																			+ icons[i]
																			+ ',"uid":'
																			+ tables[tnumb]['plays'][i]['uid']
																			+ ',"state":'
																			+ tables[tnumb]['plays'][i]['state']
																			+ ',"flag":'
																			+ tables[tnumb]['plays'][i]['flag']
																			+ ',"sex":'
																			+ sexs[i]
																			+ ',"money1":'
																			+ moneys[i]
																			+ ',"winNum":316,"name":"'
																			+ names[i]
																			+ '","failNum":369,"tid":'
																			+ tnumb
																			+ ',"pos":'
																			+ i
																			+ '}');
															// 玩家进入
															// [{"user":{"fleeNum":0,"icon":2,"uid":4033553,"state":0,"flag":0,"sex":0,"money1":2362,"winNum":8,"name":"潘八","failNum":4,"tid":3691,"pos":2},"uid":4033553,"ctag":0,"ctype":5}]
															// [{"user":{"fleeNum":0,"icon":1,"uid":4404992211,"state":0,"flag":0,"sex":0,"money1":1000,"winNum":8,"name":"é¿ä¸","failNum":4,"tid":0,"pos":0},"uid":4404992211,"ctag":0,"ctype":5}]
															// [{"user":{"fleeNum":1,"icon":1,"uid":3043669,"state":0,"flag":0,"sex":0,"money1":9851,"winNum":98,"name":"æ¥å®¾3710","failNum":82,"tid":1657,"pos":1},"uid":3043669,"ctag":0,"ctype":5}]
															server
																	.send(
																			tables[tnumb]['plays'][i]['uid'],
																			'[{"user":{"fleeNum":1,"icon":'
																					+ icons[seat]
																					+ ',"uid":'
																					+ uid
																					+ ',"state":0,"flag":0,"sex":'
																					+ sexs[seat]
																					+ ',"money1":'
																					+ moneys[seat]
																					+ ',"winNum":8,"name":"'
																					+ names[seat]
																					+ '","failNum":4,"tid":'
																					+ tnumb
																					+ ',"pos":'
																					+ seat// 这里要注意是玩家坐下的位置
																					+ '},"uid":'
																					+ uid
																					+ ',"ctag":'
																					+ ctag
																					+ ',"ctype":5}]');

														}
													}
													// 把当前玩家放到桌子
													tables[tnumb]['plays'][seat] = {
														pos : seat,
														uid : uid,
														state : 0,
														flag : 0
													}
													contents[1]['user'] = JSON
															.parse('{"fleeNum":0,"icon":'
																	+ icons[seat]
																	+ ',"uid":'
																	+ uid
																	+ ',"state":0,"flag":0,"sex":'
																	+ sexs[seat]
																	+ ',"money1":'
																	+ moneys[seat]
																	+ ',"winNum":0,"name":"'
																	+ names[seat]
																	+ '","failNum":0,"tid":'
																	+ tnumb
																	+ ',"pos":'
																	+ seat
																	+ '}');
													contents[2] = JSON
															.parse('{"total":15,"uid":0,"ctag":'
																	+ ctag
																	+ ',"ctype":13}');
													log("+++++++tables++++++:"
															+ JSON
																	.stringify(tables));
													log("+++++++players++++++:"
															+ JSON
																	.stringify(players));
													log("+++++++contents++++++:"
															+ JSON
																	.stringify(contents));
													// [{"ctag":1,"ctype":0,"reconnReason":1,"uid":1611607,"token":"daca3497-09f4-4d9a-be10-9aaba636db76-1611607","ptype":"é¡µé¢","ch":"XX_02_001","ua":"mozilla/5.0
													// (macintosh; intel mac os
													// x 10_8_4)
													// applewebkit/537.36
													// (khtml, like
													// gecko)
													// chrome/27.0.1453.116
													// safari/537.36","nt":""}]

													// server
													// .send(
													// conn.id,
													// '[{"basicScore":5,"roomMultiple":1,"basicMultiple":15,"timers":[30,20,20,30],"ctype":24},{"user":{"fleeNum":0,"icon":3,"uid":'
													// + play3
													// +
													// ',"state":0,"flag":0,"sex":0,"money1":6000,"winNum":0,"name":"李九","failNum":0,"tid":2351,"pos":2},"ctag":1,"tid":2351,"ctype":6,"others":[{"fleeNum":0,"icon":4,"uid":'
													// + play2
													// +
													// ',"state":0,"flag":0,"sex":0,"money1":191849,"winNum":316,"name":"潘八","failNum":369,"tid":2351,"pos":0},{"fleeNum":0,"icon":2,"uid":'
													// + play1
													// +
													// ',"state":0,"flag":0,"sex":0,"money1":2100,"winNum":4,"name":"阿七","failNum":8,"tid":2351,"pos":1}]},{"total":15,"uid":0,"ctag":0,"ctype":13}]');
													server
															.send(
																	conn.id,
																	JSON
																			.stringify(contents));
													// [{"basicScore":5,"roomMultiple":1,"basicMultiple":15,"timers":[30,20,20,30],"ctype":24},{"user":{"fleeNum":1,"icon":2,"uid":1611607,"state":0,"flag":0,"sex":0,"money1":17107,"winNum":15,"name":"land007","failNum":18,"tid":2413,"pos":0},"ctag":115,"tid":2413,"ctype":6,"others":[]},{"total":15,"uid":0,"ctag":0,"ctype":13}]
													// server.send(conn.id,
													// message);
													// conn.broadcast(message);
													// 换桌[{"ctag":3,"ctype":3}]
													var timeout = 0;
													// 离线
													// server.send(conn.id,
													// '[{"uid":' + play1 +
													// ',"state":0,"ctag":0,"flag":16,"ctype":2}]');
													// 举手[{"ctag":2,"ctype":1,"flag":0}]
													return;
													setTimeout(
															function() {
																server
																		.send(
																				conn.id,
																				'[{"uid":'
																						+ play1
																						+ ',"state":1,"ctag":0,"flag":0,"ctype":2}]')
															}, timeout);
													timeout += tick;
													setTimeout(
															function() {
																server
																		.send(
																				conn.id,
																				'[{"uid":'
																						+ play2
																						+ ',"state":1,"ctag":0,"flag":0,"ctype":2}]')
															}, timeout);
													timeout += tick;
													setTimeout(
															function() {
																server
																		.send(
																				conn.id,
																				'[{"uid":'
																						+ play3
																						+ ',"state":1,"ctag":0,"flag":0,"ctype":2}]')
															}, timeout);
													timeout += tick;
													// 发牌
													setTimeout(
															function() {
																server
																		.send(
																				conn.id,
																				'[{"uid":'
																						+ play3
																						+ ',"ctag":0,"gameState":1,"ctype":8},{"cards":[18,6,27,12,42,47,22,41,49,45,43,39,29,10,21,17,52],"uid":'
																						+ play3
																						+ ',"ctag":0,"giveType":0,"ctype":7},{"uid":3368354,"ctag":5,"ctype":7,"cardsNum":17},{"uid":2734235,"ctag":5,"ctype":7,"cardsNum":17},{"uid":'
																						+ play3
																						+ ',"gameState":1,"ctag":5,"ctype":23},{"total":15,"uid":0,"ctag":0,"ctype":13}]')
															}, timeout);
													timeout += tick;
													//
													setTimeout(
															function() {
																server
																		.send(
																				conn.id,
																				'[{"lastWinner":'
																						+ play1
																						+ ',"uid":'
																						+ play1
																						+ ',"ctag":6,"action":1,"ctype":9},{"uid":'
																						+ play3
																						+ ',"gameState":2,"ctag":6,"ctype":23}]')
															}, timeout);
													timeout += tick;
													// 不叫
													setTimeout(
															function() {
																server
																		.send(
																				conn.id,
																				'[{"lastWinner":'
																						+ play1
																						+ ',"uid":'
																						+ play3
																						+ ',"ctag":11,"action":2,"ctype":9},{"uid":'
																						+ play2
																						+ ',"gameState":2,"ctag":11,"ctype":23}]')
															}, timeout);
													timeout += tick;
													// 抢地主
													setTimeout(
															function() {
																server
																		.send(
																				conn.id,
																				'[{"lastWinner":'
																						+ play2
																						+ ',"uid":'
																						+ play2
																						+ ',"ctag":4,"action":3,"ctype":9},{"uid":'
																						+ play1
																						+ ',"gameState":2,"ctag":4,"ctype":23},{"multipleType":3,"multiple":2,"total":30,"uid":0,"ctag":0,"ctype":13}]')
															}, timeout);
													timeout += tick;
													//
													setTimeout(
															function() {
																server
																		.send(
																				conn.id,
																				'[{"lastWinner":-1,"uid":'
																						+ play1
																						+ ',"ctag":7,"action":3,"ctype":9},{"uid":'
																						+ play1
																						+ ',"ctag":7,"gameState":3,"ctype":8},{"multipleType":9,"multiple":3,"cards":[13,23,21],"uid":'
																						+ play1
																						+ ',"ctag":7,"giveType":2,"ctype":7},{"ctag":7,"uid":3719917,"ctype":11},{"uid":'
																						+ play1
																						+ ',"gameState":3,"ctag":7,"ctype":23},{"multipleType":3,"multiple":2,"total":180,"uid":0,"ctag":0,"ctype":13},{"multipleType":9,"multiple":3,"total":180,"uid":0,"ctag":0,"ctype":13}]')
															}, timeout);
													timeout += tick;
													// 结束抢
													setTimeout(
															function() {
																server
																		.send(
																				conn.id,
																				'[{"cardType":3,"lastWinner":'
																						+ play1
																						+ ',"cards":[39,13],"uid":'
																						+ play1
																						+ ',"ctag":8,"ctype":15},{"uid":'
																						+ play3
																						+ ',"gameState":3,"ctag":8,"ctype":23}]')
															}, timeout);
													timeout += tick;
													setTimeout(
															function() {
																server
																		.send(
																				conn.id,
																				'[{"uid":'
																						+ play1
																						+ ',"state":1,"ctag":0,"flag":0,"ctype":2}]')
															}, timeout);
													// timeout += tick;
													// server.send(conn.id,
													// '[{"uid":' + play1 +
													// ',"state":3,"ctag":0,"flag":16,"ctype":2}]');
													// server.send(conn.id,
													// '[{"code":6,"ctag":0,"ctype":20}]');
													// server.send(conn.id,
													// '[{"code":-2,"ctag":1,"ctype":20}]');
													break;
												case 1:
													// 举手
													var uid = conn.id;
													var tnumb = players[uid]['tnumb'];
													var seat = players[uid]['seat'];
													tables[tnumb]['plays'][seat]['state'] = 1;
													var flag;
													if (json[m]['flag'] == 0) {
														log('举手：' + uid);
														// [{"ctag":2,"ctype":1,"flag":0}]
														flag = 0;
													} else if (json[m]['flag'] == 1) {
														log('明牌：' + uid);
														// [{"ctag":2,"ctype":1,"flag":1}]
														// [{"uid":1611607,"state":1,"ctag":0,"flag":2,"ctype":2},{"multipleType":1,"multiple":5,"total":75,"uid":0,"ctag":0,"ctype":13}]
														flag = 2;
													}
													tables[tnumb]['plays'][seat]['flag'] = flag;
													var begin = true;
													for ( var i = 0; i < tables[tnumb]['plays'].length; i++) {
														if (tables[tnumb]['plays'][i] != null) {
															if (tables[tnumb]['plays'][i]['state'] == 0) {
																begin = false;
															}
															server
																	.send(
																			tables[tnumb]['plays'][i]['uid'],
																			'[{"uid":'
																					+ uid
																					+ ',"state":1,"ctag":0,"flag":'
																					+ flag
																					+ ',"ctype":2}]');
														} else {
															begin = false;
														}
													}
													if (begin) {
														log('开始：' + tnumb);
														for ( var i = 0, len = array.length; i < len - 1; i++) {
															var pos = i
																	+ Math
																			.floor((len - i)
																					* Math
																							.random());
															var tmp = array[pos];
															array[pos] = array[i];
															array[i] = tmp;
														}
														log('打乱：'
																+ array
																		.join(', '));
														for ( var i = 0; i < tables[tnumb]['plays'].length; i++) {
															var p1 = i % 3;
															var p2 = (i + 1) % 3;
															var p3 = (i + 2) % 3;
															var content = '[{"uid":'
																	+ tables[tnumb]['plays'][p1]['uid']
																	+ ',"ctag":0,"gameState":1,"ctype":8},{';
															// 牌1开始
															content += '"cards":['
																	+ array[p1];
															for ( var j = 1; j < 17; j++) {
																content += ','
																		+ array[p1
																				+ 3
																				* j];
															}
															content += '],';
															// 牌1结束
															content += '"uid":'
																	+ tables[tnumb]['plays'][p1]['uid']
																	+ ',"ctag":0,"giveType":0,"ctype":7},{';
															// 牌2开始
															if (tables[tnumb]['plays'][p2]['flag'] == 2) {
																content += '"cards":['
																		+ array[p2];
																for ( var j = 1; j < 17; j++) {
																	content += ','
																			+ array[p2
																					+ 3
																					* j];
																}
																content += '],';
															}
															// 牌2结束
															content += '"uid":'
																	+ tables[tnumb]['plays'][p2]['uid']
																	+ ',"ctag":5';
															if (tables[tnumb]['plays'][p2]['flag'] == 2) {
																content += ',"giveType":1';
															}
															content += ',"ctype":7,"cardsNum":17},{';
															// 牌3开始
															if (tables[tnumb]['plays'][p3]['flag'] == 2) {
																content += '"cards":['
																		+ array[p3];
																for ( var j = 1; j < 17; j++) {
																	content += ','
																			+ array[p3
																					+ 3
																					* j];
																}
																content += '],';
															}
															// 牌3结束
															content += '"uid":'
																	+ tables[tnumb]['plays'][p3]['uid']
																	+ ',"ctag":5';
															if (tables[tnumb]['plays'][p3]['flag'] == 2) {
																content += ',"giveType":1';
															}
															content += ',"ctype":7,"cardsNum":17},{"uid":'
																	+ tables[tnumb]['plays'][p1]['uid']
																	+ ',"gameState":1,"ctag":5,"ctype":23},{"total":15,"uid":0,"ctag":0,"ctype":13}]';
															// ［{"uid":1611607,"ctag":0,"gameState":1,"ctype":8},{"cards":[7,53,42,28,22,41,49,45,21,14,37,4,52,3,43,32,29],"uid":1611607,"ctag":0,"giveType":0,"ctype":7},
															// {"uid":4051260,"ctag":53,"ctype":7,"cardsNum":17},
															// {"cards":[18,5,47,40,6,19,34,51,10,17,35,38,39,30,23,44,11],"uid":3631137,"ctag":53,"giveType":1,"ctype":7,"cardsNum":17},
															// {"uid":1611607,"gameState":1,"ctag":53,"ctype":23},{"total":75,"uid":0,"ctag":0,"ctype":13}]
															// {"uid":1160652777,"ctag":0,"gameState":1,"ctype":8},{"cards":[0,39,13,6,27,20,40,10,22,28,42,21,49,53,3,38,34],"uid":1160652809,"ctag":0,"giveType":0,"ctype":7},
															// {"cards":[26,14,7,24,11,1,4,33,2,30,45,15,31,46,9,52,12],"uid":1160652777,"ctag":5,"ctype":7,"cardsNum":17},{"cards":[32,19,44,41,18,51,29,25,35,36,37,43,23,47,8,48,16],"uid":1160652798,"ctag":5,"ctype":7,"cardsNum":17},{"uid":1160652809,"gameState":1,"ctag":5,"ctype":23},{"total":15,"uid":0,"ctag":0,"ctype":13}]
															// {"uid":1611607,"ctag":0,"gameState":1,"ctype":8},{"cards":[25,34,13,0,26,49,53,2,51,1,37,17,35,24,9,32,11],"uid":1611607,"ctag":0,"giveType":0,"ctype":7},{"uid":4025813,"ctag":10,"ctype":7,"cardsNum":17},{"uid":4061821,"ctag":10,"ctype":7,"cardsNum":17},{"uid":1611607,"gameState":1,"ctag":10,"ctype":23},{"total":15,"uid":0,"ctag":0,"ctype":13}]
															server
																	.send(
																			tables[tnumb]['plays'][p1]['uid'],
																			content);
														}
													}
													break;
												case 2:
													// 消息
													// {"ctag":28,"ctype":17,"msg":""}]
													break;
												case 16:
													// 脱管
													// {"ctag":4,"ctype":16,"action":0}]
													var uid = conn.id;
													log('脱管：' + uid);
													break;
												case 17:
													// 消息
													// {"ctag":28,"ctype":17,"msg":""}]
													// [{"uname":"","uid":4043563,"ctag":0,"mtype":0,"msg":"","ctype":18}]
													log('消息：' + json[m]['msg']);
													var uid = conn.id;
													var tnumb = players[uid]['tnumb'];
													for ( var i = 0; i < tables[tnumb]['plays'].length; i++) {
														if (tables[tnumb]['plays'][i] != null) {
															server
																	.send(
																			tables[tnumb]['plays'][i]['uid'],
																			'[{"uname":"","uid":'
																					+ uid
																					+ ',"ctag":0,"mtype":0,"msg":"'
																					+ json[m]['msg']
																					+ '","ctype":18}]');
														}
													}
													break;
												default:
												}
											} else {
												log('not ctype');
											}
										}
									});
					conn
							.addListener(
									"close",
									function(message) {
										var uid = conn.id;
										log('断开连接：' + uid);
										var tnumb = players[uid]['tnumb'];
										var seat = players[uid]['seat'];
										tables[tnumb]['plays'][seat] = null;
										players[uid] = undefined;
										log("+++++++++++++ delete uid: " + uid);
										log("+++++++tables++++++:"
												+ JSON.stringify(tables));
										for ( var i = 0; i < tables[tnumb]['plays'].length; i++) {
											if (tables[tnumb]['plays'][i] != null) {
												// 离开
												// [{"uid":4006875,"ctag":0,"ctype":4},{"total":15,"uid":0,"ctag":0,"ctype":13}]
												server
														.send(
																tables[tnumb]['plays'][i]['uid'],
																'[{"uid":'
																		+ uid
																		+ ',"ctag":0,"ctype":4},{"total":15,"uid":0,"ctag":0,"ctype":13}]');
											}
										}
									});
				});
server.addListener("close", function(conn) {
	log("closed connection: " + conn.id);
	connected--;
	conn.broadcast(connected + '');
});
server.listen(gamePort);
// Handle HTTP Requests:
// This will hijack the http server, if the httpserver doesn't
// already respond to http.Server#request
server.addListener("request", serveFile);