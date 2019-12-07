define([ "dojo/_base/declare" ],
		function(declare) {
			var cls = declare("ddz-server.table", [], {// 包名
				tid : null,// 桌号
				p0 : null,// 开始发牌
				pn : null,// 下一个人
				cards : [],// 余下三张
				plays : [],// 玩家
				constructor : function(args) {// 构造函数
					this.inherited(arguments);// 调用父类方法
					declare.safeMixin(this, args);
				},
				addPlay : function() {// 添加玩家
					for ( var j = 0; j < this.plays.length; j++) {
						if (this.plays[j] == null) {
							return j;
						}
					}
					return -1;
				},
				delPlay : function(oldseat) {
					this.plays[oldseat] = null;
				},
				sendMsg : function(msg, slog) {// 向桌子玩家发消息
					for ( var i = 0; i < this.plays.length; i++) {
						if (this.plays[i] != null) {
							slog.log("+++++++++++++ 通知: "
									+ this.plays[i]['uid']);
							io.sockets.sockets[this.plays[i]['uid']].send(// tables[oldtnumb]['plays'][i]['uid'],
							msg);
						}
					}
				}
			});
			return cls;
		});
