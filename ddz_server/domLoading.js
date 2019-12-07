
/**
 * 资源加载器
 */
SourcesLoader={load:function(c,a,b,d){this.onStart=c?c:null;this.onProcess=a?a:null;this.onFinish=b?b:null;this.sourcesLength=0;this.sources=d?d:null;this.sourcesLoaded=0;this.sources?(this.onStart&&this.onStart(),this.preloadSources()):console.log("[SourcesLoader][Error] Empty sources array")},preloadSources:function(){for(var c in this.sources){var a=this.sources[c];if("function"!=typeof a){var b=a.toLowerCase();b.match(/(\.jpg)|(\.png)|(\.gif)|(\.bmp)$/i)?(b=new Image,b.onload=this.delegate(this._loadingSource,
         this,a),b.onerror=this.delegate(this._loadingSource,this,null),b.src=a):b.match(/(\.mp3)|(\.midi)|(\.mid)|(\.wav)|(\.wma)$/i)?(b=new Audio,b.addEventListener("canplaythrough",this.delegate(this._loadingSource,this,a),!1),b.src=a):(this.sourcesLoaded++,console.log("[SourcesLoader][Warn] Un-support file ext: "+b));this.sourcesLength++}}},_loadingSource:function(c){this.sourcesLoaded++;var a={};a.target=c;a.loaded=this.sourcesLoaded;a.total=this.sourcesLength;this.sourcesLoaded==this.sourcesLength?(this.onProcess&&
         this.onProcess(a),this.onFinish&&this.onFinish(a)):this.onProcess&&this.onProcess(a)},delegate:function(c,a,b){var d=a||window;if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(a,e);return c.apply(d,a)}}return function(){return c.apply(d,arguments)}}};


/*************************** 该页面的定义仅在页面版使用 ********************************/

A = window.A || {};

//是否竖屏, 包壳不依靠该参数, 包壳在window.open里设置参数即可
window.IS_PORTRAIT = false;

(function(){

    /**
     * 解析url
     */
    A.getQueryURL = function(str, locString) {
        var locString = locString || String(window.location.href);
        var rs = new RegExp("(^|)" + str + "=([^\&]*)(\&|$)", "gi").exec(locString), tmp;
        if (tmp = rs) {
            return "" + decodeURIComponent(tmp[2]);
        }
        return null;
    };
    
    //加载全局配置文件
    var globalUrl = A.getQueryURL("globalConfig");
    document.write('<script text="text/javascript" src="'+globalUrl+'">'+'</'+'script>');

    /**
     * 以dom创建主容器
     */
    var loadingBgRes, loadingAniRes, backBtnRes, loading, loadingBar, loadingAnimation, loadingProgress;
    A.buildDomUI = function(onFinish){
        A.ROOT = document.getElementById("root");
        A.ROOT.style.width = A.WIDTH + "px";
        A.ROOT.style.height = A.HEIGHT + "px";
        //用于loading的临时元素
        loading = document.getElementById("loading");
        loadingBar = document.getElementById("loadingBar");
        loadingAnimation = document.getElementById("loadingAnimation");
        loadingProgress = document.getElementById("loadingProgress");
        loadingTip = document.getElementById("loadingTip");
        loadingBgRes = A.RES["选区-底图.jpg"];
        loadingAniRes = A.RES["斗地主loading.jpg"];
        backBtnRes = A.RES["退出按钮.png"];
        loading.style.backgroundImage = "url(" + loadingBgRes + ")";
        loadingAnimation.style.background = "url(" + loadingAniRes + ")";
        SourcesLoader.load(null, null, onFinish, [loadingBgRes, loadingAniRes, backBtnRes]);
    };
    
    //加载资源, 并显示提示语和动画
    A.startDomLoading = function(onFinishCallback){
        showBackButton();
        showAnimation();
        showTip();
        
        //页面版的进度回调
        var onProcess = function(e){
            var p = Math.floor(e.loaded / e.total * 97);
            A.setLoadingProgress(p);
        };
        //页面版的完成回调
        var onFinish = function(){
        	A.setLoadingProgress(98);
        	onFinishCallback && onFinishCallback();
        };
        SourcesLoader.load(null, onProcess, onFinish, A.RES);
    };
    /**
     * 设置进度
     * @param percent 进度百分比，0-100
     * @param intro 显示说明的文字, 可选
     */
    A.setLoadingProgress = function(percent, intro) {
        if(intro){
        	loadingProgress.innerText = intro;
        }else if (loadingProgress) {
            loadingProgress.innerText = percent + '%';
        }
    };
    /**
     * 移除dom的loading界面
     */
    A.removeDomLoading = function(){
        if(animationTimer){
            clearInterval(animationTimer);
            animationTimer = null;
        }
        
        if(tipIntervalId){
            clearInterval(tipIntervalId);
            tipIntervalId = null;
        }

        loading.innerHTML = "";

        // 隐藏Web版加载界面
        loading.style.display = "none";
        loading = null;
        loadingBar = null;

        // 显示游戏界面
        A.ROOT.style.display = 'block';
    };
    

    //显示提示
    var tipIntervalId;
    var showTip = function() {
        var loadingTip = document.getElementById("loadingTip");
        var TIPS = [
            "我诅咒你一辈子买方便面没调料包！",
            "喝醉了我谁也不服,我就扶墙! ",
            "农夫三拳有点疼",
            "站的更高，才能尿的更远",
            "中国谁跑的最快？是曹操，因为说曹操曹操到",
            "只在火车站大排长龙时，才意识到是龙的传人",
            "在哪里跌倒 就在哪里躺下",
            "早起的鸟儿有虫吃，早起的虫儿被鸟吃！",
            "人生不能像做菜、把所有的料都准备好才下锅",
            "夏天就是不好，穷的时候我连西北风都没得喝"
        ];
        //初始化
        var lastId = Math.floor(Math.random() * TIPS.length);
        loadingTip.innerHTML = TIPS[lastId];
        //定时器
        tipIntervalId = setInterval(function() {
            var id = Math.floor(Math.random() * TIPS.length);
            if (id == lastId) {
                id = (id + 1) % TIPS.length;
            }
            lastId = id;
            loadingTip.innerHTML = TIPS[id];
        }, 6000);
    };
    //显示动画
    var animationTimer;
    var fw = 234;
    var fh = 144;
    var showAnimation = function() {
        //动画帧定义
        var animationPos = [
                            [0,0,fw,fh],
                            [fw,0,fw,fh],
                            [fw*2,0,fw,fh],
                            [fw*3,0,fw,fh],
                            [fw*4,0,fw,fh],
                            [fw*5,0,fw,fh]
                         ];
        loadingAnimation.style.backgroundPosition = - animationPos[0][0] + "px 0px";
        var now = 0;
        animationTimer = setInterval(function(){
            loadingAnimation.style.backgroundPosition = - animationPos[now][0]+"px 0px";
            now = ++now>animationPos.length-1?0:now;
        },100);
    };
    //显示后退按钮
    var showBackButton = function(){
        //返回按扭
        var v = document.createElement("div");
        v.style.position = "absolute";
        v.style.left = "865px";
        v.style.top = "476px";
        v.style.background = "url(" + backBtnRes + ") no-repeat 0px 0px";
        v.style.width = "73px";
        v.style.height = "69px";
        v.style.zIndex = "999";
        var onDown = function(){
        	v.style.backgroundPosition = "-" + v.style.width + " 0px";
        };
        var onUp = function(){
            v.style.backgroundPosition = "0px 0px";
        };
        v.addEventListener("mousedown", onDown);
        v.addEventListener("mouseup", onUp);
        v.addEventListener("touchstart", onDown);
        v.addEventListener("touchend", onUp);
        v.addEventListener("click", function() {
            A.removeLoading();
            //A.statLog(3, new Date().getTime() - A.BOOT_TIME);
            A.exitGame();
        });
        //添加到loading中
        loading.appendChild(v);
    };
})();