G = window.G || {};
(function() {
    (function() {
        var a = G.USER_AGENT = navigator.userAgent.toLowerCase();
        G.IS_WEBKIT = /webkit/i.test(a);
        G.IS_IE = /msie/i.test(a);
        G.IS_FIREFOX = /firefox/i.test(a);
        G.IS_CHROME = /chrome/i.test(a);
        G.IS_MOBILE = /mobile/i.test(a);
        G.IS_OPERA = /opera/i.test(a);
        G.IS_IPAD = /ipad/i.test(a);
        G.IS_IPOD = /ipod/i.test(a);
        G.IS_IPHONE = /iphone/i.test(a) && !this.IS_IPOD;
        G.IS_IOS = /mac os x/i.test(a);
        G.IS_IOS4 = /os 4/i.test(a);
        G.IS_IOS5 = /os 5/i.test(a);
        G.IS_IOS6 = /os 6/i.test(a);
        G.IS_ANDROID = /android/i.test(a);
        G.IS_ANDROID2 = 
        0 < a.indexOf("android 2") || 0 < a.indexOf("android/2");
        G.IS_ANDROID4 = 0 < a.indexOf("android 4") || 0 < a.indexOf("android/4");
        G.IS_UC = 0 < a.indexOf("uc ") || 0 < a.indexOf("ucbrowser");
        G.SUPPORT_STORAGE = "localStorage" in window;
        G.SUPPORT_ORIENTATION = "orientation" in window;
        G.SUPPORT_DEVICE_MOTION = "ondevicemotion" in window;
        G.SUPPORT_TOUCH = "ontouchstart" in window;
        G.IS_AC = 0 <= a.indexOf("h5accelerator")
    })()
})();
String.prototype.firstCharToUpperCase = function() {
    return 0 == this.length ? "" : this.substr(0, 1).toUpperCase + this.substr(1, this.length)
};
Object.prototype.deep_clone = function() {
    eval("var tmp = " + this.toJSON());
    return tmp
};
Array.prototype.copy = function() {
    var a = [];
    this.each(function() {
        a[a.length] = this
    });
    return a
};
Array.prototype.equalTo = function(a) {
    this.splice(0);
    var b = this;
    a.each(function(a) {
        b.push(a)
    })
};
Array.prototype.filter || (Array.prototype.filter = function(a, b) {
    var c = this.length;
    if ("function" != typeof a)
        throw new TypeError;
    for (var d = [], e = 0; e < c; e++)
        if (e in this) {
            var f = this[e];
            a.call(b, f, e, this) && d.push(f)
        }
    return d
});
Array.prototype.Max || (Array.prototype.Max = function(a) {
    if (a) {
        var b = [];
        this.each(function() {
            b[b.length] = a.call(this, this)
        });
        return Math.max.apply(Math, b)
    }
    return Math.max.apply(Math, this)
});
Array.prototype.max || (Array.prototype.max = Array.prototype.Max);
Array.prototype.Min || (Array.prototype.Min = function(a) {
    if (a) {
        var b = [];
        this.each(function() {
            b[b.length] = a.call(this, this)
        });
        return Math.min.apply(Math, b)
    }
    return Math.min.apply(Math, this)
});
Array.prototype.min || (Array.prototype.min = Array.prototype.Min);
function quickSort(a, b) {
    if (a.length <= 1)
        return a;
    var c = a.splice(Math.floor(a.length / 2), 1)[0], d = [], e = [];
    if (b)
        for (var f = 0; f < a.length; f++)
            a[f][b] < c[b] ? d.push(a[f]) : e.push(a[f]);
    else
        for (f = 0; f < a.length; f++)
            a[f] < c ? d.push(a[f]) : e.push(a[f]);
    return quickSort(d, b).concat([c], quickSort(e, b))
}
Array.prototype.quickSort = function(a) {
    return quickSort(this, a)
};
Node.prototype.getTop = function() {
    var a = this.offsetTop;
    this.offsetParent != null && (a = a + this.offsetParent.getTop());
    return a
};
Node.prototype.getLeft = function() {
    var a = this.offsetLeft;
    this.offsetParent != null && (a = a + this.offsetParent.getLeft());
    return a
};
"undefined" != typeof HTMLElement && (HTMLElement.prototype.contains = function(a) {
    for (; a != null && typeof a.tagName != "undefined"; ) {
        if (a == this)
            return true;
        a = a.parentNode
    }
    return false
});
String.prototype.parseJSON = function() {
    var a = this;
    if (!a)
        return null;
    a = a.trim();
    if (window.JSON && window.JSON.parse)
        return window.JSON.parse(a);
    if (rvalidchars.test(a.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, "")))
        return (new Function("return " + a))();
    jQuery.error("Invalid JSON: " + a)
};
uc = window.uc || {};
uc.h5g = window.uc.h5g || {};
uc.h5g.delegate = U.delegate;
uc.h5g.delegateByArrayArgs = function(a, b, c) {
    var d = b || window;
    return c != void 0 && c.length > 0 ? function() {
        var b = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(b, c);
        return a.apply(d, b)
    } : function() {
        return a.apply(d, arguments)
    }
};
uc.h5g.merge = function(a, b) {
    if (typeof a !== "object" || typeof b !== "object")
        return a;
    var c = a.valueOf();
    if (a != c)
        return new a.constructor(c);
    if (a instanceof a.constructor && a.constructor !== Object) {
        var c = uc.h5g.clone(a.constructor.prototype), d;
        for (d in a)
            a.hasOwnProperty(d) && (c[d] = a[d])
    } else {
        c = {};
        for (d in a)
            c[d] = a[d]
    }
    for (d in b)
        c[d] = b[d];
    c instanceof uc.h5g.KeyAbleObject && c._toStringReset();
    return c
};
uc.h5g.copy = function(a, b) {
    if (typeof a !== "object")
        return a;
    var c = a.valueOf();
    if (a != c)
        return new a.constructor(c);
    if (a instanceof a.constructor && a.constructor !== Object) {
        var c = b ? new b : uc.h5g.clone(a.constructor.prototype), d;
        for (d in a)
            if (b || a.hasOwnProperty(d))
                c[d] = a[d]
    } else {
        c = {};
        for (d in a)
            c[d] = a[d]
    }
    c instanceof uc.h5g.KeyAbleObject && c._toStringReset();
    return c
};
uc.h5g.clone = function(a) {
    uc.h5g.__cloneFunc.prototype = a;
    return new uc.h5g.__cloneFunc
};
uc.h5g.__cloneFunc = function() {
};
(function() {
    var a = {_counter: 0};
    uc.h5g.NameUtil = a;
    a.getUID = function() {
        return a._counter++
    };
    a.createUniqueName = function(b) {
        var c = b.charCodeAt(b.length - 1);
        c >= 48 && c <= 57 && (b = b + "_");
        return b + a.getUID()
    };
    a.displayObjectToString = function(b) {
        for (var a; b != null; b = b.parent) {
            var d = b.id != null ? b.id : b.name;
            a = a == null ? d : d + "." + a;
            if (b == b.parent || b.parent instanceof Stage)
                break
        }
        return a
    }
})();
uc.h5g.KeyAbleObject = Class.extend({init: function() {
        if (!this.keyNamePre)
            this.keyNamePre = "keyAbleobj_"
    },toString: function() {
        if (this.keyName == void 0)
            this.keyName = uc.h5g.NameUtil.createUniqueName(this.keyNamePre);
        return this.keyName
    },_toStringReset: function() {
        delete this.keyName
    }});
uc.h5g.EventBase = Class.extend({init: function(a, b) {
        this.keyNamePre = "EventBase_";
        this.bubbles = b != void 0 || b != null ? b : true;
        this.abstractType = a;
        this.currentTarget = null;
        this.pointerY = this.pointerX = 0;
        this.domEvent = this.eventObj = null
    },stopPropagation: function() {
        this.bubbles = false
    },clone: function() {
        return uc.h5g.copy(this, uc.h5g.EventBase)
    },dispose: function() {
        delete this.abstractType;
        delete this.currentTarget
    },toString: function() {
        return "[EventBase abstractType=" + this.abstractType + "]"
    }});
uc.h5g.EventManager = uc.h5g.EventManager || {};
(function() {
    var a = uc.h5g.EventManager;
    a.events = {Click: new uc.h5g.EventBase("click"),Drag: new uc.h5g.EventBase("drag"),DblDrag: new uc.h5g.EventBase("dbldrag"),DragEnd: new uc.h5g.EventBase("dragend"),DblDragEnd: new uc.h5g.EventBase("dbldragend"),Choose: new uc.h5g.EventBase("choose"),DblChoose: new uc.h5g.EventBase("dblchoose"),Move: new uc.h5g.EventBase("move"),DblClick: new uc.h5g.EventBase("dblclick"),EnterFrame: new uc.h5g.EventBase("enterFrame")};
    uc.h5g.Events = a.events;
    a._maps = {};
    a._objects = {};
    a._listeners = 
    {};
    a._counter = 1;
    a.addEventListener = function(b, a, d) {
        var e = uc.h5g.EventManager._maps[a];
        e || (e = uc.h5g.EventManager._maps[a] = {});
        e[b] || (e[b] = {});
        e = e[b];
        if (!e[d]) {
            e = e[d] = {};
            e.type = a;
            e.obj = b;
            e.listener = d
        }
        return true
    };
    a.removeEventListener = function(b, a, d) {
        var e = uc.h5g.EventManager._maps[a];
        if (e == void 0)
            return false;
        e = e[b];
        if (!e)
            return false;
        e = e[d];
        if (!e)
            return false;
        delete uc.h5g.EventManager._maps[a][b][d];
        return true
    };
    a.removeEventListenerByType = function(b, a) {
        var d = uc.h5g.EventManager._maps[a];
        if (!d)
            return false;
        d = d[b];
        if (!d)
            return false;
        delete uc.h5g.EventManager._maps[a][b];
        return true
    };
    a.removeAllEventListenersOfObject = function(b) {
        var a = false, d;
        for (d in uc.h5g.EventManager._maps) {
            var e = uc.h5g.EventManager._maps[d];
            if (e[b]) {
                delete e[b];
                a = true
            }
        }
        return a
    };
    a.triggerEventForSingleObject = function(b, a, d) {
        a.src = d;
        var e = uc.h5g.EventManager._maps[a];
        if (e)
            if (e = e[b]) {
                var f = Array.prototype.slice.call(arguments, 1), g;
                for (g in e) {
                    var h = e[g], i = h.listener;
                    typeof i == "function" && uc.h5g.delegateByArrayArgs(i, h.obj, f)()
                }
            }
    };
    a.triggerEvent = function(b, a) {
        b.src = a;
        var d = uc.h5g.EventManager._maps[b];
        if (d) {
            var e = Array.prototype.slice.call(arguments), f;
            for (f in d) {
                var g = d[f];
                if (g)
                    for (var h in g) {
                        var i = g[h], j = i.listener;
                        typeof j == "function" && uc.h5g.delegateByArrayArgs(j, i.obj, e)()
                    }
            }
        }
    };
    a.hasEventListener = function(b, a) {
        var d = uc.h5g.EventManager._maps[a];
        return !d ? false : void 0 != d[b] && null != d[b]
    }
})();
uc.h5g.EventObject = uc.h5g.KeyAbleObject.extend({init: function() {
        if (!this.keyNamePre)
            this.keyNamePre = "EventObject_";
        this._super(arguments);
        this.listenerAdded = false;
        this.status = uc.h5g.EventObject.ENABLE
    },addEventListener: function(a, b) {
        if (this.domElement) {
            if (!this.listenerAdded) {
                uc.h5g.UserInteractionSupport(this.domElement, this, false);
                this.listenerAdded = true
            }
            return uc.h5g.EventManager.addEventListener(this, a, b)
        }
    },removeEventListener: function(a, b) {
        uc.h5g.EventManager.removeEventListener(this, a, b)
    },removeEventListenerByType: function(a) {
        uc.h5g.EventManager.removeEventListenerByType(this, 
        a)
    },removeAllEventListeners: function() {
        uc.h5g.EventManager.removeAllEventListenersOfObject(this)
    },triggerEvent: function(a) {
        var b = [a];
        b.push(this);
        arguments.length > 1 && (b = b.concat(Array.prototype.slice.call(arguments, 1)));
        uc.h5g.EventManager.triggerEvent.apply(this, b)
    },triggerEventForSingleObject: function(a, b) {
        var c = [b, a];
        c.push(this);
        arguments.length > 2 && (c = c.concat(Array.prototype.slice.call(arguments, 2)));
        return uc.h5g.EventManager.triggerEventForSingleObject.apply(this, c)
    },hasEventListener: function(a) {
        return uc.h5g.EventManager.hasEventListener(this, 
        a)
    },enable: function() {
        this.status = uc.h5g.EventObject.ENABLE
    },disable: function() {
        this.status = uc.h5g.EventObject.DISABLE
    },isEnable: function() {
        return uc.h5g.EventObject.ENABLE == this.status
    }});
(function() {
    var a = uc.h5g.EventObject;
    a.ENABLE = 1;
    a.DISABLE = 2
})();
(function() {
    uc.h5g.UserInteractionSupport = function(b, a, d) {
        (uc.h5g.browserType == void 0 || uc.h5g.browserType == null) && uc.h5g.detectBrowser();
        d || (d = false);
        a.uiEventCache = [];
        a.userEventCallback = uc.h5g.delegate(uc.h5g.__pointerHandler, a);
        if (uc.h5g.browserType === 0) {
            b.addEventListener("mouseup", a.userEventCallback, d);
            b.addEventListener("mousemove", a.userEventCallback, d);
            b.addEventListener("mousedown", a.userEventCallback, d);
            b.addEventListener("mouseout", a.userEventCallback, d)
        } else {
            b.addEventListener("touchstart", 
            a.userEventCallback, d);
            b.addEventListener("touchmove", a.userEventCallback, d);
            b.addEventListener("touchend", a.userEventCallback, d)
        }
    };
    uc.h5g.removeUserInteractionSupport = function(b, a, d) {
        d || (d = false);
        if (a.userEventCallback) {
            b.removeEventListener("mouseup", a.userEventCallback, d);
            b.removeEventListener("mousemove", a.userEventCallback, d);
            b.removeEventListener("mousedown", a.userEventCallback, d);
            b.removeEventListener("mouseout", a.userEventCallback, d);
            b.removeEventListener("touchstart", a.userEventCallback, 
            d);
            b.removeEventListener("touchmove", a.userEventCallback, d);
            b.removeEventListener("touchend", a.userEventCallback, d)
        }
    };
    uc.h5g.detectBrowser = function() {
        var b = window.navigator.userAgent.toLowerCase();
        if (b.indexOf("ipad") >= 0 || b.indexOf("iphone") >= 0 || b.indexOf("ipod") >= 0) {
            uc.h5g.browserType = 1;
            uc.h5g.__handler = uc.h5g.__IosPointerHandler
        } else if (b.indexOf("android") >= 0) {
            uc.h5g.browserType = 2;
            uc.h5g.__handler = uc.h5g.__AndroidPointerHandler
        } else {
            uc.h5g.browserType = 0;
            uc.h5g.__handler = uc.h5g.__PCPointerHandler
        }
    };
    uc.h5g.__pointerHandler = function(b) {
        var a = uc.h5g.delegate(uc.h5g.__handler, this)(b);
        a && a.bubbles == false && b.stopPropagation()
    };
    uc.h5g.UIEventDispatch = function(b) {
        for (var a = b.uiEventCache.length, d = 0; d < a; ++d) {
            var e = b.uiEventCache[d];
            (uc.h5g.browserType == void 0 || uc.h5g.browserType == null) && uc.h5g.detectBrowser();
            uc.h5g.delegate(uc.h5g.__handler, b)(e)
        }
        b.uiEventCache = []
    };
    var a = function(b, a, d) {
        b = b.clone();
        b.offsetX = a.offsetX;
        b.offsetY = a.offsetY;
        b.pageX = a.pageX;
        b.pageY = a.pageY;
        b.screenX = a.screenX;
        b.screenY = 
        a.screenY;
        b.x = a.x;
        b.y = a.y;
        b.domEvent = d;
        return b
    };
    uc.h5g.__AndroidPointerHandler = function(b) {
        var c;
        switch (b.type) {
            case "touchstart":
                this.pointerMoved = false;
                this.pointerDown = true;
                this.previewsEvent = b;
                if (b.touches[1]) {
                    this.twoTouching = 2;
                    c = a(uc.h5g.EventManager.events.DblChoose, b.touches[0], b)
                } else {
                    this.twoTouching = 0;
                    c = a(uc.h5g.EventManager.events.Choose, b.touches[0], b)
                }
                uc.h5g.EventManager.triggerEventForSingleObject(this, c, this);
                break;
            case "touchmove":
                if (this.pointerDown) {
                    this.pointerMoved = true;
                    this.previewsEvent = 
                    b;
                    c = this.twoTouching > 0 ? a(uc.h5g.EventManager.events.DblDrag, b.touches[0], b) : a(uc.h5g.EventManager.events.Drag, b.touches[0], b);
                    uc.h5g.EventManager.triggerEventForSingleObject(this, c, this)
                }
                break;
            case "touchend":
                if (this.pointerDown == true) {
                    this.twoTouching--;
                    this.pointerDown = false;
                    this.previewsEvent.type = "touchend";
                    if (this.pointerMoved) {
                        c = this.domElement.getBoundingClientRect();
                        var d = this.previewsEvent.touches[0].pageX, e = this.previewsEvent.touches[0].pageY;
                        if (d >= c.left && d <= c.right && e >= c.top && e <= c.bottom) {
                            c = 
                            a(uc.h5g.EventManager.events.Click, this.previewsEvent.touches[0], b);
                            uc.h5g.EventManager.triggerEventForSingleObject(this, c, this)
                        }
                        c = this.twoTouching > 0 ? a(uc.h5g.EventManager.events.DblDragEnd, this.previewsEvent.touches[0], b) : a(uc.h5g.EventManager.events.DragEnd, this.previewsEvent.touches[0], b);
                        this.pointerMoved = false
                    } else
                        c = a(uc.h5g.EventManager.events.Click, this.previewsEvent.touches[0], b);
                    uc.h5g.EventManager.triggerEventForSingleObject(this, c, this)
                }
        }
        return c
    };
    uc.h5g.__IosPointerHandler = function(b) {
        var c;
        switch (b.type) {
            case "touchstart":
                this.pointerMoved = false;
                this.pointerDown = true;
                this.previewsEvent = b;
                if (b.touches[1]) {
                    this.twoTouching = 2;
                    c = a(uc.h5g.EventManager.events.DblChoose, b.touches[0], b)
                } else {
                    this.twoTouching = 0;
                    c = a(uc.h5g.EventManager.events.Choose, b.touches[0], b)
                }
                uc.h5g.EventManager.triggerEventForSingleObject(this, c, this);
                break;
            case "touchmove":
                if (this.pointerDown) {
                    this.pointerMoved = true;
                    this.previewsEvent = b;
                    c = this.twoTouching > 0 ? a(uc.h5g.EventManager.events.DblDrag, b.touches[0], b) : a(uc.h5g.EventManager.events.Drag, 
                    b.touches[0], b);
                    uc.h5g.EventManager.triggerEventForSingleObject(this, c, this)
                }
                break;
            case "touchend":
                if (this.pointerDown == true) {
                    this.twoTouching--;
                    this.pointerDown = false;
                    this.previewsEvent.type = "touchend";
                    if (this.pointerMoved) {
                        c = this.domElement.getBoundingClientRect();
                        var d = this.previewsEvent.touches[0].pageX, e = this.previewsEvent.touches[0].pageY;
                        if (d >= c.left && d <= c.right && e >= c.top && e <= c.bottom) {
                            c = a(uc.h5g.EventManager.events.Click, this.previewsEvent.touches[0], b);
                            uc.h5g.EventManager.triggerEventForSingleObject(this, 
                            c, this)
                        }
                        c = this.twoTouching > 0 ? a(uc.h5g.EventManager.events.DblDragEnd, this.previewsEvent.touches[0], b) : a(uc.h5g.EventManager.events.DragEnd, this.previewsEvent.touches[0], b);
                        this.pointerMoved = false
                    } else
                        c = a(uc.h5g.EventManager.events.Click, this.previewsEvent.touches[0], b);
                    uc.h5g.EventManager.triggerEventForSingleObject(this, c, this)
                }
        }
        return c
    };
    uc.h5g.__PCPointerHandler = function(b) {
        var c;
        switch (b.type) {
            case "mousedown":
                this.pointerMoved = false;
                this.pointerDown = true;
                c = a(uc.h5g.EventManager.events.Choose, 
                b, b);
                uc.h5g.EventManager.triggerEventForSingleObject(this, c, this);
                break;
            case "mousemove":
                if (this.pointerDown) {
                    this.pointerMoved = true;
                    c = a(uc.h5g.EventManager.events.Drag, b, b);
                    uc.h5g.EventManager.triggerEventForSingleObject(this, c, this)
                }
                break;
            case "mouseup":
                if (this.pointerDown) {
                    if (this.pointerMoved) {
                        c = this.domElement.getBoundingClientRect();
                        var d = b.pageX, e = b.pageY;
                        if (d >= c.left && d <= c.right && e >= c.top && e <= c.bottom) {
                            c = a(uc.h5g.EventManager.events.Click, b, b);
                            uc.h5g.EventManager.triggerEventForSingleObject(this, 
                            c, this)
                        }
                        c = a(uc.h5g.EventManager.events.DragEnd, b, b);
                        this.pointerMoved = false
                    } else
                        c = a(uc.h5g.EventManager.events.Click, b, b);
                    this.pointerDown = false;
                    uc.h5g.EventManager.triggerEventForSingleObject(this, c, this)
                }
                break;
            case "mouseout":
                if (this.domElement.contains(b.relatedTarget))
                    break;
                if (!this.pointerMoved)
                    break;
                if (this.pointerDown && this.pointerMoved) {
                    c = a(uc.h5g.EventManager.events.DragEnd, b, b);
                    uc.h5g.EventManager.triggerEventForSingleObject(this, c, this)
                }
                this.pointerMoved = this.pointerDown = false
        }
        return c
    }
})();
(function() {
    window.kernel_type = 1;
    if (window.WebKitPoint)
        window.kernel_type = 1;
    else if (window.opera)
        window.kernel_type = 3;
    else if (window.navigator.product == "Gecko")
        window.kernel_type = 2;
    else if (window.navigator.userAgent.indexOf("MSIE ") >= 0)
        window.kernel_type = 4;
    uc.h5g.cssPrefix = "";
    uc.h5g.cssJsPrefix = "";
    switch (window.kernel_type) {
        case 1:
            uc.h5g.cssPrefix = "-webkit-";
            uc.h5g.cssJsPrefix = "webkit";
            break;
        case 2:
            uc.h5g.cssPrefix = "-moz-";
            uc.h5g.cssJsPrefix = "Moz";
            break;
        case 3:
            uc.h5g.cssPrefix = "-o-";
            uc.h5g.cssJsPrefix = 
            "O";
            break;
        case 4:
            uc.h5g.cssPrefix = "-ms-";
            uc.h5g.cssJsPrefix = "ms"
    }
    uc.h5g.DomObject = uc.h5g.EventObject.extend({init: function() {
            !this.keyNamePre && (this.keyNamePre = "DomObject");
            this._super(arguments);
            this.id = this.toString();
            this.name = null;
            this.domElement = document.createElement("div");
            this.domElement.id = this.id;
            if (uc.h5g.DomObject.showRect)
                this.domElement.style.border = "solid 1px rgba(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ",0.6)";
            this.domElement.style.position = 
            "absolute";
            this.domElement.style.margin = "0px";
            this.domElement.style.padding = "0px";
            this.domElement.style.overflow = "visible";
            this.domElement.style.cssText = this.domElement.style.cssText + ("; " + uc.h5g.cssPrefix + "transform-origin: left top");
            this.globalDataInEffect = false;
            this.visible = true;
            this.attachDomObject = null;
            this.y = this.x = this.globalTop = this.globalLeft = 0;
            this.scaleY = this.scaleX = 1;
            this.rotation = 0;
            this.opacity = 1;
            this.height = this.width = 0;
            this.parent = null;
            this.children = [];
            this.onEndTimeoutId = -1;
            this.regY = 
            this.regX = 0;
            this.cssPrefix = uc.h5g.cssPrefix;
            this.cssJsPrefix = uc.h5g.cssJsPrefix;
            this.cssTransform = uc.h5g.cssPrefix + "transform";
            this.cssJsTransform = uc.h5g.cssJsPrefix + "Transform";
            this.cssTransition = uc.h5g.cssPrefix + "transition";
            this.cssJsTransition = uc.h5g.cssJsPrefix + "Transition";
            this.cssTransformZ = ", 0px";
            this.cssTransformType = "translate3d";
            if (window.kernel_type > 1) {
                this.cssTransformZ = "";
                this.cssTransformType = "translate"
            }
        },setClass: function(a) {
            this.domElement.className = a
        },getClass: function() {
            return this.domElement.className
        },
        destroy: function() {
        },getX: function() {
            return this.x
        },setX: function(a) {
            this.x = a;
            this.domElement.style[this.cssJsTransition] = "";
            this.__setXY();
            this.__setGlobalDataInEffect(false)
        },getY: function() {
            return this.y
        },setY: function(a) {
            this.y = a;
            this.domElement.style[this.cssJsTransition] = "";
            this.__setXY();
            this.__setGlobalDataInEffect(false)
        },setPos: function(a, b) {
            if (a) {
                !a[0] && (a[0] = 0);
                !a[1] && (a[1] = 0);
                if (b) {
                    !b[0] && (b[0] = 0);
                    !b[1] && (b[1] = 0);
                    this.setX(a[0] - b[0]);
                    this.setY(a[1] - b[1])
                } else {
                    this.setX(a[0]);
                    this.setY(a[1])
                }
            }
        },
        __setXY: function() {
            var a = this.domElement.style[this.cssJsTransform], b = a.indexOf(this.cssTransformType), c = 0;
            b >= 0 && (c = a.indexOf(")", b));
            c > b && c > 0 && (a = a.substr(0, b) + a.substr(c + 1));
            a = this.cssTransformType + "(" + this.x + "px," + this.y + "px" + this.cssTransformZ + ") " + a;
            this.domElement.style[this.cssJsTransform] = a
        },setWidth: function(a) {
            this.width = a;
            this.domElement.style.width = a + "px"
        },getWidth: function() {
            return this.width
        },getName: function() {
            return this.name
        },setName: function(a) {
            this.name = a
        },setHeight: function(a) {
            this.height = 
            a;
            this.domElement.style.height = a + "px"
        },getHeight: function() {
            return this.height
        },appendDomChild: function(a) {
            this.children.length > 0 ? this.domElement.insertBefore(a, this.children[0].domElement) : this.domElement.appendChild(a)
        },__transform: function() {
            var a = null;
            this.globalLeft = this.getX();
            this.globalTop = this.getY();
            if ((a = this.parent) != null) {
                this.globalLeft = this.globalLeft + a.getGlobalLeft();
                this.globalTop = this.globalTop + a.getGlobalTop()
            } else {
                this.globalLeft = this.globalLeft + this.domElement.getLeft();
                this.globalTop = 
                this.globalTop + this.domElement.getTop()
            }
            this.globalDataInEffect = true
        },getGlobalLeft: function() {
            false == this.globalDataInEffect && this.__transform();
            return this.globalLeft
        },getGlobalTop: function() {
            false == this.globalDataInEffect && this.__transform();
            return this.globalTop
        },to: function(a) {
            if (a.scale != null) {
                a.scaleX = a.scale;
                a.scaleY = a.scale
            }
            var b = a.x == null ? this.x : a.x, c = a.y == null ? this.y : a.y, d = a.width == null ? this.width : a.width, e = a.height == null ? this.height : a.height, f = a.rotation == null ? this.rotation : a.rotation, 
            g = a.scaleX == null ? this.scaleX : a.scaleX, h = a.scaleY == null ? this.scaleY : a.scaleY, i = a.opacity == null ? this.opacity : a.opacity, j = a.time == null ? 1 : a.time, k = a.delay == null ? 0 : a.delay, m = a.effect, n = a.onEnd, a = a.onStart, o = this;
            a && a.call(o, o);
            this.domElement.style[this.cssJsTransition] = " all " + j + "s" + (m ? " " + m : " linear") + (k ? " " + k + "s" : "");
            this.y = c;
            this.x = b;
            this.width = d;
            this.height = e;
            this.setRotation(f);
            this.scaleX = g;
            this.scaleY = h;
            this.__setXY();
            this.setWidth(this.width);
            this.setHeight(this.height);
            this.__setScale();
            this.setOpacity(i);
            this.__setGlobalDataInEffect(false);
            if ((j || k) && n) {
                b = (j ? j : 0) + (k ? k : 0);
                clearTimeout(this.onEndTimeoutId);
                this.onEndTimeoutId = window.setTimeout(function() {
                    n.call(o, o)
                }, b * 1E3)
            }
        },clearTo: function() {
            this.domElement.style[this.cssJsTransition] = "";
            this.onEndTimeoutId && clearTimeout(this.onEndTimeoutId) && (this.onEndTimeoutId = null)
        },setOverflowHidden: function(a) {
            this.domElement.style.overflow = a ? "visible" : "hidden"
        },isVisible: function() {
            return this.visible
        },setVisible: function(a) {
            this.visible = a;
            this.domElement.style.display = 
            this.visible ? "block" : "none"
        },getVisible: function() {
            return this.visible
        },setOpacity: function(a) {
            this.opacity = a = a > 1 ? 1 : a < 0 ? 0 : a;
            this.domElement.style.opacity = a
        },getOpacity: function() {
            return this.opacity
        },setScale: function(a, b) {
            this.scaleX = a;
            this.scaleY = b == null ? this.scaleX : b;
            this.domElement.style[this.cssJsTransition] = "";
            this.__setScale();
            this.__setGlobalDataInEffect(false)
        },setScaleX: function(a) {
            this.setScale(a, this.scaleY)
        },setScaleY: function(a) {
            this.setScale(this.scaleX, a)
        },getScale: function() {
            return {x: this.scaleX,
                y: this.scaleY}
        },getScaleX: function() {
            return this.scaleX
        },getScaleY: function() {
            return this.scaleY
        },__setScale: function() {
            var a = this.domElement.style[this.cssJsTransform], b = a.indexOf("scale"), c = 0;
            b >= 0 && (c = a.indexOf(")", b));
            c > b && c > 0 && (a = a.substr(0, b) + a.substr(c + 1));
            a = a + (" scale(" + this.scaleX + ", " + this.scaleY + ") ");
            this.domElement.style[this.cssJsTransform] = a
        },setRotation: function(a) {
            this.rotation = a;
            this.domElement.style[this.cssJsTransition] = "";
            this.__setRotation();
            this.__setGlobalDataInEffect(false)
        },
        getRotation: function() {
            return this.rotation
        },__setRotation: function() {
            var a = this.domElement.style[this.cssJsTransform], b = a.indexOf("rotate"), c = 0;
            b >= 0 && (c = a.indexOf(")", b));
            c > b && c > 0 && (a = a.substr(0, b) + a.substr(c + 1));
            a = a + (" rotate(" + this.rotation + "deg) ");
            this.domElement.style[this.cssJsTransform] = a
        },attachTo: function(a) {
            this.parent && this.parent.remove(this);
            a.appendChild(this.domElement);
            this.attachDomObject = a
        },attachBefore: function(a) {
            this.parent && this.parent.remove(this);
            a.parentNode.insertBefore(this.domElement, 
            a);
            this.attachDomObject = a.parentNode
        },detach: function() {
            this.removeAllEventListeners();
            this.destroy();
            this.attachDomObject.removeChild(this.domElement)
        },attachAfter: function(a) {
            a.parentNode.lastChild == a ? this.attachTo(a.parentNode) : this.attachAfter(a.nextSibling)
        },__setGlobalDataInEffect: function(a) {
            this.globalDataInEffect = a;
            if (false == a)
                for (var b = this.children, c = 0; c < b.length; c++)
                    b[c].__setGlobalDataInEffect(a)
        },removeAllEventListeners: function() {
            for (var a = 0; a < this.children.length; ++a)
                this.children[a].removeAllEventListeners && 
                this.children[a].removeAllEventListeners();
            this._super(arguments);
            uc.h5g.removeUserInteractionSupport(this.domElement, this, false)
        },deleteChild: function(a) {
            this.removeChild(a);
            a.removeAllEventListeners();
            a.destroy()
        },deleteChildAt: function(a) {
            if (a = this.removeChildAt(a)) {
                a.removeAllEventListeners();
                a.destroy()
            }
        },deleteChildByName: function(a) {
            if (a = this.removeChildByName(a)) {
                a.removeAllEventListeners();
                a.destroy()
            }
        },deleteAllChildren: function() {
            for (; this.children.length > 0; )
                this.deleteChildAt(0)
        },addChild: function(a) {
            this.addChildAt(a, 
            this.children.length)
        },addChildAt: function(a, b) {
            if (this.getChildIndex(a) != -1) {
                a.parent = this;
                this.setChildIndex(a, b);
                return a
            }
            a.parent && a.parent.removeChild(a);
            b >= this.children.length ? this.domElement.appendChild(a.domElement) : this.domElement.insertBefore(a.domElement, this.children[b].domElement);
            this.children.splice(b, 0, a);
            a.parent = this;
            a.__setGlobalDataInEffect(false);
            return a
        },updateAlign: function(a) {
            if (this.parent) {
                a || (a = uc.h5g.DomObject.ALIGN_CENTER);
                switch (a) {
                    case uc.h5g.DomObject.ALIGN_CENTER:
                        this.setX(this.parent.width - 
                        this.width >> 1);
                        this.setY(this.parent.height - this.height >> 1);
                        break;
                    case uc.h5g.DomObject.ALIGN_LEFT:
                        this.setX(0);
                        this.setY(this.parent.height - this.height >> 1);
                        break;
                    case uc.h5g.DomObject.ALIGN_RIGTH:
                        this.setX(this.parent.width - this.width);
                        this.setY(domBg.height - this.height >> 1)
                }
            }
        },removeChild: function(a) {
            return this.removeChildAt(this.children.indexOf(a))
        },removeChildAt: function(a) {
            if (a < 0 || a > this.children.length - 1)
                return null;
            var b = this.children[a];
            if (b != null)
                b.parent = null;
            this.domElement.removeChild(b.domElement);
            return this.children.splice(a, 1)[0]
        },removeChildByName: function(a) {
            for (var b = 0, c = this.children.length; b < c; b++)
                if (this.children[b].getName() == a)
                    return this.removeChildAt(b);
            return null
        },removeAllChildren: function() {
            for (; this.children.length > 0; )
                this.removeChildAt(0)
        },getChildByName: function(a) {
            for (var b = 0, c = this.children.length; b < c; b++)
                if (this.children[b].getName() == a)
                    return this.children[b];
            return null
        },getChildAt: function(a) {
            return a < 0 || a > this.children.length - 1 ? null : this.children[a]
        },getChildIndex: function(a) {
            return this.children.indexOf(a)
        },
        setChildIndex: function(a, b) {
            if (a.parent == this) {
                var c = this.children.indexOf(a);
                if (b != c) {
                    if (b > this.children.length)
                        b = this.children.length;
                    c > b ? this.domElement.insertBefore(a.domElement, this.children[b].domElement) : c < b && (this.children.length <= b ? this.domElement.appendChild(a.domElement) : this.domElement.insertBefore(a.domElement, this.children[b].domElement.nextSibling));
                    this.children.splice(c, 1);
                    this.children.splice(b, 0, a)
                }
            }
        },contains: function(a) {
            return this.getChildIndex(a) != -1
        },getNumChildren: function() {
            return this.children.length
        },
        getChildren: function() {
            return this.children
        },getNextHighestDepth: function() {
            return this.children.length
        },setBg: function(a) {
            this.domElement.style.background = a
        },setOrigin: function(a, b) {
            this.regX = a;
            this.regY = b;
            this.domElement.style.cssText = this.domElement.style.cssText + ("; " + uc.h5g.cssPrefix + "transform-origin: " + a + " " + b)
        },getOrigin: function() {
            return {x: this.regX,y: this.regY}
        },getBound: function() {
            var a = this.domElement.getBoundingClientRect();
            return {x: a.left,y: a.top,width: a.width,height: a.height}
        },hitTest: function(a, 
        b, c, d) {
            var c = c || 0, d = d || 0, e = this.getBound();
            return e.left - c <= a && e.right + c >= a && e.top - d <= b && e.bottom + d >= b
        }});
    uc.h5g.DomObject.showRect = false;
    uc.h5g.DomObject.ALIGN_LEFT = "left";
    uc.h5g.DomObject.ALIGN_RIGTH = "rigth";
    uc.h5g.DomObject.ALIGN_CENTER = "center"
})();
uc.h5g.Action = Class.extend({init: function(a, b, c, d, e) {
        this.areaDefined = null != b && void 0 != b;
        if (a) {
            if (typeof a == "string") {
                this.img = new Image;
                this.img.src = a
            } else if (a instanceof HTMLImageElement)
                this.img = a;
            else {
                this.img = new Image;
                this.img.src = a.src
            }
            this.img.onload = uc.h5g.delegate(function() {
                if (this.areaDefined != true)
                    this.area = [0, 0, this.img.width, this.img.height]
            }, this);
            if (b) {
                if (a.width != 0 && b[0] + b[2] > a.width || a.height != 0 && b[1] + b[3] > a.height)
                    throw Error("Animation Frame area exceed HTMLImage size");
                this.area = 
                b
            } else
                this.area = [0, 0, this.img.width, this.img.height];
            this.label = c;
            this.gotoLabel = d;
            this.interval = e
        }
    },addBg: function(a, b, c) {
        a instanceof HTMLImageElement || (a = a ? a.img : null);
        if (!this.moreDoms)
            this.moreDoms = [];
        this.moreDoms.push({domObj: a,x: b,y: c})
    },setX: function(a) {
        this.x = a
    },setY: function(a) {
        this.y = a
    },setRotate: function(a) {
        this.rotate = a
    },setScale: function(a, b) {
        this.scale = {x: a,y: b}
    },setOrigin: function(a, b) {
        this.origin = {x: a,y: b}
    },getX: function() {
        return this.x
    },getY: function() {
        return this.y
    },getRotate: function() {
        return this.rotate
    },
    getScale: function() {
        return this.scale
    },getOrigin: function() {
        return this.origin
    }});
uc.h5g.DomAnimation = uc.h5g.DomObject.extend({init: function(a, b) {
        this.keyNamePre = "DomAnimation";
        this._super(arguments);
        this._mod = uc.h5g.DomAnimation.LOOP;
        this.actionInterval = 1;
        this.actionLabels = {};
        this.actions = [];
        this.step = 0;
        this.interval = b ? b : 1;
        this.timeOutKey = null;
        this._useDomAnimationInterval = false;
        this.moreContainer = new uc.h5g.DomObject;
        this.addChild(this.moreContainer);
        this._pause = false;
        if (a instanceof Array)
            for (var c = 0; c < a.length; ++c)
                this.addAction(a[c]);
        this.currentActionNumber = 0;
        this.addEventListener(uc.h5g.EventManager.events.EnterFrame, 
        this.enterFrame)
    },setMode: function(a) {
        this._mod = a
    },destroy: function() {
        this.removeEventListener(uc.h5g.EventManager.events.EnterFrame, this.enterFrame);
        clearTimeout(this.timeOutKey);
        this.removeAllActions()
    },addAction: function(a) {
        this.addActionAt(a, this.actions.length)
    },addActionAt: function(a, b) {
        this.actions.splice(b, 0, a);
        void 0 != a.label && null != a.label && (this.actionLabels[a.label] = a)
    },useDomAnimationInterval: function() {
        this._useDomAnimationInterval = true
    },useActionDefinedInterval: function() {
        this._useDomAnimationInterval = 
        false
    },removeActionAt: function(a) {
        if (a < 0 || a > this.actions.length - 1)
            return null;
        a = this.actions.splice(a, 1)[0];
        void 0 != a.label && null != a.label && delete this.actionLabels[a.label];
        return a
    },removeAction: function(a) {
        this.removeActionAt(this.actions.indexOf(a))
    },removeAllActions: function() {
        for (; this.actions.length > 0; )
            this.removeActionAt(0)
    },gotoAndStop: function(a) {
        this.setCurrentAction(a);
        this.stop()
    },gotoAndPlay: function(a) {
        this.setCurrentAction(a);
        this.play()
    },stop: function() {
        this._pause = true;
        this.timeOutKey != 
        null && this.timeOutKey != void 0 && clearTimeout(this.timeOutKey)
    },play: function() {
        this._pause = false;
        var a = null, b = this.getAction(this.currentActionNumber), a = b.gotoLabel ? b.gotoLabel : this.currentActionNumber + 1, c = this.interval;
        if (!this._useDomAnimationInterval && b.interval)
            c = b.interval;
        var d = this;
        this.timeOutKey = setTimeout(function() {
            d.setCurrentAction(a)
        }, c * 1E3)
    },isStopped: function() {
        return this._pause
    },enterFrame: function() {
        if (!this._pause) {
            if (this._mod == uc.h5g.DomAnimation.END_STOP) {
                if (this.currentActionNumber == 
                this.getTotalActions() - 1) {
                    this.stop();
                    return
                }
            } else if (this._mod == uc.h5g.DomAnimation.END_DELETE) {
                if (this.currentActionNumber == this.getTotalActions() - 1) {
                    this.destroy();
                    this.parent.removeChild(this);
                    return
                }
            } else if (this._mod == uc.h5g.DomAnimation.END_HIDE && this.currentActionNumber == this.getTotalActions() - 1) {
                this.stop();
                this.parent.removeChild(this);
                return
            }
            var a = this.interval, b = this.getAction(this.currentActionNumber);
            if (!this._useDomAnimationInterval && b.interval)
                a = b.interval;
            if (!(++this.step < a)) {
                this.step = 
                0;
                a = null;
                b = this.getAction(this.currentActionNumber);
                a = b.gotoLabel ? b.gotoLabel : this.currentActionNumber + 1;
                this.setCurrentAction(a)
            }
        }
    },setCurrentAction: function(a) {
        var b = this.getAction(a);
        if (null == b || void 0 == b)
            throw Error("wrong index or label:" + a);
        this.currentActionNumber = this.actions.indexOf(b);
        this.setWidth(b.area[2]);
        this.setHeight(b.area[3]);
        a = b.getX();
        a != void 0 && this.setX(a);
        a = b.getY();
        a != void 0 && this.setY(a);
        a = b.getRotate();
        a != void 0 && this.setRotate(a);
        a = b.getScale();
        a != void 0 && this.setScale(a.x, 
        a.y);
        a = b.getOrigin();
        a != void 0 && this.setOrigin(a.x + "px", a.y + "px");
        this.domElement.style.backgroundImage = "url(" + b.img.src + ")";
        this.domElement.style.backgroundPosition = 0 - b.area[0] + "px " + (0 - b.area[1]) + "px";
        this.moreContainer.deleteAllChildren();
        if (b.moreDoms && b.moreDoms.length > 0) {
            var a = b.moreDoms.length, c, d;
            if (a === 1) {
                c = b.moreDoms[0];
                d = c.domObj;
                this.moreContainer.addChild(d);
                d.setX(c.x);
                d.setY(c.y);
                d.width > this.width && this.setWidth(d.width);
                d.height > this.height && this.setHeight(d.height)
            } else
                for (var e = 
                0; e < a; e++) {
                    c = b.moreDoms[e];
                    d = c.domObj;
                    this.moreContainer.addChild(d);
                    d.setX(c.x);
                    d.setY(c.y);
                    d.width > this.width && this.setWidth(d.width);
                    d.height > this.height && this.setHeight(d.height)
                }
        }
    },getAction: function(a) {
        if (typeof a == "number") {
            a >= this.actions.length && (a = 0);
            a = this.actions[a]
        } else
            a = this.actionLabels[a];
        return a
    },getFrame: function(a) {
        return this.getAction(a)
    },getTotalActions: function() {
        return this.actions.length
    },getNumFrames: function() {
        return this.getTotalActions()
    }});
uc.h5g.DomAnimation.LOOP = 0;
uc.h5g.DomAnimation.END_STOP = 1;
uc.h5g.DomAnimation.END_HIDE = 2;
uc.h5g.DomAnimation.END_DELETE = 3;
uc.h5g.DomButton = uc.h5g.DomObject.extend({init: function(a) {
        var b = a.imgUp, c = a.imgDown, d = a.imgDisable, e = a.imgUpBg, f = a.imgDownBg, g = a.imgDisableBg, h = a.callback;
        this.keyNamePre = "DomButton";
        this._super(arguments);
        if (!c) {
            c = b;
            f = e
        }
        this._updateSkin({foreground: {skinName: "imgDisable",img: d},background: {skinName: "imgDisable",img: g}});
        this._updateSkin({foreground: {skinName: "imgDown",img: c},background: {skinName: "imgDown",img: f}});
        this._updateSkin({foreground: {skinName: "imgUp",img: b},background: {skinName: "imgUp",
                img: e}});
        this.status = uc.h5g.DomButton.ENABLE;
        this.callback = h;
        this.clickFun = function(b, a) {
            this.callback && this.isEnable() && uc.h5g.delegate(this.callback, this)(b, a)
        };
        this.addEventListener(uc.h5g.EventManager.events.Click, this.clickFun);
        this.setImage(this.imgUp);
        this.addEventListener(uc.h5g.EventManager.events.Choose, function() {
            this.isEnable() && this.setImage(this.imgDown)
        });
        this.addEventListener(uc.h5g.EventManager.events.Click, function() {
            this.isEnable() && this.setImage(this.imgUp)
        });
        this.addEventListener(uc.h5g.EventManager.events.DragEnd, 
        function() {
            this.isEnable() && this.setImage(this.imgUp)
        })
    },_relpaceSkin: function(a, b, c) {
        c || (c = this);
        c[a] && c.removeChild(c[a]);
        c[a] = b instanceof uc.h5g.DomImage ? b : new uc.h5g.DomImage(b);
        c.addChild(c[a]);
        return c[a]
    },_updateSkin: function(a) {
        var b = a.foreground, a = a.background, c, d;
        a.img && (c = this._relpaceSkin(a.skinName, a.img));
        b.img && (d = this._relpaceSkin(b.skinName, b.img, c));
        c && d && d.updateAlign()
    },setImage: function(a) {
        var b = [this.imgUp];
        if (this.imgDown)
            b[1] = this.imgDown;
        if (this.imgDisable)
            b[2] = this.imgDisable;
        b.each(function() {
            if (this == a) {
                this.setVisible(true);
                this.parent.setWidth(a.width);
                this.parent.setHeight(a.height)
            } else
                this.setVisible(false)
        })
    },_updateImg: function(a, b) {
        this.removeChild(b);
        if (a) {
            b = a instanceof uc.h5g.DomImage ? a : new uc.h5g.DomImage(a);
            this.addChild(b);
            this.setWidth(b.width);
            this.setHeight(b.height)
        }
    },setImgUp: function(a, b) {
        this._updateSkin({foreground: {skinName: "imgUp",img: b},background: {skinName: "imgUp",img: a}})
    },setImgDown: function(a, b) {
        this._updateSkin({foreground: {skinName: "imgDown",
                img: b},background: {skinName: "imgDown",img: a}});
        this.setImage(this.imgUp)
    },setImgDisable: function(a, b) {
        this._updateSkin({foreground: {skinName: "imgDisable",img: b},background: {skinName: "imgDisable",img: a}})
    },setCallback: function(a) {
        this.callback = a
    },enable: function() {
        this.status = uc.h5g.DomButton.ENABLE;
        this.setImage(this.imgUp)
    },disable: function() {
        this.status = uc.h5g.DomButton.DISABLE;
        this.setImage(this.imgDisable)
    },isEnable: function() {
        return uc.h5g.DomButton.ENABLE == this.status
    }});
(function() {
    var a = uc.h5g.DomButton;
    a.ENABLE = 1;
    a.DISABLE = 2
})();
uc.h5g.DomDragPanel = uc.h5g.DomObject.extend({init: function(a) {
        this.keyNamePre = "DomDragPanel";
        this._super(arguments);
        var a = a || {}, b = a.width || 0, c = a.height || 0, d = a.parentScale, e = a.content;
        this.domElement.style.overflow = "hidden";
        this.setWidth(b);
        this.setHeight(c);
        this.setParentScale(d);
        this.setContent(e);
        this.addEventListener(uc.h5g.EventManager.events.Drag, this._darg);
        this.addEventListener(uc.h5g.EventManager.events.DragEnd, this._dragEnd)
    },setContent: function(a) {
        this.content && this.removeChild(this.content);
        (this.content = a) && this.addChild(this.content)
    },setParentScale: function(a) {
        this.parentScale = a || {scaleX: 1,scaleY: 1}
    },_darg: function(a) {
        var b = this.content;
        if (b) {
            !b.startDragX && (b.startDragX = a.pageX);
            !b.startDragY && (b.startDragY = a.pageY);
            !b.orgX && (b.orgX = b.x);
            !b.orgY && (b.orgY = b.y);
            var c = (a.pageY - b.startDragY) / this.parentScale.scaleY;
            b.setX(Math.max(Math.min(b.orgX + (a.pageX - b.startDragX) / this.parentScale.scaleX, 0), this.width - Math.max(b.width, this.width)));
            b.setY(Math.max(Math.min(b.orgY + c, 0), this.height - 
            Math.max(b.height, this.height)))
        }
    },_dragEnd: function() {
        var a = this.content;
        if (a) {
            a.startDragX = null;
            a.startDragY = null;
            a.orgX = null;
            a.orgY = null
        }
    }});
uc.h5g.DomImage = uc.h5g.DomObject.extend({init: function(a, b) {
        this.keyNamePre = "DomImage";
        this._super(arguments);
        this.areaDefined = false;
        this.setImage(a, b)
    },setImage: function(a, b) {
        if (a) {
            if (typeof a == "string") {
                this.img = new Image;
                this.img.src = a
            } else if (a instanceof HTMLImageElement)
                this.img = a;
            else {
                this.img = new Image;
                this.img.src = a.src;
                !b && (b = a.rect)
            }
            this.domElement.style.backgroundImage = "url(" + this.img.src + ")";
            b ? this.setArea(b) : this.img.onload = uc.h5g.delegate(function() {
                this.setArea(this.area)
            }, this)
        } else {
            this.domElement.style.backgroundImage = 
            "";
            this.img = null
        }
    },getImage: function() {
        return this.img
    },getArea: function() {
        return this.area
    },setArea: function(a) {
        if (this.area = a) {
            this.domElement.style.backgroundPosition = 0 - a[0] + "px " + (0 - a[1]) + "px";
            this.setWidth(a[2]);
            this.setHeight(a[3])
        } else {
            this.domElement.style.backgroundPosition = "0px 0px";
            this.setWidth(this.img.width);
            this.setHeight(this.img.height)
        }
    }});
uc.h5g.DomInput = uc.h5g.DomObject.extend({init: function(a) {
        !this.keyNamePre && (this.keyNamePre = "DomInput");
        this._super(arguments);
        this.textInput = document.createElement("input");
        this.textInput.style.border = "0";
        this.textInput.style.padding = "0";
        this.textInput.style.margin = "0";
        this.textInput.style.backgroundColor = "rgba(0,0,0,0)";
        this.appendDomChild(this.textInput);
        a = a || {};
        this.setValue(a.value);
        this.setWidth(a.width || 0);
        this.setHeight(a.height || 0);
        this.setFontSize(a.fontSize);
        this.setFontFamily(a.fontFamily);
        this.setKeyUpFunction(a.onKeyUp);
        this.setKeyDownFunction(a.onKeyDown)
    },setWidth: function(a) {
        this._super(arguments, [a]);
        this.textInput.style.width = a + "px"
    },setHeight: function(a) {
        this._super(arguments, [a]);
        this.textInput.style.height = a + "px"
    },setFontSize: function(a) {
        if (this.fontSize != a)
            (this.fontSize = a) && (this.textInput.style.fontSize = this.fontSize + "px")
    },setFontFamily: function(a) {
        if (this.fontFamily != a)
            (this.fontFamily = a) && (this.textInput.style.fontFamily = this.fontFamily)
    },getValue: function() {
        return this.textInput.value
    },
    setValue: function(a) {
        this.textInput.value = a || ""
    },setKeyUpFunction: function(a) {
        this.textInput.onkeyup = a
    },setKeyDownFunction: function(a) {
        this.textInput.onKeyUp = a
    }});
uc.h5g.DomClock = uc.h5g.DomObject.extend({init: function(a) {
        this.keyNamePre = "DomClock";
        this._super(arguments);
        a || (a = {});
        this.color = a.color || "#193b3c";
        this.fontSize = a.fontSize || 20;
        this.width = a.width || 60;
        this.height = a.height || 24;
        this.timerTxt = new uc.h5g.DomText;
        this.addChild(this.timerTxt);
        this.timerTxt.domElement.style.fontSize = this.fontSize + "px";
        this.timerTxt.domElement.style.fontWeight = "bold";
        this.setColor(this.color);
        this.setWidth(this.width);
        this.setHeight(this.height);
        this.timeNum = null
    },setWidth: function() {
        this._super(arguments);
        this.timerTxt.setWidth(arguments)
    },setHeight: function() {
        this._super(arguments);
        this.timerTxt.setHeight(arguments)
    },play: function() {
        if (!this.timeNum)
            this.timeNum = setInterval(U.delegate(function() {
                var a = new Date, b = "" + a.getHours(), a = "" + a.getMinutes();
                b.length == 1 && (b = "0" + b);
                a.length == 1 && (a = "0" + a);
                this.timerTxt.setText(b + ":" + a)
            }, this), 1E3)
    },stop: function() {
        clearInterval(this.timeNum)
    },setColor: function(a) {
        this.timerTxt.domElement.style.color = a
    }});
uc.h5g.DomText = uc.h5g.DomImage.extend({ellipsis: !1,init: function(a) {
        this.keyNamePre = "DomText";
        this._super(arguments, [null]);
        this.text = a ? a : "";
        this.textDiv = document.createElement("div");
        this.appendDomChild(this.textDiv);
        this.textDiv.innerHTML = this.text
    },setWidth: function(a) {
        this._super(arguments, [a]);
        this.textDiv.style.width = a + "px"
    },setHeight: function(a) {
        this._super(arguments, [a]);
        this.textDiv.style.height = a + "px"
    },getText: function() {
        return this.textDiv.innerHTML
    },setText: function(a) {
        this.text = a;
        this.textDiv.innerHTML = 
        a
    },setColor: function(a) {
        this.textDiv.style.color = a
    },setTextAlign: function(a) {
        this.textDiv.style.textAlign = a
    },setOutline: function() {
    },setMaxWidth: function() {
    },setLineWidth: function() {
    },setLineSpacing: function() {
    },setEllipsis: function(a) {
        if (this.ellipsis = a) {
            this.textDiv.style.overflow = "hidden";
            this.textDiv.style.whiteSpace = "nowrap";
            this.textDiv.style.textOverflow = "ellipsis"
        } else {
            this.textDiv.style.overflow = "visible";
            this.textDiv.style.whiteSpace = "normal";
            this.textDiv.style.textOverflow = "clip"
        }
    }});
uc.h5g.DomTextButton = uc.h5g.DomButton.extend({init: function(a) {
        this.offsetX;
        this.offsetY;
        this.setOffsetX(parseInt(a.offsetX) || 0);
        this.setOffsetY(parseInt(a.offsetY) || 0);
        this.keyNamePre = "DomTextButton";
        this._super(arguments)
    },setOffsetX: function(a) {
        this.offsetX = a
    },setOffsetY: function(a) {
        this.offsetY = a
    },_updateSkin: function(a) {
        var b = a.foreground, a = a.background, c, d;
        a.img && (c = this._relpaceSkin(a.skinName, a.img));
        b.img && (d = this._relpaceSkin(b.skinName, b.img, c));
        if (c && d) {
            d.setX(c.width - this.offsetX - d.width >> 
            1);
            d.setY(c.height - this.offsetY - d.height >> 1)
        }
    }});
uc.h5g.DomToggleButton = uc.h5g.DomObject.extend({init: function(a) {
        this.keyNamePre = "DomToggleButton";
        this._super(arguments);
        this.callback = this.isAutoCheck = this.checkedImgDisable = this.checkedImgDown = this.checkedImgUp = this.imgDisable = this.imgDown = this.imgUp = null;
        this._isMouseDown = this._isChecked = false;
        this._isEnable = true;
        this._textImg = this._curImg = null;
        var b = a.imgUp, c = a.imgDown, d = a.imgDisable, e = a.checkedImgUp, f = a.checkedImgDown, g = a.textImg, h = a.checkedImgDisable, i = a.isAutoCheck != null ? a.isAutoCheck : true, 
        j = a.callback;
        this.setImgUp(b);
        this.setImgDown(c ? c : b);
        d && this.setImgDisable(d);
        this.setCheckedImgUp(e);
        this.setCheckedImgDown(f ? f : e);
        h && this.setCheckedImgDisable(h);
        this.setAutoCheck(i);
        this.checkedImgUp.setVisible(false);
        this.checkedImgDown.setVisible(false);
        this.checkedImgDisable && this.checkedImgDisable.setVisible(false);
        this.imgUp.setVisible(false);
        this.imgDown.setVisible(false);
        this.imgDisable && this.imgDisable.setVisible(false);
        this.repaint();
        this.callback = j;
        this.clickFun = function(b, a) {
            this.isEnable() && 
            this.autoCheck && this.setChecked(!this.isChecked());
            this.callback && uc.h5g.delegate(this.callback, this)(b, a)
        };
        this.addEventListener(uc.h5g.EventManager.events.Click, this.clickFun);
        this.addEventListener(uc.h5g.EventManager.events.Choose, function() {
            this._isMouseDown = true;
            this.repaint()
        });
        this.addEventListener(uc.h5g.EventManager.events.Click, function() {
            this._isMouseDown = false;
            this.repaint()
        });
        this.addEventListener(uc.h5g.EventManager.events.DragEnd, function() {
            this._isMouseDown = false;
            this.repaint()
        });
        if (!this._textImg && g) {
            this._textImg = new uc.h5g.DomImage(g);
            this.addChild(this._textImg);
            this._textImg.updateAlign()
        }
    },isEnable: function() {
        return this._isEnable
    },setEnable: function(a) {
        this._isEnable = a;
        this.repaint()
    },isChecked: function() {
        return this._isChecked
    },setChecked: function(a) {
        this._isChecked = a;
        this.repaint()
    },setImgUp: function(a) {
        this._replaceSkin("imgUp", a)
    },setImgDown: function(a) {
        this._replaceSkin("imgDown", a)
    },setImgDisable: function(a) {
        this._replaceSkin("imgDisable", a)
    },setCheckedImgUp: function(a) {
        this._replaceSkin("checkedImgUp", 
        a)
    },setCheckedImgDown: function(a) {
        this._replaceSkin("checkedImgDown", a)
    },setCheckedImgDisable: function(a) {
        this._replaceSkin("checkedImgDisable", a)
    },setAutoCheck: function(a) {
        this.autoCheck = a
    },repaint: function() {
        this._curImg && this._curImg.setVisible(false);
        this._curImg = this._isChecked ? this._isEnable ? this._isMouseDown ? this.checkedImgDown : this.checkedImgUp : this.checkedImgDisable : this._isEnable ? this._isMouseDown ? this.imgDown : this.imgUp : this.imgDisable;
        this._curImg.setVisible(true);
        this.setWidth(this._curImg.width);
        this.setHeight(this._curImg.height)
    },_replaceSkin: function(a, b) {
        this[a] && this.removeChild(this[a]);
        this[a] = b instanceof uc.h5g.DomImage ? b : new uc.h5g.DomImage(b);
        this.addChild(this[a])
    }});
uc.h5g.STAGE = null;
uc.h5g.STAGE_WIDTH = 0;
uc.h5g.STAGE_HEIGHT = 0;
uc.h5g.PARENT_SCALE_X = 1;
uc.h5g.PARENT_SCALE_Y = 1;
uc.h5g.FPS = 25;
uc.h5g.init = function(a) {
    var b = new uc.h5g.DomObject;
    a.parent || U.error("[G.init] parent is null");
    a.width || U.error("[G.init] width is null");
    a.height || U.error("[G.init] height is null");
    if (!a.fps)
        a.fps = uc.h5g.FPS;
    uc.h5g.STAGE_WIDTH = a.width;
    uc.h5g.STAGE_HEIGHT = a.height;
    b.setWidth(uc.h5g.STAGE_WIDTH);
    b.setHeight(uc.h5g.STAGE_HEIGHT);
    b.attachTo(a.parent);
    uc.h5g.STAGE = b;
    uc.h5g._onEnterFrame = a.onEnterFrame;
    uc.h5g.setFPS(a.fps);
    return b
};
uc.h5g._fpsIntervalId = null;
uc.h5g._fps = 0;
uc.h5g._onEnterFrame = null;
uc.h5g.setFPS = function(a) {
    uc.h5g.FPS = a;
    null != uc.h5g._fpsIntervalId && clearInterval(uc.h5g._fpsIntervalId);
    uc.h5g._fpsIntervalId = setInterval(function() {
        uc.h5g.EventManager && uc.h5g.EventManager.triggerEvent && uc.h5g.EventManager.triggerEvent(uc.h5g.EventManager.events.EnterFrame);
        uc.h5g._onEnterFrame && uc.h5g._onEnterFrame()
    }, Math.round(1E3 / a))
};
uc.h5g.stopFPS = function() {
    clearInterval(uc.h5g._fpsIntervalId)
};
uc.h5g.destroy = function() {
    uc.h5g.stopFPS()
};
uc.h5g.getParentScale = function() {
    return {x: uc.h5g.PARENT_SCALE_X,y: uc.h5g.PARENT_SCALE_Y}
};
uc.h5g.generateParentScale = function() {
    var a = {x: 1,y: 1}, b = uc.h5g.STAGE.parentNode.style.cssText, c = b.indexOf("scale(") + 6;
    if (c > 6) {
        var d = b.indexOf(",", c), e = b.indexOf(")", c);
        if (d > e || d == -1) {
            d = e;
            if (d > c) {
                b = b.substring(c, d);
                a.x = b;
                a.y = b
            }
        } else if (d > c) {
            c = b.substring(c, d);
            b = b.substring(d + 1, e);
            a.x = c;
            a.y = b
        }
    }
    uc.h5g.PARENT_SCALE_X = a.x;
    uc.h5g.PARENT_SCALE_Y = a.y;
    return a
};
(function(a) {
    function b(b, a, c) {
        for (var d = b.length, i = a.length, j, k, m, n, o, p, l = 0, q = j = 0; q < d; q++) {
            j = b[q];
            k = b[q < d - 1 ? q + 1 : 0];
            l = j.y - k.y;
            j = k.x - j.x;
            k = Math.sqrt(l * l + j * j);
            l = l / k;
            j = j / k;
            k = m = b[0].x * l + b[0].y * j;
            for (var r = 1; r < d; r++) {
                p = b[r].x * l + b[r].y * j;
                p > m ? m = p : p < k && (k = p)
            }
            n = o = a[0].x * l + a[0].y * j;
            for (r = 1; r < i; r++) {
                p = a[r].x * l + a[r].y * j;
                p > o ? o = p : p < n && (n = p)
            }
            if (k < n) {
                k = n - m;
                l = -l;
                j = -j
            } else
                k = k - o;
            if (k >= 0)
                return false;
            if (k > c.overlap) {
                c.overlap = k;
                c.normal.x = l;
                c.normal.y = j
            }
        }
        return c
    }
    var c = a.Quark = a.Quark || {global: a}, d = function() {
    };
    c.inherit = 
    function(b, a) {
        d.prototype = a.prototype;
        b.superClass = a.prototype;
        b.prototype = new d;
        b.prototype.constructor = b
    };
    c.merge = function(b, a, c) {
        for (var d in a)
            if (!c || b.hasOwnProperty(d) || b[d] !== void 0)
                b[d] = a[d];
        return b
    };
    c.delegate = function(b, c) {
        var d = c || a;
        if (arguments.length > 2) {
            var h = Array.prototype.slice.call(arguments, 2);
            return function() {
                var a = Array.prototype.concat.apply(h, arguments);
                return b.apply(d, a)
            }
        }
        return function() {
            return b.apply(d, arguments)
        }
    };
    c.getDOM = function(b) {
        return document.getElementById(b)
    };
    c.createDOM = function(b, a) {
        var c = document.createElement(b), d;
        for (d in a) {
            var i = a[d];
            if (d == "style")
                for (var j in i)
                    c.style[j] = i[j];
            else
                c[d] = i
        }
        return c
    };
    c.use = function(b) {
        for (var b = b.split("."), c = a, d = 0; d < b.length; d++)
            var h = b[d], c = c[h] || (c[h] = {});
        return c
    };
    (function(b) {
        var c = b.ua = navigator.userAgent;
        b.isWebKit = /webkit/i.test(c);
        b.isMozilla = /mozilla/i.test(c);
        b.isIE = /msie/i.test(c);
        b.isFirefox = /firefox/i.test(c);
        b.isChrome = /chrome/i.test(c);
        b.isSafari = /safari/i.test(c) && !this.isChrome;
        b.isMobile = /mobile/i.test(c);
        b.isOpera = /opera/i.test(c);
        b.isIOS = /ios/i.test(c);
        b.isIpad = /ipad/i.test(c);
        b.isIpod = /ipod/i.test(c);
        b.isIphone = /iphone/i.test(c) && !this.isIpod;
        b.isAndroid = /android/i.test(c);
        b.supportStorage = "localStorage" in a;
        b.supportOrientation = "orientation" in a;
        b.supportDeviceMotion = "ondevicemotion" in a;
        b.supportTouch = "ontouchstart" in a;
        b.supportCanvas = true;
        b.cssPrefix = b.isWebKit ? "webkit" : b.isFirefox ? "Moz" : b.isOpera ? "O" : b.isIE ? "ms" : ""
    })(c);
    c.getElementOffset = function(b) {
        for (var a = b.offsetLeft, c = b.offsetTop; (b = 
        b.offsetParent) && b != document.body && b != document; ) {
            a = a + b.offsetLeft;
            c = c + b.offsetTop
        }
        return {left: a,top: c}
    };
    c.createDOMDrawable = function(b, a) {
        var d = b.tagName || "div", h = a.image, i = b.width || h && h.width, j = b.height || h && h.height, k = c.createDOM(d);
        if (b.id)
            k.id = b.id;
        k.style.position = "absolute";
        k.style.left = (b.left || 0) + "px";
        k.style.top = (b.top || 0) + "px";
        k.style.width = i + "px";
        k.style.height = j + "px";
        if (d == "canvas") {
            k.width = i;
            k.height = j;
            if (h) {
                d = k.getContext("2d");
                i = a.rect || [0, 0, i, j];
                d.drawImage(h, i[0], i[1], i[2], i[3], b.x || 
                0, b.y || 0, b.width || i[2], b.height || i[3])
            }
        } else {
            k.style.opacity = b.alpha != void 0 ? b.alpha : 1;
            k.style.overflow = "hidden";
            if (h && h.src) {
                k.style.backgroundImage = "url(" + h.src + ")";
                k.style.backgroundPosition = -(b.rectX || 0) + "px " + -(b.rectY || 0) + "px"
            }
        }
        return k
    };
    c.DEG_TO_RAD = Math.PI / 180;
    c.RAD_TO_DEG = 180 / Math.PI;
    c.hasParentClip = function(b) {
        return b ? b.overflowHidden ? b : c.hasParentClip(b.parent) : null
    };
    c.hitTestPoint = function(b, a, d, h) {
        var i = c._hitTestPoint(b, a, d, h);
        if (i == 1)
            if (b = c.hasParentClip(b))
                return c._hitTestPoint(b, 
                a, d, h);
        return i
    };
    c._hitTestPoint = function(b, a, c, d) {
        var b = b.getBounds(), i = b.length, j = a >= b.x && a <= b.x + b.width && c >= b.y && c <= b.y + b.height;
        if (j && d) {
            for (var d = 0, j = false, k, m, n, o, p = 0; p < i; p++) {
                var l = b[p], q = b[(p + 1) % i];
                if (l.y == q.y && c == l.y) {
                    l.x > q.x ? (k = q.x, m = l.x) : (k = l.x, m = q.x);
                    if (a >= k && a <= m) {
                        j = true;
                        continue
                    }
                }
                l.y > q.y ? (n = q.y, o = l.y) : (n = l.y, o = q.y);
                if (!(c < n || c > o)) {
                    l = (c - l.y) * (q.x - l.x) / (q.y - l.y) + l.x;
                    l > a ? d++ : l == a && (j = true)
                }
            }
            return j ? 0 : d % 2 == 1 ? 1 : -1
        }
        return j ? 1 : -1
    };
    c.hitTestObject = function(b, a, d) {
        var h = c._hitTestObject(b, a, 
        d);
        if (h) {
            var i = c.hasParentClip(b), j = c.hasParentClip(a);
            if (i != i) {
                h = false;
                i && j ? h = c._hitTestObject(i, j, d) : i ? h = c._hitTestObject(i, a, d) : j && (h = c._hitTestObject(b, j, d))
            }
        }
        return h
    };
    c._hitTestObject = function(b, a, d) {
        var b = b.getBounds(), a = a.getBounds(), h = b.x <= a.x + a.width && a.x <= b.x + b.width && b.y <= a.y + a.height && a.y <= b.y + b.height;
        if (h && d) {
            h = c.polygonCollision(b, a);
            return h !== false
        }
        return h
    };
    c.polygonCollision = function(a, c) {
        var d = b(a, c, {overlap: -Infinity,normal: {x: 0,y: 0}});
        return d ? b(c, a, d) : false
    };
    c.toString = function() {
        return "Quark"
    };
    c.trace = function() {
        var b = Array.prototype.slice.call(arguments);
        typeof console != "undefined" && typeof console.log != "undefined" && console.log(b.join(" "))
    };
    if (a.Q == void 0)
        a.Q = c;
    if (a.trace == void 0)
        a.trace = c.trace
})(window);
(function() {
    var a = function() {
    };
    Quark.inheritList = [];
    Quark.inherit = function(b, c) {
        a.prototype = c.prototype;
        b.superClass = c.prototype;
        b.prototype = new a;
        b.prototype.constructor = b;
        Quark.inheritList.push(b)
    }
})();
(function() {
    var a = Quark.Matrix = function(b, a, d, e, f, g) {
        this.a = b;
        this.b = a;
        this.c = d;
        this.d = e;
        this.tx = f;
        this.ty = g
    };
    a.prototype.concat = function(b) {
        var a = this.a, d = this.c, e = this.tx;
        this.a = a * b.a + this.b * b.c;
        this.b = a * b.b + this.b * b.d;
        this.c = d * b.a + this.d * b.c;
        this.d = d * b.b + this.d * b.d;
        this.tx = e * b.a + this.ty * b.c + b.tx;
        this.ty = e * b.b + this.ty * b.d + b.ty;
        return this
    };
    a.prototype.rotate = function(b) {
        var a = Math.cos(b), b = Math.sin(b), d = this.a, e = this.c, f = this.tx;
        this.a = d * a - this.b * b;
        this.b = d * b + this.b * a;
        this.c = e * a - this.d * b;
        this.d = 
        e * b + this.d * a;
        this.tx = f * a - this.ty * b;
        this.ty = f * b + this.ty * a;
        return this
    };
    a.prototype.scale = function(b, a) {
        this.a = this.a * b;
        this.d = this.d * a;
        this.tx = this.tx * b;
        this.ty = this.ty * a;
        return this
    };
    a.prototype.translate = function(b, a) {
        this.tx = this.tx + b;
        this.ty = this.ty + a;
        return this
    };
    a.prototype.identity = function() {
        this.a = this.d = 1;
        this.b = this.c = this.tx = this.ty = 0;
        return this
    };
    a.prototype.invert = function() {
        var b = this.a, a = this.b, d = this.c, e = this.d, f = this.tx, g = b * e - a * d;
        this.a = e / g;
        this.b = -a / g;
        this.c = -d / g;
        this.d = b / g;
        this.tx = 
        (d * this.ty - e * f) / g;
        this.ty = -(b * this.ty - a * f) / g;
        return this
    };
    a.prototype.transformPoint = function(b, a, d) {
        var e = b.x * this.a + b.y * this.c + this.tx, f = b.x * this.b + b.y * this.d + this.ty;
        if (a) {
            e = e + 0.5 >> 0;
            f = f + 0.5 >> 0
        }
        if (d)
            return {x: e,y: f};
        b.x = e;
        b.y = f;
        return b
    };
    a.prototype.clone = function() {
        return new a(this.a, this.b, this.c, this.d, this.tx, this.ty)
    };
    a.prototype.toString = function() {
        return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")"
    }
})();
(function() {
    var a = Quark.Rectangle = function(b, a, d, e) {
        this.x = b;
        this.y = a;
        this.width = d;
        this.height = e
    };
    a.prototype.intersects = function(b) {
        return this.x <= b.x + b.width && b.x <= this.x + this.width && this.y <= b.y + b.height && b.y <= this.y + this.height
    };
    a.prototype.intersection = function(b) {
        var c = Math.max(this.x, b.x), d = Math.min(this.x + this.width, b.x + b.width);
        if (c <= d) {
            var e = Math.max(this.y, b.y), b = Math.min(this.y + this.height, b.y + b.height);
            if (e <= b)
                return new a(c, e, d - c, b - e)
        }
        return null
    };
    a.prototype.union = function(b, c) {
        var d = 
        Math.max(this.x + this.width, b.x + b.width), e = Math.max(this.y + this.height, b.y + b.height), f = Math.min(this.x, b.x), g = Math.min(this.y, b.y), d = d - f, e = e - g;
        if (c)
            return new a(f, g, d, e);
        this.x = f;
        this.y = g;
        this.width = d;
        this.height = e
    };
    a.prototype.containsPoint = function(b, a) {
        return this.x <= b && b <= this.x + this.width && this.y <= a && a <= this.y + this.height
    };
    a.prototype.clone = function() {
        return new a(this.x, this.y, this.width, this.height)
    };
    a.prototype.toString = function() {
        return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + 
        this.height + ")"
    }
})();
(function() {
    var a = Quark.Drawable = function(b, a) {
        this.domDrawable = this.rawDrawable = null;
        this.set(b, a)
    };
    a.prototype.get = function(b, a) {
        if (a == null || a.canvas.getContext != null)
            return this.rawDrawable;
        if (this.domDrawable == null)
            this.domDrawable = Quark.createDOMDrawable(b, {image: this.rawDrawable});
        return this.domDrawable
    };
    a.prototype.set = function(b, a) {
        var d;
        d = b == null ? false : b instanceof HTMLImageElement || b instanceof HTMLCanvasElement || b instanceof HTMLVideoElement;
        if (d)
            this.rawDrawable = b;
        if (a === true)
            this.domDrawable = 
            b;
        else if (this.domDrawable)
            this.domDrawable.style.backgroundImage = "url(" + this.rawDrawable.src + ")"
    }
})();
(function() {
    Quark.KEY = {MOUSE_LEFT: 1,MOUSE_MID: 2,MOUSE_RIGHT: 3,BACKSPACE: 8,TAB: 9,NUM_CENTER: 12,ENTER: 13,RETURN: 13,SHIFT: 16,CTRL: 17,ALT: 18,PAUSE: 19,CAPS_LOCK: 20,ESC: 27,ESCAPE: 27,SPACE: 32,PAGE_UP: 33,PAGE_DOWN: 34,END: 35,HOME: 36,LEFT: 37,UP: 38,RIGHT: 39,DOWN: 40,PRINT_SCREEN: 44,INSERT: 45,DELETE: 46,ZERO: 48,ONE: 49,TWO: 50,THREE: 51,FOUR: 52,FIVE: 53,SIX: 54,SEVEN: 55,EIGHT: 56,NINE: 57,A: 65,B: 66,C: 67,D: 68,E: 69,F: 70,G: 71,H: 72,I: 73,J: 74,K: 75,L: 76,M: 77,N: 78,O: 79,P: 80,Q: 81,R: 82,S: 83,T: 84,U: 85,V: 86,W: 87,X: 88,Y: 89,Z: 90,
        CONTEXT_MENU: 93,NUM_ZERO: 96,NUM_ONE: 97,NUM_TWO: 98,NUM_THREE: 99,NUM_FOUR: 100,NUM_FIVE: 101,NUM_SIX: 102,NUM_SEVEN: 103,NUM_EIGHT: 104,NUM_NINE: 105,NUM_MULTIPLY: 106,NUM_PLUS: 107,NUM_MINUS: 109,NUM_PERIOD: 110,NUM_DIVISION: 111,F1: 112,F2: 113,F3: 114,F4: 115,F5: 116,F6: 117,F7: 118,F8: 119,F9: 120,F10: 121,F11: 122,F12: 123}
})();
(function() {
    var a = Quark.EventDispatcher = function() {
        this._eventMap = {}
    };
    a.prototype.addEventListener = function(b, a) {
        var d = this._eventMap[b];
        d == null && (d = this._eventMap[b] = []);
        if (d.indexOf(a) == -1) {
            d.push(a);
            return true
        }
        return false
    };
    a.prototype.removeEventListener = function(b, a) {
        if (arguments.length == 1)
            return this.removeEventListenerByType(b);
        var d = this._eventMap[b];
        if (d == null)
            return false;
        for (var e = 0; e < d.length; e++)
            if (d[e] === a) {
                d.splice(e, 1);
                d.length == 0 && delete this._eventMap[b];
                return true
            }
        return false
    };
    a.prototype.removeEventListenerByType = function(b) {
        if (this._eventMap[b] != null) {
            delete this._eventMap[b];
            return true
        }
        return false
    };
    a.prototype.removeAllEventListeners = function() {
        this._eventMap = {}
    };
    a.prototype.dispatchEvent = function(b) {
        var a = this._eventMap[b.type];
        if (a == null)
            return false;
        if (!b.target)
            b.target = this;
        for (var a = a.slice(), d = 0; d < a.length; d++) {
            var e = a[d];
            typeof e == "function" && e.call(this, b)
        }
        return true
    };
    a.prototype.hasEventListener = function(b) {
        b = this._eventMap[b];
        return b != null && b.length > 0
    };
    a.prototype.on = a.prototype.addEventListener;
    a.prototype.un = a.prototype.removeEventListener;
    a.prototype.fire = a.prototype.dispatchEvent
})();
(function() {
    var a = Quark.EventManager = function() {
        this.keyState = {};
        this._evtHandlers = {}
    };
    a.prototype.registerStage = function(b, a, d, e) {
        this.register(b.context.canvas, a, {host: b,func: b.dispatchEvent}, d, e)
    };
    a.prototype.unregisterStage = function(b, a) {
        this.unregister(b.context.canvas, a, b.dispatchEvent)
    };
    a.prototype.register = function(b, a, d, e, f) {
        if (d == null || typeof d == "function")
            d = {host: null,func: d};
        for (var g = {prevent: e,stop: f}, h = this, e = function(b) {
            h._onEvent(b, g, d)
        }, f = 0; f < a.length; f++) {
            for (var i = a[f], j = this._evtHandlers[i] || 
            (this._evtHandlers[i] = []), k = 0, m = false; k < j.length; k++) {
                var n = j[k];
                if (n.target == b && n.callback.func == d.func) {
                    trace("duplicate callback");
                    m = true;
                    break
                }
            }
            if (!m) {
                j.push({target: b,callback: d,handler: e});
                b.addEventListener(i, e, false)
            }
        }
    };
    a.prototype.unregister = function(b, a, d) {
        for (var e = 0; e < a.length; e++)
            for (var f = a[e], g = this._evtHandlers[f], h = 0; h < g.length; h++) {
                var i = g[h];
                if (i.target == b && (i.callback.func == d || d == null)) {
                    b.removeEventListener(f, i.handler);
                    g.splice(h, 1);
                    break
                }
            }
    };
    a.prototype._onEvent = function(b, c, 
    d) {
        var e = b, f = b.type;
        if (b.type.indexOf("touch") == 0) {
            e = b.touches && b.touches.length > 0 ? b.touches[0] : b.changedTouches && b.changedTouches.length > 0 ? b.changedTouches[0] : b;
            e.type = f;
            e.rawEvent = b
        }
        if (f == "keydown" || f == "keyup" || f == "keypress")
            this.keyState[b.keyCode] = f;
        d.func != null && d.func.call(d.host, e);
        a.stop(b, !c.prevent, !c.stop)
    };
    a.stop = function(b, a, d) {
        a || b.preventDefault();
        if (!d) {
            b.stopPropagation();
            b.stopImmediatePropagation && b.stopImmediatePropagation()
        }
    }
})();
(function() {
    var a = Quark.Context = function(b) {
        if (b.canvas == null)
            throw "Quark.Context Error: canvas is required.";
        this.canvas = null;
        Quark.merge(this, b)
    };
    a.prototype.startDraw = function() {
    };
    a.prototype.draw = function() {
    };
    a.prototype.endDraw = function() {
    };
    a.prototype.transform = function() {
    };
    a.prototype.remove = function() {
    }
})();
(function() {
    function a(b, a) {
        var c = "";
        return c = a ? c + ("translate3d(" + (b.x - b.regX) + "px, " + (b.y - b.regY) + "px, 0px)rotate3d(0, 0, 1, " + b.rotation + "deg)scale3d(" + b.scaleX + ", " + b.scaleY + ", 1)") : c + ("translate(" + (b.x - b.regX) + "px, " + (b.y - b.regY) + "px)rotate(" + b.rotation + "deg)scale(" + b.scaleX + ", " + b.scaleY + ")")
    }
    var b = document.createElement("div"), c = b.style[Quark.cssPrefix + "Transform"] != void 0, d = b.style[Quark.cssPrefix + "Perspective"] != void 0, e = document.documentElement;
    if (d && "webkitPerspective" in e.style) {
        b.id = "test3d";
        var f = document.createElement("style");
        f.textContent = "@media (-webkit-transform-3d){#test3d{height:3px}}";
        document.head.appendChild(f);
        e.appendChild(b);
        d = b.offsetHeight === 3;
        f.parentNode.removeChild(f);
        b.parentNode.removeChild(b)
    }
    Quark.supportTransform = c;
    Quark.supportTransform3D = d;
    if (c) {
        var g = Quark.DOMContext = function(b) {
            g.superClass.constructor.call(this, b)
        };
        Quark.inherit(g, Quark.Context);
        g.prototype.draw = function(b) {
            if (!b._addedToDOM) {
                var a = b.parent, c = b.getDrawable(this);
                if (a != null) {
                    var d = a.getDrawable(this);
                    c.parentNode != d && d.appendChild(c);
                    if (d.parentNode == null && a instanceof Quark.Stage) {
                        this.canvas.appendChild(d);
                        a._addedToDOM = true
                    }
                    b._addedToDOM = true
                }
            }
        };
        g.prototype.transform = function(b) {
            var c = b.getDrawable(this);
            if (b.transformEnabled || !b._addedToDOM) {
                var d = Quark.cssPrefix, e = d + "TransformOrigin", d = d + "Transform", c = c.style;
                if (!c.display || b.propChanged("visible", "alpha"))
                    c.display = !b.visible || b.alpha <= 0 ? "none" : "";
                if (!c.opacity || b.propChanged("alpha"))
                    c.opacity = b.alpha;
                if (!c.backgroundPosition || b.propChanged("rectX", 
                "rectY"))
                    c.backgroundPosition = -b.rectX + "px " + -b.rectY + "px";
                if (!c.width || b.propChanged("width", "height")) {
                    c.width = b.width + "px";
                    c.height = b.height + "px"
                }
                if (!c[e] || b.propChanged("regX", "regY"))
                    c[e] = b.regX + "px " + b.regY + "px";
                if (!c[d] || b.propChanged("x", "y", "regX", "regY", "scaleX", "scaleY", "rotation")) {
                    e = Quark.supportTransform3D ? a(b, true) : a(b, false);
                    c[d] = e
                }
                if (!c.zIndex || b.propChanged("_depth"))
                    c.zIndex = b._depth;
                if (b.mask != null) {
                    c[Q.cssPrefix + "MaskImage"] = b.mask.getDrawable(this).style.backgroundImage;
                    c[Q.cssPrefix + 
                    "MaskRepeat"] = "no-repeat";
                    c[Q.cssPrefix + "MaskPosition"] = b.mask.x + "px " + b.mask.y + "px"
                }
                c.pointerEvents = b.eventEnabled ? "auto" : "none"
            }
        };
        g.prototype.hide = function(b) {
            b.getDrawable(this).style.display = "none"
        };
        g.prototype.remove = function(b) {
            var a = b.getDrawable(this), c = a.parentNode;
            c != null && c.removeChild(a);
            b._addedToDOM = false
        }
    } else
        trace("Warn: DOMContext requires css transfrom support.")
})();
(function() {
    var a = Quark.CanvasContext = function(b) {
        a.superClass.constructor.call(this, b);
        this.context = this.canvas.getContext("2d")
    };
    Quark.inherit(a, Quark.Context);
    a.prototype.startDraw = function() {
        this.context.save()
    };
    a.prototype.draw = function(b) {
        if (!(b.parent != null && b.parent.mask != null)) {
            if (b.mask == null)
                if (b._cache != null)
                    this.context.drawImage(b._cache, 0, 0);
                else if (b instanceof Quark.Graphics || b instanceof Quark.Text)
                    b._draw(this.context);
                else {
                    var a = b.getDrawable(this);
                    if (a != null && (G.IS_AC || a.width != 
                    0)) {
                        arguments[0] = a;
                        arguments[3] != 0 && this.context.drawImage.apply(this.context, arguments)
                    }
                }
            if (G.DEBUG) {
                this.context.save();
                this.context.strokeStyle = "red";
                this.context.lineWidth = 1;
                this.context.strokeRect(0, 0, b.width, b.height);
                this.context.restore()
            }
        }
    };
    a.prototype.endDraw = function() {
        this.context.restore()
    };
    a.prototype.transform = function(b) {
        var a = this.context;
        if (b instanceof Q.Stage) {
            if (b._scaleX != b.scaleX) {
                b._scaleX = b.scaleX;
                this.canvas.style.width = b._scaleX * b.width + "px"
            }
            if (b._scaleY != b.scaleY) {
                b._scaleY = 
                b.scaleY;
                this.canvas.style.height = b._scaleY * b.height + "px"
            }
        } else {
            a.transform(b.scaleX, b.skewY, b.skewX, b.scaleY, b.x, b.y);
            b.rotation % 360 != 0 && a.rotate(b.rotation % 360 * Quark.DEG_TO_RAD);
            (b.regX != 0 || b.regY != 0) && a.translate(-b.regX, -b.regY)
        }
        if (b.alpha > 0)
            a.globalAlpha = a.globalAlpha * b.alpha
    };
    a.prototype.clear = function(b, a, d, e) {
        this.context.clearRect(b, a, d, e)
    }
})();
(function() {
    var a = Quark.DisplayObject = function(b) {
        this.id = Quark.UIDUtil.createUID("DisplayObject");
        this.name = null;
        this.height = this.width = this.regY = this.regX = this.y = this.x = 0;
        this.scaleY = this.scaleX = this.alpha = 1;
        this.rotation = this.skewY = this.skewX = 0;
        this.transformEnabled = this.eventEnabled = this.visible = true;
        this.useHandCursor = false;
        this.context = this.parent = this.drawable = this.mask = this.polyArea = null;
        this.twoTouching = 0;
        this.targetLeft;
        this.targetTop;
        this.cancelClick = false;
        this.eventX;
        this.eventY;
        this._depth = 
        0;
        this._lastState = {};
        this._stateList = ["x", "y", "regX", "regY", "width", "height", "alpha", "scaleX", "scaleY", "skewX", "skewY", "rotation", "visible", "_depth"];
        this._NewEventMap = [];
        Quark.merge(this, b, true);
        b.mixin && Quark.merge(this, b.mixin, false);
        a.superClass.constructor.call(this, b)
    };
    Quark.inherit(a, Quark.EventDispatcher);
    a.prototype.setDrawable = function(b) {
        this.drawable == null ? this.drawable = new Quark.Drawable(b) : this.drawable.rawDrawable != b && this.drawable.set(b)
    };
    a.prototype.getDrawable = function(b) {
        return this._cache || 
        this.drawable && this.drawable.get(this, b)
    };
    a.prototype._update = function(b, a) {
        this.update(b, a)
    };
    a.prototype.onEnterFrame = function() {
        this.dispatchEvent({type: G.EVENT.ENTER_FRAME})
    };
    a.prototype.update = function() {
        this.onEnterFrame();
        return true
    };
    a.prototype._render = function(b) {
        b = this.context || b;
        if (!this.visible || this.alpha <= 0) {
            b.hide != null && b.hide(this);
            this.saveState(["visible", "alpha"])
        } else {
            b.startDraw();
            b.transform(this);
            this._drawBackgroundOrBorder(b.context);
            this._drawTopBorder(b.context);
            this._drawBottomBorder(b.context);
            this._drawLeftBorder(b.context);
            this._drawRightBorder(b.context);
            this._drawBoxShadow(b.context);
            (this._gradientFgType || this._gradientBgType) && this._renderGradient(b.context);
            if (this.overflowHidden) {
                b.context.save();
                this._drawPath(b.context);
                b.context.clip()
            }
            this.render(b);
            this.overflowHidden && b.context.restore();
            b.endDraw();
            this.saveState()
        }
    };
    a.prototype.render = function(b) {
        b.draw(this, 0, 0, this.width, this.height, 0, 0, this.width, this.height)
    };
    a.prototype.saveState = function(b) {
        for (var b = b || this._stateList, 
        a = this._lastState, d = 0, e = b.length; d < e; d++) {
            var f = b[d];
            a["last" + f] = this[f]
        }
    };
    a.prototype.getState = function(b) {
        return this._lastState["last" + b]
    };
    a.prototype.propChanged = function(b) {
        for (var a = arguments.length > 0 ? arguments : this._stateList, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            if (this._lastState["last" + f] != this[f])
                return true
        }
        return false
    };
    a.prototype.hitTestPoint = function(b, a, d) {
        return Quark.hitTestPoint(this, b, a, d)
    };
    a.prototype.hitTestObject = function(b, a) {
        return Quark.hitTestObject(this, b, a)
    };
    a.prototype.localToGlobal = 
    function(b, a) {
        var d = this.getConcatenatedMatrix();
        return {x: d.tx + b,y: d.ty + a}
    };
    a.prototype.globalToLocal = function(b, a) {
        var d = this.getConcatenatedMatrix().invert();
        return {x: d.tx + b,y: d.ty + a}
    };
    a.prototype.localToTarget = function(b, a, d) {
        b = this.localToGlobal(b, a);
        return d.globalToLocal(b.x, b.y)
    };
    a.prototype.getConcatenatedMatrix = function(b) {
        var a = new Quark.Matrix(1, 0, 0, 1, 0, 0);
        if (b == this)
            return a;
        for (var d = this; d.parent != null && d.parent != b; d = d.parent) {
            var e = 1, f = 0;
            if (d.rotation % 360 != 0) {
                f = d.rotation * Quark.DEG_TO_RAD;
                e = Math.cos(f);
                f = Math.sin(f)
            }
            if (d.regX != 0)
                a.tx = a.tx - d.regX;
            if (d.regY != 0)
                a.ty = a.ty - d.regY;
            a.concat(new Quark.Matrix(e * d.scaleX, f * d.scaleX, -f * d.scaleY, e * d.scaleY, d.x, d.y))
        }
        return a
    };
    a.prototype.getBounds = function() {
        var b = this.width, a = this.height, d = this.getConcatenatedMatrix(), b = this.polyArea || [{x: 0,y: 0}, {x: b,y: 0}, {x: b,y: a}, {x: 0,y: a}], a = [], e = b.length, f, g, h, i, j;
        f = d.transformPoint(b[0], true, true);
        g = h = f.x;
        i = j = f.y;
        a[0] = f;
        for (var k = 1; k < e; k++) {
            f = d.transformPoint(b[k], true, true);
            if (g > f.x)
                g = f.x;
            else if (h < f.x)
                h = 
                f.x;
            if (i > f.y)
                i = f.y;
            else if (j < f.y)
                j = f.y;
            a[k] = f
        }
        a.x = g;
        a.y = i;
        a.width = h - g;
        a.height = j - i;
        return a
    };
    a.prototype.getCurrentWidth = function() {
        return Math.abs(this.width * this.scaleX)
    };
    a.prototype.getCurrentHeight = function() {
        return Math.abs(this.height * this.scaleY)
    };
    a.prototype.getStage = function() {
        for (var b = this; b.parent; )
            b = b.parent;
        return b instanceof Quark.Stage ? b : null
    };
    Quark.DisplayObject.prototype.cache = function(b, a) {
        return this._cache = Quark.cacheObject(this, b, a)
    };
    Quark.DisplayObject.prototype.uncache = function() {
        this._cache = 
        null
    };
    Quark.DisplayObject.prototype.toImage = function(b) {
        return Quark.cacheObject(this, true, b)
    };
    a.prototype.toString = function() {
        return Quark.UIDUtil.displayObjectToString(this)
    }
})();
Quark.DisplayObject.prototype.setX = function(a) {
    this.x = a
};
Quark.DisplayObject.prototype.getX = function() {
    return this.x
};
Quark.DisplayObject.prototype.setY = function(a) {
    this.y = a
};
Quark.DisplayObject.prototype.getY = function() {
    return this.y
};
Quark.DisplayObject.prototype.setWidth = function(a) {
    this.width = a
};
Quark.DisplayObject.prototype.getWidth = function() {
    return this.width
};
Quark.DisplayObject.prototype.setHeight = function(a) {
    this.height = a
};
Quark.DisplayObject.prototype.getHeight = function() {
    return this.height
};
Quark.DisplayObject.prototype.setVisible = function(a) {
    this.visible = a
};
Quark.DisplayObject.prototype.getVisible = function() {
    return this.visible
};
Quark.DisplayObject.prototype.setRotation = function(a) {
    this.rotation = a
};
Quark.DisplayObject.prototype.getRotation = function() {
    return this.rotation
};
Quark.DisplayObject.prototype.isVisible = function() {
    return this.visible
};
Quark.DisplayObject.prototype.setOpacity = function(a) {
    this.alpha = a
};
Quark.DisplayObject.prototype.getOpacity = function() {
    return this.alpha
};
Quark.DisplayObject.prototype.isEnable = Quark.DisplayObject.prototype.isEnabled = function() {
    return this.eventEnabled
};
Quark.DisplayObject.prototype.enable = function() {
    this.setEnabled ? this.setEnabled(true) : this.eventEnabled = true
};
Quark.DisplayObject.prototype.disable = function() {
    this.setEnabled ? this.setEnabled(false) : this.eventEnabled = false
};
Quark.DisplayObject.prototype.setScale = function(a, b) {
    this.scaleX = a;
    this.scaleY = b != void 0 ? b : a
};
Quark.DisplayObject.prototype.getScale = function() {
    return {x: this.scaleX,y: this.scaleY}
};
Quark.DisplayObject.prototype.setScaleX = function(a) {
    this.scaleX = a
};
Quark.DisplayObject.prototype.getScaleX = function() {
    return this.scaleX
};
Quark.DisplayObject.prototype.setScaleY = function(a) {
    this.scaleY = a
};
Quark.DisplayObject.prototype.getScaleY = function() {
    return this.scaleY
};
Quark.DisplayObject.prototype.setSkewX = function(a) {
    this.skewX = a
};
Quark.DisplayObject.prototype.getSkewX = function() {
    return this.skewX
};
Quark.DisplayObject.prototype.setSkewY = function(a) {
    this.skewY = a
};
Quark.DisplayObject.prototype.getSkewY = function() {
    return this.skewY
};
Quark.DisplayObject.prototype.setOrigin = function(a, b) {
    this.regX = a;
    this.regY = b
};
Quark.DisplayObject.prototype.getOrigin = function() {
    return {x: this.regX,y: this.regY}
};
Quark.DisplayObject.prototype.getBound = function() {
    return this.getBounds()
};
Quark.DisplayObject.prototype.getGlobalLeft = function() {
    return this.getBounds().x + Quark.STAGE.stageX
};
Quark.DisplayObject.prototype.getGlobalTop = function() {
    return this.getBounds().y + Quark.STAGE.stageY
};
Quark.DisplayObject.prototype.getGlobalLeftInStage = function() {
    return this.getBounds().x
};
Quark.DisplayObject.prototype.getGlobalTopInStage = function() {
    return this.getBounds().y
};
Quark.DisplayObject.prototype.getChildren = function() {
    return this.children
};
Quark.DisplayObject.prototype.removeEventListener = function(a, b) {
    for (var c = this._NewEventMap.length, d, e = 0; e < c; e++) {
        d = this._NewEventMap[e];
        if (a == d.type && b == d.listener) {
            for (var c = d.newTypes.length, f, g = 0; g < c; g++) {
                f = d.newTypes[g];
                Quark.DisplayObject.superClass.removeEventListener.apply(this, [f, d.newListener])
            }
            this._NewEventMap.splice(e, 1);
            break
        }
    }
};
Quark.OBJECT_OFFSET = 3;
Quark.EVENT_OFFSET = 6;
Quark.DisplayObject.prototype.addEventListener = function(a, b, c) {
    c && (b = U.delegate(b, c));
    c = [];
    switch (a) {
        case G.EVENT.CHOOSE:
        case G.EVENT.DOUBLE_CHOOSE:
            c.push(G.EVENT.DOWN);
            break;
        case G.EVENT.DRAG:
        case G.EVENT.DOUBLE_DRAG:
            c.push(G.EVENT.DOWN);
            c.push(G.EVENT.MOVE);
            c.push(G.EVENT.UP);
            break;
        case G.EVENT.DRAG_END:
        case G.EVENT.DOUBLE_DRAG_END:
            c.push(G.EVENT.DOWN);
            c.push(G.EVENT.MOVE);
            c.push(G.EVENT.UP);
            break;
        case G.EVENT.CLICK:
            c.push(G.EVENT.DOWN);
            c.push(G.EVENT.MOVE);
            c.push(G.EVENT.UP);
            break;
        default:
            c.push(a)
    }
    if (!this.eventParas)
        this.eventParas = 
        [];
    var d = this.eventParas.length;
    this.eventParas[d] = {isDown: false,isDrag: false};
    for (var e = function(c) {
        c._stopPropagation = false;
        c.stopPropagation = function() {
            this._stopPropagation = true
        };
        c.domEvent = c;
        c.src = this;
        var e = c.touches && c.touches[1];
        if (a == G.EVENT.CHOOSE || a == G.EVENT.DRAG || a == G.EVENT.DRAG_END || a == G.EVENT.DOUBLE_CHOOSE || a == G.EVENT.DOUBLE_DRAG || a == G.EVENT.DOUBLE_DRAG_END || a == G.EVENT.CLICK)
            switch (c.type) {
                case G.EVENT.DOWN:
                    this.eventParas[d].isDrag = false;
                    this.eventParas[d].isDown = true;
                    if (a == G.EVENT.CLICK) {
                        this.targetLeft = 
                        this.getGlobalLeft();
                        this.targetTop = this.getGlobalTop();
                        this.cancelClick = false
                    }
                    if (e) {
                        this.twoTouching = 2;
                        a == G.EVENT.DOUBLE_CHOOSE && b && b.apply(this, [c, this])
                    } else {
                        this.twoTouching = -1;
                        a == G.EVENT.CHOOSE && b && b.apply(this, [c, this])
                    }
                    this.eventX = c.eventX;
                    this.eventY = c.eventY;
                    break;
                case G.EVENT.MOVE:
                    if (this.twoTouching > 0)
                        a == G.EVENT.DOUBLE_DRAG && b && b.apply(this, [c, this]);
                    else if (this.eventParas[d].isDown) {
                        this.eventParas[d].isDrag = true;
                        if (a == G.EVENT.DRAG)
                            Math.abs(this.eventX - c.eventX) > Quark.EVENT_OFFSET || Math.abs(this.eventY - 
                            c.eventY) > Quark.EVENT_OFFSET ? b && b.apply(this, [c, this]) : this.eventParas[d].isDrag = false;
                        if (a == G.EVENT.CLICK && (Math.abs(this.getGlobalLeft() - this.targetLeft) > Quark.OBJECT_OFFSET || Math.abs(this.getGlobalTop() - this.targetTop) > Quark.OBJECT_OFFSET))
                            this.cancelClick = true
                    }
                    break;
                case G.EVENT.UP:
                    this.twoTouching--;
                    this.eventParas[d].isDrag && (this.twoTouching == 0 ? a == G.EVENT.DOUBLE_DRAG_END && b && b.apply(this, [c, this]) : this.twoTouching <= -1 && a == G.EVENT.DRAG_END && b && b.apply(this, [c, this]));
                    this.eventParas[d].isDown && 
                    a == G.EVENT.CLICK && (this.cancelClick || (this.getObjectUnderPoint && this.getObjectUnderPoint(c.eventX, c.eventY) || this.hitTestPoint(c.eventX, c.eventY) >= 0) && b && b.apply(this, [c, this]));
                    this.eventParas[d].isDown = false;
                    this.eventParas[d].isDrag = false
            }
        else
            b && b.apply(this, [c, this])
    }, f = 0; f < c.length; f++)
        Quark.DisplayObject.superClass.addEventListener.apply(this, [c[f], e]);
    this._NewEventMap.push({type: a,listener: b,newTypes: c,newListener: e})
};
Quark.DisplayObject.prototype.to = function(a, b) {
    if (a.scale != void 0) {
        a.scaleX = a.scale;
        a.scaleY = a.scale
    }
    a.opacity != void 0 && (a.alpha = a.opacity);
    var c = null, d = {};
    if (b) {
        var e = b.onStart;
        e && (d.onStart = function(b) {
            e(b.target)
        });
        var f = b.onEnd;
        f && (d.onComplete = function(b) {
            f(b.target)
        });
        b.time != void 0 && (d.time = b.time * 1E3);
        b.delay != void 0 && (d.delay = b.delay * 1E3);
        b.loop != void 0 && (d.loop = b.loop);
        c = b.effect
    } else {
        (e = a.onStart) && (d.onStart = function(b) {
            e(b.target)
        });
        (f = a.onEnd) && (d.onComplete = function(b) {
            f(b.target)
        });
        a.time != void 0 && (d.time = a.time * 1E3);
        a.delay != void 0 && (d.delay = a.delay * 1E3);
        a.loop != void 0 && (d.loop = a.loop);
        c = a.effect
    }
    if (c) {
        if (c == "ease" || c.endsWith("-ease"))
            c = c + "-in-out";
        d.ease = c.indexOf("linear") >= 0 ? Quark.Easing.Linear.EaseNone : c.indexOf("quadratic") >= 0 ? Quark.Easing.Quadratic : c.indexOf("cubic") >= 0 ? Quark.Easing.Cubic : c.indexOf("quartic") >= 0 ? Quark.Easing.Quartic : c.indexOf("quintic") >= 0 ? Quark.Easing.Quintic : c.indexOf("sinusoidal") >= 0 ? Quark.Easing.Sinusoidal : c.indexOf("exponential") >= 0 ? Quark.Easing.Exponential : 
        c.indexOf("circular") >= 0 ? Quark.Easing.Circular : c.indexOf("elastic") >= 0 ? Quark.Easing.Elastic : c.indexOf("back") >= 0 ? Quark.Easing.Back : c.indexOf("bounce") >= 0 ? Quark.Easing.Bounce : Quark.Easing.Quadratic;
        if (c.indexOf("-in-out") >= 0)
            d.ease = d.ease.EaseInOut;
        else if (c.indexOf("-in") >= 0)
            d.ease = d.ease.EaseIn;
        else if (c.indexOf("-out") >= 0)
            d.ease = d.ease.EaseOut
    }
    this.clearTo();
    this.tween = Quark.Tween.to(this, a, d)
};
Quark.DisplayObject.prototype.clearTo = function() {
    this.tween && this.tween.stop()
};
Quark.DisplayObject.prototype.pauseTo = function() {
    this.tween && this.tween.pause()
};
Quark.DisplayObject.prototype.resumeTo = function() {
    this.tween && this.tween.resume()
};
Quark.DisplayObject.prototype.destroy = function() {
    if (this.children)
        for (var a = 0; a < this.children.length; a++) {
            var b = this.children[a];
            b.destroy && b.destroy()
        }
};
Quark.DisplayObject.prototype.setBg = function(a, b) {
    this.showBackground = true;
    if (b == void 0)
        this.backgroundStyle = a;
    else {
        var c = parseInt(a.substring(1), 16);
        this.backgroundStyle = "rgba(" + (c >> 16 & 255) + "," + (c >> 8 & 255) + "," + (c & 255) + "," + b + ")"
    }
};
Quark.DisplayObject.prototype.setRGBA = function(a, b, c, d) {
    this.showBackground = true;
    this.backgroundStyle = "rgba(" + a + "," + b + "," + c + "," + d + ")"
};
Quark.DisplayObject.prototype.setBoxShadow = function(a, b, c, d, e) {
    this.shadowOffsetX = a;
    this.shadowOffsetY = b;
    this.shadowBlur = c;
    this.shadowColor = d;
    this.fixOpacity = e;
    this.showBoxShadow = true
};
Quark.DisplayObject.prototype.setBorder = function(a, b) {
    a == void 0 && (a = "green");
    b == void 0 && (b = 1);
    this.borderStyle = a;
    this.borderWidth = b
};
Quark.DisplayObject.prototype.setTopBorder = function(a, b) {
    a == void 0 && (a = "green");
    b == void 0 && (b = 1);
    this.topBorderStyle = a;
    this.topBorderWidth = b
};
Quark.DisplayObject.prototype.setBottomBorder = function(a, b) {
    a == void 0 && (a = "green");
    b == void 0 && (b = 1);
    this.bottomBorderStyle = a;
    this.bottomBorderWidth = b
};
Quark.DisplayObject.prototype.setLeftBorder = function(a, b) {
    a == void 0 && (a = "green");
    b == void 0 && (b = 1);
    this.leftBorderStyle = a;
    this.leftBorderWidth = b
};
Quark.DisplayObject.prototype.setRightBorder = function(a, b) {
    a == void 0 && (a = "green");
    b == void 0 && (b = 1);
    this.rightBorderStyle = a;
    this.rightBorderWidth = b
};
Quark.DisplayObject.prototype.setBorderRadius = function(a) {
    this.borderRadius = a
};
Quark.DisplayObject.prototype.setOverflowHidden = function(a) {
    this.overflowHidden = a
};
Quark.DisplayObject.prototype.setPosByName = function(a, b, c) {
    b = G.getPos(a, b);
    a = c ? G.getPos(a, c) : null;
    this.setPos(b, a)
};
Quark.DisplayObject.prototype.setPos = function(a, b) {
    if (a) {
        !a[0] && (a[0] = 0);
        !a[1] && (a[1] = 0);
        if (b) {
            !b[0] && (b[0] = 0);
            !b[1] && (b[1] = 0);
            this.setX(a[0] - b[0]);
            this.setY(a[1] - b[1])
        } else {
            this.setX(a[0]);
            this.setY(a[1])
        }
    }
};
Quark.DisplayObject.prototype.getPos = function() {
    return [this.getX(), this.getY()]
};
Quark.DisplayObject.prototype.setBottom = function(a) {
    this.parent || U.error("[DisplayObject][setBottom] Please call addChild method first");
    this.setY(this.parent.getHeight() - this.getHeight() - a)
};
Quark.DisplayObject.prototype.setRight = function(a) {
    this.parent || U.error("[DisplayObject][setRight] Please call addChild method first");
    this.setX(this.parent.getWidth() - this.getWidth() - a)
};
Quark.DisplayObject.prototype._setBoxShadow = function(a) {
    a.shadowColor = this.shadowColor;
    a.shadowOffsetX = this.shadowOffsetX;
    a.shadowOffsetY = this.shadowOffsetY;
    a.shadowBlur = this.shadowBlur
};
Quark.DisplayObject.prototype._drawBackgroundOrBorder = function(a) {
    if (this.borderWidth || this.showBackground) {
        this._drawPath(a);
        if (this.showBackground) {
            a.fillStyle = this.backgroundStyle;
            a.fill()
        }
        if (this.borderWidth) {
            a.strokeStyle = this.borderStyle;
            a.lineWidth = this.borderWidth;
            a.stroke()
        }
    }
};
Quark.DisplayObject.prototype._drawPath = function(a) {
    a.beginPath();
    this.borderRadius ? Quark.createRadiusPath(0, 0, this.width, this.height, this.borderRadius, a) : a.rect(0, 0, this.width, this.height);
    a.closePath()
};
Quark.DisplayObject.prototype._drawBoxShadow = function(a) {
    if (this.showBoxShadow) {
        this._drawPath(a);
        a.save();
        this._setBoxShadow(a);
        a.fill();
        a.restore()
    }
};
Quark.DisplayObject.prototype._drawTopBorder = function(a) {
    var b, c, d;
    if (this.topBorderWidth) {
        a.beginPath();
        a.strokeStyle = this.topBorderStyle;
        a.lineWidth = this.topBorderWidth;
        if (this.borderRadius > 0) {
            c = this.borderRadius;
            d = 0;
            b = this.width - this.borderRadius
        } else {
            d = c = 0;
            b = this.width
        }
        a.moveTo(c, d);
        a.lineTo(b, 0);
        a.stroke();
        a.closePath()
    }
};
Quark.DisplayObject.prototype._drawBottomBorder = function(a) {
    var b, c, d, e;
    if (this.bottomBorderWidth) {
        a.beginPath();
        a.strokeStyle = this.bottomBorderStyle;
        a.lineWidth = this.bottomBorderWidth;
        if (this.borderRadius > 0) {
            d = this.borderRadius;
            e = this.height;
            b = this.width - this.borderRadius
        } else {
            d = 0;
            e = this.height;
            b = this.width
        }
        c = this.height;
        a.moveTo(d, e);
        a.lineTo(b, c);
        a.stroke();
        a.closePath()
    }
};
Quark.DisplayObject.prototype._drawLeftBorder = function(a) {
    var b, c, d, e;
    if (this.leftBorderWidth) {
        a.beginPath();
        a.strokeStyle = this.leftBorderStyle;
        a.lineWidth = this.leftBorderWidth;
        if (this.borderRadius > 0) {
            d = 0;
            e = this.borderRadius;
            b = 0;
            c = this.height - this.borderRadius
        } else {
            b = e = d = 0;
            c = this.height
        }
        a.moveTo(d, e);
        a.lineTo(b, c);
        a.stroke();
        a.closePath()
    }
};
Quark.DisplayObject.prototype._drawRightBorder = function(a) {
    var b, c, d, e;
    if (this.rightBorderWidth) {
        a.beginPath();
        a.strokeStyle = this.rightBorderStyle;
        a.lineWidth = this.rightBorderWidth;
        if (this.borderRadius > 0) {
            d = this.width;
            e = this.borderRadius;
            b = this.width;
            c = this.height - this.borderRadius
        } else {
            d = this.width;
            e = 0;
            b = this.width;
            c = this.height
        }
        a.moveTo(d, e);
        a.lineTo(b, c);
        a.stroke();
        a.closePath()
    }
};
Quark.DisplayObject.prototype.filter = function(a, b) {
    var c = this.getDrawable();
    if (c instanceof HTMLImageElement)
        switch (a) {
            case "gray":
                b || (b = {});
                b.bright = b.bright ? b.bright / 128 : 1;
                c = G.Filter.toGray(c, this.rectX || 0, this.rectY || 0, this.rectWidth || this.width, this.rectHeight || this.height, b.bright);
                this.rectY = this.rectX = 0;
                this.setDrawable(c);
                break;
            case "color-levels":
                c = G.Filter.toColorLevel(c, this.rectX || 0, this.rectY || 0, this.rectWidth || this.width, this.rectHeight || this.height, b);
                this.rectY = this.rectX = 0;
                this.setDrawable(c)
        }
};
Quark.DisplayObject.prototype._renderGradient = function(a) {
    if (this._gradientBgType == 1) {
        for (var b = a.createLinearGradient(this._gradientBgX0, this._gradientBgY0, this._gradientBgX1, this._gradientBgY1), c = 0; c < this._gradientBgColorStop.length; c++)
            b.addColorStop(this._gradientBgColorStop[c][0], this._gradientBgColorStop[c][1]);
        a.fillStyle = b;
        a.fillRect(0, 0, this.width, this.height)
    }
};
Quark.DisplayObject.prototype.setLinearGradient = function(a, b, c, d, e) {
    this._gradientBgType = 1;
    this._gradientBgX0 = a;
    this._gradientBgY0 = b;
    this._gradientBgX1 = c;
    this._gradientBgY1 = d;
    this._gradientBgColorStop = e
};
Quark.DisplayObject.prototype.setRadialGradient = function() {
};
uc = window.uc || {};
uc.h5g = window.uc.h5g || {};
Quark.STAGE = null;
Quark.STAGE_WIDTH = 0;
Quark.STAGE_HEIGHT = 0;
Quark.PARENT_SCALE_X = 1;
Quark.PARENT_SCALE_Y = 1;
Quark.FPS = 25;
Quark._fpsTimer = null;
Quark.OPEN_DOMELEMENT_COMPATIBLE = !1;
Quark.init = function(a) {
    a.parent || U.error("[G.init] parent is null");
    a.width || U.error("[G.init] width is null");
    a.height || U.error("[G.init] height is null");
    if (!a.fps)
        a.fps = Quark.FPS;
    if (!a.quarkMode)
        a.quarkMode = "canvas";
    if (!a.style)
        a.style = {};
    Quark.STAGE_WIDTH = a.width;
    Quark.STAGE_HEIGHT = a.height;
    var b = a.parent, c = null;
    if (a.quarkMode == "dom")
        c = new Quark.DOMContext({canvas: b});
    else {
        if (b instanceof HTMLCanvasElement) {
            c = b;
            U.mixin(c.style, a.style)
        } else {
            c = Quark.createDOM("canvas", {width: Quark.STAGE_WIDTH,
                height: Quark.STAGE_HEIGHT,style: a.style});
            b.appendChild(c)
        }
        c = new Quark.CanvasContext({canvas: c})
    }
    b = new Quark.Stage({context: c,width: a.width,height: a.height,update: a.onEnterFrame});
    c = Quark.supportTouch ? ["touchstart", "touchmove", "touchend"] : ["mousedown", "mousemove", "mouseup", "mouseout"];
    (new Quark.EventManager).registerStage(b, c, true, false);
    Quark.STAGE = b;
    Quark.setFPS(a.fps);
    Quark._generateParentScale();
    return b
};
Quark.setFPS = function() {
    if (Quark._fpsTimer) {
        Quark._fpsTimer.stop();
        Quark._fpsTimer.removeListener(Quark.STAGE)
    }
    var a = new Quark.Timer;
    a.addListener(Quark.STAGE);
    a.addListener(Quark.Tween);
    a.start();
    Quark._fpsTimer = a
};
Quark.stopFPS = function() {
    if (Quark._fpsTimer) {
        Quark._fpsTimer.stop();
        Quark._fpsTimer.removeListener(Quark.STAGE);
        Quark._fpsTimer = null
    }
};
Quark.destroy = function() {
    Quark.stopFPS()
};
Quark.getParentScale = function() {
    return {x: Quark.PARENT_SCALE_X,y: Quark.PARENT_SCALE_Y}
};
Quark._generateParentScale = function() {
    var a = {x: 1,y: 1};
    if (!G.IS_AC) {
        var b = Quark.STAGE.context.canvas.style.cssText, c = b.indexOf("scale(") + 6;
        if (c > 6) {
            var d = b.indexOf(",", c), e = b.indexOf(")", c);
            if (d > e || d == -1) {
                d = e;
                if (d > c) {
                    b = b.substring(c, d);
                    a.x = b;
                    a.y = b
                }
            } else if (d > c) {
                c = b.substring(c, d);
                b = b.substring(d + 1, e);
                a.x = c;
                a.y = b
            }
        }
    }
    Quark.PARENT_SCALE_X = a.x;
    Quark.PARENT_SCALE_Y = a.y;
    return a
};
uc.h5g.DomAnimation = window.uc.h5g.DomAnimation || {};
uc.h5g.DomAnimation.LOOP = 0;
uc.h5g.DomAnimation.END_STOP = 1;
uc.h5g.DomAnimation.END_HIDE = 2;
uc.h5g.DomAnimation.END_DELETE = 3;
uc.h5g.EventManager = uc.h5g.EventManager || {};
uc.h5g.EventBase = uc.h5g.EventBase || function(a) {
    this.type = a
};
uc.h5g.EventManager.events = uc.h5g.EventManager.events || {Click: new uc.h5g.EventBase("click"),Drag: new uc.h5g.EventBase("drag"),DblDrag: new uc.h5g.EventBase("dbldrag"),DragEnd: new uc.h5g.EventBase("dragend"),DblDragEnd: new uc.h5g.EventBase("dbldragend"),Choose: new uc.h5g.EventBase("choose"),DblChoose: new uc.h5g.EventBase("dblchoose"),Move: new uc.h5g.EventBase("move"),DblClick: new uc.h5g.EventBase("dblclick")};
uc.h5g.Events = uc.h5g.EventManager.events;
Quark.EventBase = uc.h5g.EventBase;
U.mixin(Quark.EventManager, uc.h5g.EventManager);
(function() {
    var a = Quark.DisplayObjectContainer = function(b) {
        this.eventChildren = true;
        this.autoSize = false;
        this.children = [];
        b = b || {};
        a.superClass.constructor.call(this, b);
        this.id = b.id || Quark.UIDUtil.createUID("DisplayObjectContainer");
        this.setDrawable(b.drawable || b.image || null);
        if (b.children)
            for (var c = 0; c < b.children.length; c++)
                this.addChild(b.children[c])
    };
    Quark.inherit(a, Quark.DisplayObject);
    a.prototype.addChildAt = function(b, a) {
        if (a < 0)
            a = 0;
        else if (a > this.children.length)
            a = this.children.length;
        var d = this.getChildIndex(b);
        if (d != -1) {
            if (d == a)
                return this;
            this.children.splice(d, 1)
        } else
            b.parent && b.parent.removeChild(b);
        this.children.splice(a, 0, b);
        b.parent = this;
        this.autoSize && this.updateSize();
        return this
    };
    a.prototype.updateSize = function() {
        for (var b, a, d = 0; d < this.children.length; d++) {
            b = this.children[d];
            a = new Quark.Rectangle(0, 0, this.rectWidth || this.width, this.rectHeight || this.height);
            b = new Quark.Rectangle(b.x, b.y, b.rectWidth || b.width, b.rectHeight || b.height);
            a.union(b);
            this.width = a.width;
            this.height = a.height
        }
    };
    a.prototype.addChild = 
    function(b) {
        for (var a = this.children.length, d = 0; d < arguments.length; d++) {
            b = arguments[d];
            this.addChildAt(b, a + d)
        }
        return this
    };
    a.prototype.removeChildAt = function(b) {
        if (b < 0 || b >= this.children.length)
            return false;
        var a = this.children[b];
        if (a != null) {
            var d = this.getStage();
            d != null && d.context.remove(a);
            a.parent = null
        }
        this.children.splice(b, 1);
        return true
    };
    a.prototype.removeChild = function(b) {
        return this.removeChildAt(this.children.indexOf(b))
    };
    a.prototype.removeAllChildren = function() {
        for (; this.children.length > 0; )
            this.removeChildAt(0)
    };
    a.prototype.deleteChildAt = function(b) {
        if (b < 0 || b >= this.children.length)
            return false;
        var a = this.children[b];
        if (a != null) {
            a.destroy();
            var d = this.getStage();
            d != null && d.context.remove(a);
            a.parent = null
        }
        this.children.splice(b, 1);
        return true
    };
    a.prototype.deleteChild = function(b) {
        return this.deleteChildAt(this.children.indexOf(b))
    };
    a.prototype.deleteAllChildren = function() {
        for (; this.children.length > 0; )
            this.deleteChildAt(0)
    };
    a.prototype.getChildAt = function(b) {
        return b < 0 || b >= this.children.length ? null : this.children[b]
    };
    a.prototype.getChildIndex = function(b) {
        return this.children.indexOf(b)
    };
    a.prototype.setChildIndex = function(b, a) {
        if (b.parent == this) {
            var d = this.children.indexOf(b);
            if (a != d) {
                this.children.splice(d, 1);
                this.children.splice(a, 0, b)
            }
        }
    };
    a.prototype.swapChildren = function(b, a) {
        var d = this.getChildIndex(b), e = this.getChildIndex(a);
        this.children[d] = a;
        this.children[e] = b
    };
    a.prototype.swapChildrenAt = function(b, a) {
        var d = this.getChildAt(b), e = this.getChildAt(a);
        this.children[b] = e;
        this.children[a] = d
    };
    a.prototype.getChildById = 
    function(b) {
        for (var a = 0, d = this.children.length; a < d; a++) {
            var e = this.children[a];
            if (e.id == b)
                return e
        }
        return null
    };
    a.prototype.removeChildById = function(b) {
        for (var a = 0, d = this.children.length; a < d; a++)
            if (this.children[a].id == b)
                return this.removeChildAt(a);
        return null
    };
    a.prototype.sortChildren = function(b) {
        if (typeof b == "string")
            var a = b, b = function(b, e) {
                return e[a] - b[a]
            };
        this.children.sort(b)
    };
    a.prototype.contains = function(b) {
        return this.getChildIndex(b) != -1
    };
    a.prototype.getNumChildren = function() {
        return this.children.length
    };
    a.prototype._update = function(b, a) {
        var d = true;
        this.update != null && (d = this.update(b, a));
        if (d !== false)
            for (var d = this.children.slice(0), e = 0, f = d.length; e < f; e++) {
                var g = d[e];
                g._depth = e + 1;
                g.visible && g.alpha > 0 && g._update(b, a)
            }
    };
    a.prototype.render = function(b) {
        Quark.DisplayObjectContainer.superClass.render.call(this, b);
        this.doLayout();
        for (var a = 0, d = this.children.length; a < d; a++)
            this.children[a]._render(b)
    };
    a.prototype.getObjectUnderPoint = function(b, a, d, e) {
        if (e)
            var f = [];
        for (var g = this.children.length - 1; g >= 0; g--) {
            var h = 
            this.children[g];
            if (!(h == null || !h.eventEnabled && h.children == void 0 || !h.visible || h.alpha <= 0))
                if (h.children != void 0 && h.eventChildren && h.getNumChildren() > 0) {
                    var i = h.getObjectUnderPoint(b, a, d, e);
                    if (i)
                        if (e)
                            i.length > 0 && (f = f.concat(i));
                        else
                            return i;
                    else if (h.hitTestPoint(b, a, d) >= 0)
                        if (e)
                            f.push(h);
                        else
                            return h
                } else if (h.hitTestPoint(b, a, d) >= 0)
                    if (e)
                        f.push(h);
                    else
                        return h
        }
        return e ? f : null
    }
})();
Quark.DisplayObjectContainer.prototype.setLayout = function(a) {
    if (typeof a == "string")
        this.layout = {type: a};
    else if (typeof a == "object")
        this.layout = a
};
Quark.DisplayObjectContainer.prototype.getLayout = function() {
    return this.layout
};
Quark.DisplayObjectContainer.prototype.doLayout = function() {
    if (this.layout != null)
        switch (this.layout.type) {
            case "horizontal":
                this._horizontalLayout();
                break;
            case "":
                break;
            default:
                U.warn("未实现的布局方法")
        }
};
Quark.DisplayObjectContainer.prototype._horizontalLayout = function() {
    for (var a = 0, b = 0, c = true, d = this.layout.hGap || 0, e = this.layout.vGap || 0, f = 0, g = [], h = 0; h < this.children.length; h++) {
        var i = this.children[h];
        if (i.getVisible()) {
            if (this.getWidth() == 0 || this.getWidth() < a + (c ? 0 : d) + i.getWidth()) {
                this._horizontalAlign(g, a);
                c = true;
                a = 0;
                b = b + (Math.max(f, i.getHeight()) + e);
                f = i.getHeight();
                g.splice(0)
            }
            g.push(i);
            if (c) {
                c = false;
                i.setX(a);
                a = a + i.getWidth()
            } else {
                i.setX(a + d);
                a = a + (i.getWidth() + d)
            }
            i.setY(b);
            f = Math.max(f, i.getHeight())
        }
    }
    this._horizontalAlign(g, 
    a)
};
Quark.DisplayObjectContainer.prototype._horizontalAlign = function(a, b) {
    var c = 0;
    switch (this.layout.hAlign) {
        case "center":
            c = Math.max((this.getWidth() - b) / 2, 0);
            break;
        case "right":
            c = Math.max(this.getWidth() - b, 0)
    }
    this._movePosition(a, c, 0)
};
Quark.DisplayObjectContainer.prototype._movePosition = function(a, b, c) {
    for (var d = 0; d < a.length; d++) {
        var e = a[d];
        e.setX(e.getX() + b);
        e.setY(e.getY() + c)
    }
};
Quark.DisplayObjectContainer.prototype.setNumber = function(a, b, c) {
    this.deleteAllChildren();
    c = c || {};
    if (a == null || a == void 0)
        a = "0";
    var d = c.offsetX, e = c.spacing;
    d == void 0 && (d = 0);
    e == void 0 && (e = 0);
    b == void 0 && U.error("[DisplayObjectContainer][setNumber] slicePreName is undefined");
    a = a.toString();
    a.indexOf(",") >= 0 && (a = a.split(","));
    for (var f = 0, g = 0; g < a.length; g++) {
        var h = a[g];
        if (h != " ") {
            h = G.Bitmap.create({slice: G.getSlice(b + h)});
            this.addChild(h);
            h.setX(f + g * e + d);
            h.setY(0);
            f = f + h.getWidth()
        }
    }
    if (c.align) {
        f = f + (a.length - 
        1) * e;
        if (c.align == "right")
            for (g = 0; g < this.children.length; g++)
                this.children[g].setX(this.children[g].getX() - f);
        else if (c.align == "center") {
            f = f / 2;
            for (g = 0; g < this.children.length; g++)
                this.children[g].setX(this.children[g].getX() - f)
        }
    }
};
(function() {
    var a = Quark.Graphics = function(b) {
        this.lineWidth = 1;
        this.strokeStyle = "0";
        this.lineAlpha = 1;
        this.lineJoin = this.lineCap = null;
        this.miterLimit = 10;
        this.hasFill = this.hasStroke = false;
        this.fillStyle = "0";
        this.fillAlpha = 1;
        b = b || {};
        a.superClass.constructor.call(this, b);
        this.id = Quark.UIDUtil.createUID("Graphics");
        this._actions = [];
        this._cache = null
    };
    Quark.inherit(a, Quark.DisplayObject);
    a.prototype.lineStyle = function(a, c, d, e, f, g) {
        this._addAction(["lineWidth", this.lineWidth = a || 1]);
        this._addAction(["strokeStyle", 
            this.strokeStyle = c || "0"]);
        this._addAction(["lineAlpha", this.lineAlpha = d || 1]);
        if (e != void 0)
            this._addAction(["lineCap", this.lineCap = e]);
        if (f != void 0)
            this._addAction(["lineJoin", this.lineJoin = f]);
        if (g != void 0)
            this._addAction(["miterLimit", this.miterLimit = g]);
        this.hasStroke = true;
        return this
    };
    a.prototype.beginFill = function(a, c) {
        this._addAction(["fillStyle", this.fillStyle = a]);
        this._addAction(["fillAlpha", this.fillAlpha = c || 1]);
        this.hasFill = true;
        return this
    };
    a.prototype.endFill = function() {
        this.hasStroke && 
        this._addAction(["stroke"]);
        this.hasFill && this._addAction(["fill"]);
        return this
    };
    a.prototype.beginLinearGradientFill = function(b, c, d, e, f, g) {
        b = a._getContext().createLinearGradient(b, c, d, e);
        c = 0;
        for (d = f.length; c < d; c++)
            b.addColorStop(g[c], f[c]);
        return this._addAction(["fillStyle", this.fillStyle = b])
    };
    a.prototype.beginRadialGradientFill = function(b, c, d, e, f, g, h, i) {
        b = a._getContext().createRadialGradient(b, c, d, e, f, g);
        c = 0;
        for (d = h.length; c < d; c++)
            b.addColorStop(i[c], h[c]);
        return this._addAction(["fillStyle", this.fillStyle = 
            b])
    };
    a.prototype.beginBitmapFill = function(b, c) {
        return this._addAction(["fillStyle", this.fillStyle = a._getContext().createPattern(b, c || "")])
    };
    a.prototype.beginPath = function() {
        return this._addAction(["beginPath"])
    };
    a.prototype.closePath = function() {
        return this._addAction(["closePath"])
    };
    a.prototype.drawRect = function(a, c, d, e) {
        return this._addAction(["rect", a, c, d, e])
    };
    a.prototype.drawRoundRectComplex = function(a, c, d, e, f, g, h, i) {
        this._addAction(["moveTo", a + f, c]);
        this._addAction(["lineTo", a + d - g, c]);
        this._addAction(["arc", 
            a + d - g, c + g, g, -Math.PI / 2, 0, false]);
        this._addAction(["lineTo", a + d, c + e - h]);
        this._addAction(["arc", a + d - h, c + e - h, h, 0, Math.PI / 2, false]);
        this._addAction(["lineTo", a + i, c + e]);
        this._addAction(["arc", a + i, c + e - i, i, Math.PI / 2, Math.PI, false]);
        this._addAction(["lineTo", a, c + f]);
        this._addAction(["arc", a + f, c + f, f, Math.PI, Math.PI * 3 / 2, false]);
        return this
    };
    a.prototype.drawRoundRect = function(a, c, d, e, f) {
        return this.drawRoundRectComplex(a, c, d, e, f, f, f, f)
    };
    a.prototype.drawCircle = function(a, c, d) {
        return this._addAction(["arc", a + 
            d, c + d, d, 0, Math.PI * 2, 0])
    };
    a.prototype.drawEllipse = function(a, c, d, e) {
        if (d == e)
            return this.drawCircle(a, c, d);
        var d = d / 2, e = e / 2, f = 0.5522847498307933 * d, g = 0.5522847498307933 * e, a = a + d, c = c + e;
        this._addAction(["moveTo", a + d, c]);
        this._addAction(["bezierCurveTo", a + d, c - g, a + f, c - e, a, c - e]);
        this._addAction(["bezierCurveTo", a - f, c - e, a - d, c - g, a - d, c]);
        this._addAction(["bezierCurveTo", a - d, c + g, a - f, c + e, a, c + e]);
        this._addAction(["bezierCurveTo", a + f, c + e, a + d, c + g, a + d, c]);
        return this
    };
    a.prototype.drawSVGPath = function(a) {
        a = a.split(/,| (?=[a-zA-Z])/);
        this._addAction(["beginPath"]);
        for (var c = 0, d = a.length; c < d; c++) {
            var e = a[c], f = e[0].toUpperCase(), e = e.substring(1).split(/,| /);
            e[0].length == 0 && e.shift();
            switch (f) {
                case "M":
                    this._addAction(["moveTo", e[0], e[1]]);
                    break;
                case "L":
                    this._addAction(["lineTo", e[0], e[1]]);
                    break;
                case "C":
                    this._addAction(["bezierCurveTo", e[0], e[1], e[2], e[3], e[4], e[5]]);
                    break;
                case "Z":
                    this._addAction(["closePath"])
            }
        }
        return this
    };
    a.prototype._draw = function(a) {
        a.beginPath();
        for (var c = 0, d = this._actions.length; c < d; c++) {
            var e = this._actions[c], 
            f = e[0], g = e.length > 1 ? e.slice(1) : null;
            typeof a[f] == "function" ? a[f].apply(a, g) : a[f] = e[1]
        }
    };
    a.prototype.getDrawable = function(a) {
        this.drawable == null && this.setDrawable(this.toImage());
        return this.drawable.get(this, a)
    };
    a.prototype.cache = function(a) {
        var c = Quark.createDOM("canvas", {width: this.width,height: this.height});
        if (G.IS_AC)
            c.visibility = "hidden";
        this._draw(c.getContext("2d"));
        this._cache = c;
        if (a)
            this._cache = this.toImage();
        return this._cache
    };
    a.prototype.uncache = function() {
        this._cache = null
    };
    a.prototype.toImage = 
    function(a) {
        var c = this._cache || this.cache(true);
        if (c instanceof HTMLImageElement)
            return c;
        var d = new Image;
        d.src = c.toDataURL(a || "image/png");
        d.width = this.width;
        d.height = this.height;
        return d
    };
    a.prototype.clear = function() {
        this._actions.length = 0;
        this._cache = null;
        this.lineWidth = 1;
        this.strokeStyle = "0";
        this.lineAlpha = 1;
        this.lineJoin = this.lineCap = null;
        this.miterLimit = 10;
        this.hasStroke = false;
        this.fillStyle = "0";
        this.fillAlpha = 1
    };
    a.prototype._addAction = function(a) {
        this._actions.push(a);
        return this
    };
    a._getContext = 
    function() {
        var a = Quark.createDOM("canvas").getContext("2d");
        this._getContext = function() {
            return a
        };
        return a
    }
})();
(function() {
    var a = Quark.Bitmap = function(b) {
        this.image = null;
        this.rectHeight = this.rectWidth = this.rectY = this.rectX = 0;
        b = b || {};
        a.superClass.constructor.call(this, b);
        this.id = b.id || Quark.UIDUtil.createUID("Bitmap");
        if (this.image) {
            this.setRect(b.rect || [0, 0, this.image.width, this.image.height]);
            this.setDrawable(this.image)
        }
        this._stateList.push("rectX", "rectY", "rectWidth", "rectHeight")
    };
    Quark.inherit(a, Quark.DisplayObject);
    a.prototype.setRect = function(a) {
        this.rectX = a[0];
        this.rectY = a[1];
        this.rectWidth = this.width = 
        a[2];
        this.rectHeight = this.height = a[3]
    };
    a.prototype.setImage = function(a, c) {
        if (a) {
            if (typeof a == "string") {
                this.image = new Image;
                this.image.onload = U.delegate(function() {
                    c == null && this.setRect([0, 0, this.image.width, this.image.height])
                }, this);
                this.image.src = a
            } else if (a instanceof HTMLImageElement) {
                this.image = a;
                c || (c = [0, 0, this.image.width, this.image.height])
            } else if (a.image instanceof HTMLImageElement) {
                this.image = a.image;
                this.setRect(a.rect)
            } else
                U.error("[ImageContainer][Error] Wrong para: urlOrHtmlElementOrSliceConfig = " + 
                a);
            c && this.setRect(c);
            this.setDrawable(this.image)
        } else
            this.setRect([0, 0, 0, 0])
    };
    a.prototype.render = function(a) {
        a.draw(this, this.rectX, this.rectY, this.rectWidth, this.rectHeight, 0, 0, this.width, this.height)
    }
})();
(function() {
    var a = Quark.MovieClip = function(b) {
        this.interval = 0;
        this.useFrames = this.paused = false;
        this.currentFrame = 0;
        this._frames = [];
        this._frameLabels = {};
        this._frameDisObj = null;
        this._displayedCount = 0;
        b = b || {};
        a.superClass.constructor.call(this, b);
        this.id = b.id || Quark.UIDUtil.createUID("MovieClip");
        b.frames && this.addFrame(b.frames)
    };
    Quark.inherit(a, Quark.Bitmap);
    a.prototype.addFrame = function(a) {
        var c = this._frames.length;
        if (a instanceof Array)
            for (var d = 0; d < a.length; d++)
                this.setFrame(a[d], c + d);
        else
            this.setFrame(a, 
            c);
        return this
    };
    a.prototype.setFrame = function(a, c) {
        c == void 0 || c > this._frames.length ? c = this._frames.length : c < 0 && (c = 0);
        this._frames[c] = a;
        a.label && (this._frameLabels[a.label] = a);
        if (a.interval == void 0)
            a.interval = this.interval;
        c == 0 && this.currentFrame == 0 && this.setRect(a.rect)
    };
    a.prototype.getFrame = function(a) {
        return typeof a == "number" ? this._frames[a] : this._frameLabels[a]
    };
    a.prototype.play = function() {
        this.paused = false
    };
    a.prototype.stop = function() {
        this.paused = true
    };
    a.prototype.gotoAndStop = function(a) {
        this.currentFrame = 
        this.getFrameIndex(a);
        this.figuredCurrentFrame = this.paused = true
    };
    a.prototype.gotoAndPlay = function(a) {
        this.currentFrame = this.getFrameIndex(a);
        this.paused = false;
        this.figuredCurrentFrame = true
    };
    a.prototype.getFrameIndex = function(a) {
        if (typeof a == "number")
            return a;
        for (var a = this._frameLabels[a], c = this._frames, d = 0; d < c.length; d++)
            if (a == c[d])
                return d;
        return -1
    };
    a.prototype.nextFrame = function(a) {
        if (this.figuredCurrentFrame) {
            this.figuredCurrentFrame = false;
            return this.currentFrame
        }
        var c = this._frames[this.currentFrame];
        if (c.interval > 0) {
            a = this._displayedCount + a;
            this._displayedCount = c.interval > a ? a : 0
        }
        if (c.jump >= 0 || typeof c.jump == "string")
            if (this._displayedCount == 0 || !c.interval)
                return this.currentFrame = this.getFrameIndex(c.jump);
        return c.interval > 0 && this._displayedCount > 0 ? this.currentFrame : this.currentFrame >= this._frames.length - 1 ? this.currentFrame = 0 : ++this.currentFrame
    };
    a.prototype.getNumFrames = function() {
        return this._frames.length
    };
    a.prototype._update = function(a, c) {
        var d = this._frames[this.currentFrame];
        if (d.stop)
            this.stop();
        else {
            if (this._mod == G.ANIMATION.MODE.END_STOP) {
                if (this.currentFrame == this.getTotalActions() - 1) {
                    this.stop();
                    return
                }
            } else if (this._mod == G.ANIMATION.MODE.END_DELETE) {
                if (this.currentFrame == this.getTotalActions() - 1) {
                    this.stop();
                    this.parent.removeChild(this);
                    return
                }
            } else if (this._mod == G.ANIMATION.MODE.END_HIDE && this.currentFrame == this.getTotalActions() - 1) {
                this.stop();
                this.visible = false;
                return
            }
            this.paused || (d = this._frames[this.nextFrame(this.useFrames ? 1 : a && a.deltaTime)]);
            this.setRect(d.rect);
            Quark.MovieClip.superClass._update.call(this, 
            a, c)
        }
    };
    a.prototype.render = function(a) {
        var c = this._frames[this.currentFrame].rect;
        a.draw(this, c[0], c[1], c[2], c[3], 0, 0, this.width, this.height)
    }
})();
Quark.MovieClip.prototype.setMode = function(a) {
    this._mod = a
};
Quark.MovieClip.prototype.getCurrentAction = function() {
    return this.currentFrame + 1
};
Quark.MovieClip.prototype.nextAction = Quark.MovieClip.prototype.nextFrame;
Quark.MovieClip.prototype.addAction = Quark.MovieClip.prototype.addFrame;
Quark.MovieClip.prototype.addActionAt = Quark.MovieClip.prototype.setFrame;
Quark.MovieClip.prototype.isStopped = function() {
    return this.paused
};
Quark.MovieClip.prototype.getAction = Quark.MovieClip.prototype.getFrame;
Quark.MovieClip.prototype.getTotalActions = Quark.MovieClip.prototype.getNumFrames;
Quark.MovieClip.prototype._render = function(a) {
    var b = this._frames[this.currentFrame];
    if (b.x != void 0) {
        var c, d, e, f, g, h, i, j, k;
        c = this.x;
        d = this.y;
        e = this.regX;
        f = this.regY;
        g = this.alpha;
        h = this.scaleX;
        i = this.scaleY;
        j = this.rotation;
        k = this.visible;
        this.x = this.x + b.x;
        this.y = this.y + b.y;
        this.regX = this.regX + b.regX;
        this.regY = this.regY + b.regY;
        this.alpha = this.alpha * b.alpha;
        this.scaleX = this.scaleX * b.scaleX;
        this.scaleY = this.scaleY * b.scaleY;
        this.rotation = this.rotation + b.rotation;
        this.visible = this.visible && b.visible;
        Quark.MovieClip.superClass._render.call(this, 
        a);
        this.x = c;
        this.y = d;
        this.regX = e;
        this.regY = f;
        this.alpha = g;
        this.scaleX = h;
        this.scaleY = i;
        this.rotation = j;
        this.visible = k
    } else
        Quark.MovieClip.superClass._render.call(this, a)
};
(function() {
    var a = Quark.Button = function(a) {
        this.state = Quark.Button.UP;
        this.enabled = true;
        a = a || {};
        Quark.Button.superClass.constructor.call(this, a);
        this.id = a.id || Quark.UIDUtil.createUID("Button");
        this.skin = G.Bitmap.create({slice: a.up});
        this.addChild(this.skin);
        this.eventChildren = false;
        if (a.useHandCursor === void 0)
            this.useHandCursor = true;
        a.up && this.setUpState(a.up);
        a.down && this.setDownState(a.down);
        a.disabled && this.setDisabledState(a.disabled);
        this.updateSize()
    };
    Quark.inherit(a, Quark.DisplayObjectContainer);
    a.UP = "up";
    a.DOWN = "down";
    a.DISABLED = "disabled";
    a.prototype.setUpState = function(a) {
        if (a)
            this.upState = a;
        else {
            this.setWidth(50);
            this.setHeight(20);
            this.setborder()
        }
        return this
    };
    a.prototype.setDownState = function(a) {
        this.downState = a;
        return this
    };
    a.prototype.setDisabledState = function(a) {
        this.disabledState = a;
        return this
    };
    a.prototype.setEnabled = function(a) {
        if (this.enabled == a)
            return this;
        (this.eventEnabled = this.enabled = a) ? this.skin.setImage(this.upState) : this.disabledState ? this.skin.setImage(this.disabledState) : 
        this.skin.setImage(this.upState);
        return this
    };
    a.prototype.changeState = function(b) {
        if (this.state != b) {
            this.state = b;
            switch (b) {
                case a.DOWN:
                    if (!this.enabled)
                        this.eventEnabled = this.enabled = true;
                    this.skin.setImage(this.downState);
                    break;
                case a.UP:
                    if (!this.enabled)
                        this.eventEnabled = this.enabled = true;
                    this.skin.setImage(this.upState);
                    break;
                case a.DISABLED:
                    this.setEnabled(false)
            }
            return this
        }
    };
    a.prototype.dispatchEvent = function(b) {
        if (this.enabled) {
            switch (b.type) {
                case "mousedown":
                case "touchstart":
                case "touchmove":
                    this.downState && 
                    this.changeState(a.DOWN);
                    break;
                case "mouseup":
                    this.overState || this.changeState(a.UP);
                    break;
                case "mouseout":
                case "touchout":
                case "touchend":
                    this.upState && this.changeState(a.UP)
            }
            a.superClass.dispatchEvent.call(this, b)
        }
    };
    a.prototype.setDrawable = function() {
        a.superClass.setDrawable.call(this, null)
    };
    a.prototype.setImgUp = function(a) {
        this.setUpState(a)
    };
    a.prototype.setImgDown = function(a) {
        this.setDownState(a)
    };
    a.prototype.setImgDisable = function(a) {
        this.setDisabledState(a)
    }
})();
(function() {
    var a = Quark.Stage = function(b) {
        this.stageY = this.stageX = 0;
        this.paused = false;
        this._eventTarget = null;
        b = b || {};
        a.superClass.constructor.call(this, b);
        this.id = b.id || Quark.UIDUtil.createUID("Stage");
        if (this.context == null)
            throw "Quark.Stage Error: context is required.";
        this.updatePosition()
    };
    Quark.inherit(a, Quark.DisplayObjectContainer);
    a.prototype.step = function(a) {
        if (!this.paused) {
            this._update(a);
            this._render(this.context)
        }
    };
    a.prototype._update = function(a) {
        for (var b = this.children.slice(0), e = 0, f = 
        b.length; e < f; e++) {
            var g = b[e];
            g._depth = e + 1;
            g._update(a, this.context)
        }
        this.update != null && this.update(a, this.context.context)
    };
    a.prototype._render = function(b) {
        b.clear != null && b.clear(0, 0, this.width, this.height);
        a.superClass._render.call(this, b)
    };
    a.prototype.dispatchEvent = function(a) {
        var a = U.mixin({}, a), b = a.pageX || a.clientX, e = a.pageY || a.clientY, b = (b - this.stageX) / this.scaleX / Quark.PARENT_SCALE_X, e = (e - this.stageY) / this.scaleY / Quark.PARENT_SCALE_Y, f = this.getObjectUnderPoint(b, e, true);
        if (this._eventTarget && 
        this._eventTarget != f && (a.type == G.EVENT.MOVE || a.type == G.EVENT.UP || a.type == G.EVENT.OUT)) {
            f = this._eventTarget;
            if (a.type == G.EVENT.OUT)
                a.type = G.EVENT.UP
        }
        var g;
        if (!a._stopPropagation) {
            g = [];
            for (var h = f; h && h.parent && h.parent != this; ) {
                g.push(h.parent);
                h = h.parent
            }
        }
        a.eventX = b;
        a.eventY = e;
        if (f != null && f.eventEnabled && a.type != G.EVENT.OUT) {
            a.eventTarget = this._eventTarget = f;
            f.dispatchEvent(a)
        }
        if (!a._stopPropagation)
            for (b = 0; b < g.length; b++) {
                g[b].dispatchEvent(a);
                if (a._stopPropagation)
                    break
            }
        Quark.Stage.superClass.dispatchEvent.call(this, 
        a)
    };
    a.prototype.updatePosition = function() {
        var a;
        a = G.IS_AC ? {left: 0,top: 0} : this.context.canvas.getBoundingClientRect();
        this.stageX = a.left;
        this.stageY = a.top
    };
    a.prototype.getStageX = function() {
        return this.stageX
    };
    a.prototype.getStageY = function() {
        return this.stageY
    };
    var b = function() {
        if (G.getStage) {
            var a = G.getStage();
            a && a.updatePosition()
        }
    };
    window.addEventListener("orientationchange", b, false);
    window.addEventListener("resize", b, false)
})();
(function() {
    var a = Quark.Text = function(a) {
        this.text = "";
        this.font = "12px arial";
        this.color = "#000";
        this.textAlign = "start";
        this.textBaseline = "middle";
        this.outlineColor = this.outline = null;
        this.maxWidth = 1E4;
        this.lineWidth = null;
        this.lineSpacing = 0;
        this.fontMetrics = null;
        this.ellipsis = false;
        this.paddingRight = this.paddingLeft = this.paddingBottom = this.paddingTop = 0;
        this.fontSize = 12;
        a = a || {};
        Quark.Text.superClass.constructor.call(this, a);
        this.id = Quark.UIDUtil.createUID("Text");
        if (this.fontMetrics == null)
            this.fontMetrics = 
            Quark.Text.getFontMetrics(this.font);
        this.hrefs = [];
        this._textOffsetXs = [];
        this._deleClick = U.delegate(function(a) {
            var b = this.hrefs.length;
            U.log("【enhanceText】连接数量:" + b);
            if (b > 0) {
                b = a.pageX - this.getGlobalLeft();
                a = a.pageY - this.getGlobalTop();
                U.log("【enhanceText】点击坐标 x:" + b + ", y:" + a);
                for (var e = 0; e < this.hrefs.length; e++) {
                    var f = this.hrefs[e];
                    U.log("【enhanceText】遍历 text:" + f.text);
                    for (var g = 0; g < f.hitRects.length; g++) {
                        var h = f.hitRects[g];
                        U.log("【enhanceText】遍历碰撞矩阵 j:" + g + ", rect:" + JSON.stringify(h));
                        var i = this._textOffsetXs[h.line] || 
                        0, j = this._textOffsetY || 0;
                        if (b >= h.x + i && b <= h.x + h.width + i && a >= h.y + j && a <= h.y + h.height + j) {
                            U.log("【enhanceText】碰撞了 text:" + f.text);
                            g = {};
                            g.type = G.EVENT.LINK;
                            g.linkText = f.text;
                            g.linkHref = f.href;
                            g.linkTarget = f.target;
                            g.linkAlt = f.alt;
                            this.dispatchEvent(g);
                            break
                        }
                    }
                }
            }
        }, this);
        this.addEventListener(G.EVENT.CLICK, this._deleClick);
        this._stateList.push("lineWidth", "lineHeight", "lineSpacing", "text", "font", "fontSize")
    };
    Quark.inherit(a, Quark.DisplayObject);
    a.prototype._updateStyle = function(a, c) {
        if (this.propChanged("lineWidth", 
        "lineHeight", "lineSpacing", "text", "font", "fontSize", "width", "height")) {
            this.hrefs.splice(0);
            var d = c || G.getStage().context;
            if (this.text && this.text.length != 0) {
                d.context.textAlign = "start";
                d.context.textBaseline = "top";
                if (isNaN(this.lineHeight))
                    if (isNaN(this.lineSpacing)) {
                        this.lineHeight = this.fontSize;
                        this.lineSpacing = 0
                    } else
                        this.lineHeight = this.fontSize + this.lineSpacing;
                else
                    this.lineSpacing = this.lineHeight - this.fontSize;
                this.lineWidth = (this.originWidth || 0) == 0 ? null : this.originWidth - this.paddingLeft - this.paddingRight;
                var e = this._analysisHtml(this.text, {font: this.font,color: this.color});
                this._charLineArray = this._toCharLineArray(d.context, e);
                this._lineNumber = this._charLineArray.lines.length;
                this.width = Math.max(this.originWidth || 0, this._charLineArray.maxWidth + this.paddingLeft + this.paddingRight);
                this.height = Math.max(this.originHeight || 0, this._lineNumber * this.lineHeight + this.paddingTop + this.paddingBottom)
            }
        }
    };
    a.prototype.update = function(a, c) {
        this._updateStyle(a, c);
        Quark.Text.superClass.update.apply(this, [a, c])
    };
    a.prototype._draw = 
    function(a) {
        if (this.text && this.text.length != 0) {
            this._setTextShadow(a);
            this._drawCharLineArray(a, this._charLineArray)
        }
    };
    a.prototype._toCharLineArray = function(a, c) {
        var d = 0, e = 0, f, g = {maxWidth: 0,lines: []}, h, i = this._createLine(), j = this._createGroup(), k, m, n = this.lineHeight, o = 0;
        if (this.ellipsis) {
            d = a.measureText("...").width;
            e = 0;
            f = false;
            h = "";
            for (k = 0; k < c.length; k++) {
                m = c[k];
                if (j.style == null) {
                    j.style = m.tag.style;
                    this.setContextStyle(a, j.style)
                }
                if (m.text != "" && m.text != "\n") {
                    e = e + a.measureText(m.text).width;
                    if (e > 
                    this.lineWidth) {
                        f = true;
                        j.chars = j.chars + "...";
                        break
                    } else
                        e + d > this.lineWidth ? h = h + m.text : j.chars = j.chars + m.text
                }
            }
            !f && (j.chars = j.chars + h);
            i.width = Math.min(this.lineWidth, e);
            i.groups.push(j);
            g.lines.push(i);
            g.maxWidth = this.lineWidth;
            return g
        }
        for (var p = 0; p < c.length; p++) {
            var l = c[p];
            if (l.text != "") {
                var q = l.text == "\n";
                f = q ? 0 : this._getMeasureTextWidth(a, l.tag.style, l.text);
                if (q || this.lineWidth != null && d + f > this.lineWidth) {
                    e = Math.max(e, d);
                    i.width = d;
                    i.groups.push(j);
                    g.lines.push(i);
                    d = 0;
                    i = this._createLine();
                    j = this._createGroup(h);
                    o++;
                    if (k != null) {
                        m = {line: o,x: d,y: o * n,width: 0,height: n};
                        k.hitRects.push(m)
                    }
                    if (q)
                        continue
                }
                if (l.tag.name == "a") {
                    if (k == null) {
                        m = {line: o,x: d,y: o * n,width: 0,height: n};
                        k = {hitRects: [m],text: "",href: l.tag.href,target: l.tag.target,alt: l.tag.alt};
                        this.hrefs.push(k)
                    }
                    k.text = k.text + l.text;
                    m.width = m.width + f
                } else
                    k = null;
                if (h == null || h != l.tag.style) {
                    if (h != null) {
                        i.groups.push(j);
                        j = this._createGroup(l.tag.style)
                    }
                    j.style = l.tag.style;
                    j.x = d;
                    j.chars = j.chars + l.text;
                    h = l.tag.style
                } else
                    j.chars = j.chars + l.text;
                d = d + f
            }
        }
        e = Math.max(e, 
        d);
        i.width = d;
        i.groups.push(j);
        g.lines.push(i);
        g.maxWidth = e;
        return g
    };
    a.prototype._getMeasureTextWidth = function(a, c, d) {
        this.setContextStyle(a, c);
        return a.measureText(d).width
    };
    a.prototype._createLine = function() {
        return {width: 0,groups: []}
    };
    a.prototype._createGroup = function(a) {
        return {x: 0,style: a,chars: ""}
    };
    a.prototype._createChar = function(a, c, d) {
        return {text: a || "",tag: c || {},attr: d || {}}
    };
    a.prototype._drawCharLineArray = function(a, c) {
        if (c != null) {
            var d = 0, e = 0;
            switch (this.verticalAlign) {
                case "middle":
                case "center":
                    e = 
                    (this.height - this.paddingTop - this.paddingBottom - this.lineHeight * this._lineNumber) / 2;
                    break;
                case "bottom":
                    e = this.height - this.paddingTop - this.paddingBottom - this.lineHeight * this._lineNumber;
                    break;
                default:
                    e = this.paddingTop
            }
            this._textOffsetY = e;
            switch (this.textBaseline) {
                case "middle":
                case "center":
                    e = e + this.lineSpacing / 2;
                    break;
                case "bottom":
                    e = e + this.lineSpacing
            }
            for (var f = 0; f < c.lines.length; f++) {
                var g = c.lines[f];
                switch (this.textAlign) {
                    case "center":
                        d = (this.width - this.paddingLeft - this.paddingRight - g.width >> 
                        1) + this.paddingLeft;
                        break;
                    case "right":
                    case "end":
                        d = this.width - this.paddingRight - g.width;
                        break;
                    default:
                        d = this.paddingLeft
                }
                this._textOffsetXs[f] = d;
                for (var h = 0; h < g.groups.length; h++) {
                    var i = g.groups[h];
                    i.chars != "" && this._drawChar(a, i.chars, i.style, i.x + d, f * this.lineHeight + e)
                }
            }
        }
    };
    a.prototype._analysisHtml = function(a, c) {
        var a = "" + (a == null ? "" : a), d = [], e = {style: {}}, f = [], g = 0, h = function() {
            var a = {};
            if (f.length > 0) {
                var b = f[f.length - 1].style, c;
                for (c in b)
                    b.hasOwnProperty(c) && !a.hasOwnProperty(c) && (a[c] = b[c])
            }
            e = {style: a}
        }, 
        i = function() {
            if (f.length > 0) {
                f.pop();
                e = f[f.length - 1]
            } else
                e = {style: {}}
        }, j = function(a) {
            var b = e.style, a = a.split(" ");
            if (a.length >= 1) {
                b.fontStyle = "normal";
                b.fontVariant = "normal";
                b.fontWeight = "normal";
                for (var c = 0; c < a.length - 1; c++) {
                    var d = a[c];
                    switch (d) {
                        case "italic":
                        case "oblique":
                            b.fontStyle = d;
                            break;
                        case "small-caps":
                            b.fontVariant = d;
                            break;
                        case "bold":
                        case "bolder":
                        case "lighter":
                        case "100":
                        case "200":
                        case "300":
                        case "400":
                        case "500":
                        case "600":
                        case "700":
                        case "800":
                        case "900":
                            b.fontWeight = d;
                            break;
                        default:
                            if (d.length > 
                            2) {
                                d.indexOf("/") && (d = d.split("/")[0]);
                                if (d.substr(d.length - 2) == "px")
                                    b.fontSize = parseInt(d.substr(0, d.length - 2))
                            }
                    }
                }
                b.fontFamily = a[a.length - 1]
            }
        }, k = function(a) {
            e.name = a.split(" ")[0];
            if (e.name == "a") {
                e.href = a.replace(/.*?href=(\'|\")(.*?)(\'|\").*/gi, "$2");
                e.target = a.replace(/.*?target=(\'|\")(.*?)(\'|\").*/gi, "$2");
                e.alt = a.replace(/.*?alt=(\'|\")(.*?)(\'|\").*/gi, "$2")
            }
            if (a.indexOf("style=") != -1)
                for (var b = e.style, a = a.replace(/.*?style=(\"|\')(.*?)(\"|\')/gi, "$2").split(";"), c = 0; c < a.length; c++) {
                    var d = 
                    a[c];
                    if (d) {
                        var f = d.split(":");
                        if (f.length == 2) {
                            d = f[0].trim();
                            f = f[1].trim();
                            switch (d) {
                                case "font-style":
                                    b.fontStyle = f;
                                    break;
                                case "font-variant":
                                    b.fontVariant = f;
                                    break;
                                case "font-weight":
                                    b.fontWeight = f;
                                    break;
                                case "font-size":
                                    b.fontSize = parseInt(f);
                                    break;
                                case "font-family":
                                    b.fontFamily = f;
                                    break;
                                case "font":
                                    j(f);
                                    break;
                                case "color":
                                    b.color = f
                            }
                        }
                    }
                }
        }, m = this, n = function(a) {
            for (var a = a.replace(/&#(\d+);/gi, function(a, b) {
                return String.fromCharCode(b)
            }), a = a.split(""), b = 0; b < a.length; b++)
                d.push(m._createChar(a[b], e))
        };
        j(c.font);
        f.push(e);
        for (var o = a.split(/(<\/|<|>|\/>)/gi), p = 0; p < o.length; p++) {
            var l = o[p];
            switch (l) {
                case "<":
                    g = 1;
                    h();
                    f.push(e);
                    break;
                case ">":
                    g = 0;
                    break;
                case "</":
                    g = 2;
                    i();
                    break;
                case "/>":
                    g = 0;
                    i();
                    break;
                default:
                    if (g == 0)
                        n(l);
                    else if (g == 1)
                        if (l.indexOf("br") == 0) {
                            d.push(this._createChar("\n", e));
                            o[p + 1] == ">" && i()
                        } else
                            k(l)
            }
        }
        return d
    };
    a.prototype._drawChar = function(a, c, d, e, f) {
        this.setContextStyle(a, d);
        this.outline > 0 && a.strokeText(c, e, f);
        a.fillText(c, e, f)
    };
    a.prototype.setContextStyle = function(a, c) {
        var d = "", c = 
        c || {};
        c.fontStyle && (d = d + (" " + c.fontStyle));
        c.fontVariant && (d = d + (" " + c.fontVariant));
        c.fontWeight && (d = d + (" " + c.fontWeight));
        c.fontSize && (d = d + (" " + c.fontSize + "px"));
        d = d + (" " + (c.fontFamily || "黑体"));
        d = d.substr(1);
        a.font = d;
        if (this.outline > 0) {
            a.lineWidth = this.outline;
            a.strokeStyle = c.outlineColor || this.outlineColor
        }
        a.fillStyle = this._gradientFg ? this._gradientFg : c.color || this.color
    };
    a.prototype._setTextShadow = function(a) {
        if (this.textShadow) {
            a.shadowColor = this.shadowColor;
            a.shadowOffsetX = this.shadowOffsetX;
            a.shadowOffsetY = this.shadowOffsetY;
            a.shadowBlur = this.shadowBlur
        }
    };
    a.prototype.setFont = function(a, c) {
        if (this.font != a) {
            this.font = a;
            if (!c)
                this.fontMetrics = Quark.Text.getFontMetrics(this.font)
        }
    };
    a.prototype.getDrawable = function(a) {
        this.drawable == null && this.setDrawable(Quark.createDOM("div"), true);
        return this.drawable.get(this, a)
    }
})();
Quark.Text.prototype.setText = function(a) {
    a || (a = "");
    this.text = a.toString()
};
Quark.Text.prototype.getText = function() {
    return this.text
};
Quark.Text.prototype.setEllipsis = function(a) {
    this.ellipsis = a
};
Quark.Text.prototype.setColor = function(a, b, c, d, e) {
    if (b != void 0) {
        this._gradientFgType = 1;
        this._gradientFgX0 = a;
        this._gradientFgY0 = b;
        this._gradientFgX1 = c;
        this._gradientFgY1 = d;
        this._gradientFgColorStop = e
    } else
        this.color = a
};
Quark.Text.prototype.getColor = function() {
    return this._gradientFgType ? [this._gradientFgX0, this._gradientFgY0, this._gradientFgX1, this._gradientFgY1, this._gradientFgColorStop] : this.color
};
Quark.Text.prototype.setTextAlign = function(a) {
    this.textAlign = a
};
Quark.Text.prototype.getTextAlign = function() {
    return this.textAlign
};
Quark.Text.prototype.setTextBaseline = function(a) {
    this.textBaseline = a
};
Quark.Text.prototype.setOutline = function(a, b) {
    this.outline = a;
    b || (b = "black");
    this.outlineColor = b
};
Quark.Text.prototype.setMaxWidth = function(a) {
    this.maxWidth = a
};
Quark.Text.prototype.setLineWidth = function() {
    U.warn("【adaptText】Text组件不提供setLineWidth方法")
};
Quark.Text.prototype.getLineWidth = function() {
    U.warn("【adaptText】Text组件不提供getLineWidth方法，此处返回getWidth代替");
    return this.getWidth()
};
Quark.Text.prototype.setLineSpacing = function(a) {
    this.lineSpacing = a
};
Quark.Text.prototype.getLineSpacing = function() {
    return this.lineSpacing
};
Quark.Text.prototype.setTextShadow = function(a, b, c, d) {
    this.shadowOffsetX = a;
    this.shadowOffsetY = b;
    this.shadowBlur = c;
    this.shadowColor = d;
    this.textShadow = true
};
Quark.Text.DEFAULT_FONT = "黑体";
Quark.Text.prototype.setFontSize = function(a) {
    this.fontSize = a;
    this.setFont(a + "px " + Quark.Text.DEFAULT_FONT)
};
Quark.Text.prototype.getFontSize = function() {
    return this.fontSize
};
Quark.Text.prototype.setFontWeight = function(a) {
    this.fontWeight = a
};
Quark.Text.prototype.getFontWeight = function() {
    return this.fontWeight
};
Quark.Text.prototype.setPadding = function(a) {
    this.setPaddingLeft(a);
    this.setPaddingTop(a);
    this.setPaddingRight(a);
    this.setPaddingBottom(a)
};
Quark.Text.prototype.setPaddingLeft = function(a) {
    this.paddingLeft = a
};
Quark.Text.prototype.setPaddingTop = function(a) {
    this.paddingTop = a
};
Quark.Text.prototype.setPaddingRight = function(a) {
    this.paddingRight = a
};
Quark.Text.prototype.setPaddingBottom = function(a) {
    this.paddingBottom = a
};
Quark.Text.prototype.setWidth = function(a) {
    this.originWidth = this.width = a
};
Quark.Text.prototype.setHeight = function(a) {
    this.originHeight = this.height = a
};
Quark.Text.prototype.setLineHeight = function(a) {
    this.lineHeight = parseInt(a)
};
Quark.Text.prototype.getLineHeight = function() {
    return this.lineHeight
};
Quark.Text.prototype.setVerticalAlign = function(a) {
    this.verticalAlign = a
};
Quark.Text.prototype.getVerticalAlign = function() {
    return this.verticalAlign
};
Quark.Text.prototype.getHrefs = function() {
    return this.hrefs
};
Quark.Text.prototype._renderGradient = function(a) {
    Quark.Text.superClass._renderGradient.call(this, a);
    if (this._gradientFgType == 1) {
        for (var a = a.createLinearGradient(this._gradientFgX0, this._gradientFgY0, this._gradientFgX1, this._gradientFgY1), b = 0; b < this._gradientFgColorStop.length; b++)
            a.addColorStop(this._gradientFgColorStop[b][0], this._gradientFgColorStop[b][1]);
        this._gradientFg = a
    }
};
Quark.Text.getFontMetrics = G.IS_AC ? function() {
    return {}
} : function(a) {
    var b = {}, a = Quark.createDOM("div", {style: {font: a,position: "absolute"},innerHTML: "M"});
    document.body.appendChild(a);
    b.height = a.offsetHeight;
    a.innerHTML = '<div style="display:inline-block; width:1px; height:1px;"></div>';
    var c = a.childNodes[0];
    b.ascent = c.offsetTop + c.offsetHeight;
    b.descent = b.height - b.ascent;
    document.body.removeChild(a);
    return b
};
(function() {
    var a = Quark.TextButton = function(a) {
        this.state = null;
        this.enabled = true;
        if (!a.width)
            if (a.imgDownBg && a.imgDownBg.image)
                a.width = a.imgDownBg.image.width;
            else if (a.imgUpBg && a.imgUpBg.image)
                a.width = a.imgUpBg.image.width;
        if (!a.height)
            if (a.imgDownBg && a.imgDownBg.image)
                a.height = a.imgDownBg.image.height;
            else if (a.imgUpBg && a.imgUpBg.image)
                a.height = a.imgUpBg.image.height;
        a = a || {};
        Quark.TextButton.superClass.constructor.call(this, a);
        this.id = a.id || Quark.UIDUtil.createUID("TextButton");
        this._bgSkin = new Quark.MovieClip({id: "bgSkin",
            image: a.bgImage});
        this.addChild(this._bgSkin);
        this._bgSkin.stop();
        if (a.text) {
            var c = a.text.length, d = 20;
            this._textUp = new Quark.Text({text: a.text});
            if (a.colorUp)
                this._textUp.color = a.colorUp;
            if (a.sizeUp)
                this._textUp.font = a.sizeUp + "px " + Quark.Text.DEFAULT_FONT;
            if (a.sizeUp)
                d = a.sizeUp;
            this._textUp.setWidth(d * c);
            this._textUp.setHeight(d);
            this.addChild(this._textUp);
            this._textDown = new Quark.Text({text: a.text});
            if (a.colorDown)
                this._textDown.color = a.colorDown;
            else if (a.colorUp)
                this._textDown.color = a.colorUp;
            if (a.sizeDown)
                this._textDown.font = a.sizeDown + "px " + Quark.Text.DEFAULT_FONT;
            else if (a.sizeUp)
                this._textDown.font = a.sizeUp + "px " + Quark.Text.DEFAULT_FONT;
            if (a.sizeDown)
                d = a.sizeDown;
            this._textDown.setWidth(d * c);
            this._textDown.setHeight(d);
            this.addChild(this._textDown);
            this._textDisable = new Quark.Text({text: a.text});
            if (a.colorDisable)
                this._textDisable.color = a.colorDisable;
            else if (a.colorUp)
                this._textDown.color = a.colorUp;
            if (a.sizeDisable)
                this._textDisable.font = a.sizeDisable + "px " + Quark.Text.DEFAULT_FONT;
            else if (a.sizeUp)
                this._textDown.font = a.sizeUp + "px " + Quark.Text.DEFAULT_FONT;
            if (a.sizeDisable)
                d = a.sizeDisable;
            this._textDisable.setWidth(d * c);
            this._textDisable.setHeight(d);
            this.addChild(this._textDisable)
        }
        if (a.up) {
            this._skin = new Quark.MovieClip({id: "skin",image: a.image});
            this.addChild(this._skin);
            this._skin.stop()
        }
        this.eventChildren = false;
        if (a.useHandCursor === void 0)
            this.useHandCursor = true;
        a.up && this.setUpState(a.up, a.upBg);
        a.over && this.setOverState(a.over, a.overBg);
        a.down && this.setDownState(a.down, 
        a.downBg);
        a.disabled && this.setDisabledState(a.disabled, a.disabledBg);
        a.text && (a.textPos ? this.alignText(a.textPos) : this.alignText("center"));
        a.up && (a.imgPos ? this.alignImage(a.imgPos) : this.alignImage("center"));
        this.changeState(Quark.TextButton.UP)
    };
    Quark.inherit(a, Quark.DisplayObjectContainer);
    a.UP = "up";
    a.OVER = "over";
    a.DOWN = "down";
    a.DISABLED = "disabled";
    a.prototype.setUpState = function(b, c) {
        b.label = a.UP;
        c.label = a.UP;
        this._skin && this._skin.setFrame(b, 0);
        this._bgSkin.setFrame(c, 0);
        this.upState = b;
        return this
    };
    a.prototype.setOverState = function(b, c) {
        b.label = a.OVER;
        c.label = a.OVER;
        this._skin && this._skin.setFrame(b, 1);
        this._bgSkin.setFrame(c, 1);
        this.overState = b;
        return this
    };
    a.prototype.setDownState = function(b, c) {
        b.label = a.DOWN;
        c.label = a.DOWN;
        this._skin && this._skin.setFrame(b, 2);
        this._bgSkin.setFrame(c, 2);
        this.downState = b;
        return this
    };
    a.prototype.setDisabledState = function(b, c) {
        b.label = a.DISABLED;
        c.label = a.DISABLED;
        this._skin && this._skin.setFrame(b, 3);
        this._bgSkin.setFrame(c, 3);
        this.disabledState = b;
        return this
    };
    a.prototype.setEnabled = function(b) {
        if (this.enabled == b)
            return this;
        if (this.eventEnabled = this.enabled = b) {
            if (this._skin.currentFrame == 3) {
                this._textUp && this._textUp.setVisible(true);
                this._textDown && this._textDown.setVisible(false);
                this._textDisable && this._textDisable.setVisible(false);
                this._skin && this._skin.gotoAndStop(a.UP)
            }
            this._bgSkin.currentFrame == 3 && this._bgSkin.gotoAndStop(a.UP)
        } else if (this.disabledState) {
            this._textUp && this._textUp.setVisible(false);
            this._textDown && this._textDown.setVisible(false);
            this._textDisable && this._textDisable.setVisible(true);
            this._skin && this._skin.gotoAndStop(a.DISABLED);
            this._bgSkin.gotoAndStop(a.DISABLED)
        } else {
            this._textUp && this._textUp.setVisible(true);
            this._textDown && this._textDown.setVisible(false);
            this._textDisable && this._textDisable.setVisible(false);
            this._skin && this._skin.gotoAndStop(a.UP);
            this._bgSkin.gotoAndStop(a.UP)
        }
        return this
    };
    a.prototype.changeState = function(b) {
        if (this.state != b) {
            this.state = b;
            switch (b) {
                case a.DOWN:
                    this._textUp && this._textUp.setVisible(false);
                    this._textDown && this._textDown.setVisible(true);
                    this._textDisable && this._textDisable.setVisible(false);
                    if (!this.enabled)
                        this.eventEnabled = this.enabled = true;
                    this._skin && this._skin.gotoAndStop(b);
                    this._bgSkin.gotoAndStop(b);
                    break;
                case a.UP:
                case a.OVER:
                    this._textUp && this._textUp.setVisible(true);
                    this._textDown && this._textDown.setVisible(false);
                    this._textDisable && this._textDisable.setVisible(false);
                    if (!this.enabled)
                        this.eventEnabled = this.enabled = true;
                    this._skin && this._skin.gotoAndStop(b);
                    this._bgSkin.gotoAndStop(b);
                    break;
                case a.DISABLED:
                    this.setEnabled(false)
            }
            return this
        }
    };
    a.prototype.dispatchEvent = function(b) {
        if (this.enabled) {
            switch (b.type) {
                case "mousemove":
                    this.overState && this.changeState(a.OVER);
                    break;
                case "mousedown":
                case "touchstart":
                case "touchmove":
                    this.downState && this.changeState(a.DOWN);
                    break;
                case "mouseup":
                    this.overState ? this.changeState(a.OVER) : this.changeState(a.UP);
                    break;
                case "mouseout":
                case "touchout":
                case "touchend":
                    this.upState && this.changeState(a.UP)
            }
            a.superClass.dispatchEvent.call(this, b)
        }
    };
    a.prototype.setDrawable = function() {
        a.superClass.setDrawable.call(this, null)
    };
    a.prototype.setLineSpacing = function(a) {
        if (this._textUp) {
            this._textUp.setLineSpacing(a);
            this._textDown.setLineSpacing(a);
            this._textDisable.setLineSpacing(a);
            this._textUpChecked.setLineSpacing(a);
            this._textDownChecked.setLineSpacing(a);
            this._textDisableChecked.setLineSpacing(a)
        } else
            U.error("[TextButton] No text components")
    };
    a.prototype.alignText = function(a) {
        a || (a = "center");
        switch (a) {
            case "center":
                if (this._textUp) {
                    this._textUp.x = 
                    this._bgSkin.x + (this._bgSkin.width - this._textUp.width) / 2;
                    this._textUp.y = this._bgSkin.y + (this._bgSkin.height - this._textUp.height) / 2;
                    this._textDown.x = this._bgSkin.x + (this._bgSkin.width - this._textDown.width) / 2;
                    this._textDown.y = this._bgSkin.y + (this._bgSkin.height - this._textDown.height) / 2;
                    this._textDisable.x = this._bgSkin.x + (this._bgSkin.width - this._textDisable.width) / 2;
                    this._textDisable.y = this._bgSkin.y + (this._bgSkin.height - this._textDisable.height) / 2
                }
                break;
            case "left":
                if (this._textUp) {
                    this._textUp.x = 
                    this._bgSkin.x;
                    this._textUp.y = this._bgSkin.y;
                    this._textDown.x = this._bgSkin.x;
                    this._textDown.y = this._bgSkin.y;
                    this._textDisable.x = this._bgSkin.x;
                    this._textDisable.y = this._bgSkin.y
                }
                break;
            case "right":
                if (this._textUp) {
                    this._textUp.x = this._bgSkin.x + (this._bgSkin.width - this._textUp.width);
                    this._textUp.y = this._bgSkin.y + (this._bgSkin.height - this._textUp.height);
                    this._textDown.x = this._bgSkin.x + (this._bgSkin.width - this._textDown.width);
                    this._textDown.y = this._bgSkin.y + (this._bgSkin.height - this._textDown.height);
                    this._textDisable.x = this._bgSkin.x + (this._bgSkin.width - this._textDisable.width);
                    this._textDisable.y = this._bgSkin.y + (this._bgSkin.height - this._textDisable.height)
                }
                break;
            default:
                if (a && this._textUp) {
                    this._textUp.x = a.x;
                    this._textUp.y = a.y;
                    this._textDown.x = a.x;
                    this._textDown.y = a.y;
                    this._textDisable.x = a.x;
                    this._textDisable.y = a.y
                }
        }
    };
    a.prototype.alignImage = function(a) {
        a || (a = "center");
        switch (a) {
            case "center":
                if (this._skin) {
                    this._skin.x = this._bgSkin.x + (this._bgSkin.width - this._skin.width) / 2;
                    this._skin.y = this._bgSkin.y + 
                    (this._bgSkin.height - this._skin.height) / 2
                }
                break;
            case "left":
                if (this._skin) {
                    this._skin.x = this._bgSkin.x;
                    this._skin.y = this._bgSkin.y
                }
                break;
            case "right":
                if (this._skin) {
                    this._skin.x = this._bgSkin.x + (this._bgSkin.width - this._skin.width);
                    this._skin.y = this._bgSkin.y + (this._bgSkin.height - this._skin.height)
                }
                break;
            default:
                if (a && this._skin) {
                    this._skin.x = a.x;
                    this._skin.y = a.y
                }
        }
    };
    a.prototype.setImgUp = function(a, c) {
        this.setUpState(a, c)
    };
    a.prototype.setImgDown = function(a, c) {
        this.setDownState(a, c)
    };
    a.prototype.setImgDisable = 
    function(a, c) {
        this.setDisabledState(a, c)
    }
})();
(function() {
    var a = Quark.ToggleButton = function(b) {
        this.enabled = true;
        b = b || {};
        a.superClass.constructor.call(this, b);
        this.id = b.id || Quark.UIDUtil.createUID("ToggleButton");
        this.eventChildren = false;
        this.callback = this.isAutoCheck = this.checkedImgDisableBg = this.checkedImgDownBg = this.checkedImgUpBg = this.imgDisableBg = this.imgDownBg = this.imgUpBg = this.checkedImgDisable = this.checkedImgDown = this.checkedImgUp = this.imgDisable = this.imgDown = this.imgUp = null;
        this._isMouseDown = this._isChecked = false;
        this._isEnable = true;
        this._curText = this._curImgBg = this._curImg = null;
        this._useClick = b.useClick;
        var c = b.imgUp, d = b.imgDown, e = b.imgDisable, f = b.checkedImgUp, g = b.checkedImgDown, h = b.checkedImgDisable, i = b.imgUpBg, j = b.imgDownBg, k = b.imgDisableBg, m = b.checkedImgUpBg, n = b.checkedImgDownBg, o = b.checkedImgDisableBg, p = b.isAutoCheck != null ? b.isAutoCheck : true, l = b.callback;
        if (i || m) {
            i && this.setImgUpBg(i);
            (j || i) && this.setImgDownBg(j ? j : i);
            k && this.setImgDisableBg(k);
            m && this.setCheckedImgUpBg(m);
            (m || n) && this.setCheckedImgDownBg(n ? n : m);
            o && this.setCheckedImgDisableBg(o)
        }
        c && 
        this.setImgUp(c);
        (d || c) && this.setImgDown(d ? d : c);
        e && this.setImgDisable(e);
        f && this.setCheckedImgUp(f);
        (f || g) && this.setCheckedImgDown(g ? g : f);
        h && this.setCheckedImgDisable(h);
        this.setAutoCheck(p);
        this.checkedImgUp && this.checkedImgUp.setVisible(false);
        this.checkedImgDown && this.checkedImgDown.setVisible(false);
        this.checkedImgDisable && this.checkedImgDisable.setVisible(false);
        this.imgUp && this.imgUp.setVisible(false);
        this.imgDown && this.imgDown.setVisible(false);
        this.imgDisable && this.imgDisable.setVisible(false);
        this.checkedImgUpBg && this.checkedImgUpBg.setVisible(false);
        this.checkedImgDownBg && this.checkedImgDownBg.setVisible(false);
        this.checkedImgDisableBg && this.checkedImgDisableBg.setVisible(false);
        this.imgUpBg && this.imgUpBg.setVisible(false);
        this.imgDownBg && this.imgDownBg.setVisible(false);
        this.imgDisableBg && this.imgDisableBg.setVisible(false);
        d = c = 0;
        if (this.checkedImgUp) {
            c = this.checkedImgUp.getWidth();
            d = this.checkedImgUp.getHeight()
        }
        if (this.checkedImgDown) {
            this.checkedImgDown.getWidth() > c && (c = this.checkedImgDown.getWidth());
            this.checkedImgDown.getHeight() > d && (d = this.checkedImgDown.getHeight())
        }
        if (this.imgDown) {
            this.imgDown.getWidth() > c && (c = this.imgDown.getWidth());
            this.imgDown.getHeight() > d && (d = this.imgDown.getHeight())
        }
        if (this.imgUp) {
            this.imgUp.getWidth() > c && (c = this.imgUp.getWidth());
            this.imgUp.getHeight() > d && (d = this.imgUp.getHeight())
        }
        if (this.checkedImgUpBg) {
            c = this.checkedImgUpBg.getWidth();
            d = this.checkedImgUpBg.getHeight()
        }
        if (this.checkedImgDownBg) {
            c = this.checkedImgDownBg.getWidth();
            d = this.checkedImgDownBg.getHeight()
        }
        this.setWidth(c);
        this.setHeight(d);
        if (b.text) {
            this._textUp = new Quark.Text({text: b.text});
            if (b.colorUp)
                this._textUp.color = b.colorUp;
            b.sizeUp && this._textUp.setFontSize(b.sizeUp);
            this.addChild(this._textUp);
            this._textUp.setVisible(false);
            this._textUpChecked = new Quark.Text({text: b.text});
            if (b.checkedColorUp)
                this._textUpChecked.color = b.checkedColorUp;
            b.checkedSizeUp && this._textUpChecked.setFontSize(b.checkedSizeUp);
            this.addChild(this._textUpChecked);
            this._textUpChecked.setVisible(false);
            this._textDown = new Quark.Text({text: b.text});
            if (b.colorDown)
                this._textDown.color = b.colorDown;
            else if (b.colorUp)
                this._textDown.color = b.colorUp;
            b.sizeDown ? this._textDown.setFontSize(b.sizeDown) : b.sizeUp && this._textDown.setFontSize(b.sizeUp);
            this.addChild(this._textDown);
            this._textDown.setVisible(false);
            this._textDownChecked = new Quark.Text({text: b.text});
            if (b.checkedColorDown)
                this._textDownChecked.color = b.checkedColorDown;
            else if (b.checkedColorUp)
                this._textDownChecked.color = b.checkedColorUp;
            b.checkedSizeDown ? this._textDownChecked.setFontSize(b.checkedSizeDown) : 
            b.checkedSizeUp && this._textDownChecked.setFontSize(b.checkedSizeUp);
            this.addChild(this._textDownChecked);
            this._textDownChecked.setVisible(false);
            this._textDisable = new Quark.Text({text: b.text});
            if (b.colorDisable)
                this._textDisable.color = b.colorDisable;
            else if (b.colorUp)
                this._textDisable.color = b.colorUp;
            b.sizeDisable ? this._textDisable.setFontSize(b.sizeDisable) : b.sizeUp && this._textDisable.setFontSize(b.sizeUp);
            this.addChild(this._textDisable);
            this._textDisable.setVisible(false);
            this._textDisableChecked = 
            new Quark.Text({text: b.text});
            if (b.checkedColorDisable)
                this._textDisableChecked.color = b.checkedColorDisable;
            else if (b.checkedColorUp)
                this._textDisableChecked.color = b.checkedColorUp;
            b.checkedSizeDisable ? this._textDisableChecked.setFontSize(b.checkedSizeDisable) : b.checkedSizeUp && this._textDisableChecked.setFontSize(b.checkedSizeUp);
            this.addChild(this._textDisableChecked);
            this._textDisableChecked.setVisible(false);
            this.text = b.text
        }
        this.repaint();
        this.callback = l;
        this.clickFun = function(a, b) {
            this.isEnable() && 
            this.autoCheck && this.setChecked(!this.isChecked());
            this.callback && Quark.delegate(this.callback, this)(a, b)
        };
        this._useClick ? this.addEventListener(G.EVENT.CLICK, this.clickFun) : this.addEventListener(G.EVENT.CHOOSE, this.clickFun);
        b.textPos && this.alignText(b.textPos);
        b.imgPos && this.alignImage(b.imgPos)
    };
    Quark.inherit(a, Quark.DisplayObjectContainer);
    a.prototype.dispatchEvent = function(b) {
        if (this.enabled) {
            switch (b.type) {
                case "mousedown":
                case "touchstart":
                    this._isMouseDown = true;
                    this.repaint();
                    break;
                case "mouseup":
                case "mouseout":
                case "touchout":
                case "touchend":
                    this._isMouseDown = 
                    false;
                    this.repaint()
            }
            a.superClass.dispatchEvent.call(this, b)
        }
    };
    a.prototype.isEnable = a.prototype.isEnabled = function() {
        return this._isEnable
    };
    a.prototype.setEnable = a.prototype.setEnabled = function(a) {
        this._isEnable = a;
        this.repaint()
    };
    a.prototype.isChecked = function() {
        return this._isChecked
    };
    a.prototype.setChecked = function(a) {
        this._isChecked = a;
        this.repaint()
    };
    a.prototype.setImgUp = function(a) {
        this._replaceSkin("imgUp", a)
    };
    a.prototype.setImgDown = function(a) {
        this._replaceSkin("imgDown", a)
    };
    a.prototype.setImgDisable = 
    function(a) {
        this._replaceSkin("imgDisable", a)
    };
    a.prototype.setCheckedImgUp = function(a) {
        this._replaceSkin("checkedImgUp", a)
    };
    a.prototype.setCheckedImgDown = function(a) {
        this._replaceSkin("checkedImgDown", a)
    };
    a.prototype.setCheckedImgDisable = function(a) {
        this._replaceSkin("checkedImgDisable", a)
    };
    a.prototype.setAutoCheck = function(a) {
        this.autoCheck = a
    };
    a.prototype.setImgUpBg = function(a) {
        this._replaceSkin("imgUpBg", a)
    };
    a.prototype.setImgDownBg = function(a) {
        this._replaceSkin("imgDownBg", a)
    };
    a.prototype.setImgDisableBg = 
    function(a) {
        this._replaceSkin("imgDisableBg", a)
    };
    a.prototype.setCheckedImgUpBg = function(a) {
        this._replaceSkin("checkedImgUpBg", a)
    };
    a.prototype.setCheckedImgDownBg = function(a) {
        this._replaceSkin("checkedImgDownBg", a)
    };
    a.prototype.setCheckedImgDisableBg = function(a) {
        this._replaceSkin("checkedImgDisableBg", a)
    };
    a.prototype.repaint = function() {
        this._curImg && this._curImg.setVisible(false);
        this._curText && this._curText.setVisible(false);
        this._curImgBg && this._curImgBg.setVisible(false);
        if (this._isChecked)
            if (this._isEnable)
                if (this._isMouseDown) {
                    this._curImg = 
                    this.checkedImgDown;
                    this._curImgBg = this.checkedImgDownBg;
                    this._curText = this._textDownChecked
                } else {
                    this._curImg = this.checkedImgUp;
                    this._curImgBg = this.checkedImgUpBg;
                    this._curText = this._textUpChecked
                }
            else {
                this._curImg = this.checkedImgDisable;
                this._curImgBg = this.checkedImgDisableBg;
                this._curText = this._textDisableChecked
            }
        else if (this._isEnable)
            if (this._isMouseDown) {
                this._curImg = this.imgDown;
                this._curImgBg = this.imgDownBg;
                this._curText = this._textDown
            } else {
                this._curImg = this.imgUp;
                this._curImgBg = this.imgUpBg;
                this._curText = this._textUp
            }
        else {
            this._curImg = this.imgDisable;
            this._curImgBg = this.imgDisableBg;
            this._curText = this._textDisable
        }
        this._curImg && this._curImg.setVisible(true);
        this._curImgBg && this._curImgBg.setVisible(true);
        this._curText && this._curText.setVisible(true)
    };
    a.prototype._replaceSkin = function(a, c) {
        this[a] && this.removeChild(this[a]);
        this[a] = c instanceof Q.Bitmap ? c : new Q.Bitmap({image: c.image,rect: c.rect});
        this.addChild(this[a])
    };
    a.prototype.setLineSpacing = function(a) {
        if (this._textUp) {
            this._textUp.setLineSpacing(a);
            this._textDown.setLineSpacing(a);
            this._textDisable.setLineSpacing(a);
            this._textUpChecked.setLineSpacing(a);
            this._textDownChecked.setLineSpacing(a);
            this._textDisableChecked.setLineSpacing(a)
        } else
            U.error("[ToggleButton] No text components")
    };
    a.prototype.alignText = function(a) {
        a || (a = {x: 0,y: 0});
        if (this._textUp) {
            this._textUp.x = a.x;
            this._textUp.y = a.y;
            this._textDown.x = a.x;
            this._textDown.y = a.y;
            this._textDisable.x = a.x;
            this._textDisable.y = a.y;
            this._textUpChecked.x = a.x;
            this._textUpChecked.y = a.y;
            this._textDownChecked.x = 
            a.x;
            this._textDownChecked.y = a.y;
            this._textDisableChecked.x = a.x;
            this._textDisableChecked.y = a.y
        }
    };
    a.prototype.alignImage = function(a) {
        a || (a = {x: 0,y: 0});
        this.imgUp && (this.imgUp.x = a.x);
        this.imgUp && (this.imgUp.y = a.y);
        this.imgDown && (this.imgDown.x = a.x);
        this.imgDown && (this.imgDown.y = a.y);
        this.imgDisable && (this.imgDisable.x = a.x);
        this.imgDisable && (this.imgDisable.y = a.y);
        this.checkedImgUp && (this.checkedImgUp.x = a.x);
        this.checkedImgUp && (this.checkedImgUp.y = a.y);
        this.checkedImgDown && (this.checkedImgDown.x = a.x);
        this.checkedImgDown && (this.checkedImgDown.y = a.y);
        this.checkedImgDisable && (this.checkedImgDisable.x = a.x);
        this.checkedImgDisable && (this.checkedImgDisable.y = a.y)
    }
})();
(function() {
    var a = Quark.ImageContainer = function(b) {
        this.image = null;
        this.rectHeight = this.rectWidth = this.rectY = this.rectX = 0;
        b = b || {};
        a.superClass.constructor.call(this, b);
        this.id = b.id || Quark.UIDUtil.createUID("ImageContainer");
        if (this.image) {
            this.setRect(b.rect || [0, 0, this.image.width, this.image.height]);
            this.setDrawable(this.image)
        }
        this._stateList.push("rectX", "rectY", "rectWidth", "rectHeight")
    };
    Quark.inherit(a, Quark.DisplayObjectContainer);
    a.prototype.setRect = function(a) {
        this.rectX = a[0];
        this.rectY = a[1];
        this.rectWidth = this.width = a[2];
        this.rectHeight = this.height = a[3]
    };
    a.prototype.render = function(a) {
        if (this.borderRadius != void 0) {
            a.context.save();
            this._drawPath(a.context);
            a.context.clip()
        }
        a.draw(this, this.rectX, this.rectY, this.rectWidth, this.rectHeight, 0, 0, this.width, this.height);
        this.borderRadius != void 0 && a.context.restore();
        for (var c = 0, d = this.children.length; c < d; c++)
            this.children[c]._render(a)
    };
    a.prototype.setImage = function(a, c) {
        if (a) {
            if (typeof a == "string") {
                this.image = new Image;
                this.image.onload = 
                U.delegate(function() {
                    c == null && this.setRect([0, 0, this.image.width, this.image.height])
                }, this);
                this.image.src = a
            } else if (a instanceof HTMLImageElement) {
                this.image = a;
                c || (c = [0, 0, this.image.width, this.image.height])
            } else if (a.image instanceof HTMLImageElement) {
                this.image = a.image;
                this.setRect(a.rect)
            } else
                U.error("[ImageContainer][Error] Wrong para: urlOrHtmlElementOrSliceConfig = " + a);
            c && this.setRect(c);
            this.setDrawable(this.image)
        } else
            this.setRect([0, 0, 0, 0])
    }
})();
(function() {
    var a = Quark.Input = function(b) {
        b = b || {};
        a.superClass.constructor.call(this, b);
        this.id = Quark.UIDUtil.createUID("Input");
        this.width = 200;
        this.height = 20;
        b.width && this.setWidth(b.width);
        b.height && this.setHeight(b.height);
        this.color = "black";
        this.backgroundStyle = "white";
        this.fontSize = 12;
        this.borderRadius = 0;
        this.placeHolderColor = "#CCCCCC";
        this.placeHolder = "";
        this.paddingRight = this.paddingLeft = 3;
        this._maxLength = 0;
        this.type = b.type;
        if (!this.type)
            this.type = Quark.Input.TEXT;
        this.iMask = G.Container.create();
        if (this.fontMetrics == null)
            this.fontMetrics = a.superClass.getFontMetrics(this.font);
        var c = Quark.delegate(this._onFocus, this);
        this.addEventListener("touchstart", c);
        this.addEventListener("mousedown", c);
        this.onblur = this.onfocus = this.onkeyup = this.onkeydown = null;
        if (b) {
            b.onkeyup && (this.onkeyup = b.onkeyup);
            b.onkeydown && (this.onkeydown = b.onkeydown);
            b.onfocus && (this.onfocus = b.onfocus);
            b.onblur && (this.onblur = b.onblur);
            b.text && this.setValue(b.text)
        }
    };
    Quark.inherit(a, Quark.Text);
    a.prototype.setMaxLength = function(a) {
        this._maxLength = 
        a
    };
    a.prototype.setKeyUpFunction = function(a) {
        this.onkeyup = a
    };
    a.prototype.setKeyDownFunction = function(a) {
        this.onkeydown = a
    };
    a.prototype._onFocus = function() {
        var a = this;
        if (G.IS_AC) {
            var c = 0;
            this.type == Quark.Input.PASSWORD && (c = 1);
            window["native"].attachIME(function(c) {
                a._maxLength > 0 && c.getLengthOfBytes() > a._maxLength && (c = c.substrByByteLength(0, a._maxLength));
                a.text = c
            }, a.placeHolder, a.text, c)
        } else
            this._createDomInput()
    };
    a.prototype._createDomInput = function() {
        var a = G.CANVAS.STAGE;
        this.topLayer = G.Container.create({width: a.getWidth(),
            height: a.getHeight()});
        a.addChild(this.topLayer);
        if (!this.popup)
            this.popup = new G.PopupManager({parent: this.topLayer,width: this.topLayer.getWidth(),height: this.topLayer.getHeight()});
        this.popup.setParent(this.topLayer);
        this.popup.show(G.Container.create({width: 10,height: 10}), {onClose: U.delegate(this._removeDomInput, this)});
        this.domInput = Quark.createDOM("input", {type: this.type,style: {position: "absolute",zIndex: 99999}});
        a = this.domInput.style;
        a.fontSize = this.fontSize + "px";
        a.color = this.color;
        a.background = 
        this.backgroundStyle;
        a.width = this.getWidth() + "px";
        a.height = this.getHeight() + "px";
        a.borderRadius = this.borderRadius + "px";
        a.border = "3px red solid";
        var c = this.getGlobalLeft(), d = this.getGlobalTop();
        a.left = c + "px";
        a.top = d + "px";
        if (this._maxLength > 0)
            this.domInput.maxLength = this._maxLength;
        a.paddingLeft = this.paddingLeft - 3 + "px";
        a.paddingRight = this.paddingRight + "px";
        a.boxSizing = "border-box";
        a.fontFamily = "黑体";
        this.domInput.addEventListener("keydown", U.delegate(this._onDomInputKeydown, this));
        this.domInput.addEventListener("keyup", 
        U.delegate(this._onDomInputKeyup, this));
        this.domInput.addEventListener("focus", U.delegate(this._onDomInputFocus, this));
        this.domInput.addEventListener("blur", U.delegate(this._onDomInputBlur, this));
        if (this.text)
            this.domInput.value = this.text;
        document.body.appendChild(this.domInput);
        (window.top == window || !G.IS_IOS) && this.domInput.focus()
    };
    a.prototype._removeDomInput = function() {
        this.domInput && this.domInput.parentNode && this.domInput.parentNode.removeChild(this.domInput);
        this.popup.hideAll();
        this.topLayer && 
        this.topLayer.parent.removeChild(this.topLayer);
        this.topLayer = this.domInput = null
    };
    a.prototype.setPlaceHolder = function(a) {
        this.placeHolder = a
    };
    a.prototype.getPlaceHolder = function() {
        return this.placeHolder
    };
    a.prototype.setPlaceHolderColor = function(a) {
        this.placeHolderColor = a
    };
    a.prototype.getPlaceHolderColor = function() {
        return this.placeHolderColor
    };
    a.prototype._onDomInputKeydown = function() {
        this.text = this.domInput.value;
        this.onkeydown && this.onkeydown()
    };
    a.prototype._onDomInputKeyup = function() {
        var a = this.text = 
        this.domInput.value;
        if (this._maxLength > 0 && a.getLengthOfBytes() > this._maxLength) {
            a = a.substrByByteLength(0, this._maxLength);
            this.domInput.value = a
        }
        this.text = a;
        this.onkeyup && this.onkeyup()
    };
    a.prototype._onDomInputBlur = function() {
        this.text = this.domInput.value;
        this.onblur && this.onblur()
    };
    a.prototype._onDomInputFocus = function() {
        this.onfocus && this.onfocus()
    };
    a.prototype.getValue = function() {
        return this.text
    };
    a.prototype.setValue = function(a) {
        a = "" + (a == null ? "" : a);
        this._maxLength != 0 && a.getLengthOfBytes() > this._maxLength && 
        (a = a.substrByByteLength(0, this._maxLength));
        this.text = a;
        this.domInput && (this.domInput.value = a)
    };
    a.prototype.setColor = function(a) {
        this.color = a;
        this.domInput && (this.domInput.style.color = a)
    };
    a.prototype._drawTextLine = function(a, c, d) {
        var e = this.paddingLeft;
        switch (this.textAlign) {
            case "center":
                e = (this.width - this.paddingLeft - this.paddingRight) * 0.5;
                break;
            case "right":
            case "end":
                e = this.width - this.paddingRight
        }
        var f = this.maxWidth - this.paddingLeft - this.paddingRight;
        this.outline ? a.strokeText(c, e, d, f) : a.fillText(c, 
        e, d, f)
    };
    a.prototype._draw = function(a) {
        var c, d;
        if (!this.text || this.text.length == 0)
            if (this.placeHolder && this.placeHolder.length > 0) {
                c = this.placeHolder;
                d = this.placeHolderColor
            } else
                return;
        else {
            c = this.text;
            d = this.color
        }
        if (this.type == Quark.Input.PASSWORD) {
            for (var e = "", f = 0; f < c.length; f++)
                e = e + "*";
            c = e
        }
        a.font = this.font;
        a.textAlign = this.textAlign;
        a.textBaseline = "top";
        this.outline ? a.strokeStyle = d : a.fillStyle = d;
        c = c.toString().split(/\r\n|\r|\n|<br(?:[ \/])*>/);
        d = this.fontMetrics.height + this.lineSpacing;
        e = (this.height - 
        this.fontSize) / 2;
        a.save();
        a.beginPath();
        a.rect(0, 0, this.width, this.height);
        a.restore();
        a.clip();
        for (var f = 0, g = c.length; f < g; f++) {
            var h = c[f], i = a.measureText(h).width;
            if (this.lineWidth == null || i < this.lineWidth)
                this._drawTextLine(a, h, e);
            else {
                for (var h = h.split(/([^\x00-\xff]|\b)/), i = h[0], j = 1, k = h.length; j < k; j++) {
                    var m = h[j];
                    if (m && m.length != 0)
                        if (a.measureText(i + m).width > this.lineWidth) {
                            this._drawTextLine(a, i, e);
                            e = e + d;
                            i = m
                        } else
                            i = i + m
                }
                this._drawTextLine(a, i, e)
            }
            e = e + d
        }
    };
    a.prototype.setText = a.prototype.setValue;
    a.prototype.getText = a.prototype.getValue;
    Quark.Input.TEXT = "text";
    Quark.Input.PASSWORD = "password";
    Quark.Input.CLICK_AGAIN_TIP = "再点我一次啦"
})();
Quark.Clock = function(a) {
    this.keyNamePre = "Clock";
    a = a || {};
    Quark.Clock.superClass.constructor.call(this, a);
    a || (a = {});
    var b = a.color || "#193b3c", c = a.fontSize || 20, d = a.width || 60, a = a.height || 24;
    this.timerTxt = G.Text.create();
    this.addChild(this.timerTxt);
    this.timerTxt.setFontSize(c);
    this.setColor(b);
    this.setWidth(d);
    this.setHeight(a);
    this.timeNum = null
};
Quark.inherit(Quark.Clock, Quark.DisplayObjectContainer);
Quark.Clock.prototype.play = function() {
    if (!this.timeNum)
        this.timeNum = setInterval(U.delegate(function() {
            var a = new Date, b = "" + a.getHours(), a = "" + a.getMinutes();
            b.length == 1 && (b = "0" + b);
            a.length == 1 && (a = "0" + a);
            this.timerTxt.setText(b + ":" + a)
        }, this), 1E3)
};
Quark.Clock.prototype.stop = function() {
    clearInterval(this.timeNum);
    this.timerTxt = null
};
Quark.Clock.prototype.setColor = function(a) {
    this.timerTxt.setColor(a)
};
(function() {
    var a = Quark.DragPanel = function(b) {
        this.keyNamePre = "DragPanel";
        a.superClass.constructor.call(this, b);
        var b = b || {}, c = b.height || 0, d = b.parentScale, e = b.content, f = b.offsetRateX || 0, g = b.offsetRateY || 0, h = b.decelerateAnimation || "easeOut";
        this.setWidth(b.width || 0);
        this.setHeight(c);
        this.setParentScale(d);
        this.setOverflowHidden(true);
        this.setDecelerateAnimation(h);
        this.setOffsetRateX(f);
        this.setOffsetRateY(g);
        this.setContent(e);
        this.addEventListener(G.EVENT.CHOOSE, this._chooes);
        this.addEventListener(G.EVENT.DRAG, 
        this._drag);
        this.addEventListener(G.EVENT.DRAG_END, this._dragEnd);
        this.onGesture = null
    };
    Quark.inherit(a, Quark.DisplayObjectContainer);
    a.prototype.setContent = function(a) {
        this.content && this.removeChild(this.content);
        (this.content = a) && this.addChild(this.content);
        this.checkOverflowFlags()
    };
    a.prototype.setOffsetRateX = function(a) {
        this.offsetRateX = isNaN(a) ? 0 : a
    };
    a.prototype.setOffsetRateY = function(a) {
        this.offsetRateY = isNaN(a) ? 0 : a
    };
    a.prototype.setParentScale = function(a) {
        this.parentScale = a || {scaleX: 1,scaleY: 1}
    };
    a.prototype.setDecelerateAnimation = function(a) {
        this.decelerateAnimation = a
    };
    a.prototype._chooes = function(a) {
        var c = this.content;
        if (c) {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null
            }
            this.startDragX = this._startX = this._lastPageX = a.pageX;
            this.startDragY = this._startY = this._lastPageY = a.pageY;
            this.orgX = c.x;
            this.orgY = c.y;
            this._startXTimer = this._startYTimer = (new Date).getTime();
            this._directionX = this._directionY = ""
        }
    };
    a.prototype._drag = function(a) {
        var c, d;
        if (this.content) {
            this.stayTimeoutId && 
            clearTimeout(this.stayTimeoutId);
            this.stayTimeoutId = setTimeout(U.delegate(this._stayTimeout, this), 300);
            c = (a.pageX - this._lastPageX) / this.parentScale.scaleX;
            d = (a.pageY - this._lastPageY) / this.parentScale.scaleY;
            this._lastPageX = a.pageX;
            this._lastPageY = a.pageY;
            c = c > 0 ? "right" : "left";
            if (this._directionX != c) {
                this._directionX = c;
                this._startXTimer = (new Date).getTime();
                this._startX = a.pageX
            }
            d = d > 0 ? "down" : "up";
            if (this._directionY != d) {
                this._directionY = d;
                this._startYTimer = (new Date).getTime();
                this._startY = a.pageY
            }
            c = 
            (a.pageX - this.startDragX) / this.parentScale.scaleX;
            d = (a.pageY - this.startDragY) / this.parentScale.scaleY;
            this._scrollTo(this.orgX + c, this.orgY + d, this.offsetRateX, this.offsetRateY)
        }
    };
    a.prototype._dragEnd = function(a) {
        var c = this.content;
        if (c)
            if (this._getIsOutOfRange(0, 0))
                this._backToScope();
            else if (this.stayTimeoutId) {
                this._stayTimeout();
                var d = (new Date).getTime(), e = (a.pageX - this._startX) / this.parentScale.scaleX, a = (a.pageY - this._startY) / this.parentScale.scaleY, f = (d - this._startXTimer) / 1E3, g = (d - this._startYTimer) / 
                1E3, h = f ? Math.abs(e / f) : 0, i = g ? Math.abs(a / g) : 0, j = c.x, k = c.y;
                U.log("distanceX:" + e + ", timeX:" + f + ", speedX:" + h + ", distanceY:" + a + ", timeY:" + g + ", speedY:" + i);
                if (this.onGesture) {
                    c = ",";
                    h >= 1E3 && (c = c + (e > 0 ? "right," : "left,"));
                    i >= 1E3 && (c = c + (a > 0 ? "down," : "up,"));
                    if (c != ",")
                        this.onGesture(c)
                }
                if (!(this.decelerateAnimation == "" || this.decelerateAnimation == "none" || this.decelerateAnimation == null))
                    this.intervalId = setInterval(U.delegate(function() {
                        var a = (new Date).getTime() - d, b = false;
                        if (a > 1E3)
                            b = true;
                        else {
                            var c = h * 0.3 * this._easeOutCubic(a / 
                            1E3), a = i * 0.3 * this._easeOutCubic(a / 1E3);
                            this._directionX == "left" && (c = 0 - c);
                            this._directionY == "up" && (a = 0 - a);
                            this._scrollTo(j + c, k + a) || (b = true)
                        }
                        if (b) {
                            clearInterval(this.intervalId);
                            this.intervalId = null
                        }
                    }, this), 20)
            }
    };
    a.prototype._stayTimeout = function() {
        this.stayTimeoutId = null
    };
    a.prototype.checkOverflowFlags = function() {
        if (this.content) {
            if (this.flagUp && this.flagDown) {
                this.content.getY() + this.content.getHeight() > this.getHeight() + a.OVERFLOW_FLAG_OFFSET ? this.flagDown.setVisible(true) : this.flagDown.setVisible(false);
                this.content.getY() < -a.OVERFLOW_FLAG_OFFSET ? this.flagUp.setVisible(true) : this.flagUp.setVisible(false)
            }
            if (this.flagLeft && this.flagRight) {
                this.content.getX() + this.content.getWidth() > this.getWidth() + a.OVERFLOW_FLAG_OFFSET ? this.flagRight.setVisible(true) : this.flagRight.setVisible(false);
                this.content.getX() < -a.OVERFLOW_FLAG_OFFSET ? this.flagLeft.setVisible(true) : this.flagLeft.setVisible(false)
            }
        }
    };
    a.prototype.hasOverflowX = function() {
        return this.content ? this.content.getY() + this.content.getHeight() > this.getHeight() + 
        a.OVERFLOW_FLAG_OFFSET || this.content.getY() < -a.OVERFLOW_FLAG_OFFSET : false
    };
    a.prototype.setOverflowFlags = function(a) {
        if (a.flagLeft) {
            this.flagLeft = a.flagLeft;
            this.flagLeft.setVisible(false)
        }
        if (a.flagRight) {
            this.flagRight = a.flagRight;
            this.flagRight.setVisible(false)
        }
        if (a.flagUp) {
            this.flagUp = a.flagUp;
            this.flagUp.setVisible(false)
        }
        if (a.flagDown) {
            this.flagDown = a.flagDown;
            this.flagDown.setVisible(false)
        }
        this.checkOverflowFlags()
    };
    a.prototype.hasOverflowY = function() {
        return this.content ? this.content.getX() + 
        this.content.getWidth() > this.getWidth() + a.OVERFLOW_FLAG_OFFSET || this.content.getX() < -a.OVERFLOW_FLAG_OFFSET : false
    };
    a.prototype.hasOverflow = function() {
        return this.hasOverflowX() || this.hasOverflowY()
    };
    a.prototype.scrollTo = function(a, c) {
        return this._scrollTo(a, c, 0, 0)
    };
    a.prototype.tweenScrollTo = function(a, c, d) {
        a > this._getLeftScope(0) && (a = 0);
        a < this._getRightScope(0) && (a = this._getRightScope(0));
        c > this._getTopScope(0) && (c = 0);
        c < this._getBottomScope(0) && (c = this._getBottomScope(0));
        this.content.to({x: a,y: c,
            time: d});
        setTimeout(U.delegate(function() {
            this.checkOverflowFlags()
        }, this), 100);
        setTimeout(U.delegate(function() {
            this.checkOverflowFlags()
        }, this), d * 1E3 + 100)
    };
    a.prototype._scrollTo = function(a, c, d, e) {
        var f = this.content;
        if (f) {
            d = isNaN(d) ? 0 : d;
            e = isNaN(e) ? 0 : e;
            a = Math.max(Math.min(a, 0 + this.width * d), this.width * (1 - d) - Math.max(f.width, this.width));
            c = Math.max(Math.min(c, 0 + this.height * e), this.height * (1 - e) - Math.max(f.height, this.height));
            if (a == this.lastX && c == this.lastY)
                return false;
            f.setX(a);
            f.setY(c);
            this.lastX = 
            a;
            this.lastY = c;
            this.checkOverflowFlags();
            return true
        }
    };
    a.prototype._backToScope = function() {
        var a = this.content;
        if (a) {
            a.x > this._getLeftScope(0) ? a.to({x: 0,time: 0.2}) : a.x < this._getRightScope(0) && a.to({x: this._getRightScope(0),time: 0.2});
            a.y > this._getTopScope(0) ? a.to({y: 0,time: 0.2}) : a.y < this._getBottomScope(0) && a.to({y: this._getBottomScope(0),time: 0.2})
        }
    };
    a.prototype._getIsOutOfRange = function(a, c) {
        var a = isNaN(a) ? 0 : a, c = isNaN(c) ? 0 : c, d = this.content;
        if (d)
            return d.x > this._getLeftScope(a) || d.x < this._getRightScope(a) || 
            d.y > this._getTopScope(c) || d.y < this._getBottomScope(c)
    };
    a.prototype._getLeftScope = function(a) {
        var a = isNaN(a) ? 0 : a, c = this.content;
        if (c)
            return Math.min(c.width, this.width) * a
    };
    a.prototype._getRightScope = function(a) {
        var a = isNaN(a) ? 0 : a, c = this.content;
        if (c)
            return this.width * (1 - a) - Math.max(c.width, this.width)
    };
    a.prototype._getTopScope = function(a) {
        var a = isNaN(a) ? 0 : a, c = this.content;
        if (c)
            return Math.min(c.height, this.height) * a
    };
    a.prototype._getBottomScope = function(a) {
        var a = isNaN(a) ? 0 : a, c = this.content;
        if (c)
            return this.height * 
            (1 - a) - Math.max(c.height, this.height)
    };
    a.prototype._easeOutCubic = function(a) {
        return Math.pow(a - 1, 3) + 1
    };
    a.OVERFLOW_FLAG_OFFSET = 5
})();
(function() {
    var a = Quark.Action = function(a, c, d, e, f) {
        a instanceof HTMLImageElement ? this.image = a : a.image instanceof HTMLImageElement ? this.image = a.image : U.error("[Action][Error] Wrong para: imageCfg = " + a);
        this.regY = this.regX = this.y = this.x = 0;
        this.scaleY = this.scaleX = this.alpha = 1;
        this.rotation = 0;
        this.visible = true;
        this.rect = c;
        this.label = d;
        this.jump = e;
        this.interval = f
    };
    a.prototype.addBg = function(a, c, d) {
        a instanceof HTMLImageElement || (a = a ? a.img : null);
        if (!this.moreDoms)
            this.moreDoms = [];
        this.moreDoms.push({domObj: a,
            x: c,y: d})
    };
    a.prototype.setX = function(a) {
        this.x = a
    };
    a.prototype.setY = function(a) {
        this.y = a
    };
    a.prototype.setRotation = function(a) {
        this.rotation = a
    };
    a.prototype.setScale = function(a, c) {
        this.scale = {x: a,y: c};
        this.scaleX = a;
        this.scaleY = c
    };
    a.prototype.setOrigin = function(a, c) {
        this.origin = {x: a,y: c};
        this.regX = a;
        this.regY = c
    };
    a.prototype.getX = function() {
        return this.x
    };
    a.prototype.getY = function() {
        return this.y
    };
    a.prototype.setPos = function(a) {
        this.setX(a[0]);
        this.setY(a[1])
    };
    a.prototype.getPos = function() {
        return [this.getX(), 
            this.getY()]
    };
    a.prototype.getRotation = function() {
        return this.rotation
    };
    a.prototype.getScale = function() {
        return this.scale
    };
    a.prototype.getOrigin = function() {
        return this.origin
    };
    a.prototype.getVisible = function() {
        return this.visible
    };
    a.prototype.setVisible = function(a) {
        this.visible = a
    }
})();
(function() {
    var a = Quark.Table = function(a) {
        this.state = null;
        this.enabled = true;
        a = a || {};
        Quark.Table.superClass.constructor.call(this, a);
        this.id = a.id || Quark.UIDUtil.createUID("Table");
        this.eventChildren = false;
        this.config = a;
        this.config.rows = this.config.rows || 0;
        this.config.columns = this.config.columns || 0;
        this.config.cellWidth = this.config.cellWidth || 0;
        this.config.cellHeight = this.config.cellHeight || 0;
        this.config.borderWidth = this.config.borderWidth != void 0 ? this.config.borderWidth : 1;
        this.config.borderColor = this.config.borderColor || 
        "#000000";
        this.config.textAlign = this.config.textAlign || "center";
        this.config.verticalAlign = this.config.verticalAlign || "middle";
        this.config.fontSize = this.config.fontSize || 0;
        this.config.fontColor = this.config.fontColor || "#ffffff";
        this.config.titleSite = this.config.titleSite;
        this.config.subTitleSite = this.config.subTitleSite;
        this.config.ellipsis = this.config.ellipsis || false;
        this.cells = [[]];
        this.config.columnWidth = [];
        this.titles = [];
        this.subTitle = [];
        this.contents = [];
        this.isRedraw = true;
        this.setData(this.config.data || 
        [[]])
    };
    Quark.inherit(a, Quark.DisplayObjectContainer);
    a.prototype._updateCell = function() {
        if (!this.config.cellWidth) {
            this.config.cellWidth = this.width / this.config.columns;
            this.isRedraw = true
        }
        if (!this.config.cellHeight) {
            this.config.cellHeight = this.height / this.config.rows;
            this.isRedraw = true
        }
        if (this.isRedraw) {
            for (var a, c, d, e = 0; e < this.config.rows; e++) {
                this.cells[e] || (this.cells[e] = []);
                this.contents[e] || (this.contents[e] = []);
                for (var f = 0; f < this.config.columns; f++) {
                    var g = this.cells[e][f];
                    if (!g) {
                        g = {};
                        g.box = G.Container.create();
                        this.addChild(g.box);
                        g.text = G.Text.create();
                        this.addChild(g.text);
                        g.text.setColor(this.config.fontColor);
                        this.lastFontColor || (this.lastFontColor = g.text.getColor());
                        this.cells[e][f] = g
                    }
                    a = this.config.columnWidth[f] || this.config.cellWidth;
                    if (f == 0)
                        c = 0;
                    else {
                        c = this.cells[e][f - 1].box;
                        c = c.getX() + c.getWidth()
                    }
                    d = e * this.config.cellHeight;
                    !this.config.borderColor || !this.config.borderWidth ? g.box.setBorder(this.config.borderColor, 0) : g.box.setBorder(this.config.borderColor, this.config.borderWidth);
                    g.box.setX(c);
                    g.box.setY(d);
                    g.box.setWidth(a);
                    g.box.setHeight(this.config.cellHeight);
                    g.text.setX(c);
                    g.text.setY(d);
                    g.text.setHeight(this.config.cellHeight);
                    g.text.setWidth(a);
                    g.text.setLineHeight(this.config.cellHeight);
                    g.text.setTextAlign(this.config.textAlign);
                    g.text.setEllipsis(this.config.ellipsis);
                    g.text.setVerticalAlign(this.config.verticalAlign);
                    g.text.setFontSize(this.config.fontSize);
                    g.text.getColor() == this.lastFontColor && this.lastFontColor != this.config.fontColor && g.text.setColor(this.config.fontColor);
                    this.data && this.data[e] && this.data[e][f] && g.text.setText(this.data[e][f])
                }
            }
            this._updateTitles();
            this.isRedraw = false
        }
    };
    a.prototype.render = function(b) {
        a.superClass.render.call(this, b);
        this._updateCell()
    };
    a.prototype.setData = function(a) {
        this.data = a;
        if (this.config.rows != this.data.length || this.config.columns != this.data[0].length) {
            this.config.rows = Math.max(this.config.rows, this.data.length);
            this.config.columns = Math.max(this.config.columns, this.data[0].length)
        }
        this.isRedraw = true;
        this._updateCell()
    };
    a.prototype.getCell = 
    function(a, c) {
        return this.cells[a][c]
    };
    a.prototype.setColumnWidth = function(a, c) {
        this.config.columnWidth[a] = c;
        this.isRedraw = true
    };
    a.prototype.getColumnWidth = function(a) {
        return this.config.columnWidth[a]
    };
    a.prototype._getSite = function(a, c) {
        var d = {titles: [],contents: []}, e = c.concat(), f = 0;
        switch (a) {
            case "top":
                d.titles = e.splice(0, 1)[0];
                break;
            case "bottom":
                d.titles = e.splice(e.length - 1, 1)[0];
                break;
            case "left":
                for (var f = e.length, g = 0; g < f; g++)
                    d.titles.push(e[g].splice(0, 1)[0]);
                break;
            case "right":
                f = e.length;
                for (g = 0; g < f; g++)
                    d.titles.push(e[g].splice(e[g].length - 1, 1)[0])
        }
        d.contents = e;
        return d
    };
    a.prototype._updateCellBG = function(a, c) {
        if (a && c)
            for (var d = c.length, e, f = 0; f < d; f++)
                if (c[f] && c[f].box) {
                    e = c[f].box;
                    e.setBg(a)
                }
    };
    a.prototype._updateTitles = function() {
        var a;
        this.contents = this.cells;
        this.titles = [];
        if (this.config.titleSite) {
            a = this._getSite(this.config.titleSite, this.contents);
            this.titles = a.titles;
            this.contents = a.contents
        }
        if (this.config.subTitleSite) {
            a = this._getSite(this.config.subTitleSite, this.contents);
            this.subTitleSite = a.titles;
            this.contents = a.contents
        }
        this._updateCellBG(this.titleBgColor, this.titles);
        this._updateCellBG(this.subTitleBgColor, this.subTitleSite);
        if (this.contentsBgColor)
            for (var c = 0; c < this.contents.length; c++)
                this._updateCellBG(this.contentsBgColor, this.contents[c]);
        if ((!this.config.borderColor || !this.config.borderWidth) && this.subTitleSite)
            for (c = 0; c < this.subTitleSite.length; c++) {
                a = this.subTitleSite[c];
                a.box.setBorder(this.config.borderColor, 0)
            }
    };
    a.prototype.getTitles = function() {
        return this.titles
    };
    a.prototype.setTitleBgColor = function(a) {
        this.titleBgColor = a;
        this.isRedraw = true
    };
    a.prototype.getSubTitles = function() {
        return this.subTitles
    };
    a.prototype.setSubTitleBgColor = function(a) {
        this.subTitleBgColor = a;
        this.isRedraw = true
    };
    a.prototype.getContents = function() {
        return this.contents
    };
    a.prototype.setContentsBgColor = function(a) {
        this.contentsBgColor = a;
        this.isRedraw = true
    };
    a.prototype.setCellWidth = function(a) {
        this.config.columnWidth = [];
        this.config.cellWidth = a;
        this.isRedraw = true
    };
    a.prototype.getCellWidth = 
    function() {
        return this.config.cellWidth
    };
    a.prototype.setCellHeight = function(a) {
        this.config.cellHeight = a;
        this.isRedraw = true
    };
    a.prototype.getCellHeight = function() {
        return this.config.cellHeight
    };
    a.prototype.setBorderWidth = function(a) {
        this.config.borderWidth = a;
        this.isRedraw = true;
        this._updateCell()
    };
    a.prototype.getBorderWidth = function() {
        return this.config.borderWidth
    };
    a.prototype.setBorderColor = function(a) {
        this.config.borderColor = a;
        this.isRedraw = true
    };
    a.prototype.getBorderColor = function() {
        return this.config.borderColor
    };
    a.prototype.setTextAlign = function(a) {
        this.config.textAlign = a;
        this.isRedraw = true
    };
    a.prototype.getTextAlign = function() {
        return this.config.textAlign
    };
    a.prototype.setVerticalAlign = function(a) {
        this.config.verticalAlign = a;
        this.isRedraw = true
    };
    a.prototype.getVerticalAlign = function() {
        return this.config.verticalAlign
    };
    a.prototype.setFontSize = function(a) {
        this.config.fontSize = a;
        this.isRedraw = true
    };
    a.prototype.getFontSize = function() {
        return this.config.fontSize
    };
    a.prototype.setFontColor = function(a) {
        this.config.fontColor = 
        a;
        this.isRedraw = true
    };
    a.prototype.getFontColor = function() {
        return this.config.fontColor
    };
    a.prototype.setTitleSite = function(a) {
        this.config.titleSite = a;
        this.isRedraw = true;
        this._updateCell()
    };
    a.prototype.setSubTitleSite = function(a) {
        this.config.subTitleSite = a;
        this.isRedraw = true;
        this._updateCell()
    }
})();
(function() {
    var a = Quark.Switch = function(b) {
        b = b || {};
        a.superClass.constructor.call(this, b);
        this.isOn_ = this.pointerDown_ = this.dragged_ = false;
        this.enabled_ = true;
        this.onChange = b.onChange;
        this.id = b.id || Quark.UIDUtil.createUID("Switch");
        this.container = new Quark.DisplayObjectContainer;
        this.background = new Quark.Bitmap(b.bg);
        this.defaultBar = new Quark.Bitmap(b.upBar);
        this.downBar = new Quark.Bitmap(b.downBar);
        this.barHeight = this.defaultBar.getHeight();
        this.barWidth = this.defaultBar.getWidth();
        this.bgHeight = this.background.getHeight();
        b.width = b.width || b.bg.rect[2] - this.barWidth;
        b.borderRadius = b.borderRadius || this.bgHeight / 2;
        this.background.setOrigin(b.width - this.barWidth + 5, 0);
        this.container.addChild(this.background);
        this.addChild(this.container);
        this.setWidth(b.width);
        this.container.setWidth(b.width);
        this.container.setHeight(this.bgHeight);
        this.container.setOverflowHidden(true);
        this.container.setBorderRadius(b.borderRadius);
        this.defaultBar.setY(Math.round((this.bgHeight - this.barHeight) / 2) + 1);
        this.downBar.setY(this.defaultBar.getY());
        this.setBarX_(-3);
        this.addChild(this.defaultBar);
        this.downBar.setVisible(false);
        this.addChild(this.downBar);
        this.addEventListener(G.EVENT.DOWN, this.onDown_);
        this.addEventListener(G.EVENT.UP, this.onUp_);
        this.addEventListener(G.EVENT.MOVE, this.onMove_);
        this.setOn(b.isOn)
    };
    Quark.inherit(a, Quark.DisplayObjectContainer);
    a.prototype.setEnabled = function(a) {
        this.enabled_ = a;
        this.container.setOpacity(a ? 1 : 0.8)
    };
    a.prototype.isEnable = function() {
        return this.enabled_
    };
    a.prototype.enable = function() {
        this.enabled_ = 
        true;
        this.container.setOpacity(1)
    };
    a.prototype.disable = function() {
        this.enabled_ = false;
        this.container.setOpacity(0.8)
    };
    a.prototype.toggle = function() {
        this.setOn(!this.isOn_)
    };
    a.prototype.setOn = function(a) {
        this.setBarX_(a ? 3 + this.getWidth() - this.defaultBar.getWidth() : -3);
        if (this.isOn_ != a && this.onChange)
            this.onChange(!!a);
        this.isOn_ = a
    };
    a.prototype.setBarX_ = function(a) {
        a < -1 && (a = -1);
        a > this.container.getWidth() - this.barWidth + 3 && (a = this.container.getWidth() - this.barWidth + 3);
        this.defaultBar.setX(a);
        this.downBar.setX(a);
        this.background.setX(a)
    };
    a.prototype.onClick_ = function() {
        this.toggle()
    };
    a.prototype.onDown_ = function(a) {
        if (this.enabled_) {
            this.globalToLocal(a.eventX, a.eventY);
            this.defaultBar.setVisible(false);
            this.downBar.setVisible(true);
            this.dragged_ = false;
            this.pointerDown_ = true;
            this._startX = a.eventX;
            this._startY = a.eventY
        }
    };
    a.prototype.onUp_ = function(a, c) {
        if (this.enabled_) {
            if (this.dragged_)
                this.onDragEnd_(a, c);
            else
                this.toggle();
            this.defaultBar.setVisible(true);
            this.downBar.setVisible(false);
            this.pointerDown_ = 
            false
        }
    };
    a.prototype.onMove_ = function(a) {
        if (this.enabled_ && this.pointerDown_ && !(Math.abs(a.eventX - this._startX) < 8 && Math.abs(a.eventY - this._startY) < 8)) {
            this.dragged_ = true;
            this.setBarX_(this.globalToLocal(a.eventX, a.eventY).x - this.barWidth / 2)
        }
    };
    a.prototype.onDragEnd_ = function(a) {
        if (this.enabled_) {
            this.globalToLocal(a.eventX, a.eventY);
            this.dragged_ ? this.setOn(this.defaultBar.getX() > (this.getWidth() - this.defaultBar.getWidth()) / 2) : this.toggle();
            this.defaultBar.setVisible(true);
            this.downBar.setVisible(false)
        }
    };
    a.prototype.on = function() {
        this.setOn(true)
    };
    a.prototype.off = function() {
        this.setOn(false)
    };
    a.prototype.isOn = function() {
        return this.isOn_
    }
})();
(function() {
    var a = Quark.EAction = function(a) {
        if (a) {
            this.label = a.label;
            this.gotoLabel = a.gotoLabel;
            this.interval = a.interval
        }
        Quark.EAction.superClass.constructor.call(this, a);
        this.id = a && a.id || Quark.UIDUtil.createUID("EAction")
    };
    Quark.inherit(a, Quark.DisplayObjectContainer)
})();
(function() {
    var a = Quark.EAnimation = function(b) {
        this.interval = 0;
        this.useFrames_ = this.paused_ = false;
        this.lastFrame_ = this.currentFrame_ = 0;
        this.frames_ = [];
        this.frameLabels_ = {};
        this.frameDisObj_ = null;
        this.displayedCount_ = 0;
        b = b || {};
        a.superClass.constructor.call(this, b);
        this.id = b.id || Quark.UIDUtil.createUID("EAnimation");
        b.actions && this.addAction(b.actions);
        b.actions = this.actions = null
    };
    Quark.inherit(a, Quark.DisplayObjectContainer);
    a.prototype.addAction = function(a) {
        var c = this.frames_.length;
        if (a instanceof 
        Array)
            for (var d = 0; d < a.length; d++)
                this.addActionAt(a[d], c + d);
        else
            this.addActionAt(a, c);
        return this
    };
    a.prototype.addActionAt = function(a, c) {
        c == void 0 || c > this.frames_.length ? c = this.frames_.length : c < 0 && (c = 0);
        if (this.frames_[c] = a) {
            this.addChild(a);
            a.setVisible(false);
            a.label && (this.frameLabels_[a.label] = a);
            if (a.interval == void 0)
                a.interval = this.interval
        }
    };
    a.prototype.getAction = function(a) {
        return typeof a == "number" ? this.frames_[a] : this.frameLabels_[a]
    };
    a.prototype.play = function() {
        this.paused_ = false
    };
    a.prototype.stop = 
    function() {
        this.paused_ = true
    };
    a.prototype.gotoAndStop = function(a) {
        this.currentFrame_ = this.getFrameIndex(a);
        this.figuredCurrentFrame = this.paused_ = true
    };
    a.prototype.gotoAndPlay = function(a) {
        this.currentFrame_ = this.getFrameIndex(a);
        this.paused_ = false;
        this.figuredCurrentFrame = true
    };
    a.prototype.getFrameIndex = function(a) {
        if (typeof a == "number")
            return a;
        for (var a = this.frameLabels_[a], c = this.frames_, d = 0; d < c.length; d++)
            if (a == c[d])
                return d;
        return -1
    };
    a.prototype.nextAction = function(a) {
        if (this.figuredCurrentFrame) {
            this.figuredCurrentFrame = 
            false;
            return this.currentFrame_
        }
        var c = this.frames_[this.currentFrame_];
        if (c.interval > 0) {
            a = this.displayedCount_ + a;
            this.displayedCount_ = c.interval > a ? a : 0
        }
        if (c.gotoLabel >= 0 || typeof c.gotoLabel == "string")
            if (this.displayedCount_ == 0 || !c.interval)
                return this.currentFrame_ = this.getFrameIndex(c.gotoLabel);
        return c.interval > 0 && this.displayedCount_ > 0 ? this.currentFrame_ : this.currentFrame_ >= this.frames_.length - 1 ? this.currentFrame_ = 0 : ++this.currentFrame_
    };
    a.prototype.getTotalActions = function() {
        return this.frames_.length
    };
    a.prototype._update = function(a, c) {
        if (this.frames_[this.currentFrame_].stop)
            this.stop();
        else {
            if (this._mod == G.ANIMATION.MODE.END_STOP) {
                if (this.currentFrame_ == this.getTotalActions() - 1) {
                    this.stop();
                    return
                }
            } else if (this._mod == G.ANIMATION.MODE.END_DELETE) {
                if (this.currentFrame_ == this.getTotalActions() - 1) {
                    this.stop();
                    this.parent.removeChild(this);
                    return
                }
            } else if (this._mod == G.ANIMATION.MODE.END_HIDE && this.currentFrame_ == this.getTotalActions() - 1) {
                this.stop();
                this.visible = false;
                return
            }
            this.paused_ || this.nextAction(this.useFrames_ ? 
            1 : a && a.deltaTime);
            Quark.EAnimation.superClass._update.call(this, a, c)
        }
    };
    a.prototype.setMode = function(a) {
        this._mod = a
    };
    a.prototype.getCurrentAction = function() {
        return this.currentFrame_ + 1
    };
    a.prototype.isStopped = function() {
        return this.paused_
    };
    a.prototype._render = function(a) {
        var c = this.frames_[this.currentFrame_], d = this.frames_[this.lastFrame_];
        d && d.setVisible(false);
        c && c.setVisible(true);
        Quark.EAnimation.superClass._render.call(this, a);
        this.lastFrame_ = this.currentFrame_
    }
})();
(function() {
    var a = Quark.Timer = function() {
        this.paused = false;
        this.info = {lastTime: 0,currentTime: 0,deltaTime: 0,realDeltaTime: 0};
        this._startTime = 0;
        this._intervalID = null;
        this._listeners = []
    };
    a.prototype.start = function() {
        if (this._intervalID == null) {
            this._startTime = this.info.lastTime = this.info.currentTime = Date.now();
            var a = this;
            a.followLength = 30;
            a._followSpent = [];
            a._runCount = 0;
            a._jumpCount = 0;
            a.MAX_FPS = 22;
            a.MIN_FPS = 8;
            a._fps = a.MAX_FPS;
            a._jumper = 3;
            a.WEAKEN = 0.8;
            a.WEAKEN_AC = a.WEAKEN * 0.9;
            var c = function() {
                if (a._jumpCount++ == 
                a._jumper) {
                    var d = new Date;
                    a._runCount++;
                    a._jumpCount = 0;
                    a._run();
                    var e = a._runCount % a.followLength;
                    a._followSpent[e] = new Date - d;
                    if (e == 0) {
                        d = 0;
                        a._jumper++;
                        for (e = 0; e < a.followLength; e++)
                            d = d + a._followSpent[e];
                        d = Math.floor(1E3 / (d / a.followLength));
                        d = Math.floor(d * (G.IS_AC ? a.WEAKEN_AC : a.WEAKEN));
                        d = Math.min(d, a.MAX_FPS);
                        d = Math.max(d, a.MIN_FPS);
                        a._fps = d
                    }
                } else
                    a._run();
                a._intervalID = setTimeout(c, 1E3 / a._fps);
                if (G.SHOW_FPS) {
                    if (!G._fpsText) {
                        G._fpsText = G.Text.create();
                        G._fpsText.setColor("red");
                        G._fpsText.setFontSize(20);
                        G._fpsText.setPos([10, 10]);
                        G.getStage().addChild(G._fpsText)
                    }
                    G._fpsText.setText(a._fps)
                }
            };
            c()
        }
    };
    a.prototype.stop = function() {
        clearTimeout(this._intervalID);
        this._intervalID = null;
        this._startTime = 0
    };
    a.prototype.pause = function() {
        this.paused = true
    };
    a.prototype.resume = function() {
        this.paused = false
    };
    a.prototype._run = function() {
        if (!this.paused) {
            var a = this.info, c = a.currentTime = Date.now();
            a.deltaTime = a.realDeltaTime = c - a.lastTime;
            for (var d = 0, e = this._listeners.length, f, g; d < e; d++) {
                f = this._listeners[d];
                g = f.__runTime || 
                0;
                if (g == 0)
                    f.step(this.info);
                else if (c > g) {
                    f.step(this.info);
                    this._listeners.splice(d, 1);
                    d--;
                    e--
                }
            }
            a.lastTime = c
        }
    };
    a.prototype.delay = function(a, c) {
        this.addListener({step: a,__runTime: Date.now() + c})
    };
    a.prototype.addListener = function(a) {
        if (a == null || typeof a.step != "function")
            throw "Timer Error: The listener object must implement a step() method!";
        this._listeners.push(a)
    };
    a.prototype.removeListener = function(a) {
        a = this._listeners.indexOf(a);
        a > -1 && this._listeners.splice(a, 1)
    }
})();
(function() {
    var a = Quark.Tween = function(a, d, e) {
        this.target = a;
        this.delay = this.time = 0;
        this.reverse = this.loop = this.paused = false;
        this.interval = 0;
        this.ease = b.Linear.EaseNone;
        this.onComplete = this.onUpdate = this.onStart = this.next = null;
        this._oldProps = {};
        this._newProps = {};
        this._deltaProps = {};
        this._pausedStartTime = this._pausedTime = this._lastTime = this._startTime = 0;
        this._reverseFlag = 1;
        this._frameCount = this._frameTotal = 0;
        for (var f in d) {
            var g = a[f], h = d[f];
            if (g !== void 0 && typeof g == "number" && typeof h == "number") {
                this._oldProps[f] = 
                g;
                this._newProps[f] = h;
                this._deltaProps[f] = h - g
            }
        }
        for (f in e)
            this[f] = e[f]
    };
    a.prototype.setProps = function(a, b) {
        for (var e in a)
            this.target[e] = this._oldProps[e] = a[e];
        for (e in b) {
            this._newProps[e] = b[e];
            this._deltaProps[e] = b[e] - this.target[e]
        }
    };
    a.prototype._init = function() {
        this._startTime = Date.now() + this.delay;
        this._pausedTime = 0;
        if (this.interval > 0)
            this._frameTotal = Math.round(this.time / this.interval);
        a.add(this)
    };
    a.prototype.start = function() {
        this._init();
        this.paused = false
    };
    a.prototype.stop = function() {
        a.remove(this)
    };
    a.prototype.pause = function() {
        this.paused = true;
        this._pausedStartTime = Date.now()
    };
    a.prototype.resume = function() {
        if (this.paused) {
            this.paused = false;
            this._pausedTime = this._pausedTime + (Date.now() - this._pausedStartTime)
        }
    };
    a.prototype._update = function() {
        if (!this.paused) {
            var a = Date.now(), b = a - this._startTime - this._pausedTime;
            if (!(b < 0)) {
                if (this._lastTime == 0 && this.onStart != null)
                    this.onStart(this);
                this._lastTime = a;
                a = b / this.time;
                a > 1 && (a = 1);
                var b = this.ease(a), e;
                for (e in this._oldProps)
                    this.target[e] = this._oldProps[e] + 
                    this._deltaProps[e] * this._reverseFlag * b;
                if (this.onUpdate != null)
                    this.onUpdate(this, b);
                if (a >= 1) {
                    if (this.reverse) {
                        e = this._oldProps;
                        this._oldProps = this._newProps;
                        this._newProps = e;
                        this._startTime = Date.now();
                        this._frameCount = 0;
                        this._reverseFlag = this._reverseFlag * -1;
                        if (!this.loop)
                            this.reverse = false
                    } else if (this.loop) {
                        for (e in this._oldProps)
                            this.target[e] = this._oldProps[e];
                        this._startTime = Date.now();
                        this._frameCount = this._pausedTime = 0
                    } else {
                        Quark.Tween.remove(this);
                        e = this.next;
                        if (e != null) {
                            if (e instanceof 
                            Quark.Tween) {
                                a = e;
                                e = null
                            } else
                                a = e.shift();
                            if (a != null) {
                                a.next = e;
                                a.start()
                            }
                        }
                    }
                    if (this.onComplete != null)
                        this.onComplete(this)
                }
            }
        }
    };
    a._tweens = [];
    a.step = function() {
        for (var a = this._tweens, b = a.length; --b >= 0; )
            a[b]._update()
    };
    a.add = function(a) {
        this._tweens.indexOf(a) == -1 && this._tweens.push(a);
        return this
    };
    a.remove = function(a) {
        var b = this._tweens, a = b.indexOf(a);
        a > -1 && b.splice(a, 1);
        return this
    };
    a.to = function(b, d, e) {
        b = new a(b, d, e);
        b._init();
        return b
    };
    a.from = function(b, d, e) {
        d = new a(b, d, e);
        e = d._oldProps;
        d._oldProps = 
        d._newProps;
        d._newProps = e;
        d._reverseFlag = -1;
        for (var f in d._oldProps)
            b[f] = d._oldProps[f];
        d._init();
        return d
    };
    var b = Quark.Easing = {Linear: {},Quadratic: {},Cubic: {},Quartic: {},Quintic: {},Sinusoidal: {},Exponential: {},Circular: {},Elastic: {},Back: {},Bounce: {}};
    b.Linear.EaseNone = function(a) {
        return a
    };
    b.Quadratic.EaseIn = function(a) {
        return a * a
    };
    b.Quadratic.EaseOut = function(a) {
        return -a * (a - 2)
    };
    b.Quadratic.EaseInOut = function(a) {
        return (a = a * 2) < 1 ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1)
    };
    b.Cubic.EaseIn = function(a) {
        return a * a * 
        a
    };
    b.Cubic.EaseOut = function(a) {
        return --a * a * a + 1
    };
    b.Cubic.EaseInOut = function(a) {
        return (a = a * 2) < 1 ? 0.5 * a * a * a : 0.5 * ((a = a - 2) * a * a + 2)
    };
    b.Quartic.EaseIn = function(a) {
        return a * a * a * a
    };
    b.Quartic.EaseOut = function(a) {
        return -(--a * a * a * a - 1)
    };
    b.Quartic.EaseInOut = function(a) {
        return (a = a * 2) < 1 ? 0.5 * a * a * a * a : -0.5 * ((a = a - 2) * a * a * a - 2)
    };
    b.Quintic.EaseIn = function(a) {
        return a * a * a * a * a
    };
    b.Quintic.EaseOut = function(a) {
        return (a = a - 1) * a * a * a * a + 1
    };
    b.Quintic.EaseInOut = function(a) {
        return (a = a * 2) < 1 ? 0.5 * a * a * a * a * a : 0.5 * ((a = a - 2) * a * a * a * a + 2)
    };
    b.Sinusoidal.EaseIn = 
    function(a) {
        return -Math.cos(a * Math.PI / 2) + 1
    };
    b.Sinusoidal.EaseOut = function(a) {
        return Math.sin(a * Math.PI / 2)
    };
    b.Sinusoidal.EaseInOut = function(a) {
        return -0.5 * (Math.cos(Math.PI * a) - 1)
    };
    b.Exponential.EaseIn = function(a) {
        return a == 0 ? 0 : Math.pow(2, 10 * (a - 1))
    };
    b.Exponential.EaseOut = function(a) {
        return a == 1 ? 1 : -Math.pow(2, -10 * a) + 1
    };
    b.Exponential.EaseInOut = function(a) {
        return a == 0 ? 0 : a == 1 ? 1 : (a = a * 2) < 1 ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2)
    };
    b.Circular.EaseIn = function(a) {
        return -(Math.sqrt(1 - a * a) - 1)
    };
    b.Circular.EaseOut = 
    function(a) {
        return Math.sqrt(1 - --a * a)
    };
    b.Circular.EaseInOut = function(a) {
        return (a = a / 0.5) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a = a - 2) * a) + 1)
    };
    b.Elastic.EaseIn = function(a) {
        var b, e = 0.1, f = 0.4;
        if (a == 0)
            return 0;
        if (a == 1)
            return 1;
        f || (f = 0.3);
        if (!e || e < 1) {
            e = 1;
            b = f / 4
        } else
            b = f / (2 * Math.PI) * Math.asin(1 / e);
        return -(e * Math.pow(2, 10 * (a = a - 1)) * Math.sin((a - b) * 2 * Math.PI / f))
    };
    b.Elastic.EaseOut = function(a) {
        var b, e = 0.1, f = 0.4;
        if (a == 0)
            return 0;
        if (a == 1)
            return 1;
        f || (f = 0.3);
        if (!e || e < 1) {
            e = 1;
            b = f / 4
        } else
            b = f / (2 * Math.PI) * Math.asin(1 / 
            e);
        return e * Math.pow(2, -10 * a) * Math.sin((a - b) * 2 * Math.PI / f) + 1
    };
    b.Elastic.EaseInOut = function(a) {
        var b, e = 0.1, f = 0.4;
        if (a == 0)
            return 0;
        if (a == 1)
            return 1;
        f || (f = 0.3);
        if (!e || e < 1) {
            e = 1;
            b = f / 4
        } else
            b = f / (2 * Math.PI) * Math.asin(1 / e);
        return (a = a * 2) < 1 ? -0.5 * e * Math.pow(2, 10 * (a = a - 1)) * Math.sin((a - b) * 2 * Math.PI / f) : e * Math.pow(2, -10 * (a = a - 1)) * Math.sin((a - b) * 2 * Math.PI / f) * 0.5 + 1
    };
    b.Back.EaseIn = function(a) {
        return a * a * (2.70158 * a - 1.70158)
    };
    b.Back.EaseOut = function(a) {
        return (a = a - 1) * a * (2.70158 * a + 1.70158) + 1
    };
    b.Back.EaseInOut = function(a) {
        return (a = 
        a * 2) < 1 ? 0.5 * a * a * (3.5949095 * a - 2.5949095) : 0.5 * ((a = a - 2) * a * (3.5949095 * a + 2.5949095) + 2)
    };
    b.Bounce.EaseIn = function(a) {
        return 1 - b.Bounce.EaseOut(1 - a)
    };
    b.Bounce.EaseOut = function(a) {
        return (a = a / 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a = a - 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a = a - 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a = a - 2.625 / 2.75) * a + 0.984375
    };
    b.Bounce.EaseInOut = function(a) {
        return a < 0.5 ? b.Bounce.EaseIn(a * 2) * 0.5 : b.Bounce.EaseOut(a * 2 - 1) * 0.5 + 0.5
    }
})();
(function() {
    var a = Quark.UIDUtil = {_counter: 0};
    a.createUID = function(a) {
        var c = a.charCodeAt(a.length - 1);
        c >= 48 && c <= 57 && (a = a + "_");
        return a + this._counter++
    };
    a.displayObjectToString = function(a) {
        for (var c; a != null; a = a.parent) {
            var d = a.id != null ? a.id : a.name;
            c = c == null ? d : d + "." + c;
            if (a == a.parent)
                break
        }
        return c
    }
})();
(function() {
    function a(b, c) {
        for (var d = 0; d < b.children.length; d++) {
            var h = b.children[d];
            if (h.children)
                a(h, c);
            else if (c != null) {
                h = h.getBounds();
                c.globalAlpha = 0.2;
                c.beginPath();
                var i = h[0];
                c.moveTo(i.x - 0.5, i.y - 0.5);
                for (var j = 1; j < h.length; j++) {
                    var k = h[j];
                    c.lineTo(k.x - 0.5, k.y - 0.5)
                }
                c.lineTo(i.x - 0.5, i.y - 0.5);
                c.stroke();
                c.closePath();
                c.globalAlpha = 0.5;
                c.beginPath();
                c.rect((h.x >> 0) - 0.5, (h.y >> 0) - 0.5, h.width >> 0, h.height >> 0);
                c.stroke();
                c.closePath()
            } else if (h.drawable.domDrawable)
                h.drawable.domDrawable.style.border = 
                "1px solid #f00"
        }
    }
    Quark.createRadiusPath = function(a, b, c, d, i, j) {
        j.moveTo(a + i, b);
        j.lineTo(a + c - i, b);
        j.arcTo(a + c, b, a + c, b + i, i);
        j.lineTo(a + c, b + d - i);
        j.arcTo(a + c, b + d, a + c - i, b + d, i);
        j.lineTo(a + i, b + d);
        j.arcTo(a, b + d, a, b + d - i, i);
        j.lineTo(a, b + i);
        j.arcTo(a, b, a + i, b, i)
    };
    Quark.getUrlParams = function() {
        var a = {}, b = window.location.href, c = b.indexOf("?");
        if (c > 0)
            for (var b = b.substring(c + 1).split("&"), c = 0, d; d = b[c]; c++) {
                d = b[c] = d.split("=");
                a[d[0]] = d.length > 1 ? d[1] : true
            }
        return a
    };
    if (!G.IS_AC)
        var b = document.getElementsByTagName("head")[0], 
        c = b.getElementsByTagName("meta"), d = c.length > 0 ? c[c.length - 1].nextSibling : b.childNodes[0];
    Quark.addMeta = function(a) {
        var c = document.createElement("meta"), g;
        for (g in a)
            c.setAttribute(g, a[g]);
        b.insertBefore(c, d)
    };
    Quark.toggleDebugRect = function(b) {
        b.debug = !b.debug;
        b._render = b.debug ? function(c) {
            c.clear != null && c.clear(0, 0, b.width, b.height);
            Quark.Stage.superClass._render.call(b, c);
            c = b.context.context;
            if (c != null) {
                c.save();
                c.lineWidth = 1;
                c.strokeStyle = "#f00";
                c.globalAlpha = 0.5
            }
            a(b, c);
            c != null && c.restore()
        } : function(a) {
            a.clear != 
            null && a.clear(0, 0, b.width, b.height);
            Quark.Stage.superClass._render.call(b, a)
        }
    };
    Quark.cacheObject = function(a, b, c) {
        var d = a.width, i = a.height, j = a.mask, k = Quark.createDOM("canvas", {width: d,height: i});
        if (G.IS_AC)
            k.visibility = "hidden";
        var m = new Quark.CanvasContext({canvas: k});
        a.mask = null;
        a.render(m);
        a.mask = j;
        if (b) {
            a = new Image;
            a.width = d;
            a.height = i;
            a.src = k.toDataURL(c || "image/png");
            return a
        }
        return k
    }
})();
(function() {
    for (var a = function() {
    }, b = 0, c; b < Quark.inheritList.length; b++)
        if (c = Quark.inheritList[b]) {
            var d = c.prototype;
            d._super = function(a, b) {
                return a.callee._super.apply(this, b || a)
            };
            d.init = d.constructor;
            c.extend = function(b) {
                var c = this.prototype;
                a.prototype = c;
                var d = new a, h;
                for (h in b) {
                    if (typeof b[h] == "function" && typeof c[h] == "function")
                        b[h]._super = c[h];
                    d[h] = b[h]
                }
                c = function() {
                    this.init && this.init.apply(this, arguments)
                };
                c.prototype = d;
                c.prototype.constructor = c;
                c.extend = arguments.callee;
                return c
            }
        } else
            U.error("[inheritAdapter_step2][Error] cls is null")
})();
uc.h5g = window.uc.h5g || {};
uc.h5g.Events = window.uc.h5g.Events || {};
G = window.G || {};
G.DOM = uc.h5g;
G.CANVAS = Quark;
G.CANVAS_MODE = "canvas_mode";
G.DOM_MODE = "dom_mode";
G._defaultMode = G.CANVAS_MODE;
G.setMode = function(a) {
    a == G.DOM_MODE ? G._defaultMode = G.DOM_MODE : a == G.CANVAS_MODE ? G._defaultMode = G.CANVAS_MODE : U.error("[G.setMode] 不支持的模式: " + a + ", 仅支持G.CANVAS_MODE和G.DOM_MODE")
};
G.getStage = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return Quark.STAGE;
        if (a == G.DOM_MODE)
            return uc.h5g.STAGE;
        U.error("[Animation][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? Quark.STAGE : uc.h5g.STAGE
};
G.EVENT = {};
G.EVENT.UP = "touchend";
G.EVENT.DOWN = "touchstart";
G.EVENT.MOVE = "touchmove";
G.EVENT.OUT = "touchout";
G.SUPPORT_TOUCH = "ontouchstart" in window;
G.SUPPORT_TOUCH || (G.EVENT.UP = "mouseup", G.EVENT.DOWN = "mousedown", G.EVENT.MOVE = "mousemove", G.EVENT.OUT = "mouseout");
G.EVENT.CHOOSE = uc.h5g.Events.Choose;
G.EVENT.CLICK = uc.h5g.Events.Click;
G.EVENT.DRAG = uc.h5g.Events.Drag;
G.EVENT.DRAG_END = uc.h5g.Events.DragEnd;
G.EVENT.DOUBLE_CHOOSE = uc.h5g.Events.DblChoose;
G.EVENT.DOUBLE_DRAG = uc.h5g.Events.DblDrag;
G.EVENT.DOUBLE_DRAG_END = uc.h5g.Events.DblDragEnd;
G.EVENT.ENTER_FRAME = "enterFrame";
G.EVENT.LINK = "link";
G.ANIMATION = {};
G.ANIMATION.MODE = {};
G.ANIMATION.MODE.LOOP = uc.h5g.DomAnimation.LOOP;
G.ANIMATION.MODE.END_STOP = uc.h5g.DomAnimation.END_STOP;
G.ANIMATION.MODE.END_HIDE = uc.h5g.DomAnimation.END_HIDE;
G.ANIMATION.MODE.END_DELETE = uc.h5g.DomAnimation.END_DELETE;
G.init = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.initCanvas(a);
        if (b == G.DOM_MODE)
            return G.initDom(a);
        U.error("[Animation][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.initCanvas(a) : G.initDom(a)
};
G.initCanvas = Quark.init;
G.initDom = uc.h5g.init;
G.setFPS = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.setCanvasFPS(a);
        if (b == G.DOM_MODE)
            return G.setDomFPS(a);
        U.error("[Animation][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.setCanvasFPS(a) : G.setDomFPS(a)
};
G.setCanvasFPS = Quark.setFPS;
G.setDomFPS = uc.h5g.setFPS;
G.stopFPS = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.stopCanvasFPS();
        if (a == G.DOM_MODE)
            return G.stopDomFPS();
        U.error("[Animation][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.stopCanvasFPS() : G.stopDomFPS()
};
G.stopCanvasFPS = Quark.stopFPS;
G.stopDomFPS = uc.h5g.stopFPS;
G.destroy = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.destroyCanvas();
        if (a == G.DOM_MODE)
            return G.destroyDom();
        U.error("[Animation][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.destroyCanvas() : G.destroyDom()
};
G.destroyCanvas = Quark.destroy;
G.destroyDom = uc.h5g.destroy;
G.getParentScale = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.getCanvasParentScale();
        if (a == G.DOM_MODE)
            return G.getDomParentScale();
        U.error("[Animation][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.getCanvasParentScale() : G.getDomParentScale()
};
G.getCanvasParentScale = Quark.getParentScale;
G.getDomParentScale = uc.h5g.getParentScale;
G.IComponent = Class.implement({init: function() {
    },setData: function() {
    },getData: function() {
    },repaint: function() {
    }});
G.IBitmap = Class.implement({setImage: function() {
    }});
G.IAction = Class.implement({setX: function() {
    },getX: function() {
    },setY: function() {
    },getY: function() {
    },setPos: function() {
    },getPos: function() {
    },setRotation: function() {
    },getRotation: function() {
    },setScale: function() {
    },getScale: function() {
    },setOrigin: function() {
    },getOrigin: function() {
    },setVisible: function() {
    },getVisible: function() {
    },addBg: function() {
    }});
G.IAnimation = Class.implement({setMode: function() {
    },destroy: function() {
    },addAction: function() {
    },addActionAt: function() {
    },getAction: function() {
    },getCurrentAction: function() {
    },getTotalActions: function() {
    },gotoAndStop: function() {
    },gotoAndPlay: function() {
    },stop: function() {
    },play: function() {
    },isStopped: function() {
    },nextAction: function() {
    }});
G.IEAction = Class.implement({});
G.IEAnimation = Class.implement({setMode: function() {
    },destroy: function() {
    },addAction: function() {
    },addActionAt: function() {
    },getAction: function() {
    },getCurrentAction: function() {
    },getTotalActions: function() {
    },gotoAndStop: function() {
    },gotoAndPlay: function() {
    },stop: function() {
    },play: function() {
    },isStopped: function() {
    },nextAction: function() {
    }});
G.IButton = Class.implement({setEnabled: function() {
    },isEnabled: function() {
    },enable: function() {
    },disable: function() {
    },setImgUp: function() {
    },setImgDown: function() {
    },setImgDisable: function() {
    }});
G.IContainer = Class.implement({setX: function() {
    },getX: function() {
    },setY: function() {
    },getY: function() {
    },destroy: function() {
    },setWidth: function() {
    },getWidth: function() {
    },setHeight: function() {
    },getHeight: function() {
    },to: function() {
    },clearTo: function() {
    },pauseTo: function() {
    },resumeTo: function() {
    },getGlobalLeft: function() {
    },getGlobalTop: function() {
    },getGlobalLeftInStage: function() {
    },getGlobalTopInStage: function() {
    },setOverflowHidden: function() {
    },isVisible: function() {
    },setVisible: function() {
    },getVisible: function() {
    },
    setOpacity: function() {
    },getOpacity: function() {
    },setScale: function() {
    },getScale: function() {
    },setScaleX: function() {
    },getScaleX: function() {
    },setScaleY: function() {
    },getScaleY: function() {
    },setSkewX: function() {
    },getSkewX: function() {
    },setSkewY: function() {
    },getSkewY: function() {
    },setRotation: function() {
    },getRotation: function() {
    },setOrigin: function() {
    },getOrigin: function() {
    },getBound: function() {
    },localToGlobal: function() {
    },globalToLocal: function() {
    },localToTarget: function() {
    },removeChild: function() {
    },removeChildAt: function() {
    },
    removeAllChildren: function() {
    },deleteChild: function() {
    },deleteChildAt: function() {
    },deleteAllChildren: function() {
    },addChild: function() {
    },addChildAt: function() {
    },getChildAt: function() {
    },getChildIndex: function() {
    },setChildIndex: function() {
    },contains: function() {
    },getChildren: function() {
    },setPosByName: function() {
    },setPos: function() {
    },getPos: function() {
    },setBottom: function() {
    },setRight: function() {
    },setBg: function() {
    },setRGBA: function() {
    },setBoxShadow: function() {
    },setBorder: function() {
    },setBorderRadius: function() {
    },
    setTopBorder: function() {
    },setBottomBorder: function() {
    },setLeftBorder: function() {
    },setRightBorder: function() {
    },hitTestPoint: function() {
    },hitTestObject: function() {
    },isEnabled: function() {
    },enable: function() {
    },disable: function() {
    },addEventListener: function() {
    },removeAllEventListeners: function() {
    },setLayout: function() {
    },getLayout: function() {
    },doLayout: function() {
    },setNumber: function() {
    },filter: function() {
    },setLinearGradient: function() {
    },setRadialGradient: function() {
    },updateSize: function() {
    }});
G.IDragPanel = Class.implement({setContent: function() {
    },setOffsetRateX: function() {
    },setOffsetRateY: function() {
    },setParentScale: function() {
    },tweenScrollTo: function() {
    },scrollTo: function() {
    },checkOverflowFlags: function() {
    },setOverflowFlags: function() {
    },hasOverflowX: function() {
    },hasOverflowY: function() {
    },hasOverflow: function() {
    }});
G.IImage = Class.implement({setImage: function() {
    }});
G.IInput = Class.implement({setBorder: function() {
    },setValue: function() {
    },getValue: function() {
    },setFontSize: function() {
    },setKeyUpFunction: function() {
    },setKeyDownFunction: function() {
    },setPlaceHolder: function() {
    },getPlaceHolder: function() {
    },setPlaceHolderColor: function() {
    },getPlaceHolderColor: function() {
    },setMaxLength: function() {
    }});
G.IText = Class.implement({setText: function() {
    },getText: function() {
    },setColor: function() {
    },getColor: function() {
    },setTextAlign: function() {
    },getTextAlign: function() {
    },setOutline: function() {
    },setMaxWidth: function() {
    },setLineHeight: function() {
    },getLineHeight: function() {
    },setVerticalAlign: function() {
    },getVerticalAlign: function() {
    },setLineSpacing: function() {
    },setTextShadow: function() {
    },setFontSize: function() {
    },getFontSize: function() {
    },setFontWeight: function() {
    },getFontWeight: function() {
    },setEllipsis: function() {
    },
    setPadding: function() {
    },setPaddingLeft: function() {
    },setPaddingTop: function() {
    },setPaddingRight: function() {
    },setPaddingBottom: function() {
    },addEventListener: function() {
    },getHrefs: function() {
    },update: function() {
    }});
G.IClock = Class.implement({play: function() {
    },stop: function() {
    },setColor: function() {
    }});
G.ITextButton = Class.implement({setEnabled: function() {
    },isEnabled: function() {
    },enable: function() {
    },disable: function() {
    },setLineSpacing: function() {
    },alignText: function() {
    },alignImage: function() {
    },setImgUp: function() {
    },setImgDown: function() {
    },setImgDisable: function() {
    }});
G.IToggleButton = Class.implement({isChecked: function() {
    },setChecked: function() {
    },setEnabled: function() {
    },isEnabled: function() {
    },enable: function() {
    },disable: function() {
    },setLineSpacing: function() {
    },alignText: function() {
    },alignImage: function() {
    }});
G.ITable = Class.implement({setData: function() {
    },getCell: function() {
    },setColumnWidth: function() {
    },getColumnWidth: function() {
    },setCellWidth: function() {
    },getCellWidth: function() {
    },setCellHeight: function() {
    },getCellHeight: function() {
    },setBorderWidth: function() {
    },getBorderWidth: function() {
    },setBorderColor: function() {
    },getBorderColor: function() {
    },setTextAlign: function() {
    },getTextAlign: function() {
    },setVerticalAlign: function() {
    },getVerticalAlign: function() {
    },setFontSize: function() {
    },getFontSize: function() {
    },
    setFontColor: function() {
    },getFontColor: function() {
    },getTitles: function() {
    },setTitleBgColor: function() {
    },getSubTitles: function() {
    },setSubTitleBgColor: function() {
    },getContents: function() {
    },setContentsBgColor: function() {
    },setTitleSite: function() {
    },setSubTitleSite: function() {
    }});
G.ISwitch = Class.implement({setEnabled: function() {
    },isEnabled: function() {
    },enable: function() {
    },disable: function() {
    },toggle: function() {
    },on: function() {
    },off: function() {
    },isOn: function() {
    }});
G.IStage = Class.implement({getStageX: function() {
    },getStageY: function() {
    }});
G.Container = G.Container || {};
G.Container.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.Container.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.Container.createDom(a);
        U.error("[Container][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Container.createCanvas(a) : G.Container.createDom(a)
};
G.Container.createCanvas = function(a) {
    a = a || {};
    return new Quark.DisplayObjectContainer(a)
};
G.Container.createDom = function(a) {
    a = a || {};
    return new uc.h5g.DomObject(a)
};
G.Container.getCanvas = function() {
    if (Quark.DisplayObjectContainer)
        return Quark.DisplayObjectContainer
};
G.Container.getDom = function() {
    if (uc.h5g.DomObject)
        return uc.h5g.DomObject
};
G.Container.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.Container.getCanvas();
        if (a == G.DOM_MODE)
            return G.Container.getDom();
        U.error("[Container][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Container.getCanvas() : G.Container.getDom()
};
G.IContainer.implement(G.Container.getClass(G.CANVAS_MODE));
G.Image = G.Image || {};
G.Image.create = function(a, b) {
    if (a && !a.slice) {
        U.error("[Image] Property not found: slice");
        U.debug(a)
    }
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.Image.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.Image.createDom(a);
        U.error("[Image][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Image.createCanvas(a) : G.Image.createDom(a)
};
G.Image.createCanvas = function(a) {
    var b = a ? a.slice : null, a = a ? a.rect : null, c;
    c = new Quark.ImageContainer({rect: [0, 0, 0, 0]});
    c.setImage(b, a);
    return c
};
G.Image.createDom = function(a) {
    return new uc.h5g.DomImage(a ? a.slice : null, a ? a.rect : null)
};
G.Image.getCanvas = function() {
    if (Quark.ImageContainer)
        return Quark.ImageContainer
};
G.Image.getDom = function() {
    if (uc.h5g.DomImage)
        return uc.h5g.DomImage
};
G.Image.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.Image.getCanvas();
        if (a == G.DOM_MODE)
            return G.Image.getDom();
        U.error("[Image][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Image.getCanvas() : G.Image.getDom()
};
G.IImage.implement(G.Image.getClass(G.CANVAS_MODE));
G.Bitmap = G.Bitmap || {};
G.Bitmap.create = function(a, b) {
    if (a && !a.slice) {
        U.error("[Bitmap] Property not found: slice");
        U.debug(a)
    }
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.Bitmap.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.Bitmap.createDom(a);
        U.error("[Bitmap][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Bitmap.createCanvas(a) : G.Bitmap.createDom(a)
};
G.Bitmap.createCanvas = function(a) {
    var b = a ? a.slice : null, a = a ? a.rect : null, c;
    c = new Quark.Bitmap({rect: [0, 0, 0, 0]});
    c.setImage(b, a);
    return c
};
G.Bitmap.createDom = function(a) {
    return new uc.h5g.DomBitmap(a ? a.slice : null, a ? a.rect : null)
};
G.Bitmap.getCanvas = function() {
    if (Quark.BitmapContainer)
        return Quark.BitmapContainer
};
G.Bitmap.getDom = function() {
    if (uc.h5g.DomBitmap)
        return uc.h5g.DomBitmap
};
G.Bitmap.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.Bitmap.getCanvas();
        if (a == G.DOM_MODE)
            return G.Bitmap.getDom();
        U.error("[Bitmap][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Bitmap.getCanvas() : G.Bitmap.getDom()
};
G.IBitmap.implement(G.Bitmap.getClass(G.CANVAS_MODE));
G.Action = G.Action || {};
G.Action.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.Action.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.Action.createDom(a);
        U.error("[Animation][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Action.createCanvas(a) : G.Action.createDom(a)
};
G.Action.createCanvas = function(a) {
    return new Quark.Action(a.slice, a.rect ? a.rect : a.slice.rect, a.label, a.gotoLabel, a.interval)
};
G.Action.createDom = function(a) {
    return new uc.h5g.Action(a.slice, a.rect ? a.rect : a.slice.rect, a.label, a.gotoLabel, a.interval)
};
G.Action.getCanvas = function() {
    return Quark.Action
};
G.Action.getDom = function() {
    return uc.h5g.Action
};
G.Action.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.Action.getCanvas();
        if (a == G.DOM_MODE)
            return G.Action.getDom();
        U.error("[Animation][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Action.getCanvas() : G.Action.getDom()
};
G.IAction.implement(G.Action.getClass(G.CANVAS_MODE));
G.Animation = G.Animation || {};
G.Animation.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.Animation.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.Animation.createDom(a);
        U.error("[Animation][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Animation.createCanvas(a) : G.Animation.createDom(a)
};
G.Animation.createCanvas = function(a) {
    for (var b = a.actions, a = a.interval, c = 0, d; c < b.length; c++) {
        d = b[c];
        if (d.image && d.image.image)
            d.image = d.image.image
    }
    a = new Quark.MovieClip({image: b[0].image,interval: a});
    a.addFrame(b);
    return a
};
G.Animation.createDom = function(a) {
    return new uc.h5g.DomAnimation(a.actions, a.interval)
};
G.Animation.getCanvas = function() {
    if (Quark.MovieClip)
        return Quark.MovieClip
};
G.Animation.getDom = function() {
    if (uc.h5g.DomAnimation)
        return uc.h5g.DomAnimation
};
G.Animation.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.Animation.getCanvas();
        if (a == G.DOM_MODE)
            return G.Animation.getDom();
        U.error("[Animation][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Animation.getCanvas() : G.Animation.getDom()
};
G.IAnimation.implement(G.Animation.getClass(G.CANVAS_MODE));
G.Button = G.Button || {};
G.Button.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.Button.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.Button.createDom(a);
        U.error("[Button][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Button.createCanvas(a) : G.Button.createDom(a)
};
G.Button.createCanvas = function(a) {
    var b;
    b = a.imgUp;
    var c = a.imgDown ? a.imgDown : b;
    b = new Quark.Button({up: b,down: c,disabled: a.imgDisable ? a.imgDisable : c});
    b.callback = a.callback;
    b.addEventListener(G.EVENT.CLICK, function(a) {
        this.callback && this.callback(a)
    });
    return b
};
G.Button.createDom = function(a) {
    return new uc.h5g.DomButton(a)
};
G.Button.getCanvas = function() {
    if (Quark.Button)
        return Quark.Button
};
G.Button.getDom = function() {
    if (uc.h5g.DomButton)
        return uc.h5g.DomButton
};
G.Button.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.Button.getCanvas();
        if (a == G.DOM_MODE)
            return G.Button.getDom();
        U.error("[Button][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Button.getCanvas() : G.Button.getDom()
};
G.IButton.implement(G.Button.getClass(G.CANVAS_MODE));
G.TextButton = G.TextButton || {};
G.TextButton.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.TextButton.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.TextButton.createDom(a);
        U.error("[TextButton][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.TextButton.createCanvas(a) : G.TextButton.createDom(a)
};
G.TextButton.createCanvas = function(a) {
    var b;
    b = a.imgUp;
    var c = a.imgDown ? a.imgDown : b, d = a.imgDisable ? a.imgDisable : c, e = a.imgUpBg, f = a.imgDownBg ? a.imgDownBg : e, g = e ? e : b;
    b = new Quark.TextButton({text: a.text,colorUp: a.colorUp,colorDown: a.colorDown,colorDisable: a.colorDisable,sizeUp: a.sizeUp,sizeDown: a.sizeDown,sizeDisable: a.sizeDisable,pos: a.pos,image: g.image,bgImage: e.image,width: g.rect[2],height: g.rect[3],up: {rect: b ? b.rect : []},over: {rect: b ? b.rect : []},down: {rect: b ? c.rect : []},disabled: {rect: b ? d.rect : []},upBg: {rect: e.rect},
        overBg: {rect: e.rect},downBg: {rect: f.rect},disabledBg: {rect: (a.imgDisableBg ? a.imgDisableBg : f).rect}});
    b.callback = a.callback;
    b.addEventListener(G.EVENT.CLICK, function(a) {
        this.callback && this.callback(a)
    });
    return b
};
G.TextButton.createDom = function(a) {
    return new uc.h5g.DomTextButton(a)
};
G.TextButton.getCanvas = function() {
    if (Quark.TextButton)
        return Quark.TextButton
};
G.TextButton.getDom = function() {
    if (uc.h5g.DomTextButton)
        return uc.h5g.DomTextButton
};
G.TextButton.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.TextButton.getCanvas();
        if (a == G.DOM_MODE)
            return G.TextButton.getDom();
        U.error("[TextButton][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.TextButton.getCanvas() : G.TextButton.getDom()
};
G.ITextButton.implement(G.TextButton.getClass(G.CANVAS_MODE));
G.DragPanel = G.DragPanel || {};
G.DragPanel.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.DragPanel.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.DragPanel.createDom(a);
        U.error("[DragPanel][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.DragPanel.createCanvas(a) : G.DragPanel.createDom(a)
};
G.DragPanel.createCanvas = function(a) {
    return new Quark.DragPanel(a)
};
G.DragPanel.createDom = function(a) {
    return new uc.h5g.DomDragPanel(a)
};
G.DragPanel.getCanvas = function() {
    if (Quark.DragPanel)
        return Quark.DragPanel
};
G.DragPanel.getDom = function() {
    if (uc.h5g.DomDragPanel)
        return uc.h5g.DomDragPanel
};
G.DragPanel.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.DragPanel.getCanvas();
        if (a == G.DOM_MODE)
            return G.DragPanel.getDom();
        U.error("[DragPanel][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.DragPanel.getCanvas() : G.DragPanel.getDom()
};
G.IDragPanel.implement(G.DragPanel.getClass(G.CANVAS_MODE));
G.Input = G.Input || {};
G.Input.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.Input.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.Input.createDom(a);
        U.error("[Input][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Input.createCanvas(a) : G.Input.createDom(a)
};
G.Input.createCanvas = function(a) {
    return new Quark.Input(a)
};
G.Input.createDom = function(a) {
    return new uc.h5g.DomInput(a)
};
G.Input.getCanvas = function() {
    if (Quark.Input)
        return Quark.Input
};
G.Input.getDom = function() {
    if (uc.h5g.DomInput)
        return uc.h5g.DomInput
};
G.Input.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.Input.getCanvas();
        if (a == G.DOM_MODE)
            return G.Input.getDom();
        U.error("[Input][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Input.getCanvas() : G.Input.getDom()
};
G.IInput.implement(G.Input.getClass(G.CANVAS_MODE));
G.Clock = G.Clock || {};
G.Clock.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.Clock.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.Clock.createDom(a);
        U.error("[Input][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Clock.createCanvas(a) : G.Clock.createDom(a)
};
G.Clock.createCanvas = function(a) {
    return new Quark.Clock(a)
};
G.Clock.createDom = function(a) {
    return new uc.h5g.DomClock(a)
};
G.Clock.getCanvas = function() {
    if (Quark.Clock)
        return Quark.Clock
};
G.Clock.getDom = function() {
    if (uc.h5g.DomClock)
        return uc.h5g.DomClock
};
G.Clock.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.Clock.getCanvas();
        if (a == G.DOM_MODE)
            return G.Clock.getDom();
        U.error("[Input][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Clock.getCanvas() : G.Clock.getDom()
};
G.IClock.implement(G.Clock.getClass(G.CANVAS_MODE));
G.Text = G.Text || {};
G.Text.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.Text.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.Text.createDom(a);
        U.error("[Text][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Text.createCanvas(a) : G.Text.createDom(a)
};
G.Text.createCanvas = function(a) {
    var a = a ? a.text : "", b;
    b = new Quark.Text({});
    if (a != void 0)
        b.text = a;
    return b
};
G.Text.createDom = function(a) {
    return new uc.h5g.DomText(a.text)
};
G.Text.getCanvas = function() {
    if (Quark.Text)
        return Quark.Text
};
G.Text.getDom = function() {
    if (uc.h5g.DomText)
        return uc.h5g.DomText
};
G.Text.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.Text.getCanvas();
        if (a == G.DOM_MODE)
            return G.Text.getDom();
        U.error("[Text][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Text.getCanvas() : G.Text.getDom()
};
G.IText.implement(G.Text.getClass(G.CANVAS_MODE));
G.Table = G.Table || {};
G.Table.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.Table.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.Table.createDom(a);
        U.error("[Table][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Table.createCanvas(a) : G.Table.createDom(a)
};
G.Table.createCanvas = function(a) {
    return new Quark.Table(a)
};
G.Table.createDom = function(a) {
    return new uc.h5g.DomTable(a)
};
G.Table.getCanvas = function() {
    if (Quark.Table)
        return Quark.Table
};
G.Table.getDom = function() {
    if (uc.h5g.DomTable)
        return uc.h5g.DomTable
};
G.Table.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.Table.getCanvas();
        if (a == G.DOM_MODE)
            return G.Table.getDom();
        U.error("[Table][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Table.getCanvas() : G.Table.getDom()
};
G.ITable.implement(G.Table.getClass(G.CANVAS_MODE));
G.ToggleButton = G.ToggleButton || {};
G.ToggleButton.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.ToggleButton.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.ToggleButton.createDom(a);
        U.error("[ToggleButton][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.ToggleButton.createCanvas(a) : G.ToggleButton.createDom(a)
};
G.ToggleButton.createCanvas = function(a) {
    return new Quark.ToggleButton(a)
};
G.ToggleButton.createDom = function(a) {
    return new uc.h5g.DomToggleButton(a)
};
G.ToggleButton.getCanvas = function() {
    if (Quark.ToggleButton)
        return Quark.ToggleButton
};
G.ToggleButton.getDom = function() {
    if (uc.h5g.DomToggleButton)
        return uc.h5g.DomToggleButton
};
G.ToggleButton.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.ToggleButton.getCanvas();
        if (a == G.DOM_MODE)
            return G.ToggleButton.getDom();
        U.error("[ToggleButton][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.ToggleButton.getCanvas() : G.ToggleButton.getDom()
};
G.IToggleButton.implement(G.ToggleButton.getClass(G.CANVAS_MODE));
G.Switch = G.Switch || {};
G.Switch.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.Switch.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.Switch.createDom(a);
        U.error("[Switch][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.Switch.createCanvas(a) : G.Switch.createDom(a)
};
G.Switch.createCanvas = function(a) {
    return new Quark.Switch(a)
};
G.Switch.createDom = function() {
    return null
};
G.Switch.getCanvas = function() {
    if (Quark.Switch)
        return Quark.Switch
};
G.Switch.getDom = function() {
};
G.Switch.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.Switch.getCanvas();
        if (a == G.DOM_MODE)
            return G.Switch.getDom();
        U.error("[Switch][Error] Wrong type: " + a)
    } else
        return G.Switch.getCanvas()
};
G.ISwitch.implement(G.Switch.getClass(G.CANVAS_MODE));
G.EAction = G.EAction || {};
G.EAction.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.EAction.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.EAction.createDom(a);
        U.error("[Animation][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.EAction.createCanvas(a) : G.EAction.createDom(a)
};
G.EAction.createCanvas = function(a) {
    return new Quark.EAction(a)
};
G.EAction.createDom = function(a) {
    return new uc.h5g.EAction(a)
};
G.EAction.getCanvas = function() {
    if (Quark.EAction)
        return Quark.EAction
};
G.EAction.getDom = function() {
    if (uc.h5g.EAction)
        return uc.h5g.EAction
};
G.EAction.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.EAction.getCanvas();
        if (a == G.DOM_MODE)
            return G.EAction.getDom();
        U.error("[Animation][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.EAction.getCanvas() : G.EAction.getDom()
};
G.IEAction.implement(G.EAction.getClass(G.CANVAS_MODE));
G.EAnimation = G.EAnimation || {};
G.EAnimation.create = function(a, b) {
    if (b) {
        if (b == G.CANVAS_MODE)
            return G.EAnimation.createCanvas(a);
        if (b == G.DOM_MODE)
            return G.EAnimation.createDom(a);
        U.error("[EAnimation][Error] Wrong type: " + b)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.EAnimation.createCanvas(a) : G.EAnimation.createDom(a)
};
G.EAnimation.createCanvas = function(a) {
    return new Quark.EAnimation(a)
};
G.EAnimation.createDom = function(a) {
    return new uc.h5g.DomEAnimation(a)
};
G.EAnimation.getCanvas = function() {
    if (Quark.MovieClip)
        return Quark.MovieClip
};
G.EAnimation.getDom = function() {
    if (uc.h5g.DomEAnimation)
        return uc.h5g.DomEAnimation
};
G.EAnimation.getClass = function(a) {
    if (a) {
        if (a == G.CANVAS_MODE)
            return G.EAnimation.getCanvas();
        if (a == G.DOM_MODE)
            return G.EAnimation.getDom();
        U.error("[EAnimation][Error] Wrong type: " + a)
    } else
        return G._defaultMode == G.CANVAS_MODE ? G.EAnimation.getCanvas() : G.EAnimation.getDom()
};
G.IEAnimation.implement(G.EAnimation.getClass(G.CANVAS_MODE));
G.Filter = {workCanvas: document.createElement("CANVAS")};
G.Filter.toGray = function(a, b, c, d, e, f) {
    b == void 0 && (b = 0);
    c == void 0 && (c = 0);
    if (d == void 0)
        d = a.width;
    if (e == void 0)
        e = a.height;
    if (d == 0 || e == 0)
        U.error("[Filter] The image width or height is 0");
    else {
        var g = this.workCanvas;
        if (G.IS_AC)
            g.visibility = "hidden";
        var h = g.getContext("2d");
        g.width = d;
        g.height = e;
        h.clearRect(0, 0, d, e);
        h.drawImage(a, b, c, d, e, 0, 0, d, e);
        a = h.getImageData(0, 0, d, e);
        for (b = 0; b < a.data.length; b = b + 4)
            if (a.data[b + 3] > 0) {
                c = a.data[b] * 0.3 + a.data[b + 1] * 0.3 + a.data[b + 2] * 0.3;
                c = c * f;
                c > 255 ? c = 255 : c < 0 && (c = 0);
                a.data[b] = 
                c;
                a.data[b + 1] = c;
                a.data[b + 2] = c
            }
        h.putImageData(a, 0, 0);
        a = new Image;
        f = g.toDataURL();
        a.src = f;
        return a
    }
};
G.Filter.toColorLevel = function(a, b, c, d, e, f) {
    b == void 0 && (b = 0);
    c == void 0 && (c = 0);
    if (d == void 0)
        d = a.width;
    if (e == void 0)
        e = a.height;
    var g = this.workCanvas;
    if (G.IS_AC)
        g.visibility = "hidden";
    var h = g.getContext("2d");
    g.width = d;
    g.height = e;
    h.clearRect(0, 0, d, e);
    h.drawImage(a, b, c, d, e, 0, 0, d, e);
    a = h.getImageData(0, 0, d, e);
    for (b = 0; b < a.data.length; b = b + 4)
        if (a.data[b + 3] > 0) {
            if (f.r) {
                a.data[b] = a.data[b] * f.r;
                a.data[b] = a[b] > 255 ? 255 : a.data[b]
            }
            if (f.g) {
                a.data[b + 1] = a.data[b + 1] * f.g;
                a.data[b + 1] = a[b + 1] > 255 ? 255 : a.data[b + 1]
            }
            if (f.b) {
                a.data[b + 
                2] = a.data[b + 2] * f.b;
                a.data[b + 2] = a[b + 2] > 255 ? 255 : a.data[b + 2]
            }
        }
    h.putImageData(a, 0, 0);
    a = new Image;
    f = g.toDataURL();
    a.src = f;
    return a
};
G.PS = Class.extend({init: function(a, b, c, d, e) {
        this._RES = a || {};
        this._Position = b || {};
        this._Slice = c || {};
        this._AniSlice = d || {};
        this._AniAction = e || {};
        this._imageCache = {};
        this._seedId = 0
    },add: function(a, b, c, d, e) {
        a && U.mixin(this._RES, a);
        b && U.mixin(this._Position, b);
        c && U.mixin(this._Slice, c);
        d && U.mixin(this._AniSlice, d);
        e && U.mixin(this._AniAction, e)
    },getPosition: function(a, b, c) {
        if (this._Position) {
            var d = this._Position[a];
            if (d)
                for (var c = c || 0, e = 0, f = 0; f < d.length; f++) {
                    var g = d[f];
                    if (g && g.name == b) {
                        if (c == e)
                            return g.rect;
                        e++
                    }
                }
            U.error("[PS.getPosition] 对位无法取得，图片名:" + a + ", 位置名:" + b)
        } else
            U.error("[PS][Error] 对位配置没有初始化，Position: " + this._Position);
        return [0, 0, 0, 0]
    },getPos: function(a, b, c) {
        return this.getPosition(a, b, c)
    },getSlice: function(a) {
        return this.getSlice_(a, this._Slice)
    },getSlice_: function(a, b) {
        if (this._RES)
            if (b) {
                var c, d;
                for (d in b)
                    if (c = b[d])
                        if (c = c[a]) {
                            if (!c.image) {
                                c = c.slice();
                                var e;
                                if (G._defaultMode == G.CANVAS_MODE)
                                    e = this.getImageInCache_(this._RES[d]);
                                else {
                                    e = new Image;
                                    e.src = this._RES[d]
                                }
                                c = {image: e,rect: c,src: e.src}
                            }
                            return c
                        }
                U.error("[PS] 切片不存在，切片名:" + 
                a)
            } else
                U.error("[PS] 切片配置没有初始化，Slice: " + b);
        else
            U.error("[PS] 资源列表不存在，_RES: " + this._RES);
        return {image: "",rect: [0, 0, 0, 0]}
    },getImageInCache_: function(a) {
        var b = this._imageCache[a];
        if (!b) {
            b = new Image;
            b.src = a;
            this._imageCache[a] = b
        }
        return b
    },toSlice: function(a) {
        return {image: a,rect: [0, 0, a.width, a.height]}
    },getActions: function(a) {
        var b = [], c, d, e = AniAction[a];
        if (e)
            for (var f, g = 0; g < e.length; g++)
                if (f = e[g]) {
                    for (var a = G.EAction.create(), h = 0; h < f.length; h++) {
                        d = f[h];
                        var i = this.getAniSlice_(d[0]);
                        if (i) {
                            c = G.Bitmap.create({slice: i});
                            c.setX(d[5]);
                            c.setY(d[6]);
                            c.setScaleX(d[1]);
                            c.setScaleY(d[4]);
                            c.setSkewX(d[3]);
                            c.setSkewY(d[2]);
                            c.setOpacity(d[7]);
                            c.setOrigin(i.rect[4], i.rect[5]);
                            a.addChild(c)
                        }
                    }
                    b.push(a)
                }
        return b
    },getAniSlice_: function(a) {
        return this.getSlice_(a, this._AniSlice)
    },changeSlice: function(a, b, c) {
        var d = new Image;
        d.src = this._RES[a];
        d.onload = U.delegate(function() {
            var e = "filter_" + b + "_" + a, f;
            switch (b.name.toLowerCase()) {
                case "gray":
                case "grey":
                    f = G.Filter.toGray(d, null, null, null, null, 1 + b.params.bright / 128);
                    break;
                default:
                    U.error("[PS] Unsupport effect: " + 
                    b.name);
                    return
            }
            this._imageCache[e] = f;
            f = this._Slice[a];
            var g = {}, h, i;
            for (i in f) {
                h = f[i];
                U.isArray(h) && (g[i + c] = h)
            }
            this._Slice[e] = g;
            this._RES[e] = e
        }, this)
    }});
G._psInstance = new G.PS;
G.getSlice = U.delegate(G._psInstance.getSlice, G._psInstance);
G.getPos = G.getPosition = U.delegate(G._psInstance.getPosition, G._psInstance);
G.toSlice = G.getPosition = U.delegate(G._psInstance.toSlice, G._psInstance);
G.initPS = U.delegate(G._psInstance.init, G._psInstance);
G.addPS = U.delegate(G._psInstance.add, G._psInstance);
G.getActions = U.delegate(G._psInstance.getActions, G._psInstance);
G.changeSlice = U.delegate(G._psInstance.changeSlice, G._psInstance);
G.RequestLoadingManager = Class.extend({init: function(a) {
        this._syncNum = 0;
        this._timeout = 35;
        this.onTimeout = this._popup = this._view = null;
        a = a || {};
        a.timeout != null && (this._timeout = a.timeout);
        a.popup != null && (this._popup = a.popup);
        a.view != null && (this._view = a.view);
        a.onTimeout != null && (this.onTimeout = a.onTimeout)
    },push: function(a) {
        this._syncNum++;
        U.log("【G.RequestLoadingManager】++ name:" + a + ", _syncNum:" + this._syncNum);
        if (this._popup && !this._popup.isShow(this._view)) {
            U.log("【RequestLoadingManager】show RequestLoadingV...");
            this._view.play && this._view.play();
            this._popup.show(this._view, {noRemove: true})
        }
        this._loadingTimeoutId && clearTimeout(this._loadingTimeoutId);
        this._loadingTimeoutId = setTimeout(U.delegate(this._onRequestLoadingTimeout, this), this._timeout * 1E3, a)
    },pop: function(a) {
        this._syncNum--;
        U.log("【G.RequestLoadingManager】-- name:" + a + ", _syncNum:" + this._syncNum);
        if (this._syncNum <= 0) {
            if (this._popup && this._popup.isShow(this._view)) {
                U.log("【G.RequestLoadingManager】hide RequestLoadingV...");
                this._view.stop && this._view.stop();
                this._popup.hide(this._view)
            }
            this._syncNum = 0;
            clearTimeout(this._loadingTimeoutId);
            this._loadingTimeoutId = null
        }
    },_onRequestLoadingTimeout: function(a) {
        U.log("【G.RequestLoadingManager】Request timeout");
        this._syncNum = 0;
        this.pop(a);
        this.onTimeout && this.onTimeout()
    },onRequestLoadingTimeout: function() {
    }});
G.PopupManager = Class.extend({init: function(a) {
        this.width = 960;
        this.height = 576;
        this.parent = null;
        this.setConfig(a)
    },setConfig: function(a) {
        (!a.parent || !(a.width > 0) || !(a.height > 0)) && U.error("[G.PopupManager][init][Error] wrong cfg: {parent:" + a.parent + ", width:" + a.width + ", height:" + a.height + "}");
        this.parent = a.parent;
        this.width = a.width;
        this.height = a.height
    },setParent: function(a) {
        this.parent = a
    },show: function(a, b) {
        if (a.popupParent)
            U.warn("【PopupManager】不要重复show!!!");
        else {
            var c = b && b.posConst, d = b && b.pos, e = b && 
            b.noRemove, f = b && b.bgColor, g = b && b.onClose, h = b && b.parent;
            if (!h)
                h = this.parent;
            if (g)
                a.onCloseInPopup = g;
            g = G.Container.create();
            g.setBg(f || f == "" ? f : "rgba(0,0,0,0.5)");
            g.setWidth(this.width);
            g.setHeight(this.height);
            e || g.addEventListener(G.EVENT.CLICK, U.delegate(function(b) {
                this.hide(a);
                b.stopPropagation()
            }, this));
            if (c && c == this.POS_CENTER) {
                a.setX(this.width - a.getWidth() >> 1);
                a.setY(this.height - a.getHeight() >> 1)
            }
            if (d)
                if (d == this.POS_CENTER) {
                    a.setX(this.width - a.getWidth() >> 1);
                    a.setY(this.height - a.getHeight() >> 
                    1)
                } else {
                    a.setX(d[0]);
                    a.setY(d[1])
                }
            if (!c && !d) {
                a.setX(this.width - a.getWidth() >> 1);
                a.setY(this.height - a.getHeight() >> 1)
            }
            a.popupParent = g;
            h.addChild(g);
            h.addChild(a)
        }
    },isShow: function(a) {
        return a && a.popupParent
    },hide: function(a) {
        if (a) {
            if (a.parent) {
                a.parent.removeChild(a.popupParent);
                a.parent.removeChild(a);
                a.onCloseInPopup && a.onCloseInPopup()
            }
            delete a.popupParent
        }
    },hideAll: function() {
        for (var a = this.parent.children, b = a.length, c, d = 0; d < b; d++)
            if ((c = a[d]) && c.popupParent) {
                if (c.parent) {
                    c.parent.removeChild(c.popupParent);
                    c.parent.removeChild(c)
                }
                delete c.popupParent
            }
    }});
G.PopupManager.POS_CENTER = "center";
G.SoundManager = {};
G.SoundManager.init = function(a) {
    a || U.error("[G.SoundManager] init error: cfg = " + a);
    a.hasOwnProperty("id") || U.warn("[G.SoundManager] init: id = " + a.id);
    a.hasOwnProperty("musics") || U.error("[G.SoundManager] init error: musics = " + a.musics);
    G.SoundManager.id = a.id;
    G.SoundManager.musics = a.musics;
    G.SoundManager.isOn = U.Store.get("musicon" + G.SoundManager.id) != "on" ? false : true
};
G.SoundManager.musicObjects = {};
G.SoundManager.setMusicOn = function(a) {
    G.SoundManager.isOn = !!a;
    if (G.SoundManager.isOn) {
        U.Store.set("musicon" + G.SoundManager.id, "on");
        for (var b in G.SoundManager.musicObjects)
            if (a = G.SoundManager.musicObjects[b])
                if (a.loop)
                    a.play();
                else if (a.totalSeconds > 0) {
                    a.play();
                    G.SoundManager._loopPlay(a)
                }
    } else {
        U.Store.set("musicon" + G.SoundManager.id, "off");
        G.SoundManager.stopAll()
    }
};
G.SoundManager.isMusicOn = function() {
    return G.SoundManager.isOn
};
G.SoundManager.play = function(a, b, c) {
    if (G.SoundManager.musics) {
        var d = G.SoundManager.musics[a];
        if (d) {
            var e;
            if (e = G.SoundManager.musicObjects[a]) {
                if (G.IS_AC && !b) {
                    e.pause();
                    e.currentTime = 0
                }
            } else {
                e = document.createElement("audio");
                e.setAttribute("src", d.src);
                e.setAttribute("preload", true)
            }
            if (b)
                if (G.SoundManager._isAndroidSelfBrowser()) {
                    if (c > 0) {
                        e.totalSeconds = c * 1E3;
                        G.SoundManager._loopPlay(e)
                    }
                } else
                    e.loop = true;
            else
                e.addEventListener("ended", function(b) {
                    G.SoundManager._deleteSound(b, a)
                }, false);
            if (G.SoundManager.isMusicOn()) {
                U.log("Music is on");
                e.load && e.load();
                e.setAttribute("autoplay", true);
                e.play()
            }
            G.SoundManager.musicObjects[a] = e
        } else
            U.log("[G.SoundManager][Error] Music not found, id=[" + a + "]")
    } else
        U.log("[G.SoundManager][Error] The musics list is empty")
};
G.SoundManager._loopPlay = function(a) {
    if (G.SoundManager.isMusicOn()) {
        clearTimeout(a.timeoutId);
        a.timeoutId = setTimeout(G.SoundManager._playMusic, a.totalSeconds, a)
    }
};
G.SoundManager._playMusic = function(a) {
    a.play();
    G.SoundManager._loopPlay(a)
};
G.SoundManager.stop = function(a) {
    if (a)
        if (a = G.SoundManager.musicObjects[a]) {
            a.pause();
            clearTimeout(a.timeoutId)
        }
};
G.SoundManager.stopAll = function() {
    for (var a in G.SoundManager.musicObjects) {
        var b = G.SoundManager.musicObjects[a];
        b && typeof b === "object" && G.SoundManager.stop(a)
    }
};
G.SoundManager._deleteSound = function(a, b) {
    if (b) {
        G.SoundManager.stop(b);
        G.SoundManager.musicObjects[b] = null
    }
};
G.SoundManager._isAndroidSelfBrowser = function() {
    if (G.IS_AC)
        return false;
    var a = navigator.userAgent.toLowerCase();
    return a.indexOf("android") === -1 || a.indexOf("chrome") > 0 || a.indexOf("opera") > 0 || a.indexOf("qq") > 0 || a.indexOf("chrome") > 0 ? false : true
};
G.BaseC = Class.extend({init: function() {
        this._connector = null;
        this.ob = this.ob || U.ob;
        this.addListener()
    },addListener: function() {
    },removeListener: function() {
    },setConnector: function(a) {
        this._connector = a
    },getConnector: function() {
        return this._connector
    },request: function(a, b, c, d, e) {
        if (this._connector instanceof Object && this._connector.request != null) {
            e && this.showRequestLoading("请求");
            this._connector.request(a, b, function(a) {
                e && this.hideRequestLoading("请求");
                c && U.delegate(c, d)(a);
                !a.success && a.error.code == U.WSConnector.CODE_TIMEOUT && 
                this._onRequestLoadingTimeout("请求")
            }, this)
        } else
            U.error("【G.BaseC】getConnector()不存在request方法，请检查代码")
    },showRequestLoading: function() {
    },hideRequestLoading: function() {
    },_onRequestLoadingTimeout: function(a) {
        this.hideRequestLoading(a);
        this.onRequestLoadingTimeout(a)
    },onRequestLoadingTimeout: function() {
    },destroy: function() {
        this.removeListener()
    }});
G.BaseC._syncNum = 0;
G.BaseP = Class.extend({init: function() {
        this._connector = null;
        this._listenerCommonds = {};
        this.ob = this.ob || U.ob
    },listenerCmds: function() {
        return []
    },cmdHandler: function() {
    },setConnector: function(a) {
        if (this._connector != a) {
            this._removeCmdListener();
            this._connector = a;
            this._addCmdListener()
        }
    },destroy: function() {
        this._removeCmdListener()
    },_addCmdListener: function() {
        if (this._connector) {
            this._connector.bind("data", this._cmdHandler, this);
            var a = this.listenerCmds();
            if (a && a instanceof Array)
                for (var b = 0; b < a.length; b++)
                    this._listenerCommonds[a[b]] = 
                    true
        }
    },_removeCmdListener: function() {
        this._connector && this._connector.unbind("data", this._cmdHandler)
    },_cmdHandler: function(a) {
        if (this._connector) {
            var b = this._connector.getProtocolField();
            if (a) {
                if (a.success && a.data instanceof Array)
                    a = a.data;
                if (a instanceof Array)
                    for (var c = 0; c < a.length; c++) {
                        var d = a[c];
                        if (!d.data) {
                            var e = {};
                            U.mixin(e, d);
                            d.data = e
                        }
                        this._listenerCommonds[d[b]] && this.cmdHandler(d[b], d.data, d.request)
                    }
            }
        }
    }});
G.BaseV = G.Container.getClass().extend({init: function() {
        this._super(arguments);
        this.ob = this.ob || U.ob;
        this.initUI();
        this.addListener()
    },initUI: function() {
    },addListener: function() {
    },removeListener: function() {
    },show: function() {
        this.setVisible(true)
    },hide: function() {
        this.setVisible(false)
    },destroy: function() {
        this._super(arguments);
        this.removeListener()
    }});
G.BaseVO = Class.extend({init: function(a) {
        arguments.length == 1 && typeof a == "object" && this.copy(a);
        this.setLifeCycle(this.lifeCycle)
    },setLifeCycle: function(a) {
        if (!isNaN(a))
            this._lefeCycleExpiredDate = new Date((new Date).getTime() + a * 1E3)
    },isInTheLifeCycle: function() {
        return this._lefeCycleExpiredDate != null ? (new Date).getTime() - this._lefeCycleExpiredDate.getTime() >= 0 : true
    },copy: function(a) {
        if (a)
            for (var b in a)
                a[b] != this[b] && (typeof a[b] != "object" && typeof a[b] != "function" && typeof this[b] != "function") && (this[b] = 
                a[b])
    },toObj: function() {
        var a = {}, b;
        for (b in this)
            typeof this[b] != "object" && (typeof this[b] != "function" && this[b] != null) && (a[b] = this[b]);
        return a
    }});
G.ComponentV = G.BaseV.extend({init: function() {
        this.data = null;
        this._super(arguments)
    },setData: function(a) {
        if (this.data != a)
            this.data = a;
        this.repaint()
    },getData: function() {
        return this.data
    },repaint: function() {
    }});
G.Facade = {_models: {},_views: {},_controllers: {},_proxies: {},addM: function(a, b) {
        U.log("添加视图" + a);
        return this._models[a] = b
    },getM: function(a) {
        return this._models[a]
    },removeM: function(a) {
        U.log("移除视图" + a);
        var b = this._models[a];
        b && delete this._models[a];
        return b
    },addV: function(a, b) {
        U.log("添加视图" + a);
        return this._views[a] = b
    },getV: function(a) {
        return this._views[a]
    },removeV: function(a) {
        U.log("移除视图" + a);
        var b = this._views[a];
        if (b) {
            b.destroy();
            delete this._views[a]
        }
        return b
    },addC: function(a, b) {
        U.log("添加控制器" + a);
        return this._controllers[a] = 
        b
    },getC: function(a) {
        return this._controllers[a]
    },removeC: function(a) {
        U.log("移除控制器" + a);
        var b = this._controllers[a];
        if (b) {
            b.destroy();
            delete this._controllers[a]
        }
        return b
    },addP: function(a, b) {
        U.log("添加代理" + a);
        return this._proxies[a] = b
    },getP: function(a) {
        return this._proxies[a]
    },removeP: function(a) {
        U.log("移除代理" + a);
        var b = this._proxies[a];
        if (b) {
            b.destroy();
            delete this._proxies[a]
        }
        return b
    }};
G.AlertV = G.Container.getClass().extend({init: function(a) {
        this.keyNamePre = "G.AlertV";
        this._super(arguments);
        this.countdown = -1;
        this.text = "";
        var b = null, c = null, d = null, e = null;
        if (a) {
            this.onOk = a.onOk ? a.onOk : null;
            this.text = a.text ? a.text : "";
            this.COUNTDOWN = this.countdown = a.countdown > 0 ? a.countdown : -1;
            this.onCounting = a.onCounting ? a.onCounting : null;
            if (b = a.skin) {
                c = b.bg;
                this.IMG_UP = b.okBtn.imgUp;
                this.IMG_DOWN = b.okBtn.imgDown
            }
            if (b = a.style) {
                d = b.okBtn;
                e = b.text;
                this.countdownStyle = b.countdown
            }
            this.popup = a.popup ? a.popup : 
            A.popup
        }
        if (c)
            this.bg = G.Bitmap.create({slice: G.getSlice(c)});
        else {
            this.bg = G.Container.create({width: 300,height: 300});
            this.bg.setBorder()
        }
        this.btnImgUp = this.IMG_UP;
        this.btnImgDown = this.IMG_DOWN;
        this.okBtn = G.Button.create({imgUp: G.getSlice(this.btnImgUp),imgDown: G.getSlice(this.btnImgDown),callback: U.delegate(function(a, b) {
                clearInterval(this.countdownId);
                if (typeof this.text != "string" && this.text.length && this.text.length > 0) {
                    this.setText(this.text[0]);
                    this.text.splice(0, 1);
                    this.countdown > 0 && this.launchCountdown()
                } else {
                    this.onOk && 
                    this.onOk(a, b);
                    this.popup && this.popup.hide(this);
                    this.destroy()
                }
            }, this)});
        if (d)
            if (d.posPageName)
                this.okBtn.setPosByName(d.posPageName, d.posName, d.parentPosName);
            else if (!isNaN(d.x) || !isNaN(d.y)) {
                if (isNaN(d.x))
                    d.x = 0;
                if (isNaN(d.y))
                    d.y = 0;
                this.okBtn.setX(d.x);
                this.okBtn.setY(d.y)
            } else {
                this.okBtn.setX(this.bg.getWidth() - this.okBtn.getWidth() >> 1);
                this.okBtn.setY(this.bg.getHeight() - this.okBtn.getHeight() - 10)
            }
        this.textContainer = null;
        if (typeof this.text != "string" && this.text.length && this.text.length > 0) {
            this.textContainer = 
            G.Text.create({text: this.text[0]});
            this.text.splice(0, 1)
        } else
            this.textContainer = G.Text.create({text: this.text});
        if (e) {
            if (e.posPageName) {
                this.textContainer.setPosByName(e.posPageName, e.posName, e.parentPosName);
                c = G.getPos(e.posPageName, e.posName);
                this.textContainer.setWidth(c[2]);
                this.textContainer.setHeight(c[3]);
                this.textContainer.setLineHeight(c[3])
            } else if (!isNaN(e.x) || !isNaN(e.y)) {
                if (isNaN(e.x))
                    e.x = 0;
                if (isNaN(e.y))
                    e.y = 0;
                this.textContainer.setX(e.x);
                this.textContainer.setY(e.y)
            } else {
                this.textContainer.setX(this.bg.getWidth() - 
                this.textContainer.getWidth() >> 1);
                this.textContainer.setY(this.bg.getHeight() - this.textContainer.getHeight() - 10)
            }
            isNaN(e.width) || this.textContainer.setWidth(e.width);
            isNaN(e.height) || this.textContainer.setHeight(e.height);
            e.textAlign && this.textContainer.setTextAlign(e.textAlign);
            isNaN(e.fontSize) || this.textContainer.setFontSize(e.fontSize);
            e.color && this.textContainer.setColor(e.color);
            isNaN(e.lineHeight) || this.textContainer.setLineHeight(e.lineHeight);
            e.verticalAlign && this.textContainer.setVerticalAlign(e.verticalAlign);
            isNaN(e.lineSpacing) || this.textContainer.setLineSpacing(e.lineSpacing);
            e.fontWeight && this.textContainer.setFontWeight(e.fontWeight);
            e.ellipsis && this.textContainer.setEllipsis(e.ellipsis);
            isNaN(e.padding) || this.textContainer.setPadding(e.padding);
            isNaN(e.paddingLeft) || this.textContainer.setPaddingLeft(e.paddingLeft);
            isNaN(e.paddingRight) || this.textContainer.setPaddingRight(e.paddingRight);
            isNaN(e.paddingTop) || this.textContainer.setPaddingTop(e.paddingTop);
            isNaN(e.paddingBottom) || this.textContainer.setPaddingBottom(e.paddingBottom);
            e.textEvent && this.textContainer.addEventListener(G.EVENT.LINK, e.textEvent);
            e.textShadow && this.textContainer.setTextShadow(e.textShadow[0], e.textShadow[1], e.textShadow[2], e.textShadow[3])
        }
        this.countdownId = -1;
        if (this.countdown > 0) {
            this.countdownContainer = G.Container.create();
            if (d)
                if (d.posPageName)
                    this.countdownContainer.setPosByName(d.posPageName, d.numPosName, d.numParentPosName);
                else if (!isNaN(d.numX) || !isNaN(d.numY)) {
                    if (isNaN(d.numX))
                        d.numX = 0;
                    if (isNaN(d.numY))
                        d.numY = 0;
                    this.countdownContainer.setX(d.numX);
                    this.countdownContainer.setY(d.numY)
                } else {
                    this.countdownContainer.setX(this.okBtn.x + this.okBtn.getWidth() - 10);
                    this.countdownContainer.setY(this.okBtn.y + 10)
                }
            this.addChild(this.countdownContainer);
            this.launchCountdown()
        }
        if (this.countdownContainer) {
            if (!isNaN(d.numWidth) || !isNaN(d.numHeight)) {
                if (isNaN(d.numWidth))
                    d.numWidth = 0;
                if (isNaN(d.numHeight))
                    d.numHeight = 0;
                this.countdownContainer.setWidth(d.numWidth);
                this.countdownContainer.setHeight(d.numHeight)
            } else {
                this.countdownContainer.setWidth(40);
                this.countdownContainer.setHeight(40)
            }
            this.countdownContainer.addEventListener(G.EVENT.CHOOSE, 
            U.delegate(this.okBtn.callback, this.okBtn))
        }
        this.addChild(this.bg);
        this.addChild(this.okBtn);
        this.addChild(this.textContainer);
        this.setWidth(this.bg.getWidth());
        this.setHeight(this.bg.getHeight())
    },destroy: function() {
        clearInterval(this.countdownId);
        this._super(arguments);
        this.okBtn = null;
        this.parent && this.parent.removeChild(this)
    },launchCountdown: function() {
        clearInterval(this.countdownId);
        this.countdown = this.COUNTDOWN;
        this.countdownId = setInterval(U.delegate(this.counting, this), 1E3);
        this.counting()
    },
    counting: function() {
        if (this.countdown <= 0) {
            clearInterval(this.countdownId);
            if (typeof this.text != "string" && this.text.length && this.text.length > 0) {
                this.setText(this.text[0]);
                this.text.splice(0, 1);
                this.launchCountdown()
            } else {
                this.onOk && this.onOk(null, this.okBtn);
                this.popup && this.popup.hide(this);
                this.destroy()
            }
        } else {
            this.onCounting && this.onCounting(this.countdown);
            this.countdown--;
            this.countdownContainer.setNumber(this.countdown, this.countdownStyle.slicePreName, this.countdownStyle.spacing, this.countdownStyle.offsetX)
        }
    },
    setText: function(a) {
        this.textContainer.setText(a)
    }});
G.ConfirmV = G.Container.getClass().extend({init: function(a) {
        this.keyNamePre = "G.ConfirmV";
        this._super(arguments);
        this.text = "";
        var b = null, c = null, d = null, e = null, f = null;
        if (a) {
            this.onOk = a.onOk ? a.onOk : null;
            this.onCancel = a.onCancel ? a.onCancel : null;
            this.text = a.text ? a.text : "";
            if (b = a.skin)
                c = b.bg;
            var g = a.style;
            if (g) {
                d = g.okBtn;
                e = g.cancelBtn;
                f = g.text
            }
            this.popup = a.popup ? a.popup : A.popup
        }
        if (c)
            this.bg = G.Bitmap.create({slice: G.getSlice(c)});
        else {
            this.bg = G.Container.create({width: 300,height: 300});
            this.bg.setBorder()
        }
        this.okBtn = 
        G.Button.create({imgUp: G.getSlice(b.okBtn.imgUp),imgDown: G.getSlice(b.okBtn.imgDown),callback: U.delegate(function(a, b) {
                this.onOk && this.onOk(a, b);
                if (typeof this.text != "string" && this.text.length && this.text.length > 0) {
                    this.setText(this.text[0]);
                    this.text.splice(0, 1)
                } else {
                    this.popup && this.popup.hide(this);
                    this.destroy()
                }
            }, this)});
        if (d)
            if (d.posPageName)
                this.okBtn.setPosByName(d.posPageName, d.posName, d.parentPosName);
            else if (!isNaN(d.x) || !isNaN(d.y)) {
                if (isNaN(d.x))
                    d.x = 0;
                if (isNaN(d.y))
                    d.y = 0;
                this.okBtn.setX(d.x);
                this.okBtn.setY(d.y)
            } else {
                this.okBtn.setX(this.bg.getWidth() - this.okBtn.getWidth() >> 1);
                this.okBtn.setY(this.bg.getHeight() - this.okBtn.getHeight() - 10)
            }
        this.cancelBtn = G.Button.create({imgUp: G.getSlice(b.cancelBtn.imgUp),imgDown: G.getSlice(b.cancelBtn.imgDown),callback: U.delegate(function(a, b) {
                this.onCancel && this.onCancel(a, b);
                this.popup && this.popup.hide(this);
                this.destroy()
            }, this)});
        if (e)
            if (e.posPageName)
                this.cancelBtn.setPosByName(e.posPageName, e.posName, e.parentPosName);
            else if (!isNaN(e.x) || !isNaN(e.y)) {
                if (isNaN(e.x))
                    e.x = 
                    0;
                if (isNaN(e.y))
                    e.y = 0;
                this.cancelBtn.setX(e.x);
                this.cancelBtn.setY(e.y)
            } else {
                this.cancelBtn.setX(this.cancelBtn.getX() + this.cancelBtn.getWidth() + 10);
                this.cancelBtn.setY(this.cancelBtn.getY())
            }
        this.textContainer = null;
        if (typeof this.text != "string" && this.text.length && this.text.length > 0) {
            this.textContainer = G.Text.create({text: this.text[0]});
            this.text.splice(0, 1)
        } else
            this.textContainer = G.Text.create({text: this.text});
        if (f) {
            if (f.posPageName)
                this.textContainer.setPosByName(f.posPageName, f.posName, f.parentPosName);
            else if (!isNaN(f.x) || !isNaN(f.y)) {
                if (isNaN(f.x))
                    f.x = 0;
                if (isNaN(f.y))
                    f.y = 0;
                this.textContainer.setX(f.x);
                this.textContainer.setY(f.y)
            } else {
                this.textContainer.setX(this.bg.getWidth() - this.textContainer.getWidth() >> 1);
                this.textContainer.setY(this.bg.getHeight() - this.textContainer.getHeight() - 10)
            }
            isNaN(f.width) || this.textContainer.setWidth(f.width);
            isNaN(f.height) || this.textContainer.setHeight(f.height);
            f.textAlign && this.textContainer.setTextAlign(f.textAlign);
            isNaN(f.fontSize) || this.textContainer.setFontSize(f.fontSize);
            f.color && this.textContainer.setColor(f.color);
            isNaN(f.lineHeight) || this.textContainer.setLineHeight(f.lineHeight);
            f.verticalAlign && this.textContainer.setVerticalAlign(f.verticalAlign);
            isNaN(f.lineSpacing) || this.textContainer.setLineSpacing(f.lineSpacing);
            f.fontWeight && this.textContainer.setFontWeight(f.fontWeight);
            f.ellipsis && this.textContainer.setEllipsis(f.ellipsis);
            isNaN(f.padding) || this.textContainer.setPadding(f.padding);
            isNaN(f.paddingLeft) || this.textContainer.setPaddingLeft(f.paddingLeft);
            isNaN(f.paddingRight) || this.textContainer.setPaddingRight(f.paddingRight);
            isNaN(f.paddingTop) || this.textContainer.setPaddingTop(f.paddingTop);
            isNaN(f.paddingBottom) || this.textContainer.setPaddingBottom(f.paddingBottom);
            f.textEvent && this.textContainer.addEventListener(G.EVENT.LINK, f.textEvent);
            f.textShadow && this.textContainer.setTextShadow(f.textShadow[0], f.textShadow[1], f.textShadow[2], f.textShadow[3])
        }
        this.addChild(this.bg);
        this.addChild(this.okBtn);
        this.addChild(this.cancelBtn);
        this.addChild(this.textContainer);
        this.setWidth(this.bg.getWidth());
        this.setHeight(this.bg.getHeight())
    },destroy: function() {
        this._super(arguments);
        this.cancelBtn = this.okBtn = null;
        this.parent && this.parent.removeChild(this)
    },setText: function(a) {
        this.textContainer.setText(a)
    }});
G.RequestLoadingV = G.Container.getClass().extend({init: function(a) {
        this.keyNamePre = "G.RequestLoadingV";
        this._super(arguments);
        this._dir = 1;
        this._playing = false;
        this.initUI(a)
    },initUI: function(a) {
        if (a && a.dir == -1)
            this._dir = a.dir;
        var b = null;
        if (a && a.skin) {
            b = G.Image.create({slice: G.getSlice(a.skin)});
            b.setOrigin(b.getWidth() >> 1, b.getHeight() >> 1);
            this.setUI(b);
            this.addChild(b);
            this.ui = b
        }
        if (!b) {
            var c = new Image;
            c.src = G.RequestLoadingV.DEFAULT_UI;
            c.onload = U.delegate(function() {
                b = G.Image.create({slice: G.toSlice(c)});
                b.setOrigin(b.getWidth() >> 1, b.getHeight() >> 1);
                this.setUI(b);
                this.addChild(b);
                this.ui = b;
                this.play()
            }, this)
        }
    },setUI: function() {
    },play: function() {
        if (!this._playing) {
            this._playing = true;
            this.ui && this.ui.to({rotation: 360 * this._dir}, {loop: true,time: 1})
        }
        this.ui.resumeTo()
    },stop: function() {
        this.ui.pauseTo()
    }});
G.RequestLoadingV.DEFAULT_UI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAYAAACP3YV9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAH5RJREFUeNrsfQmMXdd53nfu+pZ5s++kuIgUKZHaLNlw4iUlA0eVErtKgohNgtaoCsNKaylo1LpuYDceGwGcxIjjynUD2TDsukgDS3EbxI7tNDKkwoaSVpItyR2aoobkcJ3hcNa3v7udfv+5b7Rv82Y4M4+ZQ13dN/fed9+95zvfv53/nKO01tgq7V+srSrYAnKrbAG5VbaA3CpbQG4BuVW2gNwqW0BulS0gt4DcKm1anFceUEq16atohTEo0zhHoPY2YPnD0Dj68qvGL/DY+5DwuOb1mm/cljHKV4ZW1asObHogDWD2rp1w/Bm4Kg/PVnBtD44VwYk1LB1BeTZUEPNihxv3VnMfKiS2hSRKEHsx4shBFPiIKkuIuoqIx8cR42ECvckBbk8gH9L2rgpcK4CfqyFj2cglFjKuDS/R8JUNRyVwkhg2z10VmxcjcAkSIpLw2tgigDwW85pEW4j42jMEtEZOhqyBUDf38BFEcwgbNYSTQIRPEli1+UBtHyDHtEXWed1ARteRJxgFN0aeZ3KxjayKsFNZuJr8HKai7+TxUYKSULgmPEbuIearRDoRILgXUDQififkkQiy1wh4fiaxUSbQF+IYM6yO82R1lX83+C8QYBsxwolhfufI5mHq5geS7Lt1AX6YoCPvojNW6NYhuojEAM/+LB/vaj7xVXxKn0BosksstoSvIf+EbYZ5OgXVgAeVgmmAhAEwItiBMJDXBrxBg9c3eK7B43UCeolAnubFJx2NpRrPU0Q3GmebLB3j/TYY0M0L5Jh2Dg0ggxw6+Fc3dVi/jtFb0zhEoN7Bp9ohT5qYt5AHTfeseP5nNgOmsJGfX87IVJQKoJHSKaCJIqApSwOytMGrAm2jzluazdao81yN183rABNljdNOiCr1bMOI3QP8/gYydPMBSRH6gRFkSh46HRs9VGoD3AaDBL9mWbiFV3QlIhfJqTC1MZXhnnqRgZYwsClO3yqQLxyDATRsMjfQwlBhJ5nJv9mOUCVcNS2fY5wuARO5AKVZAnqx0mwMYyr5BwykVoe+Cr/goyMO0Zu4GIwjjPDzbxKcn2ElZmJWTyAAxvKchoUCYPKCLkz38ZoBab3wOTD6k6KWbK3zHg0DKDfZ87nOFcs46WdRjuYRbIS4fSVuzkYZMocOINcVo4cidJCVtY37O2zgLuXBJyNVmVUqAC6LTyNV0/36FGXatMVfdJoS3ddi+fJxKDm2dXZRemicirpwbnQJwYUH2QCmyNkNYOeGAHnXQ9qLaijEDfTTWtwWhrjFd3BfzsIAK0oVA6ASQIk4VSlwy9uGhr9oNYt/6rLGjASwEjmEq3JUB+UuTAwVUbwobB7TGyJq1xXIn/2cztJ16PYKGKzXsYOt+1c6fNzFmvIIHhZqULEwcFmMNj9umnimsJQ7IuhIEILWrU+/NR6ysSdycJ6XzFBvsrWSmQ+r+MoDkrbkbf+NojSDPrbi0UYDBx0L97kODlIH4hJfvhY2FYx+EcDNHGMiVBZdEpsP6lLwepQqg3mfn31M4yANpYM8s47MtNYDxH/yV+gYymDQ1dhFUfqOrIM/yHq4vkYP7swirErIVt7kYNsEPsV/jYy4tcg9EhSup1C4OoNhZAnnCGyxBa4YRv7z/4Wcr9BfV9hJB/v2goN7ycbc2SVgrvYS4DTaMnhNBBWtWIv6nlIWth/B2zWIvmIJ8/PG0jWyJWlrRtKwyWYD9DUi7Ihs3N7l4X6CmJ+Yh5qrGpeiXbtaXlmLyhapQgljO7AyIbyMjS7kIRZAM17RpkD+DkEc7kAfdeDOKMKtvT7u5yu5z80C5eClohe4InLdKdvYSKVxWol0oXE/BBMbtpvda+0H5H3f0X7YTR8xwvYgwdt6O/B7YhSMz9CoiV7A7/K4f9oYSuK9SLw1Nvs0cG7ir7oZykvS69b8MQyYETfbuFBWz9XUmGOXn5VrDuTYo9rxRayEGK0nuGkwh0+JmHmWTlZjLQ1yYx2lAfJmNKYhkRcerPB4GbJpbgol+gwl81nzM4+zSsvcy3U1CZabIHoaDTIAr/bRpC/UgOlCFbpZxw9cfltkTX+AOtFeaqCTemKY+mJPwcNHCWr3UxeAerQWBrDx5bQJzVmmD1GEdABlwDCfNcz+DFkYkRWhhOt0uklILk4khKfZ0DRdh7SnxMRtm0zWVjP01zzecslkTFMyrWI7Ldtz7QTk7lHkvAAD9RA7HRv39uaw58dTdPTra+PIIBWLpgtKpUySbqdz/DxB53yC2ug0/btLwlDbQhSHSCyPoCR0+5QB38AsYs+lCEwijBC4Xt5nkAD387NrDLBmTHeZpa+FJ++vk9exRUU0hHxniQ3kuJ0rXn4zYM2AfIB6schKob0tevGDNHTec75kXmJtAITpS1xmX5G1+xOC9zc8djYRcWmh5irUGmRm7CAibLFLV72kjb+nXxJDRSTh8SwtTI1ZinvHduFEAXKujT108vcS+Jz1EkCTZu/ZWyn0kyEpJSrDrQZdWuR3/9AE4zc/kCJSyx3oZGWMUITeNNKBXxZZ9uSFVcFnIjwiGhMYESk9EEuslkfInkdZ0VO2jaWggXJso+KVUa9XEI6/1W4lcdbptG+vwckkcC0fXhBgzo/xTMwz/I3r6SN2Sqg+sYzolcwDuotvYmzZL+YJ0bCLywvU25LkNXZ5e0bWBMiDA8iyVffH9Be7ffzbjAPnsUnW6CrcYJWqROmSkl586cF/gtT478JAVssswVskwtXxcTL0S2rlLT4FOzlnurF0XRK6tnfCDQN4qguVbIKzUYyrHAfX80pP+Cm68/XYKTqV76vZuJLIRVwKEZanUMQCr/9SG4jWB5/UbrmCHuob6Yr6DYrU0eNzqxCpy8ZME0TW3Cy582X+/WTiYFrXsDCfRenCIwRwzQLTSlIjo3PC5rt0sPe9qIc1eLobtXIVF7I+DjppThCaHdkvV48EMCJrRR/zRFzVCGfnsIg+6tgvrE8WwaqBrJaQ9zMYKAbYOZzHHaLMnp5enU40lqYyLsU51sIfEa7naPRO04hamjiKWksMfKuFjWPiYQLwkI52HUXo9CIIFKWBwg4fOGDHRmFLeqW8KuJU7GorRhJaiOnH1KdP0OAqigO2fqkgqwJybFx7mSK6a8A2mg/3dWbg//25V0RuVmbVJGn7pmGj8GO6EJ+nUjpFFs6Uu7A0ebcYhOvUC39ExZM0TPFhxKO3Iuqp4GTZQ7EDuJHWsaReak0wRTBL/2QSIq4pVE9XMY0OHu1A3Da9H/488tQJA3Te9pON14uBI45/K4aNWs4CSN2Lo3QjPk9ReqJRwpQexcLk3aq+/olO/D2y/0IPGpUiqgRrpp7gR4RHmmoovipBDSVPNnRRPi36e4PyeKzVsLHDQzdFyTbS+oNZF/bTUybHZjVsFJF6gbd4gAryZCPA9PEyFsePqAAbWQw7Cd4S6pGNuVDjlBI3iIDSig1rCUoXF3CGHAwxjg1J92gZyEwNWTrQ/eUYewdzOCDht6emWrZQk2YEZoGt/DPkwTGUMXPMpaYZUxE2QyE4k+M0vjw06hZO0h86T5FaJ5KLs7M42VUnsJLEvM6ZAasCUvxGVm+B1uUQdcU/Y+u0pVejRTamGQGSQ6rxJ/TZfhrUMV312f7vUSE2UyFIk3mEQQXB1AWcrDmYmp3H8e6dqIu3lea5bkxpCcjt2+G5CXro8A4UfFwbEsDHz7bmahgglWHjN2jYPEk35kKtGwsTv60a2IyFYpauVTg/gtpx4MRsN0E8vfHZ5y1ZrV1Aljqsj9bp4U4f/umlli3V5fDbMTr33yW7z9sFzE9+UNWxmYsB7RVG0QaXlQM5pi06y4XIQw/12jtCCpNjs62xsRm9qRHABymez1I8zD17kn7ipi+bb3TWikXrv9hJseqiiwD2+BZ2iVg9vdiipaqNbvxrZeEE/5z5yQyN9w1K8G33smJGetvhWwm6SnXcMlhARlIZw1aqPg2KUyhTpGpMUbQuEcTgSq3o7zyv/c4YXtFOezn5Wb97P+pKrY1Bt2Iguxxk6SsU+DjvFDaeWWpROCnTG//DJMHFMMDcTx9vB5HaWpEuPu2gJ3TQXdDw5VhHN42lEuaf1Hrp7WsA5gpFq1ZRAx31EAUCMSxMnKm0ZOGY0YwE8fsUrbOWh9JG+V+Xu0inQqMLXZdK2EaD8LpihG8Wcvh9Wuc3LixgsDSJvBkMuJ5AHhqDbWvk6C/mqdeGBMi5FnlEMH/CXz9Ph3p+/BLqVyKIhx7VzmSMzkqA0UoN+ybm8Vla+Xt6M/gl1uE9M3XsZP0NfP1ZSSRYHZgrAnLXP4ITWsiSkbuIhDtfbfl3RT8+TTYu2psperOWII5pZ08DneEiRkKFayoh7icj94hNMbkEdWYRh88t4bZ5glmpYuDBJ5FdDZgrAlL66OIA2YY2fY9YWoXLnlh4huKlWLFRvdJAlMjXwIE0Y2Khir3VGn5rtoq3y7lvHQf+6phpyXbOxT2NEO+pJNhBkdQ/ZsBcByCDMvxIwddJ6nZUWu2u0rhEy3eOv16Z/A7CKwrFVN91sJEOVhrYDRsfrsf4eWn4Pzid9g49OilWrAEzS1vj35EY755exE6ngr7feVxnLzuQ4n3IUDI+VF70Y6lFIPmm0vVcldkzriwjR6tDDyO/WMFgNcRuG/hQEOGOIiXXD8+83J74fzPAt4+bUWh5gvC7dL/eNd3AjsYM+mWoxWUF0o7hBglcug3dwshV5OTM8av1enQlGTlaHfwi8tUlDNQs7LQd3N6IcKdY9RL5il8jFjS5CHxvghVBL4Dnf7dYwS3lBNsLPnruoMty2YCkm2CRkTaB7BQQGy2aKPzqOemcDZMrRaxqdeNnkXMt9JNZu9DAL9Qi/JYMep19EwtgkU35+ydNXXZlHXy6EuHmUgPbO8rokdHdlwXIRh12qGEJiGHSYkQnLZK2H2UcXBHW6vbPIRN76LM0ruKfh+sa9y3V4b3Vbj0ZD/NEmo3fXfDwH6oR9i1VsY336L71Qe1eDh0p4lRFsUn9W1UTthzEuW60vX7c+4D2+7LodR1sTxR+nhL0/kRm61p5vRq9uVDDjpyDTwQa19QDbPMT9LwVMFfGSG4UrSkbr8g4zMpB9G308OM2AneDbeFemqLZ1YwakTTS+Rr2816fCOh/hjZGExfdeBMwV+ZHJoaJCfWADlfDSL6ojqHiUvsOdF0G0VIEUeNGVvzH+V7dZqDBKovoTYrZg7zRJ2iPXIMAo3sbbwzmioCsacSBTI0pQK6Gkc0BoY24TSf+ZYXSme9yLIywsmVowcf5JkMyzAR6LaBMR6/RdbmBQH6ct9uT9TF80EYBd2l71UCShDGZmDQSLEarY2Sf0nBopdltB+KHtXttiE5W8DC362wbn6BTP8L3kXdZ84nDyPibuPsoXb89XoThm9/12mA6r9XaDkbwwxoy2Tx8mQ/V1Sng1QZGshYGtUy4twoI+NLbabXKtnjDf9HzMuCFt2vUFBq2pBleQjC+Sfsm917PunXh2QkyBO1DfJdB6ZLTSTrOsjnFjFpLpcH7/wy320mesyoD7+BBU/vxGwJ5qzAvRtbOoVfGDioLvaRiXsSGRQuKjNytbORW04/PhxJGXuPKtCY2FiTdg01l0VX8bGGhjM3rlkTzUO6IiU79a7bug2gONkI6mRJ0KuXWXPdbFu5h45litf/pa51/zY7l2AXxw+/xaW5ghWdkEgd+ttnq7EjBg6RCrk67Xc17/kuCWDdDxi0T4anaGhfpg30MaebApi0h6Pwr/A1p8X9jhR4abgUe7qLBM8T3OcB329cKmM2GUKIU/AGllQzYLTdnrSyztcyzvuZfz2F73QyB2MaX6OD+V95858t+afm8XhUjZWTwENKJAmXUlZlikw/9BT9GZTPH7ZxeaL+ChcTHD1kFHZGNvGvB5bOPki37+G77WqWjaxt/8gy//78jjecsAU6kQIiQErBkuyhR5UXjI68epvcqIJ/i9raQboZGmQ/2+6Tmf6aI9S9DnaiXbjL2UWZbpFLXUlmbFciJeRNWLB48gPLMOcwmeahBD15cQ+Aougga/a0IVvmKTJ9FSXeWzftYrY6nic788vmlAHGGhuZEkZwsvjoR+tWMvEeFC1/VpY4qZhIPz7FiP8tv/XtKUm+NYUzTISXlQ+Eh/sb/SCxcapRQmvgYNm8SVnOA7PhLDhW+om22dJEywxSvfbpFNsrGe5wgq+cFxPGPqPLrfuGT+s3dDxn5dKmKeSvCWd74+2xlf9ycLWPtSpoKKdtfxDG+wQc5UwVmn3tSOprbaC0OugK5KgrEQIIDt2F5euAVFt82c/SIOfo8gaxiYGX1/bomy8WPokoLdTZxcJrV+ggPfT7jrg2Y6Vy6BsQfsXn/OZ/+VFFh5uQjVO5t1j85+j74sUPLXqGfABzQLVqsOdc0gVkaUbOOi8r40ZVZ7tYbeXvjH0ElDnAp1Jik4fNIoPHlgZyZEGgtwHyG+uAz3E8mlfYEUdjYW0NBpZMG36Zl/p4WgKSxZMQqGX3Ks1Ck8C6vNFHbejPXXcAMSrjkOjjla3y7GuKhkQ6aay1qTGkENAokg+4PyfRTdQvT4/n2TIc8eAhZnTHdV7L2yG1quT5XCGWnn4IZpQtAFWn4rTjJ9C14g0o/VyOYMcH0TYv5ejXC/9zbCwzmVxRqQk8GyDi4ZKcgTlBQXziOTTh87q1EeB7QPg3BbrbLETLxl8SP1C9a4SsqXRlj5IQ5Cz+wPcgAjPplADK11J7qQTksYcbP4CRZ9bVSA3+9rw+4tv/Nv56lbbyzy4A4F0T4j3Rsn6chdcHy+dBtCKIsMkPDpINO2SAb5I2WZYC0Uhd5ZaXgpfqRjWCCNsh8EmPxsdMrt0XeenzmiIp/2I9iV4zpvIsT/OJXLpbw97t7gLePvv7XhimGrxswFtlCI8Ynsxk8k8/g/KUcFp9qRxDHtLV3GnnXxQDrYAclzYekD9KI1RbMnN5saq3WY/wfNoq5mE5/KwOZVhZoI5ihiyLl+XSHjxNZD398ah7HBMw797/aCLp+0EymJFNXURrj0wUfT2c8nA3rmE8nd2i3otWNeWQ7XFqpMbYTt3/KbRcBtHQLbofU11CHieZUej08atuYK6K1MTArjpg+TDDHL6HIljPlK5zoyWHs+CyO99Ka/dXrgGWr9hevAfYQ4EqEsNjAf8pb+JHn48zcOcw/1o4gkolDn0Uu7kRfonGVrfB+lepGGy0GyofyKRvZAB5zbMzoEAt/dxSNdQHShPEoEstlGikUkVkfzw/k8ann53CCe/z6DcBv3pCKjFjWoIrwxdE8/jZr4UyFLe7v7le1dgRxfxb5foLoJriKlfZeKsNffwHEFrqtJBy3s9vUUUh//Xtk48VqtTWx2jKQTWYGc0tYpG95vuDg+LYufPp8EbPCyBuGTGuL2dq+clUX/pb+4pm5ELPf+gDaFsRsE0T6ix9QkpuzPM11iwGAXQQx65osgKeock6S5bPFs63Xz6o6owTMC/NY8PI41+PjeE8eH69HqIhIHSrgmf39+E5XB05lQ8w8fJf4RisJvclCSrJ6K5uBWXZBr39+z4PavbkLnW63sU53ErK7+CB380HyKo1TW610IYsVv6fXuBw12g9/RlU0VQ5QfGwVg5lWPRedgHnwq3px9BacG81Cuw4+dnQW/5gG0Lf5oJNk5cxHfkwQ71whiGOw934BdrQzrSjnAeiJYb1Oi3Fqteur8Dvr6Iw8MjHGNnLvTlm7K0kHqjovdTdW+jDig4vLMVvDY915HG+QjScXVjeYac1Wq/vWkzrXM4hulQ5MkeQq3emjPFvF0uHdKzFuUhBlys1KAK/fx+7EQzkO+N40nPpXMidrC0VySJcayMo87HyPQcfFbv7avRSn+4iY5KtKTMtRy0Cq5rIXzWl6pfreaBUhUT2HdgONEHM05X/bTvBsVMfpP7pTlVbU1C7XanXvvxW1704g7s6k4lpe6GwRyR17V+jc3gVrF59rUcEf7MU1nvTxhdimHZOldtIaRJ0me1B4QEdrt1yuVgcfgtuYRiZx0JEP0WPipxrv5C98kJ+7zQqyivWljavRcnn3Dt7IQtyw8DWK2DM8NPu4t3rbYc2AVOmC0qub5Eiyw94LZ6kKvz+D3V6AbmrHrCwophxs63TRz4qe6q3RFyUrr15AUH8QYc+UjsYP0LNbEagp80dH4PXYtL8X0EFx10kru5tnrqaj/xuWhWt4R0k4NuJUr8K4kXLzMMCGjvkqnmBrf4z3nspnsfTYu1Y/0HczLc1rmYY1AO/qBLt912Rwd7gE0orgyzRpWpb+495KENGJPk0ReLYng0bc4N8OooxMtdlJa7kObVeprzuhwyIrnlb0cjK05NL6ERw7Cye2kLFjApUgb3soEMRbyb6f44XXcJNcpQxBFFHqGgs1XU/SSldEXJlolY6GD+w3Y0oXygnuzWuM871O/5tDWFItrKq+ORYCfS0QR0xrd3YF2O7byFs2ny0wCV9ScRa56kourFiLsjAKK+ymvhxu4vk5Vv5F28GFUCHwZbEW0Z5s+aHYunkotwTLsk06iVXw6MI5ZJeC1wRrH797A88dIAMHVTpuQ46/AKCSBr+K9i09Re/fbzoOGo6Dz+UjTGYcXHzmKCrq8NoYbpsASFNFFo7B2XcDhh2KMhXAsRxYCVu5lZr3ykpMm5dl/jyV6ioBQyq40/Gwh9VhxQ7qdkQ7wsKCky7caZtrbf6L2Qh4LBGG2WYVgVFuu3hMVk+XHFWzR3p/j41B7m9AXM3bSZTrl681wfF4qY6HY43HcwoXaLgtfWkNY83OhoMoy4DOwd62HX1OlWKU1Z64BChpgme/3OmNCJiljb5yNQygnk4BsmVhFjlG2joiipWs7Zhm7DnKNimd8r6eTGSh5HvpcrteE0SZgF7u6xjwLKzJgksSttxWAC7W8C02zD/vdnE2yWLuX+1f20G+GwukrBk1AmsoQRd1hidL94nOsVNR9sZMkIRgSdPXBkxXUiyloz2RPlphrjJikbwmkIk55xhRmR43m6z5iBRsR6BTSTNmukZmwi/soW4smHEcTyQxvlYoYJLq4lLhWfqM166tL+xsKBsPQPWcRK6Qg+faqSHh2GaFHLWSIQmqKX7FqhQQKUa9F9iXpEDpFDSnCaDT1H2WXsOs8Jfe6DB9qP19SOohnihF+IPuHF0n6vLszSgdedvaZ0NYG8rGBfj0pVyzsltzjjYZbtd28dhlRarSudl/bif0vj7EfLfvFUN8pjuLE9TX0/UKikfU5Ulp2VAg+xepD73mym6W0UttOV6y+dCaBpaW7ru9PWYxtb84uYg/7fbwvOXSok6weM/bL19H+saJ1kMvAS0D43FHbQjgMhPp6Ot3boPqcBHSV/w62ffNAepE38HM6DRKhw9f3tm9No6RjzXT3iWXmvZbIMPSkvZY3FU1RalqLoI23IHkvTtMWst5SWdpaPxZIYMTVMLT7jEULzeIG8vIMWD2STS2vQ2erNloyQQTdAycCFpvYgYuyxGCmIgpfN0A1K4e0G/CE1NFfDFj44TnYYqidGHqVlQoTtdlIuGNBFLTh4zPH0dl+BZaqxYcWyOWdR7pE8r6U3qzgdjssxJdmIx2Atf20ae1UI5i/OV0Hd8s2DjfmcPFrhqW7j68jqsGbaz7wZd8mB7eQwj7jmJpoQM60wc3W6UvGCF2cgQ1NsJWVlndkLL8u1ZTDzoK8WAHsL0LFi1STdH5VBThyzWFUwUP04RunsdLdx9e/+zADY7sEMwjOhl/iB+Poogs6rt99HkJnCg0fp4sVyRRmETWcFwvjqpm30FzeV5ZXCYZysMaLqS9+3Qpno8TfKMa4Omcg2k6+rPlCpZOF1Efu31jMuY3Qaw1BZNiFngfGmERM/MNFAc7MUxAXWWbmKtlx3TeLRN6kyX/dHPNkLXTewnBs144ZtZYdhzEAzm6SRlYHj/XYpxfquChDh9P28DFjIU528HiSAbVe96zsTm6m6cby3hiWuFTsHexgVUG4HRWkXMzGPJcbGPFdUgiMJmZY5vP8soMKz5j+gubsVIJgJuwW2wC485yF5RWzfCcTkN2phclMUF00+PCV7ZMjwqlKN0FTRfC7s4RPPq1FKdBPcHzvoXvUdT/1Lcxy2/N09BZnLRQ/e4vSsf5+g8D3JzdWC+2Inm6aHKMDCUDWGmyQnmdDuaFxMVA3sKQlWBUpwtZyyLYCdLQdqxkNR/9ggtjPkkvFv+XmH+W6WYxOldENa+PXGWADQiek+EngmXL0vNyjghP0pV4quGQfQoXI41FtpLFqoviwgYC2B6MfJVl21wHuWIq2qW16Eq2AGuwJyvdUC6GCDK5iw6C6uu0S8qzhInWi4yUWCu/Kz1KIqpdsswVEG3ppKbo5nHbtjAda1zi905aEY5mfCy49HIpXkuWT7W4gGrgof7wERl6vvEAvgq3TQ3kK0Tu3l7YuQacooBqp6DKkvMEIOsm6GeF99kJ8ok2YlO6o8RgMiKU1HUEPOkhIQNtGY5oOThPxtao66bJVen0DehO1Il+TRbgpl6u5itofC1P8I5srmF/7Qnky18hTZUkqFU/BdbPkV2hmTjfdhvcfFi0Kq3ESbMCRFw68ndz7zWntiDKScZF5AQIA1kKuIGG9tA4n0FoRgxv4lWBrgAgX0cEk2EHuVV2wooWCGAeaoQHX5mz052BcuvQ8wXo3piHA8RPTcninaJb22fugjcFcqu0Z7G2qmALyK2yBeRW2QJyq2wBuQXkVtkCcqtsAblVtoD8h1f+vwADAODF1Vxm9jXXAAAAAElFTkSuQmCC";
G.Pager = Class.extend({init: function(a, b, c, d) {
        d || (d = []);
        this._itemDatas = d;
        this._itemViews = c;
        this._numPerPage = c.length;
        this._totalNum = d.length;
        this._totalPageNum = Math.ceil(this._totalNum / this._numPerPage);
        this._curPageNum = 1;
        this._preBtn = a;
        this._nextBtn = b;
        this._preBtn.callback = U.delegate(this._prePage, this);
        this._nextBtn.callback = U.delegate(this._nextPage, this)
    },setCurrentPage: function(a) {
        a < 1 && (a = 1);
        if (a > this._totalPageNum)
            a = this._totalPageNum;
        this._curPageNum = a;
        this._repaint()
    },getCurrentPage: function() {
        return this._curPageNum
    },
    _repaint: function() {
        var a = this._itemDatas.slice((this._curPageNum - 1) * this._numPerPage, this._curPageNum * this._numPerPage);
        if (a)
            for (var b = 0; b < this._itemViews.length; b++)
                this._itemViews[b].setData(a[b]);
        if (this._totalPageNum == 1 || this._totalPageNum == 0) {
            this._curPageNum = 1;
            this._preBtn.disable();
            this._nextBtn.disable()
        } else if (this._curPageNum <= 1) {
            this._curPageNum = 1;
            this._preBtn.disable();
            this._nextBtn.enable()
        } else if (this._curPageNum >= this._totalPageNum) {
            this._curPageNum = this._totalPageNum;
            this._preBtn.enable();
            this._nextBtn.disable()
        } else {
            this._preBtn.enable();
            this._nextBtn.enable()
        }
    },_prePage: function() {
        this._curPageNum--;
        this._repaint()
    },_nextPage: function() {
        this._curPageNum++;
        this._repaint()
    }});
G.Stepper = Class.extend({init: function(a, b, c, d, e, f) {
        this._min = d;
        this._max = e;
        this._step = f;
        this._curNum = 1;
        this._textView = c;
        this._preBtn = a;
        this._nextBtn = b;
        this._preBtn.callback = U.delegate(this._pre, this);
        this._nextBtn.callback = U.delegate(this._next, this)
    },setCurrentNum: function(a) {
        this._curNum = a;
        this._repaint()
    },getCurrentNum: function() {
        return this._curNum
    },_repaint: function() {
        if (this._max == 0)
            this._curNum = 0;
        else if (this._curNum < this._min)
            this._curNum = this._max;
        else if (this._curNum > this._max)
            this._curNum = 
            this._min;
        this._textView.setText(this._curNum)
    },_pre: function() {
        this._curNum--;
        this._repaint()
    },_next: function() {
        this._curNum++;
        this._repaint()
    }});
G.Tab = Class.extend({init: function(a) {
        if (a.btns)
            this.btns = a.btns;
        this._curBtnIndex = null
    },addBtns: function(a) {
        this.btns = a
    },uncheckAll: function() {
        if (this.btns) {
            var a = this.btns, b, c;
            for (c in a) {
                b = a[c];
                typeof b != "function" && b.setChecked(false)
            }
        }
        this._curBtnIndex = null
    },select: function(a) {
        if (this.btns) {
            var b = this.btns[a];
            if (b) {
                this.uncheckAll();
                b.setChecked(true);
                this._curBtnIndex = a
            } else
                U.error("[Tab] no btn of this index: " + a)
        } else
            U.error("[Tab] btns is null")
    },getCurrentIndex: function() {
        return this._curBtnIndex
    }});
