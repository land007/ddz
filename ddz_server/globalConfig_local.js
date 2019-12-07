A = window.A || {};

(function() {

	
	
	
	
	
	 //线上（web）
	 A.HOME_PATH = "http://192.168.1.189:8000/";
	 A.SERVER_URL = "http://192.168.1.189:8000/";
	 
	

	//阻止默认拖拽事件
	if (!window.IS_AC) {
		document.body.addEventListener("touchmove", function(e) {
			e.preventDefault();
		}, false);
	};

	
	A.STAT_BEGIN_DATE = new Date();

	A.statHallLoadingBegin = function() {
		A._stat(1, 1, 0, 0)
	};

	A.statHallLoadingComplete = function() {
		A._stat(1, 2, new Date().getTime() - A.STAT_BEGIN_DATE.getTime(), 0);
	};

	A.statLoadingBegin = function(gameId) {
		A._stat(2, 1, 0, gameId)
	};

	A.statLoadingComplete = function() {
		if(A.STAT_BEGIN_DATE instanceof Date){
			A._stat(2, 2, new Date().getTime() - A.STAT_BEGIN_DATE.getTime(), A.APP_ID);
			A.STAT_BEGIN_DATE = null;
		}
	};

	A.statLoadingBack = function() {
		if(A.STAT_BEGIN_DATE instanceof Date){
			A._stat(2, 3, new Date().getTime() - A.STAT_BEGIN_DATE.getTime(), A.APP_ID);
			A.STAT_BEGIN_DATE = null;
		}
	};

	A._stat = function(type, dtype, dtime, gameId) {
		try {
			var xhr = new XMLHttpRequest();
			var data = "p=[{\"type\":" + type + ",\"dtype\":" + dtype.toString() + ",\"dtime\":" + dtime.toString() + ",\"gameId\":" + gameId + "}]";
			xhr.open('post', A.SERVER_URL + "dt.log", true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			if (window.H && H.Api) {
				if (type == 1 && window.IS_AC) {
					data += "&ch=" + encodeURIComponent("XX_04_003");
					data += "&ptype=" + encodeURIComponent("客户端");
					xhr.send(data);
				} else {
					if (dtype == 1) {
						H.Api.updateStatParam(function(stat) {
							data += "&ch=" + encodeURIComponent(stat.ch);
							data += "&ptype=" + encodeURIComponent(stat.ptype);
							data += "&nt=" + encodeURIComponent(stat.nt);
							xhr.send(data);
						}, this);
					} else {
						setTimeout(function() {
							H.Api.updateStatParam(function(stat) {
								data += "&ch=" + encodeURIComponent(stat.ch);
								data += "&ptype=" + encodeURIComponent(stat.ptype);
								data += "&nt=" + encodeURIComponent(stat.nt);
								xhr.send(data);
							}, this);
						}, 5000);
					}
				}
			} else {
				if (window.IS_AC) {
					data += "&ch=" + encodeURIComponent("XX_04_003");
					data += "&ptype=" + encodeURIComponent("客户端");
					xhr.send(data);
//				window["native"].call(function(jsonData) {
//					var stat = JSON.parse(jsonData);
//					data += "&ch=" + encodeURIComponent(stat.ch);
//					data += "&ptype=" + encodeURIComponent(stat.ptype);
//					data += "&nt=" + encodeURIComponent(stat.nt);
//					xhr.send(data);
//				}, JSON.stringify({clz : "com.ucweb.h5runtime.H5runtimeActivity", method : "getChAndNt", args : {}}));
				} else {
					data += "&ch=" + encodeURIComponent(A.getQueryURL("ch") || "");
					data += "&ptype=" + encodeURIComponent(A.getQueryURL("ptype") || "");
					xhr.send(data);
				}
			}
		} catch (e) {
		}
	};

	
	A.getQueryURL = function(paraName, url) {
		url = url || String(window.location.href);
		var rs = new RegExp("(^|)" + paraName + "=([^\&]*)(\&|$)", "gi").exec(url), tmp;
		if (tmp = rs) {
			return "" + decodeURIComponent(tmp[2]);
		}
		return null;
	};

	A.PUB_RES = {
		"hallWidget_1.0.0_min.js": A.HOME_PATH + "libs/hallWidget_1.0.0_min.js?v=B33E79EB",
		"背景框01.png": A.HOME_PATH + "widget_images/2f71763cae856de4.png?v=8AB5A696",
		"注册.png": A.HOME_PATH + "widget_images/eaece57157074c34.png?v=5C9AAD47",
		"20": A.HOME_PATH + "goods_images/20.png?v=BA8CDDD4",
		"21": A.HOME_PATH + "goods_images/21.png?v=734E73AB",
		"48": A.HOME_PATH + "goods_images/48.png?v=ABA10310",
		"46": A.HOME_PATH + "goods_images/46.png?v=83B64DF9",
		"47": A.HOME_PATH + "goods_images/47.png?v=D7215210",
		"登录框-底.png": A.HOME_PATH + "widget_images/0ba8503a924d54f2.png?v=FF7B2431",
		"1": A.HOME_PATH + "goods_images/1.png?v=3958A685",
		"0": A.HOME_PATH + "goods_images/0.png?v=8109B09C",
		"3": A.HOME_PATH + "goods_images/3.png?v=BB8CECA6",
		"2": A.HOME_PATH + "goods_images/2.png?v=8109B09C",
		"5": A.HOME_PATH + "goods_images/5.png?v=B7F3C37",
		"4": A.HOME_PATH + "goods_images/4.png?v=57B00D13",
		"7": A.HOME_PATH + "goods_images/7.png?v=4F73273E",
		"6": A.HOME_PATH + "goods_images/6.png?v=2788C5CE",
		"9": A.HOME_PATH + "goods_images/9.png?v=BCFE0FA9",
		"8": A.HOME_PATH + "goods_images/8.png?v=80153E55",
		"hallApi_2.0.0_min.js": A.HOME_PATH + "libs/hallApi_2.0.0_min.js?v=70052F8C",
		"背景框04.png": A.HOME_PATH + "widget_images/11f9eb5e2d5dc5d2.png?v=20772D89",
		"38": A.HOME_PATH + "goods_images/38.png?v=26CC00DC",
		"退出按钮.png": A.HOME_PATH + "widget_images/b92a855630ffcfa9.png?v=D7C4AA53",
		"11": A.HOME_PATH + "goods_images/11.png?v=85D99D80",
		"10": A.HOME_PATH + "goods_images/10.png?v=57940A3A",
		"13": A.HOME_PATH + "goods_images/13.png?v=7CD4440B",
		"12": A.HOME_PATH + "goods_images/12.png?v=5B17D5BC",
		"15": A.HOME_PATH + "goods_images/15.png?v=DF8C446E",
		"14": A.HOME_PATH + "goods_images/14.png?v=F369B26C",
		"17": A.HOME_PATH + "goods_images/17.png?v=11A17FDA",
		"16": A.HOME_PATH + "goods_images/16.png?v=E92A5B19",
		"19": A.HOME_PATH + "goods_images/19.png?v=7DB4D1B3",
		"18": A.HOME_PATH + "goods_images/18.png?v=49367BB5",
		"公告收缩.png": A.HOME_PATH + "widget_images/38172671e0e6da11.png?v=445E1A05",
		"51": A.HOME_PATH + "goods_images/51.png?v=C752468D",
		"50": A.HOME_PATH + "goods_images/50.png?v=3D81B0CB",
		"52": A.HOME_PATH + "goods_images/52.png?v=5B25629D",
		"请求loading.png": A.HOME_PATH + "widget_images/2a084ee007a4b687.png?v=A2B78ED1",
		"h5GameLib_2.0.0_min.js": A.HOME_PATH + "libs/h5GameLib_2.0.0_min.js?v=A3DBD67",
		"h5Lib_2.0.0_min.js": A.HOME_PATH + "libs/h5Lib_2.0.0_min.js?v=66DE1FCE",
		"商城.png": A.HOME_PATH + "widget_images/c9913b51ef865e04.png?v=C74598AD"
	};

	
	A.getGoodsImage = function(id) {
		var a = A.PUB_RES[id];
		if(a == null){
			console.error("请求了未缓存的资源，请检查代码");
			return A.HOME_PATH + "goods_images/" + id + ".png";
		}else{
			return a;
		}
	};

	
	A.getAvatar = A.getGoodsImage;

	
	A.getLib = function(name, ver) {
		var a = A.PUB_RES[name + "_" + ver + "_min.js"];
		if (a == null) {
			console.error("请求了不存在的库，请检查代码");
			return "";
		} else {
			return a;
		}
	};

	
	A.getPubRes = function(name) {
		return A.PUB_RES[name];
	};

	
	A.getRes = function(name) {
		var s = A.RES[name];
		s == null && (s = name);
		return s;
	};

	
	LazyLoad=function(y,l){function t(a,c){var b=l.createElement(a),h;for(h in c)c.hasOwnProperty(h)&&b.setAttribute(h,c[h]);return b}function n(a,c){var b=m[a],h,d,f;b&&(h=b.callback,d=b.onError,f=b.urls,"css"!=a&&f.shift(),g=0,f.length||(h&&h.call(b.context,b.obj),c&&d&&d.call(b.context,b.obj),m[a]=null,o[a].length&&q(a)))}function x(){if(!d){var a=navigator.userAgent;d={async:!0===l.createElement("script").async};(d.webkit=/AppleWebKit\//.test(a))||(d.ie=/MSIE/.test(a))||(d.opera=/Opera/.test(a))||(d.gecko=/Gecko\//.test(a))||(d.unknown=!0)}}function q(a,c,b,h,u,f){var k=function(){n(a,!1)},i=function(){n(a,!0)},r="css"===a,e,j,g;x();if(c)if(c="string"===typeof c?[c]:c.concat(),r||d.async||d.gecko||d.opera)o[a].push({urls:c,callback:b,onError:f,obj:h,context:u});else{e=0;for(j=c.length;e<j;++e)o[a].push({urls:[c[e]],callback:e===j-1?b:null,onError:e===j-1?f:null,obj:h,context:u})}if(!m[a]&&(g=m[a]=o[a].shift())){s||(s=l.head||l.getElementsByTagName("head")[0]);c=g.urls;e=0;for(j=c.length;e<j;++e)b=c[e],r?b=t("link",{charset:"utf-8","class":"lazyload",href:b,rel:"stylesheet",type:"text/css"}):(b=t("script",{charset:"utf-8","class":"lazyload",src:b}),b.async=!1),d.ie?b.onreadystatechange=function(){var a=this.readyState;if(a==="loaded"||a==="complete"){this.onreadystatechange=null;k()}}:r&&(d.gecko||d.webkit)?d.webkit?(g.urls[e]=b.href,v()):setTimeout(k,50*j):(b.onerror=i,b.onload=k),s.appendChild(b)}}function v(){var a=m.css,c;if(a){for(c=w.length;c&&--c;)if(w[c].href===a.urls[0]){n("css");break}g+=1;a&&(200>g?setTimeout(v,50):n("css"))}}var d,s,m={},g=0,o={css:[],js:[]},p={},w=l.styleSheets;return{css:function(a,c,b,d){q("css",a,c,b,d)},js:function(a,c,b,d,g){q("js",a,c,b,d,g)},image:function(a,c,b,d,g){var f={total:a.length,loaded:0,callback:c,hasError:!1},k=(new Date).getTime()+Math.floor(1E4*Math.random());p[k]=f;for(f=0;f<a.length;f++){var i=new Image;i.uuid=k;i.onload=function(a){var a=a.currentTarget.uuid,e=p[a];e.loaded++;e.loaded==e.total&&(delete p[a],e.hasError?g.call(d,b):c.call(d,b))};i.onerror=function(a){p[a.currentTarget.uuid].hasError=!0;i.onload(a)};i.src=a[f]}}}}(this,this.document);

	
	A.onJsLoadError = function() {
		alert("加载引擎出错，需要重新加载。");
	};

	
	A.showGame = function() {
		if (!window.IS_AC && A.embedded) {
			window.parent.postMessage(JSON.stringify({action : "show"}), "*");
		}
	};

	
	A.exitGame = function() {
		A.statLoadingBack && A.statLoadingBack();
		if (!window.IS_AC && A.embedded) {
			window.parent.postMessage(JSON.stringify({action : "exit"}), "*");
		} else {
			if (window.IS_AC) {
				window.open(A.getQueryURL("backUrl"), "_blank");
			} else {
				window.location.href = A.BACK_URL;
			}
		}
	};


	if (!window.IS_AC) {

		

		var ua = window.navigator.userAgent.toLowerCase();

		function isAndroidUCBrowser() {
			return ua.indexOf("uc ") >= 0 || ua.indexOf("ucbrowser") >= 0;
		}

		var isAndroidUC = isAndroidUCBrowser();
		// 游戏的原始尺寸
		var gameWidth = window.GAME_WIDTH || 960;
		var gameHeight = window.GAME_HEIGHT || 576;
		// 是否竖屏
		var isPortraitScreen = window.IS_PORTRAIT || false;
		//如果是竖屏, 而且宽>高, 则自动互换宽高
		if (isPortraitScreen && gameWidth > gameHeight) {
			var tem = gameWidth;
			gameWidth = gameHeight;
			gameHeight = tem;
		}
		// Debug
		var DEBUG_FUL_SCR = false;
		if (window.location.href.indexOf("log=") > 0) {
			DEBUG_FUL_SCR = true;
		}

		//自动适配屏幕尺寸
		function handleFullscreen() {
			_handleFullscreen(gameWidth, gameHeight, isPortraitScreen);
		}

		function _handleFullscreen(org_w, org_h, isPortrait) {
			if (window.top != window) {
				//是嵌入式游戏, 不进行全屏处理, 由父级处理
				return;
			}
			var viewportContent;
			var width;
			var bw = screen.width || window.innerWidth || document.body.offsetWidth;
			var bh = screen.height || window.innerHeight || document.body.offsetHeight;
			if (isPortrait && bw > bh || !isPortrait && bw < bh) {
				//宽高互换
				var tem = bw;
				bw = bh;
				bh = tem;
			}
			if (!isAndroidUC) {
				bh = bh / 30 * 28;
			}
			DEBUG_FUL_SCR && console.log("bw = " + bw + ", bh = " + bh);

			R1 = bw / bh;
			R2 = org_w / org_h;
			DEBUG_FUL_SCR && console.log("R1 = " + R1 + ", R2 = " + R2);

			if (R1 > R2) {    //以高度为基准, 计算宽度
				width = Math.round(org_h * R1);
			} else {
				width = org_w;
			}

			var dpi = "";
			var scalable = ",user-scalable=no";

			//纠正ipod/iphone缩放比例
			if (ua.indexOf("iphone") >= 0 || ua.indexOf("ipod") >= 0) {
				if (!isAndroidUC) {
					width = 1030;
				}
			} else if (ua.indexOf("android") >= 0) {
				dpi = ",target-densitydpi=" + 320;
			}
			DEBUG_FUL_SCR && console.log("width = " + width);

			//设置viewport
			viewportContent = "width=" + width + dpi + scalable;
			DEBUG_FUL_SCR && console.log(ua + ", " + viewportContent + ", " + bw + ", " + bh + ", R1=" + R1 + ", R2=" + R2 + ", width=" + screen.width + ", height=" + screen.height);

			var viewport = document.getElementById("viewport");
			if (viewport) {
				viewport.content = viewportContent;
			} else {
				var newViewport = document.createElement("meta");
				newViewport.name = newViewport.id = "viewport";
				newViewport.content = viewportContent;
				document.head.appendChild(newViewport);
			}
		}

		function removeNavBar() {
			if (ua.indexOf("android 4") >= 0 && ua.indexOf("mobile safari") >= 0 && !isAndroidUC) {    //专门修正android 4自带浏览器, 把地址栏顶上去
				setTimeout(function() {
					window.top.scrollTo(0, 1);
				}, 120);
			} else {
				window.top.scrollTo(0, 1);
			}
		}

		function onOrientationchange(e) {
			removeNavBar();
			if (isAndroidUC) {
				handleFullscreen();
			}
		}

		window.addEventListener('orientationchange', onOrientationchange, false);
		if (isAndroidUC) {
			window.addEventListener('resize', handleFullscreen, false);
			//让uc8.8全屏
			setTimeout(handleFullscreen, 1000);
		}
		handleFullscreen();

		
	} else {

		//加速包壳的全屏处理
		A.acFullScreen = function(gameWidth, gameHeight, deviceWidth, deviceHeight, acCanvas) {
			var r1 = gameWidth / gameHeight;
			var r2 = deviceWidth / deviceHeight;
			var r = 1;
			if (r1 > r2) {
				//以宽作为缩放标准
				r = deviceWidth / gameWidth;
			} else {
				//以高作为缩放标准
				r = deviceHeight / gameHeight;
			}
			//对canvas进行缩放
			acCanvas.scaleCanvas(r, r);
			acCanvas.x=(deviceWidth-r*gameWidth)/2;
			acCanvas.y=(deviceHeight-r*gameHeight)/2;
		};

		//包壳加速特别兼容处理
		A.registerAC = function() {
			window.IS_AC = true;
			//做包壳兼容处理
			window.ontouchstart = function() {
			};
			window.ondevicemotion = function() {
			};
			window.orientation = function() {
			};
			window.parent = {};
			window.parent.postMessage = function() {
			};
			HTMLImageElement = Image;
			HTMLCanvasElement = Canvas;
			HTMLVideoElement = window.Video || {};
		};

		//加速包壳需要改写 LazyLoad 加载机制
		LazyLoad.js = function(array) {
			array = typeof array === 'string' ? [array] : array;
			for (var i = 0, e; i < array.length; i++) {
				e = array[i];
				// 注意包壳需要setTimeout
				setTimeout(require, 1, e);
			}
		};
	}

	A.convertGameUrl = function(url, tt, params) {
		var tmp;
		var homePath = A.HOME_PATH;
		var isHall = location.href.indexOf(homePath) == 0;
		var host = location.host;
		if (host.indexOf("127.0.0.1") == 0 ||
			host.indexOf("192.168") == 0 ||
			host.indexOf("localhost") == 0 ||
			host.indexOf("sdev.") == 0 && location.href.indexOf("/h5/") >= 0 ||
			host.indexOf("115.") == 0 && location.port == "18011" ||
			host.indexOf("221.") == 0 && location.port == "18011" ||
			host == "h5.game.uc.cn" && location.href.indexOf("/android/") >= 0) {
			var reg = new RegExp(".*/((.*)/src|games/(.*))/.*.html(.*)", "gi");
			var gameName = url.replace(reg, "$2$3").replace("_dom", "");
			var param = url.replace(reg, "$4");
			if(location.href.indexOf("/src/") >= 0){
				url = "../../" + gameName + "/src/index.html" + param;
			}else{
				url = homePath.replace("hall/", "games/") + gameName + "/index.html" + param;
			}
		}
		//tt
		url += (url.indexOf("?") == -1 ? "?" : "&") + "tt=" + tt;
		//globalConfig的Url
		url += "&globalConfig=" + encodeURIComponent(isHall ? (homePath + "globalConfig.js?v=" + A.VERSION) : (U.getQueryURL("globalConfig") || (homePath + "globalConfig.js?v=" + A.VERSION)));
		//参数
		typeof(params) == "string" && (url += "&params=" + encodeURIComponent(params));
		//插件判断
		tmp = U.getQueryURL("isplugin");
		typeof(tmp) == "string" && (url += "&isplugin=" + tmp);
		//backUrl
		//url += "&backUrl=" + encodeURIComponent(isHall ? location.href : (U.getQueryURL("backUrl") || (homePath + "index.html")));
		url += "&backUrl=" + encodeURIComponent(isHall ? (location.href + (location.href.indexOf("?") == -1 ? "?" : "&") + "backSource=game") : (U.getQueryURL("backUrl") || (homePath)));
		//统计日志
		url += "&ch=" + encodeURIComponent(U.getQueryURL("ch"));
		url += "&ptype=" + encodeURIComponent(U.getQueryURL("ptype"));
		//游戏是否嵌入
		A.embedded && (url += "&embedded=" + A.embedded);
		//输出日志相关
		tmp = U.getQueryURL("log");
		typeof(tmp) == "string" && (url += "&log=" + tmp);
		tmp = U.getQueryURL("apiLog");
		typeof(tmp) == "string" && (url += "&apiLog=" + tmp);
		tmp = U.getQueryURL("logServerUrl");
		typeof(tmp) == "string" && (url += "&logServerUrl=" + tmp);
		//<dev>
		U.getQueryURL("src") == "1" && (url += "&src=1");
		//</dev>
		U.log("【globalConfig】A.convertGameUrl:" + url);
		return url;
	}
})();
