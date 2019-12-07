define([ "dojo/_base/declare" ], function(declare) {
	var cls = declare("ddz-server.player", [], {// 包名
		// {"tid":0,"p0":0,"pn":0,"cards":[],"plays":[{"pos":0,"uid":"mX_CEYaF8ZNjouNEmO56","state":0,"flag":0},null,null]}
		// {"dulc2UcmUfg46OlrmO6G":{"tnumb":0,"seat":0}}
		uid : null,// ID
		name : null,// 名字

		tnumb : null,// 桌号
		seat : null,// 座位
		
//		pos : null,// 位置
//		state : null,// 状态
//		flag : null,// 明暗

		constructor : function(args) {// 构造函数
			this.inherited(arguments);// 调用父类方法
			declare.safeMixin(this, args);
		},
		sendMsg : function(msg) {
			io.sockets.sockets[uid].send(
			// tables[tnumb]['plays'][i]['uid'],
			msg);
		},
		log : function(content) {
			console.error(this.name + ' ' + content);
		}
	});
	return cls;
});
