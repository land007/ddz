H = window.H || {};
H.apis = H.apis || {};
H.apis.Enum = {
    URL_USER_CHECK_THIRD_TOKEN: "user.checkThirdToken",
    URL_USER_GET_THIRD_TOKEN: "user.loginSelfGame",
    URL_GAME_LIST: "game.list",
    URL_TOKEN: "user.gameAuthorize",
    URL_RECONNECT: "user.reconn",
    URL_HEARTBEAT: "user.heartbeat",
    URL_STAT: "dt.log",
    URL_NOTICE_LIST: "notice.list",
    URL_GAME_NOTICE: "box.gameNotice",
    BIND_TYPE_HEARTBEAT: "BIND_TYPE_HEARTBEAT",
    BIND_TYPE_DATA: "BIND_TYPE_DATA",
    BIND_TYPE_ERROR: "BIND_TYPE_ERROR",
    ERROR: {
        "0": "连接服务器失败",
        "-10101": "取得钥匙接口返回success为false",
        "-10102": "取得的钥匙数据不完整",
        "-10301": "收到的ajax.status状态没有在正常值内",
        "-10302": "收到的ajax.responseText值为空",
        "-10303": "收到的ajax.responseText值不是合法的json字符串",
        "-10501": "服务器返回的json数据中，第一个status不是数字",
        "-20101": "本地缓存的tt和uid没有同时存在，数据被破坏",
        "-30101": "调用断线重连接口，返回success为true，但是没有数据",
        "-30102": "调用游戏Token接口，返回success为true，但是没有数据",
        "-30103": "调用取tt接口，返回success为true，但是没有数据",
        "-30104": "调用验证tt接口，返回success为true，但是没有数据",
        "-30105": "调用取游戏信息接口，返回success为true，但是没有数据",
        "-90101": "合并请求的请求项不能为空",
        "-90102": "合并请求的请求项数量为0",
        "-90103": "ajax请求的url前缀和action不能为空",
        "-90104": "未初始化url参数",
        "-90105": "未初始化gameId参数",
        100 : "连接服务器失败",
        401 : "访问数据服务失败",
        402 : "参数无效，包括参数缺失（缺少必填参数）、参数类型错误、格式不符、取值越界等",
        403 : "GAME TOKEN无效",
        404 : "请求非法",
        405 : "非法签名",
        406 : "服务器内部错误",
        407 : "用户不存在",
        408 : "用户物品过期",
        409 : "用户没有此物品",
        410 : "欢乐豆赠送失败",
        411 : "转账失败",
        412 : "更新订单出错（订单号码输错或者不存在）",
        413 : "U点支付失败",
        414 : "数据服务错误",
        415 : "金币游戏冲突",
        416 : "没有赠送信息",
        417 : "脱离卡死失败",
        418 : "今天密码输入次数过多",
        419 : "用户正在玩其他游戏",
        420 : "第三方游戏信息获取出错",
        421 : "转盘不可用（活动没有开始或者没有奖品可以被抽中）",
        422 : "密码修改,必须重新登录",
        423 : "密钥过期",
        424 : "此应用没有调用此接口的权限",
        431 : "用户已激活",
        432 : "用户已绑定",
        433 : "用户登录状态为空",
        434 : "邮箱已被注册",
        435 : "注册密码有误",
        436 : "注册出错，具体原因未知",
        437 : "试玩账号没有此权限",
        438 : "sid或者tt失效",
        439 : "绑定出错,服务器错误",
        440 : "昵称不合法",
        441 : "活动不在周期内（已过期或者没开始）",
        442 : "开放平台更新用户信息出错",
        1401 : "宝箱id无效",
        1402 : "钥匙不够",
        1403 : "开启宝箱条件不足,如等级不够等",
        1404 : "用户没有此宝箱",
        1405 : "宝箱用户U型宝石不足",
        1406 : "宝箱兑换物品不足",
        1407 : "玩家资料输入有误",
        "": ""
    },
    MESSAGE: {
        400 : "密码错误，请重新输入！<br>（连续输错3次转账系统将被锁定）",
        407 : "您输入的uid有误",
        411 : "转账失败，请重新操作！",
        413 : "U点支付失败",
        415 : "您的账号正在欢乐豆游戏中，请稍候尝试！",
        417 : "脱离失败，请重试！",
        418 : "由于您的密码连续输错3次，转账系统已被锁定，请明天再试！",
        422 : "经检测，您的密码已更改，请重新登陆！",
        431 : "用户激活失败，用户已激活。",
        432 : "用户绑定失败，用户已绑定。",
        433 : "用户登录信息已过期，请重新登陆！",
        434 : "邮箱已被注册",
        435 : "注册密码有误",
        436 : "注册出错，具体原因未知",
        440 : "昵称违规，请重新输入"
    },
    SYS_NETWORK_ERROR: "请求超时，请确保网络畅通后重试！<br/>（#%s）",
    SYS_SERVICE_UNAVAILABLE: "服务维护中，请稍等片刻！<br/>（#%s）"
};
H.apis.ApiData = function() {
    this.apiPrefix = "";
    this.game = null;
    this.hallApiUrl = "";
    this.uid = this.gameId = 0
};
H.apis.ApiData.getInstance = function() {
    H.apis.ApiData._instance || (H.apis.ApiData._instance = new H.apis.ApiData);
    return H.apis.ApiData._instance
};
H.apis.Error = function() {
    this.code = 0;
    this.tip = this.message = void 0
};
H.apis.Game = function() {
    this.gameId = 0;
    this.gameName = "";
    this.tag = 0;
    this.apiUrl = "";
    this.thirdpartyType = 0;
    this.gameUrl = ""
};
H.apis.Game.TAG_NONE = 0;
H.apis.Game.TAG_HOT = 1;
H.apis.Game.TAG_NEW = 2;
H.apis.Game.TAG_RECOMMEND = 4;
H.apis.Game.TAG_HIDE = 8;
H.apis.Game.TAG_GOTO = 16;
H.apis.Game.THIRDPARTY_TYPE_SELF = 0;
H.apis.Game.THIRDPARTY_TYPE_9GAME = 1;
H.apis.Game.THIRDPARTY_TYPE_STANDARD = 2;
H.apis.Request = function(a) {
    a = a || {};
    this.action = a.action || "";
    this.data = a.data || null;
    this.ignoreError = a.ignoreError || !1
};
H.apis.StatParam = function() {
    this.nt = this.ua = this.ptype = this.ch = ""
};
H.delegate = function(a, d, b) {
    var c = d || window;
    if (2 < arguments.length) {
        var f = Array.prototype.slice.call(arguments, 2);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(b, f);
            return a.apply(c, b)
        }
    }
    return function() {
        return a.apply(c, arguments)
    }
};
AC = {
    _callJava: function(a, d, b, c) {
        a = {
            clz: a,
            method: d
        };
        b && (a.args = b);
        c || (c = function() {});
        window["native"].call(c, JSON.stringify(a))
    },
    getStatParam: function(a) {
        this._callJava("com.ucweb.h5runtime.H5runtimeActivity", "getChAndNt", {},
        a)
    }
};
H.ApiRequest = function() {
    function a() {
        if (n && m) return ! 0;
        var a = r.getItem(l.apiPrefix + "skey"),
        b = r.getItem(l.apiPrefix + "tkey"),
        c = r.getItem(l.apiPrefix + "expireData");
        return a && b && c && 864E5 <= c - (new Date).getTime() ? (n = hex_md5(hex_md5("" + a)), m = b, !0) : !1
    }
    function d(a, b) {
        q(l.hallApiUrl, "dt.sign", {},
        function(c) {
            if (c.success) if (c = c.data, 200 != c.status) a && H.delegate(a, b || window, {
                success: !1,
                error: j(c.status, c.message)
            })();
            else {
                var d = c.data,
                c = d.skey,
                f = d.tkey,
                d = d.expireIn || 0,
                d = new Date((new Date).getTime() + d);
                c && f && d ? (r.setItem(l.apiPrefix + "skey", c), r.setItem(l.apiPrefix + "tkey", f), r.setItem(l.apiPrefix + "expireData", d.getTime()), n = hex_md5(hex_md5("" + c)), m = f, a && H.delegate(a, b || window, {
                    success: !0
                })()) : a && H.delegate(a, b || window, {
                    success: !1,
                    error: j( - 10102)
                })()
            } else a && H.delegate(a, b || window, {
                success: !1,
                error: c.error
            })()
        },
        this)
    }
    function b(a, b, d, f) {
        if (null == b) d && H.delegate(d, f || window, {
            success: !1,
            error: j( - 90101)
        })();
        else if (0 == (b instanceof Array ? b: [b]).length) d && H.delegate(d, f || window, {
            success: !1,
            error: j( - 90102)
        })();
        else {
            var e = {
                responses: [],
                errors: []
            };
            e.requests = b instanceof Array ? b: [b];
            e.prefix = a;
            e.callback = d && f ? H.delegate(d, f) : d; ! o[a] && (o[a] = {
                acts: []
            });
            o[a].acts.push(e);
            i || (i = setTimeout(function() {
                clearTimeout(i);
                i = null;
                for (var a in o) {
                    var b = o[a];
                    o.hasOwnProperty(a) && b instanceof Object && c(a, b)
                }
                o = {}
            },
            0))
        }
    }
    function c(b, c) {
        var e = {
            v: "2.0",
            appId: l.gameId,
            nativeApp: window.IS_AC ? 1 : 0
        },
        s = r.getCookies();
        if (s) for (var i in s) i && ("" != i && 0 == i.indexOf(l.apiPrefix)) && (e[i.substr(l.apiPrefix.length)] = s[i]);
        i = "";
        for (var o = [], j = 0; j < c.acts.length; j++) for (var k = c.acts[j], m = 0; m < k.requests.length; m++) {
            var n = k.requests[m]; ! n.data && (n.data = {}); ! isNaN(n.data.appId) && (n.data.gameId = n.data.appId);
            n.data.requestId = ++p;
            n.data.action = h(n.action);
            i += "\n请求动作[" + j + "_" + m + "]:" + JSON.stringify(n.data) + ",";
            var q = window.requestStat = window.requestStat || {};
            isNaN(q[n.data.action]) && (q[n.data.action] = 0);
            q.show = function() {
                var a = 0,
                b = window.requestStat,
                c;
                for (c in b) b.hasOwnProperty(c) && "number" == typeof b[c] && (a++, console.log(c + ":" + b[c]));
                return a
            };
            q[n.data.action] += 1;
            o.push(n.data)
        }
        H.log("【ApiRequest】向服务器发送数据结构-----------------------------------------\ncookies:" + JSON.stringify(s) + "," + i);
        e.param = o;
        c.prefix = b;
        c.ajaxParam = e;
        a() ? f(c) : d(function(a) {
            a.success ? f(c) : g(c, a)
        },
        this)
    }
    function f(a) {
        var b = a.prefix,
        c = a.ajaxParam,
        d = {};
        c.tkey = m;
        for (var f in c) c.hasOwnProperty(f) && "object" != typeof c[f] && (d[f] = c[f]);
        f = l.gameId + n + v(c);
        d.sign = hex_md5(f);
        d.param = Object.toJSON ? c.param.toJSON() : JSON.stringify(c.param);
        q(b, "dt.action", d,
        function(b) {
            e(b, a)
        },
        this)
    }
    function e(a, b) {
        if (a.success) {
            var c = a.data,
            e = c.cookies;
            if (e instanceof Array) for (var i = new Date,
            o = 0; o < e.length; o++) {
                var p = e[o];
                p && r.setCookie(l.apiPrefix + p.name, p.value, isNaN(p.maxAge) ? void 0 : new Date(i.getTime() + 1E3 * p.maxAge))
            }
            "number" != typeof c.status && g(b, {
                success: !1,
                error: j( - 10501)
            });
            if (423 == c.status) d(function(a) {
                a.success ? (z++, z <= C ? f(b) : g(b, {
                    success: !1,
                    error: j(a.status, a.message)
                })) : g(b, a)
            },
            this);
            else if (200 != c.status) g(b, {
                success: !1,
                error: j(c.status, c.message)
            });
            else {
                for (o = 0; o < c.data.length; o++) if (e = c.data[o]) if (e.data && !isNaN(e.data.gameId) && (e.data.appId = e.data.gameId), p = w(b, e.requestId)) i = p.act,
                p = p.request,
                200 == e.status ? (i.responses.push({
                    success: !0,
                    data: e.data,
                    request: p,
                    action: e.action.replace("/", "")
                }), null == i.success && (i.success = !0, i.data = e.data)) : p.ignoreError || (p = j(e.status, e.message), s.dispatch(H.apis.Enum.BIND_TYPE_ERROR, p), i.errors.push({
                    success: !1,
                    error: p,
                    action: e.action.replace("/", "")
                }), null == i.success && (i.success = !1, i.data = e.data, i.error = p));
                for (o = 0; o < b.acts.length; o++) i = b.acts[o],
                0 < i.responses.length && s.dispatch(H.apis.Enum.BIND_TYPE_DATA, {
                    responses: i.responses,
                    errors: i.errors
                }),
                i.success || (i.success = !1, i.error = i.error),
                i.callback && i.callback(i)
            }
        } else g(b, {
            success: !1,
            error: a.error
        })
    }
    function g(a, b) {
        for (; 0 < a.acts.length;) {
            var c = a.acts[0];
            c.callback && c.callback(b);
            s.dispatch(H.apis.Enum.BIND_TYPE_ERROR, b.error);
            break
        }
    }
    function q(a, b, c, d, e) {
        if ("string" == typeof a && "" != a && "string" == typeof b && "" != b) {
            var b = h(b),
            f = new H.apis.Request({
                action: b,
                data: c
            });
            f.callback = d && e ? H.delegate(d, e) : d;
            f.data = c || {};
            var i = new XMLHttpRequest,
            a = a + b.substr(1); ! window.IS_AC && (B && 0 < b.indexOf("dt.action")) && (a += "?uc_param_str=vefrnt&", B = !1);
            i.open("post", a, !0);
            i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            i.onreadystatechange = function() {
                i.readyState == 4 && x(i, f)
            };
            b = k(c);
            i._requestId = ++y;
            H.log("【ApiRequest】基础请求 xhrId:" + i._requestId + ", url:" + a);
            i.send(b);
            i.timeoutId = setTimeout(function() {
                i.abort()
            },
            3E4)
        } else H.log("调用接口的参数不匹配"),
        H.delegate(d, e, {
            success: !1,
            error: _apiRequest.getError( - 90103)
        })()
    }
    function x(a, b) {
        var c;
        H.log("【ApiRequest】基础回复 xhrId:" + a._requestId + ", status:" + a.status + "\nresponseText:" + a.responseText);
        clearTimeout(a.timeoutId);
        if (200 > a.status || 300 <= a.status) b.callback && b.callback({
            success: !1,
            error: j( - 10301)
        });
        else if (!a.responseText || "" == a.responseText) b.callback && b.callback({
            success: !1,
            error: j( - 10302)
        });
        else {
            try {
                c = eval("(" + a.responseText + ")")
            } catch(d) {
                H.log("【ApiRequest】解析数据出错，数据为：" + a.responseText);
                b.callback && b.callback({
                    success: !1,
                    error: j( - 10303)
                });
                return
            }
            b.callback && b.callback({
                success: !0,
                data: c
            })
        }
    }
    function w(a, b) {
        for (var c = 0; c < a.acts.length; c++) for (var d = a.acts[c], e = 0; e < d.requests.length; e++) {
            var f = d.requests[e];
            if (b == f.data.requestId) return {
                act: d,
                request: f
            }
        }
        return null
    }
    function v(a) {
        a = t(a);
        return a = a.replace(/%20/gi, "+").replace(/(!)|(')|(\()|(\))|(\~)/gi,
        function(a) {
            return "%" + a.charCodeAt(0).toString(16).toLocaleUpperCase()
        })
    }
    function t(a) {
        var b = "";
        switch (typeof a) {
        case "string":
            b += encodeURIComponent(a);
            break;
        case "object":
            if (a instanceof Array) for (var c = 0; c < a.length; c++)"function" != typeof a[c] && (b += t(a[c]));
            else for (c = "";
            "" != (c = u(a, c));)"" != c && (b += c + "=" + t(a[c]));
            break;
        case "undefined":
        case "function":
            b += "";
            break;
        default:
            b += a.toString()
        }
        return b
    }
    function u(a, b) {
        var c = "";
        if ("object" == typeof a) {
            for (var d in a) if ("function" != typeof a[d] && a.hasOwnProperty(d) && b < d && ("" == c || c > d)) c = d;
            return c
        }
        return ""
    }
    function h(a) {
        a = a.replace("?", "");
        0 != a.indexOf("/") && (a = "/" + a);
        return a
    }
    function k(a) {
        var b = "",
        c;
        for (c in a) {
            var d = a[c];
            "function" != typeof d && "object" != typeof d && (b += "&" + c + "=" + encodeURIComponent(d))
        }
        0 < b.length && (b = b.substring(1, b.length));
        return b
    }
    function j(a, b) {
        a = "number" == typeof a ? Number(a) : 0;
        b = H.apis.Enum.MESSAGE["" + a] || b;
        null == b && (b = 0 == a ? H.apis.Enum.SYS_NETWORK_ERROR.replace("%s", a) : H.apis.Enum.SYS_SERVICE_UNAVAILABLE.replace("%s", a));
        var c = new H.apis.Error;
        c.code = a;
        c.message = b;
        c.tip = H.apis.Enum.ERROR["" + a];
        console.error(JSON.stringify(c));
        return c
    }
    this.mergeRequest = function(a, c, d, e) {
        b(a, c, d, e)
    };
    this.ajaxRequest = function(a, b, c, d, e) {
        q(a, b, c, d, e)
    };
    this.getBinder = function() {
        return s
    };
    this.getError = function(a, b) {
        return j(a, b)
    };
    var l = H.apis.ApiData.getInstance(),
    n,
    m,
    y = 0,
    r = new H.DB,
    s = new H.Binder,
    p = 0,
    i = null,
    o = {},
    B = !0,
    z = 0,
    C = 10
};
H.Binder = function() {
    this.bind = function(b, c, f) {
        a[b] = a[b] || [];
        f && (f = H.delegate(c, f), c = d[c] = f);
        a[b].push(c)
    };
    this.unbind = function(b, c) {
        var f = a[b],
        e;
        for (e in f)(f[e] == c || f[e] == d[c]) && delete a[b][e]
    };
    this.dispatch = function(b, c) {
        var d = a[b];
        if (d) for (var e = 0; e < d.length; e++) d[e](c)
    };
    var a = {},
    d = {}
};
H.DB = Class.extend({
    init: function() {
        try {
            window.localStorage && (this.isLS = !0)
        } catch(a) {
            this.isLS = !1
        }
    },
    getRuntime: function() {
        return this.isLS
    },
    setItem: function(a, d) {
        try {
            localStorage.removeItem(a),
            localStorage.setItem(a, d)
        } catch(b) {
            uc.h5.log(b, " switch to cookie"),
            this.setCookie(a, d)
        }
    },
    getItem: function(a) {
        var d;
        try {
            localStorage.setItem("testIosPrivate", "1"),
            d = localStorage.getItem(a)
        } catch(b) {
            uc.h5.log(b, " switch to cookie"),
            d = this.getCookie(a)
        }
        return d
    },
    delItem: function(a) {
        this.isLS ? localStorage.removeItem(a) : this.deleteCookie(a)
    },
    clearCookie: function() {
        var a = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (a) for (var d = a.length; d--;) this.deleteCookie(a[d])
    },
    getCookies: function() {
        for (var a = document.cookie.split("; "), d = {},
        b = 0; b < a.length; b++) {
            var c = a[b].split("=");
            d[decodeURIComponent(c[0])] = decodeURIComponent(c[1])
        }
        return d
    },
    getCookie: function(a) {
        if (window.IS_AC) return document.getCookie(a);
        for (var a = encodeURIComponent(a), d = document.cookie.split("; "), b = 0; b < d.length; b++) {
            var c = d[b].split("=");
            if (c[0] == a) return decodeURIComponent(c[1])
        }
        return ""
    },
    setCookie: function(a, d, b) {
        b instanceof Date ? b = b.toGMTString() : "string" !== typeof b && (b = "");
        null == d && (d = "");
        window.IS_AC ? document.setCookie(a, d, b) : document.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(d) + (b ? "; expires=" + b: "") + "; path=/"
    },
    deleteCookie: function(a) {
        if (window.IS_AC) document.deleteCookie(a);
        else {
            var a = encodeURIComponent(a),
            d = new Date;
            d.setTime(d.getTime() - 1E4);
            document.cookie = a + "=undefined; expires=" + d.toGMTString() + "; path=/"
        }
    }
});
H.LOG_LEVEL_DEBUG = 0;
H.LOG_LEVEL_INFO = 1;
H.LOG_LEVEL_WARN = 2;
H.LOG_LEVEL_ERROR = 3;
H.LOG_LEVEL_FATAL = 4;
H.LOG_DEFAULT_CONFIG = {
    type: "",
    id: 0,
    serverEnable: !1,
    serverUrl: null,
    delayTime: null,
    currentLevel: H.LOG_LEVEL_DEBUG,
    consoleEnable: !0
};
H.logConfig = null;
H._cacheLogs = [];
H._delayTimeoutId = null;
H.setLogConfig = function(a) {
    a && (H.logConfig = H.mixin(a))
};
H.setLogConfigValue = function(a, d) {
    H.logConfig[a] = d
};
H.log = function(a, d) {
    if (null == H.logConfig) {
        var b = location.host + location.pathname,
        b = b.substring(0, b.lastIndexOf("/")).replace(/(\/|\:)/gi, "."),
        c = H.getQueryURL("apiLog"),
        f = H.getQueryURL("logServerUrl");
        H.logConfig = {
            type: b,
            id: 0,
            serverEnable: null != f && "" != f,
            serverUrl: f,
            delayTime: 3,
            currentLevel: H.LOG_LEVEL_DEBUG,
            consoleEnable: "1" == c
        }
    }
    b = H.logConfig;
    if (b.serverEnable || b.consoleEnable) ! d && (d = 0),
    d >= b.currentLevel && (c = new Date, f = "00" + c.getMilliseconds(), c = c.toLocaleTimeString().substr(0, 8) + "." + f.substr(f.length - 3), c = "【" + H._getLogLevelName(d) + "】【" + b.id + "】【" + c + "】" + a, "string" == typeof b.serverUrl && isFinite(b.delayTime) && (H._cacheLogs.push(c), H._delayTimeoutId || (H._delayTimeoutId = setTimeout(H.delegate(function() {
        H._delayTimeoutId = null;
        H._sendLogToServer()
    },
    this), 1E3 * b.delayTime))), b.consoleEnable && (d == H.LOG_LEVEL_DEBUG && console.debug ? console.debug(c) : d == H.LOG_LEVEL_INFO && console.info ? console.info(c) : d == H.LOG_LEVEL_WARN && console.warn ? console.warn(c) : d >= H.LOG_LEVEL_ERROR && console.error ? console.error(c) : console.log(c)))
};
H.warn = function(a) {
    H.log(a, H.LOG_LEVEL_WARN)
};
H.error = function(a) {
    H.log(a, H.LOG_LEVEL_ERROR)
};
H.fatal = function(a) {
    H.log(a, H.LOG_LEVEL_FATAL)
};
H._getLogLevelName = function(a) {
    switch (a) {
    case H.LOG_LEVEL_DEBUG:
        return "调试";
    case H.LOG_LEVEL_ERROR:
        return "错误";
    case H.LOG_LEVEL_INFO:
        return "信息";
    case H.LOG_LEVEL_WARN:
        return "警告";
    case H.LOG_LEVEL_FATAL:
        return "致命错误";
    default:
        return "未知"
    }
};
H._sendLogToServer = function() {
    var a = H.logConfig;
    if (a.serverEnable) {
        console.log("【H.log】send to serverUrl:" + a.serverUrl + ", type:" + a.type);
        var d = new XMLHttpRequest;
        d.open("post", a.serverUrl, !0);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        a = "type=" + a.type + "&msg=" + encodeURIComponent("\r\n" + H._cacheLogs.join("\r\n"));
        d.send(a);
        H._cacheLogs.splice(0)
    }
};
H.setQueryURL = function(a, d) {
    d = d || "" + window.location.href;
    d = -1 == d.indexOf("?") ? d + "?": d + "&";
    return d + a
};
H.removeQueryURL = function(a, d) {
    d = d || "" + window.location.href;
    return d.replace(RegExp("(^|)" + a + "=([^&]*)(&|$)", "gi"), "")
};
H.getQueryURL = function(a, d) {
    var d = d || "" + window.location.href,
    b;
    return (b = RegExp("(^|)" + a + "=([^&]*)(&|$)", "gi").exec(d)) ? "" + decodeURIComponent(b[2]) : null
};
H.formatNumber = function(a) {
    a = a.replace(/[^\/0-9]/g, "") - 0;
    return isNaN(a) ? 0 : a
};
H.hasFlag = function(a, d) {
    return (a & d) == d
};
H.getBrowser = function() {
    var a = navigator.userAgent.toLowerCase();
    return null == a ? H.BROWSER_IE: -1 != a.indexOf("chrome") ? H.BROWSER_CHROME: -1 != a.indexOf("opera") ? H.BROWSER_OPERA: -1 != a.indexOf("msie") ? H.BROWSER_IE: -1 != a.indexOf("safari") ? H.BROWSER_SAFARI: -1 != a.indexOf("firefox") ? H.BROWSER_FIREFOX: -1 != a.indexOf("uc ") ? H.BROWSER_UC: -1 != a.indexOf("gecko") ? H.BROWSER_GECKO: H.BROWSER_IE
};
H.BROWSER_CHROME = 1;
H.BROWSER_OPERA = 2;
H.BROWSER_IE = 3;
H.BROWSER_SAFARI = 4;
H.BROWSER_FIREFOX = 5;
H.BROWSER_GECKO = 6;
H.BROWSER_UC = 7;
H.getMobile = function() {
    var a = navigator.userAgent.toLowerCase();
    return null == a ? "": -1 != a.indexOf("iphone") ? H.MOBILE_IPHONE: -1 != a.indexOf("ipad") ? H.MOBILE_IPAD: -1 != a.indexOf("ipod") ? H.MOBILE_IPOD: -1 != a.indexOf("android") ? H.MOBILE_ANDROID: H.MOBILE_PC
};
H.MOBILE_IPHONE = 1;
H.MOBILE_IPAD = 2;
H.MOBILE_IPOD = 3;
H.MOBILE_ANDROID = 4;
H.MOBILE_PC = 5;
H.formatDateTime = function(a, d) {
    var b, d = d.replace("yyyy", a.getFullYear().toString()),
    d = d.replace("yy", a.getFullYear().toString().substr(3, 2));
    b = (a.getMonth() + 1).toString();
    d = d.replace("mm", 1 == b.length ? "0" + b: b);
    d = d.replace("m", b);
    b = a.getDate().toString();
    d = d.replace("dd", 1 == b.length ? "0" + b: b);
    d = d.replace("d", b);
    b = a.getHours().toString();
    d = d.replace("hh", 1 == b.length ? "0" + b: b);
    d = d.replace("h", b);
    b = a.getMinutes().toString();
    d = d.replace("nn", 1 == b.length ? "0" + b: b);
    d = d.replace("n", b);
    b = a.getSeconds().toString();
    d = d.replace("ss", 1 == b.length ? "0" + b: b);
    return d = d.replace("s", b)
};
var hexcase = 0,
b64pad = "",
chrsz = 8;
function hex_md5(a) {
    return binl2hex(core_md5(str2binl(a), a.length * chrsz))
}
function b64_md5(a) {
    return binl2b64(core_md5(str2binl(a), a.length * chrsz))
}
function str_md5(a) {
    return binl2str(core_md5(str2binl(a), a.length * chrsz))
}
function hex_hmac_md5(a, d) {
    return binl2hex(core_hmac_md5(a, d))
}
function b64_hmac_md5(a, d) {
    return binl2b64(core_hmac_md5(a, d))
}
function str_hmac_md5(a, d) {
    return binl2str(core_hmac_md5(a, d))
}
function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}
function core_md5(a, d) {
    a[d >> 5] |= 128 << d % 32;
    a[(d + 64 >>> 9 << 4) + 14] = d;
    for (var b = 1732584193,
    c = -271733879,
    f = -1732584194,
    e = 271733878,
    g = 0; g < a.length; g += 16) var q = b,
    x = c,
    w = f,
    v = e,
    b = md5_ff(b, c, f, e, a[g + 0], 7, -680876936),
    e = md5_ff(e, b, c, f, a[g + 1], 12, -389564586),
    f = md5_ff(f, e, b, c, a[g + 2], 17, 606105819),
    c = md5_ff(c, f, e, b, a[g + 3], 22, -1044525330),
    b = md5_ff(b, c, f, e, a[g + 4], 7, -176418897),
    e = md5_ff(e, b, c, f, a[g + 5], 12, 1200080426),
    f = md5_ff(f, e, b, c, a[g + 6], 17, -1473231341),
    c = md5_ff(c, f, e, b, a[g + 7], 22, -45705983),
    b = md5_ff(b, c, f, e, a[g + 8], 7, 1770035416),
    e = md5_ff(e, b, c, f, a[g + 9], 12, -1958414417),
    f = md5_ff(f, e, b, c, a[g + 10], 17, -42063),
    c = md5_ff(c, f, e, b, a[g + 11], 22, -1990404162),
    b = md5_ff(b, c, f, e, a[g + 12], 7, 1804603682),
    e = md5_ff(e, b, c, f, a[g + 13], 12, -40341101),
    f = md5_ff(f, e, b, c, a[g + 14], 17, -1502002290),
    c = md5_ff(c, f, e, b, a[g + 15], 22, 1236535329),
    b = md5_gg(b, c, f, e, a[g + 1], 5, -165796510),
    e = md5_gg(e, b, c, f, a[g + 6], 9, -1069501632),
    f = md5_gg(f, e, b, c, a[g + 11], 14, 643717713),
    c = md5_gg(c, f, e, b, a[g + 0], 20, -373897302),
    b = md5_gg(b, c, f, e, a[g + 5], 5, -701558691),
    e = md5_gg(e, b, c, f, a[g + 10], 9, 38016083),
    f = md5_gg(f, e, b, c, a[g + 15], 14, -660478335),
    c = md5_gg(c, f, e, b, a[g + 4], 20, -405537848),
    b = md5_gg(b, c, f, e, a[g + 9], 5, 568446438),
    e = md5_gg(e, b, c, f, a[g + 14], 9, -1019803690),
    f = md5_gg(f, e, b, c, a[g + 3], 14, -187363961),
    c = md5_gg(c, f, e, b, a[g + 8], 20, 1163531501),
    b = md5_gg(b, c, f, e, a[g + 13], 5, -1444681467),
    e = md5_gg(e, b, c, f, a[g + 2], 9, -51403784),
    f = md5_gg(f, e, b, c, a[g + 7], 14, 1735328473),
    c = md5_gg(c, f, e, b, a[g + 12], 20, -1926607734),
    b = md5_hh(b, c, f, e, a[g + 5], 4, -378558),
    e = md5_hh(e, b, c, f, a[g + 8], 11, -2022574463),
    f = md5_hh(f, e, b, c, a[g + 11], 16, 1839030562),
    c = md5_hh(c, f, e, b, a[g + 14], 23, -35309556),
    b = md5_hh(b, c, f, e, a[g + 1], 4, -1530992060),
    e = md5_hh(e, b, c, f, a[g + 4], 11, 1272893353),
    f = md5_hh(f, e, b, c, a[g + 7], 16, -155497632),
    c = md5_hh(c, f, e, b, a[g + 10], 23, -1094730640),
    b = md5_hh(b, c, f, e, a[g + 13], 4, 681279174),
    e = md5_hh(e, b, c, f, a[g + 0], 11, -358537222),
    f = md5_hh(f, e, b, c, a[g + 3], 16, -722521979),
    c = md5_hh(c, f, e, b, a[g + 6], 23, 76029189),
    b = md5_hh(b, c, f, e, a[g + 9], 4, -640364487),
    e = md5_hh(e, b, c, f, a[g + 12], 11, -421815835),
    f = md5_hh(f, e, b, c, a[g + 15], 16, 530742520),
    c = md5_hh(c, f, e, b, a[g + 2], 23, -995338651),
    b = md5_ii(b, c, f, e, a[g + 0], 6, -198630844),
    e = md5_ii(e, b, c, f, a[g + 7], 10, 1126891415),
    f = md5_ii(f, e, b, c, a[g + 14], 15, -1416354905),
    c = md5_ii(c, f, e, b, a[g + 5], 21, -57434055),
    b = md5_ii(b, c, f, e, a[g + 12], 6, 1700485571),
    e = md5_ii(e, b, c, f, a[g + 3], 10, -1894986606),
    f = md5_ii(f, e, b, c, a[g + 10], 15, -1051523),
    c = md5_ii(c, f, e, b, a[g + 1], 21, -2054922799),
    b = md5_ii(b, c, f, e, a[g + 8], 6, 1873313359),
    e = md5_ii(e, b, c, f, a[g + 15], 10, -30611744),
    f = md5_ii(f, e, b, c, a[g + 6], 15, -1560198380),
    c = md5_ii(c, f, e, b, a[g + 13], 21, 1309151649),
    b = md5_ii(b, c, f, e, a[g + 4], 6, -145523070),
    e = md5_ii(e, b, c, f, a[g + 11], 10, -1120210379),
    f = md5_ii(f, e, b, c, a[g + 2], 15, 718787259),
    c = md5_ii(c, f, e, b, a[g + 9], 21, -343485551),
    b = safe_add(b, q),
    c = safe_add(c, x),
    f = safe_add(f, w),
    e = safe_add(e, v);
    return [b, c, f, e]
}
function md5_cmn(a, d, b, c, f, e) {
    return safe_add(bit_rol(safe_add(safe_add(d, a), safe_add(c, e)), f), b)
}
function md5_ff(a, d, b, c, f, e, g) {
    return md5_cmn(d & b | ~d & c, a, d, f, e, g)
}
function md5_gg(a, d, b, c, f, e, g) {
    return md5_cmn(d & c | b & ~c, a, d, f, e, g)
}
function md5_hh(a, d, b, c, f, e, g) {
    return md5_cmn(d ^ b ^ c, a, d, f, e, g)
}
function md5_ii(a, d, b, c, f, e, g) {
    return md5_cmn(b ^ (d | ~c), a, d, f, e, g)
}
function core_hmac_md5(a, d) {
    var b = str2binl(a);
    16 < b.length && (b = core_md5(b, a.length * chrsz));
    for (var c = Array(16), f = Array(16), e = 0; 16 > e; e++) c[e] = b[e] ^ 909522486,
    f[e] = b[e] ^ 1549556828;
    b = core_md5(c.concat(str2binl(d)), 512 + d.length * chrsz);
    return core_md5(f.concat(b), 640)
}
function safe_add(a, d) {
    var b = (a & 65535) + (d & 65535);
    return (a >> 16) + (d >> 16) + (b >> 16) << 16 | b & 65535
}
function bit_rol(a, d) {
    return a << d | a >>> 32 - d
}
function str2binl(a) {
    for (var d = [], b = (1 << chrsz) - 1, c = 0; c < a.length * chrsz; c += chrsz) d[c >> 5] |= (a.charCodeAt(c / chrsz) & b) << c % 32;
    return d
}
function binl2str(a) {
    for (var d = "",
    b = (1 << chrsz) - 1, c = 0; c < 32 * a.length; c += chrsz) d += String.fromCharCode(a[c >> 5] >>> c % 32 & b);
    return d
}
function binl2hex(a) {
    for (var d = hexcase ? "0123456789ABCDEF": "0123456789abcdef", b = "", c = 0; c < 4 * a.length; c++) b += d.charAt(a[c >> 2] >> 8 * (c % 4) + 4 & 15) + d.charAt(a[c >> 2] >> 8 * (c % 4) & 15);
    return b
}
function binl2b64(a) {
    for (var d = "",
    b = 0; b < 4 * a.length; b += 3) for (var c = (a[b >> 2] >> 8 * (b % 4) & 255) << 16 | (a[b + 1 >> 2] >> 8 * ((b + 1) % 4) & 255) << 8 | a[b + 2 >> 2] >> 8 * ((b + 2) % 4) & 255, f = 0; 4 > f; f++) d = 8 * b + 6 * f > 32 * a.length ? d + b64pad: d + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c >> 6 * (3 - f) & 63);
    return d
}
H.Api = function() {
    function a() {
        var a = j.getCookie(h.apiPrefix + "hallToken");
        return null != a && "" != a
    }
    function d(a, d) {
        l = {};
        l.callback = a;
        l.context = d;
        l.success = !0;
        l.num = 3;
        l.error = null;
        if (y) U.error("【Api】不要重复初始化"),
        l.num = 0,
        b(!0);
        else {
            A && A.statLoadingComplete && (0 == h.gameId ? A.statHallLoadingComplete && A.statHallLoadingComplete() : A.statLoadingComplete && A.statLoadingComplete());
            y = !0;
            c(function() {
                b(!0)
            });
            var e = H.getQueryURL("tt"),
            f = j.getItem(h.apiPrefix + "tt");
            null != e && e != f ? (H.log("检查TT"), v(e,
            function(a) {
                a.success ? (j.setItem(h.apiPrefix + "tt", e), j.setItem(h.apiPrefix + "uid", a.uid), h.uid = a.uid) : !l.error && (l.error = a.error);
                H.log("检查TT结果：" + a.success);
                b(a.success)
            },
            this)) : 0 < h.gameId ? (f = j.getItem(h.apiPrefix + "uid"), null == f ? (j.delItem(h.apiPrefix + "tt"), j.delItem(h.apiPrefix + "uid"), l.error = k.getError( - 20101), b(!1)) : (h.uid = f, b(!0))) : b(!0);
            0 != h.gameId ? (H.log("取得游戏信息"), t(h.gameId,
            function(a) {
                a.success ? h.game = a.game: !l.error && (l.error = a.error);
                H.log("取得游戏信息结果：" + a.success);
                b(a.success)
            },
            this)) : b(!0)
        }
    }
    function b(b) {
        l.success = l.success || b;
        l.num--;
        0 < l.num || ("function" == typeof l.callback && H.delegate(l.callback, l.context, {
            success: l.success,
            uid: h.uid,
            statParam: m,
            error: l.error
        })(), setInterval(H.delegate(function() {
            a() && (k.mergeRequest(h.hallApiUrl, {
                action: n.URL_HEARTBEAT
            }), k.getBinder().dispatch(n.BIND_TYPE_HEARTBEAT))
        },
        this), 6E4))
    }
    function c(a) {
        m = new H.apis.StatParam;
        m.ua = H.getQueryURL("ua") || navigator.userAgent.toLowerCase();
        window.IS_AC ? (U.log("【Api】向包壳取统计参数："), AC.getStatParam(function(b) {
            U.log("【Api】包壳返回统计参数：" + b);
            b = JSON.parse(b);
            if ("1" == H.getQueryURL("isplugin")) {
                var c = H.getQueryURL("ch");
                U.log("【Api】插件版频道来源 Url：" + c);
                m.ch = c
            } else m.ch = j.getItem("ac_ch") || H.getQueryURL("ch") || b.ch,
            U.log("【Api】三个频道来源 LS(ac_ch)：" + j.getItem("ac_ch")),
            U.log("【Api】三个频道来源 Url：" + H.getQueryURL("ch")),
            U.log("【Api】三个频道来源 AcHall：" + b.ch),
            j.setItem("ac_ch", m.ch);
            U.log("【Api】实际返回的频道：" + m.ch);
            j.setCookie(h.apiPrefix + "ch", m.ch);
            m.ptype = b.ptype;
            j.setCookie(h.apiPrefix + "ptype", m.ptype);
            m.nt = b.nt;
            j.setCookie(h.apiPrefix + "nett", m.nt);
            a && a()
        })) : (m.ch = H.getQueryURL("ch") || j.getCookie(h.apiPrefix + "ch") || "XX_02_001", j.setCookie(h.apiPrefix + "ch", m.ch), m.ptype = decodeURIComponent(H.getQueryURL("ptype") || j.getCookie(h.apiPrefix + "ptype") || "页面"), j.setCookie(h.apiPrefix + "ptype", m.ptype), m.nt = j.getCookie(h.apiPrefix + "nett"), a && a())
    }
    function f(a) {
        null == m ? c(function() {
            a(m)
        }) : window.IS_AC ? (U.log("【Api】向包壳取统计参数："), AC.getStatParam(function(b) {
            U.log("【Api】包壳返回统计参数：" + b);
            b = JSON.parse(b);
            m.nt = b.nt;
            j.setCookie(h.apiPrefix + "nett", m.nt);
            a && a(m)
        })) : (m.nt = j.getCookie(h.apiPrefix + "nett"), a && a(m))
    }
    function e(a, b) {
        return null == h.hallApiUrl ? (a && H.delegate(a, b, {
            success: !1,
            error: k.getError( - 90104)
        })(), !1) : null == h.gameId ? (a && H.delegate(a, b, {
            success: !1,
            error: k.getError( - 90105)
        })(), !1) : !0
    }
    function g(a, b, c) {
        if (e(b, c)) {
            var d = {
                success: !1
            };
            l.callback = null;
            l.context = null;
            h.game.roomId = a;
            k.mergeRequest(h.game.apiUrl, new H.apis.Request({
                action: "user.enterGame?",
                data: {
                    gameId: h.gameId,
                    roomId: a
                }
            }),
            function(a) {
                if (a.success) {
                    var a = a.data,
                    e = a.gameName,
                    f = a.gameServerUrl,
                    g = a.coin,
                    r = a.giftCount,
                    h = a.mustCoin,
                    j = a.remainTime;
                    switch (Number(a.type)) {
                    case 1:
                        d.success = !0;
                        d.gameServerUrl = f;
                        break;
                    case 2:
                        d.error = k.getError(90102, "您的欢乐豆少于1000，系统将赠送您1000欢乐豆。这是您今天第" + r + "次赠送。祝您游戏愉快。");
                        break;
                    case 3:
                        d.error = k.getError(90103, "您今天的欢乐豆赠送次数已经用完。提醒您，在商城购买头像可以获得欢乐豆哦");
                        break;
                    case 4:
                        d.error = k.getError(90104, "您好，为了保障欢乐豆安全，不允许同时进入2个欢乐豆游戏/分区。您已经进入" + e + "，请退出后再进入。");
                        break;
                    case 5:
                        d.error = k.getError(90105, "您已经在" + e + "，请退出后再进入本分区。");
                        break;
                    case 6:
                        a = Number(H.formatDateTime(new Date(j), "nn"));
                        1 > a && (a += 1);
                        d.error = k.getError(90106, "不用灰心，在大厅推广期间，您还可以获得欢乐豆的赠送，但是需要等候" + a + "分钟。请耐心等候。");
                        break;
                    case 7:
                        d.error = k.getError(90107, "您所选的游戏分区需要" + h + "欢乐豆才能进入，您目前只有" + g + "欢乐豆，请选择其他分区.");
                        break;
                    case 9:
                        d.error = k.getError(90108, "服务维护中，请稍等片刻！");
                        break;
                    case 10:
                        d.error = k.getError(90109, "您所持有的欢乐豆上限超出分区要求，请尝试其他分区！")
                    }
                } else d = a;
                H.delegate(b, c, d)()
            },
            this)
        }
    }
    function q(a, b) {
        e(a, b) && k.mergeRequest(h.game.apiUrl, new H.apis.Request({
            action: n.URL_RECONNECT,
            data: {
                gameId: h.game.gameId
            }
        }),
        function(c) {
            var d = {};
            c.success ? c.data && c.data.roomId ? (d.success = !0, d.roomId = c.data.roomId) : (d.success = !1, d.error = k.getError( - 30101)) : d = c;
            H.delegate(a, b, d)()
        },
        this)
    }
    function x(a, b) {
        e(a, b) && k.mergeRequest(h.hallApiUrl, new H.apis.Request({
            action: n.URL_TOKEN,
            data: {
                gameId: h.game.gameId,
                roomId: h.game.roomId
            }
        }),
        function(c) {
            var d = {};
            c.success ? c.data ? (d.success = !0, d.token = c.data) : (d.success = !1, d.error = k.getError( - 30102)) : d = c;
            H.delegate(a, b, d)()
        },
        this)
    }
    function w(a, b) {
        e(a, b) && k.mergeRequest(h.hallApiUrl, new H.apis.Request({
            action: n.URL_USER_GET_THIRD_TOKEN
        }),
        function(c) {
            var d = {};
            c.success ? c.data && c.data.tt ? (d.success = !0, d.tt = c.data.tt) : (d.success = !1, d.error = k.getError( - 30103)) : d = c;
            H.delegate(a, b, d)()
        },
        this)
    }
    function v(a, b, c) {
        e(b, c) && k.mergeRequest(h.hallApiUrl, new H.apis.Request({
            action: n.URL_USER_CHECK_THIRD_TOKEN,
            data: {
                tt: a
            }
        }),
        function(a) {
            var d = {};
            a.success ? a.data && a.data.uid ? (d.success = !0, d.uid = a.data.uid) : (d.success = !1, d.error = k.getError( - 30104)) : d = a;
            H.delegate(b, c, d)()
        },
        this)
    }
    function t(a, b, c) {
        e(b, c) && k.mergeRequest(h.hallApiUrl, new H.apis.Request({
            action: n.URL_GAME_LIST,
            data: {
                gameId: a
            }
        }),
        function(a) {
            var d = {};
            a.success ? a.data && "object" == typeof a.data[0] ? (d.success = !0, d.game = a.data[0]) : (d.success = !1, d.error = k.getError( - 30105)) : d = a;
            H.delegate(b, c, d)()
        },
        this)
    }
    function u(a, b, c) {
        k.mergeRequest(h.hallApiUrl, new H.apis.Request({
            action: n.URL_STAT,
            data: {
                p: '[{"type":2,"dtype":' + a.toString() + ',"dtime":' + b.toString() + ',"gameId":' + (c || h.gameId) + "}]"
            }
        }))
    }
    var h = H.apis.ApiData.getInstance();
    h.apiPrefix = "api_";
    var k = new H.ApiRequest,
    j = new H.DB,
    l = void 0,
    n = H.apis.Enum,
    m, y = !1;
    return {
        BIND_TYPE_HEARTBEAT: n.BIND_TYPE_HEARTBEAT,
        BIND_TYPE_DATA: n.BIND_TYPE_DATA,
        BIND_TYPE_ERROR: n.BIND_TYPE_ERROR,
        init: function(a, b, c) {
            h.hallApiUrl = a.url;
            h.gameId = a.appId || a.gameId || 0;
            d(b, c)
        },
        enterGame: function(a, b, c) {
            g(a, b, c)
        },
        getReconnect: function(a, b) {
            q(a, b)
        },
        getGameToken: function(a, b) {
            x(a, b)
        },
        statBeginLoading: function(a) {
            u(1, "", a)
        },
        statLoadingComplete: function(a) {
            u(2, a || 0)
        },
        statLoadingBack: function(a) {
            u(3, a || 0)
        },
        statLoadingComlete: function(a) {
            u(2, a)
        },
        getTT: function(a, b) {
            w(a, b)
        },
        getNotice: function(a, b, c) {
            e(b, c) && (null == a && (a = -1), k.mergeRequest(h.hallApiUrl, new H.apis.Request({
                action: n.URL_NOTICE_LIST,
                data: {
                    area: a
                }
            }), b, c))
        },
        getGameInfo: function(a, b, c) {
            t(a, b, c)
        },
        getGameNotice: function(a, b, c) {
            e(b, c) && k.mergeRequest(h.hallApiUrl, new H.apis.Request({
                action: n.URL_GAME_NOTICE,
                data: {
                    gameId: a
                }
            }), b, c)
        },
        request: function(a, b, c, d, e) {
            "string" == typeof a && "" != a && "string" == typeof b && "" != b ? k.mergeRequest(a, {
                action: b,
                data: c
            },
            d, e) : (H.log("调用接口的参数不匹配"), H.delegate(d, e, {
                success: !1,
                error: k.getError( - 50103)
            })())
        },
        ajaxRequest: function(a, b, c, d, e) {
            k.ajaxRequest(a, b, c, d, e)
        },
        mergeRequest: function(a, b, c, d) {
            k.mergeRequest(a, b, c, d)
        },
        bind: function(a, b, c) {
            k.getBinder().bind(a, b, c)
        },
        unbind: function(a, b) {
            k.getBinder().unbind(a, b)
        },
        getHallApiUrl: function() {
            return h.hallApiUrl
        },
        getRoomApiUrl: function() {
            return h.game.apiUrl
        },
        getHallToken: function() {
            return j.getCookie(h.apiPrefix + "hallToken")
        },
        getStatParam: function() {
            return m
        },
        updateStatParam: function(a, b) {
            a && (a = U.delegate(a, b || window));
            f(a)
        },
        isLogged: function() {
            return a()
        },
        clearLogged: function() {
            j.deleteCookie(h.apiPrefix + "hallToken")
        }
    }
} ();