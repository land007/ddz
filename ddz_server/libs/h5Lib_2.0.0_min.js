(function(){var a=function(){};this.Class=function(){};Class.extend=function(b){var c=this.prototype;a.prototype=c;var d=new a,e;for(e in b)"function"==typeof b[e]&&"function"==typeof c[e]&&(b[e]._super=c[e]),d[e]=b[e];c=function(){this.init&&this.init.apply(this,arguments)};c.prototype=d;c.prototype.constructor=c;c.extend=arguments.callee;return c};Class.prototype._super=function(a,c){return a.callee._super.apply(this,c||a)};Class.implement=function(a){if(a){var c=function(){},d;for(d in a)"function"==
typeof a[d]&&(c.prototype[d]=a[d]);c.implement=function(a){if(a){var b=a;"function"==typeof b&&(a=a.prototype);var d=new this,c;for(c in d)(!a[c]||"function"!=typeof a[c])&&U.warn("[Class.implement] "+c+" is not implemented");return"function"==typeof b?b:Class.extend(a)}U.warn("[Class.implement] prop is null")};return c}U.warn("[Class.implement] prop is null")}})();
String.prototype.replaceAll=function(a,b){var c=RegExp("","gm");a instanceof RegExp?c.compile(a.source,"gm"+(!0==a.ignoreCase?"i":"")):c=RegExp(a,"gm");if(b instanceof Array){var d=0;return this.replace(c,function(a){d<b.length&&(a=b[d]);++d;return a})}return"string"==typeof b?this.replace(c,b):this};String.prototype.getLengthOfBytes=function(){return this.replace(/[^\x00-\xff]/gi,"--").length};
String.prototype.substrByByteLength=function(a,b){var c=0,d,e=this.length,g;g=this.toString();for(d=a;d<g.length;d++)if(c+=127<g.charCodeAt(d)?2:1,c>b){e=d;break}return g=g.substring(a,e)};String.prototype.getEllipsis=function(a){return this.getLengthOfBytes()>a?this.substrByByteLength(0,a-3)+"...":this};String.prototype.trim=function(){return this.replace(/(^[\s]*)|([\s]*$)/g,"")};String.prototype.lTrim=function(){return this.replace(/(^[\s]*)/g,"")};
String.prototype.rTrim=function(){return this.replace(/([\s]*$)/g,"")};String.prototype.endsWith=function(a){return-1!==this.indexOf(a,this.length-a.length)};Object.prototype.each=function(a,b){if(a){var b=b?b:this,c;for(c in this)if(this.hasOwnProperty(c)){var d=this[c];d!=b&&a.call(b,c,d)}}};Array.prototype.each=function(a,b){for(var c=0;c<this.length;++c){var d=this[c];a.call(b?b:d,d,c)}};
Array.prototype.fetchFirst=function(a,b){if("string"==typeof a)for(var c=0;c<this.length;c++){var d=this[c];if(d[a]==b)return d}else U.log("【jsExtends】警告，数组查询有误");return null};Array.prototype.fetch=function(a,b){var c=[];if("string"==typeof a)for(var d=0;d<this.length;d++){var e=this[d];e[a]==b&&c.push(e)}else U.log("【jsExtends】警告，数组查询列表有误");return c};
Array.prototype.fetchByBitAnd=function(a,b){var c=[];if("string"==typeof a)for(var d=0;d<this.length;d++){var e=this[d];(e[a]&b)==b&&c.push(e)}else U.log("【jsExtends】警告，数组位与查询列表有误");return c};Array.prototype.remove=function(a){for(var b=0;b<this.length;b++)if(this[b]==a)return this.splice(b,1)[0],!0;return!1};
Date.prototype.format=function(a){var b={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":0==this.getHours()%12?12:this.getHours()%12,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()},c={"0":"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"};/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));/(E+)/.test(a)&&(a=a.replace(RegExp.$1,(1<RegExp.$1.length?2<RegExp.$1.length?"星期":"周":"")+c[this.getDay()+
""]));for(var d in b)RegExp("("+d+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?b[d]:("00"+b[d]).substr((""+b[d]).length)));return a};U=window.U||{};
(function(){U.global=this;U.$=function(a){return document.querySelector(a)};U.$new=function(a){return document.createElement(a)};U.random=function(a){return Math.floor(Math.random()*a)};var a=Object.prototype.toString;U.isBool=function(b){return"[object Boolean]"===a.call(b)};U.isNumber=function(b){return"[object Number]"===a.call(b)};U.isString=function(b){return"[object String]"===a.call(b)};U.isDate=function(b){return"[object Date]"===a.call(b)};U.isFunction=function(b){return"[object Function]"===
a.call(b)};U.isArray=function(b){return"[object Array]"===a.call(b)};Array.isArray&&(U.isArray=Array.isArray);U.isObject=function(b){return a.call(b)==="[object Object]"};U.indexOf=function(a,b){for(var c=0,f=b.length,h;(h=b[c])||c<f;c++)if(h==a)return c;return-1};U.remove=function(a,b){var c=U.indexOf(a,b);c>=0&&b.splice(c,1)};U.clone=function(a){return U.isArray(a)?U.cloneArray(a):U.mixin({},a)};U.cloneArray=function(a,b,c){for(var c=c||[],b=b||0,f=a.length;b<f;b++)c.push(a[b]);return c};var b=
{};U.mixin=function(a,c){if(a instanceof Array)for(var g=0;g<c.length;g++)a.push(c[g]);else{a=a||{};if(c){var f;for(g in c){f=c[g];b[g]!==f&&(a[g]=f)}}}return a};U.delegate=function(a,b,c){if(!a){U.error("[U.delegate] func is null");return null}var f=b||window;if(arguments.length>2){var h=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,h);return a.apply(f,b)}}return function(){return a.apply(f,arguments)}};var c=
/{\$([^{}]*)}/g;U.macroize=function(a,b,g){var f,h,g=g||c,i=function(a,c){h=true;f=U.getObject(c,false,b);return f===void 0||f===null?"{$"+c+"}":f},j=0;do{h=false;a=a.replace(g,i)}while(h&&j++<100);return a};U.getObject=function(a,b,c){for(var a=a.split("."),c=c||U.global,f=0,h;c&&(h=a[f]);f++)c=h in c?c[h]:b?c[h]={}:void 0;return c}})();U.IConnector=Class.implement({setProtocolField:function(){},getProtocolField:function(){},bind:function(){},unbind:function(){},request:function(){}});
U.AjaxConnector=Class.extend({init:function(a){this.method="post";this.protocolField="_type";this._callbacks={};a=a instanceof Object?a:{};a.method&&this.setMethod(a.method);a.protocolField&&this.setProtocolField(a.protocolField)},setProtocolField:function(a){this.protocolField=a},getProtocolField:function(){return this.protocolField},setMethod:function(a){this.method=a},bind:function(a,b,c){this._callbacks[a]=this._callbacks[a]||[];c&&(c=U.delegate(b,c),b=this._raltion[b]=c);this._callbacks[a].push(b);
return this},unbind:function(a,b){var c=this._callbacks[a],d;for(d in c)(c[d]==b||c[d]==this._raltion[b])&&delete this._callbacks[a][d]},request:function(a){var b=a||{},a=b.url,c=b.data,d=b.method||this.method,e=b.callback,g=b.context,f=this._getXMLHttpRequest();f.open(d,a,!0);f.setRequestHeader("Content-Type","application/x-www-form-urlencoded");f.onreadystatechange=U.delegate(function(){if(4==f.readyState){var a=e&&g?U.delegate(e,g):e;this._receive(f,c,a)}},this);b=this._generateURL(c);U.log("【AjaxConnector】请求 url:"+
a+", data:"+b+"");f.send(b);f.test=a;f.testdata=b;f.timeoutId=setTimeout(U.delegate(function(){f.abort()},this),3E4);return f},_receive:function(a,b,c){clearTimeout(a.timeoutId);U.log("【AjaxConnector】回复 status:"+a.status+", responseText:"+a.responseText);var d=a.status;200<=d&&300>d?(c&&c(!0,a),this._dispatch(U.AjaxConnector.DATA,{success:!0,data:b})):(c&&c(!1,a),this._dispatch(U.AjaxConnector.ERROR,a))},_dispatch:function(a,b){var c=this._callbacks[a];if(c)for(var d=0;d<c.length;d++)c[d](b);else U.log("【AjaxConnector】No callbacks for "+
a)},_generateURL:function(a){var b="",c;for(c in a){var d=a[c];"object"!=typeof d&&"function"!=typeof d&&(b+="&"+c+"="+encodeURIComponent(d))}0<b.length&&(b=b.substring(1,b.length));return b},_getXMLHttpRequest:function(){try{return new XMLHttpRequest}catch(a){U.log("【AjaxConnector】创建XMLHttpRequest出错",U.LOG_LEVEL_ERROR)}}});U.IConnector.implement(U.AjaxConnector);U.AjaxConnector.ERROR="error";U.AjaxConnector.DATA="data";U._ajaxInstance=new U.AjaxConnector;
U.ajax=function(a,b){return U._ajaxInstance.request(a,b)};U.ajaxGet=function(a,b,c,d){return U._ajaxInstance.request({url:a,method:"get",data:b,callback:c,context:d})};U.ajaxPost=function(a,b,c,d){return U._ajaxInstance.request({url:a,method:"post",data:b,callback:c,context:d})};U.ajaxAbort=function(a){a.abort()};
U.WSConnector=Class.extend({init:function(a){this._heartBeatId=-1;this._heartBeatSendTimeout=22E3;this._checkHeartBeatIsBackTimeout=16E3;this._checkHeartBeatIsBack_timeoutId=-1;this._heartBeatSendData="[]";this._heartBeatReceiveData="";this._heartBeatLaunched=!1;this._lockedTimeout=7E3;this._checkLockedIntervalId=-1;this._lastTimer=0;this._lockedCheckLaunched=!1;this._arrRetries=[];this._retries=0;this._delayRequestTimeId=null;this._delayRequests=[];this._socket=null;this._callbacks={};this._raltion=
{};this._isReconnecting=this._isConnected=!1;this._reconnectTimeId=null;this._requestId=0;this._requests=[];this._requestTimeId=null;this.url="string"==typeof a?a:"";this.dataType="json";this.activeDisconnected=!1;this.allowReconnect=!0;this.retriesLimit=8;this.retriesInterval=3E3;this.requestTimeout=this.retriesCycle=3E4;this.requestIdField=this.protocolField="";a=a instanceof Object?a:{};a.url&&(this.url=a.url);a.allowReconnect&&(this.allowReconnect=a.allowReconnect);a.retriesLimit&&(this.retriesLimit=
a.retriesLimit);a.retriesInterval&&(this.retriesInterval=a.retriesInterval);a.retriesCycle&&(this.retriesCycle=a.retriesCycle);a.protocolField&&this.setProtocolField(a.protocolField);a.requestIdField&&this.setRequestIdField(a.requestIdField)},setProtocolField:function(a){this.protocolField=a},getProtocolField:function(){return this.protocolField},setRequestIdField:function(a){this.requestIdField=a},send:function(a){this._socket.send(a)},bind:function(a,b,c){this._callbacks[a]=this._callbacks[a]||
[];c&&(c=U.delegate(b,c),b=this._raltion[b]=c);this._callbacks[a].push(b);return this},unbind:function(a,b){for(var c=this._callbacks[a],d=0;d<c.length;d++)(c[d]==b||c[d]==this._raltion[b])&&this._callbacks[a].splice(d--,1)},_dispatch:function(a,b){var c=this._callbacks[a];if(c)for(var d=0;d<c.length;d++)c[d](b);else U.log("【WSConnector】No callbacks for "+a)},isConnected:function(){return this._isConnected},isReconnecting:function(){return this._isReconnecting},connect:function(a){setTimeout(U.delegate(function(){!this._isReconnecting&&
this._isConnected?(U.delegate(this._failed,this),U.log("【WSConnector】repeater connect error")):a&&""!=a?(this.url=a,U.log("【WSConnector】Connecting  url:"+this.url),this.allowReconnect=!0,window.WebSocket?(this._socket=new WebSocket(this.url),this._socket.onmessage=U.delegate(this._receive,this),this._socket.onclose=U.delegate(this._close,this),this._socket.onopen=U.delegate(this._open,this)):(this._socket={},setTimeout(U.delegate(this._failed,this),3E3))):U.log("【WSConnector】url empty error")},this),
10)},reconnect:function(){this._destroy();this._socket.close();this._isConnected=!1;this._isReconnecting=!0;this._dispatch(U.WSConnector.RECONNECTING,this._retries);this._heartBeatLaunched&&this._stopHeartBeat();this.connect(this.url)},disconnect:function(){U.log("【WSConnector】disconnecting");this.activeDisconnected=!0;1==this._socket.readyState&&this._socket.close();this._clearReconnectId()},request:function(a,b,c,d){if(1==arguments.length)this._delayRequests.push(a);else{if(""==this.requestIdField||
""==this.protocolField){U.error("【WSConnector】必须设置requestIdField和protocolField属性才能用多参数请求方法");return}var b=U.clone(b),e={data:b,requestTime:(new Date).getTime()};e.data[this.protocolField]=a;c&&(e.data[this.requestIdField]=++this._requestId,e.func=U.delegate(c,d),this._requests.push(e),this._requestTimeId||(this._requestTimeId=setInterval(U.delegate(this._onRequestTimeout,this),5E3)));this._delayRequests.push(e.data)}this._delayRequestTimeId||(this._delayRequestTimeId=setInterval(U.delegate(this._delayRequest,
this),100))},_onRequestTimeout:function(){for(var a=(new Date).getTime(),b=0;b<this._requests.length;b++){var c=this._requests[b];a-c.requestTime>this.requestTimeout&&(c.func({success:!1,error:{code:U.WSConnector.CODE_TIMEOUT,message:"请求超时"},request:c.data}),this._requests.splice(b,1),b--)}0==this._requests.length&&(clearInterval(this._requestTimeId),this._requestTimeId=null)},_delayRequest:function(){if(1==this._socket.readyState){if(clearInterval(this._delayRequestTimeId),this._delayRequestTimeId=
null,0<this._delayRequests.length)switch(this.dataType){case "json":var a=JSON.stringify(this._delayRequests);this._delayRequests.splice(0);this._socket.send(a);U.log("【WSConnector】send:"+a)}}else this._delayRequests.splice(0)},_receive:function(a){if(""!=a.data)switch(this.dataType){case "json":if(U.log("【WSConnector】recvice:"+a.data),a=JSON.parse(a.data),this._dispatch(U.WSConnector.DATA,a),this._heartBeatLaunched&&this._isHeartBeatData(a)&&this._stopCheckingHeartBeatIsBack(),this.requestIdField&&
""!=this.requestIdField&&this.protocolField&&""!=this.protocolField)for(var b=0;b<a.length;b++)for(var c=0;c<this._requests.length;c++)if(this._requests[c][this.requestIdField]==a[this.requestIdField]){var d=this._requests.splice(c,1)[0];if(d.func){d.func({success:!0,data:a,request:d.data});break}}}},_open:function(){this._isConnected=!0;this._isReconnecting?(this._isReconnecting=!1,U.log("【WSConnector】reopened"),this._dispatch(U.WSConnector.RECONNECT,null)):(U.log("【WSConnector】opened"),this._dispatch(U.WSConnector.CONNECT,
null));this._heartBeatLaunched&&this._launchHeartBeat();this._lockedCheckLaunched&&this._launchLockedCheck()},_close:function(){this._isConnected=!1;this._checkAllowReconnect()?(this._retries++,this._isReconnecting=!0,U.log("【WSConnector】"+this._retries+" times reconnecting in "+this.retriesInterval/1E3+" seconds..."),this._dispatch(U.WSConnector.RECONNECTING,this._retries),this._heartBeatLaunched&&this._stopHeartBeat(),this._reconnectTimeId=setTimeout(U.delegate(this.connect,this,this.url),this.retriesInterval)):
(U.log("【WSConnector】closed"),this._retries=0,this._arrRetries.splice(0),this._isReconnecting=!1,this._destroy(),this._dispatch(U.WSConnector.DISCONNECT,this.activeDisconnected),this._heartBeatLaunched&&this._stopHeartBeat(),this.activeDisconnected=!1)},_destroy:function(){this._socket.onclose=null;this._socket.onmessage=null;this._socket.onopen=null;this._clearReconnectId()},_clearReconnectId:function(){null!=this._reconnectTimeId&&(clearTimeout(this._reconnectTimeId),this._reconnectTimeId=null)},
_checkAllowReconnect:function(){if(this.activeDisconnected||!this.allowReconnect)return!1;var a=(new Date).getTime();U.log("【WSConnector】retry data:"+(new Date).toLocaleTimeString());this._arrRetries.push(a);this._arrRetries.length-1>this.retriesLimit&&this._arrRetries.shift();return this._arrRetries.length-1==this.retriesLimit?a-this._arrRetries[0]<this.retriesCycle?!1:!0:!0},_failed:function(){U.log("【WSConnector】failed");this._destroy();this._dispatch(U.WSConnector.FAILED,null)},_launchHeartBeat:function(){this._stopHeartBeat();
this._heartBeatId=setInterval(U.delegate(this._heartBeat,this),this._heartBeatSendTimeout)},_stopHeartBeat:function(){this._stopCheckingHeartBeatIsBack();-1!=this._heartBeatId&&(clearInterval(this._heartBeatId),this._heartBeatId=-1,this._stopLockedCheck())},_heartBeat:function(){this._lastHeartBeatIsFinished()?(U.log("【Net】心跳"),this._socket.send(this._heartBeatSendData),this._checkHeartBeatIsBack_timeoutId=setTimeout(U.delegate(this._checkHeartBeatIsBack,this),this._checkHeartBeatIsBackTimeout)):
U.log("【Net】上次心跳未完成, 该次心跳不发送")},_lastHeartBeatIsFinished:function(){return 0>this._checkHeartBeatIsBack_timeoutId},_stopCheckingHeartBeatIsBack:function(){clearTimeout(this._checkHeartBeatIsBack_timeoutId);this._checkHeartBeatIsBack_timeoutId=-1},_checkHeartBeatIsBack:function(){U.log("【Net】检查心跳是否返回");this._lastHeartBeatIsFinished()?U.log("【Net】心跳已返回"):(U.log("【Net】心跳没有返回, 进行断线重连"),this._dispatch(U.WSConnector.HEART_BEAT_NO_REPLY),this.reconnect());this._stopCheckingHeartBeatIsBack()},_isHeartBeatData:function(a){return a==
this._heartBeatReceiveData?(U.log("【Net】心跳返回"),!0):!1},_launchLockedCheck:function(){U.log("【Net】黑屏检查测试");-1==this._checkLockedIntervalId&&(this._lastTimer=(new Date).getTime(),this._checkLockedIntervalId=setInterval(U.delegate(function(){var a=(new Date).getTime();a-this._lastTimer>this._lockedTimeout&&this.isConnected()&&(U.log("黑屏超时，客户端主动断开重连："+(a-this._lastTimer)),this._dispatch(U.WSConnector.LOCKED_SCREEN),this.reconnect());this._lastTimer=a},this),1E3))},_stopLockedCheck:function(){clearInterval(this._checkLockedIntervalId);
this._checkLockedIntervalId=-1},setLockedTimeout:function(a){this._lockedTimeout=a},setLockedCheckOn:function(a){this._lockedCheckLaunched=a},setHeartBeatOn:function(a){this._heartBeatLaunched=a},setHeartBeatSendTimeout:function(a){this._heartBeatSendTimeout=a},setHeartBeatBackTimeout:function(a){this._checkHeartBeatIsBackTimeout=a},setHeartBeatSendData:function(a){this._heartBeatSendData=a},setHeartBeatReceiveData:function(a){this._heartBeatReceiveData=a}});U.IConnector.implement(U.WSConnector);
U.WSConnector.CONNECT="connect";U.WSConnector.DATA="data";U.WSConnector.DISCONNECT="disconnect";U.WSConnector.FAILED="failed";U.WSConnector.RECONNECT="reconnect";U.WSConnector.RECONNECTING="reconnecting";U.WSConnector.HEART_BEAT_NO_REPLY="HEART_BEAT_NO_REPLY";U.WSConnector.LOCKED_SCREEN="LOCKED_SCREEN";U.WSConnector.CODE_TIMEOUT=-500;U.observer={};
U.observer.Observer=Class.extend({init:function(){this._listeners={}},addListener:function(a,b,c){if(void 0!=a&&b){this._listeners[a]||(this._listeners[a]=[]);for(var a=this._listeners[a],d=0;d<a.length;d++)if(a[d]==b){a[d].func=b;a[d].deleFunc=U.delegate(b,c);return}d={};d.func=b;d.deleFunc=U.delegate(b,c);a.push(d)}},removeListener:function(a,b){if(void 0!=a&&b&&this._listeners[a])for(var c=this._listeners[a],d=0;d<c.length;d++)if(c[d].func==b){c.splice(d,1);0==c.length&&delete this._listeners[a];
break}},notify:function(a,b){if(void 0!=a&&this._listeners[a])for(var c=this._listeners[a],d=0;d<c.length;d++)c[d].deleFunc(b)},clear:function(){this._listeners={}}});U.ob=U.Observer=new U.observer.Observer;U.getExpDate=function(a,b,c){var d=new Date;if("number"==typeof a&&"number"==typeof b&&"number"==typeof b)return d.setDate(d.getDate()+parseInt(a)),d.setHours(d.getHours()+parseInt(b)),d.setMinutes(d.getMinutes()+parseInt(c)),d.toGMTString()};
U.getCookieVal=function(a){var b=document.cookie.indexOf(";",a);-1==b&&(b=document.cookie.length);return unescape(document.cookie.substring(a,b))};U.getCookie=function(a){if(window.IS_AC)return document.getCookie(a);for(var a=a+"=",b=a.length,c=document.cookie.length,d=0;d<c;){var e=d+b;if(document.cookie.substring(d,e)==a)return U.getCookieVal(e);d=document.cookie.indexOf(" ",d)+1;if(0==d)break}return null};
U.setCookie=function(a,b,c,d,e,g){window.IS_AC?document.setCookie(a,b,c):document.cookie=a+"="+escape(b)+(c?"; expires="+c:"")+(d?"; path="+d:"")+(e?"; domain="+e:"")+(g?"; secure":"")};U.deleteCookie=function(a,b,c){window.IS_AC?document.deleteCookie(a):U.getCookie(a)&&(document.cookie=a+"="+(b?"; path="+b:"")+(c?"; domain="+c:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT")};U.Store=window.U.Store||{};
U.Store.get=function(a){var b;try{localStorage.setItem("testIosPrivate","1"),b=localStorage.getItem(a)}catch(c){U.log(c," switch to cookie"),b=U.getCookie(a)}return b};U.Store.set=function(a,b){try{localStorage.removeItem(a),localStorage.setItem(a,b)}catch(c){U.log(c," switch to cookie"),U.setCookie(a,b)}};U.LOG_LEVEL_DEBUG=-1;U.LOG_LEVEL_LOG=0;U.LOG_LEVEL_INFO=1;U.LOG_LEVEL_WARN=2;U.LOG_LEVEL_ERROR=3;U.LOG_LEVEL_FATAL=4;
U.LOG_DEFAULT_CONFIG={type:"",id:0,serverEnable:!1,serverUrl:null,delayTime:null,currentLevel:U.LOG_LEVEL_LOG,consoleEnable:!0};U.logConfig=null;U._cacheLogs=[];U._delayTimeoutId=null;U.setLogConfig=function(a){a&&(U.logConfig=U.mixin(a))};U.setLogConfigValue=function(a,b){U.logConfig[a]=b};
U.log=function(a,b){if(null==U.logConfig){var c=location.host+location.pathname,c=c.substring(0,c.lastIndexOf("/")).replace(/(\/|\:)/gi,"."),d=U.getQueryURL("log"),e=U.getQueryURL("logServerUrl");U.logConfig={type:c,id:0,serverEnable:null!=e&&""!=e,serverUrl:e,delayTime:3,currentLevel:U.LOG_LEVEL_DEBUG,consoleEnable:"1"==d}}c=U.logConfig;if(c.serverEnable||c.consoleEnable)!b&&(b=U.LOG_LEVEL_LOG),b>=c.currentLevel&&(d=new Date,e="00"+d.getMilliseconds(),d=d.toTimeString().substr(0,8)+"."+e.substr(e.length-
3),d="【"+U._getLogLevelName(b)+"】【"+c.id+"】【"+d+"】"+a,"string"==typeof c.serverUrl&&isFinite(c.delayTime)&&(U._cacheLogs.push(d),U._delayTimeoutId||(U._delayTimeoutId=setTimeout(U.delegate(function(){U._delayTimeoutId=null;U._sendLogToServer()},this),1E3*c.delayTime))),c.consoleEnable&&(b==U.LOG_LEVEL_DEBUG&&console.debug?console.debug(a):b==U.LOG_LEVEL_INFO&&console.info?console.info(d):b==U.LOG_LEVEL_WARN&&console.warn?console.warn(d):b>=U.LOG_LEVEL_ERROR&&console.error?console.error(d):console.log(d)))};
U.debug=function(a){U.log(a,U.LOG_LEVEL_DEBUG)};U.warn=function(a){U.log(a,U.LOG_LEVEL_WARN)};U.error=function(a){U.log(a,U.LOG_LEVEL_ERROR)};U.fatal=function(a){U.log(a,U.LOG_LEVEL_FATAL)};U._getLogLevelName=function(a){switch(a){case U.LOG_LEVEL_DEBUG:return"调试";case U.LOG_LEVEL_ERROR:return"错误";case U.LOG_LEVEL_INFO:return"信息";case U.LOG_LEVEL_WARN:return"警告";case U.LOG_LEVEL_FATAL:return"致命错误";default:return"未知"}};
U._sendLogToServer=function(){var a=U.logConfig;if(a.serverEnable){console.log("【U.log】send to serverUrl:"+a.serverUrl+", type:"+a.type);var b=new XMLHttpRequest;b.open("post",a.serverUrl,!0);b.setRequestHeader("Content-Type","application/x-www-form-urlencoded");a="type="+a.type+"&msg="+encodeURIComponent("\r\n"+U._cacheLogs.join("\r\n"));b.send(a);U._cacheLogs.splice(0)}};U.setQueryURL=function(a,b){b=b||""+window.location.href;b=-1==b.indexOf("?")?b+"?":b+"&";return b+a};
U.removeQueryURL=function(a,b){b=b||""+window.location.href;return b.replace(RegExp("(^|)"+a+"=([^&]*)(&|$)","gi"),"")};U.getQueryURL=function(a,b){var b=b||""+window.location.href,c;return(c=RegExp("(^|)"+a+"=([^&]*)(&|$)","gi").exec(b))?""+decodeURIComponent(c[2]):null};U.formatNumber=function(a){a=(""+a).replace(/[^\/0-9]/g,"")-0;return isNaN(a)?0:a};U.hasFlag=function(a,b){return(a&b)==b};
U.getBrowser=function(){var a=navigator.userAgent.toLowerCase();return null==a?U.BROWSER_IE:-1!=a.indexOf("chrome")?U.BROWSER_CHROME:-1!=a.indexOf("opera")?U.BROWSER_OPERA:-1!=a.indexOf("msie")?U.BROWSER_IE:-1!=a.indexOf("safari")?U.BROWSER_SAFARI:-1!=a.indexOf("firefox")?U.BROWSER_FIREFOX:-1!=a.indexOf("uc ")?U.BROWSER_UC:-1!=a.indexOf("gecko")?U.BROWSER_GECKO:U.BROWSER_IE};U.BROWSER_CHROME=1;U.BROWSER_OPERA=2;U.BROWSER_IE=3;U.BROWSER_SAFARI=4;U.BROWSER_FIREFOX=5;U.BROWSER_GECKO=6;U.BROWSER_UC=7;
U.getMobile=function(){var a=navigator.userAgent.toLowerCase();return null==a?"":-1!=a.indexOf("iphone")?U.MOBILE_IPHONE:-1!=a.indexOf("ipad")?U.MOBILE_IPAD:-1!=a.indexOf("ipod")?U.MOBILE_IPOD:-1!=a.indexOf("android")?U.MOBILE_ANDROID:U.MOBILE_PC};U.MOBILE_IPHONE=1;U.MOBILE_IPAD=2;U.MOBILE_IPOD=3;U.MOBILE_ANDROID=4;U.MOBILE_PC=5;
U.formatDateTime=function(a,b){var c,b=b.replace("yyyy",a.getFullYear().toString()),b=b.replace("yy",a.getFullYear().toString().substr(3,2));c=(a.getMonth()+1).toString();b=b.replace("mm",1==c.length?"0"+c:c);b=b.replace("m",c);c=a.getDate().toString();b=b.replace("dd",1==c.length?"0"+c:c);b=b.replace("d",c);c=a.getHours().toString();b=b.replace("hh",1==c.length?"0"+c:c);b=b.replace("h",c);c=a.getMinutes().toString();b=b.replace("nn",1==c.length?"0"+c:c);b=b.replace("n",c);c=a.getSeconds().toString();
b=b.replace("ss",1==c.length?"0"+c:c);return b=b.replace("s",c)};