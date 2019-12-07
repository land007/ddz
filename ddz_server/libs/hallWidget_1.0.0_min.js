H = window.H || {};
H.widgets = H.widgets || {};
H.widgets.Config = {serverUrl: "",gameId: 0,getAvatarFunc: null,stageWidth: 960,stageHeight: 576,setInputStyle: function(a) {
        a.setColor("black");
        a.setBg("white");
        a.setBorder("black", 1);
        a.setBorderRadius(10);
        a.setFontSize(28);
        a.setHeight(53);
        a.setPaddingLeft(10);
        a.setPaddingRight(10)
    },INPUT_COLOR: "#000",INPUT_TIP_COLOR: "#999",ps: null,COLOR_YELLOW: "#ffff00",COLOR_ORANGE: "#f8b551",COLOR_BLUE: "#145394",COLOR_GAY: "#7d7d7d",COLOR_DARKGRAY: "#83a8cf",COLOR_WHITE: "#fff"};
H.widgets.Msg = {CONFIRM_COMMON: "该操作将会为您打开新窗口，您确定要继续吗？",ALERT_UID_EMPTY: "用户登录失败，用户名不能为空。",ALERT_PASSWORD_EMPTY: "用户登录失败，密码不能为空。",ALERT_BIND_UID_EMPTY: "用户绑定失败，用户名不能为空。",ALERT_BIND_PASSWORD_EMPTY: "用户绑定失败，密码不能为空。",ALERT_MONEY_NOT_ENOUGH: "您的U点余额不够支付购买,请充值。",ALERT_DEMO_ACTIVATE_TIP: "试玩用户暂无法使用该功能！\n想获得更多游戏权限，可在游戏结束后前往大厅激活账号！",ALERT_NO_LOGIN_TIP: "未登录提示",ALERT_ACTIVATE_BOUND: "激活成功，九游棋牌大厅悄悄塞给您%s欢乐豆，祝您游戏愉快！",ALERT_BIND_BOUND: "绑定成功，九游棋牌大厅悄悄塞给您%s欢乐豆，祝您游戏愉快！",BUY_GOODS_EXP_LIMIT: "该头像有效期最高为720天，您仍可以购买，但超过日期将不会继续积累。敬请留意！",
    BUY_SUCCESS: "购买成功。",BUY_FAIL: "购买失败，请重新购买！",ERROR_REQUEST_PAY: "打开充值失败",ERROR_REQUEST_HALL_CONFIG: "读取游戏配置失败",ACTIVATE_BONUS: "经检测，您曾经在大厅使用了游客账号，激活该账号可立即获得%s欢乐豆哦。现在就激活吗？",ACTIVATE_NO_BONUS: "经检测，您曾经在大厅使用了游客账号，为了您的账号安全，请先激活该账号再进行游戏？",UPDATE_NICK_INPUT_EMPTY: "请输入昵称（2-20个字符）",UPDATE_NICK_ERROR_400: "昵称违规，请重新输入",UPDATE_NICK_ERROR_TIMEOUT: "网络异常，请重新发送",U_COIN_NO_GET: "无法获取",PLACEHOLDER_UID: "UC账号/邮箱/手机号",EMPTY: ""};
H.widgets.Position = {"游戏大厅-商城": [{name: "按钮-商城",rect: [75, 94, 170, 38]}, {name: "按钮-我的物品",rect: [248, 94, 170, 38]}, {name: "按钮-充值",rect: [823, 94, 80, 37]}, {name: "按钮-U点",rect: [624, 99, 31, 29]}, {name: "U点文字",rect: [655, 102, 161, 26]}, {name: "背景框-分隔",rect: [0, 136, 960, 18]}, {name: "背景框02a",rect: [72, 156, 23, 101]}, {name: "背景框02b",rect: [483, 156, 28, 101]}, {name: "物品头像a",rect: [98, 167, 108, 87]}, {name: "物品名称a",rect: [236, 167, 221, 31]}, {name: "物品头像b",rect: [516, 167, 108, 90]}, {name: "物品名称b",rect: [650, 167, 221, 31]}, {name: "物品信息a",rect: [236, 214, 221, 121]}, 
        {name: "物品信息b",rect: [650, 214, 221, 121]}, {name: "按钮-购买1a",rect: [89, 261, 129, 81]}, {name: "按钮-购买1b",rect: [506, 261, 129, 81]}, {name: "按钮-箭头-左",rect: [2, 310, 60, 84]}, {name: "按钮-箭头-右",rect: [896, 310, 60, 84]}, {name: "背景框02c",rect: [72, 356, 23, 105]}, {name: "背景框02d",rect: [483, 356, 28, 105]}, {name: "物品头像c",rect: [98, 368, 108, 89]}, {name: "物品名称c",rect: [236, 368, 221, 31]}, {name: "物品头像d",rect: [516, 368, 108, 89]}, {name: "物品名称d",rect: [650, 368, 221, 31]}, {name: "物品信息c",rect: [236, 415, 221, 121]}, {name: "物品信息d",rect: [650, 415, 221, 121]}, {name: "按钮-购买1c",
            rect: [89, 464, 129, 81]}, {name: "按钮-购买1d",rect: [506, 464, 129, 81]}],"商城对位": [{name: "退出按钮",rect: [50, 0, 68, 69]}, {name: "按钮-商城",rect: [75, 94, 170, 38]}, {name: "按钮-我的物品",rect: [248, 94, 170, 38]}, {name: "按钮-充值",rect: [823, 94, 80, 37]}, {name: "按钮-U点",rect: [624, 99, 31, 29]}, {name: "U点文字",rect: [655, 102, 161, 26]}, {name: "背景框02a",rect: [72, 156, 23, 101]}, {name: "背景框02b",rect: [483, 156, 28, 101]}, {name: "物品头像a",rect: [98, 167, 108, 87]}, {name: "物品名称a",rect: [236, 167, 221, 31]}, {name: "物品头像b",rect: [516, 167, 108, 90]}, {name: "物品名称b",rect: [650, 167, 221, 31]}, 
        {name: "物品信息a",rect: [236, 214, 221, 121]}, {name: "物品信息b",rect: [650, 214, 221, 121]}, {name: "按钮-购买1a",rect: [89, 261, 129, 81]}, {name: "按钮-购买1b",rect: [506, 261, 129, 81]}, {name: "按钮-箭头-左",rect: [2, 310, 60, 84]}, {name: "按钮-箭头-右",rect: [896, 310, 60, 84]}, {name: "背景框02c",rect: [72, 356, 23, 105]}, {name: "背景框02d",rect: [483, 356, 28, 105]}, {name: "物品头像c",rect: [98, 368, 108, 89]}, {name: "物品名称c",rect: [236, 368, 221, 31]}, {name: "物品头像d",rect: [516, 368, 108, 89]}, {name: "物品名称d",rect: [650, 368, 221, 31]}, {name: "物品信息c",rect: [236, 415, 221, 121]}, {name: "物品信息d",
            rect: [650, 415, 221, 121]}, {name: "按钮-购买1c",rect: [89, 464, 129, 81]}, {name: "按钮-购买1d",rect: [506, 464, 129, 81]}],"游戏大厅-商城弹出": [{name: "背景框01",rect: [203, 120, 55, 187]}, {name: "物品图片",rect: [265, 143, 164, 164]}, {name: "物品名称",rect: [484, 151, 223, 31]}, {name: "物品属性",rect: [484, 197, 223, 125]}, {name: "输入条04",rect: [257, 311, 179, 37]}, {name: "按钮-购买2",rect: [484, 330, 216, 94]}, {name: "按钮-向左",rect: [217, 353, 82, 73]}, {name: "按钮-向右",rect: [392, 353, 82, 73]}, {name: "输入条02",rect: [306, 368, 79, 53]}],"游戏大厅-商城物品": [{name: "背景框03a",rect: [322, 156, 18, 197]}, {name: "背景框03b",
            rect: [522, 156, 17, 197]}, {name: "背景框03c",rect: [721, 156, 19, 197]}, {name: "物品头像a",rect: [353, 166, 108, 108]}, {name: "物品头像b",rect: [552, 166, 108, 108]}, {name: "物品头像c",rect: [752, 166, 108, 108]}, {name: "试穿头像",rect: [62, 175, 164, 164]}, {name: "物品名称a",rect: [341, 279, 129, 28]}, {name: "物品名称b",rect: [540, 279, 129, 28]}, {name: "物品名称c",rect: [741, 279, 129, 28]}, {name: "按钮-箭头-左",rect: [254, 309, 60, 84]}, {name: "按钮-箭头-右",rect: [896, 309, 60, 84]}, {name: "有效期a",rect: [341, 312, 129, 20]}, {name: "有效期b",rect: [540, 312, 129, 20]}, {name: "有效期c",rect: [741, 312, 129, 
                20]}, {name: "按钮-保存形象",rect: [35, 351, 216, 94]}, {name: "背景框03d",rect: [322, 357, 18, 197]}, {name: "背景框03e",rect: [522, 357, 17, 197]}, {name: "背景框03g",rect: [721, 357, 19, 197]}, {name: "物品头像d",rect: [353, 366, 108, 108]}, {name: "物品头像e",rect: [552, 366, 108, 108]}, {name: "物品头像g",rect: [752, 366, 108, 108]}, {name: "按钮-还原",rect: [35, 453, 216, 94]}, {name: "物品名称d",rect: [341, 479, 129, 28]}, {name: "物品名称e",rect: [540, 479, 129, 28]}, {name: "物品名称g",rect: [741, 479, 129, 28]}, {name: "有效期d",rect: [341, 512, 129, 20]}, {name: "有效期e",rect: [540, 512, 129, 20]}, {name: "有效期g",
            rect: [741, 512, 129, 20]}],"我要完善资料": [{name: "文字1",rect: [255, 71, 455, 33]}, {name: "文字2",rect: [255, 120, 455, 33]}, {name: "文字3",rect: [255, 170, 455, 33]}, {name: "文字4",rect: [255, 222, 455, 33]}, {name: "文字5",rect: [255, 270, 455, 33]}, {name: "按钮-记住了",rect: [334, 331, 294, 81]}, {name: "按钮-我要完善",rect: [334, 423, 294, 81]}],"游戏大厅-退出框": [{name: "背景框01",rect: [203, 119, 337, 33]}, {name: "文字",rect: [259, 155, 442, 176]}, {name: "按钮-确定",rect: [253, 334, 216, 94]}, {name: "按钮-取消",rect: [489, 334, 216, 94]}],"游戏大厅-设置-脱离状态": [{name: "背景框01",rect: [203, 119, 555, 88]}, {name: "文字",
            rect: [259, 214, 442, 117]}, {name: "按钮",rect: [372, 334, 216, 94]}],"手机号绑定页": [{name: "输入框",rect: [411, 161, 260, 54]}, {name: "图标-对错",rect: [680, 167, 41, 41]}, {name: "字-手机号码",rect: [259, 171, 145, 33]}, {name: "填写奖励",rect: [411, 223, 260, 23]}, {name: "橙字",rect: [250, 285, 471, 63]}, {name: "按钮-取消",rect: [244, 351, 167, 82]}, {name: "按钮-确定",rect: [555, 351, 167, 82]}],"检测激活": [{name: "背景框",rect: [203, 119, 555, 42]}, {name: "文字",rect: [265, 175, 431, 116]}, {name: "退出大厅-按钮",rect: [253, 323, 216, 94]}, {name: "马上激活-按钮",rect: [489, 323, 216, 94]}],"游戏大厅-注册": [{name: "背景框04",
            rect: [153, 35, 656, 17]}, {name: "输入条07a",rect: [364, 58, 358, 53]}, {name: "昵称",rect: [219, 66, 138, 30]}, {name: "图标-对错a",rect: [729, 68, 35, 34]}, {name: "图标-星号a",rect: [193, 74, 17, 17]}, {name: "提示a",rect: [363, 119, 401, 20]}, {name: "输入条07b",rect: [364, 151, 358, 53]}, {name: "密码",rect: [219, 160, 138, 30]}, {name: "图标-对错b",rect: [729, 162, 35, 34]}, {name: "图标-星号b",rect: [192, 167, 17, 17]}, {name: "提示b",rect: [363, 214, 401, 20]}, {name: "输入条07c",rect: [364, 246, 358, 53]}, {name: "图标-对错c",rect: [730, 256, 34, 34]}, {name: "确认密码",rect: [219, 257, 138, 30]}, {name: "图标-星号c",
            rect: [191, 263, 17, 17]}, {name: "提示c",rect: [363, 311, 401, 20]}, {name: "输入条07d",rect: [364, 342, 358, 53]}, {name: "图标-对错d",rect: [730, 352, 34, 34]}, {name: "邮箱",rect: [219, 354, 138, 30]}, {name: "提示d",rect: [363, 403, 401, 20]}, {name: "文字解说",rect: [217, 434, 547, 8]}, {name: "按钮-确认",rect: [559, 442, 167, 82]}, {name: "图标-选中",rect: [217, 472, 41, 41]}, {name: "游戏大厅-注册2-62",rect: [276, 474, 255, 35]}],"游戏大厅-激活": [{name: "背景框04",rect: [153, 35, 108, 38]}, {name: "温馨提示",rect: [277, 50, 407, 23]}, {name: "输入条07a",rect: [364, 90, 358, 53]}, {name: "昵称",rect: [219, 99, 138, 30]}, 
        {name: "图标-对错1",rect: [729, 101, 35, 34]}, {name: "图标-星号1",rect: [193, 106, 17, 17]}, {name: "提示1",rect: [363, 146, 400, 23]}, {name: "输入条07b",rect: [364, 180, 358, 53]}, {name: "密码",rect: [219, 190, 138, 30]}, {name: "图标-对错2",rect: [729, 193, 35, 34]}, {name: "图标-星号2",rect: [192, 197, 17, 17]}, {name: "提示2",rect: [363, 237, 400, 23]}, {name: "输入条07c",rect: [364, 273, 358, 53]}, {name: "图标-对错3",rect: [730, 283, 34, 34]}, {name: "邮箱",rect: [219, 284, 138, 30]}, {name: "图标-星号3",rect: [191, 290, 17, 17]}, {name: "提示3",rect: [363, 330, 400, 23]}, {name: "提示4",rect: [196, 365, 569, 
                21]}, {name: "按钮-确认",rect: [400, 392, 167, 82]}, {name: "激活账号文字提示",rect: [359, 490, 256, 21]}],"用户资料-试玩": [{name: "背景框01",rect: [203, 120, 555, 34]}, {name: "用户头像",rect: [251, 162, 164, 164]}, {name: "文字1",rect: [452, 163, 257, 25]}, {name: "经验条",rect: [532, 226, 177, 25]}, {name: "Lv",rect: [452, 229, 30, 21]}, {name: "等级",rect: [484, 231, 44, 18]}, {name: "文字2",rect: [452, 291, 257, 24]}, {name: "按钮-更换",rect: [269, 342, 130, 81]}, {name: "用户资料-试玩-29",rect: [449, 342, 167, 82]}],"游戏大厅-登录": [{name: "背景框-底",rect: [201, 78, 141, 127]}, {name: "UC游戏大厅",rect: [357, 148, 263, 44]}, 
        {name: "输入条08a",rect: [327, 214, 397, 52]}, {name: "账号",rect: [240, 225, 84, 30]}, {name: "输入条08b",rect: [327, 289, 397, 52]}, {name: "密码",rect: [240, 298, 84, 30]}, {name: "按钮-登录1",rect: [562, 349, 167, 82]}, {name: "按钮-注册1",rect: [241, 351, 127, 82]}, {name: "按钮-找回密码",rect: [368, 351, 133, 99]}],"游戏大厅-试玩": [{name: "登录框-底",rect: [201, 78, 141, 412]}, {name: "按钮-游客试玩",rect: [354, 149, 255, 82]}, {name: "按钮-注册2",rect: [354, 236, 255, 82]}, {name: "按钮-登录2",rect: [354, 323, 255, 82]}],"试玩激活1": [{name: "背景框",rect: [152, 34, 656, 48]}, {name: "温馨提示",rect: [268, 91, 428, 83]}, {name: "输入框1",
            rect: [342, 200, 358, 53]}, {name: "账号",rect: [261, 212, 78, 25]}, {name: "输入框2",rect: [342, 289, 358, 53]}, {name: "密码",rect: [261, 302, 78, 25]}, {name: "确定按钮",rect: [396, 361, 167, 82]}, {name: "提示",rect: [261, 465, 439, 24]}],"输入昵称": [{name: "背景框",rect: [231, 168, 499, 62]}, {name: "输入条",rect: [400, 243, 292, 53]}, {name: "昵称",rect: [273, 254, 117, 31]}, {name: "提示",rect: [400, 305, 292, 22]}, {name: "确定按钮",rect: [372, 349, 216, 94]}]};
H.widgets.Slice = {"公告收缩.png": {"喇叭": [0, 0, 25, 23],"公告收缩a": [30, 0, 22, 22],"公告收缩b": [57, 0, 22, 22]},"商城.png": {"按钮-商城2-点击": [0, 0, 170, 45],"按钮-向左-默认": [175, 0, 82, 73],"按钮-向右-默认": [262, 0, 82, 73],"输入条02": [349, 0, 79, 53],"背景框03-点击": [569, 0, 170, 197],"按钮-保存形象-默认": [744, 0, 216, 94],"按钮-商城2-默认": [0, 50, 170, 45],"按钮-箭头-左": [349, 59, 60, 84],"按钮-箭头-右": [414, 59, 60, 84],"按钮-充值": [479, 59, 80, 50],"按钮-向左-点击": [175, 78, 82, 73],"按钮-向右-点击": [262, 78, 82, 73],"按钮-保存形象-点击": [744, 99, 216, 94],"按钮-我的物品-点击": [0, 100, 170, 45],"输入条04": [349, 145, 179, 53],"按钮-我的物品-默认": [0, 150, 
            170, 45],"按钮-U点": [175, 156, 31, 29],"背景框-分隔": [0, 200, 960, 18],"背景框02": [0, 223, 407, 196],"背景框03-默认": [412, 223, 170, 197],"按钮-购买1-默认": [610, 223, 129, 81],"按钮-还原-默认": [744, 223, 216, 94],"按钮-购买1-点击": [610, 309, 129, 81],"按钮-还原-点击": [744, 322, 216, 94],"按钮-购买2-默认": [0, 424, 216, 94],"按钮-购买2-点击": [221, 424, 216, 94],"按钮-确定-默认": [442, 424, 216, 94],"按钮-确定-点击": [663, 424, 216, 94]},"注册.png": {"按钮-游客试玩-默认": [0, 0, 255, 82],"按钮-游客试玩-点击": [255, 0, 255, 82],"按钮-确认1-默认": [510, 0, 167, 82],"图标-选中": [678, 0, 41, 41],"图标-未选中": [678, 50, 41, 41],"按钮-注册2-默认": [0, 82, 255, 82],"按钮-注册2-点击": [255, 
            82, 255, 82],"按钮-确认1-点击": [510, 82, 167, 82],"图标-星号": [678, 120, 17, 17],"按钮-登录2-默认": [0, 164, 255, 82],"按钮-登录2-点击": [255, 164, 255, 82],"按钮-取消1-默认": [520, 164, 167, 82],"图标-对": [690, 164, 35, 34],"图标-错": [690, 212, 34, 34],"按钮-注册1-默认": [0, 246, 127, 80],"按钮-找回密码-默认": [127, 246, 133, 80],"按钮-注册1-点击": [260, 246, 127, 80],"按钮-找回密码-点击": [387, 246, 133, 80],"按钮-取消1-点击": [520, 246, 167, 82],"按钮-记住了-默认": [0, 326, 294, 81],"按钮-确认1-灰色": [294, 326, 167, 82],"UC游戏大厅": [465, 364, 263, 44],"按钮-记住了-点击": [0, 407, 294, 81],"输入条07": [297, 426, 358, 53],"按钮-取消-默认": [297, 484, 216, 94],
        "按钮-登录1-默认": [559, 484, 167, 82],"按钮-我要完善-默认": [0, 488, 294, 81],"按钮-登录1-点击": [559, 566, 167, 82],"按钮-我要完善-点击": [0, 569, 294, 81],"按钮-取消-点击": [297, 583, 216, 94],"按钮-退出大厅-默认": [0, 677, 216, 94],"按钮-退出大厅-点击": [216, 677, 216, 94],"按钮-马上激活-默认": [0, 771, 216, 94],"按钮-马上激活-点击": [216, 771, 216, 94]},"登录框-底.png": {"登录框-底": [0, 0, 560, 439]},"背景框01.png": {"背景框01": [0, 0, 555, 339]},"背景框04.png": {"背景框04": [0, 0, 655, 508]},"请求loading.png": {"请求loading": [0, 0, 114, 114]},"退出按钮.png": {"退出按钮-默认": [0, 0, 68, 69],"退出按钮-点击": [73, 0, 68, 69]}};
H = window.H || {};
H.Sdk = {_config: function() {
        U.log("SDK初始化配置");
        A.SDK_DEV ? (this.cpId = 1, this.gameId = 76, this.serverId = 80, this.devMode = !0) : (this.cpId = 729, this.gameId = 75615, this.serverId = 1613, this.devMode = !1)
    },landscape: !0,H5runtimeActivity: "com.ucweb.h5runtime.H5runtimeActivity",popup: null,_startScreen: function(a, b) {
        window["native"].startActivity(a, b)
    },_callJava: function(a, b, c, d) {
        a = {clz: a,method: b};
        c && (a.args = c);
        d || (d = function() {
        });
        window["native"].call(d, JSON.stringify(a))
    },setPopup: function(a) {
        this.popup = a
    },getSidFromHall: function(a) {
        UCGameSDK.getSid(function(b) {
            a && 
            a(b)
        })
    },userInfo: function() {
        UCGameSDK.enterUserCenter()
    },login: function(a, b) {
        this._config();
        a && (this.hallServer = a.hallServer, this.hallToken = a.hallToken);
        var c = U.Store.get("forceBind"), c = JSON.stringify({cpId: this.cpId,gameId: this.gameId,serverId: this.serverId,debugMode: this.devMode,landscape: this.landscape,forceBind: "1" == c ? !0 : !1});
        UCGameSDK.loginGuest(c, function(a) {
            U.log("自动登陆结果:" + a);
            a != "" ? b && b(a) : H.Sdk.doLoginFail(b)
        })
    },doLoginFail: function(a) {
        if ("1" == this._getQueryURL("isplugin")) {
            var b = this._getQueryURL("oldcookie");
            null != b && this._onGetCookie(b.trim(), a)
        } else
            this._callJava(this.H5runtimeActivity, "getOldCookie", {}, function(b) {
                H.Sdk._onGetCookie(b, a)
            })
    },_getQueryURL: function(a, b) {
        var b = b || "" + window.location.href, c;
        return (c = RegExp("(^|)" + a + "=([^&]*)(&|$)", "gi").exec(b)) ? "" + decodeURIComponent(c[2]) : null
    },_onGetCookie: function(a, b) {
        U.log("自动登陆失败，判断是否需要激活");
        U.log("旧包壳Cookie:" + a);
        if (!a || "" == a || -1 == a.indexOf("hallToken") && -1 == a.indexOf("api_hallToken"))
            this.changeAccount(b, null, !0);
        else {
            for (var c = a.split("; "), d = [], 
            e = 0; e < c.length; e++) {
                var f = c[e].split("=");
                2 > f.length || (!f[0] || "" == f[0]) || (d[f[0]] = f[1], U.log(f[0] + " -> " + f[1]))
            }
            var g = d.hallToken;
            g || (g = d.api_hallToken);
            this._checkActivate(g, function(a) {
                0 == a ? (U.log("需要激活，提示是否激活"), UCGameSDK.bindGuest(function(a) {
                    H.Sdk._doActivate(g, a, b)
                })) : (U.log("已经激活，直接用户名登陆"), H.Sdk.changeAccount(b, null, !0))
            }, function() {
                U.log("不需要激活，显示登陆对话框");
                H.Sdk.changeAccount(b, null, !0)
            })
        }
    },_checkActivate: function(a, b, c) {
        U.log("检查是否需要激活");
        this._request("activity.bindQuery", "hallToken=" + a, function(a) {
            200 == 
            a.status ? b && b(a.data.isActivate, a.data.coin) : c && c()
        }, function() {
            c && c()
        })
    },_request: function(a, b, c) {
        var d = new XMLHttpRequest, a = H.Sdk.hallServer + a + "?" + b;
        d.open("post", a, !0);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        d.onreadystatechange = function() {
            4 == d.readyState && (U.log("请求结果：" + d.responseText), c && c(eval("(" + d.responseText + ")")))
        };
        U.log("发送请求：" + a);
        d.send(null)
    },_doActivate: function(a, b, c) {
        "" == b ? this.login(null, c) : (H.Sdk.sid = b, U.log("检查sid是否激活"), this._request("user.bindSdk", 
        "hallToken=" + a + "&sid=" + b, function(d) {
            var d = d.status, e = "", f = !1;
            if (200 == d)
                U.Store.set("forceBind", "0"), e = "绑定成功", f = !0;
            else {
                if (432 == d) {
                    e = "该用户已绑定，请重新激活。";
                    U.Store.set("forceBind", "1");
                    f = !1;
                    U.log(e);
                    var g = new H.widgets.AlertV({text: e,onOk: function() {
                            H.Sdk.popup.hide(g);
                            UCGameSDK.bindGuest(function(b) {
                                H.Sdk.sid == b ? H.Sdk.login(null, c) : H.Sdk._doActivate(a, b, c)
                            })
                        }});
                    H.Sdk.popup.show(g, {noRemove: !0});
                    return
                }
                e = 438 == d ? "sid或者tt失效" : 439 == d ? "绑定出错,服务器错误" : "绑定失败，status:" + d
            }
            U.log(e);
            f ? c && c(b) : H.Sdk.changeAccount(c, null, 
            !0)
        }, function() {
            H.Sdk.changeAccount(c, null, !0)
        }))
    },changeAccount: function(a, b, c) {
        UCGameSDK.login(function(d) {
            "" != d ? a && a(d) : c ? H.Sdk.login(null, a) : b && b()
        })
    },pay: function(a) {
        this.serverId || this._config();
        UCGameSDK.uPointCharge(this.serverId + "", function() {
            a && a()
        })
    },checkLogin: function(a) {
        UCGameSDK.getSid(function(b) {
            a && a("" != b)
        })
    },showFloatButton: function() {
        UCGameSDK.showFloatButton(JSON.stringify({x: 90,y: 18}))
    },hideFloatButton: function() {
        UCGameSDK.hideFloatButton()
    },showHelp: function() {
        UCGameSDK.enterUI("feedback")
    }};
H.widgets.Utils = {msToDay: function(a) {
        a = Math.floor(a / 864E5);
        1 > a && (a = 1);
        return a
    },avatar: function(a) {
        var b = H.widgets.Config;
        if (b.getAvatarFunc instanceof Function)
            return b.getAvatarFunc(a);
        U.log("不存在getAvatarFunc方法，无法取得头像")
    },testPassword: function(a) {
        var b = /^[a-zA-Z0-9`~!@$%^&()+=|\\\][\]\{\}:;'\,.<>?]{6,20}$/;
        return a && b.exec(a) ? !0 : !1
    },testEmail: function(a) {
        var b = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return "" !== a && b.test(a) && 30 >= a.length ? !0 : !1
    }};
H.widgets.BaseC = G.BaseC.extend({init: function() {
        this._requestLoadingManager = null;
        this.ob = H.Widget.ob;
        this.dm = H.widgets.DM.getInstance();
        this.CMD = H.widgets.CMD;
        this.NT = H.widgets.NT;
        this.config = H.widgets.Config;
        this.msg = H.widgets.Msg;
        this._super(arguments)
    },destroy: function() {
        this._super(arguments)
    },request: function(a, b, c, d, e) {
        e ? (this.showRequestLoading(), H.Api.mergeRequest(a, b, function(a) {
            this.hideRequestLoading();
            c && U.delegate(c, d || window, a)()
        }, this)) : H.Api.mergeRequest(a, b, c, d)
    },getRequest: function(a, 
    b, c) {
        return new H.apis.Request({action: a,data: b,ignoreError: c})
    }});
H.widgets.AuthC = H.widgets.BaseC.extend({init: function(a) {
        this._stage = a;
        this._super(arguments);
        this._sdkTestSid = U.getQueryURL("sdkTestSid");
        this._sdkDebug = !!this._sdkTestSid;
        var b;
        b = G.Container.create();
        a.addChild(b);
        this.mainLayer = b;
        b = G.Container.create();
        a.addChild(b);
        this.popupLayer = b;
        this.popup = new G.PopupManager({parent: this.popupLayer,width: this.config.stageWidth,height: this.config.stageHeight});
        this._requestLoadingManager = new G.RequestLoadingManager({popup: this.popup,view: new H.widgets.RequestLoadingV})
    },
    addListener: function() {
        this.ob.addListener(this.NT.LOGIN_SDK, this._loginSdk, this);
        this.ob.addListener(this.NT.SHOW_LOGIN_SELECT, this._showLoginSelect, this);
        this.ob.addListener(this.NT.HIDE_LOGIN_SELECT, this._hideLoginSelect, this);
        this.ob.addListener(this.NT.REQUEST_DEMO, this._requestDemo, this);
        this.ob.addListener(this.NT.SHOW_LOGIN, this._showLogin, this);
        this.ob.addListener(this.NT.HIDE_LOGIN, this._hideLogin, this);
        this.ob.addListener(this.NT.REQUEST_LOGIN, this._requestLogin, this);
        this.ob.addListener(this.NT.SHOW_REG, 
        this._showReg, this);
        this.ob.addListener(this.NT.HIDE_REG, this._hideReg, this);
        this.ob.addListener(this.NT.REQUEST_REG, this._requestReg, this);
        this.ob.addListener(this.NT.SHOW_ACTIVATE, this._showActivate, this);
        this.ob.addListener(this.NT.HIDE_ACTIVATE, this._hideActivate, this);
        this.ob.addListener(this.NT.REQUEST_ACTIVATE, this._requestActivate, this);
        this.ob.addListener(this.NT.SHOW_BIND, this._showBind, this);
        this.ob.addListener(this.NT.HIDE_BIND, this._hideBind, this);
        this.ob.addListener(this.NT.REQUEST_BIND, 
        this._requestBind, this);
        this.ob.addListener(this.NT.SHOW_USER_INFO, this._showUserInfo, this);
        this.ob.addListener(this.NT.HIDE_USER_INFO, this._hideUserInfo, this);
        this.ob.addListener(this.NT.REQUEST_UPDATE_USER_INFO, this._requestUpdateUserInfo, this);
        this.ob.addListener(this.NT.REQUEST_REG_AGREEMENT, this._requestRegAgreement, this);
        this.ob.addListener(this.NT.REQUEST_FORGET_PASSWORD, this._requestForgetPassword, this);
        this.ob.addListener(this.NT.REQUEST_UPDATE_NICKNAME, this._requestUpdateNickname, this)
    },
    removeListener: function() {
        this.ob.removeListener(this.NT.LOGIN_SDK, this._loginSdk);
        this.ob.removeListener(this.NT.SHOW_LOGIN_SELECT, this._showLoginSelect);
        this.ob.removeListener(this.NT.HIDE_LOGIN_SELECT, this._hideLoginSelect);
        this.ob.removeListener(this.NT.REQUEST_DEMO, this._requestDemo);
        this.ob.removeListener(this.NT.SHOW_LOGIN, this._showLogin);
        this.ob.removeListener(this.NT.SHOW_LOGIN, this._hideLogin);
        this.ob.removeListener(this.NT.REQUEST_LOGIN, this._requestLogin);
        this.ob.removeListener(this.NT.SHOW_REG, 
        this._showReg);
        this.ob.removeListener(this.NT.HIDE_REG, this._hideReg);
        this.ob.removeListener(this.NT.REQUEST_REG, this._requestReg);
        this.ob.removeListener(this.NT.SHOW_ACTIVATE, this._showActivate);
        this.ob.removeListener(this.NT.HIDE_ACTIVATE, this._hideActivate);
        this.ob.removeListener(this.NT.REQUEST_ACTIVATE, this._requestActivate);
        this.ob.removeListener(this.NT.SHOW_BIND, this._showBind);
        this.ob.removeListener(this.NT.HIDE_BIND, this._hideBind);
        this.ob.removeListener(this.NT.REQUEST_BIND, this._requestBind);
        this.ob.removeListener(this.NT.SHOW_USER_INFO, this._showUserInfo);
        this.ob.removeListener(this.NT.HIDE_USER_INFO, this._hideUserInfo);
        this.ob.removeListener(this.NT.REQUEST_UPDATE_USER_INFO, this._requestUpdateUserInfo);
        this.ob.removeListener(this.NT.REQUEST_REG_AGREEMENT, this._requestRegAgreement);
        this.ob.removeListener(this.NT.REQUEST_FORGET_PASSWORD, this._requestForgetPassword);
        this.ob.removeListener(this.NT.REQUEST_UPDATE_NICKNAME, this._requestUpdateNickname)
    },showRequestLoading: function() {
        this._requestLoadingManager.push()
    },
    hideRequestLoading: function() {
        this._requestLoadingManager.pop()
    },_loginSdk: function(a) {
        a && (this.data = a);
        if (window.IS_AC || this._sdkDebug)
            U.log("【AuthC】调用SDK检测是否已登录"), this._sdkDebug ? (A.removeLoading && A.removeLoading(), this._sdkLogin()) : (H.Sdk.setPopup(this.popup), H.Sdk.checkLogin(U.delegate(function(a) {
                U.log("【AuthC】SDK是否已登录 b:" + a);
                a ? (this._handlerSuccess(), this._handlerClose()) : (A.removeLoading && A.removeLoading(), this._sdkLogin())
            }, this)))
    },_sdkLogin: function() {
        var a = {hallServer: this.config.serverUrl,
            hallToken: this.dm.getHallToken()};
        U.log("【AuthC】调用SDK登录，data:" + JSON.stringify(a));
        this._sdkDebug ? (this.showRequestLoading(), setTimeout(U.delegate(function() {
            this._requestLoginSdk(this._sdkTestSid);
            this.hideRequestLoading()
        }, this), 3E3)) : (H.Sdk.setPopup(this.popup), H.Sdk.login(a, U.delegate(this._requestLoginSdk, this)))
    },_sdkChangeAccount: function() {
        U.log("【AuthC】调用SDK更换账号");
        this._sdkDebug ? (this.showRequestLoading(), setTimeout(U.delegate(function() {
            this._requestLoginSdk(this._sdkTestSid);
            this.hideRequestLoading()
        }, 
        this), 3E3)) : (H.Sdk.setPopup(this.popup), H.Sdk.changeAccount(U.delegate(this._requestLoginSdk, this), U.delegate(this._handlerFail, this)))
    },_requestLoginSdk: function(a) {
        U.log("【AuthC】请求SDK登录，sid:" + a);
        this.request(this.config.serverUrl, [this.getRequest(this.CMD.USER_LOGIN_SDK, {sid: a}, !0), this.getRequest(this.CMD.USER_GOODS, null, !1)], function(a) {
            a.success ? (U.log("【AuthC】SDK登录成功"), null == a.data.pname || "" == a.data.pname ? this._showUpdateNickname() : (this._handlerSuccess(), this._handlerClose())) : (U.log("【AuthC】SDK登录失败"), 
            this._handlerFail(a.error), this._handlerClose())
        }, this, !0)
    },_showUpdateNickname: function() {
        H.Sdk.hideFloatButton();
        U.log("【AuthC】添加和显示更新昵称界面");
        var a = this.dm.user.pUid.toString();
        U.log("【AuthC】当前用户的pUid:" + a);
        a = 4 < a.length ? "来宾" + a.substr(a.length - 4) : "来宾";
        this.popup.show(G.Facade.getV("H.widgets.UpdateNickV") || G.Facade.addV("H.widgets.UpdateNickV", new H.widgets.UpdateNickV({value: a})), {noRemove: !0,bgColor: "#000"});
        A.removeLoading && A.removeLoading()
    },_hideUpdateNickname: function() {
        H.Sdk.showFloatButton();
        U.log("【AuthC】移除更新昵称界面");
        var a = this.popup, b = G.Facade.removeV("H.widgets.UpdateNickV");
        b && a.isShow(b) && a.hide(b)
    },_requestUpdateNickname: function(a) {
        if (null == a)
            U.error("【AuthC】通知参数出错 type:REQUEST_UPDATE_NICKNAME");
        else {
            var b = G.Facade.getV("H.widgets.UpdateNickV");
            U.log("【AuthC】请求更新昵称");
            this.request(this.config.serverUrl, [this.getRequest(this.CMD.USER_UPDATE, a)], function(a) {
                a.success ? (U.log("【AuthC】更新昵称成功"), this._hideUpdateNickname(), this._handlerSuccess(), this._handlerClose()) : (U.log("【AuthC】更新昵称失败"), 
                b && (440 == a.error.code ? b.setTipText(this.msg.UPDATE_NICK_ERROR_400) : b.setTipText(this.msg.UPDATE_NICK_ERROR_TIMEOUT)))
            }, this, !0)
        }
    },_showLoginSelect: function(a) {
        a && (this.data = a);
        var a = this.popup, b = G.Facade.getV("H.widgets.LoginSelectV") || G.Facade.addV("H.widgets.LoginSelectV", new H.widgets.LoginSelectV);
        a.show(b, {noRemove: this.data.noRemove,onClose: U.delegate(function() {
                this._hideLoginSelect();
                this._handlerClose()
            }, this)})
    },_hideLoginSelect: function() {
        var a = this.popup, b = G.Facade.removeV("H.widgets.LoginSelectV");
        b && a.isShow(b) && a.hide(b)
    },_requestDemo: function() {
        this.request(this.config.serverUrl, [this.getRequest(this.CMD.USER_DEMO), this.getRequest(this.CMD.USER_GOODS, null, !1)], function(a) {
            a.success ? (this._hideLoginSelect(), this._handlerSuccess(), this._handlerClose()) : this._error(a.error)
        }, this, !0)
    },_showLogin: function(a) {
        a && (this.data = a);
        window.IS_AC || this._sdkDebug ? this._sdkChangeAccount() : this.popup.show(G.Facade.getV("H.widgets.LoginV") || G.Facade.addV("H.widgets.LoginV", new H.widgets.LoginV), {noRemove: this.data.noRemove,
            onClose: U.delegate(function() {
                this._hideLogin();
                this._handlerClose()
            }, this)})
    },_hideLogin: function() {
        var a = this.popup, b = G.Facade.removeV("H.widgets.LoginV");
        b && a.isShow(b) && a.hide(b)
    },_requestLogin: function(a) {
        null == a ? U.error("【AuthC】通知参数出错 type:REQUEST_LOGIN") : "string" != typeof a.uid || 0 >= a.uid.length ? this._alert(H.widgets.Msg.ALERT_UID_EMPTY) : "string" != typeof a.password || 0 >= a.password.length ? this._alert(H.widgets.Msg.ALERT_PASSWORD_EMPTY) : this.request(this.config.serverUrl, [this.getRequest(this.CMD.USER_LOGIN, 
            a), this.getRequest(this.CMD.USER_GOODS, null, !1)], function(a) {
            a.success ? (this._hideLogin(), this._handlerSuccess(), this._handlerClose()) : this._error(a.error)
        }, this, !0)
    },_showReg: function(a) {
        a && (this.data = a);
        this.popup.show(G.Facade.getV("H.widgets.RegV") || G.Facade.addV("H.widgets.RegV", new H.widgets.RegV), {noRemove: this.data.noRemove,onClose: U.delegate(function() {
                this._hideReg();
                this._handlerClose()
            }, this)})
    },_hideReg: function() {
        var a = this.popup, b = G.Facade.removeV("H.widgets.RegV");
        b && a.isShow(b) && 
        a.hide(b)
    },_requestReg: function(a) {
        null == a ? U.error("【AuthC】通知参数出错 type:REQUEST_REG") : this.request(this.config.serverUrl, [this.getRequest(this.CMD.USER_REG, a), this.getRequest(this.CMD.USER_GOODS, null, !1)], function(b) {
            b.success ? (this._hideReg(), b.data.password = a.password, b.data.email = a.email, this._showUserInfo(b.data)) : this._error(b.error)
        }, this, !0)
    },_showActivate: function(a) {
        a && (this.data = a);
        window.IS_AC || this.popup.show(G.Facade.getV("H.widgets.ActivateV") || G.Facade.addV("H.widgets.ActivateV", new H.widgets.ActivateV), 
        {noRemove: this.data.noRemove,onClose: U.delegate(function() {
                this._hideActivate();
                this._handlerClose()
            }, this)})
    },_hideActivate: function() {
        var a = this.popup, b = G.Facade.removeV("H.widgets.ActivateV");
        b && a.isShow(b) && a.hide(b)
    },_requestActivate: function(a) {
        this.request(this.config.serverUrl, [this.getRequest(this.CMD.USER_REG, a)], function(b) {
            b.success ? (this._hideActivate(), b.data.password = a.password, b.data.email = a.email, this._showUserInfo(b.data), this._alert(H.widgets.Msg.ALERT_ACTIVATE_BOUND.replace("%s", 
            b.data.activateCoin || 0))) : this._error(b.error)
        }, this, !0)
    },_showBind: function(a) {
        a && (this.data = a);
        window.IS_AC || this.popup.show(G.Facade.getV("H.widgets.BindV") || G.Facade.addV("H.widgets.BindV", new H.widgets.BindV), {noRemove: this.data.noRemove,onClose: U.delegate(function() {
                this._hideBind();
                this._handlerClose()
            }, this)})
    },_hideBind: function() {
        var a = this.popup, b = G.Facade.removeV("H.widgets.BindV");
        b && a.isShow(b) && a.hide(b)
    },_requestBind: function(a) {
        a && ("string" != typeof a.uid || 0 >= a.uid.length ? this._alert(H.widgets.Msg.ALERT_BIND_UID_EMPTY) : 
        "string" != typeof a.password || 0 >= a.password.length ? this._alert(H.widgets.Msg.ALERT_BIND_PASSWORD_EMPTY) : this.request(this.config.serverUrl, [this.getRequest(this.CMD.USER_BIND, a, !1)], function(b) {
            b.success ? (this._hideBind(), b.data.password = a.password, this._showUserInfo(b.data), this._alert(H.widgets.Msg.ALERT_BIND_BOUND.replace("%s", b.data.activateCoin || 0))) : this._error(b.error)
        }, this, !0))
    },_showUserInfo: function(a) {
        var b = G.Facade.getV("H.widgets.UserInfoV") || G.Facade.addV("H.widgets.UserInfoV", new H.widgets.UserInfoV);
        this.popup.show(b, {noRemove: this.data.noRemove,onClose: U.delegate(function() {
                this._hideUserInfo();
                this._handlerSuccess();
                this._handlerClose()
            }, this)});
        b.setData(a)
    },_hideUserInfo: function() {
        var a = this.popup, b = G.Facade.removeV("H.widgets.UserInfoV");
        b && a.isShow(b) && (a.hide(b), this._handlerSuccess(), this._handlerClose())
    },_requestUpdateUserInfo: function() {
        window.IS_AC ? H.Sdk.userInfo() : this.dm.hallConfig instanceof Object ? this._goUpdateUserInfo() : this._requestHallConfig(this._goUpdateUserInfo, this)
    },
    _goUpdateUserInfo: function() {
        var a = this.dm.hallConfig;
        if (a instanceof Object && "string" == typeof a.userCenter) {
            var b = new H.widgets.ConfirmV({text: H.widgets.Msg.CONFIRM_COMMON,callback: U.delegate(function(a) {
                    a == H.widgets.ConfirmV.OK && window.open(this.dm.hallConfig.userCenter, "_blank");
                    this.popup.hide(b)
                }, this)});
            this.popup.show(b)
        } else
            this._alert(H.widgets.Msg.ERROR_REQUEST_HALL_CONFIG)
    },_requestRegAgreement: function() {
        this.dm.hallConfig instanceof Object ? this._goRegAgreement() : this._requestHallConfig(this._goRegAgreement, 
        this)
    },_goRegAgreement: function() {
        var a = this.dm.hallConfig;
        if (a instanceof Object && "string" == typeof a.regAgreement) {
            var b = new H.widgets.ConfirmV({text: H.widgets.Msg.CONFIRM_COMMON,callback: U.delegate(function(a) {
                    a == H.widgets.ConfirmV.OK && window.open(this.dm.hallConfig.regAgreement, "_blank");
                    this.popup.hide(b)
                }, this)});
            this.popup.show(b)
        } else
            this._alert(H.widgets.Msg.ERROR_REQUEST_HALL_CONFIG)
    },_requestForgetPassword: function() {
        this.dm.hallConfig instanceof Object ? this._goForgetPassword() : this._requestHallConfig(this._goForgetPassword, 
        this)
    },_goForgetPassword: function() {
        var a = this.dm.hallConfig;
        if (a instanceof Object && "string" == typeof a.passwordCenter) {
            var b = new H.widgets.ConfirmV({text: H.widgets.Msg.CONFIRM_COMMON,callback: U.delegate(function(a) {
                    a == H.widgets.ConfirmV.OK && window.open(this.dm.hallConfig.passwordCenter, "_blank");
                    this.popup.hide(b)
                }, this)});
            this.popup.show(b)
        } else
            this._alert(H.widgets.Msg.ERROR_REQUEST_HALL_CONFIG)
    },_requestHallConfig: function(a, b) {
        this.request(this.config.serverUrl, this.getRequest(this.CMD.DT_CONF), 
        function(c) {
            c.success ? U.delegate(a, b || window)(c.data) : this._error(c.error)
        }, this, !0)
    },_alert: function(a) {
        this.popup.show(new H.widgets.AlertV({text: a,popup: this.popup}))
    },_error: function(a) {
        U.log("【AuthC】出错:" + JSON.stringify(a));
        a ? this._alert(a.message) : U.error("【AuthC】_error函数无有限参数")
    },_handlerSuccess: function() {
        U.log("【AuthC】成功回调:" + JSON.stringify(this.dm.user));
        var a = this.data;
        a.onSuccess && U.delegate(a.onSuccess, a.context || window)(a)
    },_handlerFail: function(a) {
        U.log("【AuthC】失败回调:" + JSON.stringify(a));
        null == a && (a = {code: 0,message: "未知错误"});
        var b = this.data;
        b.onFail && U.delegate(b.onFail, b.context || window)(a)
    },_handlerClose: function() {
        U.log("【AuthC】关闭回调");
        var a = this.data;
        a.onClose && U.delegate(a.onClose, a.context || window)()
    }});
H.widgets.GoodsGroupC = H.widgets.BaseC.extend({init: function(a) {
        this._super(arguments);
        var b;
        this.mainLayer = b = G.Container.create();
        this.popupLayer = b = G.Container.create();
        this.popup = new G.PopupManager({parent: b,width: this.config.stageWidth,height: this.config.stageHeight});
        this._requestLoadingManager = new G.RequestLoadingManager({popup: this.popup,view: new H.widgets.RequestLoadingV});
        this.selectorIndex = 0;
        this.setStage(a)
    },addListener: function() {
        var a = this.NT;
        this.ob.addListener(a.SHOW_SHOP, this.showShop, 
        this);
        this.ob.addListener(a.HIDE_SHOP, this._hideShop, this);
        this.ob.addListener(a.SHOW_BAG, this.showBag, this);
        this.ob.addListener(a.HIDE_BAG, this._hideBag, this);
        this.ob.addListener(a.CLOSE_GOODS_GROUP, this._closeGoodsGroup, this);
        this.ob.addListener(a.REQUEST_AVATAR_USE, this._requestAvatarUse, this);
        this.ob.addListener(a.USER_GHOST, this._userGhost, this);
        this.ob.addListener(a.REQUEST_PAY, this._requestPay, this);
        this.ob.addListener(a.SHOW_BUY, this.showBuy, this);
        this.ob.addListener(a.HIDE_BUY, this.hideBuy, 
        this);
        this.ob.addListener(a.INFORM_AVATAR_BUY, this._informAvatarBuy, this);
        this.ob.addListener(a.REQUEST_AVATAR_BUY, this._requestAvatarBuy, this)
    },removeListener: function() {
        var a = this.NT;
        this.ob.removeListener(a.SHOW_SHOP, this.showShop);
        this.ob.removeListener(a.HIDE_SHOP, this._hideShop);
        this.ob.removeListener(a.SHOW_BAG, this.showBag);
        this.ob.removeListener(a.HIDE_BAG, this._hideBag);
        this.ob.removeListener(a.CLOSE_GOODS_GROUP, this._closeGoodsGroup);
        this.ob.removeListener(a.REQUEST_AVATAR_USE, this._requestAvatarUse);
        this.ob.removeListener(a.USER_GHOST, this._userGhost);
        this.ob.removeListener(a.REQUEST_PAY, this._requestPay);
        this.ob.removeListener(a.SHOW_BUY, this.showBuy);
        this.ob.removeListener(a.HIDE_BUY, this.hideBuy);
        this.ob.removeListener(a.INFORM_AVATAR_BUY, this._informAvatarBuy);
        this.ob.removeListener(a.REQUEST_AVATAR_BUY, this._requestAvatarBuy)
    },setStage: function(a) {
        a.addChild(this.mainLayer);
        a.addChild(this.popupLayer)
    },showRequestLoading: function() {
        this._requestLoadingManager.push()
    },hideRequestLoading: function() {
        this._requestLoadingManager.pop()
    },
    _showGoodsGroup: function() {
        U.log("打开商城主界面");
        var a = this.cfg;
        this.view || (this.view = new H.widgets.GoodsGroupV, this.mainLayer.addChild(this.view), a.isEmbedded ? this.view.hideClose() : this.view.showClose());
        this.view.setVisible(!0)
    },_closeGoodsGroup: function() {
        U.log("关闭商城主界面");
        this.cfg.onClose && this.cfg.onClose();
        this.view.setVisible(!1)
    },_informAvatarBuy: function(a) {
        U.log("提示发起购买判定:" + JSON.stringify(a));
        var b = this.cfg;
        this.dm.isDemo() ? (U.log("购买判定[试玩]:" + JSON.stringify(a)), b.onData ? U.delegate(b.onData, b.context || 
        window)({type: H.ShopWidget.BUY_USER_DEMO,data: a}) : this._alert(H.widgets.Msg.ALERT_DEMO_ACTIVATE_TIP)) : this.dm.isGhost() ? (U.log("购买判定[空用户]:" + JSON.stringify(a)), b.onData ? U.delegate(b.onData, b.context || window)({type: H.ShopWidget.BUY_USER_GHOST,data: a}) : this._alert(H.widgets.Msg.ALERT_NO_LOGIN_TIP)) : Number(a.price) > Number(this.dm.user.ucoin) ? this._alert(H.widgets.Msg.ALERT_MONEY_NOT_ENOUGH) : this.ob.notify(this.NT.SHOW_BUY, a)
    },_requestAvatarUse: function(a) {
        this.request(this.config.serverUrl, [this.getRequest(this.CMD.GOODS_AVATAR_USE, 
            a)], function(a) {
            a.success ? this.view.updateAvatarUse() : this._error(a.error)
        }, this, !0)
    },_requestAll: function() {
        var a = [];
        this.dm.isLogged() && ((null == this.dm.user.uid || 0 == this.dm.user.uid) && a.push(this.getRequest(this.CMD.USER_INFO)), (!this.dm.myGoodsList || 0 == this.dm.myGoodsList.length) && a.push(this.getRequest(this.CMD.USER_GOODS)));
        (!this.dm.goodsList || 0 == this.dm.goodsList.length) && a.push(this.getRequest(this.CMD.GOODS_LIST));
        0 < a.length ? this.request(this.config.serverUrl, a, function(a) {
            a.success ? this._showSelector() : 
            this._error(a.error)
        }, this, !0) : this._showSelector()
    },_showSelector: function() {
        this.view.show();
        switch (this.selectorIndex) {
            case 0:
                this.view.showShop();
                break;
            case 1:
                this.dm.isGhost() ? (this.selectorIndex = 0, this.view.showShop()) : this.view.showBag()
        }
    },showShop: function(a) {
        this._setCfg(a);
        this._showGoodsGroup();
        a = this.cfg;
        this._hideBag();
        this.selectorIndex = 0;
        a && a.backgroundImage && this.view.setBackgroundImage(a.backgroundImage);
        this._requestAll()
    },showBag: function(a) {
        this._setCfg(a);
        this._showGoodsGroup();
        a = this.cfg;
        this._hideShop();
        this.selectorIndex = 1;
        a && a.backgroundImage && this.view.setBackgroundImage(a.backgroundImage);
        this._requestAll()
    },_userGhost: function() {
        cfg = this.cfg;
        this.dm.isGhost() && (cfg.onData ? U.delegate(cfg.onData, cfg.context || window)({type: H.ShopWidget.BAG_USER_GHOST,data: null}) : this._alert(H.widgets.Msg.ALERT_NO_LOGIN_TIP))
    },_requestPay: function() {
        if (window.IS_AC)
            U.log("【GoodsGroupC】调用SDK充值"), H.Sdk.pay(U.delegate(function() {
                U.log("【GoodsGroupC】调用SDK充值回调，请求用户信息");
                this.request(this.config.serverUrl, 
                [this.getRequest(this.CMD.USER_INFO)], function(a) {
                    U.log("【GoodsGroupC】充值后请求用户信息返回");
                    a.success || this._error(a.error)
                }, this, !0)
            }, this));
        else {
            var a = [];
            this.dm.hallConfig || a.push(this.getRequest(this.CMD.DT_CONF));
            this.dm.isLogged() && this.dm.user.isActivate && a.push(this.getRequest(this.CMD.U_COIN_AUTO_LOGIN));
            0 < a.length ? this.request(this.config.serverUrl, a, function(a) {
                a.success ? this._goPay(a.data.url) : this._error(a.error)
            }, this, !0) : this._goPay()
        }
    },_goPay: function(a) {
        U.log("【GoodsGroupC】调用充值的参数:" + a);
        var b;
        if (null != a && "" != a)
            b = a;
        else if (this.dm.hallConfig instanceof Object && "string" == typeof this.dm.hallConfig.userCenter)
            b = this.dm.hallConfig.upoint;
        else {
            this._alert(H.widgets.Msg.ERROR_REQUEST_PAY);
            return
        }
        U.log("【GoodsGroupC】充值url:" + b);
        var c = new H.widgets.ConfirmV({text: H.widgets.Msg.CONFIRM_COMMON,callback: U.delegate(function(a) {
                a == H.widgets.ConfirmV.OK && window.open(b, "_blank");
                this.popup.hide(c)
            }, this)});
        this.popup.show(c)
    },showBuy: function(a) {
        var b = a;
        "String" == typeof a && (b = this.dm.getSellItem(a));
        b && 
        (a = {goodsId: b.goodsId,goodsName: b.goodsName,price: b.price,expireIn: b.expireIn,coinGift: b.coinGift}, this._panBuy || (this._panBuy = new H.widgets.BuyV, this._panBuy.setWidth(555), this._panBuy.setHeight(339)), this._panBuy.setData(a), this.popup.show(this._panBuy, {onClose: U.delegate(function() {
                this.hideBuy()
            }, this)}))
    },hideBuy: function() {
        this.popup.hide(this._panBuy)
    },_requestAvatarBuy: function(a) {
        var b = this.dm.getMyGoods(a.goodsId);
        if (b && !b.isLimitTipOver && 62208E6 < b.expireIn + 2592E6) {
            var c = new H.widgets.ConfirmV({text: this.msg.BUY_GOODS_EXP_LIMIT,
                callback: U.delegate(function(d) {
                    this.popup.hide(c);
                    d == H.widgets.ConfirmV.OK && (b.isLimitTipOver = !0, this._confirmAvatarBuy(a))
                }, this)});
            this.popup.show(c)
        } else
            this._confirmAvatarBuy(a)
    },_confirmAvatarBuy: function(a) {
        this.request(this.config.serverUrl, [this.getRequest(this.CMD.GOODS_AVATAR_BUY, a), this.getRequest(this.CMD.GOODS_TRAN_DETAILS, null, !1)], function(a) {
            a.success ? (this.popup.show(new H.widgets.AlertV({text: this.msg.BUY_SUCCESS,popup: this.popup})), this.hideBuy()) : this.popup.show(new H.widgets.AlertV({text: this.msg.BUY_FAIL,
                popup: this.popup}))
        }, this, !0)
    },_requestHallConfig: function(a, b) {
        this.request(this.config.serverUrl, this.getRequest(this.CMD.DT_CONF), function(c) {
            c.success ? U.delegate(a, b || window)(c.data) : this._error(c.error)
        }, this, !0)
    },_setCfg: function(a) {
        a && (this.cfg = a)
    },_hideShop: function() {
    },_hideBag: function() {
    },_alert: function(a) {
        this.popup.show(new H.widgets.AlertV({text: a,popup: this.popup}))
    },_error: function(a) {
        U.log("【GoodsGroupC】出错:" + JSON.stringify(a));
        a ? this.popup.show(new H.widgets.AlertV({text: a.message,
            popup: this.popup})) : U.error("【AuthC】_error函数无有限参数")
    }});
H.widgets.NoticeC = H.widgets.BaseC.extend({init: function(a) {
        this._super(arguments);
        this.isServerStoped = !1;
        var b;
        b = G.Container.create();
        a.addChild(b);
        this.mainLayer = b;
        b = G.Container.create();
        a.addChild(b);
        this.superNoticeLayer = b;
        b = G.Container.create();
        a.addChild(b);
        this.popupLayer = b;
        U.log("top: " + b.getGlobalTop() + "  " + b.getGlobalLeft());
        this.popup = new G.PopupManager({parent: this.popupLayer,width: this.config.stageWidth,height: this.config.stageHeight});
        this._popNoticeV = new H.widgets.PopNoticeV;
        this._noticeInteral = 
        90
    },addListener: function() {
        this.ob.addListener(this.NT.SUPER_NOTICE_PLAY, this._superNoticePlay, this);
        this.ob.addListener(this.NT.SUPER_NOTICE_STOP, this._superNoticeStop, this);
        this.ob.addListener(this.NT.NOTICE_PLAY_COMPLETE, this._noticePlayComplete, this)
    },removeListener: function() {
        this.ob.removeListener(this.NT.SUPER_NOTICE_PLAY, this._superNoticePlay);
        this.ob.removeListener(this.NT.SUPER_NOTICE_STOP, this._superNoticeStop);
        this.ob.removeListener(this.NT.NOTICE_PLAY_COMPLETE, this._noticePlayComplete)
    },
    showNotice: function(a) {
        a && (this.data = a);
        this._noticeV || (this._noticeV = new H.widgets.NoticeV(a), this.mainLayer.addChild(this._noticeV));
        this.initShow(this._noticeV, a);
        this._requestNotice();
        this.showSuperNotice(a)
    },showSuperNotice: function(a) {
        a && (this.superData = a);
        this._superNoticeV || (this._superNoticeV = new H.widgets.SuperNoticeV(a), this.superNoticeLayer.addChild(this._superNoticeV));
        this.initShow(this._superNoticeV, a);
        this._requestSuperNotice();
        this._requestPopNotice()
    },initShow: function(a, b) {
        a.setVisible(!1);
        !isNaN(b.width) && a.setWidth(b.width);
        !isNaN(b.height) && a.setHeight(b.height);
        !isNaN(b.fontSize) && a.setFontSize(b.fontSize);
        !isNaN(b.bgOpacity) && a.setBgOpacity(b.bgOpacity);
        this._noticeV.setData(null);
        clearTimeout(this._waitId);
        this._waitId = null;
        clearTimeout(this._superWaitId);
        this._superWaitId = null
    },hideNotice: function() {
        this.data = null;
        this._noticeV.setData(null);
        null != this._waitId && (clearTimeout(this._waitId), this._waitId = null);
        this.superData = null;
        this._superNoticeV.setData(null);
        null != this._superWaitId && 
        (clearTimeout(this._superWaitId), this._superWaitId = null)
    },_superNoticePlay: function(a) {
        a == this._superNoticeV && (U.log("【H.widgets.NoticeC】收到超级公告播放"), this.mainLayer.setVisible(!1), this._noticeV.pause())
    },_superNoticeStop: function(a) {
        a == this._superNoticeV && (U.log("【H.widgets.NoticeC】收到超级公告播放完成"), this.mainLayer.setVisible(!0), this._noticeV.play())
    },_noticePlayComplete: function(a) {
        a == this._noticeV && (this._waitId && (clearTimeout(this._waitId), this._waitId = null), this._waitId = setTimeout(U.delegate(function() {
            clearTimeout(this._waitId);
            this._waitId = null;
            this._requestNotice()
        }, this), 1E3 * this._noticeInteral))
    },_requestNotice: function() {
        this.request(this.config.serverUrl, this.getRequest(this.CMD.NOTICE_LIST, {area: this.data.areaId || this.config.gameId,roomId: this.config.roomId}, !1), function(a) {
            a = a.data;
            a instanceof Object && (this._isShowSuperNotice ? this._noticeV.setVisible(!1) : this._noticeV.setVisible(!0), this._noticeInteral = a.interval || this._noticeInteral, this._noticeV.setData(a.msgs))
        }, this)
    },_requestPopNotice: function() {
        this.request(this.config.serverUrl, 
        this.getRequest(this.CMD.POP_LIST, {area: this.data.areaId || this.config.gameId,roomId: this.config.roomId}, !1), function(a) {
            this.popupLayer.setY(0);
            this.popupLayer.setX(0);
            this.popupLayer.setY(-1 * this.popupLayer.getBound().y);
            this.popupLayer.setX(-1 * this.popupLayer.getBound().x);
            U.log("super: 收到数据");
            a = a.data;
            a instanceof Object && (this._popNoticeInteral = a.interval || this._popNoticeInteral, this._popNoticeV.setPopup(this.popup), this._popNoticeV.setData(a.msgs), this._popWaitId = setTimeout(U.delegate(function() {
                clearTimeout(this._popWaitId);
                this._popWaitId = null;
                this._requestPopNotice()
            }, this), 1E3 * this._popNoticeInteral))
        }, this)
    },_requestSuperNotice: function() {
        U.log("super: 请求数据");
        this.request(this.config.serverUrl, this.getRequest(this.CMD.SUPER_NOTICE_LIST, {area: this.data.areaId || this.config.gameId,roomId: this.config.roomId}, !1), function(a) {
            U.log("super: 收到数据");
            a = a.data;
            a instanceof Object && (this._superNoticeInteral = a.interval || this._superNoticeInteral, this._superNoticeV.setData(a.msgs), this._superWaitId = setTimeout(U.delegate(function() {
                clearTimeout(this._superWaitId);
                this._superWaitId = null;
                this._requestSuperNotice()
            }, this), 1E3 * this._superNoticeInteral))
        }, this)
    }});
H.widgets.PushC = H.widgets.BaseC.extend({init: function(a) {
        this._isFirst = !0;
        this._super(arguments);
        this.stage = a
    },showPush: function(a) {
        this.data = a || {};
        if (this._pushV) {
            var b = this._pushV;
            !isNaN(a.width) && b.setWidth(a.width);
            !isNaN(a.height) && b.setHeight(a.height);
            !isNaN(a.fontSize) && b.setFontSize(a.fontSize);
            !isNaN(a.bgOpacity) && b.setBgOpacity(a.bgOpacity)
        } else
            this._pushV = new H.widgets.PushV(a), this.stage.addChild(this._pushV);
        this._pushV.setData(null);
        this._requestPush()
    },hidePush: function() {
        this.data = 
        null;
        this._pushV.setData(null)
    },_requestPush: function() {
        this.request(this.config.serverUrl, this.getRequest(this.CMD.PUSH_LIST, {gameId: this.config.gameId || 0,isFirst: !0 == (this.data.hasOwnProperty("isFirst") ? this.data.isFirst : this._isFirst) ? 1 : 0}, !1), function(a) {
            a.success && this._pushV.setData([a.data.message])
        }, this);
        this._isFirst = 0
    }});
H.widgets.BaseVO = G.BaseVO.extend({init: function(a) {
        this._super(arguments)
    }});
H.widgets.GoodsDictVO = H.widgets.BaseVO.extend({init: function() {
        this.goodsId = this.expireIn = 0;
        this.goodsName = "";
        this.price = this.coinGift = 0;
        this.intro = "";
        this.state = 0;
        this._super(arguments)
    }});
H.widgets.GoodsDictVO.STATE_NONE = 0;
H.widgets.GoodsDictVO.STATE_FOREVER = 1;
H.widgets.GoodsDictVO.STATE_DEFAULT = 2;
H.widgets.GoodsDictVO.STATE_CHARGE = 3;
H.widgets.GoodsVO = H.widgets.BaseVO.extend({init: function() {
        this.goodsId = this.expireIn = 0;
        this.goodsName = "";
        this.buyTime = this.state = this.count = 0;
        this.isLimitTipOver = !1;
        this.expireDate = new Date;
        this._super(arguments)
    },copy: function() {
        this._super(arguments);
        this.expireDate = new Date((new Date).getTime() + this.expireIn)
    },getExpireString: function() {
        return this.state == H.widgets.GoodsVO.STATE_FOREVER || this.state == H.widgets.GoodsVO.STATE_DEFAULT ? "永久" : this.expireDate.format("yyyy-MM-dd")
    }});
H.widgets.GoodsVO.STATE_NONE = 0;
H.widgets.GoodsVO.STATE_FOREVER = 1;
H.widgets.GoodsVO.STATE_DEFAULT = 2;
H.widgets.GoodsVO.STATE_PURCHASED_UNEXPIRED = 3;
H.widgets.GoodsVO.STATE_PURCHASED_EXPIRED = 4;
H.widgets.HallConfigVO = H.widgets.BaseVO.extend({init: function() {
        this.fr = this.ve = this.defaultBackUrl = this.passwordCenter = this.regAgreement = this.userCenter = this.websocket = this.flashsocket = this.upoint = this.serviceCenter = "";
        this._super(arguments)
    }});
H.widgets.UserVO = H.widgets.BaseVO.extend({init: function(a) {
        this.uid = 0;
        this.sex = this.uname = "";
        this.recent = null;
        this.lvExp = this.exp = this.coin = this.lv = 0;
        this.isVip = this.isActivate = !1;
        this.avatarId = 0;
        this.avatarExpire = {};
        this.ucoin = this.ugem = this.pUid = 0;
        this.webTokenSuffix = this.tt = null;
        this.webTokenTimeout = -1;
        this.dailyGivingDay = 0;
        this.hasDailyGiving = !1;
        this._super(arguments)
    },copy: function(a) {
        a && (this._super(arguments, [a]), a.avatarExpire && (this.avatarExpire = a.avatarExpire))
    }});
H.widgets.UserVO.SEX_UNKNOWN = 0;
H.widgets.UserVO.SEX_MAN = 1;
H.widgets.UserVO.SEX_WOMAN = 2;
H.widgets.UserVO.STATUS_GHOST = 0;
H.widgets.UserVO.STATUS_DEMO = 1;
H.widgets.UserVO.STATUS_NORMAL = 2;
H.widgets.CMD = {DT_CONF: "dt.conf",USER_INFO: "user.info",USER_ACTIVATE_BONUS: "activity.bindQuery",USER_GOODS: "user.goods",USER_LOGIN: "user.login",USER_LOGIN_SDK: "user.loginSdk",USER_BIND_SDK: "user.bindSdk",USER_DEMO: "user.demo",USER_BIND: "user.bind",USER_REG: "user.reg",USER_LOGIN_OUT: "user.loginOut",USER_GOODS_STATE: "user.goodsState",GOODS_TRAN_DETAILS: "goods.tranDetails",USER_UPDATE: "user.update",GOODS_AVATAR_BUY: "goods.avatarBuy",GOODS_AVATAR_USE: "goods.avatarUse",GOODS_LIST: "goods.list",NOTICE_LIST: "notice.list",
    SUPER_NOTICE_LIST: "superNotice.list",POP_LIST: "pop.list",PUSH_LIST: "box.gameNotice",U_COIN_AUTO_LOGIN: "ucoin.autoLogin"};
H.widgets.DM = Class.extend({init: function() {
        this.user = new H.widgets.UserVO;
        this.user.uid = U.Store.get("uid");
        this.myGoodsList = [];
        this.goodsList = [];
        this.sellGoodsList = [];
        this.hallConfig = null
    },isLogged: function() {
        return H.Api.isLogged()
    },getHallToken: function() {
        return H.Api.getHallToken()
    },getUserStatus: function() {
        return this.isLogged() ? this.user.isActivate ? H.widgets.UserVO.STATUS_NORMAL : H.widgets.UserVO.STATUS_DEMO : H.widgets.UserVO.STATUS_GHOST
    },isGhost: function() {
        return this.getUserStatus() == H.widgets.UserVO.STATUS_GHOST
    },
    isDemo: function() {
        return this.getUserStatus() == H.widgets.UserVO.STATUS_DEMO
    },isNormal: function() {
        return this.getUserStatus() == H.widgets.UserVO.STATUS_NORMAL
    },addMyGoods: function(a) {
        return this.myGoodsList.push(a)
    },updateGoodsList: function(a) {
        this.goodsList = a
    },getMyGoods: function(a) {
        return this.myGoodsList.fetchFirst("goodsId", a)
    },getAvailabilityGoodsList: function() {
        for (var a = new Date, b = [], c = 0; c < this.myGoodsList.length; c++) {
            var d = this.myGoodsList[c];
            (d.state == H.widgets.GoodsVO.STATE_FOREVER || d.state == 
            H.widgets.GoodsVO.STATE_DEFAULT || d.expireDate > a) && b.push(d)
        }
        return b
    },updateMyGoodsList: function(a) {
        this.myGoodsList.splice(0);
        if (a instanceof Array)
            for (var b = 0; b < a.length; b++)
                this.myGoodsList.push(new H.widgets.GoodsVO(a[b]))
    },updateUserInfo: function(a) {
        this.user.copy(a)
    },updateAvatarId: function(a) {
        this.user.avatarId = a
    },updateMoney: function(a) {
        a instanceof Object && (null != a.coin && (this.user.coin = a.coin), null != a.ucoin && (this.user.ucoin = a.ucoin))
    },getSellGoodsList: function() {
        if (!this.sellGoodsList || 
        1 > this.sellGoodsList.length) {
            this.sellGoodsList = [];
            for (var a = this.goodsList.length, b, c = 0; c < a; c++)
                b = this.goodsList[c], b.state == H.widgets.GoodsDictVO.STATE_CHARGE && this.sellGoodsList.push(b)
        }
        return this.sellGoodsList
    },getSellItem: function(a) {
        for (var b = this.getSellGoodsList(), c = b.length, d = 0; d < c; d++)
            if (a == b[d].id)
                return b[d];
        return null
    }});
H.widgets.DM.getInstance = function() {
    H.widgets.DM._instance || (H.widgets.DM._instance = new H.widgets.DM);
    return H.widgets.DM._instance
};
H.widgets.NT = {SHOW_SHOP: "WIDGET_SHOW_SHOP",SHOW_BAG: "WIDGET_SHOW_BAG",HIDE_SHOP: "WIDGET_HIDE_SHOP",HIDE_BAG: "WIDGET_HIDE_BAG",INFORM_AVATAR_BUY: "WIDGET_INFORM_AVATAR_BUY",CLOSE_GOODS_GROUP: "WIDGET_CLOSE_GOODS_GROUP",USER_GHOST: "WIDGET_USER_GHOST",SHOW_BUY: "WIDGET_SHOW_BUY",HIDE_BUY: "WIDGET_HIDE_BUY",REQUEST_AVATAR_USE: "WIDGET_REQUEST_AVATAR_USE",REQUEST_AVATAR_BUY: "WIDGET_REQUEST_AVATAR_BUY",LOGIN_SDK: "WIDGET_LOGIN_SDK",SHOW_LOGIN_SELECT: "WIDGET_SHOW_LOGIN_SELECT",HIDE_LOGIN_SELECT: "WIDGET_HIDE_LOGIN_SELECT",
    UPDATE_MONEY: "WIDGET_UPDATE_MONEY",UPDATE_USER_INFO: "WIDGET_UPDATE_USER_INFO",UPDATE_USER_BAG: "WIDGET_UPDATE_USER_BAG",REQUEST_DEMO: "WIDGET_REQUEST_DEMO",SHOW_LOGIN: "WIDGET_SHOW_LOGIN",HIDE_LOGIN: "WIDGET_HIDE_LOGIN",REQUEST_LOGIN: "WIDGET_REQUEST_LOGIN",SHOW_REG: "WIDGET_SHOW_REG",HIDE_REG: "WIDGET_HIDE_REG",REQUEST_REG: "WIDGET_REQUEST_REG",SHOW_ACTIVATE: "WIDGET_SHOW_ACTIVATE",HIDE_ACTIVATE: "WIDGET_HIDE_ACTIVATE",REQUEST_ACTIVATE: "WIDGET_REQUEST_ACTIVATE",SHOW_BIND: "WIDGET_SHOW_BIND",HIDE_BIND: "WIDGET_HIDE_BIND",
    REQUEST_BIND: "WIDGET_REQUEST_BIND",SHOW_USER_INFO: "WIDGET_SHOW_USER_INFO",HIDE_USER_INFO: "WIDGET_HIDE_USER_INFO",REQUEST_UPDATE_USER_INFO: "WIDGET_REQUEST_UPDATE_USER_INFO",REQUEST_REG_AGREEMENT: "WIDGET_REQUEST_REG_AGREEMENT",REQUEST_FORGET_PASSWORD: "WIDGET_REQUEST_FORGET_PASSWORD",REQUEST_PAY: "WIDGET_REQUEST_PAY",NOTICE_PLAY_START: "NOTICE_PLAY_START",NOTICE_PLAY_COMPLETE: "WIDGET_NOTICE_PLAY_COMPLETE",NOTICE_PLAY_SINGLE_COMPLETE: "NOTICE_PLAY_SINGLE_COMPLETE",PUSH_UPDATE: "WIDGET_PUSH_UPDATE",REQUEST_UPDATE_NICKNAME: "WIDGET_REQUEST_UPDATE_NICKNAME",
    NOTICE_SERVER_STATE: "NOTICE_SERVER_STATE",SUPER_NOTICE_PLAY: "SUPER_NOTICE_PLAY",SUPER_NOTICE_STOP: "SUPER_NOTICE_STOP"};
H.widgets.BaseP = G.BaseP.extend({init: function() {
        this.ob = H.Widget.ob;
        this.dm = H.widgets.DM.getInstance();
        this.CMD = H.widgets.CMD;
        this.NT = H.widgets.NT;
        this.config = H.widgets.Config;
        this._listenerCmds = {};
        H.Api.bind(H.Api.BIND_TYPE_DATA, this._cmdHandler, this);
        var a = this.listenerCmds();
        if (a && a instanceof Array)
            for (var b = 0; b < a.length; b++)
                this._listenerCmds[a[b]] = !0;
        this._super(arguments)
    },listenerCmds: function() {
        return null
    },cmdHandler: function() {
    },destroy: function() {
        H.Api.unbind(H.Api.BIND_TYPE_DATA, this._cmdHandler);
        this._super(arguments)
    },_cmdHandler: function(a) {
        if (a && a.responses && a.responses instanceof Array)
            for (var b = 0; b < a.responses.length; b++) {
                var c = a.responses[b];
                this._listenerCmds[c.action] && this.cmdHandler(c.action, c.data, c.request)
            }
    }});
H.widgets.GoodsP = H.widgets.BaseP.extend({init: function() {
        this._super(arguments)
    },listenerCmds: function() {
        var a = this.CMD;
        return [a.GOODS_LIST, a.USER_GOODS, a.GOODS_AVATAR_USE, a.GOODS_AVATAR_BUY]
    },cmdHandler: function(a, b, c) {
        var d = this.CMD;
        switch (a) {
            case d.GOODS_LIST:
                this._goodsList(b);
                break;
            case d.USER_GOODS:
                this._userGoods(b);
                break;
            case d.GOODS_AVATAR_USE:
                this._goodsAvatarUse(b, c);
                break;
            case d.GOODS_AVATAR_BUY:
                this._goodsAvatarBuy(b)
        }
    },_goodsList: function(a) {
        U.log("【H.widgets.GoodsP】接收物品列表");
        this.dm.updateGoodsList(a)
    },
    _userGoods: function(a) {
        U.log("【H.widgets.GoodsP】接收玩家物品");
        this.dm.updateMyGoodsList(a);
        this.ob.notify(this.NT.UPDATE_USER_BAG, this.dm.user)
    },_goodsAvatarUse: function(a, b) {
        U.log("【H.widgets.GoodsP】接收头像使用");
        this.dm.updateAvatarId(b.data.goodsId)
    },_goodsAvatarBuy: function(a) {
        U.log("【H.widgets.GoodsP】接收头像购买");
        this.dm.updateMoney(a);
        this.ob.notify(this.NT.UPDATE_MONEY, this.dm.user);
        var b = this.dm.getMyGoods(a.goodsId);
        b ? b.copy(a) : this.dm.addMyGoods(new H.widgets.GoodsVO(a));
        this.ob.notify(this.NT.UPDATE_USER_BAG, 
        this.dm.user)
    }});
H.widgets.InfoP = H.widgets.BaseP.extend({init: function(a) {
        this._super(arguments)
    },listenerCmds: function() {
        var a = this.CMD;
        return [a.NOTICE_LIST, a.SUPER_NOTICE_LIST, a.PUSH_LIST, a.DT_CONF]
    },cmdHandler: function(a, b) {
        var c = H.widgets.CMD;
        switch (a) {
            case c.SUPER_NOTICE_LIST:
                this._superNoticeList(b);
                break;
            case c.NOTICE_LIST:
                this._noticeList(b);
                break;
            case c.PUSH_LIST:
                this._pushList(b);
                break;
            case c.DT_CONF:
                this._dtConf(b)
        }
    },_superNoticeList: function() {
        U.log("【H.widgets.InfoP】接收停服公告列表")
    },_noticeList: function() {
        U.log("【H.widgets.InfoP】接收公告列表")
    },_pushList: function() {
        U.log("【H.widgets.InfoP】接收推送列表")
    },
    _dtConf: function(a) {
        U.log("【H.widgets.InfoP】接收大厅配置信息");
        a instanceof Object ? this.dm.hallConfig = new H.widgets.HallConfigVO(a) : U.warn("【H.widgets.InfoP】接收大厅配置出错" + JSON.stringify(a))
    }});
H.widgets.UserP = H.widgets.BaseP.extend({init: function() {
        this._super(arguments)
    },listenerCmds: function() {
        var a = this.CMD;
        return [a.USER_BIND, a.USER_DEMO, a.USER_LOGIN, a.USER_LOGIN_SDK, a.USER_REG, a.USER_INFO, a.USER_UPDATE]
    },cmdHandler: function(a, b, c) {
        var d = H.widgets.CMD;
        switch (a) {
            case d.USER_BIND:
            case d.USER_REG:
            case d.USER_DEMO:
            case d.USER_LOGIN:
            case d.USER_LOGIN_SDK:
            case d.USER_INFO:
                this._userInfo(b);
                break;
            case d.USER_UPDATE:
                this._userUpdate(b, c)
        }
    },_userInfo: function(a) {
        U.log("【H.widgets.UserP】接收用户信息");
        a instanceof Object && (this.dm.updateUserInfo(a), this.ob.notify(this.NT.UPDATE_USER_INFO, this.dm.user))
    },_userUpdate: function(a, b) {
        U.log("【H.widgets.UserP】接收用户信息更新");
        b.data instanceof Object && "string" == typeof b.data.name ? (this.dm.user.uname = b.data.name, this.ob.notify(this.NT.UPDATE_USER_INFO, this.dm.user)) : U.warn("【H.widgets.UserP】用户信息更新数据不符合要求")
    }});
H.widgets.BaseV = G.BaseV.extend({init: function() {
        this.ob = H.Widget.ob;
        this.dm = H.widgets.DM.getInstance();
        this.CMD = H.widgets.CMD;
        this.NT = H.widgets.NT;
        this.config = H.widgets.Config;
        this.msg = H.widgets.Msg;
        this._super(arguments)
    },getSlice: function(a) {
        return this.config.ps.getSlice(a)
    },getPos: function(a, b) {
        return this.config.ps.getPos(a, b)
    },getPosition: function(a, b) {
        return this.config.ps.getPos(a, b)
    }});
H.widgets.ComponentV = G.ComponentV.extend({init: function() {
        this.ob = H.Widget.ob;
        this.dm = H.widgets.DM.getInstance();
        this.CMD = H.widgets.CMD;
        this.NT = H.widgets.NT;
        this.config = H.widgets.Config;
        this.msg = H.widgets.Msg;
        this._super(arguments)
    },getSlice: function(a) {
        return this.config.ps.getSlice(a)
    },getPos: function(a, b) {
        return this.config.ps.getPos(a, b)
    },getPosition: function(a, b) {
        return this.config.ps.getPos(a, b)
    }});
H.widgets.ActivateConfirmV = H.widgets.BaseV.extend({init: function(a) {
        a && (this.text = a.text, this.callback = a.callback);
        this._super(arguments)
    },initUI: function() {
        var a, b, c = this.getPos("检测激活", "背景框");
        a = G.Image.create({slice: this.getSlice("背景框01")});
        this.addChild(a);
        this.setWidth(a.width);
        this.setHeight(a.height);
        a = G.Text.create({text: this.text});
        b = this.getPos("检测激活", "文字");
        a.setPos(b, c);
        a.setColor(H.widgets.ActivateConfirmV.FONT_COLOR);
        a.setFontSize(H.widgets.ActivateConfirmV.FONT_SIZE);
        a.setLineSpacing(H.widgets.ActivateConfirmV.LINE_SPACING);
        a.setWidth(b[2]);
        a.setTextAlign("center");
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-马上激活-默认"),imgDown: this.getSlice("按钮-马上激活-点击"),callback: U.delegate(function() {
                this.callback && this.callback(H.widgets.ConfirmV.OK)
            }, this)});
        a.setPos(this.getPos("检测激活", "马上激活-按钮"), c);
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-退出大厅-默认"),imgDown: this.getSlice("按钮-退出大厅-点击"),callback: U.delegate(function() {
                this.callback && this.callback(H.widgets.ConfirmV.CANCEL)
            }, this)});
        a.setPos(this.getPos("检测激活", 
        "退出大厅-按钮"), c);
        this.addChild(a)
    }});
H.widgets.ActivateConfirmV.FONT_SIZE = 24;
H.widgets.ActivateConfirmV.LINE_SPACING = 12;
H.widgets.ActivateConfirmV.FONT_COLOR = "white";
H.widgets.ActivateConfirmV.OK = 1;
H.widgets.ActivateConfirmV.CANCEL = 2;
H.widgets.ActivateV = H.widgets.ComponentV.extend({init: function() {
        this._super(arguments)
    },initUI: function() {
        var a, b, c = this.getPos("游戏大厅-激活", "背景框04");
        a = G.Image.create({slice: this.getSlice("背景框04")});
        this.addChild(a);
        this._bg = a;
        a = G.Text.create({text: "温馨提示:完善以下资料可激活试玩账号"});
        b = this.getPos("游戏大厅-激活", "温馨提示");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setFontSize(b[3]);
        a.setTextAlign("center");
        a.setColor(this.config.COLOR_ORANGE);
        this.addChild(a);
        for (var d = [{id: 1,name: "a",must: !0,titleId: "昵称",titleText: "昵  　　称:",initTip: "提示：2～20个字符"}, 
            {id: 2,name: "b",must: !0,titleId: "密码",titleText: "密  　　码:",initTip: "提示：建议使用数字和字母组合"}, {id: 3,name: "c",must: !1,titleId: "邮箱",titleText: "邮  　　箱:",initTip: "",wrongTip: "提示:该邮箱格式不正确,请重新输入"}], e = 0; e < d.length; e++) {
            var f = d[e];
            f.must && (a = G.Image.create({slice: this.getSlice("图标-星号")}), a.setPos(this.getPos("游戏大厅-激活", "图标-星号" + f.id), c), this.addChild(a));
            a = G.Text.create({text: f.titleText});
            a.setPos(this.getPos("游戏大厅-激活", f.titleId), c);
            a.setFontSize(30);
            a.setColor("#FFF");
            this.addChild(a);
            a = G.Text.create({text: f.initTip});
            b = this.getPos("游戏大厅-激活", "提示" + f.id);
            a.setPos(b, c);
            a.setFontSize(b[3]);
            a.setColor(this.config.COLOR_ORANGE);
            this.addChild(a);
            this[f.name + "_tip"] = a;
            a = G.Input.create({onblur: U.delegate(this._formVerify, this, f, d)});
            b = this.getPos("游戏大厅-激活", "输入条07" + f.name);
            this.config.setInputStyle(a);
            a.setPos(b, c);
            a.setWidth(b[2]);
            this.addChild(a);
            this[f.name] = a;
            a = G.Image.create({slice: this.getSlice("图标-对")});
            a.setVisible(!1);
            a.setPos(this.getPos("游戏大厅-激活", "图标-对错" + f.id), c);
            this.addChild(a);
            this[f.name + "_right"] = a;
            a = G.Image.create({slice: this.getSlice("图标-错")});
            a.setVisible(!1);
            a.setPos(this.getPos("游戏大厅-激活", "图标-对错" + f.id), c);
            this.addChild(a);
            this[f.name + "_wrong"] = a
        }
        a = G.Text.create({text: "以后可使用邮箱+密码登录,同时设为密保邮箱,保护账号安全"});
        b = this.getPos("游戏大厅-激活", "提示4");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setFontSize(b[3]);
        a.setTextAlign("center");
        a.setColor(this.config.COLOR_ORANGE);
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-确认1-默认"),imgDown: this.getSlice("按钮-确认1-点击"),callback: U.delegate(function() {
                for (var a = 0; a < d.length; a++)
                    if (!this._formVerify(d[a], d))
                        return;
                var a = this[d[0].name].getText(), b = this[d[1].name].getText(), c = this[d[2].name].getText();
                this.ob.notify(this.NT.REQUEST_ACTIVATE, {name: a,password: b,email: c})
            }, this)});
        a.setPos(this.getPos("游戏大厅-激活", "按钮-确认"), c);
        this.addChild(a);
        a = G.Text.create({text: "有UC账号？点击这里绑定吧！"});
        b = this.getPos("游戏大厅-激活", "激活账号文字提示");
        a.setPos(b, c);
        a.setFontSize(b[3]);
        a.setColor("#FFF");
        a.addEventListener(G.EVENT.CLICK, U.delegate(function() {
            this.ob.notify(this.NT.HIDE_ACTIVATE);
            this.ob.notify(this.NT.SHOW_BIND)
        }, this));
        this.addChild(a);
        this.setWidth(this._bg.getWidth());
        this.setHeight(this._bg.getHeight())
    },_formVerify: function(a) {
        var b = !1;
        switch (a.name) {
            case "a":
                b = this[a.name].getText().trim();
                b = 2 <= b.length && 20 >= b.length;
                break;
            case "b":
                b = this[a.name].getText();
                b = 6 <= b.length && 16 >= b.length && H.widgets.Utils.testPassword(b);
                break;
            case "c":
                b = this[a.name].getText().trim(), b = "" == b || H.widgets.Utils.testEmail(b)
        }
        this[a.name + "_right"].setVisible(b);
        this[a.name + "_wrong"].setVisible(!b);
        this[a.name + "_tip"].setText(b ? a.initTip : a.wrongTip || 
        a.initTip);
        return b
    }});
H.widgets.BindV = H.widgets.ComponentV.extend({init: function() {
        this._super(arguments)
    },initUI: function() {
        var a, b, c = this.getPos("试玩激活1", "背景框");
        a = G.Image.create({slice: this.getSlice("背景框04")});
        this.addChild(a);
        this._bg = a;
        a = G.Text.create({text: "温馨提示:输入已有UC账号和密码可绑定试玩账号"});
        b = this.getPos("试玩激活1", "温馨提示");
        a.setPos(b, c);
        a.setFontSize(26);
        a.setColor("#f8b551");
        a.setWidth(b[2]);
        a.setTextAlign("center");
        this.addChild(a);
        a = G.Text.create({text: "账 号:"});
        b = this.getPos("试玩激活1", "账号");
        a.setPos(b, c);
        a.setFontSize(24);
        a.setWidth(b[2]);
        a.setColor("#FFF");
        this.addChild(a);
        a = G.Input.create({color: this.config.INPUT_COLOR});
        a.setPlaceHolder(this.msg.PLACEHOLDER_UID);
        a.setPlaceHolderColor(this.config.INPUT_TIP_COLOR);
        this.config.setInputStyle(a);
        b = this.getPos("试玩激活1", "输入框1");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setY(a.getY() + (b[3] - 36 >> 1));
        this.addChild(a);
        this._inputUid = a;
        a = G.Text.create({text: "密 码:"});
        b = this.getPos("试玩激活1", "密码");
        a.setPos(b, c);
        a.setFontSize(24);
        a.setWidth(b[2]);
        a.setColor("#FFF");
        this.addChild(a);
        a = G.Input.create({type: "password"});
        this.config.setInputStyle(a);
        b = this.getPos("试玩激活1", "输入框2");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setY(a.getY() + (b[3] - 36 >> 1));
        this.addChild(a);
        this._inputPwd = a;
        a = G.Button.create({imgUp: this.getSlice("按钮-确认1-默认"),imgDown: this.getSlice("按钮-确认1-点击"),callback: U.delegate(function() {
                var a = this._inputUid.getValue().trim();
                a == H.widgets.Msg.PLACEHOLDER_UID && (a = "");
                var b = this._inputPwd.getValue();
                this.ob.notify(this.NT.REQUEST_BIND, {uid: a,password: b})
            }, this)});
        a.setPos(this.getPos("试玩激活1", "确定按钮"), c);
        this.addChild(a);
        a = G.Text.create({text: "还没有UC账号？点击这里激活吧！"});
        b = this.getPos("试玩激活1", "提示");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setFontSize(b[3]);
        a.setColor("#FFF");
        a.setTextAlign("center");
        a.addEventListener(G.EVENT.CLICK, U.delegate(function() {
            this.ob.notify(this.NT.HIDE_BIND);
            this.ob.notify(this.NT.SHOW_ACTIVATE)
        }, this));
        this.addChild(a);
        this.setWidth(this._bg.getWidth());
        this.setHeight(this._bg.getHeight())
    }});
H.widgets.LoginSelectV = H.widgets.ComponentV.extend({init: function() {
        this._super(arguments)
    },initUI: function() {
        var a, b = this.getPos("游戏大厅-试玩", "登录框-底");
        a = G.Image.create({slice: this.getSlice("登录框-底")});
        this.addChild(a);
        this._bg = a;
        a = G.Button.create({imgUp: this.getSlice("按钮-游客试玩-默认"),imgDown: this.getSlice("按钮-游客试玩-点击"),callback: U.delegate(function() {
                this.ob.notify(this.NT.REQUEST_DEMO)
            }, this)});
        a.setPos(this.getPos("游戏大厅-试玩", "按钮-游客试玩"), b);
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-注册2-默认"),
            imgDown: this.getSlice("按钮-注册2-点击"),callback: U.delegate(function() {
                this.ob.notify(this.NT.HIDE_LOGIN_SELECT);
                this.ob.notify(this.NT.SHOW_REG)
            }, this)});
        a.setPos(this.getPos("游戏大厅-试玩", "按钮-注册2"), b);
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-登录2-默认"),imgDown: this.getSlice("按钮-登录2-点击"),callback: U.delegate(function() {
                this.ob.notify(this.NT.HIDE_LOGIN_SELECT);
                this.ob.notify(this.NT.SHOW_LOGIN)
            }, this)});
        a.setPos(this.getPos("游戏大厅-试玩", "按钮-登录2"), b);
        this.addChild(a);
        this.setWidth(this._bg.getWidth());
        this.setHeight(this._bg.getHeight())
    }});
H.widgets.LoginV = H.widgets.ComponentV.extend({init: function() {
        this._super(arguments)
    },initUI: function() {
        var a, b, c = this.getPos("游戏大厅-登录", "背景框-底");
        a = G.Image.create({slice: this.getSlice("登录框-底")});
        this.addChild(a);
        this._bg = a;
        a = G.Image.create({slice: this.getSlice("UC游戏大厅")});
        a.setPos(this.getPos("游戏大厅-登录", "UC游戏大厅"), c);
        this.addChild(a);
        a = G.Text.create({text: "账 号:"});
        b = this.getPos("游戏大厅-登录", "账号");
        a.setPos(b, c);
        a.setFontSize(28);
        a.setWidth(b[2]);
        a.setColor("#FFF");
        this.addChild(a);
        a = G.Input.create({color: this.config.INPUT_COLOR});
        a.setPlaceHolder(this.msg.PLACEHOLDER_UID);
        a.setPlaceHolderColor(this.config.INPUT_TIP_COLOR);
        this.config.setInputStyle(a);
        b = this.getPos("游戏大厅-登录", "输入条08a");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setY(a.getY() + (b[3] - 36 >> 1));
        this.addChild(a);
        this._inputUid = a;
        a = G.Text.create({text: "密 码:"});
        b = this.getPos("游戏大厅-登录", "密码");
        a.setPos(b, c);
        a.setFontSize(28);
        a.setWidth(b[2]);
        a.setColor("#FFF");
        this.addChild(a);
        a = G.Input.create({type: "password"});
        this.config.setInputStyle(a);
        b = this.getPos("游戏大厅-登录", "输入条08b");
        a.setPos(b, 
        c);
        a.setWidth(b[2]);
        a.setY(a.getY() + (b[3] - 36 >> 1));
        this.addChild(a);
        this._inputPwd = a;
        a = G.Button.create({imgUp: this.getSlice("按钮-注册1-默认"),imgDown: this.getSlice("按钮-注册1-点击"),callback: U.delegate(function() {
                this.ob.notify(this.NT.HIDE_LOGIN);
                this.ob.notify(this.NT.SHOW_REG)
            }, this)});
        a.setPos(this.getPos("游戏大厅-登录", "按钮-注册1"), c);
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-找回密码-默认"),imgDown: this.getSlice("按钮-找回密码-点击"),callback: U.delegate(function() {
                this.ob.notify(this.NT.REQUEST_FORGET_PASSWORD)
            }, 
            this)});
        a.setPos(this.getPos("游戏大厅-登录", "按钮-找回密码"), c);
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-登录1-默认"),imgDown: this.getSlice("按钮-登录1-点击"),callback: U.delegate(function() {
                var a = this._inputUid.getValue().trim();
                a == H.widgets.Msg.PLACEHOLDER_UID && (a = "");
                var b = this._inputPwd.getValue();
                this.ob.notify(this.NT.REQUEST_LOGIN, {uid: a,password: b})
            }, this)});
        a.setPos(this.getPos("游戏大厅-登录", "按钮-登录1"), c);
        this.addChild(a);
        this.setWidth(this._bg.getWidth());
        this.setHeight(this._bg.getHeight())
    }});
H.widgets.RegV = H.widgets.ComponentV.extend({init: function() {
        this._super(arguments)
    },initUI: function() {
        var a, b, c = this.getPos("游戏大厅-注册", "背景框04");
        a = G.Image.create({slice: this.getSlice("背景框04")});
        this.addChild(a);
        this._bg = a;
        for (var d = [{id: 1,name: "a",must: !0,titleId: "昵称",titleText: "昵    称:",initTip: "提示:2~20个字符"}, {id: 2,name: "b",must: !0,titleId: "密码",titleText: "密    码:",initTip: "提示:建议使用数字和字母组合,6~20个字符"}, {id: 3,name: "c",must: !0,titleId: "确认密码",titleText: "确认密码:",initTip: "",wrongTip: "提示:两次输入密码不一致"}, {id: 4,name: "d",
                must: !1,titleId: "邮箱",titleText: "邮    箱:",initTip: "",wrongTip: "提示:该邮箱格式不正确,请重新输入"}], e = 0; e < d.length; e++) {
            var f = d[e];
            f.must && (a = G.Image.create({slice: this.getSlice("图标-星号")}), a.setPos(this.getPos("游戏大厅-注册", "图标-星号" + f.name), c), this.addChild(a));
            a = G.Text.create({text: f.titleText});
            a.setPos(this.getPos("游戏大厅-注册", f.titleId), c);
            a.setFontSize(30);
            a.setColor("#FFF");
            this.addChild(a);
            a = G.Text.create({text: f.initTip});
            a.setPos(this.getPos("游戏大厅-注册", "提示" + f.name), c);
            a.setFontSize(20);
            a.setColor("#FC0");
            this.addChild(a);
            this[f.name + "_tip"] = a;
            a = G.Input.create({onblur: U.delegate(this._formVerify, this, f, d)});
            this.config.setInputStyle(a);
            b = this.getPos("游戏大厅-注册", "输入条07" + f.name);
            a.setPos(b, c);
            a.setWidth(b[2]);
            a.setY(a.getY() + (b[3] - 36 >> 1));
            this.addChild(a);
            this[f.name] = a;
            a = G.Image.create({slice: this.getSlice("图标-对")});
            a.setVisible(!1);
            a.setPos(this.getPos("游戏大厅-注册", "图标-对错" + f.name), c);
            this.addChild(a);
            this[f.name + "_right"] = a;
            a = G.Image.create({slice: this.getSlice("图标-错")});
            a.setVisible(!1);
            a.setPos(this.getPos("游戏大厅-注册", 
            "图标-对错" + f.name), c);
            this.addChild(a);
            this[f.name + "_wrong"] = a
        }
        a = G.Text.create({text: "以后可使用邮箱+密码登录,同时设为密保邮箱,保护账号安全"});
        a.setFontSize(18);
        a.setTextAlign("center");
        a.setColor("#FC0");
        b = this.getPos("游戏大厅-注册", "文字解说");
        a.setPos(b, c);
        a.setWidth(b[2]);
        this.addChild(a);
        a = G.ToggleButton.create({imgUp: this.getSlice("图标-未选中"),checkedImgUp: this.getSlice("图标-选中"),callback: U.delegate(function() {
                var a = this._btnAgree.isChecked();
                this._btnAgree.setChecked(a);
                this._btnLogin.setEnabled(a)
            }, this)});
        a.setPos(this.getPos("游戏大厅-注册", 
        "图标-选中"), c);
        a.setChecked(!0);
        this.addChild(a);
        this._btnAgree = a;
        a = G.Text.create({text: "同意UC注册用户协议"});
        a.setFontSize(27);
        a.setColor("#FFF");
        a.setPos(this.getPos("游戏大厅-注册", "游戏大厅-注册2-62"), c);
        a.addEventListener(G.EVENT.CLICK, U.delegate(function() {
            this.ob.notify(this.NT.REQUEST_REG_AGREEMENT)
        }, this));
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-确认1-默认"),imgDown: this.getSlice("按钮-确认1-点击"),imgDisable: this.getSlice("按钮-确认1-灰色"),callback: U.delegate(function() {
                for (var a = 0; a < d.length; a++)
                    if (!this._formVerify(d[a], 
                    d))
                        return;
                var a = this[d[0].name].getText().trim(), b = this[d[1].name].getText(), c = this[d[3].name].getText().trim();
                this.ob.notify(this.NT.REQUEST_REG, {name: a,password: b,email: c})
            }, this)});
        a.setEnabled(!0);
        a.setPos(this.getPos("游戏大厅-注册", "按钮-确认"), c);
        this.addChild(a);
        this._btnLogin = a;
        this.setWidth(this._bg.getWidth());
        this.setHeight(this._bg.getHeight())
    },_formVerify: function(a, b) {
        var c = !1;
        switch (a.name) {
            case "a":
                c = this[a.name].getText().trim();
                c = 2 <= c.length && 20 >= c.length;
                break;
            case "b":
            case "c":
                var d = 
                this[b[1].name].getText(), e = this[b[2].name].getText(), c = 6 <= d.length && 20 >= d.length, d = d == e && 6 <= e.length && 20 >= e.length;
                this[b[1].name + "_right"].setVisible(c);
                this[b[2].name + "_right"].setVisible(d);
                this[b[1].name + "_wrong"].setVisible(!c);
                this[b[2].name + "_wrong"].setVisible(!d);
                this[b[1].name + "_tip"].setText(c ? b[1].initTip : b[1].wrongTip || b[1].initTip);
                this[b[2].name + "_tip"].setText(d ? b[2].initTip : b[2].wrongTip || b[2].initTip);
                return !0;
            case "d":
                c = this[a.name].getText().trim();
                if ("" == c)
                    return this[a.name + 
                    "_right"].setVisible(!1), this[a.name + "_wrong"].setVisible(!1), this[a.name + "_tip"].setText(a.initTip), !0;
                c = "" == c || H.widgets.Utils.testEmail(c)
        }
        this[a.name + "_right"].setVisible(c);
        this[a.name + "_wrong"].setVisible(!c);
        this[a.name + "_tip"].setText(c ? a.initTip : a.wrongTip || a.initTip);
        return c
    }});
H.widgets.UpdateNickV = H.widgets.ComponentV.extend({init: function(a) {
        this.value = a.value;
        this._super(arguments)
    },initUI: function() {
        var a, b, c = this.getPos("输入昵称", "背景框");
        a = G.Image.create({slice: this.getSlice("背景框01")});
        a.setScale(0.9, 0.9);
        this.addChild(a);
        this.setWidth(a.width);
        this.setHeight(a.height);
        a = G.Text.create({text: "昵  称:"});
        b = this.getPos("输入昵称", "昵称");
        a.setPos(b, c);
        a.setColor(this.config.COLOR_WHITE);
        a.setWidth(b[2]);
        a.setFontSize(b[3]);
        a.setTextAlign("right");
        this.addChild(a);
        a = G.Input.create({text: this.value});
        this.addChild(a);
        b = this.getPos("输入昵称", "输入条");
        this.config.setInputStyle(a);
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setColor(this.config.COLOR_GAY);
        this._inputNickname = a;
        a = G.Text.create({text: this.msg.UPDATE_NICK_INPUT_EMPTY});
        b = this.getPos("输入昵称", "提示");
        a.setPos(b, c);
        a.setColor(this.config.COLOR_ORANGE);
        a.setWidth(b[2]);
        a.setFontSize(b[3]);
        this.addChild(a);
        this._txtTip = a;
        a = G.Button.create({imgUp: this.getSlice("按钮-确定-默认"),imgDown: this.getSlice("按钮-确定-点击"),callback: U.delegate(function() {
                var a = this._inputNickname.getValue().trim();
                "string" != typeof a || 1 > a.length || 20 < a.length ? this.setTipText(this.msg.UPDATE_NICK_INPUT_EMPTY) : this.ob.notify(this.NT.REQUEST_UPDATE_NICKNAME, {name: a})
            }, this)});
        a.setPos(this.getPos("输入昵称", "确定按钮"), c);
        this.addChild(a)
    },setTipText: function(a) {
        this._txtTip.setText(a)
    }});
H.widgets.UserInfoV = H.widgets.ComponentV.extend({init: function() {
        this._super(arguments)
    },initUI: function() {
        var a, b, c = this.getPos("游戏大厅-注册", "背景框04");
        a = G.Image.create({slice: this.getSlice("背景框04")});
        this.addChild(a);
        this._bg = a;
        a = G.Text.create();
        b = this.getPos("我要完善资料", "文字1");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setLineSpacing(20);
        a.setFontSize(22);
        a.setColor("#FFF");
        a.setTextAlign("center");
        this.addChild(a);
        this._txtInfo = a;
        a = G.Button.create({imgUp: this.getSlice("按钮-记住了-默认"),imgDown: this.getSlice("按钮-记住了-点击"),
            callback: U.delegate(function() {
                this.ob.notify(this.NT.HIDE_USER_INFO)
            }, this)});
        a.setPos(this.getPos("我要完善资料", "按钮-记住了"), c);
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-我要完善-默认"),imgDown: this.getSlice("按钮-我要完善-点击"),callback: U.delegate(function() {
                this.ob.notify(this.NT.REQUEST_UPDATE_USER_INFO)
            }, this)});
        a.setPos(this.getPos("我要完善资料", "按钮-我要完善"), c);
        this.addChild(a);
        this.setWidth(this._bg.getWidth());
        this.setHeight(this._bg.getHeight())
    },repaint: function() {
        if (this.data) {
            var a = this.data, b;
            b = "恭喜你，成功操作账号！\n-----------请牢记以下信息-----------\nUC账号：" + a.pUid;
            b += "\nUC密码：" + a.password;
            b += "\n昵称：" + a.uname.getEllipsis(30);
            b += "\n邮箱：" + (a.email ? a.email : "----");
            this._txtInfo.setText(b)
        }
    }});
H.widgets.AlertV = H.widgets.ComponentV.extend({init: function(a) {
        a && (this.text = a.text, this.onOk = a.onOk, (this.popup = a.popup) || console.error("[警告:]popup 未添加 .  cfg.text:" + a.text));
        this._super(arguments)
    },initUI: function() {
        var a = G.Image.create({slice: this.getSlice("背景框01")});
        this.addChild(a);
        this.setWidth(a.width);
        this.setHeight(a.height);
        var b, c = this.getPos("游戏大厅-设置-脱离状态", "背景框01"), a = G.Text.create({text: this.text});
        b = this.getPos("游戏大厅-设置-脱离状态", "文字");
        a.setPos(b, c);
        a.setColor(H.widgets.AlertV.FONT_COLOR);
        a.setFontSize(H.widgets.AlertV.FONT_SIZE);
        a.setLineSpacing(H.widgets.AlertV.LINE_SPACING);
        a.setWidth(b[2]);
        a.setTextAlign("center");
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-确定-默认"),imgDown: this.getSlice("按钮-确定-点击"),callback: U.delegate(function() {
                this.popup && this.popup.hide(this);
                this.onOk && this.onOk()
            }, this)});
        a.setPos(this.getPos("游戏大厅-设置-脱离状态", "按钮"), c);
        this.addChild(a)
    }});
H.widgets.AlertV.FONT_SIZE = 24;
H.widgets.AlertV.LINE_SPACING = 12;
H.widgets.AlertV.FONT_COLOR = "white";
H.widgets.BagCellV = H.widgets.ComponentV.extend({init: function() {
        this.index = 0;
        this.goodsId = null;
        this.iconWH = [108, 108];
        this.iconOriginalWH = [164, 164];
        this._super(arguments)
    },initUI: function() {
        var a, b, c = this.getPos("游戏大厅-商城物品", "背景框03a");
        a = G.Image.create({slice: this.getSlice("背景框03-默认")});
        this.addChild(a);
        this._bg = a;
        a = G.Image.create();
        this.addChild(a);
        a.setPos(this.getPos("游戏大厅-商城物品", "物品头像a"), c);
        a.setScale(this.iconWH[0] / this.iconOriginalWH[0]);
        a.setWidth(108);
        a.setHeight(108);
        a.setBorder("#FFFFFF", 1);
        this.icon = a;
        a = G.Text.create();
        this.addChild(a);
        b = this.getPos("游戏大厅-商城物品", "物品名称a");
        a.setPos(b, c);
        a.setX(0);
        a.setWidth(this._bg.getWidth());
        a.setFontSize(b[3]);
        a.setColor("#FFFFFF");
        a.setTextAlign("center");
        this.name = a;
        a = G.Text.create();
        this.addChild(a);
        b = this.getPos("游戏大厅-商城物品", "有效期a");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setFontSize(b[3]);
        a.setColor("#FC0");
        a.setTextAlign("center");
        this.info = a
    },repaint: function() {
        var a = this.data;
        a ? (this.showItem(), this.name.setText(a.goodsName), this.info.setText(a.getExpireString()), 
        this.icon.setImage(H.widgets.Utils.avatar(a.goodsId)), this.goodsId = this.data.id) : this.clear()
    },uplayout: function() {
    },clear: function() {
        this.goodsId = this.data = null;
        this.icon.setVisible(!1);
        this.name.setVisible(!1);
        this.info.setVisible(!1);
        this.setToggleState(!1)
    },showItem: function() {
        this.icon.setVisible(!0);
        this.name.setVisible(!0);
        this.info.setVisible(!0)
    },setClick: function(a) {
        this.callback2 = a;
        this.addEventListener(G.EVENT.CLICK, U.delegate(this._click, this))
    },_click: function() {
        void 0 != this.data && this.callback2.call(null, 
        {goodsId: this.data.goodsId,index: this.index})
    },setToggleState: function(a) {
        a ? this._bg.setImage(this.getSlice("背景框03-点击")) : this._bg.setImage(this.getSlice("背景框03-默认"))
    }});
H.widgets.ConfirmV = H.widgets.BaseV.extend({init: function(a) {
        a && (this.text = a.text, this.callback = a.callback);
        this._super(arguments)
    },initUI: function() {
        var a = G.Image.create({slice: this.getSlice("背景框01")});
        this.addChild(a);
        this.setWidth(a.width);
        this.setHeight(a.height);
        var b, c = this.getPos("游戏大厅-退出框", "背景框01"), a = G.Text.create({text: this.text});
        b = this.getPos("游戏大厅-退出框", "文字");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setHeight(b[3]);
        a.setColor(this.config.COLOR_WHITE);
        a.setFontSize(26);
        a.setLineHeight(36);
        a.setTextAlign("center");
        a.setVerticalAlign("middle");
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-确定-默认"),imgDown: this.getSlice("按钮-确定-点击"),callback: U.delegate(function() {
                this.callback && this.callback(H.widgets.ConfirmV.OK)
            }, this)});
        a.setPos(this.getPos("游戏大厅-退出框", "按钮-确定"), c);
        this.addChild(a);
        a = G.Button.create({imgUp: this.getSlice("按钮-取消-默认"),imgDown: this.getSlice("按钮-取消-点击"),callback: U.delegate(function() {
                this.callback && this.callback(H.widgets.ConfirmV.CANCEL)
            }, this)});
        a.setPos(this.getPos("游戏大厅-退出框", "按钮-取消"), 
        c);
        this.addChild(a)
    }});
H.widgets.ConfirmV.FONT_SIZE = 24;
H.widgets.ConfirmV.LINE_SPACING = 12;
H.widgets.ConfirmV.FONT_COLOR = "white";
H.widgets.ConfirmV.OK = 1;
H.widgets.ConfirmV.CANCEL = 2;
H.widgets.RequestLoadingV = H.widgets.BaseV.extend({init: function(a) {
        this._super(arguments)
    },initUI: function() {
        var a;
        a = G.Image.create({slice: this.getSlice("请求loading")});
        a.setOrigin(a.getWidth() >> 1, a.getHeight() >> 1);
        this.addChild(a);
        this.bg = a
    },play: function() {
        this.bg.to({rotation: -36E4,time: 1E3})
    },stop: function() {
        this.bg.clearTo();
        this.setRotation(0)
    }});
H.widgets.ShopCellV = H.widgets.ComponentV.extend({init: function() {
        this.index = 0;
        this.goodsId = null;
        this.iconWH = [108, 108];
        this.iconOriginalWH = [164, 164];
        this._super(arguments)
    },initUI: function() {
        var a, b, c = this.getPos("游戏大厅-商城", "背景框02a");
        this.backgroundImage = G.Image.create({slice: this.getSlice("背景框02")}, G.CANVAS_MODE);
        this.addChild(this.backgroundImage);
        a = G.Image.create();
        this.addChild(a);
        a.setPos(this.getPos("游戏大厅-商城", "物品头像a"), c);
        a.setScale(this.iconWH[0] / this.iconOriginalWH[0]);
        a.setWidth(108);
        a.setHeight(108);
        a.setBorder("#FFFFFF", 1);
        this.icon = a;
        a = G.Text.create();
        this.addChild(a);
        b = this.getPos("游戏大厅-商城", "物品名称a");
        a.setPos(b, c);
        a.setFontSize(b[3]);
        a.setColor("#FFFFFF");
        this.name = a;
        a = G.Text.create();
        this.addChild(a);
        b = this.getPos("游戏大厅-商城", "物品信息a");
        a.setPos(b, c);
        a.setFontSize(24);
        a.setLineSpacing(b[3] / 3 - 24);
        a.setColor("#FFFFFF");
        a.setTextBaseline("middle");
        this.intro = a;
        this.buyBtn = G.Image.create({slice: this.getSlice("按钮-购买1-默认")}, G.CANVAS_MODE);
        this.addChild(this.buyBtn);
        this.buyBtn.setPos(this.getPos("游戏大厅-商城", 
        "按钮-购买1a"), c)
    },repaint: function() {
        var a = this.data;
        a ? (this.showItem(), this.icon.setImage(H.widgets.Utils.avatar(a.goodsId)), this.name.setText(a.goodsName), this.intro.setText("价  格:<span style='color: yellow;'>" + a.price + "U点</span>\n<span style='color: orange;'>有效期:" + H.widgets.Utils.msToDay(a.expireIn) + "天</span>\n赠送" + a.coinGift + "欢乐豆"), this.goodsId = a.goodsId) : this.clear()
    },clear: function() {
        this.goodsId = this.data = null;
        this.icon.setVisible(!1);
        this.name.setVisible(!1);
        this.intro.setVisible(!1);
        this.buyBtn.setVisible(!1)
    },
    showItem: function() {
        this.icon.setVisible(!0);
        this.name.setVisible(!0);
        this.intro.setVisible(!0);
        this.buyBtn.setVisible(!0)
    },setClick: function(a) {
        this.callback2 = a;
        this.addEventListener(G.EVENT.CLICK, U.delegate(this._click, this));
        this.addEventListener(G.EVENT.DOWN, U.delegate(function() {
            this.setToggleState(!0)
        }, this));
        this.addEventListener(G.EVENT.UP, U.delegate(function() {
            this.setToggleState(!1)
        }, this))
    },_click: function() {
        void 0 == this.goodsId || void 0 == this.index || this.callback2.call(null, {goodsId: this.goodsId,
            index: this.index})
    },setToggleState: function(a) {
        a ? this.buyBtn.setImage(this.getSlice("按钮-购买1-点击")) : this.buyBtn.setImage(this.getSlice("按钮-购买1-默认"))
    }});
H.widgets.TabBarV = H.widgets.ComponentV.extend({init: function() {
        this._super(arguments);
        this.id = "TabBarV";
        this.selectIndex = 0;
        this.selectIndexId = null;
        this.group = []
    },initUI: function() {
        this.titleV = G.Container.create({}, G.CANVAS_MODE);
        this.addChild(this.titleV);
        this.containerV = G.Container.create({}, G.CANVAS_MODE);
        this.addChild(this.containerV)
    },clickTitleFun: function(a) {
        a = a.src.id;
        this.selectIndexId != a && this.setSelector(a)
    },setSelector: function(a) {
        var b = null == this.selectIndexId;
        if (this.selectIndexId != a && 
        (this.titleV.setVisible(!0), this.containerV.setVisible(!0), this.data.inspect(a))) {
            for (var c, d = this.titleV.children, e = 0; e < d.length; e++)
                c = d[e], a == c.id ? c.setChecked(!0) : c.setChecked(!1);
            d = this.containerV.children;
            for (e = 0; e < d.length; e++)
                c = d[e], a == c.id ? c.show() : c.hide();
            this.selectIndex = e;
            this.selectIndexId = a;
            b || this.data.callback.call()
        }
    },setView: function(a) {
        this.titleV.removeAllChildren();
        this.containerV.removeAllChildren();
        this.selectIndex = 0;
        this.selectIndexId = null;
        this.titleV.setVisible(!1);
        this.containerV.setVisible(!1);
        this._setData(a)
    },_setData: function(a) {
        (this.data = a) && this._create()
    },_create: function() {
        this.getPos("游戏大厅-商城", "按钮-商城");
        for (var a, b, c = this.data.list, d = 0; d < c.length; d++)
            a = c[d].title, b = a.position, a = G.ToggleButton.create(a.slice, G.CANVAS_MODE), a.id = c[d].id, a.setPos(b, [this.getX(), this.getY()]), a.callback = U.delegate(this.clickTitleFun, this), this.titleV.addChild(a), b = c[d].content, b = b.view, b.id = c[d].id, this.containerV.addChild(b)
    }});
H.widgets.NoticeV = H.widgets.ComponentV.extend({init: function(a) {
        this.curLine = 0;
        this._hideId = this._playId = null;
        this._super(arguments);
        a = a || {};
        this.setWidth(a.width || 500);
        this.setHeight(a.height || 32);
        this.setFontSize(a.fontSize || 24);
        this.setBgOpacity(a.bgOpacity || 0);
        this._state = "stop"
    },initUI: function() {
        var a, b = H.widgets.NoticeV.MARGIN, c = H.widgets.NoticeV.GAP;
        a = G.Container.create();
        a.setBg("#000");
        this.addChild(a);
        this._imgBg = a;
        a = this.getSlice("喇叭");
        var d = a.rect[2];
        a = G.Image.create({slice: a});
        a.setX(b);
        this.addChild(a);
        this._panIcon = a;
        a = this.getSlice("公告收缩a");
        var e = [];
        e.push(G.Action.create({slice: a.image,rect: a.rect,interval: 300}));
        a = this.getSlice("公告收缩b");
        e.push(G.Action.create({slice: a.image,rect: a.rect,interval: 300}));
        a = G.Animation.create({actions: e});
        this.addChild(a);
        this._panClose = a;
        a = G.Container.create();
        a.setX(d + b + c);
        this.addChild(a);
        this._panContent = a;
        a = G.Text.create();
        a.setColor("#FFF");
        a.setTextAlign("center");
        a.setTextBaseline("middle");
        this._panContent.addChild(a);
        this._txtContent = 
        a;
        this.setOverflowHidden(!0);
        this.addEventListener(G.EVENT.CLICK, U.delegate(function() {
            this.setVisible(!1);
            this._hideId = setTimeout(U.delegate(function() {
                this._showedAgain()
            }, this), 7E3)
        }, this));
        this.setVisible(!1)
    },addListener: function() {
    },removeListener: function() {
    },repaint: function() {
        if (this.data instanceof Array) {
            for (var a = this.data, b = "", c = 0; c < a.length; c++)
                b += a[c].content + "\n";
            "" != b ? (b = b.substr(0, b.length - 1), this._txtContent.setText(b), "pause" != this._state && (this.setVisible(!0), this.play())) : this.setVisible(!1)
        } else
            this.setVisible(!1)
    },
    destroy: function() {
        this._super(arguments);
        this.stop();
        this.data = null
    },setWidth: function(a) {
        var b = H.widgets.NoticeV.MARGIN, c = H.widgets.NoticeV.GAP;
        this._super(arguments);
        this._imgBg.setWidth(a);
        this._panClose.setX(a - (this._panClose.getWidth() + b));
        b = a - (this._panIcon.getWidth() + this._panClose.getWidth() + 2 * c + 2 * b);
        this._panContent.setWidth(b);
        this._txtContent.setWidth(b)
    },setHeight: function(a) {
        this._super(arguments);
        this._imgBg.setHeight(a);
        this._panIcon.setY(a - this._panIcon.getHeight() >> 1);
        this._panClose.setY(a - 
        this._panClose.getHeight() >> 1);
        this._panContent.setHeight(a);
        this._txtContent.setLineHeight(a)
    },setFontSize: function(a) {
        a = Math.min(a, this.getHeight());
        this._txtContent.setFontSize(a)
    },setBgOpacity: function(a) {
        this._imgBg.setOpacity(a)
    },play: function() {
        this._state = "play";
        this.ob.notify(this.NT.NOTICE_PLAY_START, this);
        null == this._playId && (this._playId = setInterval(U.delegate(function() {
            this._scrollText()
        }, this), 7E3))
    },stop: function() {
        this._state = "stop";
        null != this._playId && (clearInterval(this._playId), 
        this._playId = null, this.reset())
    },pause: function() {
        this._state = "pause";
        null != this._playId && (clearInterval(this._playId), this._playId = null)
    },reset: function() {
        this.curLine = 0;
        this._txtContent.setY(0)
    },_showedAgain: function() {
        null != this._hideId && (this._clearHideTimeoutId(), "play" == this._state && this.setVisible(!0))
    },_clearHideTimeoutId: function() {
        null != this._hideId && (clearTimeout(this._hideId), this._hideId = null)
    },_scrollText: function() {
        this.curLine < Math.ceil(this._txtContent.getHeight() / this.getHeight()) - 
        1 ? (this.curLine++, this._txtContent.to({y: 0 - this.curLine * this.getHeight(),time: 1})) : (this.stop(), this._clearHideTimeoutId(), this.setVisible(!1), this.ob.notify(this.NT.NOTICE_PLAY_COMPLETE, this))
    },getState: function() {
        return this._state
    }});
H.widgets.NoticeV.GAP = 5;
H.widgets.NoticeV.MARGIN = 18;
H.widgets.SuperNoticeV = H.widgets.NoticeV.extend({repaint: function() {
        if (this.timeoutIds) {
            for (var a = 0; a < this.timeoutIds.length; a++)
                clearTimeout(this.timeoutIds[a]);
            this.timeoutIds.splice(0)
        } else
            this.timeoutIds = [];
        U.log("【H.widgets.SuperNoticeV】 数据:" + JSON.stringify(this.data));
        if (this.data instanceof Array)
            for (a = 0; a < this.data.length; a++) {
                var b = this.data[a];
                if ("object" == typeof b)
                    for (var c = b.content.split(";"), d = b.points.split(","), e = 0; e < d.length; e++)
                        this.timeoutIds.push(setTimeout(U.delegate(this._showText, 
                        this, {text: c[e],times: b.times}), 1E3 * d[e]))
            }
        U.log("【H.widgets.SuperNoticeV】 计时器组:" + JSON.stringify(this.timeoutIds))
    },_showText: function(a) {
        for (var b = "", c = 0; c < a.times; c++)
            b += a.text + "\n";
        "" != b && (b = b.substr(0, b.length - 1), U.log("【H.widgets.SuperNoticeV】显示文字:" + b), this.stop(), this._txtContent.setText(b), this.ob.notify(this.NT.SUPER_NOTICE_PLAY, this), this.setVisible(!0), this.play())
    },_scrollText: function() {
        var a = Math.ceil(this._txtContent.getHeight() / this.getHeight()) - 1;
        U.log("【H.widgets.SuperNoticeV】超级公告播放中:" + 
        this.curLine + "/" + a);
        this.curLine < a ? (this.curLine++, this._txtContent.to({y: 0 - this.curLine * this.getHeight(),time: 1})) : (U.log("【H.widgets.SuperNoticeV】完成超级公告播放"), this.stop(), this._clearHideTimeoutId(), this.setVisible(!1), this.ob.notify(this.NT.SUPER_NOTICE_STOP, this))
    }});
H.widgets.PopNoticeV = H.widgets.ComponentV.extend({setPopup: function(a) {
        this.popup = a
    },getNextTime: function() {
        return this.tlist[1].interal - this.tlist[0].interal
    },sortNumber: function(a, b) {
        return a.interal - b.interal
    },repaint: function() {
        this.time = (new Date).getTime();
        this.tlist = null;
        clearTimeout(this.interalID);
        this.interalID = null;
        if (this.data instanceof Array) {
            var a = this.data;
            if (0 >= a.length)
                return this.ob.notify(this.NT.NOTICE_PLAY_COMPLETE, this);
            for (var b = [], c = [], d = 0; d < a.length; d++)
                for (var e = a[d], b = 
                "" + e.points, b = -1 != b.indexOf(",") ? b.split(",") : [Number(b)], e = "" + e.content, e = -1 != e.indexOf(";") ? e.split(";") : [e], f = 0; f < b.length; f++)
                    c.push({interal: Number(b[f]),content: e[f] || e[e.length - 1]});
            this.tlist = c.sort(this.sortNumber);
            this.tlist[0].timeout = this.tlist[0].interal;
            for (d = 1; d < this.tlist.length; d++)
                this.tlist[d].timeout = this.tlist[d].interal - this.tlist[d - 1].interal;
            this.interalID = setTimeout(U.delegate(function() {
                this._alertText(this.tlist.shift().content)
            }, this), 1E3 * this.tlist[0].timeout)
        }
    },_alertText: function(a) {
        "" != 
        a && (a = a.substr(0, a.length - 1), this.popup.show(new H.widgets.AlertV({text: a,popup: this.popup})), this._timeout())
    },_timeout: function() {
        0 < this.tlist.length ? (this.time = (new Date).getTime(), this.interalID = setTimeout(U.delegate(function() {
            this._alertText(this.tlist.shift().content)
        }, this), 1E3 * this.tlist[0].timeout)) : (this.tlist = null, clearTimeout(this.interalID), this.interalID = null, this.ob.notify(this.NT.NOTICE_PLAY_COMPLETE, this), console.log("super: 完毕"))
    }});
H.widgets.PushV = H.widgets.ComponentV.extend({init: function(a) {
        this.curLine = 0;
        this._hideId = this._playId = null;
        this._super(arguments);
        a = a || {};
        this.setWidth(a.width || 500);
        this.setHeight(a.height || 30);
        this.setFontSize(a.fontSize || 20);
        this.setBgOpacity(a.bgOpacity || 1)
    },initUI: function() {
        var a;
        a = G.Container.create();
        a.setBg("#000");
        this.addChild(a);
        this._imgBg = a;
        a = G.Container.create();
        this.addChild(a);
        this._panContent = a;
        a = G.Text.create();
        a.setColor("#FFF");
        a.setTextAlign("center");
        a.setTextBaseline("middle");
        this._panContent.addChild(a);
        this._txtContent = a;
        this.setOverflowHidden(!0);
        this.setVisible(!1)
    },repaint: function() {
        var a = this.data;
        a instanceof Array ? (a = a.join("\r"), "" != a ? (this._txtContent.setText(a), this.setVisible(!0), this.setOpacity(0), this.to({opacity: 1,time: 0.3}), this.play()) : this.setVisible(!1)) : this.setVisible(!1)
    },destroy: function() {
        this._super(arguments);
        this.stop();
        this.data = null
    },setWidth: function(a) {
        this._super(arguments);
        this._imgBg.setWidth(a);
        this._txtContent.setWidth(a)
    },setHeight: function(a) {
        this._super(arguments);
        this._imgBg.setHeight(a);
        this._txtContent.setLineHeight(a)
    },setFontSize: function(a) {
        a = Math.min(a, this.getHeight());
        this._txtContent.setFontSize(a)
    },setBgOpacity: function(a) {
        this._imgBg.setOpacity(a)
    },play: function() {
        null == this._playId && (this._playId = setInterval(U.delegate(function() {
            this._scrollText()
        }, this), 3E3))
    },stop: function() {
        null != this._playId && (clearInterval(this._playId), this._playId = null, this.to({opacity: 0,time: 0.3,onEnd: U.delegate(function() {
                this.setVisible(!1);
                this.reset()
            }, this)}))
    },reset: function() {
        this.curLine = 
        0;
        this._txtContent.setY(0)
    },_showedAgain: function() {
        null != this._hideId && (this._clearHideTimeoutId(), this.setVisible(!0))
    },_clearHideTimeoutId: function() {
        null != this._hideId && (clearTimeout(this._hideId), this._hideId = null)
    },_scrollText: function() {
        this.curLine < Math.ceil(this._txtContent.getHeight() / this.getHeight()) - 1 ? (this.curLine++, this._txtContent.to({y: 0 - this.curLine * this.getHeight(),time: 0.3})) : (this.stop(), this._clearHideTimeoutId())
    }});
H.widgets.BuyV = H.widgets.ComponentV.extend({init: function() {
        this._super(arguments);
        this.num = 1;
        this.goodsId = this.maxPrice = this.unitPrice = null
    },initUI: function() {
        var a, b, c = this.getPos("游戏大厅-商城弹出", "背景框01");
        this.backgroundImage = G.Image.create({slice: this.getSlice("背景框01")});
        this.addChild(this.backgroundImage);
        this.icon = G.Image.create();
        this.addChild(this.icon);
        this.icon.setPos(this.getPos("游戏大厅-商城弹出", "物品图片"), c);
        this.priceBg = G.Image.create({slice: this.getSlice("输入条04")});
        this.addChild(this.priceBg);
        this.priceBg.setPos(this.getPos("游戏大厅-商城弹出", 
        "输入条04"), c);
        this.numBg = G.Image.create({slice: this.getSlice("输入条02")});
        this.addChild(this.numBg);
        this.numBg.setPos(this.getPos("游戏大厅-商城弹出", "输入条02"), c);
        this.leftBtn = G.Button.create({imgUp: this.getSlice("按钮-向左-默认"),imgDown: this.getSlice("按钮-向左-点击"),callback: U.delegate(this.leftBtnEvent, this)});
        this.addChild(this.leftBtn);
        this.leftBtn.setPos(this.getPos("游戏大厅-商城弹出", "按钮-向左"), c);
        this.rightBtn = G.Button.create({imgUp: this.getSlice("按钮-向右-默认"),imgDown: this.getSlice("按钮-向右-点击"),callback: U.delegate(this.rightBtnEvent, 
            this)});
        this.addChild(this.rightBtn);
        this.rightBtn.setPos(this.getPos("游戏大厅-商城弹出", "按钮-向右"), c);
        this.buyBtn = G.Button.create({imgUp: this.getSlice("按钮-购买2-默认"),imgDown: this.getSlice("按钮-购买2-点击"),callback: U.delegate(this.buyBtnEvent, this)});
        this.addChild(this.buyBtn);
        this.buyBtn.setPos(this.getPos("游戏大厅-商城弹出", "按钮-购买2"), c);
        a = G.Text.create();
        this.addChild(a);
        b = this.getPos("游戏大厅-商城弹出", "物品名称");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setFontSize(b[3]);
        a.setColor("#FFFFFF");
        this.name = a;
        a = G.Text.create();
        this.addChild(a);
        b = this.getPos("游戏大厅-商城弹出", "物品属性");
        a.setPos(b, c);
        a.setFontSize(24);
        a.setLineSpacing(b[3] / 3 - 24);
        a.setColor("#FFFFFF");
        a.setTextBaseline("middle");
        this.intro = a;
        a = G.Text.create();
        this.addChild(a);
        b = this.getPos("游戏大厅-商城弹出", "输入条04");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setLineSpacing(b[3] - 24);
        a.setTextBaseline("bottom");
        a.setTextAlign("center");
        a.setFontSize(24);
        a.setColor("#FFFFFF");
        this.priceTxt = a;
        a = G.Text.create();
        this.addChild(a);
        b = this.getPos("游戏大厅-商城弹出", "输入条02");
        a.setPos(b, c);
        a.setWidth(b[2]);
        a.setLineSpacing(b[3] - 
        24);
        a.setTextBaseline("middle");
        a.setTextAlign("center");
        a.setFontSize(24);
        a.setColor("#FFFFFF");
        this.numTxt = a
    },leftBtnEvent: function() {
        0 >= this.num - 1 ? this.num = 1 : this.num--;
        this.updatePrice(this.num)
    },rightBtnEvent: function() {
        (this.num + 1) * this.unitPrice <= this.maxPrice && this.num++;
        this.updatePrice(this.num)
    },buyBtnEvent: function() {
        this.num * this.unitPrice <= this.maxPrice ? this.ob.notify(this.NT.REQUEST_AVATAR_BUY, {goodsId: this.goodsId,num: this.num}) : alert("金额不足,请充值")
    },repaint: function() {
        var a = this.data;
        this.goodsId = a.goodsId;
        this.num = 1;
        this.unitPrice = a.price;
        this.maxPrice = this.dm.user.ucoin;
        this.icon.setImage(H.widgets.Utils.avatar(a.goodsId));
        this.name.setText(a.goodsName);
        this.intro.setText("价  格:<span style='color: yellow;'>" + a.price + "U点</span>\n<span style='color: orange;'>有效期:" + H.widgets.Utils.msToDay(a.expireIn) + "天</span>\n赠送" + a.coinGift + "欢乐豆");
        this.updatePrice(1)
    },updatePrice: function(a) {
        this.priceTxt.setText(a * this.unitPrice + "U点");
        this.numTxt.setText(a)
    }});
H.widgets.ShopV = H.widgets.BaseV.extend({init: function() {
        this._super(arguments);
        this.selectorIndex = -1;
        this.data = [];
        this.popup = G.Facade.getV("H.ShopWidget.PopupManager")
    },initUI: function() {
        var a = this.getPos("游戏大厅-商城", "按钮-商城");
        this.leftBtn = G.Button.create({imgUp: this.getSlice("按钮-箭头-左"),imgDown: this.getSlice("按钮-箭头-左"),callback: U.delegate(this.leftBtnEvent, this)});
        this.addChild(this.leftBtn);
        this.rightBtn = G.Button.create({imgUp: this.getSlice("按钮-箭头-右"),imgDown: this.getSlice("按钮-箭头-右"),callback: U.delegate(this.rightBtnEvent, 
            this)});
        this.addChild(this.rightBtn);
        this.box = G.Container.create({});
        this.addChild(this.box);
        for (var b = ["背景框02a", "背景框02b", "背景框02c", "背景框02d"], c = 0; c < b.length; c++) {
            var d = new H.widgets.ShopCellV;
            d.index = c;
            this.box.addChild(d);
            d.setPos(this.getPos("游戏大厅-商城", b[c]), this.getPos("游戏大厅-商城", "背景框02a"));
            d.setClick(U.delegate(this.selectorCallback, this))
        }
        this.box.setPos(this.getPos("游戏大厅-商城", "背景框02a"), a);
        this.leftBtn.setPos(this.getPos("游戏大厅-商城", "按钮-箭头-左"), a);
        this.rightBtn.setPos(this.getPos("游戏大厅-商城", "按钮-箭头-右"), 
        a);
        this.rightBtn.setVisible(!1);
        this.leftBtn.setVisible(!1)
    },selectorCallback: function(a) {
        var b = this.box.children;
        this.selectorIndex = a.index;
        this.selectorGoodsId = a.goodsId;
        this.ob.notify(this.NT.INFORM_AVATAR_BUY, this.data[this.selectorIndex + (this.nowPage - 1) * b.length])
    },updatePage: function() {
        this.data = this.dm.getSellGoodsList();
        this.selectorIndex = -1;
        this.maxPage = Math.ceil(this.data.length / 4);
        this.nowPage = 1;
        this.setPage()
    },leftBtnEvent: function() {
        this.setPage(this.nowPage - 1)
    },rightBtnEvent: function() {
        this.setPage(this.nowPage + 
        1)
    },setPage: function(a) {
        void 0 == a || 1 > a || a > this.maxPage ? a = this.nowPage : this.nowPage = a;
        1 == this.nowPage ? (this.leftBtn.setVisible(!1), this.rightBtn.setVisible(!0)) : (this.nowPage == this.maxPage ? this.rightBtn.setVisible(!1) : this.rightBtn.setVisible(!0), this.leftBtn.setVisible(!0));
        this.selectorIndex = -1;
        for (var b = this.box.children, c = b.length, d, e, f = 0; f < c; f++)
            d = f + (a - 1) * c, d = this.data[d], e = b[f], void 0 == d ? e.clear() : (e.setData(d), e.setToggleState())
    },show: function() {
        this._super(arguments)
    }});
H.widgets.BagV = H.widgets.BaseV.extend({init: function() {
        this._super(arguments);
        this.selectorGoodsId = this.selectorIndex = null
    },initUI: function() {
        var a = this.getPos("游戏大厅-商城", "按钮-商城");
        this.icon = G.Image.create({});
        this.addChild(this.icon);
        this.icon.setPos(this.getPos("游戏大厅-商城物品", "试穿头像"), a);
        this.saveBtn = G.Button.create({imgUp: this.getSlice("按钮-保存形象-默认"),imgDown: this.getSlice("按钮-保存形象-点击"),callback: U.delegate(this.saveBtnEvent, this)});
        this.addChild(this.saveBtn);
        this.saveBtn.setPos(this.getPos("游戏大厅-商城物品", 
        "按钮-保存形象"), a);
        this.revertBtn = G.Button.create({imgUp: this.getSlice("按钮-还原-默认"),imgDown: this.getSlice("按钮-还原-点击"),callback: U.delegate(this.revertBtnEvent, this)});
        this.addChild(this.revertBtn);
        this.revertBtn.setPos(this.getPos("游戏大厅-商城物品", "按钮-还原"), a);
        this.leftBtn = G.Button.create({imgUp: this.getSlice("按钮-箭头-左"),imgDown: this.getSlice("按钮-箭头-左"),callback: U.delegate(this.leftBtnEvent, this)});
        this.addChild(this.leftBtn);
        this.leftBtn.setPos(this.getPos("游戏大厅-商城物品", "按钮-箭头-左"), a);
        this.rightBtn = G.Button.create({imgUp: this.getSlice("按钮-箭头-右"),
            imgDown: this.getSlice("按钮-箭头-右"),callback: U.delegate(this.rightBtnEvent, this)});
        this.addChild(this.rightBtn);
        this.rightBtn.setPos(this.getPos("游戏大厅-商城物品", "按钮-箭头-右"), a);
        this.box = G.Container.create({});
        this.addChild(this.box);
        var b = this.getPos("游戏大厅-商城", "背景框02a");
        this.getPos("游戏大厅-商城物品", "背景框03a");
        this.box.setPos([330, b[1]], a);
        a = "背景框03a 背景框03b 背景框03c 背景框03d 背景框03e 背景框03g".split(" ");
        for (b = 0; b < a.length; b++) {
            var c = new H.widgets.BagCellV;
            c.index = b;
            this.box.addChild(c);
            c.setPos(this.getPos("游戏大厅-商城物品", a[b]), 
            this.getPos("游戏大厅-商城物品", "背景框03a"));
            c.setClick(U.delegate(this.selectorCallback, this))
        }
        this.rightBtn.setVisible(!1);
        this.leftBtn.setVisible(!1)
    },addListener: function() {
        this.ob.addListener(this.NT.UPDATE_USER_BAG, this.refresh, this)
    },removeListener: function() {
        this.ob.removeListener(this.NT.UPDATE_USER_BAG, this.refresh)
    },updateAvatarUse: function() {
        this.updateAvatar()
    },updateUserInfo: function() {
        this.updateAvatar()
    },updateAvatar: function(a) {
        void 0 == a && (a = this.dm.user.avatarId);
        this.icon.setImage(H.widgets.Utils.avatar(a))
    },
    updatePage: function() {
        this.data = this.dm.getAvailabilityGoodsList();
        this.maxPage = Math.ceil(this.data.length / 6);
        this.nowPage = 1;
        this.setPage()
    },selectorCallback: function(a) {
        var b = this.box.children;
        -1 != this.selectorIndex && b[this.selectorIndex].setToggleState();
        this.selectorIndex = a.index;
        this.selectorGoodsId = a.goodsId;
        this.updateAvatar(a.goodsId);
        b[this.selectorIndex].setToggleState(!0)
    },saveBtnEvent: function() {
        void 0 == this.selectorGoodsId || this.selectorGoodsId == this.dm.user.avatarId || this.ob.notify(this.NT.REQUEST_AVATAR_USE, 
        {goodsId: this.selectorGoodsId})
    },revertBtnEvent: function() {
        this.updateAvatar()
    },leftBtnEvent: function() {
        this.setPage(this.nowPage - 1)
    },rightBtnEvent: function() {
        this.setPage(this.nowPage + 1)
    },refresh: function() {
        this.data && this.setPage(1)
    },setPage: function(a) {
        this.updateAvatar();
        void 0 == a || 1 > a || a > this.maxPage ? a = this.nowPage : this.nowPage = a;
        1 == this.nowPage ? (this.leftBtn.setVisible(!1), this.nowPage == this.maxPage ? this.rightBtn.setVisible(!1) : this.rightBtn.setVisible(!0)) : (this.nowPage == this.maxPage ? this.rightBtn.setVisible(!1) : 
        this.rightBtn.setVisible(!0), this.leftBtn.setVisible(!0));
        this.selectorIndex = -1;
        for (var b = this.box.children, c = b.length, d, e, f = 0; f < c; f++)
            d = f + (a - 1) * c, d = this.data[d], e = b[f], void 0 == d ? e.clear() : (e.setData(d), d.goodsId == this.dm.user.avatarId ? (e.setToggleState(!0), this.selectorIndex = f) : e.setToggleState())
    }});
H.widgets.GoodsGroupV = H.widgets.BaseV.extend({init: function() {
        this._super(arguments);
        this.id = "shopV";
        this.data = null;
        var a, b;
        a = G.Image.create();
        this.addChild(a);
        this._backgroundImage = a;
        a = G.Button.create({imgUp: this.getSlice("退出按钮-默认"),imgDown: this.getSlice("退出按钮-点击"),callback: U.delegate(this._closeBtnEvent, this)});
        a.setPos(this.getPos("商城对位", "退出按钮"));
        this.addChild(a);
        this.closeBtn = a;
        this.hideClose();
        a = new H.widgets.TabBarV;
        this.addChild(a);
        a.setPos(this.getPos("游戏大厅-商城", "按钮-商城"));
        this.tabBar = a;
        this.shop = 
        new H.widgets.ShopV;
        this.bag = new H.widgets.BagV;
        this.tabBar.setView({inspect: U.delegate(this._inspectTabBar, this),callback: U.delegate(this._updateTabBar, this),list: [{id: "shop",title: {slice: {imgUp: this.getSlice("按钮-商城2-默认"),imgDown: this.getSlice("按钮-商城2-默认"),checkedImgUp: this.getSlice("按钮-商城2-点击"),checkedImgDown: this.getSlice("按钮-商城2-点击"),isAutoCheck: !1},position: this.getPos("游戏大厅-商城", "按钮-商城")},content: {view: this.shop}}, {id: "bag",title: {slice: {imgUp: this.getSlice("按钮-我的物品-默认"),imgDown: this.getSlice("按钮-我的物品-默认"),
                            checkedImgUp: this.getSlice("按钮-我的物品-点击"),checkedImgDown: this.getSlice("按钮-我的物品-点击"),isAutoCheck: !1},position: this.getPos("游戏大厅-商城", "按钮-我的物品")},content: {view: this.bag}}]});
        a = G.Image.create({slice: this.getSlice("背景框-分隔")});
        this.addChild(a);
        a.setPos(this.getPos("游戏大厅-商城", "背景框-分隔"));
        this.hr = a;
        a = G.Image.create({slice: this.getSlice("按钮-U点")});
        this.addChild(a);
        a.setPos(this.getPos("游戏大厅-商城", "按钮-U点"));
        this.uicon = a;
        a = G.Text.create();
        this.addChild(a);
        b = this.getPos("游戏大厅-商城", "U点文字");
        a.setPos(b);
        a.setFontSize(b[3] - 
        6);
        a.setLineHeight(b[3]);
        a.setColor("FFF");
        this.utxt = a;
        a = G.Button.create({imgUp: this.getSlice("按钮-充值"),imgDown: this.getSlice("按钮-充值"),callback: U.delegate(function() {
                this.ob.notify(this.NT.REQUEST_PAY)
            }, this)});
        this.addChild(a);
        a.setPos(this.getPos("游戏大厅-商城", "按钮-充值"));
        this.rechargeBtn = a;
        this.updateUserInfo()
    },addListener: function() {
        this.ob.addListener(this.NT.UPDATE_USER_INFO, this.updateUserInfo, this);
        this.ob.addListener(this.NT.UPDATE_MONEY, this.updateUserInfo, this)
    },removeListener: function() {
        this.ob.removeListener(this.NT.UPDATE_USER_INFO, 
        this.updateUserInfo);
        this.ob.removeListener(this.NT.UPDATE_MONEY, this.updateUserInfo)
    },setBackgroundImage: function(a) {
        this._backgroundImage.setImage(a)
    },updateUserInfo: function() {
        var a = this.dm.user;
        this.utxt.setText("<span style='color:white;'>我的U点:</span><span style='color:yellow;'>" + (-1 == a.ucoin ? this.msg.U_COIN_NO_GET : a.ucoin) + "</span>");
        this.bag.updateUserInfo()
    },updateAvatarUse: function() {
        this.bag.updateAvatarUse()
    },showShop: function() {
        this.tabBar.setSelector("shop");
        this.shop.updatePage()
    },showBag: function() {
        this.tabBar.setSelector("bag");
        this.bag.updatePage()
    },showClose: function() {
        this.closeBtn.setVisible(!0)
    },hideClose: function() {
        this.closeBtn.setVisible(!1)
    },_closeBtnEvent: function() {
        this.ob.notify(H.widgets.NT.CLOSE_GOODS_GROUP)
    },_updateTabBar: function() {
        switch (this.tabBar.selectIndexId) {
            case "shop":
                this.ob.notify(this.NT.SHOW_SHOP);
                this.ob.notify(this.NT.HIDE_BAG);
                break;
            case "bag":
                this.ob.notify(this.NT.HIDE_SHOP), this.ob.notify(this.NT.SHOW_BAG)
        }
    },_inspectTabBar: function(a) {
        return "bag" == a && this.dm.isGhost() ? (this.ob.notify(this.NT.USER_GHOST), 
        U.log("背包开启判定[空用户]"), !1) : !0
    }});
H.AuthWidget = H.widgets.BaseV.extend({init: function() {
        this._super(arguments);
        G.Facade.getC("H.widgets.AuthC") || G.Facade.addC("H.widgets.AuthC", new H.widgets.AuthC(this))
    },showLogin: function(a) {
        this.ob.notify(this.NT.SHOW_LOGIN, a)
    },showActivate: function(a) {
        this.ob.notify(this.NT.SHOW_ACTIVATE, a)
    },showBind: function(a) {
        this.ob.notify(this.NT.SHOW_BIND, a)
    },showRegister: function(a) {
        this.ob.notify(this.NT.SHOW_REG, a)
    },showLoginSelect: function(a) {
        this.ob.notify(this.NT.SHOW_LOGIN_SELECT, a)
    },goUserCenter: function(a) {
        this.ob.notify(this.NT.REQUEST_UPDATE_USER_INFO, 
        a)
    },loginSdk: function(a) {
        this.ob.notify(this.NT.LOGIN_SDK, a)
    }});
H.NoticeWidget = H.widgets.BaseV.extend({init: function() {
        this._super(arguments);
        this._noticeC = new H.widgets.NoticeC(this)
    },showNotice: function(a) {
        this._noticeC.showNotice(a)
    },hideNotice: function() {
        this._noticeC.hideNotice()
    }});
H.PushWidget = H.widgets.BaseV.extend({init: function() {
        this._super(arguments);
        this._pushC = new H.widgets.PushC(this)
    },showPush: function(a) {
        this._pushC.showPush(a)
    },hidePush: function() {
        this._pushC.hidePush()
    }});
H.ShopWidget = H.widgets.BaseV.extend({init: function() {
        this._super(arguments);
        H.ShopWidget._instanceC ? U.warn("请不要重复创建H.ShopWidget，暂时不支持多个H.ShopWidget并存") : H.ShopWidget._instanceC = new H.widgets.GoodsGroupC(this);
        this._c = H.ShopWidget._instanceC;
        this._c.setStage(this)
    },_checkupCfg: function(a) {
        return a = a || {}
    },showShop: function(a) {
        a = this._checkupCfg(a);
        this._c.showShop(a)
    },showMyBag: function(a) {
        a = this._checkupCfg(a);
        this._c.showBag(a)
    },refreshMyBag: function() {
    },showBuy: function(a) {
        a = this._checkupCfg(a);
        this._c.showBuy(a)
    }});
H.ShopWidget.BUY_USER_GHOST = "buy_user_ghost";
H.ShopWidget.BUY_USER_DEMO = "buy_user_demo";
H.ShopWidget.BAG_USER_GHOST = "bag_user_ghost";
H.ShopWidget._instanceC;
H.Widget = {setGlobalConfig: function(a) {
        if (a) {
            var b = H.widgets.Config;
            b.serverUrl = a.url;
            b.gameId = a.gameId || 0;
            b.getAvatarFunc = a.getAvatarFunc;
            b.stageWidth = a.stageWidth || b.stageWidth;
            b.stageHeight = a.stageHeight || b.stageHeight;
            b.resources = a.resources;
            b.roomId = void 0 == a.roomId ? -1 : a.roomId;
            b.ps = new G.PS(b.resources, H.widgets.Position, H.widgets.Slice)
        } else
            U.log("H.Widget.setConfig缺少参数");
        G.Facade.addP("H.widgets.GoodsP", new H.widgets.GoodsP);
        G.Facade.addP("H.widgets.InfoP", new H.widgets.InfoP);
        G.Facade.addP("H.widgets.UserP", 
        new H.widgets.UserP)
    },setRoomID: function(a) {
        H.widgets.Config.roomId = void 0 == a ? -1 : a
    },showHelp: function() {
        U.log("【H.Widget】显示SDK的客服反馈");
        window.IS_AC && H.Sdk.showHelp()
    },showFloatIcon: function() {
        U.log("【H.Widget】显示SDK的浮动图标");
        window.IS_AC && H.Sdk.showFloatButton(function() {
        })
    },ob: new U.observer.Observer};
