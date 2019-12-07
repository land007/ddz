define(
		[ "dojo/_base/declare", "dojo/node!fs", "dojo/node!url",
				"dojo/node!path", "dojo/node!http", "dojo/node!querystring" ],
		function(declare, fs, url, path, http, querystring) {
			var cls = declare(
					"ddz-server.shttp",// 包名
					[],
					{
						post : function(req, res, gameIp, imageIp, gamePort, actiPort, play3) {
							var info = url.parse(req.url).query;
							req.addListener('data', function(chunk) {
								info += chunk;
							});
							req
									.addListener(
											'end',
											function() {
												var args = querystring
														.parse(info);
												var param = args.param;
												if (param != undefined) {
													var params = JSON
															.parse(args.param);
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
																		+ play3
																		+ '"}';
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
																		+ new Date()
																				.getTime()
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
																		+ gameIp
																		+ ':'
																		+ gamePort
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
																content += '{"error":"action '
																		+ action
																		+ ' switch default"}';
															}
														} else {
															content += '{"error":"action = undefined"}';
														}
													}
													content += ']}';
													res.end(content);
												} else {
													res
															.end('param = undefined');
												}
											});
						},
						serveFile : function(req, res, gameIp, imageIp, gamePort, actiPort, play3, apk) {
							var host = req.headers['host'];
							if(host != undefined){
								var hosts = host.split(':');
								gameIp = imageIp = hosts[0];
								if(hosts.length > 1) {
									gamePort = actiPort = hosts[1];
								}
							} else {
								gameIp = imageIp = req.connection.remoteAddress;
							}
							// var host = req.headers.host;
							// if (host.indexOf('ddz.h5.game.uc.cn') == 0) {
							// var pathname = __dirname + '/ddz.h5.game.uc.cn'
							// + url.parse(req.url).pathname;
							// } else if (host.indexOf('hall.h5.game.uc.cn') ==
							// 0) {
							// var pathname = __dirname + '/hall.h5.game.uc.cn'
							// + url.parse(req.url).pathname;
							// } else {
							var pathname = require.nodeRequire.__dirname
									+ url.parse(req.url).pathname;
							// }
							if (path.extname(pathname) == '.action'
									&& req.method == 'POST') {
								res.writeHead(200, {
									"Content-Type" : "application/json",
									"Access-Control-Allow-Origin" : "*"
								});
								return this.post(req, res, gameIp, imageIp, gamePort, actiPort, play3);
							} else {
								if (path.extname(pathname) == "") {
									pathname += "/";
								}
								if (pathname.charAt(pathname.length - 1) == "/") {
									pathname += "index.html";
								}
								if (path.basename(pathname) == "ddz.apk") {
									pathname = apk;
								}
								fs
										.stat(
												pathname,
												function(stat_error, stat) {
													if (!stat_error
															&& stat.isFile()) {
														switch (path
																.extname(pathname)) {
														case ".html":
															res
																	.writeHead(
																			200,
																			{
																				"Content-Type" : "text/html"
																			});
															break;
														case ".log":
															res
																	.writeHead(
																			200,
																			{
																				"Content-Type" : "application/json",
																				"Access-Control-Allow-Origin" : "*"
																			});
															break;
														case ".sign":
															res
																	.writeHead(
																			200,
																			{
																				"Content-Type" : "application/json",
																				"Access-Control-Allow-Origin" : "*"
																			});
															break;
														case ".js":
															res
																	.writeHead(
																			200,
																			{
																				"Content-Type" : "text/javascript"
																			});
															break;
														case ".css":
															res
																	.writeHead(
																			200,
																			{
																				"Content-Type" : "text/css"
																			});
															break;
														case ".gif":
															res
																	.writeHead(
																			200,
																			{
																				"Content-Type" : "image/gif"
																			});
															break;
														case ".jpg":
															res
																	.writeHead(
																			200,
																			{
																				"Content-Type" : "image/jpeg"
																			});
															break;
														case ".png":
															res
																	.writeHead(
																			200,
																			{
																				"Content-Type" : "image/png"
																			});
															break;
														case ".apk":
															res
																	.writeHead(
																			200,
																			{
																				"Content-Type" : "application/octet-stream"
																			});
															break;
														default:
															res
																	.writeHead(
																			200,
																			{
																				"Content-Type" : "application/octet-stream"
																			});
														}
														fs
																.readFile(
																		pathname,
																		function(
																				err,
																				data) {
																			if (path
																					.extname(pathname) == '.js' && pathname.indexOf('/ajax/libs') < 0) {
																				console.log(pathname);
																				require(
																						[
																								"dojox/dtl/_base",
																								"dojox/dtl/Context" ],
																						function(
																								dtl,
																								Context) {
																							var template = new dtl.Template(
																									data
																											.toString());
																							var context = new Context(
																									{
																										"gameIp" : gameIp,
																										"imageIp" : imageIp,
																										"gamePort" : gamePort,
																										"actiPort" : actiPort
																									});
																							var content = template
																									.render(context);
																							// console.log('"'+content+'"');
																							res
																									.end(content);
																						});
																			} else {
																				res
																						.end(data);
																			}
																		});
														// path.exists(pathname,
														// function(exists) {
														// if (exists) {
														// } else {
														// }
														// });
													} else {
														res
																.writeHead(
																		404,
																		{
																			"Content-Type" : "text/html"
																		});
														res
																.end("<h1>404 Not Found</h1>");
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
						}

					});
			return cls;
		});
