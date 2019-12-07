window.A || (A = {});
(function() {
    A.APP_ID = 1;
    A.ROOMS = [{name: "普通场",id: 1,open: !0}, {name: "8倍场",id: 2,open: !0}, {name: "50倍场",id: 3,open: !1}];
    A.WIDTH = 960;
    A.HEIGHT = 576;
    LazyLoad = function(u, f) {
        function l(a, c) {
            var b = f.createElement(a), h;
            for (h in c)
                c.hasOwnProperty(h) && b.setAttribute(h, c[h]);
            return b
        }
        function n(a, c) {
            var b = m[a], h, d, g;
            b && (h = b.callback, d = b.onError, g = b.urls, "css" != a && g.shift(), i = 0, g.length || (h && h.call(b.context, b.obj), c && d && d.call(b.context, b.obj), m[a] = null, o[a].length && q(a)))
        }
        function y() {
            if (!d) {
                var a = navigator.userAgent;
                d = {async: !0 === f.createElement("script").async};
                (d.webkit = /AppleWebKit\//.test(a)) || (d.ie = /MSIE/.test(a)) || (d.opera = /Opera/.test(a)) || (d.gecko = /Gecko\//.test(a)) || (d.unknown = !0)
            }
        }
        function q(a, c, b, h, v, g) {
            var r = function() {
                n(a, !1)
            }, j = function() {
                n(a, !0)
            }, s = "css" === a, e, k, i;
            y();
            if (c)
                if (c = "string" === typeof c ? [c] : c.concat(), s || d.async || d.gecko || d.opera)
                    o[a].push({urls: c,callback: b,onError: g,obj: h,context: v});
                else {
                    e = 0;
                    for (k = c.length; e < k; ++e)
                        o[a].push({urls: [c[e]],callback: e === k - 1 ? b : null,onError: e === k - 1 ? g : null,
                            obj: h,context: v})
                }
            if (!m[a] && (i = m[a] = o[a].shift())) {
                t || (t = f.head || f.getElementsByTagName("head")[0]);
                c = i.urls;
                e = 0;
                for (k = c.length; e < k; ++e)
                    b = c[e], s ? b = l("link", {charset: "utf-8","class": "lazyload",href: b,rel: "stylesheet",type: "text/css"}) : (b = l("script", {charset: "utf-8","class": "lazyload",src: b}), b.async = !1), d.ie ? b.onreadystatechange = function() {
                        var a = this.readyState;
                        if ("loaded" === a || "complete" === a)
                            this.onreadystatechange = null, r()
                    } : s && (d.gecko || d.webkit) ? d.webkit ? (i.urls[e] = b.href, w()) : setTimeout(r, 50 * k) : 
                    (b.onerror = j, b.onload = r), t.appendChild(b)
            }
        }
        function w() {
            var a = m.css, c;
            if (a) {
                for (c = x.length; c && --c; )
                    if (x[c].href === a.urls[0]) {
                        n("css");
                        break
                    }
                i += 1;
                a && (200 > i ? setTimeout(w, 50) : n("css"))
            }
        }
        var d, t, m = {}, i = 0, o = {css: [],js: []}, p = {}, x = f.styleSheets;
        return {css: function(a, c, b, d) {
                q("css", a, c, b, d)
            },js: function(a, c, b, d, f) {
                q("js", a, c, b, d, f)
            },image: function(a, c, b, d, f) {
                var g = {total: a.length,loaded: 0,callback: c,hasError: !1}, i = (new Date).getTime() + Math.floor(1E4 * Math.random());
                p[i] = g;
                for (g = 0; g < a.length; g++) {
                    var j = new Image;
                    j.uuid = i;
                    j.onload = function(a) {
                        var a = a.currentTarget.uuid, e = p[a];
                        e.loaded++;
                        e.loaded == e.total && (delete p[a], e.hasError ? f.call(d, b) : c.call(d, b))
                    };
                    j.onerror = function(a) {
                        p[a.currentTarget.uuid].hasError = !0;
                        j.onload(a)
                    };
                    j.src = a[g]
                }
            }}
    }(this, this.document);
    A.IS_AC = 0 <= navigator.userAgent.toLowerCase().indexOf("h5accelerator");
    A.VERSION = "2.0.0.13061810";
    A.MUSIC_VERSION = "1.0";
    A.PUBLIC_LIBS_JS_VERSION = "2.0.0";
    A.GAME_LIBS_JS_VERSION = "2.0.0";
    A.HALL_API_VERSION = "2.0.0";
    A.HALL_WIDGET_VERSION = "1.0.0";
    A.RES = {"加倍动画.png": "images/1b038b3c55621682.png?v=D3A23A84",
        "主界面底图平铺.jpg": "images/4d80997cf945a42a.jpg?v=7D566A4D","斗地主loading.jpg": "images/6fe20c107df9c730.jpg?v=6E6E6DD3","炸弹动画.png": "images/3d8ec8ca84683746.png?v=505A6E88","界面切图c.png": "images/69df537870204915.png?v=3A568AD3","界面切图a.png": "images/c1768d0f9fb8aed3.png?v=32FF20A7","选区-底图.jpg": "images/537806a6c7430f96.jpg?v=6CDCEE02","帮助底图.jpg": "images/54948d521ac9edd8.jpg?v=8985B95E","商城底图.jpg": "images/47bb199b83129b8c.jpg?v=913DFB90","帮助界面.png": "images/f7d28d8750abfbdd.png?v=CFBFB6FC","公用提示框.jpg": "images/127d94c1a7ccf780.jpg?v=D1875B92",
        "帮助图标.jpg": "images/11f85ad8cd86cefa.jpg?v=2E619E7","主界面.jpg": "images/3f6a87a8202a1b9d.jpg?v=9EF2227D","斗地主人物.png": "images/3a910081725493d0.png?v=B7A3CFF8","按钮.png": "images/a07acf230a5e84f7.png?v=94544AE8","界面切图b.jpg": "images/cb924c22cf19f0ff.jpg?v=60EDA53","其他动画.png": "images/1e8a75422f808bfa.png?v=8CDBEACD","选区.jpg": "images/ec2253b6017bfbba.jpg?v=AC820EE7","退出按钮.png": "images/b92a855630ffcfa9.png?v=D7C4AA53","界面切图d.png": "images/b210aa31afeb618e.png?v=B9B234",mainjs: "app_min.js?v=1C8DF9B9","牌.png": "images/510f0f26045c36a1.png?v=8C623835"};
    A.USER_AGENT = navigator.userAgent.toLowerCase();
    window.IS_AC = 0 <= A.USER_AGENT.indexOf("h5accelerator");
    window.IS_AC && (A.getQueryURL = function(u, f) {
        var f = f || "" + window.location.href, l;
        return (l = RegExp("(^|)" + u + "=([^&]*)(&|$)", "gi").exec(f)) ? "" + decodeURIComponent(l[2]) : null
    });
    A.embedded = A.getQueryURL("embedded");
    window.IS_AC && (A.globalUrl = A.getQueryURL("globalConfig"), require(A.globalUrl));
    A.loadJs = function() {
        LazyLoad.js([A.getLib("h5Lib_io", A.PUBLIC_LIBS_JS_VERSION), A.getLib("h5GameLib", A.GAME_LIBS_JS_VERSION), 
            A.getLib("hallApi", A.HALL_API_VERSION), A.getLib("hallWidget", A.HALL_WIDGET_VERSION), A.RES.mainjs], null, null, null, A.onJsLoadError)
    };
    window.IS_AC ? (A.registerAC(), A.ROOT = new Canvas, A.acFullScreen(A.WIDTH, A.HEIGHT, A.ROOT.width, A.ROOT.height, A.ROOT), A.loadJs()) : A.buildDomUI(function() {
        A.showGame();
        A.startDomLoading(A.loadJs)
    });
    A.removeLoading = function() {
        setTimeout(function() {
            window.IS_AC ? window.hideLoading() : A.removeDomLoading()
        }, 50)
    }
})();
