define([ "dojo/_base/declare", "dojo/node!util" ], function(declare, sys) {
	var cls = declare("ddz-server.slog", [], {// 包名
		months : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
				'Sep', 'Oct', 'Nov', 'Dec' ],
		pad : function(n) {
			return n < 10 ? '0' + n.toString(10) : n.toString(10);
		},
		timestamp : function() {
			var d = new Date();
			return [
					d.getDate(),
					this.months[d.getMonth()],
					[ this.pad(d.getHours()), this.pad(d.getMinutes()),
							this.pad(d.getSeconds()),
							(d.getTime() + "").substr(-4, 4) ].join(':') ]
					.join(' ');
		},
		log : function(msg) {
			sys.puts(this.timestamp() + ' - ' + msg.toString());
		}
	});
	return cls;
});
