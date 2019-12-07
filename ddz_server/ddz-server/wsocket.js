define([ "dojo/_base/declare", "ddz-server/table",
			"ddz-server/player" ], function(declare, Table, Player) {
	var cls = declare("ddz-server.wsocket", [], {// 包名
		connected : 0,
		tables : [],
		players : {},
		names : [ '阿七', '李九', '潘八' ],
		icons : [ 1, 5, 7 ],
		sexs : [ 0, 0, 0 ],
		moneys : [ 1000, 1200, 1500 ],
		array : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
				15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
				29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
				43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53 ],
		connection : function(fs, conn, slog) {
			slog.log('opened connection: ' + conn.id);
			this.connected++;
			// server.send(conn.id, '欢迎加入firechat');
			// conn.broadcast(connected + '加入了firechat');
			new function(tables, players, names, icons, sexs, moneys, array){
			conn
					.on(
							"message",
							function(message) {
								slog.log("<" + conn.id + "> " + message);
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
											slog.log('加入游戏：' + uid);
											// 寻找空闲的桌子
											var tnumb;
											// 寻找座位
											var seat;
											for ( var i = 0; i < tables.length; i++) {
												var tn = tables[i].addPlay(uid);
												if(tn >= 0){
													tnumb = tables[i].tid;
													seat = tn;
													break;
												}
//												var plays = tables[i]['plays'];
//												for ( var j = 0; j < plays.length; j++) {
//													if (plays[j] == null) {
//														tnumb = i;
//														seat = j;
//														break;
//													}
//												}

											}
											// 没有空闲的桌子，添加新桌子
											if (tnumb == undefined) {
												tnumb = tables.length;
												seat = 0;
												tables[tnumb] = new Table({
													tid : tnumb,
													p0 : 0,
													pn : 0,
													cards : [],
													plays : [ null,
															null, null ]
												});
											}
											var ctag = json[m]['ctag'];
											if (json[m]['ctype'] == 3) {
												var oldtnumb = players[uid]['tnumb'];
												if (oldtnumb != tnumb) {
													slog.log("+++++++++++++ 换桌: "
															+ uid);
													var oldseat = players[uid]['seat'];
													tables[oldtnumb].delPlay(oldseat);
													// 老桌子其他玩家通知：离开
													// [{"uid":4006875,"ctag":0,"ctype":4},{"total":15,"uid":0,"ctag":0,"ctype":13}]
													tables[oldtnumb].sendMsg('[{"uid":"'
															+ uid
															+ '","ctag":'
															+ ctag
															+ ',"ctype":4},{"total":15,"uid":0,"ctag":'
															+ ctag
															+ ',"ctype":13}]', slog);
												}
											}
											// 纪录新位置
											players[uid] = new Player({
												uid : uid,
												tnumb : tnumb,
												seat : seat
											});
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
															slog.log("+++++++++++++ delete uid: "
																	+ uid);
															continue;// 不执行下面代码，这个人已经离开座位
														} else {
															// 离开
															// [{"uid":4006875,"ctag":0,"ctype":4},{"total":15,"uid":0,"ctag":0,"ctype":13}]
															io.sockets.sockets[tables[tnumb]['plays'][i]['uid']]
																	.send(
																			//tables[tnumb]['plays'][i]['uid'],
																			'[{"uid":"'
																					+ uid
																					+ '","ctag":'
																					+ ctag
																					+ ',"ctype":4},{"total":15,"uid":0,"ctag":'
																					+ ctag
																					+ ',"ctype":13}]');
														}
													}
													contents[1]['others'][contents[1]['others'].length] = JSON
															.parse('{"fleeNum":0,"icon":'
																	+ icons[i]
																	+ ',"uid":"'
																	+ tables[tnumb]['plays'][i]['uid']
																	+ '","state":'
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
													io.sockets.sockets[tables[tnumb]['plays'][i]['uid']]
															.send(
																	//tables[tnumb]['plays'][i]['uid'],
																	'[{"user":{"fleeNum":1,"icon":'
																			+ icons[seat]
																			+ ',"uid":"'
																			+ uid
																			+ '","state":0,"flag":0,"sex":'
																			+ sexs[seat]
																			+ ',"money1":'
																			+ moneys[seat]
																			+ ',"winNum":8,"name":"'
																			+ names[seat]
																			+ '","failNum":4,"tid":'
																			+ tnumb
																			+ ',"pos":'
																			+ seat// 这里要注意是玩家坐下的位置
																			+ '},"uid":"'
																			+ uid
																			+ '","ctag":'
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
															+ ',"uid":"'
															+ uid
															+ '","state":0,"flag":0,"sex":'
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
											slog.log("+++++++tables++++++:"
													+ JSON
															.stringify(tables));
											slog.log("+++++++players++++++:"
													+ JSON
															.stringify(players));
											slog.log("+++++++contents++++++:"
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
											io.sockets.sockets[conn.id]
													.send(
//															conn.id,
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
											break;
										case 1:
											// 举手
											var uid = conn.id;
											var tnumb = players[uid]['tnumb'];
											var seat = players[uid]['seat'];
											tables[tnumb]['plays'][seat]['state'] = 1;
											var flag;
											if (json[m]['flag'] == 0) {
												slog.log('举手：' + uid);
												// [{"ctag":2,"ctype":1,"flag":0}]
												flag = 0;
											} else if (json[m]['flag'] == 1) {
												slog.log('明牌：' + uid);
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
													io.sockets.sockets[tables[tnumb]['plays'][i]['uid']]
															.send(
																	//tables[tnumb]['plays'][i]['uid'],
																	'[{"uid":"'
																			+ uid
																			+ '","state":1,"ctag":0,"flag":'
																			+ flag
																			+ ',"ctype":2}]');
												} else {
													begin = false;
												}
											}
											if (begin) {
												slog.log('开始：' + tnumb);
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
												slog.log('打乱：'
														+ array
																.join(', '));
												var p0 = tables[tnumb]['p0'];
												for ( var i = 0; i < tables[tnumb]['plays'].length; i++) {
													var p1 = i % 3;
													var p2 = (i + 1) % 3;
													var p3 = (i + 2) % 3;
													var content = '[{"uid":"'
															+ tables[tnumb]['plays'][p0]['uid']
															+ '","ctag":0,"gameState":1,"ctype":8},{';
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
													content += '"uid":"'
															+ tables[tnumb]['plays'][p1]['uid']
															+ '","ctag":0,"giveType":0,"ctype":7},{';
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
													content += '"uid":"'
															+ tables[tnumb]['plays'][p2]['uid']
															+ '","ctag":5';
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
													content += '"uid":"'
															+ tables[tnumb]['plays'][p3]['uid']
															+ '","ctag":5';
													if (tables[tnumb]['plays'][p3]['flag'] == 2) {
														content += ',"giveType":1';
													}
													content += ',"ctype":7,"cardsNum":17},{"uid":"'
															+ tables[tnumb]['plays'][p0]['uid']
															+ '","gameState":1,"ctag":5,"ctype":23},{"total":15,"uid":0,"ctag":0,"ctype":13}]';
													// ［{"uid":1611607,"ctag":0,"gameState":1,"ctype":8},{"cards":[7,53,42,28,22,41,49,45,21,14,37,4,52,3,43,32,29],"uid":1611607,"ctag":0,"giveType":0,"ctype":7},
													// {"uid":4051260,"ctag":53,"ctype":7,"cardsNum":17},
													// {"cards":[18,5,47,40,6,19,34,51,10,17,35,38,39,30,23,44,11],"uid":3631137,"ctag":53,"giveType":1,"ctype":7,"cardsNum":17},
													// {"uid":1611607,"gameState":1,"ctag":53,"ctype":23},{"total":75,"uid":0,"ctag":0,"ctype":13}]
													// {"uid":1160652777,"ctag":0,"gameState":1,"ctype":8},{"cards":[0,39,13,6,27,20,40,10,22,28,42,21,49,53,3,38,34],"uid":1160652809,"ctag":0,"giveType":0,"ctype":7},
													// {"cards":[26,14,7,24,11,1,4,33,2,30,45,15,31,46,9,52,12],"uid":1160652777,"ctag":5,"ctype":7,"cardsNum":17},{"cards":[32,19,44,41,18,51,29,25,35,36,37,43,23,47,8,48,16],"uid":1160652798,"ctag":5,"ctype":7,"cardsNum":17},{"uid":1160652809,"gameState":1,"ctag":5,"ctype":23},{"total":15,"uid":0,"ctag":0,"ctype":13}]
													// {"uid":1611607,"ctag":0,"gameState":1,"ctype":8},{"cards":[25,34,13,0,26,49,53,2,51,1,37,17,35,24,9,32,11],"uid":1611607,"ctag":0,"giveType":0,"ctype":7},{"uid":4025813,"ctag":10,"ctype":7,"cardsNum":17},{"uid":4061821,"ctag":10,"ctype":7,"cardsNum":17},{"uid":1611607,"gameState":1,"ctag":10,"ctype":23},{"total":15,"uid":0,"ctag":0,"ctype":13}]
													io.sockets.sockets[tables[tnumb]['plays'][p1]['uid']]
															.send(
																	//tables[tnumb]['plays'][p1]['uid'],
																	content);
												}
												tables[tnumb]['cards'][0] = array[51];
												tables[tnumb]['cards'][1] = array[52];
												tables[tnumb]['cards'][2] = array[53];
												tables[tnumb]['p0'] = (p0 + 1) % 3;
												tables[tnumb]['pn'] = tables[tnumb]['p0'];// 按新顺序开始
											}
											break;
										case 2:// ctype
											// 消息
											// [{"ctag":28,"ctype":17,"msg":""}]
											break;
										case 10:// ctype
											var ctag = json[m]['ctag'];
											var uid = conn.id;
											var tnumb = players[uid]['tnumb'];
											var pn = tables[tnumb]['pn'];
											//不叫{"ctag":3,"ctype":10,"uid":1611607,"action":0}]
											//叫地主{"ctag":8,"ctype":10,"uid":"1611607","action":1}]
											var action = json[m]['action'];
											if (action == 1) {
												// 消息：叫地主
												//[{"uid":4066632,"ctag":27,"gameState":3,"ctype":8},{"cards":[47,13,29],"uid":4066632,"ctag":27,"giveType":2,"ctype":7},{"ctag":27,"uid":4066632,"ctype":11},{"uid":4066632,"gameState":3,"ctag":27,"ctype":23},{"total":15,"uid":0,"ctag":0,"ctype":13}]
												tables[tnumb].sendMsg('[{"uid":"'
														+ uid
														+ '","ctag":'
														+ ctag
														+ ',"gameState":3,"ctype":8},{"cards":['
														+ tables[tnumb]['cards'].join(',') + '],"uid":"'
														+ uid
														+ '","ctag":'
														+ ctag
														+ ',"giveType":2,"ctype":7},{"ctag":'
														+ ctag
														+ ',"uid":"'
														+ uid
														+ '","ctype":11},{"uid":"'
														+ uid
														+ '","gameState":3,"ctag":'
														+ ctag
														+ ',"ctype":23},{"total":15,"uid":0,"ctag":0,"ctype":13}]', slog);
											} else {
												// 消息：不叫
												//[{"lastWinner":-1,"uid":4134650,"ctag":142,"action":0,"ctype":9},{"uid":1611607,"gameState":1,"ctag":142,"ctype":23}]
												tables[tnumb].sendMsg('[{"lastWinner":-1,"uid":"'
														+ uid
														+ '","ctag":'
														+ ctag
														+ ',"action":0,"ctype":9},{"uid":"' + tables[tnumb]['plays'][pn]['uid'] + '","gameState":1,"ctag":'
														+ ctag
														+ ',"ctype":23}]', slog);
												tables[tnumb]['pn'] = (pn + 1) % 3;
											}
											break;
										case 14:// ctype
											var ctag = json[m]['ctag'];
											var uid = conn.id;
											var tnumb = players[uid]['tnumb'];
											//出牌
											//[{"ctag":7,"ctype":14,"uid":1611607,"cards":[46,33]}]
											//[{"cardType":3,"lastWinner":1611607,"cards":[46,33],"uid":1611607,"ctag":7,"ctype":15},{"uid":3553774,"gameState":3,"ctag":7,"ctype":23}]
											//不出
											//[{"ctag":6,"ctype":14,"uid":1611607}]
											//[{"cardType":5,"lastWinner":3553774,"uid":1611607,"ctag":5,"ctype":15},{"uid":3553774,"gameState":3,"ctag":5,"ctype":23}]
											var cards = json[m]['cards'];
											if (cards != undefined) {
												var pn = tables[tnumb]['pn'];
												tables[tnumb].sendMsg('[{"cardType":3,"lastWinner":"'
														+ uid
														+ '","cards":[' + cards.join(',') + '],"uid":"'
														+ uid
														+ '","ctag":'
														+ ctag
														+ ',"ctype":15},{"uid":"'
														+ tables[tnumb]['plays'][pn]
														+ '","gameState":3,"ctag":'
														+ ctag
														+ ',"ctype":23}]', slog);
												tables[tnumb]['pn'] = (pn + 1) % 3;
											} else {
												var pn = tables[tnumb]['pn'];
												tables[tnumb].sendMsg('[{"cardType":5,"lastWinner":"'
														+ tables[tnumb]['plays'][pn]
														+ '","uid":"'
														+ uid
														+ '","ctag":'
														+ ctag
														+ ',"ctype":15},{"uid":"'
														+ tables[tnumb]['plays'][pn]
														+ '","gameState":3,"ctag":'
														+ ctag
														+ ',"ctype":23}]', slog);
												tables[tnumb]['pn'] = (pn + 1) % 3;
											}
											var uid = conn.id;
											var tnumb = players[uid]['tnumb'];
											var pn = tables[tnumb]['pn'];
											
											break;
										case 16:// ctype
											var ctag = json[m]['ctag'];
											// 脱管
											// [{"ctag":4,"ctype":16,"action":0}]
											var uid = conn.id;
											slog.log('脱管：' + uid);
											var tnumb = players[uid]['tnumb'];
											var pn = tables[tnumb]['pn'];
											//[{"uid":1611607,"state":3,"ctag":4,"flag":8,"ctype":2}]
											tables[tnumb].sendMsg('[{"uid":"'
													+ uid
													+ '","state":3,"ctag":'
													+ ctag
													+ ',"flag":8,"ctype":2}]', slog);
											break;
										case 17:
											// 消息
											// [{"ctag":28,"ctype":17,"msg":""}]
											// [{"uname":"","uid":4043563,"ctag":0,"mtype":0,"msg":"","ctype":18}]
											slog.log('消息：' + json[m]['msg']);
											var uid = conn.id;
											var tnumb = players[uid]['tnumb'];
											tables[tnumb].sendMsg('[{"uname":"","uid":"'
													+ uid
													+ '","ctag":0,"mtype":0,"msg":"'
													+ json[m]['msg']
													+ '","ctype":18}]', slog);
											break;
										default:
										}
									} else {
										slog.log('not ctype');
									}
								}
							});
			var index = 0;
			conn.on('get', function (data) {
				fs.stat(require.nodeRequire.__dirname + data.url,
					function(stat_error, stat) {
						if (!stat_error
								&& stat.isFile()) {
							console.log('have ' + data.url);
							fs.readFile(require.nodeRequire.__dirname + data.url, {encoding: 'utf-8'}, function(err, _data) {
								//console.log(_data);
								index++;
								conn.emit('news', { index: index, url: data.url, content: _data });
							});
						} else {
							console.log('not ' + data.url);
						}
					});
			});
			conn
					.addListener(
							"disconnect",
							function() {
								var uid = conn.id;
								slog.log('断开连接：' + uid);
								if(players[uid] != undefined){//报错
									var tnumb = players[uid]['tnumb'];
									var oldseat = players[uid]['seat'];
									tables[tnumb].delPlay(oldseat);
									players[uid] = undefined;
									slog.log("+++++++++++++ delete uid: " + uid);
									slog.log("+++++++tables++++++:"
											+ JSON.stringify(tables));
									// 离开
									// [{"uid":4006875,"ctag":0,"ctype":4},{"total":15,"uid":0,"ctag":0,"ctype":13}]
									tables[tnumb].sendMsg('[{"uid":"'
											+ uid
											+ '","ctag":0,"ctype":4},{"total":15,"uid":0,"ctag":0,"ctype":13}]', slog);
								}
							});
			}(this.tables, this.players, this.names, this.icons, this.sexs, this.moneys, this.array);
		}
	});
	return cls;
});
