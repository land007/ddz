Config = {appId: A.APP_ID,FPS: 10,ANI_INTERVAL: 80,DEBUG_EMULATOR: A.PARENT_LOCATION_HREF && -1 != A.PARENT_LOCATION_HREF.indexOf("emu="),SHOW_UID_WS: A.PARENT_LOCATION_HREF && -1 != A.PARENT_LOCATION_HREF.indexOf("showws="),WS_URL_0: "ws://sdev.h5.game.uc.cn:17001/websocket",WS_URL_1: "ws://sdev.h5.game.uc.cn:17021/game",WS_URL_2: "ws://192.168.161.200:9020/game",WS_URL_3: "ws://192.168.59.60:9020/game",WS_URL_4: "ws://127.0.0.1:9020/game",ANI_EXTEND_BACK_POKER_ON: !0,ANI_REMOVE_BACK_POKER_ON: !0,ANI_DEAL_POKER_ON: !0,
    ANI_PLAY_POKER_ON: !1,ANI_ARRANGE_POKER_ON: !0,ANI_SELECT_POKER_ON: !1,ANI_POKER_TYPE_ON: !0,ANI_GAOJING_ON: !0,ANI_MULTIPLE_ON: !0,ANI_ROLE_ON: !0,BGM_LENGTH: 25,CHAT_TALKS: "大家好，很高兴见到各位！ 吵死了，快来大战300回合。 再不出牌，黄花菜都凉了 适逢知己千局少啊！ 你是MM，还是GG？ 和你合作真是太愉快了。 你们赢多点，我闪了。 英雄请留下姓名，以便来日报仇。".split(" "),SPLASH_BUTTONS_POSITION: [205, 330],SPLASH_COUNTDOWN_READY_POSITION: [440, 160, 1],PLAYER_CHAT_POSITIONS: [125, 270, 476, 70, 130, 70],PLAYER_INIT_INFO_POSITION: [564, 310],PLAYER_INFO_POSITIONS: [145, 250, 440, 50, 145, 50],PLAYER_INFO_ARRAW_POSITIONS: [-20, 
        130, 350, 40, -20, 40],PLAYER_INIT_AVATAR_POSITION: [420, 75],PLAYER_COOLDOWN_POSITIONS: [275, -10, -80, 47, 110, 47],PLAYER_MANDATE_POSITION: [680, 330, -70, 41, 115, 41],PLAYER_INIT_READY_ICON_POSITION: [445, -85],PLAYER_COOLDOWN_OPENING_POSITIONS: [433, 0],PLAYER_READY_ICON_POSITIONS: [120, 20, -70, 60, 110, 60],GAME_RESULT_SHOW_TIME: 5,NET_RETRIES_LIMIT: 6,NET_RETRIES_CYCLE: 65,NET_RETRIES_INTERVAL: 2};
Msg = window.Msg || {};
Msg.QUIT_CONFIRM = "您已经开始了游戏，离开将会受到严厉的扣分惩罚，确认离开？";
Msg.NET_CONNECTING = "正在连接，请稍候...";
Msg.NET_RECONNECTING = "您的网络已断开，正在重连...";
Msg.NET_DISCONNECTED = "已和服务器断开连接。";
Msg.NET_AUTHENTICATION = "正在验证，请稍候...";
Msg.NET_REQUEST = "正在请求，请稍候...";
Msg.CODE_GET_TOKEN_ERROR = "大厅验证错误";
Msg.CODE_SERVER_CLOSE = "服务器已关闭连接。";
Msg.CODE_IN_GAME = "您已经开始了游戏，不能换桌子。";
Msg.CODE_SERVER_FULL = "服务器人数已满。";
Msg.CODE_INVALID_USER = "不合法的用户。";
Msg.CODE_NOT_ENOUGH_MONEY = "您的欢乐豆不够。";
Msg.CODE_SYS_ERROR = "系统内部错误。";
Msg.CODE_NEW_KICK_OLD = "您的账号在别处登录，本账号被迫下线。";
Msg.CODE_KICK = "您已经被服务器踢出。";
Msg.CODE_TO_LONG_TO_START = "由于您超时不开始游戏，请先离开桌子休息一下吧。";
Msg.CODE_ESCAPE = "由于刚才您在游戏中逃跑了，现在不能加入游戏，先休息一下吧。";
Msg.CODE_LIUJU_DISMISS = "由于本桌连续流局次数过多，牌局已被解散，请重新开始。";
Msg.CODE_LIUJU = "没人愿意做地主，本局流局，重新发牌...";
Msg.CODE_KICK_SELF = "经检测，该账号在大厅使用了脱离卡死功能，请重进游戏！";
Msg.ROOM_NOT_OPEN = "全新玩法升级中，敬请期待！请友友移步前往斗地主普通场。";
Msg.ERROR_TOKEN_INVALID = "获取用户授权失败";
Position = {"报警和高倍": [{name: "左报警动画",rect: [187, 164, 79, 79]}, {name: "右报警动画",rect: [810, 164, 79, 79]}, {name: "高倍",rect: [75, 513, 42, 61]}],"斗地主loading": [{name: "斗地主loading1",rect: [363, 259, 234, 144]}, {name: "加载文字",rect: [369, 407, 223, 20]}, {name: "笑话文字",rect: [152, 461, 656, 42]}],"女农民-奸笑": [{name: "左1女农民-头-奸笑",rect: [1, 33, 113, 81]}, {name: "右女农民-头-奸笑",rect: [846, 33, 113, 81]}, {name: "左1女农民-身体",rect: [14, 120, 111, 84]}, {name: "右女农民-身体",rect: [835, 120, 111, 84]}, {name: "左2女农民-头-奸笑",rect: [0, 345, 109, 82]}, {name: "左2女农民-身体",rect: [9, 432, 111, 84]}],
    "女农民-愤怒": [{name: "左1女农民-头-愤怒",rect: [1, 33, 32, 73]}, {name: "右女农民-头-愤怒",rect: [846, 33, 36, 80]}, {name: "左1愤怒",rect: [40, 66, 27, 27]}, {name: "右愤怒",rect: [894, 66, 27, 27]}, {name: "左1女农民-身体",rect: [14, 120, 111, 84]}, {name: "右女农民-身体",rect: [835, 120, 111, 84]}, {name: "左2女农民-头-愤怒",rect: [0, 345, 28, 77]}, {name: "左2愤怒",rect: [35, 378, 27, 27]}, {name: "左2女农民-身体",rect: [9, 432, 111, 84]}],"女农民-默认": [{name: "左1女农民-头-默认",rect: [1, 33, 113, 70]}, {name: "右女农民-头-默认",rect: [846, 33, 113, 70]}, {name: "左1女农民-身体",rect: [14, 120, 111, 84]}, {name: "右女农民-身体",rect: [835, 120, 
                111, 84]}, {name: "左2女农民-头-默认",rect: [0, 345, 109, 79]}, {name: "左2女农民-身体",rect: [9, 432, 111, 84]}],"女地主-奸笑": [{name: "左1女地主-头-奸笑",rect: [1, 35, 119, 78]}, {name: "右女地主-头-奸笑",rect: [840, 35, 119, 78]}, {name: "左1女地主-身体",rect: [14, 120, 111, 84]}, {name: "右女地主-身体",rect: [835, 120, 111, 84]}, {name: "左2女地主-头-奸笑",rect: [0, 347, 115, 78]}, {name: "左2女地主-身体",rect: [9, 432, 111, 84]}],"女地主-愤怒": [{name: "左1女地主-头-愤怒",rect: [1, 35, 36, 25]}, {name: "右女地主-头-愤怒",rect: [840, 35, 119, 25]}, {name: "左1愤怒",rect: [46, 66, 27, 27]}, {name: "右愤怒",rect: [888, 66, 27, 27]}, {name: "左1女地主-身体",
            rect: [14, 120, 111, 84]}, {name: "右女地主-身体",rect: [835, 120, 111, 84]}, {name: "左2女地主-头-愤怒",rect: [0, 347, 115, 24]}, {name: "左2愤怒",rect: [41, 378, 27, 27]}, {name: "左2女地主-身体",rect: [9, 432, 111, 84]}],"女地主-默认": [{name: "左1女地主-头-默认",rect: [1, 35, 119, 80]}, {name: "右女地主-头-默认",rect: [840, 35, 119, 80]}, {name: "左1女地主-身体",rect: [14, 120, 111, 84]}, {name: "右女地主-身体",rect: [835, 120, 111, 84]}, {name: "左2女地主-头-默认",rect: [0, 347, 115, 80]}, {name: "左2女地主-身体",rect: [9, 432, 111, 84]}],"男农民-奸笑": [{name: "左1男农民-头-奸笑",rect: [1, 35, 114, 68]}, {name: "右男农民-头-奸笑",rect: [845, 35, 114, 
                68]}, {name: "左1男农民-身体",rect: [14, 120, 111, 84]}, {name: "右男农民-身体",rect: [835, 120, 111, 84]}, {name: "左2男农民-头-奸笑",rect: [0, 347, 110, 60]}, {name: "左2男农民-身体",rect: [9, 432, 111, 84]}],"男农民-愤怒": [{name: "左1男农民-头-愤怒",rect: [1, 35, 23, 75]}, {name: "右男农民-头-愤怒",rect: [845, 35, 36, 80]}, {name: "左1愤怒",rect: [27, 66, 27, 27]}, {name: "右愤怒",rect: [907, 66, 27, 27]}, {name: "左1男农民-身体",rect: [14, 120, 111, 84]}, {name: "右男农民-身体",rect: [835, 120, 111, 84]}, {name: "左2男农民-头-愤怒",rect: [0, 347, 17, 77]}, {name: "左2愤怒",rect: [22, 378, 27, 27]}, {name: "左2男农民-身体",rect: [9, 432, 111, 84]}],
    "男农民-默认": [{name: "左1男农民-头-默认",rect: [1, 35, 114, 75]}, {name: "右男农民-头-默认",rect: [845, 35, 114, 75]}, {name: "左1男农民-身体",rect: [14, 120, 111, 84]}, {name: "右男农民-身体",rect: [835, 120, 111, 84]}, {name: "左2男农民-头-默认",rect: [0, 347, 110, 77]}, {name: "左2男农民-身体",rect: [9, 432, 111, 84]}],"男地主-奸笑": [{name: "左1男地主-头-奸笑",rect: [9, 21, 121, 89]}, {name: "右男地主-头-奸笑",rect: [830, 21, 121, 89]}, {name: "左1男地主-身体",rect: [14, 120, 111, 84]}, {name: "右男地主-身体",rect: [835, 120, 111, 84]}, {name: "左2男地主-头-奸笑",rect: [4, 333, 121, 89]}, {name: "左2男地主-身体",rect: [9, 432, 111, 84]}],"男地主-愤怒": [{name: "左1男地主-头-愤怒",
            rect: [6, 21, 22, 89]}, {name: "右男地主-头-愤怒",rect: [833, 21, 37, 83]}, {name: "左1愤怒",rect: [34, 59, 27, 27]}, {name: "右愤怒",rect: [899, 59, 27, 27]}, {name: "左1男地主-身体",rect: [14, 120, 111, 84]}, {name: "右男地主-身体",rect: [835, 120, 111, 84]}, {name: "左2男地主-头-愤怒",rect: [1, 333, 23, 87]}, {name: "左2愤怒",rect: [30, 371, 27, 27]}, {name: "左2男地主-身体",rect: [9, 432, 111, 84]}],"男地主-默认": [{name: "左1男地主-头-默认",rect: [9, 21, 121, 87]}, {name: "右男地主-头-默认",rect: [830, 21, 121, 87]}, {name: "左1男地主-身体",rect: [14, 120, 111, 84]}, {name: "右男地主-身体",rect: [835, 120, 111, 84]}, {name: "左2男地主-头-默认",rect: [4, 
                333, 121, 88]}, {name: "左2男地主-身体",rect: [9, 432, 111, 84]}],"主界面": [{name: "图标-商城-默认",rect: [168, 14, 74, 72]}, {name: "图标-托管-默认",rect: [258, 14, 65, 72]}, {name: "图标-设置-默认",rect: [631, 14, 72, 72]}, {name: "图标-换场和返回大厅-默认",rect: [719, 14, 66, 72]}, {name: "底牌效果-加倍底框",rect: [528, 48, 13, 19]}, {name: "底牌效果",rect: [435, 60, 90, 35]}, {name: "底牌效果-倍数",rect: [543, 60, 31, 26]}, {name: "左离线图标",rect: [39, 168, 64, 26]}, {name: "右离线图标",rect: [857, 168, 64, 26]}, {name: "玩家牌数-左边",rect: [39, 200, 3, 14]}, {name: "玩家牌数-右边",rect: [880, 200, 4, 9]}, {name: "断线提示",rect: [99, 214, 762, 68]}, 
        {name: "图标-聊天-默认",rect: [4, 287, 62, 62]}, {name: "没有牌能大过上家",rect: [270, 293, 420, 30]}, {name: "图标-倒计时",rect: [287, 331, 24, 38]}, {name: "绿按扭小-默认",rect: [131, 338, 23, 82]}, {name: "重选红按扭小-默认",rect: [401, 338, 21, 62]}, {name: "提示红按扭小-默认",rect: [580, 338, 22, 82]}, {name: "出牌红按扭小-默认",rect: [758, 338, 19, 82]}, {name: "不出-默认",rect: [160, 357, 72, 37]}, {name: "重选-默认",rect: [429, 357, 76, 36]}, {name: "提示-默认",rect: [608, 357, 76, 36]}, {name: "出牌-默认",rect: [788, 358, 74, 37]}, {name: "主界面-底分",rect: [11, 516, 52, 28]}, {name: "数字-倍数和底分-5",rect: [71, 516, 21, 25]}, {name: "主界面-倍数",
            rect: [11, 544, 52, 32]}],"准备开始界面": [{name: "右头像框",rect: [833, 53, 110, 110]}, {name: "右状态图标-准备",rect: [767, 108, 59, 63]}, {name: "胜局提示底框",rect: [214, 128, 532, 42]}, {name: "图标-倒计时",rect: [433, 175, 21, 49]}, {name: "数字-牌数和倒数-1",rect: [464, 219, 13, 21]}, {name: "数字-牌数和倒数-0",rect: [479, 219, 16, 21]}, {name: "红按扭中-默认",rect: [197, 334, 17, 82]}, {name: "明牌开始-默认",rect: [376, 334, 208, 83]}, {name: "红按扭小-默认",rect: [596, 334, 18, 42]}, {name: "换座位-默认",rect: [221, 353, 116, 38]}, {name: "开始-默认",rect: [624, 353, 77, 36]}],"叫地主": [{name: "右头像框",rect: [833, 53, 110, 110]}, {name: "图标-倒计时",
            rect: [432, 327, 25, 31]}, {name: "绿按扭小-默认",rect: [280, 334, 20, 30]}, {name: "红按扭小-默认",rect: [541, 334, 14, 24]}, {name: "不叫-默认",rect: [308, 354, 73, 36]}, {name: "叫地主-默认",rect: [559, 358, 99, 31]}, {name: "数字-牌数和倒数-1",rect: [463, 371, 13, 21]}, {name: "数字-牌数和倒数-0",rect: [478, 371, 16, 21]}],"抢地主": [{name: "图标-倒计时",rect: [432, 327, 23, 26]}, {name: "绿按扭小-默认",rect: [280, 334, 24, 26]}, {name: "红按扭小-默认",rect: [541, 334, 14, 19]}, {name: "不抢-默认",rect: [308, 353, 76, 37]}, {name: "抢地主-默认",rect: [559, 358, 99, 32]}, {name: "数字-牌数和倒数-1",rect: [463, 371, 13, 21]}, {name: "数字-牌数和倒数-0",
            rect: [478, 371, 16, 21]}],"对话泡-不出": [{name: "对话泡-右边",rect: [689, 87, 17, 30]}, {name: "右对话泡-不出",rect: [713, 117, 98, 56]}],"对话泡-不叫": [{name: "对话泡-右边",rect: [689, 87, 17, 29]}, {name: "右对话泡-不叫",rect: [713, 116, 97, 56]}],"对话泡-不抢": [{name: "对话泡-右边",rect: [689, 87, 20, 25]}, {name: "右对话泡-不抢",rect: [713, 115, 102, 56]}],"对话泡-抢地主": [{name: "对话泡-右边",rect: [689, 87, 9, 16]}, {name: "右对话泡-抢地主",rect: [702, 119, 124, 46]}],"对话泡-聊天": [{name: "右对话泡聊天框",rect: [487, 100, 350, 52]}, {name: "右对话泡-聊天",rect: [781, 158, 45, 19]}],"帮助界面": [{name: "文字",rect: [274, 120, 589, 383]}, {name: "游戏规则-点击",
            rect: [64, 135, 168, 35]}, {name: "牌型介绍-点击",rect: [64, 217, 168, 35]}, {name: "牌型及胜负-点击",rect: [65, 299, 168, 35]}, {name: "计分规则-点击",rect: [65, 381, 168, 35]}, {name: "操作方式-点击",rect: [65, 463, 168, 35]}, {name: "退出按钮-默认",rect: [865, 476, 68, 69]}],"托管": [{name: "托管图标-左边",rect: [132, 87, 72, 85]}, {name: "托管图标-右边",rect: [756, 87, 72, 85]}, {name: "托管小U",rect: [688, 327, 232, 245]}],"提示a": [{name: "提示界面-底框",rect: [170, 89, 111, 102]}, {name: "提示文字",rect: [240, 209, 475, 122]}, {name: "左红按扭小-默认",rect: [302, 342, 26, 26]}, {name: "右红按扭小-默认",rect: [518, 342, 22, 32]}, {name: "确定-默认",
            rect: [330, 362, 77, 39]}, {name: "取消-默认",rect: [547, 363, 75, 37]}],"提示b": [{name: "提示界面-底框",rect: [170, 89, 75, 82]}, {name: "提示文字",rect: [240, 209, 475, 122]}, {name: "红按扭小-默认",rect: [410, 342, 21, 23]}, {name: "确定-默认",rect: [438, 362, 77, 39]}],"提示c": [{name: "提示界面-底框",rect: [170, 89, 70, 87]}, {name: "提示文字",rect: [240, 209, 475, 122]}, {name: "红按扭中-默认",rect: [396, 342, 19, 22]}, {name: "确定倒数-默认",rect: [419, 364, 35, 33]}, {name: "倒数数字",rect: [508, 370, 14, 24]}],"换场和返回": [{name: "系统界面-换场和返回大厅-底框",rect: [388, 90, 83, 177]}, {name: "系统界面-返回大厅-默认",rect: [674, 172, 81, 
                124]}, {name: "系统界面-换场-禁点",rect: [493, 174, 89, 123]}],"设置音乐": [{name: "系统界面-设置-底框",rect: [531, 90, 75, 251]}, {name: "系统界面-设置-音乐-默认",rect: [630, 169, 71, 123]}],"结算界面": [{name: "结算界面-地主胜",rect: [140, 0, 73, 139]}, {name: "结算界面-总倍数按扭-默认",rect: [390, 228, 8, 9]}, {name: "结算界面-总倍数",rect: [396, 238, 79, 37]}, {name: "本人名",rect: [279, 332, 138, 24]}, {name: "得分1",rect: [576, 334, 123, 17]}, {name: "上家名",rect: [279, 371, 138, 24]}, {name: "得分2",rect: [576, 375, 123, 17]}, {name: "下家名",rect: [279, 410, 138, 24]}, {name: "得分3",rect: [576, 415, 123, 17]}, {name: "红按扭中-默认",rect: [399, 
                470, 19, 82]}, {name: "确定倒数-默认",rect: [422, 492, 69, 33]}, {name: "倒数数字",rect: [510, 497, 15, 25]}],"聊天界面": [{name: "聊天界面-底框",rect: [112, 56, 55, 78]}, {name: "聊天界面-发送按扭-默认",rect: [687, 99, 118, 70]}, {name: "聊天界面-常用语按扭-点击",rect: [202, 176, 149, 69]}, {name: "聊天界面-聊天记录按扭-默认",rect: [357, 176, 175, 48]}, {name: "聊天界面-文字选中",rect: [191, 292, 609, 50]}],"选区": [{name: "选区-底框和消耗文字",rect: [193, 217, 100, 292]}, {name: "选区普通场-默认",rect: [318, 232, 323, 47]}, {name: "选区8倍场-默认",rect: [319, 327, 323, 47]}, {name: "选区50倍场-默认",rect: [319, 422, 323, 47]}, {name: "帮助图标-默认",rect: [21, 
                476, 68, 69]}, {name: "退出按钮-默认",rect: [871, 476, 68, 69]}]};
Slice = {"其他动画.png": {"火箭": [0, 0, 130, 442],"飞机": [135, 0, 273, 138],"高倍1": [135, 143, 42, 61],"顺子": [182, 143, 191, 95],"高倍2": [135, 209, 42, 61],"连对": [182, 243, 191, 95],"报警动画1": [135, 343, 79, 79],"报警动画2": [219, 343, 79, 79],"报警动画3": [303, 343, 79, 79]},"加倍动画.png": {"加倍-乘2": [0, 0, 242, 149],"加倍-乘3": [0, 154, 242, 149],"加倍-乘5": [0, 308, 242, 149]},"斗地主loading.jpg": {"斗地主loading1": [0, 0, 234, 144],"斗地主loading2": [234, 0, 234, 144],"斗地主loading3": [468, 0, 234, 144],"斗地主loading4": [702, 0, 234, 144],"斗地主loading5": [936, 0, 234, 144],"斗地主loading6": [1170, 0, 234, 144]},
    "斗地主人物.png": {"男地主-身体": [0, 0, 111, 84],"男地主-头-默认": [116, 0, 121, 135],"男地主-头-奸笑": [242, 0, 121, 135],"男地主-头-愤怒": [368, 0, 121, 135],"男农民-身体": [0, 89, 111, 84],"男农民-头-默认": [116, 140, 114, 119],"男农民-头-奸笑": [235, 140, 114, 119],"男农民-头-愤怒": [354, 140, 114, 119],"女地主-身体": [0, 178, 111, 84],"女地主-头-默认": [116, 264, 119, 111],"女地主-头-奸笑": [240, 264, 119, 111],"女地主-头-愤怒": [364, 264, 119, 111],"女农民-身体": [0, 267, 111, 84],"愤怒": [75, 356, 36, 35],"女农民-头-默认": [116, 380, 113, 124],"女农民-头-奸笑": [234, 380, 113, 124],"女农民-头-愤怒": [352, 380, 113, 124]},"炸弹动画.png": {"炸弹动画01": [0, 0, 564, 312],
        "炸弹动画02": [564, 0, 564, 312],"炸弹动画03": [1128, 0, 564, 312],"炸弹动画04": [0, 312, 564, 312],"炸弹动画05": [565, 312, 564, 312]},"帮助界面.png": {"帮助-按钮点击": [0, 0, 218, 63],"游戏规则-默认": [0, 68, 168, 35],"游戏规则-点击": [173, 68, 168, 35],"牌型介绍-默认": [0, 108, 168, 35],"牌型介绍-点击": [173, 108, 168, 35],"牌型及胜负-默认": [0, 148, 168, 35],"牌型及胜负-点击": [173, 148, 168, 35],"计分规则-默认": [0, 188, 168, 35],"计分规则-点击": [173, 188, 168, 35],"操作方式-默认": [0, 228, 168, 35],"操作方式-点击": [173, 228, 168, 35]},"按钮.png": {"红按扭小-默认": [5, 5, 146, 88],"红按扭小-点击": [156, 5, 146, 88],"绿按扭小-默认": [5, 98, 146, 88],"绿按扭小-点击": [156, 98, 146, 
            88],"红按扭中-默认": [5, 191, 174, 88],"换座位-默认": [321, 192, 117, 41],"换座位-点击": [321, 238, 117, 41],"红按扭中-点击": [5, 284, 174, 88],"按扭-禁点": [184, 284, 146, 88],"确定-默认": [353, 286, 77, 42],"确定-点击": [353, 330, 77, 42],"明牌开始-默认": [5, 377, 211, 88],"明牌开始-点击": [218, 377, 211, 88],"开始-默认": [5, 470, 77, 39],"开始-点击": [87, 470, 77, 39],"开始-禁点": [169, 470, 83, 42],"取消-默认": [257, 472, 75, 40],"取消-点击": [337, 472, 75, 40],"叫地主-默认": [5, 517, 99, 34],"叫地主-点击": [109, 517, 98, 34],"叫地主-禁点": [212, 517, 104, 37],"确定倒数-默认": [321, 517, 118, 36],"抢地主-默认": [5, 559, 99, 35],"抢地主-点击": [109, 559, 98, 35],"抢地主-禁点": [212, 
            559, 104, 38],"确定倒数-点击": [321, 559, 118, 36],"不叫-默认": [5, 602, 73, 39],"不叫-点击": [83, 602, 73, 39],"不叫-禁点": [161, 602, 78, 42],"出牌-默认": [244, 602, 74, 40],"出牌-点击": [323, 602, 73, 40],"不抢-默认": [5, 649, 76, 40],"不抢-点击": [86, 649, 76, 40],"不抢-禁点": [167, 649, 83, 43],"出牌-禁点": [255, 649, 79, 43],"重选-禁点": [339, 649, 81, 42],"不出-默认": [5, 697, 72, 40],"不出-点击": [82, 697, 73, 40],"不出-禁点": [160, 697, 79, 43],"重选-默认": [244, 697, 76, 39],"重选-点击": [325, 697, 76, 39],"提示-默认": [5, 745, 76, 39],"提示-点击": [86, 745, 76, 39],"提示-禁点": [166, 745, 82, 40],"明牌-默认": [253, 745, 75, 40],"明牌-点击": [333, 745, 76, 
            40]},"主界面.jpg": {"主界面": [0, 0, 960, 576]},"主界面底图平铺.jpg": {"主界面底图平铺": [0, 0, 60, 60]},"公用提示框.jpg": {"公用提示框": [0, 0, 584, 348]},"商城底图.jpg": {"商城底图": [0, 0, 960, 576]},"帮助底图.jpg": {"帮助底图": [0, 0, 960, 576]},"选区-底图.jpg": {"选区-底图": [0, 0, 960, 576]},"牌.png": {"牌-黑桃3": [0, 0, 98, 123],"牌-黑桃4": [103, 0, 98, 123],"牌-黑桃5": [206, 0, 98, 123],"牌-黑桃6": [309, 0, 98, 123],"牌-黑桃7": [412, 0, 98, 123],"牌-黑桃8": [515, 0, 98, 123],"牌-黑桃9": [618, 0, 98, 123],"牌-黑桃10": [721, 0, 98, 123],"牌-黑桃J": [824, 0, 98, 123],"牌-黑桃Q": [927, 0, 98, 123],"牌-黑桃K": [1030, 0, 98, 123],"牌-黑桃A": [1133, 0, 98, 123],
        "牌-黑桃2": [1236, 0, 98, 123],"牌-小王": [1339, 0, 98, 123],"牌-红桃3": [0, 128, 98, 123],"牌-红桃4": [103, 128, 98, 123],"牌-红桃5": [206, 128, 98, 123],"牌-红桃6": [309, 128, 98, 123],"牌-红桃7": [412, 128, 98, 123],"牌-红桃8": [515, 128, 98, 123],"牌-红桃9": [618, 128, 98, 123],"牌-红桃10": [721, 128, 98, 123],"牌-红桃J": [824, 128, 98, 123],"牌-红桃Q": [927, 128, 98, 123],"牌-红桃K": [1030, 128, 98, 123],"牌-红桃A": [1133, 128, 98, 123],"牌-红桃2": [1236, 128, 98, 123],"牌-大王": [1339, 128, 98, 123],"牌-梅花3": [0, 256, 98, 123],"牌-梅花4": [103, 256, 98, 123],"牌-梅花5": [206, 256, 98, 123],"牌-梅花6": [309, 256, 98, 123],"牌-梅花7": [412, 
            256, 98, 123],"牌-梅花8": [515, 256, 98, 123],"牌-梅花9": [618, 256, 98, 123],"牌-梅花10": [721, 256, 98, 123],"牌-梅花J": [824, 256, 98, 123],"牌-梅花Q": [927, 256, 98, 123],"牌-梅花K": [1030, 256, 98, 123],"牌-梅花A": [1133, 256, 98, 123],"牌-梅花2": [1236, 256, 98, 123],"牌-背面": [1339, 256, 98, 123],"牌-方块3": [0, 384, 98, 123],"牌-方块4": [103, 384, 98, 123],"牌-方块5": [206, 384, 98, 123],"牌-方块6": [309, 384, 98, 123],"牌-方块7": [412, 384, 98, 123],"牌-方块8": [515, 384, 98, 123],"牌-方块9": [618, 384, 98, 123],"牌-方块10": [721, 384, 98, 123],"牌-方块J": [824, 384, 98, 123],"牌-方块Q": [927, 384, 98, 123],"牌-方块K": [1030, 
            384, 98, 123],"牌-方块A": [1133, 384, 98, 123],"牌-方块2": [1236, 384, 98, 123],"牌-选中": [1339, 384, 98, 123]},"界面切图a.png": {"个人信息和总倍数界面-底框": [0, 0, 368, 242],"托管小U": [373, 0, 232, 245],"界面切图a-05": [102, 247, 266, 2],"对话泡-左边": [0, 254, 156, 116],"数字-倍数和底分-0": [161, 254, 21, 30],"数字-倍数和底分-1": [187, 254, 21, 30],"数字-倍数和底分-2": [213, 254, 21, 30],"数字-倍数和底分-3": [239, 254, 21, 30],"数字-倍数和底分-4": [265, 254, 21, 30],"数字-倍数和底分-5": [291, 254, 21, 30],"数字-倍数和底分-6": [317, 254, 21, 30],"数字-倍数和底分-7": [343, 254, 21, 30],"数字-倍数和底分-8": [369, 254, 21, 30],"数字-倍数和底分-9": [395, 254, 21, 30],"数字-倍数和底分-加": [421, 
            254, 21, 30],"数字-倍数和底分-减": [447, 254, 21, 30],"数字-倍数和底分-乘": [473, 254, 21, 30],"数字-倍数和底分-除": [499, 254, 21, 30],"数字-倍数和底分-分号": [525, 254, 21, 30],"数字-倍数和底分-星": [551, 254, 21, 30],"数字-倍数和底分-左括号": [577, 254, 21, 30],"数字-倍数和底分-右括号": [603, 254, 21, 30],"数字-牌数和倒数-0": [161, 289, 16, 21],"数字-牌数和倒数-1": [182, 289, 16, 21],"数字-牌数和倒数-2": [203, 289, 16, 21],"数字-牌数和倒数-3": [224, 289, 16, 21],"数字-牌数和倒数-4": [245, 289, 16, 21],"数字-牌数和倒数-5": [266, 289, 16, 21],"数字-牌数和倒数-6": [287, 289, 16, 21],"数字-牌数和倒数-7": [308, 289, 16, 21],"数字-牌数和倒数-8": [329, 289, 16, 21],"数字-牌数和倒数-9": [350, 289, 
            16, 21],"数字-牌数和倒数-加": [371, 289, 16, 21],"数字-牌数和倒数-减": [392, 289, 16, 21],"数字-牌数和倒数-乘": [413, 289, 16, 21],"数字-牌数和倒数-除": [434, 289, 16, 21],"数字-牌数和倒数-分号": [455, 289, 16, 21],"数字-牌数和倒数-星": [476, 289, 16, 21],"数字-牌数和倒数-左括号": [497, 289, 16, 21],"数字-牌数和倒数-右括号": [518, 289, 16, 21],"图标-倒计时": [543, 289, 94, 84],"状态图标-准备": [161, 315, 59, 63],"状态图标-明牌准备": [225, 315, 59, 63],"底牌效果-2倍": [289, 315, 31, 27],"底牌效果-3倍": [325, 315, 31, 27],"底牌效果-加倍底框": [361, 315, 58, 51],"对话泡-聊天": [421, 315, 45, 19],"离线图标": [474, 315, 64, 38],"结算界面-限制分数图标": [424, 339, 37, 38],"底牌效果-4倍": [289, 347, 31, 
            27],"底牌效果-5倍": [325, 347, 31, 27],"对话泡-右边": [0, 375, 156, 116],"对话泡-不叫": [161, 383, 97, 56],"对话泡-不抢": [263, 383, 102, 56],"对话泡-不出": [370, 383, 98, 56],"结算界面-总倍数": [473, 383, 92, 37],"个人信息和总倍数界面-箭头": [570, 383, 43, 46],"对话泡-叫地主": [161, 444, 124, 46],"对话泡-抢地主": [290, 444, 124, 46],"底牌效果-顺子": [419, 444, 90, 35],"底牌效果-双王": [514, 444, 90, 35],"结算界面-逃跑图标": [570, 489, 42, 42],"底牌效果-三条": [0, 496, 90, 35],"底牌效果-同花顺": [95, 496, 90, 35],"底牌效果-一双": [190, 496, 90, 35],"底牌效果-同花": [285, 496, 90, 35],"底牌效果-小王": [380, 496, 90, 35],"底牌效果-大王": [475, 496, 90, 35]},"界面切图b.jpg": {"图标-商城-默认": [0, 
            0, 74, 72],"图标-托管-默认": [75, 0, 65, 72],"图标-设置-默认": [150, 0, 72, 72],"图标-换场和返回大厅-默认": [224, 0, 66, 72],"图标-商城-点击": [300, 0, 74, 72],"图标-托管-点击": [379, 0, 65, 72],"图标-设置-点击": [454, 0, 72, 72],"图标-换场和返回大厅-点击": [531, 0, 66, 72],"结算界面-总倍数按扭-默认": [607, 0, 181, 51],"结算界面-总倍数按扭-点击": [607, 61, 181, 51],"系统界面-设置-音乐-默认": [0, 82, 71, 123],"系统界面-设置-音乐-点击": [76, 82, 71, 123],"系统界面-设置-开启音乐-默认": [152, 82, 71, 123],"系统界面-设置-开启音乐-点击": [228, 82, 71, 123],"系统界面-换场-默认": [304, 82, 89, 123],"系统界面-换场-点击": [398, 82, 89, 123],"系统界面-换场-禁点": [492, 82, 89, 123],"玩家牌数-左边": [591, 117, 44, 42],"玩家牌数-右边": [640, 
            117, 44, 42],"主界面-底分": [696, 117, 62, 28],"主界面-倍数": [696, 155, 62, 32],"结算界面-地主图标": [591, 169, 29, 28],"结算界面-农民图标": [625, 169, 29, 28],"流局": [0, 215, 762, 68],"断线提示": [0, 288, 762, 68],"聊天界面-文字选中": [0, 366, 609, 58],"托管图标-左边": [619, 366, 72, 85],"托管图标-右边": [696, 366, 72, 85],"牌不够大": [0, 434, 420, 44],"聊天界面-发送按扭-默认": [430, 434, 118, 70],"系统界面-返回大厅-默认": [558, 461, 81, 124],"系统界面-返回大厅-点击": [644, 461, 81, 124],"图标-聊天-默认": [734, 461, 61, 62],"没有牌能大过上家": [0, 483, 420, 44],"聊天界面-发送按扭-点击": [430, 514, 118, 70],"图标-聊天-点击": [734, 528, 61, 62],"牌型不对": [0, 532, 420, 44],"请选择要打出的牌": [0, 
            581, 420, 44]},"界面切图c.png": {"聊天界面-底框": [0, 0, 753, 450],"聊天界面-底框-分割线": [0, 455, 576, 2],"聊天界面-常用语按扭-默认": [625, 455, 145, 48],"提示界面-底框": [0, 462, 620, 381],"聊天界面-常用语按扭-点击": [625, 508, 149, 69],"聊天界面-聊天记录按扭-默认": [625, 582, 175, 48],"聊天界面-聊天记录按扭-点击": [625, 635, 182, 69],"头像框": [625, 709, 110, 110],"总倍数界面-总倍数": [625, 824, 92, 35],"系统界面-换场和返回大厅-底框": [0, 864, 473, 255],"系统界面-设置-底框": [478, 864, 272, 251]},"界面切图d.png": {"结算界面-地主胜": [0, 0, 688, 480],"结算界面-农民胜": [0, 485, 688, 480]},"帮助图标.jpg": {"帮助图标-默认": [0, 0, 68, 69],"帮助图标-点击": [78, 0, 68, 69]},"退出按钮.png": {"退出按钮-默认": [0, 
            0, 68, 69],"退出按钮-点击": [73, 0, 68, 69]},"选区.jpg": {"选区-底框和消耗文字": [0, 0, 574, 292],"选区普通场-默认": [585, 0, 323, 47],"选区8倍场-默认": [585, 57, 323, 47],"选区50倍场-默认": [585, 114, 323, 47],"选区普通场-点击": [585, 171, 323, 47],"选区8倍场-点击": [585, 228, 323, 47],"选区50倍场-点击": [585, 285, 323, 47]}};
(function() {
    Music = {bg: {id: "bg",src: "musics/" + A.MUSIC_VERSION + "/bg.mp3"}}
})();
AlertVO = Class.extend({init: function(a, b, c, e) {
        this.code = a;
        this.msgs = b;
        this.countdown = c;
        this.action = e
    }});
AlertVO.CODE_SUCCESS = 0;
AlertVO.CODE_SERVER_CLOSE = 1;
AlertVO.CODE_IN_GAME = 2;
AlertVO.CODE_QUIT = 3;
AlertVO.CODE_BACK_TO_ROOM = 4;
AlertVO.CODE_KICK = 5;
AlertVO.CODE_TO_LONG_TO_START = 6;
AlertVO.CODE_SERVER_FULL = -1;
AlertVO.CODE_INVALID_USER = -2;
AlertVO.CODE_NOT_ENOUGH_MONEY = -3;
AlertVO.CODE_SYS_ERROR = -4;
AlertVO.CODE_NEW_KICK_OLD = -5;
AlertVO.CODE_ESCAPE = -6;
AlertVO.CODE_LIUJU_DISMISS = -8;
AlertVO.CODE_LIUJU = -9;
AlertVO.CODE_WRONG_POKERS = -10;
AlertVO.CODE_KICK_SELF = -11;
AlertVO.CODE_KICK_SERVER = -12;
AlertVO.CODE_KICK_CLOSE = -13;
AlertVO.ERROR_INFORM = 99;
AlertVO.ROOM_NOT_OPEN = 98;
AlertVO.ERROR_TOKEN_INVALID = 97;
AlertVO.ERROR_ENTER_GAME = 96;
AlertVO.ALWAY_SHOW = -1;
AlertVO.ACTION_NONE = 0;
AlertVO.ACTION_AREA_LIST = 1;
AlertVO.ACTION_GAME_LIST = 2;
CMD = window.CMD || {};
CMD.AUTHENTICATION = 0;
CMD.GAME_START_REQUEST = 1;
CMD.PLAYER_STATUS_RESPONSE = 2;
CMD.CHANGE_TABLE_REQUEST = 3;
CMD.EXIT_TABLE_RESPONSE = 4;
CMD.PLAYER_INFO_RESPONSE = 5;
CMD.TABLE_INFO_RESPONSE = 6;
CMD.CARDS_GIVE_RESPONSE = 7;
CMD.ENUM_MY_POKER = 0;
CMD.ENUM_OTHER_POKER = 1;
CMD.ENUM_BOTTOM_POKER = 2;
CMD.ENUM_RESULT_POKER = 3;
CMD.GAME_STATUS_RESPONSE = 8;
CMD.CALL_LANDLORD_REQUEST = 10;
CMD.ACTION_NOCALL = 0;
CMD.ACTION_CALL = 1;
CMD.ACTION_NOGRAB = 2;
CMD.ACTION_GRAB = 3;
CMD.CALL_LANDLORD_RESPONSE = 9;
CMD.LANDLORD_RESPONSE = 11;
CMD.SHOW_CARDS_REQUEST = 12;
CMD.MULTIPLE_RESPONSE = 13;
CMD.MULTIPLE_NONE = 0;
CMD.MULTIPLE_SHOW_READY = 1;
CMD.MULTIPLE_SHOW_START = 2;
CMD.MULTIPLE_ROB_LANDLORD = 3;
CMD.MULTIPLE_SLOTS_PAIR = 4;
CMD.MULTIPLE_SLOTS_BLACK_JOKER = 5;
CMD.MULTIPLE_SLOTS_RED_JOKER = 6;
CMD.MULTIPLE_SLOTS_PAIR_KING = 7;
CMD.MULTIPLE_SLOTS_STRAIGHT = 8;
CMD.MULTIPLE_SLOTS_PAIR_FLUSH = 9;
CMD.MULTIPLE_SLOTS_STRAIGHT_FLUSH = 10;
CMD.MULTIPLE_SLOTS_THREE = 11;
CMD.MULTIPLE_BOB = 12;
CMD.MULTIPLE_BOB_KING = 13;
CMD.MULTIPLE_BOB_SPRING = 14;
CMD.CARDS_REQUEST = 14;
CMD.CARDS_RESPONSE = 15;
CMD.CT_ILLEGAL = 0;
CMD.CT_NONE = 1;
CMD.CT_SINGLE = 2;
CMD.CT_PAIR = 3;
CMD.CT_TRIAD = 4;
CMD.CT_TRIAD_SINGLE = 5;
CMD.CT_TRIAD_PAIR = 6;
CMD.CT_QUAD_TWO = 7;
CMD.CT_QUAD_TWOPAIR = 8;
CMD.CT_STRAIGHT = 9;
CMD.CT_DOUBLE_STRAIGHT = 10;
CMD.CT_TREBLE_STRAIGHT = 11;
CMD.CT_PLANE = 12;
CMD.CT_DOUBLE_PLANE = 13;
CMD.CT_BOMB = 14;
CMD.CT_ROCKET = 15;
CMD.MANDATE_REQUEST = 16;
CMD.MANDATE = 0;
CMD.MANDATE_CANCEL = 1;
CMD.CHAT_REQUEST = 17;
CMD.CHAT_RESPONSE = 18;
CMD.CHAT_MTYPE_TABLE = 1;
CMD.LEAVE_REQUEST = 19;
CMD.BACK_TO_ROOM = 0;
CMD.BACK_TO_HALL = 1;
CMD.RESULT_RESPONSE = 20;
CMD.GAME_RESULT_RESPONSE = 21;
CMD.RECONNECT_RESPONSE = 22;
CMD.CUR_ACTOR_RESPONSE = 23;
CMD.GAME_CONFIG = 24;
CMD.DI_DA = 100;
CMD.SERVER_MSG_RESPONSE = 25;
CMD.SERVER_MSG_CALLBACK_NONE = 0;
CMD.SERVER_MSG_CALLBACK_BACKTOHALL = 1;
CMD.SERVER_MSG_CALLBACK_BACKTOROOM = 2;
CMD.MSG_SYS = 0;
NT = window.NT || {};
NT.PLAYER_STATUS_CHANGE = "playerStatusChanged";
NT.PLAYER_FLAG_CHANGE = "playerFlagChange";
NT.PLAYER_EXIT_TABLE = "playerExitTable";
NT.PLAYER_IN_TABLE = "playerInTable";
NT.IN_TABLE = "inTable";
NT.DEAL = "deal";
NT.BOTTOM_CARD = "bottomCard";
NT.GAME_STATUS_CHANGE = "gameStatusChange";
NT.CALL_LANDLORD = "callLandlord";
NT.CONFIRM_LANDLORD = "confirmLandlord";
NT.PLAYER_CARD = "playerCard";
NT.CHAT = "chat";
NT.ALERT = "alert";
NT.GAME_RESULT = "gameResult";
NT.ACTOR = "actor";
NT.MULTIPLE_CHANGE = "multipleChange";
NT.GAME_CONFIG_CHANGE = "gameConfigChange";
NT.SERVER_MSG = "serverMsg";
NT.UPDATE_CARDS_NUM = "updateCardsNum";
NT.SHOW_HELP = "showHelp";
NT.SHOW_GAME = "showGame";
NT.BACK_TO_ROOM = "backToRoom";
NT.SHOW_GAME_LAYER = "showGameLayer";
NT.HIDE_GAME_LAYER = "hideGameLayer";
NT.WHEN_OUT_OF_TIME_TO_CALL_LAND = "whenOutOfTimeToCallLand";
NT.WHEN_OUT_OF_TIME_TO_PLAY = "whenOutOfTimeToPlay";
NT.WHEN_15_SEC_PASS_TO_PLAY = "when15secPassToPlay";
NT.PLAY_POKER = "playPoker";
NT.PLAY_SKIP = "playSkip";
NT.ARRANGE_POKERS = "arrangePokers";
NT.HIDE_MORE = "hideMore";
NT.CHECK_BTN_ENABLE = "checkBtnEnable";
NT.SET_MULTIPLE_VISIBLE = "setMultipleVisible";
NT.SHOW_GAME_STATE = "showGameState";
NT.SHOW_LOADING = "showLoading";
NT.LOGIN_SUCCESS = "onLoginSuccess";
NT.HIDE_POPUPLAYER = "hidePopupLayer";
NT.SHOW_SPLASHLAYER = "showSplashLayer";
NT.CHANGE_TABLE = "changeTable";
NT.ENTER_GAME = "enterGame";
NT.GET_TOKEN_SUCCESS = "getTokenSuccess";
GameVO = Class.extend({init: function() {
        this.gameConfig = new GameConfigVO;
        this.players = [];
        this.playerVs = [];
        this.backPokers = this.userV = this.user = null;
        this.baseScore = 1;
        this.countDown_3th = 20;
        this.countDown_grabLand = this.countDown_callLand = 25;
        this.countDown_play = 30;
        this.scoreRate = 1;
        this.gambleScore = 0;
        this.gamblingIdx = -1;
        this.gambleCount = 0;
        this.currentDiZhu = this.lastThreePokers = null;
        this.currentTurn = 0;
        this.currentTurnType = null;
        this.expectType = -1;
        this.currentTurnPokers = null;
        this.map = {};
        this.currentTip = -1;
        this.currentTips = 
        null;
        this.state = 0;
        this.isReconnect = !1;
        this.lastWinner = -1;
        this.totalMultiple = 0;
        this.multipleType = -1;
        this.basicScore = this.basicMultiple = this.roomMultiple = 0
    },setGameConfig: function(a) {
        this.gameConfig = a
    },isUser: function(a) {
        return a === this.user.idx ? !0 : !1
    },isFreePlay: function() {
        return -1 == Engine.data.lastWinner || Engine.data.lastWinner == Engine.data.user.idx ? !0 : !1
    },getCurrentTurn: function() {
        return this.state === GameVO.STATE_THE_CARDS ? this.players[this.currentTurn] : this.players[this.gamblingIdx]
    },resetTips: function() {
        this.currentTip = 
        -1
    },hasTips: function() {
        return -1 != this.currentTip
    },findTips: function() {
        this.currentTip = 0;
        this.currentTips = AI.selectPoker(this.user, this.currentTurnType, this.currentTurnPokers)
    },findAutoFitTips: function() {
        if (this.hasTips()) {
            var a = this.user.getSelectedPokers();
            if (a && 0 < a.length && !(2 > a.length && this.isFreePlay())) {
                if (2 === a.length && this.isFreePlay())
                    return AI.findRestStraight(Engine.data.user, a);
                var b = this.currentTips;
                if (!b || 0 >= b.length)
                    return null;
                for (var c, e = 0, g = b.length; e < g; e++)
                    if (c = b[e], Utils.arrayContains(c, 
                    a))
                        return c
            }
        }
    },addPlayerAt: function(a, b) {
        b.idx = a;
        this.map[b.uid] = a;
        return this.players[a] = b
    },getPlayer: function(a) {
        return this.players[this.map[a]]
    },removePlayer: function(a) {
        var b = this.map, c = b[a], e = this.players[c];
        this.players[c] = null;
        delete b[a];
        return e
    },getPlayerCount: function() {
        for (var a = 0, b = 0; b < this.players.length; b++)
            this.players[b] && a++;
        return a
    },getReadyPlayerCount: function() {
        for (var a = 0, b = 0; b < this.players.length; b++) {
            var c = this.players[b];
            c && c.state == PlayerVO.STATE_READY && a++
        }
        return a
    },resetData: function() {
        this.scoreRate = 
        this.baseScore = 1;
        this.expectType = this.lastWinner = -1;
        this.currentTurnWinner = this.currentTurnPokers = this.currentTurnType = this.currentDiZhu = null;
        this.players.each(function(a) {
            a.reset()
        })
    }});
GameVO.getInstance = function() {
    GameVO._instance || (GameVO._instance = new GameVO);
    return GameVO._instance
};
GameVO.STATE_NONE = 0;
GameVO.STATE_CALL_LANDLORD = 1;
GameVO.STATE_GRAB_LANDLORD = 2;
GameVO.STATE_THE_CARDS = 3;
GameVO.STATE_RESULT = 4;
GameResultVO = Class.extend({init: function(a) {
        this.result = 0;
        this.multiples = [];
        this.landrod = null;
        this.data = [];
        this.copy(a)
    },copy: function(a) {
        if (a)
            for (var b in this)
                "function" != typeof this[b] && a[b] && (this[b] = a[b])
    },getItem: function(a) {
        return this.data[a]
    },getTotalMultiple: function() {
        for (var a = 1, b = 0; b < this.multiples.length; b++)
            a *= this.multiples[b];
        return a
    }});
GameResultVO.MULTIPLES_TEXTS = "房间 初始 明牌 抢地主 底牌 炸弹 春天 逃跑".split(" ");
GameResultItemVO = Class.extend({init: function(a) {
        this.uid = 0;
        this.name = "";
        this.role = this.money1 = this.totalMoney1 = this.flag = 0;
        this.sex = PlayerVO.MALE;
        this.copy(a)
    },hasFlag: function(a) {
        return (this.flag & a) == a
    },copy: function(a) {
        if (a)
            for (var b in this)
                "function" != typeof this[b] && a[b] && (this[b] = a[b])
    }});
GameResultItemVO.FLAG_FLEE = 2;
GameResultItemVO.FLAG_LIMIT = 4;
GroupType = function(a, b) {
    a && (GroupType[a] = this);
    this.name = a;
    this.numPokers = b
};
GroupType.prototype.toString = function() {
    return this.name
};
new GroupType("DanZhang", 1);
new GroupType("YiDui", 2);
new GroupType("ShuangWang", 2);
new GroupType("SanZhang", 3);
new GroupType("ZhaDan", 4);
new GroupType("SanDaiYi", 4);
new GroupType("WuZhangShunZi", 5);
new GroupType("SanDaiEr", 5);
new GroupType("LiuZhangShunZi", 6);
new GroupType("SanLianDui", 6);
new GroupType("SiDaiEr", 6);
new GroupType("ErLianFeiJi", 6);
new GroupType("QiZhangShunZi", 7);
new GroupType("SiDaiSi", 8);
new GroupType("BaZhangShunZi", 8);
new GroupType("SiLianDui", 8);
new GroupType("ErLianFeiJiDaiChiBang", 8);
new GroupType("JiuZhangShunZi", 9);
new GroupType("SanLianFeiJi", 9);
new GroupType("ShiZhangShunZi", 10);
new GroupType("WuLianDui", 10);
new GroupType("ErLianFeiJiDaiErDui", 10);
new GroupType("ShiYiZhangShunZi", 11);
new GroupType("ShiErZhangShunZi", 12);
new GroupType("LiuLianDui", 12);
new GroupType("SiLianFeiJi", 12);
new GroupType("SanLianFeiJiDaiChiBang", 12);
new GroupType("QiLianDui", 14);
new GroupType("WuLianFeiJi", 15);
new GroupType("SanLianFeiJiDaiSanDui", 15);
new GroupType("BaLianDui", 16);
new GroupType("SiLianFeiJiDaiChiBang", 16);
new GroupType("JiuLianDui", 18);
new GroupType("LiuLianFeiJi", 18);
new GroupType("ShiLianDui", 20);
new GroupType("WuLianFeiJiDaiChiBang", 20);
GroupType.getAnimation = function(a) {
    return 0 <= a.name.indexOf("FeiJi") ? GroupType.ANI_FEIJI : 0 <= a.name.indexOf("ZhaDan") ? GroupType.ANI_ZHADAN : 0 <= a.name.indexOf("ShuangWang") ? GroupType.ANI_HUOJIAN : 0 <= a.name.indexOf("ShunZi") ? GroupType.ANI_SHUNZI : 0 <= a.name.indexOf("LianDui") ? GroupType.ANI_LIANDUI : !1
};
GroupType.ANI_ZHADAN = 1;
GroupType.ANI_HUOJIAN = 2;
GroupType.ANI_SHUNZI = 3;
GroupType.ANI_LIANDUI = 4;
GroupType.ANI_FEIJI = 5;
MessageVO = Class.extend({init: function(a, b, c, e) {
        this.mtype = a;
        this.fromPlayer = b;
        this.uname = c;
        this.msg = e
    }});
PlayerVO = Class.extend({init: function(a) {
        this.score = 0;
        this.role = PlayerVO.NORMAL;
        this.pokers = [];
        this.giveType = -1;
        this.count = 0;
        this.single = [];
        this.pair = [];
        this.triple = [];
        this.bomb = [];
        this.rookie = [];
        this.timeout = -1;
        this.pokerScore = 0;
        this.clickToPlayPokers = this.lastPlayedPokers = this.playingPokers = this.playingType = null;
        this.uid = this.act = this.idx = 0;
        this.name = "";
        this.icon = this.flag = this.state = this.failNum = this.fleeNum = this.winNum = this.money1 = this.pos = 0;
        this.sex = PlayerVO.NOSEX;
        this.chatLogs = [];
        this.copy(a)
    },
    copy: function(a) {
        if (a)
            for (var b in this)
                "function" != typeof this[b] && void 0 != a[b] && (this[b] = a[b])
    },prepareNewTurn: function() {
        this.clickToPlayPokers = this.playingPokers = this.playingType = null
    },reset: function() {
        this.single = [];
        this.pair = [];
        this.triple = [];
        this.bomb = [];
        this.pokerScore = 0;
        this.lastPlayedPokers = this.playingPokers = this.playingType = this.pokers = this.clickToPlayPokers = null
    },getSelectedPokers: function() {
        for (var a = [], b = 0; b < this.pokers.length; b++)
            this.pokers[b].selected && a.push(this.pokers[b]);
        return a
    },
    deletePokers: function(a) {
        if (this.pokers && !(0 >= this.pokers.length))
            for (var b = 0; b < a.length; b++) {
                var c = a[b], e = this.pokers.indexOf(c);
                0 <= e && this.pokers.splice(e, 1);
                c.disable();
                e = this.single.indexOf(c);
                0 <= e && this.single.splice(e, 1);
                for (e = 0; e < this.pair.length; e++) {
                    var g = this.pair[e];
                    g[0] == c ? g[0] = null : g[1] == c && (g[1] = null);
                    if (!g[0] || !g[1]) {
                        this.pair.splice(e, 1);
                        break
                    }
                }
                for (e = 0; e < this.triple.length; e++)
                    if (g = this.triple[e], g[0] == c ? g[0] = null : g[1] == c ? g[1] = null : g[2] == c && (g[2] = null), !g[0] || !g[1] || !g[2]) {
                        this.triple.splice(e, 
                        1);
                        break
                    }
                for (e = 0; e < this.bomb.length; e++)
                    if (g = this.bomb[e], g[0] == c ? g[0] = null : g[1] == c ? g[1] = null : g[2] == c ? g[2] = null : g[3] == c && (g[3] = null), !g[0] || !g[1] || !g[2] || !g[3]) {
                        this.bomb.splice(e, 1);
                        break
                    }
            }
    },hasFlag: function(a) {
        return (this.flag & a) == a
    }});
PlayerVO.NORMAL = 0;
PlayerVO.DIZHU = 1;
PlayerVO.NOSEX = 0;
PlayerVO.MALE = 1;
PlayerVO.FEMALE = 2;
PlayerVO.STATE_NONE = 0;
PlayerVO.STATE_READY = 1;
PlayerVO.STATE_GAME = 3;
PlayerVO.FLAG_NONE = 0;
PlayerVO.FLAG_START_SHOW = 2;
PlayerVO.FLAG_SHOW = 4;
PlayerVO.FLAG_MANAGED = 8;
PlayerVO.FLAG_OFFLINE = 16;
PlayerVO.ACT_CALL_LANDLORD = 1;
PlayerVO.ACT_GRAB_LANDLORD = 2;
PlayerVO.ACT_THE_CARDS = 3;
PlayerVO.ROBOT_NAME_MALE = ["鳌拜", "韦小宝", "奥特曼"];
PlayerVO.ROBOT_NAME_FEMALE = ["貂蝉", "凤姐"];
PlayerVO.getRandomName = function() {
    return PlayerVO.ROBOT_NAMES[Math.floor(Math.random() * PlayerVO.ROBOT_NAMES.length)]
};
GameConfigVO = Class.extend({uid: null,token: null,gameServerUrl: null,ptype: "",ch: "",ua: "",isEmulator: !0});
(function() {
    PokerVO = Class.extend({point: 0,pointInTypeIndex: -1,pointType: "",init: function(a) {
            0 <= a && (this.point = a, this.getPokerPointType(), this.getPokerPointInTypeIndex())
        },getPokerPointType: function() {
            if ("" !== this.pointType)
                return this.pointType;
            for (type in PokerVO.PokerTypeEnum)
                if (0 <= PokerVO.PokerTypeEnum[type].indexOf(this.point)) {
                    this.pointType = type;
                    break
                }
            return this.pointType
        },getPokerPointInTypeIndex: function() {
            return -1 < this.pointInTypeIndex ? this.pointInTypeIndex : this.pointInTypeIndex = PokerVO.PokerTypeEnum[this.pointType].indexOf(this.point)
        }});
    PokerVO.PokerTypeEnum = {FANGKUAI: [11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],MEIHUA: [24, 25, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],HONGTAO: [37, 38, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],HEITAO: [50, 51, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],JOKERS: [52],JOKERB: [53]}
})();
(function() {
    Tip1VO = Class.extend({init: function(a, b, c, e) {
            this.text = a;
            U.isFunction(b) ? this.onOk = b : b = function() {
            };
            this.countdown = 0 < parseInt(c, 10) ? c : -1;
            U.isFunction(e) ? this.onCounting = e : e = function() {
            }
        }})
})();
(function() {
    Tip2VO = Class.extend({init: function(a, b, c) {
            this.text = a;
            U.isFunction(b) ? this.onOk = b : b = function() {
            };
            U.isFunction(c) ? this.onCancel = c : c = function() {
            }
        }})
})();
(function() {
    TipWithCountdownVO = Class.extend({init: function(a, b, c, e) {
            this.text = a;
            U.isFunction(e) ? this.onCounting = e : e = function() {
            };
            this.countdown = 0 < parseInt(c, 10) ? c : -1;
            U.isFunction(b) ? this.onCancel = b : b = function() {
            }
        }})
})();
(function() {
    function a() {
        Engine.ob.addListener(NT.GAME_STATUS_CHANGE, o, this);
        Engine.ob.addListener(NT.IN_TABLE, m, this);
        Engine.ob.addListener(NT.CHANGE_TABLE, n, this);
        Engine.ob.addListener(NT.PLAYER_IN_TABLE, s, this);
        Engine.ob.addListener(NT.PLAYER_EXIT_TABLE, t, this);
        Engine.ob.addListener(NT.PLAYER_STATUS_CHANGE, u, this);
        Engine.ob.addListener(NT.PLAYER_FLAG_CHANGE, v, this);
        Engine.ob.addListener(NT.GAME_RESULT, w, this);
        Engine.ob.addListener(NT.CHAT, x, this);
        Engine.ob.addListener(NT.DEAL, y, this);
        Engine.ob.addListener(NT.BOTTOM_CARD, 
        k, this);
        Engine.ob.addListener(NT.ACTOR, q, this);
        Engine.ob.addListener(NT.CALL_LANDLORD, z, this);
        Engine.ob.addListener(NT.CONFIRM_LANDLORD, B, this);
        Engine.ob.addListener(NT.PLAYER_CARD, C, this);
        Engine.ob.addListener(NT.MULTIPLE_CHANGE, e, this);
        Engine.ob.addListener(NT.GAME_CONFIG_CHANGE, g, this);
        Engine.ob.addListener(NT.UPDATE_CARDS_NUM, D, this);
        Engine.ob.addListener(NT.WHEN_OUT_OF_TIME_TO_PLAY, h, this);
        Engine.ob.addListener(NT.WHEN_OUT_OF_TIME_TO_CALL_LAND, i, this);
        Engine.ob.addListener(NT.WHEN_15_SEC_PASS_TO_PLAY, 
        j, this);
        Engine.ob.addListener(NT.PLAY_POKER, E, this);
        Engine.ob.addListener(NT.PLAY_SKIP, F, this);
        Engine.ob.addListener(NT.ARRANGE_POKERS, r, this);
        Engine.ob.addListener(NT.HIDE_MORE, l, this);
        Engine.ob.addListener(NT.CHECK_BTN_ENABLE, I, this);
        Engine.ob.addListener(NT.SET_MULTIPLE_VISIBLE, J, this);
        Engine.ob.addListener(NT.SHOW_SPLASHLAYER, c, this)
    }
    function b() {
        Engine.ob.removeListener(NT.GAME_STATUS_CHANGE, o);
        Engine.ob.removeListener(NT.IN_TABLE, m);
        Engine.ob.removeListener(NT.CHANGE_TABLE, n);
        Engine.ob.removeListener(NT.PLAYER_IN_TABLE, 
        s);
        Engine.ob.removeListener(NT.PLAYER_EXIT_TABLE, t);
        Engine.ob.removeListener(NT.PLAYER_STATUS_CHANGE, u);
        Engine.ob.removeListener(NT.PLAYER_FLAG_CHANGE, v);
        Engine.ob.removeListener(NT.GAME_RESULT, w);
        Engine.ob.removeListener(NT.CHAT, x);
        Engine.ob.removeListener(NT.DEAL, y);
        Engine.ob.removeListener(NT.BOTTOM_CARD, k);
        Engine.ob.removeListener(NT.ACTOR, q);
        Engine.ob.removeListener(NT.CALL_LANDLORD, z);
        Engine.ob.removeListener(NT.CONFIRM_LANDLORD, B);
        Engine.ob.removeListener(NT.PLAYER_CARD, C);
        Engine.ob.removeListener(NT.MULTIPLE_CHANGE, 
        e);
        Engine.ob.removeListener(NT.GAME_CONFIG_CHANGE, g);
        Engine.ob.removeListener(NT.UPDATE_CARDS_NUM, D);
        Engine.ob.removeListener(NT.WHEN_OUT_OF_TIME_TO_PLAY, h);
        Engine.ob.removeListener(NT.WHEN_OUT_OF_TIME_TO_CALL_LAND, i);
        Engine.ob.removeListener(NT.WHEN_15_SEC_PASS_TO_PLAY, j);
        Engine.ob.removeListener(NT.PLAY_POKER, E);
        Engine.ob.removeListener(NT.PLAY_SKIP, F);
        Engine.ob.removeListener(NT.ARRANGE_POKERS, r);
        Engine.ob.removeListener(NT.HIDE_MORE, l);
        Engine.ob.removeListener(NT.CHECK_BTN_ENABLE, I);
        Engine.ob.removeListener(NT.SET_MULTIPLE_VISIBLE, 
        J);
        Engine.ob.removeListener(NT.SHOW_SPLASHLAYER, c)
    }
    function c(a) {
        Engine.splashLayer.show(a)
    }
    function e(a) {
        a && (Engine.toolbarLayer.setMultiple(Engine.getData().totalMultiple), null !== a.multipleType && 0 <= a.multipleType && Engine.animation.showMultipleAniByType(a.multipleType))
    }
    function g() {
        Engine.toolbarLayer.setBasicScore(Engine.getData().basicScore);
        Engine.toolbarLayer.setMultiple(Engine.getData().basicMultiple)
    }
    function h() {
        Engine.controlContainer.hide()
    }
    function i() {
        Engine.gambleContainer.hide()
    }
    function j() {
        Engine.animation.showPleaseChoose()
    }
    function k(a) {
        p();
        Engine.toolbarLayer.setLastPokers();
        Engine.toolbarLayer.setLastPokersLucky(a)
    }
    function l() {
        Engine.toolbarLayer && (Engine.toolbarLayer.removeLastPokers(), Engine.toolbarLayer.removeLastPokersLucky());
        Engine.pokerContainer.hide();
        for (var a = 0, b, c = Engine.getData().playerVs.length; a < c; a++)
            b = Engine.getData().playerVs[a], b.removeVisiblePokers();
        p()
    }
    function m() {
        for (var a = 0; 3 > a; a++) {
            var b = Engine.getData().playerVs[a];
            b.joinInTableAtFirst();
            b.setData(Engine.getData().players[a]);
            b.hidePlayerInfo();
            delete b
        }
        K();
        Engine.pokerContainer.clear();
        Engine.pokerContainer.show();
        l();
        Engine.splashLayer.hasCountDown = !0;
        Engine.splashLayer.show({gameModel: Engine.getData(),onHide: function() {
            }})
    }
    function n() {
        U.log("【Engine】换桌操作");
        Engine.initData()
    }
    function o() {
        for (var a = 0; 3 > a; a++) {
            var b = Engine.getData().playerVs[a];
            b && b.hidePlayerInfo()
        }
        switch (Engine.getData().state) {
            case GameVO.STATE_NONE:
                l();
                K();
                Engine.ob.notify(NT.SHOW_SPLASHLAYER, Engine.getData());
                break;
            case GameVO.STATE_CALL_LANDLORD:
                L();
                break;
            case GameVO.STATE_GRAB_LANDLORD:
                L();
                break;
            case GameVO.STATE_THE_CARDS:
                Engine.splashLayer.hide();
                p();
                Engine.pokerContainer.show();
                break;
            case GameVO.STATE_RESULT:
                p()
        }
    }
    function K() {
        Engine.splashLayer.hide();
        Engine.controlContainer.hide();
        Engine.gambleContainer.hide();
        for (var a = 0, b, c = Engine.getData().playerVs.length; a < c; a++)
            b = Engine.getData().playerVs[a], b.removeCountDown(), b.removeAlarmLeft(), b.clearLastPokers(), b.hideBubble()
    }
    function L() {
        Engine.splashLayer.hide();
        Engine.getData().resetData();
        p();
        Engine.pokerContainer.clear();
        Engine.pokerContainer.show();
        Engine.toolbarLayer.removeLastPokers();
        Engine.getData().playerVs.each(function(a) {
            a.setVisible(!0);
            a.removeVisiblePokers()
        });
        Engine.getData().backPokers = [];
        for (var a = 0; 3 > a; a++) {
            var b = G.Image.create({slice: G.getSlice("牌-背面")});
            b.setX(A.WIDTH - Poker.WIDTH >> 1);
            b.setY(A.HEIGHT - Poker.HEIGHT >> 1);
            A.gameV.addChild(b);
            Engine.getData().backPokers.push(b)
        }
        Engine.getData().isReconnect && M();
        Engine.getData().playerVs[1].displayCount();
        Engine.getData().playerVs[2].displayCount()
    }
    function s(a) {
        U.log("【Engine】有用户进入房间");
        Engine.initData();
        Engine.getData().playerVs[a.idx].setData(a);
        Engine.ob.notify(NT.SHOW_SPLASHLAYER, {gameModel: Engine.getData()})
    }
    function t(a) {
        U.log("【Engine】有用户离开房间");
        Engine.initData();
        Engine.getData().playerVs[a.idx].setData(null);
        Engine.ob.notify(NT.SHOW_SPLASHLAYER, {gameModel: Engine.getData()})
    }
    function u(a) {
        U.log("【Engine】玩家状态改变");
        Engine.getData().playerVs[a.idx].setData(a)
    }
    function v(a) {
        U.log("【Engine】有用户改变状态");
        Engine.getData().playerVs[a.idx].setData(a);
        Engine.getData().userV.repaint()
    }
    function z(a) {
        Engine.getData().playerVs[a.idx].showGambleBubble()
    }
    function E(a) {
        var b = Engine.getData().players[a], a = Engine.getData().playerVs[a];
        b.clickToPlayPokers = b.getSelectedPokers();
        b.clickToPlayPokers && 0 < b.clickToPlayPokers.length && (b.count -= b.clickToPlayPokers.length, b.deletePokers(b.clickToPlayPokers), Net.request(CMD.CARDS_REQUEST, {uid: b.uid,cards: Net.toNetCards(b.clickToPlayPokers)}));
        a.showClickToPlayPokers();
        Engine.controlContainer.hide();
        Engine.animation.hideAllTips()
    }
    function w(a) {
        Engine.pokerContainer.clear();
        Engine.gameResultLayer.setData(a);
        Engine.gameResultLayer.show()
    }
    function x(a) {
        a.fromPlayer && Engine.getData().playerVs[a.fromPlayer.idx] && Engine.getData().playerVs[a.fromPlayer.idx].showChatBubble(a.msg)
    }
    function I() {
        Engine.getData().isFreePlay() ? Engine.controlContainer.skipBtn.disable() : Engine.controlContainer.skipBtn.enable();
        var a = Engine.getData().user.getSelectedPokers();
        a && 0 < a.length ? (Engine.controlContainer.resetBtn.enable(), Engine.controlContainer.playBtn.enable()) : (Engine.controlContainer.resetBtn.disable(), Engine.controlContainer.playBtn.disable())
    }
    function J(a) {
        Engine.toolbarLayer.setMultipleVisible(a)
    }
    function N(a, b) {
        if (!a && !b)
            return !0;
        if (!a || !b)
            return !1;
        if (a.length === b.length && 0 === b.length)
            return !0;
        if (a.length !== b.length)
            return !1;
        for (var c = 0, e, g = 0, h = a.length; g < h; g++) {
            e = a[g];
            for (var i, j = 0, k = b.length; j < k; j++)
                if (i = b[j], e.point === i.point && e.type.value === i.type.value) {
                    c++;
                    break
                }
        }
        return c === a.length
    }
    function C(a) {
        U.log("显示某人出了什么牌");
        a === Engine.getData().user ? (U.log("显示玩家本身出了什么牌"), a.hasFlag(PlayerVO.FLAG_MANAGED) ? !a.playingPokers || 0 >= a.playingPokers.length ? Engine.getData().playerVs[a.idx].showNoPlayBubble() : 
        Engine.getData().playerVs[a.idx].showOthersPlayPokers() : N(a.playingPokers, a.clickToPlayPokers) || Engine.getData().playerVs[a.idx].showOthersPlayPokers()) : (U.log("显示其他玩家出了什么牌"), a.playingPokers && 0 < a.playingPokers.length ? Engine.getData().playerVs[a.idx].showOthersPlayPokers() : Engine.getData().playerVs[a.idx].showNoPlayBubble())
    }
    function B(a) {
        U.log("【Engine】设置地主");
        var b = Engine.getData().playerVs[a.idx];
        if (!Engine.getData().isReconnect) {
            if (a == Engine.getData().user) {
                (!Engine.getData().lastThreePokers || 0 >= 
                Engine.getData().lastThreePokers.length) && U.error("【Engine】Engine.getData().lastThreePokers is missing");
                Utils.arrayContains(a.pokers, Engine.getData().lastThreePokers) || (a.pokers = a.pokers.concat(Engine.getData().lastThreePokers));
                a.pokers.sort(Poker.sortPoker);
                AI.analyzePlayerPokers(a);
                for (var c = A.WIDTH - Poker.WIDTH >> 1, e = A.HEIGHT - Poker.HEIGHT >> 1, g = 0; g < Engine.getData().lastThreePokers.length; g++)
                    Engine.getData().lastThreePokers[g].setX(c), Engine.getData().lastThreePokers[g].setY(e), Engine.pokerContainer.addChild(Engine.getData().lastThreePokers[g]);
                r(!0)
            } else
                a.pokers && 0 < a.pokers.length && ((!Engine.getData().lastThreePokers || 0 >= Engine.getData().lastThreePokers.length) && U.error("Engine.getData().lastThreePokers is missing"), Utils.arrayContains(a.pokers, Engine.getData().lastThreePokers) || (a.pokers = a.pokers.concat(Engine.getData().lastThreePokers), a.pokers.sort(Poker.sortPoker), b.dealVisiblePokers()));
            a.count = 20;
            b.displayCount()
        }
        for (a = 0; a < Engine.getData().players.length; a++)
            cv = Engine.getData().playerVs[a], cv.hideBubble()
    }
    function y(a) {
        if (a.idx === 
        Engine.getData().user.idx) {
            if (a.giveType !== CMD.ENUM_RESULT_POKER)
                if (AI.analyzePlayerPokers(a), Engine.getData().isReconnect)
                    Engine.pokerContainer.dealTween_user(a.idx, null, !1);
                else {
                    Engine.pokerContainer.dealTween_user(a.idx, U.delegate(O, this), !0);
                    for (var a = 0, b, c = Engine.getData().playerVs.length; a < c; a++)
                        b = Engine.getData().playerVs[a], b.hideBubble()
                }
        } else
            Engine.getData().playerVs[a.idx].dealVisiblePokers()
    }
    function F(a) {
        a = Engine.getData().players[a];
        Engine.controlContainer.hide();
        var b = Engine.getData().playerVs[a.idx];
        b.clearLastPokers();
        b.showNoPlayBubble();
        Net.request(CMD.CARDS_REQUEST, {uid: a.uid})
    }
    function r(a) {
        U.log("【Engine】重新排列玩家的牌");
        var b = Engine.getData().user.pokers;
        b && !(0 >= b.length) && (b.sort(Poker.sortPoker), Engine.pokerContainer.arrangePokers(b, a))
    }
    function D(a) {
        Engine.getData().playerVs[a.idx].displayCount()
    }
    function O() {
        M();
        q()
    }
    function q() {
        if (!Engine.pokerContainer.isDealing) {
            U.log("【Engine】显示谁在动作中（叫地主、出牌）");
            var a = Engine.getData().getCurrentTurn(), b = Engine.getData().playerVs[a.idx];
            b.addGlow();
            for (var c = 
            0, e = Engine.getData().playerVs; c < e.length; c++)
                e[c].removeCountDown();
            Engine.controlContainer.hide();
            Engine.gambleContainer.hide();
            U.log("【Engine】清空上一次的牌/泡泡");
            if (Engine.getData().lastWinner === a.idx)
                for (var c = 0, g = Engine.getData().playerVs, e = g.length; c < e; c++)
                    g[c].clearLastPokers();
            else
                b.clearLastPokers(), b.hideBubble();
            U.log("【Engine】检查玩家是否在托管中");
            if (!a.hasFlag(PlayerVO.FLAG_MANAGED)) {
                c = 0;
                switch (a.act) {
                    case PlayerVO.ACT_CALL_LANDLORD:
                        U.log("【Engine】叫地主中");
                        Engine.getData().isUser(a.idx) && Engine.gambleContainer.show(!0);
                        c = Engine.getData().countDown_callLand;
                        break;
                    case PlayerVO.ACT_GRAB_LANDLORD:
                        U.log("【Engine】抢地主中");
                        Engine.getData().isUser(a.idx) && Engine.gambleContainer.show();
                        c = Engine.getData().countDown_grabLand;
                        break;
                    case PlayerVO.ACT_THE_CARDS:
                        if (U.log("【Engine】出牌中"), Engine.getData().isUser(a.idx) && Engine.controlContainer.show(), c = Engine.getData().countDown_play, g = Engine.getData().user.pokers)
                            for (var h = 0, e = g.length; h < e; h++)
                                g[h].enable()
                }
                U.log("【Engine】显示倒计时");
                0 < a.timeout && (c = a.timeout);
                b.showCountDown(c)
            }
        }
    }
    function p() {
        if (Engine.getData().backPokers && 
        0 < Engine.getData().backPokers.length)
            if (Config.ANI_REMOVE_BACK_POKER_ON && Engine.getData().state === GameVO.STATE_THE_CARDS)
                for (var a = 0; 3 > a; a++)
                    Engine.getData().backPokers[a].to({x: A.WIDTH - 140 >> 1,y: 0,scale: 0.3 * Engine.scale,opacity: 0,time: 0.5,onEnd: function(a) {
                            a.parent && a.parent.removeChild(a)
                        }});
            else
                for (a = 0; 3 > a; a++)
                    Engine.getData().backPokers[a].parent && Engine.getData().backPokers[a].parent.removeChild(Engine.getData().backPokers[a])
    }
    function M() {
        if (Engine.getData().backPokers && !(0 >= Engine.getData().backPokers.length)) {
            var a = 
            Engine.getData().backPokers[0].x;
            !Engine.getData().isReconnect && Config.ANI_EXTEND_BACK_POKER_ON ? (Engine.getData().backPokers[0].to({x: a + (Poker.ORG_IMG_WIDTH + 15) * Engine.scale,y: Engine.getData().backPokers[0].y - 40,time: 0.5}), Engine.getData().backPokers[1].to({y: Engine.getData().backPokers[2].y - 40,time: 0.5}), Engine.getData().backPokers[2].to({x: a - (Poker.ORG_IMG_WIDTH + 15) * Engine.scale,y: Engine.getData().backPokers[2].y - 40,time: 0.5})) : (Engine.getData().backPokers[0].setX(a + (Poker.ORG_IMG_WIDTH + 15) * Engine.scale), 
            Engine.getData().backPokers[0].setY(Engine.getData().backPokers[2].y - 40), Engine.getData().backPokers[1].setY(Engine.getData().backPokers[2].y - 40), Engine.getData().backPokers[2].setX(a - (Poker.ORG_IMG_WIDTH + 15) * Engine.scale), Engine.getData().backPokers[2].setY(Engine.getData().backPokers[2].y - 40))
        }
    }
    Engine = {images: [],stage: void 0,mainLayer: void 0,data: void 0,uid: void 0,token: void 0,isGetTokening: !1,width: 0,height: 0,pokerX: 126,pokerY: 445,pokerMaxGap: 60,pokerMaxWidth: 0,interval_deal: 100,turnInterval: 500,
        roundInterval: 3E3,scale: 1,stageScale: {scaleX: 1,scaleY: 1},imgs: void 0,lastGameResultVO: null,ob: U.Observer,wsUrl: "",startup: function() {
            U.log("【Engine】游戏引擎启动");
            Engine.initGameLayer();
            Engine.initData();
            Engine.initPoker();
            Engine.toolbarLayer.setMultiple(Engine.getData().totalMultiple);
            Engine.toolbarLayer.setBasicScore(Engine.getData().basicScore);
            b();
            a();
            A.showPush(1);
            G.SoundManager.play("bg", !0, Config.BGM_LENGTH);
            U.log("- Engine.startup - End")
        }};
    U.log("【Engine】定义NT.GET_TOKEN_SUCCESS");
    Engine.ob.addListener(NT.GET_TOKEN_SUCCESS, 
    Engine.startup);
    Engine.stop = function() {
        U.log("【Engine】游戏引擎关闭");
        G.SoundManager.stopAll();
        b()
    }
})();
(function() {
    Engine.getData = function() {
        return GameVO.getInstance()
    };
    Engine.getToken = function() {
        U.log("【Engine】取token");
        Engine.isGetTokening || (Engine.isGetTokening = !0, H.Api.getGameToken(function(a) {
            U.log("大厅token");
            Engine.setToken(a.token);
            Net.authentication()
        }, this))
    };
    Engine.setToken = function(a) {
        U.log("【Engine】设置token");
        Engine.token = a;
        GameVO.getInstance().gameConfig.token = a;
        Engine.isGetTokening = !1
    };
    Engine.clearToken = function() {
        U.log("【Engine】清除token");
        Engine.token = GameVO.getInstance().gameConfig.token = 
        null
    };
    Engine.initData = function() {
        U.log("【Engine】重建游戏数据");
        var a = A.mainV.getGameV();
        GameVO.getInstance().userV = a.getMainPlayerV();
        GameVO.getInstance().playerVs = [a.getMainPlayerV(), a.getRightConnerPlayerV(), a.getLeftConnerPlayerV()];
        Engine.data = GameVO.getInstance()
    };
    Engine.initPoker = function() {
        U.log("【Engine】重建扑克");
        PlayerV.PTR_GAP *= Engine.scale;
        var a = G.getSlice("牌-背面");
        Poker.ORG_IMG_WIDTH = a.rect[2];
        Poker.ORG_IMG_HEIGHT = a.rect[3];
        Poker.WIDTH = Poker.ORG_IMG_WIDTH * Engine.scale;
        Poker.HEIGHT = Poker.ORG_IMG_HEIGHT * 
        Engine.scale;
        Poker.background = [13 * Poker.ORG_IMG_WIDTH, 2 * Poker.ORG_IMG_HEIGHT, Poker.ORG_IMG_WIDTH, Poker.ORG_IMG_HEIGHT];
        Poker.selectedBg = [13 * Poker.ORG_IMG_WIDTH, 3 * Poker.ORG_IMG_HEIGHT, Poker.ORG_IMG_WIDTH, Poker.ORG_IMG_HEIGHT];
        Engine.pokerMaxWidth = A.WIDTH - Poker.WIDTH - PlayerV.PTR_WIDTH;
        Engine.pokerX = PlayerV.PTR_GAP + PlayerV.PTR_WIDTH;
        Engine.pokerY = Math.round(A.HEIGHT - Poker.HEIGHT - 10)
    };
    Engine.initGameLayer = function() {
        U.log("【Engine】重建游戏界面");
        A.mainV.repaint();
        var a = A.mainV.getGameV();
        Engine.splashLayer = 
        a.getSplashLayer();
        Engine.toolbarLayer = a.getToolbarLayer();
        Engine.animation = a.getAnimation();
        Engine.gambleContainer = a.getGambleContainer();
        Engine.controlContainer = a.getControlContainer();
        Engine.pokerContainer = a.getPokerContainer();
        Engine.gameResultLayer = a.getGameResultLayer()
    };
    Engine.connectServer = function() {
        U.log("【Engine】 连接游戏服务器");
        Engine.getToken();
        Net.connect()
    };
    U.log("【Engine】定义NT.ENTER_GAME");
    Engine.ob.addListener(NT.ENTER_GAME, Engine.connectServer)
})();
AI = {singleRate: 1,singleLowRate: 0.5,kingRate: 3,pairRate: 3,pairLowRate: 2,tripleRate: 4,tripleLowRate: 3.5,straightRate: 5,bombRate: 6,twoKingScore: 120,gamble: function(a) {
        _playerScore = a.pokerScore;
        return 220 > _playerScore ? 1 : 220 <= _playerScore && 280 >= _playerScore ? 2 : 3
    },selectPoker: function(a, b, c) {
        var e = [];
        AI.analyzePlayerPokers(a);
        if (!b)
            return U.log("[AI] 是自由出牌"), e = AI.autoSelectPoker(a), AI.tidyPokersArray(e), e;
        var g, h, i;
        if (b === GroupType.SiDaiEr) {
            U.log("[AI] 四带二");
            for (h = a.bomb.length; h--; ) {
                i = a.bomb[h];
                var j = AI.getTail(a, 
                i, 2, !1);
                0 < j.length && (i = i.concat(j));
                0 < Rule.compare(i, c) && e.push(i)
            }
        } else if (b === GroupType.SiDaiSi) {
            U.log("[AI] 四带四");
            for (h = a.bomb.length; h--; )
                i = a.bomb[h], j = AI.getTail(a, i, 2, !0), 0 < j.length && (i = i.concat(j)), 0 < Rule.compare(i, c) && e.push(i)
        } else {
            U.log("[AI] 搜索整副牌看看有没有能出的牌");
            if (b == GroupType.SanDaiEr && 0 < a.triple.length && 0 < a.pair.length) {
                U.log("[AI] 搜索三带二");
                g = a.triple.slice();
                for (h = g.length; h--; ) {
                    i = g[h];
                    for (var k = a.pair.length - 1, l = a.pair[k]; l[0].point == i[0].point && !(0 > --k); )
                        l = a.pair[k];
                    0 > k ? g.splice(h, 1) : 
                    g[h] = i.concat(l)
                }
            } else
                (g = AI.findPokerByType(a, b)) && 0 < g.length && (e = e.concat(AI.selectCanPlayPokers(g, a, b, c))), g = AI.findPokerByType_noRepeat(a, b);
            g && 0 < g.length && (e = e.concat(AI.selectCanPlayPokers(g, a, b, c)))
        }
        if ((!g || 0 >= g.length) && 0 <= b.name.indexOf("FeiJi")) {
            U.log("[AI] 飞机");
            h = b.name;
            g = null;
            k = 0;
            l = !1;
            i = c.length;
            0 <= h.indexOf("ErLian") ? (g = GroupType.ErLianFeiJi, 8 === i ? (k = 2, l = !1) : 10 === i && (k = 2, l = !0)) : 0 <= h.indexOf("SanLian") ? (g = GroupType.SanLianFeiJi, 12 === i ? (k = 3, l = !1) : 15 === i && (k = 3, l = !0)) : 0 <= h.indexOf("SiLian") ? 
            (g = GroupType.SiLianFeiJi, 16 === i ? (k = 4, l = !1) : 20 === i && (k = 4, l = !0)) : 0 <= h.indexOf("WuLian") ? (g = GroupType.WuLianFeiJi, 20 === i ? (k = 5, l = !1) : 25 === i && (k = 5, l = !0)) : 0 <= h.indexOf("LiuLian") && (g = GroupType.LiuLianFeiJi, 24 === i ? (k = 6, l = !1) : 30 === i && (k = 6, l = !0));
            g = AI.findPokerByType_all4to3(a, g);
            for (h = g.length; h--; )
                i = g[h], 0 < k && (j = AI.getTail(a, i, k, l), 0 < j.length && (i = i.concat(j))), 0 < Rule.compare(i, c) && e.push(i)
        }
        b != GroupType.ZhaDan && 0 < a.bomb.length && (U.log("[AI] 有炸弹"), e.push(a.bomb[a.bomb.length - 1]));
        if ((g = a.rookie) && 0 < g.length)
            U.log("[AI] 有火箭"), 
            e.push(g);
        AI.tidyPokersArray(e);
        if (b === GroupType.YiDui) {
            U.log("[AI] 处理对子, 把原来是在3张/炸弹里的对子放到最后");
            b = [];
            h = 0;
            for (k = e.length; h < k; h++)
                if (c = e[h], AI.pairInBomb(c, a.bomb) || AI.pairInTriple(c, a.triple))
                    e.splice(h--, 1), b.push(c), k--;
            0 < b.length && (e = e.concat(b))
        }
        return e
    },selectCanPlayPokers: function(a, b, c, e) {
        for (var g = [], h, i = a.length; i--; )
            if (h = a[i], h instanceof Array || (h = [h]), c.numPokers == h.length) {
                if (c == GroupType.SanDaiYi || c == GroupType.SanDaiEr)
                    h = Rule.sortTripleLink(h);
                if (c == GroupType.SanDaiYi)
                    if (0 < b.single.length) {
                        var j = 
                        b.single[b.single.length - 1];
                        if (j.point < h[3].point || Utils.arrayNotContains(b.single, [h[3]]))
                            h[3] = j
                    } else
                        12 < h[3].point && (j = b.pokers[b.pokers.length - 1], j.point != h[0].point && j.point != b.pokers[b.pokers.length - 4].point && j.point < h[3].point && (h[3] = j));
                else if (c == GroupType.SanDaiEr) {
                    for (var k = b.pair.length - 1, j = b.pair[k]; (AI.pairInBomb(j, b.bomb) || AI.pairInTriple(j, b.triple)) && !(0 > --k); )
                        j = b.pair[k];
                    if (!(0 > k) && (j[0].point < h[3].point || AI.pairInTriple(h.slice(3), b.triple) || AI.pairInBomb(h.slice(3), b.triple)))
                        h[3] = 
                        j[0], h[4] = j[1]
                }
                j = Rule.compare(h, e);
                (j = e ? 0 < j : !0) && g.push(h)
            }
        return g
    },autoSelectPoker: function(a) {
        var b = [], c, e;
        e = a.pokers.slice();
        if (Rule.getType(e))
            b.push(e);
        else {
            e = AI.findPokerByType(a, GroupType.ShiErZhangShunZi);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.ShiYiZhangShunZi);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.ShiZhangShunZi);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.JiuZhangShunZi);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.BaZhangShunZi);
            if (!e || !e.length)
                e = AI.findPokerByType(a, 
                GroupType.QiZhangShunZi);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.LiuZhangShunZi);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.WuZhangShunZi);
            if (e && 0 < e.length)
                for (c = e.length - 1; 0 <= c; c--)
                    14 >= e[c][0].point && b.push(e[c]);
            e = AI.findPokerByType(a, GroupType.ShiLianDui);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.JiuLianDui);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.BaLianDui);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.QiLianDui);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.LiuLianDui);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.WuLianDui);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.SiLianDui);
            if (!e || !e.length)
                e = AI.findPokerByType(a, GroupType.SanLianDui);
            if (e && 0 < e.length)
                for (c = e.length - 1; 0 <= c; c--)
                    14 >= e[c][0].point && b.push(e[c]);
            c = a.triple.length;
            if (0 < c) {
                e = a.triple[c - 1];
                var g, h;
                a.single.length && (g = a.single[a.single.length - 1]);
                a.realPair.length && (h = a.realPair[a.realPair.length - 1]);
                g ? h && h[0].point != e[0].point && 14 > h[0].point && h[0].point <= g.point - 2 ? e = e.concat(h) : e.push(g) : 
                h && (h[0].point != e[0].point && 14 > h[0].point) && (e = e.concat(h));
                b.push(e)
            }
            c = a.single.length;
            0 < c && (e = a.single[c - 1], 14 > e.point && b.push([e]));
            c = a.pair.length;
            if (0 < c)
                for (g = c - 1; 0 <= g; g--)
                    if (e = a.pair[g], 14 > e[0].point && !AI.pairInBomb(e, a.bomb) && !AI.pairInTriple(e, a.triple)) {
                        b.push(e);
                        break
                    }
            c = a.single.length;
            0 < c && (e = a.single[c - 1], b.push([e]));
            c = a.pair.length;
            if (0 < c)
                for (g = c - 1; 0 <= g; g--)
                    if (e = a.pair[g], !AI.pairInBomb(e, a.bomb) && !AI.pairInTriple(e, a.triple)) {
                        b.push(e);
                        break
                    }
            0 >= b.length && (c = a.bomb.length, 0 < c && (e = a.bomb[c - 
            1], b.push(e)));
            0 >= b.length && (e = AI.findPokerByType(a, GroupType.ShuangWang)) && e.length && b.push(e[0])
        }
        return b
    },findPokerByType: function(a, b) {
        var c, e = b.numPokers, g = a.pokers.length;
        if (e > g)
            return null;
        if (b == GroupType.DanZhang)
            return a.single;
        if (b == GroupType.YiDui)
            return a.pair;
        if (b == GroupType.SanZhang)
            return a.triple;
        if (b == GroupType.ZhaDan)
            return a.bomb;
        var h, i = [];
        for (c = e - 1; c < g; c++)
            h = a.pokers.slice(c - e + 1, c + 1), Rule.getType(h) == b && i.push(h);
        return i
    },findPokerByType_noRepeat: function(a, b) {
        var c, e = b.numPokers, 
        g = [], h = a.pokers.slice();
        AI.removeRepeat(h);
        for (c = e - 1; c < h.length; c++)
            f = h.slice(c - e + 1, c + 1), Rule.getType(f) == b && g.push(f);
        return g
    },findPokerByType_all4to3: function(a, b) {
        var c, e = b.numPokers, g = [], h = a.pokers.slice();
        AI.all4to3(h);
        for (c = e - 1; c < h.length; c++)
            f = h.slice(c - e + 1, c + 1), Rule.getType(f) == b && g.push(f);
        return g
    },removeRepeat: function(a) {
        for (var b = 1; b < a.length; b++)
            a[b].point === a[b - 1].point && a.splice(b--, 1)
    },all4to3: function(a) {
        for (var b = 3; b < a.length; b++)
            a[b - 3].point === a[b - 2].point && (a[b - 2].point === a[b - 
            1].point && a[b - 1].point === a[b].point) && a.splice(b--, 1)
    },tidyPokersArray: function(a) {
        for (var b = 0; b < a.length; b++)
            (null == a[b] || 0 >= a[b].length) && a.splice(b--, 1);
        for (b = 0; b < a.length; b++)
            for (var c = b + 1; c < a.length; c++)
                a[b].length == a[c].length && AI.isSameArray(a[b], a[c]) && a.splice(c--, 1)
    },isSameArray: function(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] != b[c])
                return !1;
        return !0
    },pairInBomb: function(a, b) {
        for (var c = a[0].point, e = 0, g = b.length; e < g; e++)
            if (b[e][0].point === c)
                return !0;
        return !1
    },pairInTriple: function(a, b) {
        for (var c = 
        a[0].point, e = 0, g = b.length; e < g; e++)
            if (b[e][0].point === c)
                return !0;
        return !1
    },scorePlayerPokers: function(a) {
        var b, c, e = 0;
        for (b = 0; b < a.single.length; b++)
            c = a.single[b].point, e += 16 <= c ? AI.kingRate * c : 10 <= c ? AI.singleRate * c : AI.singleLowRate * c;
        17 == a.single[0].point && 16 == a.single[0].point && (e += AI.twoKingScore);
        for (b = 0; b < a.pair.length; b++)
            c = a.pair[b][0].point, e += 10 <= c ? AI.pairRate * c : AI.pairLowRate * c;
        for (b = 0; b < a.triple.length; b++)
            c = a.triple[b][0].point, e += 10 <= c ? AI.tripleRate * c : AI.tripleLowRate * c;
        for (b = 0; b < a.bomb.length; b++)
            c = 
            a.bomb[b][0].point, e += AI.bombRate * c;
        a.pokerScore = e;
        U.log("pokerScore:", a.name, e);
        return e
    },analyzePlayerPokers: function(a) {
        var b = [], c = [], e = [], g = [], h = [], i, j, k = a.pokers, l = k.length;
        for (i = 0; i < l; i++) {
            j = k[i].point;
            var m = !1;
            0 == i ? m = 1 == l ? !0 : k[i + 1].point != j : i == l - 1 ? m = k[i - 1].point != j : k[i - 1].point != j && k[i + 1].point != j && (m = !0);
            m && b.push(k[i])
        }
        for (i = 2; i < l; i++)
            j = k[i].point, k[i - 2].point == j && k[i - 1].point == j && (!(i + 1 < l && k[i + 1].point == j) && !(3 <= i && k[i - 3].point == j)) && (e.push([k[i - 2], k[i - 1], k[i]]), i += 2);
        for (i = 3; i < l; i++)
            j = 
            k[i].point, k[i - 3].point == j && (k[i - 2].point == j && k[i - 1].point == j) && (g.push([k[i - 3], k[i - 2], k[i - 1], k[i]]), i += 3);
        j = [];
        for (i = 1; i < l; i++)
            k[i - 1].point == k[i].point && (m = [k[i - 1], k[i]], c.push(m), !AI.pairInBomb(m, a.bomb) && !AI.pairInTriple(m, a.triple) && j.push(m), i++);
        2 <= k.length && (17 === k[0].point && 16 === k[1].point) && (h.push(k[0]), h.push(k[1]));
        a.single = b;
        a.pair = c;
        a.realPair = j;
        a.triple = e;
        a.bomb = g;
        a.rookie = h
    },findRestStraight: function(a, b) {
        var c = a.pokers, e = c.length, g = [], h = b[0], i = b[1];
        if (h && i && !(15 <= h.point || 15 <= i.point || 
        h.point === i.point)) {
            if (h.point > i.point)
                var j = h, h = i, i = j;
            for (var k = i.point - h.point, j = 1, l; j < k; j++) {
                l = h.point + j;
                for (var m = 0, n; m < e; m++)
                    if (n = c[m], n.point === l) {
                        g.push(n);
                        break
                    }
            }
            if (!(1 < k && g.length + 1 != k)) {
                if (3 > g.length)
                    for (var k = h.point, o = 3 - g.length, j = 1; j <= o; j++) {
                        l = h.point - j;
                        for (m = 0; m < e; m++)
                            if (n = c[m], n.point === l && k - 1 === l) {
                                g.push(n);
                                k = n.point;
                                break
                            }
                    }
                if (3 > g.length) {
                    k = i.point;
                    o = 3 - g.length;
                    for (j = 1; j <= o; j++) {
                        l = i.point + j;
                        for (m = 0; m < e; m++)
                            if (n = c[m], n.point === l && k + 1 === l) {
                                g.push(n);
                                k = n.point;
                                break
                            }
                    }
                }
                return 3 <= g.length ? 
                g : null
            }
        }
    },getTail: function(a, b, c, e) {
        var g, h = 0, i = [], j = a.pair.length;
        if (e) {
            for (e = j; e--; )
                if (g = a.pair[e], Utils.arrayNotContains(b, g) && (!AI.pairInBomb(g, a.triple) && !AI.pairInBomb(g, a.bomb)) && (h++, i = i.concat(g), h === c))
                    return i;
            for (e = j; e--; )
                if (g = a.pair[e], Utils.arrayNotContains(b, g) && Utils.arrayNotContains(i, g) && (h++, i = i.concat(g), h === c))
                    return i
        } else {
            for (e = a.single.length - 1; 0 <= e; e--)
                if (g = a.single[e], Utils.arrayNotContains(b, [g]) && (16 != g.point && 17 != g.point) && (h++, i.push(g), h === c))
                    return i;
            for (e = j; e--; )
                if (g = 
                a.pair[e], Utils.arrayNotContains(b, g) && !AI.pairInBomb(g, a.triple) && !AI.pairInBomb(g, a.bomb)) {
                    if (h === c)
                        return i;
                    if (h === c - 1 && Utils.arrayNotContains(i, [g[0]]))
                        return i.push(g[0]), i;
                    Utils.arrayNotContains(i, g) && (h += 2, i = i.concat(g))
                }
            for (e = j; e--; )
                if (g = a.pair[e], Utils.arrayNotContains(b, g)) {
                    if (h === c - 1 && Utils.arrayNotContains(i, [g[0]]))
                        return i.push(g[0]), i;
                    Utils.arrayNotContains(i, g) && (h += 2, i = i.concat(g));
                    if (h === c)
                        return i
                }
            if (2 <= a.single.length && (17 === a.single[0].point && 16 === a.single[1].point) && (i.push(a.single[0]), 
            i.push(a.single[1]), i.length === c))
                return i
        }
        return []
    }};
Net = {requestId: 0,requests: [],conn: null,url: "",ob: U.Observer,testUid: "123",loginState: 0,heartBeatId: -1,heartBeatTime: 22E3,checkHeartBeatIsBackTimeout: 16E3,reconnReason: -1,NORMAL_LOGIN: 1,BROKEN_NET: 2,LOCKED_SCREEN: 3,HEART_BEAT_NO_REPLY: 4,mobile: U.getMobile(),browser: U.getBrowser()};
Net.reconnReason = Net.NORMAL_LOGIN;
Net.launchHeartBeat = function() {
    Net.stopHeartBeat();
    Net.heartBeatId = setInterval(Net.heartBeat, Net.heartBeatTime);
    Net.launchEngineCheck()
};
Net.checkHeartBeatIsBack_timeoutId = -1;
Net.heartBeat = function() {
    Net.lastHeartBeatIsFinished() ? (U.log("【Net】心跳"), Net.conn._socket.send("[]"), Net.checkHeartBeatIsBack_timeoutId = setTimeout(Net.checkHeartBeatIsBack, Net.checkHeartBeatIsBackTimeout)) : U.log("【Net】上次心跳未完成, 该次心跳不发送")
};
Net.lastHeartBeatIsFinished = function() {
    return 0 > Net.checkHeartBeatIsBack_timeoutId
};
Net.stopCheckingHeartBeatIsBack = function() {
    clearTimeout(Net.checkHeartBeatIsBack_timeoutId);
    Net.checkHeartBeatIsBack_timeoutId = -1
};
Net.checkHeartBeatIsBack = function() {
    U.log("【Net】检查心跳是否返回");
    Net.lastHeartBeatIsFinished() ? U.log("【Net】心跳已返回") : (U.log("【Net】心跳没有返回, 进行断线重连"), Net.reconnReason = Net.HEART_BEAT_NO_REPLY, Net.conn.reconnect());
    Net.stopCheckingHeartBeatIsBack()
};
Net.isHeartBeatData = function(a) {
    return "" == a ? (U.log("【Net】心跳返回"), !0) : !1
};
Net.stopHeartBeat = function() {
    Net.stopCheckingHeartBeatIsBack();
    -1 != Net.heartBeatId && (clearInterval(Net.heartBeatId), Net.heartBeatId = -1, Net.stopEngineCheck())
};
Net.isConnected = function() {
    return Net.conn && Net.conn.isConnected()
};
Net.connect = function(a) {
    Net._openTip(Msg.NET_CONNECTING, A.exit);
    Net.conn || (Net.conn = new U.WSConnector, Net.conn.retriesCycle = 1E3 * Config.NET_RETRIES_CYCLE, Net.conn.retriesInterval = 1E3 * Config.NET_RETRIES_INTERVAL, Net.conn.retriesLimit = Config.NET_RETRIES_LIMIT, Net.conn.bind(U.WSConnector.DATA, Net._onData), Net.conn.bind(U.WSConnector.CONNECT, Net._onConnect), Net.conn.bind(U.WSConnector.DISCONNECT, Net._onDisconnect), Net.conn.bind(U.WSConnector.FAILED, Net._onDisconnect), Net.conn.bind(U.WSConnector.RECONNECTING, 
    Net._onReconnecting), Net.conn.bind(U.WSConnector.RECONNECT, Net._onReconnect));
    a && a != Net.url ? ((Net.conn.isConnected() || Net.conn.isReconnecting()) && Net.conn.disconnect(), Net.url = a, Net.conn.connect(Net.url)) : !Net.conn.isConnected() && !Net.conn.isReconnecting() && Net.conn.connect(Net.url)
};
Net.launchEngineCheck = function() {
    U.log("【Net】黑屏检查测试");
    Net.checkEngineIntervalId || (Net._lastTimer = (new Date).getTime(), Net.checkEngineIntervalId = setInterval(function() {
        var a = (new Date).getTime();
        7E3 < a - Net._lastTimer && Net.isConnected() && (U.log("黑屏超时，客户端主动断开重连：" + (a - Net._lastTimer)), Net.reconnReason = Net.LOCKED_SCREEN, Net.conn.reconnect());
        Net._lastTimer = a
    }, 1E3))
};
Net.stopEngineCheck = function() {
    clearInterval(Net.checkEngineIntervalId);
    Net.checkEngineIntervalId = null
};
Net.disconnect = function() {
    Net.conn && Net.conn.disconnect()
};
Net.authentication = function() {
    U.log("【Net】验证");
    Net.loginState == Net.LOGIN_STATE_NONE && (U.log("【Net】向登录验证处理...."), U.Observer.notify(NT.HIDE_POPUPLAYER), Net._openTip(Msg.NET_AUTHENTICATION, function() {
        A.exit(AlertVO.ACTION_NONE)
    }), Engine.token ? Net.isConnected() && (U.log("【Net】向验证请求"), Net.loginState = Net.LOGIN_STATE_LOGINING, Net.request(CMD.AUTHENTICATION, {reconnReason: Net.reconnReason,uid: Engine.uid,token: Engine.token,ptype: Net.ptype,ch: Net.ch,ua: Net.ua,nt: Net.nt}, function() {
        U.log("【Net】验证成功");
        Net.loginState = 
        Net.LOGIN_STATE_LOGINED;
        Net.reconnReason = Net.BROKEN_NET
    }, null, !0), Engine.clearToken()) : (U.log("【Net】向Engine.getToken 申请获取token"), Engine.getToken()))
};
Net.request = function(a, b, c, e, g) {
    var h = {};
    h.ctag = ++Net.requestId;
    h.ctype = a;
    Config.DEBUG_EMULATOR && Net.ob.notify(a, b);
    if (b)
        for (var i in b)
            h[i] = b[i];
    c && (h.func = e ? U.delegate(c, e) : c);
    if (g) {
        A.tips = new TipWithCountdownV({text: Msg.NET_REQUEST,onCancel: function() {
                A.popup.hide(this)
            }});
        A.popup.show(A.tips, {noRemove: !0});
        var j = h.func;
        h.func = function(a, b, c) {
            j && j(a, b, c);
            A.popup.hide(A.tips)
        }
    }
    Net.conn.request(h);
    (c || g) && Net.requests.push(h)
};
Net._onConnect = function() {
    Net._closeTip();
    Net.authentication();
    Net.launchHeartBeat()
};
Net._onDisconnect = function(a) {
    Net.loginState = Net.LOGIN_STATE_NONE;
    Net.stopHeartBeat();
    a || (Net._closeTip(), a = new Tip1VO(Msg.NET_DISCONNECTED, A.exit), A.tips = new Tip1V(a), A.popup.show(A.tips, {noRemove: !0}))
};
Net._onReconnecting = function() {
    Net.loginState = Net.LOGIN_STATE_NONE;
    Net._openTip(Msg.NET_RECONNECTING, A.exit);
    Net.stopHeartBeat()
};
Net._onReconnect = function() {
    Net._closeTip();
    Net.authentication();
    Net.launchHeartBeat()
};
Net._onData = function(a) {
    Net.isHeartBeatData(a) && Net.stopCheckingHeartBeatIsBack();
    for (var b = 0; b < a.length; b++) {
        var c = a[b];
        switch (c.ctype) {
            case CMD.PLAYER_STATUS_RESPONSE:
                Net._playerStatusHandler(c);
                break;
            case CMD.EXIT_TABLE_RESPONSE:
                Net._exitTableHandler(c);
                break;
            case CMD.PLAYER_INFO_RESPONSE:
                Net._playerInfoHandler(c);
                break;
            case CMD.TABLE_INFO_RESPONSE:
                Net._tableInfoHandler(c);
                break;
            case CMD.CARDS_GIVE_RESPONSE:
                Net._cardsGiveHandler(c);
                break;
            case CMD.GAME_STATUS_RESPONSE:
                Net._gameStatusHandler(c);
                break;
            case CMD.CALL_LANDLORD_RESPONSE:
                Net._callLandlordHandler(c);
                break;
            case CMD.LANDLORD_RESPONSE:
                Net._landlordHandler(c);
                break;
            case CMD.MULTIPLE_RESPONSE:
                Net._multipleHandler(c);
                break;
            case CMD.CARDS_RESPONSE:
                Net._cardsHandler(c);
                break;
            case CMD.CHAT_RESPONSE:
                Net._chatHandler(c);
                break;
            case CMD.RESULT_RESPONSE:
                Net._resultHandler(c);
                break;
            case CMD.GAME_RESULT_RESPONSE:
                Net._gameResultHandler(c);
                break;
            case CMD.RECONNECT_RESPONSE:
                Net._reconnectHandler(c);
                break;
            case CMD.CUR_ACTOR_RESPONSE:
                Net._curActorHandler(c);
                break;
            case CMD.GAME_CONFIG:
                Net._gameConfig(c);
                break;
            case CMD.SERVER_MSG_RESPONSE:
                Net._serverMsg(c)
        }
        for (var e = 0; e < Net.requests.length; e++)
            if (Net.requests[e].ctag == c.ctag) {
                var g = Net.requests.splice(e, 1)[0];
                if (g.func) {
                    g.func(!0, g.data, c);
                    break
                }
            }
    }
};
Net._playerStatusHandler = function(a) {
    U.log("【Net】玩家状态改变  uid:" + a.uid + ", state:" + a.state);
    var b = Engine.getData().getPlayer(a.uid);
    if (b && (null != a.state && a.state != b.state && (b.state = a.state, Net.ob.notify(NT.PLAYER_STATUS_CHANGE, b)), null != a.flag && a.flag != b.flag))
        U.log("【Net】玩家flag改变  uid:" + a.uid + ", flag:" + a.flag), b.flag = a.flag, Net.ob.notify(NT.PLAYER_FLAG_CHANGE, b)
};
Net._exitTableHandler = function(a) {
    U.log("【Net】其它玩家离开游戏 uid:" + a.uid);
    (a = Engine.getData().removePlayer(a.uid)) && Net.ob.notify(NT.PLAYER_EXIT_TABLE, a)
};
Net._playerInfoHandler = function(a) {
    U.log("【Net】其它玩家进入游戏 uid:" + a.uid + ", update:" + a.update);
    var b = (a.user.pos + 3 - Engine.getData().user.pos) % 3, c;
    a.update ? (c = Engine.getData().players[b]) && c.copy(a.user) : (c = new PlayerVO(a.user), Engine.getData().addPlayerAt(b, c));
    c && Net.ob.notify(NT.PLAYER_IN_TABLE, c)
};
Net._tableInfoHandler = function(a) {
    U.log("【Net】主玩家进入游戏");
    Net._closeTip();
    var b = Engine.getData();
    Engine.getData().tid = a.tid;
    var c = new PlayerVO(a.user);
    Engine.getData().user = c;
    Engine.getData().state = 0;
    Engine.getData().players = [];
    Engine.getData().addPlayerAt(0, c);
    if (a.others)
        for (var e = 0; e < a.others.length; e++) {
            var c = new PlayerVO(a.others[e]), g = (c.pos + 3 - b.user.pos) % 3;
            Engine.getData().addPlayerAt(g, c)
        }
    U.log("【Net】主玩家进入游戏并登录成功");
    Net.ob.notify(NT.LOGIN_SUCCESS);
    U.log("【Net】主玩家进入游戏并入座");
    Net.ob.notify(NT.IN_TABLE)
};
Net._cardsGiveHandler = function(a) {
    U.log("【Net】得到玩家的牌 uid:" + a.uid);
    a.cards && (a.cards = Net.toLocalPokers(a.cards));
    if (a.giveType == CMD.ENUM_BOTTOM_POKER)
        Engine.getData().lastThreePokers = a.cards, Net.ob.notify(NT.BOTTOM_CARD, {multipleType: a.multipleType,multiple: a.multiple});
    else {
        var b = Engine.getData().getPlayer(a.uid);
        if (b) {
            if (a.giveType == CMD.ENUM_MY_POKER || a.giveType == CMD.ENUM_OTHER_POKER || a.giveType == CMD.ENUM_RESULT_POKER)
                b.pokers = a.cards, b.giveType = a.giveType, Net.ob.notify(NT.DEAL, b);
            0 < a.cardsNum && 
            (b.count = a.cardsNum, Net.ob.notify(NT.UPDATE_CARDS_NUM, b))
        } else
            U.log("【Net】没有此玩家 uid:" + a.uid)
    }
};
Net._gameStatusHandler = function(a) {
    U.log("【Net】游戏状态改变  gameState:" + a.gameState);
    Engine.getData().state = a.gameState;
    switch (Engine.getData().state) {
        case GameVO.STATE_NONE:
            Net._changePlayersState(PlayerVO.STATE_NONE);
            break;
        case GameVO.STATE_CALL_LANDLORD:
        case GameVO.STATE_GRAB_LANDLORD:
            Net._changePlayersState(PlayerVO.STATE_GAME);
            break;
        case GameVO.STATE_THE_CARDS:
            Net._changePlayersState(PlayerVO.STATE_GAME)
    }
    Net.ob.notify(NT.GAME_STATUS_CHANGE, Engine.getData())
};
Net._callLandlordHandler = function(a) {
    U.log("【Net】有人叫地主  uid:" + a.uid);
    var b = Engine.getData().getPlayer(a.uid);
    b && (b.act = a.action, Net.ob.notify(NT.CALL_LANDLORD, b))
};
Net._landlordHandler = function(a) {
    U.log("【Net】确定地主  uid:" + a.uid);
    var b = Engine.getData();
    if (a = b.getPlayer(a.uid)) {
        a.role = PlayerVO.DIZHU;
        for (var c = 0, e, g = b.players.length; c < g; c++)
            e = b.players[c], e.idx != a.idx && (e.role = PlayerVO.NORMAL);
        b.currentDiZhu = a.idx;
        Net._changePlayersState();
        Net.ob.notify(NT.CONFIRM_LANDLORD, a)
    }
};
Net._multipleHandler = function(a) {
    U.log("【Net】得到倍数  total:" + a.total);
    Engine.getData().totalMultiple = a.total;
    Engine.getData().multipleType = a.multipleType;
    Net.ob.notify(NT.MULTIPLE_CHANGE, {total: a.total,multipleType: a.multipleType,multiple: a.multiple})
};
Net._cardsHandler = function(a) {
    a.cards && (a.cards = Net.toLocalPokers(a.cards));
    U.log("【Net】得到玩家打出来的牌，uid:" + a.uid);
    var b = "";
    if (a.cards)
        for (var c = 0; c < a.cards.length; c++)
            b += a.cards[c].point + ", ";
    U.log("【Net】这些牌是: " + b);
    b = Engine.getData();
    c = b.getPlayer(a.uid);
    0 != c.idx && b.playerVs[c.idx].hideBigVisiblePokers();
    c.playingPokers = a.cards && 0 < a.cards.length ? a.cards : null;
    var e = b.getPlayer(a.lastWinner);
    e ? (b.lastWinner = e.idx, b.isUser(b.lastWinner) ? (b.currentTurnPokers = null, b.currentTurnType = null, b.expectType = -1) : 
    (b.currentTurnPokers = e.playingPokers, b.currentTurnType = Rule.getType(b.currentTurnPokers), b.currentTurnType ? U.log("【Net】类型是: " + b.currentTurnType.name) : U.error("【Net】找不到类型 "), b.expectType = 0 < a.cardType ? a.cardType : -1)) : b.expectType = -1;
    if (c.playingPokers && (0 < c.playingPokers.length && !b.isUser(c.idx)) && (b.isReconnect || (c.count -= c.playingPokers.length), c.pokers && 0 < c.pokers.length))
        Utils.toLocalArray(c.pokers, c.playingPokers), c.deletePokers(c.playingPokers);
    Net.ob.notify(NT.PLAYER_CARD, c)
};
Net._chatHandler = function(a) {
    U.log("【Net】得到聊天记录，玩家:" + a.uid);
    var b = Engine.getData().getPlayer(a.uid), c = a.msg.replaceAll("<", "&lt;").replaceAll(">", "&gt;"), a = new MessageVO(a.mtype, b, a.uname, c), b = Engine.getData();
    b.user.chatLogs.unshift(a);
    10 < b.user.chatLogs.length && b.user.chatLogs.pop();
    Net.ob.notify(NT.CHAT, a)
};
Net._resultHandler = function(a) {
    U.log("【Net】系统提示/系统返回");
    0 != a.code && (a = new AlertVO(a.code, a.msgs, a.countdown, a.action), Net.ob.notify(NT.ALERT, a))
};
Net._gameResultHandler = function(a) {
    U.log("【Net】游戏结算  result:" + a.result);
    var b = new GameResultVO;
    b.result = a.result;
    b.multiples = a.multiples;
    for (var c = Engine.getData(), e = 0; 3 > e; e++) {
        var g = new GameResultItemVO(a.data[e]);
        c.user.uid == g.uid ? b.data.unshift(g) : b.data.push(g);
        g.uid == a.landrodUid ? (g.role = PlayerVO.DIZHU, b.landrod = g) : g.role = PlayerVO.NORMAL
    }
    Engine.getData().state = GameVO.STATE_NONE;
    Net.ob.notify(NT.GAME_STATUS_CHANGE, Engine.getData());
    for (e = 0; e < Engine.getData().players.length; e++)
        if (c = Engine.getData().players[e])
            c.state = 
            PlayerVO.STATE_NONE, Net.ob.notify(NT.PLAYER_STATUS_CHANGE, c);
    0 != b.result && (U.log("【Net】显示游戏游戏结算:" + a.result), Net.ob.notify(NT.GAME_RESULT, b))
};
Net._reconnectHandler = function(a) {
    U.log("【Net】重连标记  flag:" + a.flag);
    Engine.getData().isReconnect = !a.flag
};
Net._curActorHandler = function(a) {
    U.log("【Net】当前动作  uid:" + a.uid);
    var b = Engine.getData(), c = b.getPlayer(a.uid);
    if (c) {
        c.timeout = 0 < a.timeout ? a.timeout : -1;
        c.act = a.gameState;
        c.prepareNewTurn();
        switch (c.act) {
            case PlayerVO.ACT_CALL_LANDLORD:
            case PlayerVO.ACT_GRAB_LANDLORD:
                b.gamblingIdx = c.idx;
                break;
            case PlayerVO.ACT_THE_CARDS:
                b.currentTurn = c.idx
        }
        Net.ob.notify(NT.ACTOR, c)
    }
};
Net._gameConfig = function(a) {
    U.log("【Net】游戏配置");
    var b = Engine.getData();
    a.timers && 0 < a.timers.length && (b.countDown_3th = a.timers[0], b.countDown_callLand = a.timers[1], b.countDown_grabLand = a.timers[2], b.countDown_play = a.timers[3]);
    0 <= a.roomMultiple && (b.roomMultiple = a.roomMultiple);
    0 <= a.basicMultiple && (b.basicMultiple = a.basicMultiple);
    0 <= a.basicScore && (b.basicScore = a.basicScore);
    Net.ob.notify(NT.GAME_CONFIG_CHANGE, b)
};
Net._serverMsg = function(a) {
    Net.ob.notify(NT.SERVER_MSG, {msgType: a.msgType,countdown: a.countdown,message: a.message,action: a.action})
};
Net._changePlayersState = function(a) {
    for (var b = 0; 3 > b; b++) {
        var c = Engine.getData().players[b];
        c && (null != a && (c.state = a), Net.ob.notify(NT.PLAYER_STATUS_CHANGE, c))
    }
};
Net.toNetCards = function(a) {
    if (!a || 0 >= a.length)
        return [];
    for (var b = [], c = 0, e = a.length; c < e; c++)
        b.push(Net.toNetCard(a[c]));
    return b
};
Net.toNetCard = function(a) {
    return 17 === a.point ? 53 : 16 === a.point ? 52 : a.point + 13 * a.type.value - 3
};
Net.toLocalPokers = function(a) {
    if (!a || 0 >= a.length)
        return null;
    for (var b = [], c = 0, e = a.length; c < e; c++) {
        var g = Net.toLocalPoker(a[c]);
        g && b.push(g)
    }
    0 < b.length && b.sort(Poker.sortPoker);
    return b
};
Net.toLocalPoker = function(a) {
    if (53 === a)
        return new Poker(17, Poker.JOKERB);
    if (52 === a)
        return new Poker(16, Poker.JOKERS);
    if (0 <= a && 51 >= a) {
        var b = a % 13 + 3, a = Poker.getTypeByValue(Math.floor(a / 13));
        return new Poker(b, a)
    }
    U.log("[Net][Error] Wrong card number: [" + a + "], should be 0<=x<=53");
    return null
};
Net._openTip = function(a, b) {
    Net._stillShowTimerId = -1;
    Net._closeTip();
    var c = void 0 != b ? new TipWithCountdownVO(a, b, -1) : new TipWithCountdownVO(a, void 0, -1);
    A.tips = new TipWithCountdownV(c);
    A.tips.setText(a);
    A.popup.show(A.tips, {noRemove: !0,posConst: A.popup.POS_CENTER})
};
Net._closeTip = function() {
    A.tips && A.popup.isShow(A.tips) && A.popup.hideAll()
};
Net.LOGIN_STATE_NONE = 0;
Net.LOGIN_STATE_LOGINING = 1;
Net.LOGIN_STATE_LOGINED = 2;
Rule = {MSG_OTHER_ERROR: -1,MSG_WRONG_TYPE: -2,MSG_SMALLER: -3,compare: function(a, b) {
        var c = Rule.getType(a), e = Rule.getType(b);
        return e == GroupType.ShuangWang ? 0 : c == GroupType.ShuangWang || c == GroupType.ZhaDan && c != e ? 1 : c == e ? (Rule.isTripleLink(a) && (a = Rule.sortTripleLink(a)), b = Rule.sortTripleLink(b), a[0].point > b[0].point ? 1 : Rule.MSG_SMALLER) : Rule.MSG_WRONG_TYPE
    },getType: function(a) {
        if (!a || 0 >= a.length)
            return null;
        a.sort(Poker.sortPoker);
        var b = a.length;
        switch (b) {
            case 1:
                return GroupType.DanZhang;
            case 2:
                if (Rule.isSame(a, 
                2))
                    return GroupType.YiDui;
                if (17 == a[0].point && 16 == a[1].point)
                    return GroupType.ShuangWang;
                break;
            case 3:
                if (Rule.isSame(a, 3))
                    return GroupType.SanZhang;
                break;
            case 4:
                if (Rule.isSame(a, 4))
                    return GroupType.ZhaDan;
                if (Rule.isTripleLink(a))
                    return GroupType.SanDaiYi;
                break;
            case 5:
                if (Rule.isStraight(a))
                    return GroupType.WuZhangShunZi;
                if (Rule.isTripleLink(a))
                    return GroupType.SanDaiEr;
                break;
            case 6:
                if (Rule.isStraight(a))
                    return GroupType.LiuZhangShunZi;
                if (Rule.isPairLink(a))
                    return GroupType.SanLianDui;
                if (Rule.isSame(a, 
                4)) {
                    for (var c = -1, e = 0, g = 0; g < b - 1; g++)
                        a[g].point == a[g + 1].point ? (e++, 3 <= e && (c = g - 2)) : e = 0;
                    0 < c && (b = a.splice(c, 4), a.unshift.apply(a, b));
                    return GroupType.SiDaiEr
                }
                if (Rule.isTripleLink(a))
                    return GroupType.ErLianFeiJi;
                break;
            case 7:
                if (Rule.isStraight(a))
                    return GroupType.QiZhangShunZi;
                break;
            case 8:
                if (Rule.isStraight(a))
                    return GroupType.BaZhangShunZi;
                if (Rule.isPairLink(a))
                    return GroupType.SiLianDui;
                if (Rule.isSame(a, 4) && Engine.getData().expectType != CMD.CT_PLANE) {
                    b = !1;
                    a[0].point === a[3].point ? a[4].point === a[5].point && 
                    a[6].point === a[7].point && (c = a.splice(0, 4), b = !0) : a[2].point === a[5].point ? a[0].point === a[1].point && a[6].point === a[7].point && (c = a.splice(2, 6), b = !0) : a[4].point === a[7].point && (a[0].point === a[1].point && a[2].point === a[3].point) && (c = a.splice(4, 8), b = !0);
                    if (b)
                        return a.unshift.apply(a, c), GroupType.SiDaiSi;
                    if (Rule.isTripleLink(a))
                        return GroupType.ErLianFeiJiDaiChiBang
                } else if (Engine.getData().expectType != CMD.CT_QUAD_TWOPAIR && Rule.isTripleLink(a))
                    return GroupType.ErLianFeiJiDaiChiBang;
                break;
            case 9:
                if (Rule.isStraight(a))
                    return GroupType.JiuZhangShunZi;
                if (Rule.isTripleLink(a))
                    return GroupType.SanLianFeiJi;
                break;
            case 10:
                if (Rule.isStraight(a))
                    return GroupType.ShiZhangShunZi;
                if (Rule.isPairLink(a))
                    return GroupType.WuLianDui;
                if (Rule.isTripleLink(a))
                    return GroupType.ErLianFeiJiDaiErDui;
                break;
            case 11:
                if (Rule.isStraight(a))
                    return GroupType.ShiYiZhangShunZi;
                break;
            case 12:
                if (Rule.isStraight(a))
                    return GroupType.ShiErZhangShunZi;
                if (Rule.isPairLink(a))
                    return GroupType.LiuLianDui;
                a = Rule.isTripleLink(a);
                if (3 == a)
                    return GroupType.SanLianFeiJiDaiChiBang;
                if (4 == a)
                    return GroupType.SiLianFeiJi;
                break;
            case 14:
                if (Rule.isPairLink(a))
                    return GroupType.QiLianDui;
                break;
            case 15:
                if (Rule.isTripleLink(a))
                    return GroupType.WuLianFeiJi;
                if (Rule.isTripleLink(a))
                    return GroupType.SanLianFeiJiDaiSanDui;
                break;
            case 16:
                if (Rule.isPairLink(a))
                    return GroupType.BaLianDui;
                if (Rule.isTripleLink(a))
                    return GroupType.SiLianFeiJiDaiChiBang;
                break;
            case 18:
                if (Rule.isPairLink(a))
                    return GroupType.JiuLianDui;
                if (Rule.isTripleLink(a))
                    return GroupType.LiuLianFeiJi;
                break;
            case 20:
                if (Rule.isPairLink(a))
                    return GroupType.ShiLianDui;
                if (Rule.isTripleLink(a))
                    return GroupType.WuLianFeiJiDaiChiBang
        }
        return !1
    },isSame: function(a, b) {
        for (var c = 0, e = 0; e < a.length - 1; e++)
            if (a[e].point == a[e + 1].point ? c++ : c = 0, c >= b - 1)
                return !0;
        return !1
    },isStraight: function(a) {
        if (15 <= a[0].point)
            return !1;
        for (var b = 0; b < a.length - 1; b++)
            if (a[b].point != a[b + 1].point + 1)
                return !1;
        return !0
    },isPairLink: function(a) {
        if (15 <= a[0].point)
            return !1;
        for (var b = 0; b < a.length - 2; b += 2)
            if (a[b].point != a[b + 1].point || a[b].point != a[b + 2].point + 1 || a[b + 2].point != a[b + 3].point)
                return !1;
        return !0
    },isTripleLink: function(a) {
        for (var b = 
        0, c = a.length, e = [], g = [], h = 0, i = 2; i < c; i++) {
            var j = !1;
            if (!a[i])
                return !1;
            if ((10 === a.length || 15 === a.length) && a[i])
                if (a[i - 3] && a[i].point == a[i - 1].point && a[i].point == a[i - 2].point && a[i].point == a[i - 3].point || a[i + 1] && a[i].point == a[i - 1].point && a[i].point == a[i - 2].point && a[i].point == a[i + 1].point)
                    j = !0;
            !j && a[i] && a[i].point == a[i - 1].point && a[i].point == a[i - 2].point ? 0 == h && (h++, b++, e.push(a[i - 2], a[i - 1], a[i])) : h = 0
        }
        if (0 == b)
            return !1;
        e = Rule.sort(e);
        for (i = 0; i < c; i++)
            h = a[i], -1 == e.indexOf(h) && g.push(h);
        g = Rule.sort(g);
        h = e.concat(g);
        if (1 < b)
            for (i = 0; i < e.length - 3; i += 3)
                if (15 == e[i].point || e[i].point != e[i + 3].point + 1)
                    return !1;
        e = g.length;
        if (e == 2 * b) {
            for (i = e = 0; i < g.length - 1; i++)
                g[i].point == g[i + 1].point && (e++, i++);
            if (b != e)
                return !1
        } else if (!(0 == e || e == b))
            return !1;
        for (i = 0; i < c; i++)
            a[i] = h[i];
        return b
    },sort: function(a) {
        a.sort(function(a, c) {
            return !a || !c ? 0 : c.point == a.point ? c.type.value - a.type.value : c.point - a.point
        });
        return a
    },sortTripleLink: function(a) {
        var b, c = 0, e = a.length, g = !1, h = 0, i = null, j = [];
        for (b = 2; b < e; b++)
            if (a[b].point == a[b - 1].point && a[b].point == 
            a[b - 2].point) {
                if (0 == h)
                    h++, j.push(a[b]);
                else {
                    for (var i = a[b], k = b; 0 < k; k--)
                        g = a[k], a[k] = a[k - 1], a[k - 1] = g;
                    c++
                }
                g = !0
            } else
                h = 0, g || (c = b - 1);
        for (b = 0; b < j.length; b++)
            for (h = 0; h < e; h++)
                a[h].point == j[b].point && (a[h] == i ? i = null : (k = h - c, 0 > k || (g = a[k], a[k] = a[h], a[h] = g)));
        e = a.slice(a.length - c, a.length);
        e.sort(Poker.sortPoker);
        for (b = a.length - c; b < a.length; b++)
            a[b] = e[b - a.length + c];
        return a
    }};
ChatV = G.Container.getClass().extend({init: function() {
        this._curTab = -1;
        this.keyNamePre = "ChatV";
        this._super(arguments);
        this.bg = G.Image.create({slice: G.getSlice("聊天界面-底框")});
        this.addChild(this.bg);
        this.inputContainer = G.Container.create();
        this.inputChat = G.Input.create();
        this.inputChat.setMaxLength(60);
        this.inputChat.setFontSize(24);
        this.inputChat.setWidth(448);
        this.inputChat.setHeight(42);
        this.inputChat.setColor("#000000");
        this.inputContainer.addChild(this.inputChat);
        this.inputContainer.setX(95);
        this.inputContainer.setY(50);
        this.addChild(this.inputContainer);
        this.enterBtn = G.Button.create({imgUp: G.getSlice("聊天界面-发送按扭-默认"),imgDown: G.getSlice("聊天界面-发送按扭-点击"),callback: U.delegate(function() {
                var a = this.inputChat.getValue();
                if ((a = a.trim()) && "" != a)
                    Net.request(CMD.CHAT_REQUEST, {msg: a}), this.inputChat.setValue(""), this.selectedTextImage.setY(-1E3), this.quickChatContainer.setY(0), this.logContainer.setY(0), this.hide()
            }, this)});
        this.enterBtn.setX(575);
        this.enterBtn.setY(45);
        this.addChild(this.enterBtn);
        this.quickBtn = G.ToggleButton.create({imgUp: G.getSlice("聊天界面-常用语按扭-默认"),
            imgDown: G.getSlice("聊天界面-常用语按扭-默认"),checkedImgUp: G.getSlice("聊天界面-常用语按扭-点击"),checkedImgDown: G.getSlice("聊天界面-常用语按扭-点击"),callback: U.delegate(function() {
                this.updateSelectList(0)
            }, this)});
        this.quickBtn.setX(93);
        this.quickBtn.setY(120);
        this.addChild(this.quickBtn);
        this.logBtn = G.ToggleButton.create({imgUp: G.getSlice("聊天界面-聊天记录按扭-默认"),imgDown: G.getSlice("聊天界面-聊天记录按扭-默认"),checkedImgUp: G.getSlice("聊天界面-聊天记录按扭-点击"),checkedImgDown: G.getSlice("聊天界面-聊天记录按扭-点击"),callback: U.delegate(function() {
                this.updateSelectList(1)
            }, 
            this)});
        this.logBtn.setX(248);
        this.logBtn.setY(120);
        this.addChild(this.logBtn);
        this.dragPanel = G.DragPanel.create({parentScale: Engine.stageScale,width: 605,height: 208});
        this.dragPanel.setX(79);
        this.dragPanel.setY(188);
        this.addChild(this.dragPanel);
        this.quickChatContainer = G.Container.create();
        this.selectedTextImage = G.Image.create({slice: G.getSlice("聊天界面-文字选中")});
        this.selectedTextImage.setY(-1E3);
        this.quickChatContainer.addChild(this.selectedTextImage);
        for (var a = 0; a < Config.CHAT_TALKS.length; a++) {
            var b = 
            G.Text.create();
            b.setFontSize(30);
            b.setX(10);
            b.setY(15 + ChatV.TEXT_LINE_HEIGH * a);
            b.setWidth(605);
            b.setHeight(42);
            b.setText(Config.CHAT_TALKS[a]);
            b.data = Config.CHAT_TALKS[a];
            b.addEventListener(G.EVENT.CLICK, U.delegate(function(a) {
                a.src.data && (this.selectedTextImage.setY(a.src.y - 13), this.inputChat.setValue(a.src.data))
            }, this));
            this.quickChatContainer.addChild(b);
            b = G.Image.create({slice: G.getSlice("聊天界面-底框-分割线")});
            b.setY(ChatV.TEXT_LINE_HEIGH * (a + 1));
            this.quickChatContainer.addChild(b)
        }
        this.quickChatContainer.setWidth(605);
        this.quickChatContainer.setHeight(ChatV.TEXT_LINE_HEIGH * Config.CHAT_TALKS.length);
        this.logContainer = G.Container.create();
        this.txtLog = G.Text.create();
        this.txtLog.setX(10);
        this.txtLog.setY(-3);
        this.txtLog.setFontSize(30);
        this.txtLog.setLineSpacing(30);
        this.txtLog.setWidth(570);
        this.logContainer.addChild(this.txtLog);
        this.updateSelectList(0);
        this.setWidth(this.bg.width);
        this.setHeight(this.bg.height)
    },show: function() {
        U.Observer.addListener(NT.CHAT, this._chat, this);
        this.updateSelectList(0);
        A.popup.show(this, 
        {pos: [125, 35]})
    },hide: function() {
        U.Observer.removeListener(NT.CHAT, this._chat);
        this.parent && A.popup.hide(this)
    },updateSelectList: function(a) {
        0 === a ? (this.quickBtn.setChecked(!0), this.logBtn.setChecked(!1), this.dragPanel.setContent(this.quickChatContainer)) : (this.quickBtn.setChecked(!1), this.logBtn.setChecked(!0), this.dragPanel.setContent(this.logContainer), this._updateLog());
        this._curTab = a
    },_chat: function() {
        this._updateLog()
    },_updateLog: function() {
        for (var a = "", b = 0; b < Math.max(Engine.data.user.chatLogs.length, 
        4); b++)
            var c = Engine.data.user.chatLogs[b], a = a + (c ? c.uname + ":" + c.msg + "<br>" : "");
        this.txtLog.setText(a);
        this.txtLog.update();
        this.logContainer.setHeight(Math.max(this.txtLog.getHeight(), this.dragPanel.getHeight()));
        for (b = 0; b < this.logContainer.height / ChatV.TEXT_LINE_HEIGH; b++)
            this.logContainer.getChildAt(b + 1) || (a = G.Image.create({slice: G.getSlice("聊天界面-底框-分割线")}), a.setY(ChatV.TEXT_LINE_HEIGH * (b + 1)), this.logContainer.addChild(a))
    }});
ChatV.TEXT_LINE_HEIGH = 60;
ChatV;
TipV = G.Container.getClass().extend({init: function() {
        this.keyNamePre = "TipV";
        this._super(arguments);
        this.countdown = this.DEFAULT_COUNTDOWN = 20;
        this.text = "";
        var a = G.getSlice("提示界面-底框"), b = a.rect;
        this.bg = G.Image.create({slice: a});
        this.addChild(this.bg);
        this.cancelBtn = G.TextButton.create({imgUp: G.getSlice("取消-默认"),imgDown: G.getSlice("取消-点击"),imgUpBg: G.getSlice("红按扭小-默认"),imgDownBg: G.getSlice("红按扭小-点击"),callback: U.delegate(function(a, b) {
                this.onCancel && this.onCancel(a, b);
                A.popup.hide(this)
            }, this)});
        this.cancelBtn.setX(this.bg.width - 
        this.cancelBtn.width >> 1);
        this.cancelBtn.setY(260);
        this.addChild(this.cancelBtn);
        this.cancelBtn.setVisible(!1);
        this.textContainer = null;
        "string" != typeof this.text && this.text.length && 0 < this.text.length ? (this.textContainer = G.Text.create({text: this.text[0]}), this.text.splice(0, 1)) : this.textContainer = G.Text.create({text: this.text});
        this.textContainer.setTextAlign("center");
        this.textContainer.setVerticalAlign("middle");
        this.textContainer.setX(80);
        this.textContainer.setY(120);
        this.textContainer.setWidth(b[2] - 
        160);
        this.textContainer.setLineSpacing(10);
        this.textContainer.setColor("#fff");
        this.textContainer.setFontSize(25);
        this.setWidth(this.bg.width);
        this.setHeight(this.bg.height);
        this.setVisible(!0)
    },show: function() {
        A.popup.show(this, {noRemove: !0,posConst: A.popup.POS_CENTER});
        this.setVisible(!0)
    },hide: function() {
        this.setVisible(!1);
        A.popup.hide(this)
    },repaint: function() {
        this.removeAllChildren();
        this.bg && this.addChild(this.bg);
        this.cancelBtn && this.addChild(this.cancelBtn);
        this.okBtn && this.addChild(this.okBtn);
        this.textContainer && this.addChild(this.textContainer);
        this.textContainer.setHeight(this.cancelBtn.getY() - this.textContainer.getY() - 10)
    },setText: function(a) {
        this.textContainer.setText(a)
    }});
(function() {
    LoadingV = G.Container.getClass().extend({init: function(a) {
            this.keyNamePre = "LoadingV";
            this._super(arguments);
            this.setWidth(A.WIDTH);
            this.setHeight(A.HEIGHT);
            this.addChild(G.Image.create({slice: G.getSlice("选区-底图")}));
            var b = [G.Action.create({slice: G.getSlice("斗地主loading1"),rect: G.getSlice("斗地主loading1").rect}), G.Action.create({slice: G.getSlice("斗地主loading2"),rect: G.getSlice("斗地主loading2").rect}), G.Action.create({slice: G.getSlice("斗地主loading3"),rect: G.getSlice("斗地主loading3").rect}), G.Action.create({slice: G.getSlice("斗地主loading4"),
                    rect: G.getSlice("斗地主loading4").rect}), G.Action.create({slice: G.getSlice("斗地主loading5"),rect: G.getSlice("斗地主loading5").rect})], b = G.Animation.create({actions: b,interval: Config.ANI_INTERVAL});
            b.setMode(G.ANIMATION.MODE.LOOP);
            var c = G.getPos("斗地主loading", "斗地主loading1");
            b.setX(c[0]);
            b.setY(c[1]);
            this.loadingAnimation = b;
            this.addChild(this.loadingAnimation);
            b = G.Text.create({text: ""});
            c = G.getPos("斗地主loading", "加载文字");
            b.setWidth(c[2]);
            b.setLineSpacing(10);
            b.setColor("#fff");
            b.setFontSize(15);
            b.setX(c[0]);
            b.setY(c[1]);
            b.setWidth(c[2]);
            b.setEllipsis(!0);
            this.loadingInfo = b;
            this.addChild(this.loadingInfo);
            b = G.Text.create({text: ""});
            c = G.getPos("斗地主loading", "笑话文字");
            b.setWidth(c[2]);
            b.setLineSpacing(10);
            b.setColor("#fff");
            b.setFontSize(15);
            b.setX(c[0]);
            b.setY(c[1]);
            b.setWidth(c[2]);
            b.setEllipsis(!0);
            this.loadingJoke = b;
            this.addChild(this.loadingJoke);
            this.repaint();
            this.setVisible(!1)
        },stop: function() {
            this.setVisible(!1);
            this.loadingAnimation.stop()
        },start: function() {
            this.loadingAnimation.gotoAndPlay(0);
            this.setVisible(!0)
        },
        repaint: function() {
        },setText: function() {
        }})
})();
(function() {
    Tip1V = TipV.extend({init: function(a) {
            this.keyNamePre = "Tip1V";
            this._super(arguments);
            this.text = "";
            a && (this.onOk = a.onOk, this.text = a.text, this.counter = this.countdown = a.countdown, this.onCounting = a.onCounting);
            this.counter = -1;
            var b = G.getSlice("提示界面-底框");
            this.bg = G.Image.create({slice: b});
            this.addChild(this.bg);
            this.IMG_UP = "确定-默认";
            this.IMG_DOWN = "确定-点击";
            this.IMG_UP_BG = "红按扭小-默认";
            this.IMG_DOWN_BG = "红按扭小-点击";
            this.CD_IMG_UP = "确定倒数-默认";
            this.CD_IMG_DOWN = "确定倒数-点击";
            this.CD_IMG_UP_BG = "红按扭中-默认";
            this.CD_IMG_DOWN_BG = 
            "红按扭中-点击";
            0 < this.counter ? (this.btnImgUp = this.CD_IMG_UP, this.btnImgDown = this.CD_IMG_DOWN, this.btnImgUpBg = this.CD_IMG_UP_BG, this.btnImgDownBg = this.CD_IMG_DOWN_BG) : (this.btnImgUp = this.IMG_UP, this.btnImgDown = this.IMG_DOWN, this.btnImgUpBg = this.IMG_UP_BG, this.btnImgDownBg = this.IMG_DOWN_BG);
            this.okBtn = G.TextButton.create({imgUp: G.getSlice(this.btnImgUp),imgDown: G.getSlice(this.btnImgDown),imgUpBg: G.getSlice(this.btnImgUpBg),imgDownBg: G.getSlice(this.btnImgDownBg),callback: U.delegate(function(a, b) {
                    clearInterval(this.counterId);
                    if (typeof this.text != "string" && this.text.length && this.text.length > 0) {
                        this.setText(this.text[0]);
                        this.text.splice(0, 1);
                        this.counter > 0 && (!this.text.length || this.text.length === 1 ? this.switchToNormalOkBtn() : this.launchCountdown())
                    } else {
                        this.onOk && this.onOk(a, b);
                        A.popup.hide(this)
                    }
                }, this)});
            this.okBtn.setX(this.bg.width - this.okBtn.width >> 1);
            this.okBtn.setY(260);
            this.addChild(this.okBtn);
            this.counterId = -1;
            0 < this.counter && (this.counterContainer = G.Container.create(), this.counterContainer.setX(this.okBtn.x + 
            107), this.counterContainer.setY(this.okBtn.y + 17), this.addChild(this.counterContainer), this.launchCountdown());
            this.counterContainer && (this.counterContainer.setWidth(40), this.counterContainer.setHeight(40), this.countdownContainer.addEventListener(G.EVENT.CHOOSE, U.delegate(this.okBtn.callback, this.okBtn)));
            this.setWidth(this.bg.width);
            this.setHeight(this.bg.height);
            this.setText(this.text);
            this.setVisible(!0);
            this.repaint()
        },launchCountdown: function() {
            this.resetCountdownBtn();
            this.counterId = setInterval(U.delegate(this.counting, 
            this), 1E3);
            this.counting()
        },resetCountdownBtn: function() {
        },switchToNormalOkBtn: function() {
            this.counterContainer.removeAllChildren();
            this.okBtn.setImgUp(G.getSlice(this.btnImgUpBg), G.getSlice(this.IMG_UP));
            this.okBtn.setImgDown(G.getSlice(this.btnImgDownBg), G.getSlice(this.IMG_DOWN));
            this.okBtn.setX(this.bg.width - this.okBtn.width >> 1)
        },counting: function() {
            0 >= this.counter ? (clearInterval(this.counterId), this.counter = this.countdown, "string" != typeof this.text && this.text.length && 0 < this.text.length ? (this.setText(this.text[0]), 
            this.text.splice(0, 1), !this.text.length || 1 === this.text.length ? this.switchToNormalOkBtn() : this.launchCountdown()) : (this.onOk && this.onOk(null, this.okBtn), A.popup.hide(this))) : (this.onCounting && this.onCounting(this.counter), this.counter--, UI.setNumber(this.countdownContainer, this.countdown, UI.NUMBER_COOLDOWN))
        }})
})();
(function() {
    Tip2V = TipV.extend({init: function(a) {
            this.keyNamePre = "Tip2V";
            this._super(arguments);
            this.text = "";
            a && (this.onOk = a.onOk, this.onCancel = a.onCancel, this.text = a.text);
            var b = G.getSlice("提示界面-底框"), c = b.rect;
            this.bg = G.Image.create({slice: b});
            this.okBtn = G.TextButton.create({imgUp: G.getSlice("确定-默认"),imgDown: G.getSlice("确定-点击"),imgUpBg: G.getSlice("红按扭小-默认"),imgDownBg: G.getSlice("红按扭小-点击"),callback: U.delegate(function(a, b) {
                    this.onOk && this.onOk(a, b);
                    if (typeof this.text != "string" && this.text.length && this.text.length > 
                    0) {
                        this.setText(this.text[0]);
                        this.text.splice(0, 1)
                    } else
                        A.popup.hide(this)
                }, this)});
            this.okBtn.setX(130);
            this.okBtn.setY(260);
            this.cancelBtn = G.TextButton.create({imgUp: G.getSlice("取消-默认"),imgDown: G.getSlice("取消-点击"),imgUpBg: G.getSlice("红按扭小-默认"),imgDownBg: G.getSlice("红按扭小-点击"),callback: U.delegate(function(a, b) {
                    this.onCancel && this.onCancel(a, b);
                    A.popup.hide(this)
                }, this)});
            this.cancelBtn.setX(350);
            this.cancelBtn.setY(this.okBtn.y);
            this.textContainer = null;
            "string" != typeof this.text && this.text.length && 
            0 < this.text.length ? (this.textContainer = G.Text.create({text: this.text[0]}), this.text.splice(0, 1)) : this.textContainer = G.Text.create({text: this.text});
            this.textContainer.setTextAlign("center");
            this.textContainer.setVerticalAlign("middle");
            this.textContainer.setWidth(c[2] - 160);
            this.textContainer.setLineSpacing(10);
            this.textContainer.setColor("#fff");
            this.textContainer.setFontSize(25);
            this.textContainer.setX(80);
            this.textContainer.setY(120);
            this.setWidth(this.bg.width);
            this.setHeight(this.bg.height);
            this.setVisible(!0);
            this.repaint()
        }})
})();
(function() {
    TipWithCountdownV = TipV.extend({init: function(a) {
            this.keyNamePre = "TipWithCountdownV";
            this._super(arguments);
            this.countdown = this.DEFAULT_COUNTDOWN = 10;
            this.cancelBtn.setVisible(!1);
            a && (this.onCancel = a.onCancel, this.text = a.text, this.countdown = 0 <= a.countdown ? a.countdown : this.DEFAULT_COUNTDOWN, this.onCounting = a.onCounting);
            this.countdownId = setInterval(U.delegate(this.counting, this), 1E3);
            this.counting();
            this.setText(this.text);
            this.repaint();
            this.setVisible(!0)
        },displayCancelBtn: function() {
            this.cancelBtn.setVisible(!0)
        },counting: function() {
            0 >= 
            this.countdown ? (clearInterval(this.countdownId), this.countdown = this.DEFAULT_COUNTDOWN, this.onCounting && this.onCounting(this.countdown), this.displayCancelBtn()) : this.countdown--
        }})
})();
FadeTipsManager = {textArray: [],popupLayer: null,textContainer: null,tipContainer: null,timeout: 2E3,timeoutId: -1,showing: !1,init: function(a) {
        FadeTipsManager.popupLayer = a;
        FadeTipsManager.tipContainer = G.Container.create();
        a = G.Image.create({slice: G.getSlice("断线提示")});
        FadeTipsManager.tipContainer.addChild(a);
        FadeTipsManager.tipContainer.setWidth(a.width);
        FadeTipsManager.tipContainer.setHeight(a.height);
        FadeTipsManager.textContainer = G.Text.create({});
        FadeTipsManager.textContainer.setLineSpacing(10);
        FadeTipsManager.textContainer.setColor("#000");
        FadeTipsManager.textContainer.setFontSize(24);
        FadeTipsManager.textContainer.setTextAlign("center");
        FadeTipsManager.textContainer.setWidth(a.width - 5);
        FadeTipsManager.textContainer.setHeight(a.height - 3);
        FadeTipsManager.textContainer.setLineHeight(FadeTipsManager.textContainer.getHeight());
        FadeTipsManager.textContainer.setX(FadeTipsManager.tipContainer.getWidth() - FadeTipsManager.textContainer.getWidth() >> 1);
        FadeTipsManager.textContainer.setY(FadeTipsManager.tipContainer.getHeight() - FadeTipsManager.textContainer.getHeight() >> 
        1);
        FadeTipsManager.tipContainer.addChild(FadeTipsManager.textContainer);
        FadeTipsManager.tipContainer.setX(A.WIDTH - FadeTipsManager.tipContainer.getWidth() >> 1);
        FadeTipsManager.tipContainer.setY(A.HEIGHT - FadeTipsManager.tipContainer.getHeight() >> 1)
    },show: function(a) {
        var b = "";
        a && (b = a.text ? a.text : "");
        "string" == typeof b ? FadeTipsManager.textArray.push(b) : b.length && 0 < b.length && (FadeTipsManager.textArray = FadeTipsManager.textArray.concat(b));
        FadeTipsManager.showing || FadeTipsManager.showTip()
    },showTip: function() {
        var a = 
        FadeTipsManager.textArray.splice(0, 1)[0];
        a && FadeTipsManager.textContainer.setText(a);
        FadeTipsManager.showing = !0;
        FadeTipsManager.popupLayer.addChild(FadeTipsManager.tipContainer);
        FadeTipsManager.tipContainer.setOpacity(1);
        FadeTipsManager.timeoutId = setTimeout(U.delegate(FadeTipsManager.fadeTip, FadeTipsManager), FadeTipsManager.timeout)
    },fadeTip: function() {
        FadeTipsManager.tipContainer.to({opacity: 0,time: 0.3,onEnd: function() {
                0 < FadeTipsManager.textArray.length ? FadeTipsManager.showTip() : FadeTipsManager.hide()
            }})
    },
    hide: function() {
        clearTimeout(FadeTipsManager.timeoutId);
        FadeTipsManager.showing = !1;
        FadeTipsManager.textArray = [];
        FadeTipsManager.popupLayer.removeChild(FadeTipsManager.tipContainer)
    }};
SettingV = G.Container.getClass().extend({init: function() {
        U.log("--!创建设置面板--");
        this.keyNamePre = "SettingV";
        this._super(arguments);
        this.bg = G.Image.create({slice: G.getSlice("系统界面-设置-底框")});
        this.addChild(this.bg);
        G.getPos("设置音乐", "系统界面-设置-音乐-默认");
        this.musicBtn = G.ToggleButton.create({imgUp: G.getSlice("系统界面-设置-开启音乐-默认"),imgDown: G.getSlice("系统界面-设置-开启音乐-点击"),checkedImgUp: G.getSlice("系统界面-设置-音乐-默认"),checkedImgDown: G.getSlice("系统界面-设置-音乐-点击"),callback: U.delegate(function(a, b) {
                G.SoundManager.setMusicOn(b.isChecked())
            }, 
            this)});
        this.musicBtn.setX(100);
        this.musicBtn.setY(76);
        this.addChild(this.musicBtn);
        this.setWidth(this.bg.width);
        this.setHeight(this.bg.height);
        this.repaint();
        U.log("--#创建设置面板--")
    },repaint: function() {
        U.log("--!重绘设置面板--");
        G.SoundManager.isMusicOn() ? this.musicBtn.setChecked(!0) : this.musicBtn.setChecked(!1);
        U.log("--#重绘设置面板--")
    }});
SettingV._instance;
SettingV.getInstance = function() {
    SettingV._instance || (SettingV._instance = new SettingV);
    return SettingV._instance
};
QuitV = G.Container.getClass().extend({init: function() {
        this.keyNamePre = "QuitV";
        this._super(arguments);
        Engine.ob.addListener(NT.GAME_STATUS_CHANGE, this.repaint, this);
        this.bg = G.Image.create({slice: G.getSlice("系统界面-换场和返回大厅-底框")});
        this.addChild(this.bg);
        this.changeRoomBtn = G.Button.create({imgUp: G.getSlice("系统界面-换场-默认"),imgDown: G.getSlice("系统界面-换场-点击"),imgDisable: G.getSlice("系统界面-换场-禁点"),callback: U.delegate(function() {
                Engine.ob.notify(NT.HIDE_GAME_LAYER);
                Engine.ob.notify(NT.BACK_TO_ROOM)
            }, this)});
        this.changeRoomBtn.setX(110);
        this.changeRoomBtn.setY(80);
        this.addChild(this.changeRoomBtn);
        this.quitBtn = G.Button.create({imgUp: G.getSlice("系统界面-返回大厅-默认"),imgDown: G.getSlice("系统界面-返回大厅-点击"),callback: U.delegate(function() {
                if (Engine.getData().state === GameVO.STATE_NONE)
                    A.exit();
                else {
                    U.log("【QuitV】弹出确认对话框");
                    var a = new Tip2VO(Msg.QUIT_CONFIRM, function() {
                        Net.isConnected() && Net.request(CMD.LEAVE_REQUEST, {uid: Engine.getData().user.uid,action: CMD.BACK_TO_HALL}, A.exit, null, !0)
                    }), a = new Tip2V(a);
                    A.popup.show(a)
                }
                A.popup.hide(this)
            }, this)});
        this.quitBtn.setX(280);
        this.quitBtn.setY(80);
        this.addChild(this.quitBtn);
        this.setWidth(this.bg.width);
        this.setHeight(this.bg.height);
        this.repaint()
    },repaint: function() {
        Engine.getData().state === GameVO.STATE_CALL_LANDLORD || Engine.getData().state === GameVO.STATE_GRAB_LANDLORD || Engine.getData().state === GameVO.STATE_THE_CARDS ? this.changeRoomBtn.disable() : this.changeRoomBtn.enable()
    }});
QuitV._instance;
QuitV.getInstance = function() {
    QuitV._instance || (QuitV._instance = new QuitV);
    return QuitV._instance
};
var PlayerInfoV = G.Container.getClass().extend({init: function(a) {
        this.keyNamePre = "PlayerInfoV";
        this._super(arguments);
        var b;
        this.bg = G.Image.create({slice: G.getSlice("个人信息和总倍数界面-底框")});
        this.addChild(this.bg);
        for (b = 0; 3 > b; b++) {
            var c = G.Image.create({slice: G.getSlice("界面切图a-05")});
            c.setX(50);
            c.setY(48 * b + 70);
            this.addChild(c)
        }
        this.arraw = G.Image.create({slice: G.getSlice("个人信息和总倍数界面-箭头")});
        this.addChild(this.arraw);
        b = G.Text.create({text: ""});
        b.setColor("#fff");
        b.setFontSize(24);
        b.setX(70);
        b.setY(30);
        b.setWidth(250);
        b.setEllipsis(!0);
        this.addChild(b);
        this.nameTxt = b;
        b = G.Text.create({text: ""});
        b.setColor("#fff");
        b.setFontSize(24);
        b.setX(70);
        b.setY(78);
        b.setWidth(250);
        this.addChild(b);
        this.money1Txt = b;
        b = G.Text.create({text: ""});
        b.setColor("#fff");
        b.setFontSize(24);
        b.setX(70);
        b.setY(126);
        b.setWidth(250);
        this.addChild(b);
        this.winRateTxt = b;
        b = G.Text.create({text: ""});
        b.setColor("#fff");
        b.setFontSize(24);
        b.setX(70);
        b.setY(174);
        b.setWidth(250);
        this.addChild(b);
        this.fleeRateTxt = b;
        this.setData(a);
        this.addEventListener(G.EVENT.CLICK, 
        U.delegate(function(a) {
            U.log("【PlayerInfoV】关闭玩家信息提示窗口");
            this.hide();
            a.stopPropagation()
        }, this))
    },setData: function(a) {
        this.data = a;
        this.repaint()
    },repaint: function() {
        if (this.data) {
            var a = this.data, b = a.winNum + a.failNum;
            this.nameTxt.setText("昵称：" + a.name);
            this.money1Txt.setText("欢乐豆：" + a.money1);
            this.winRateTxt.setText("胜率：" + (0 == b ? 0 : Math.round(100 * a.winNum / b)) + "%");
            this.fleeRateTxt.setText("逃跑率：" + (0 == b ? 0 : Math.round(100 * a.fleeNum / b)) + "%");
            1 == this.data.idx ? (this.arraw.setScale(-1, 1), this.arraw.setX(Config.PLAYER_INFO_ARRAW_POSITIONS[2 * 
            this.data.idx]), this.arraw.setY(Config.PLAYER_INFO_ARRAW_POSITIONS[2 * this.data.idx + 1]), this.arraw.setX(this.arraw.width + this.arraw.x)) : (this.arraw.setScale(1, 1), this.arraw.setX(Config.PLAYER_INFO_ARRAW_POSITIONS[2 * this.data.idx]), this.arraw.setY(Config.PLAYER_INFO_ARRAW_POSITIONS[2 * this.data.idx + 1]))
        }
    },show: function() {
        A.popup.show(this, {bgColor: "rgba(0,0,0,0.0)",pos: [this.x, this.y],noRemove: !1,onClose: U.delegate(this.hide, this)})
    },hide: function() {
        U.log("【PlayerInfoV】关闭玩家信息提示");
        this.data = null;
        A.popup.hide(this)
    }});
PlayerInfoV._instance;
PlayerInfoV.getInstance = function() {
    PlayerInfoV._instance || (PlayerInfoV._instance = new PlayerInfoV);
    return PlayerInfoV._instance
};
PlayerV = G.Container.getClass().extend({init: function(a) {
        U.log("【PlayerV】对象初始化");
        this.keyNamePre = "PlayerV";
        this.bubble = this.countV = this.frame = this.avatar = null;
        this.data = a;
        this._super(arguments);
        this.isFirstInTable = !0;
        var b = G.getSlice("头像框");
        this.frame || (this.frame = G.Image.create({slice: b}));
        this.playerName || (this.playerName = G.Text.create(), this.playerName.setWidth(110), this.playerName.setLineSpacing(10), this.playerName.setColor("#fff"), this.playerName.setFontSize(15), this.playerName.setTextAlign("center"), 
        this.playerName.setX(0), this.playerName.setY(110), this.playerName.setWidth(110), this.playerName.setEllipsis(!0), this.addChild(this.playerName));
        this.countDown = G.Image.create({slice: G.getSlice("图标-倒计时")});
        this.countDownNum = G.Container.create();
        this.countDownNum.setY(42);
        this.countDown.addChild(this.countDownNum);
        this.countDownIntervalId = -1;
        this.countingNum = 0;
        this.setScale(Engine.scale);
        Config.ANI_GAOJING_ON && (b = [G.Action.create({slice: G.getSlice("报警动画1"),rect: G.getSlice("报警动画1").rect}), G.Action.create({slice: G.getSlice("报警动画2"),
                rect: G.getSlice("报警动画2").rect}), G.Action.create({slice: G.getSlice("报警动画3"),rect: G.getSlice("报警动画3").rect})], this.alarmLeft = G.Animation.create({actions: b,interval: Config.ANI_INTERVAL}), this.alarmLeft.stop());
        this.playerInfoV = PlayerInfoV.getInstance();
        this.offline = G.Image.create({slice: G.getSlice("离线图标")});
        this.addChild(this.offline);
        this.offline.setVisible(!1);
        b = G.Container.create();
        b.setWidth(160);
        b.setHeight(70);
        b.setVisible(!1);
        this.visiblePokerCon = b;
        this.visiblePokerCon.addEventListener(G.EVENT.CHOOSE, 
        U.delegate(function() {
            this.data && (this.data.pokers && this.data.pokers.length > 0) && this.showBigVisiblePokers()
        }, this));
        this.otherMandate = G.Bitmap.create({slice: G.getSlice("托管图标-" + (2 == this.data.idx ? "左边" : "右边"))});
        this.otherMandate.setX(Config.PLAYER_MANDATE_POSITION[2 * this.data.idx]);
        this.otherMandate.setY(Config.PLAYER_MANDATE_POSITION[2 * this.data.idx + 1]);
        this.addChild(this.otherMandate);
        b = G.Container.create();
        b.setBorder("#0B386F", 2);
        b.setBorderRadius(5);
        b.setBoxShadow(2, 4, 4, "#000");
        b.setBg("#00BDF4");
        b.setWidth(318);
        b.setHeight(172);
        b.setVisible(!1);
        this.bigVisiblePokerCon = b;
        this.bigVisiblePokerCon.addEventListener(G.EVENT.CHOOSE, U.delegate(function() {
            this.hideBigVisiblePokers()
        }, this));
        b = G.Container.create();
        b.setWidth(292);
        b.setHeight(146);
        b.setPos([this.bigVisiblePokerCon.getWidth() - b.getWidth() >> 1, this.bigVisiblePokerCon.getHeight() - b.getHeight() >> 1]);
        b.setBg("#0A4F9C");
        this.bigVisiblePokerCon.addChild(b);
        this.bigVisiblePoker = b
    },getVisiblePokerContainer: function() {
        return this.visiblePokerCon
    },
    playerInVisablePoker: function() {
        this.data !== Engine.getData.user && (this.bigVisiblePokerCon.setVisible(!0), this.visiblePokerCon.setVisible(!0))
    },playerNotVisablePoker: function() {
        this.data !== Engine.getData.user && (this.visiblePokerCon.setVisible(!1), this.bigVisiblePokerCon.setVisible(!1))
    },joinInTableAtFirst: function() {
        this.isFirstInTable = !0
    },showPlayerInfo: function() {
        this.data && (this.isFirstInTable && this.data == Engine.getData().user ? (this.playerInfoV.setX(Config.PLAYER_INIT_INFO_POSITION[0]), this.playerInfoV.setY(Config.PLAYER_INIT_INFO_POSITION[1])) : 
        (this.playerInfoV.setX(Config.PLAYER_INFO_POSITIONS[2 * this.data.idx]), this.playerInfoV.setY(Config.PLAYER_INFO_POSITIONS[2 * this.data.idx + 1])), this.playerInfoV.setData(this.data), this.playerInfoV.show())
    },hidePlayerInfo: function() {
        this.playerInfoV && this.playerInfoV.hide()
    },showCountDown: function(a) {
        this.countDownIntervalId && clearInterval(this.countDownIntervalId);
        this.countingNum = a;
        this.addChild(this.countDown);
        this.countDownIntervalId = setInterval(U.delegate(this._counting, this), 1E3);
        this._counting();
        this.data == Engine.getData().user ? (Engine.getData().state === GameVO.STATE_CALL_LANDLORD || Engine.getData().state === GameVO.STATE_GRAB_LANDLORD ? (this.countDown.setX(Config.PLAYER_COOLDOWN_OPENING_POSITIONS[0]), this.countDown.setY(Config.PLAYER_COOLDOWN_OPENING_POSITIONS[1])) : (this.countDown.setX(Config.PLAYER_COOLDOWN_POSITIONS[2 * this.data.idx]), this.countDown.setY(Config.PLAYER_COOLDOWN_POSITIONS[2 * this.data.idx + 1])), this.countDown.setScale(1)) : (this.countDown.setX(Config.PLAYER_COOLDOWN_POSITIONS[2 * 
        this.data.idx]), this.countDown.setY(Config.PLAYER_COOLDOWN_POSITIONS[2 * this.data.idx + 1]), this.countDown.setScale(0.82))
    },_counting: function() {
        0 >= this.countingNum ? (this.removeCountDown(), this.data.act === PlayerVO.ACT_THE_CARDS ? Engine.ob.notify(NT.WHEN_OUT_OF_TIME_TO_PLAY) : Engine.ob.notify(NT.WHEN_OUT_OF_TIME_TO_CALL_LAND)) : (5 === this.countingNum && this.data.act === PlayerVO.ACT_THE_CARDS && Engine.getData().isUser(this.data.idx) && Engine.ob.notify(NT.WHEN_15_SEC_PASS_TO_PLAY), this.countingNum--, 10 > this.countingNum ? 
        this.countDownNum.setX(40) : this.countDownNum.setX(35), UI.setNumber(this.countDownNum, this.countingNum, UI.NUMBER_COOLDOWN))
    },removeCountDown: function() {
        clearInterval(this.countDownIntervalId);
        this.removeChild(this.countDown)
    },dealVisiblePokers: function() {
        this.hideBigVisiblePokers();
        if (!Engine.getData().isUser(this.data.idx)) {
            this.removeVisiblePokers();
            this.hidePokerCount();
            var a = this.data.pokers;
            if (a && 0 < a.length)
                for (var b = 1 === this.data.idx ? PlayerV.VISIBLE_POKER_R_X : PlayerV.VISIBLE_POKER_L_X, c = PlayerV.VISIBLE_POKER_Y, 
                e = 0, g, h = a.length; e < h; e++)
                    g = a[e], e === PlayerV.MAX_VISIBLE_POKERS && (b = 1 === this.data.idx ? PlayerV.VISIBLE_POKER_R_X : PlayerV.VISIBLE_POKER_L_X, c += 20), g.setX(b), g.setY(c), g.setScale(PlayerV.VISIBLE_POKER_SCALE), this.visiblePokerCon.addChild(g), b += PlayerV.VISIBLE_POKER_GAP
        }
    },showBigVisiblePokers: function() {
        if (0 !== this.data.idx) {
            switch (this.data.idx) {
                case 1:
                    this.bigVisiblePokerCon.setPos([556, 96]);
                    break;
                case 2:
                    this.bigVisiblePokerCon.setPos([82, 96])
            }
            this.bigVisiblePokerCon.setVisible(!0);
            var a = this.data.pokers;
            if (a && 0 < a.length)
                for (var b = 0, c = 2, e = 0, g, h = a.length; e < h; e++)
                    g = a[e], e === PlayerV.MAX_VISIBLE_POKERS && (b = 0, c += 49), g.setPos([b, c]), g.setScale(PlayerV.BIG_VISIBLE_POKER_SCALE), this.visiblePokerCon.removeChild(g), this.bigVisiblePoker.addChild(g), b += PlayerV.BIG_VISIBLE_POKER_GAP;
            this.parent && this.parent.addChild(this.bigVisiblePokerCon)
        }
    },hideBigVisiblePokers: function() {
        this.bigVisiblePokerCon.setVisible(!1);
        this.bigVisiblePoker.removeAllChildren();
        var a = this.data.pokers;
        if (a && 0 < a.length)
            for (var b = 1 === this.data.idx ? 
            PlayerV.VISIBLE_POKER_R_X : PlayerV.VISIBLE_POKER_L_X, c = PlayerV.VISIBLE_POKER_Y, e = 0, g, h = a.length; e < h; e++)
                g = a[e], e === PlayerV.MAX_VISIBLE_POKERS && (b = 1 === this.data.idx ? PlayerV.VISIBLE_POKER_R_X : PlayerV.VISIBLE_POKER_L_X, c += 20), g.setX(b), g.setY(c), g.setScale(PlayerV.VISIBLE_POKER_SCALE), this.visiblePokerCon.addChild(g), b += PlayerV.VISIBLE_POKER_GAP;
        this.parent && this.parent.removeChild(this.bigVisiblePokerCon)
    },closeBigVisiblePokers: function() {
        this.bigVisiblePokerCon.setVisible(!1);
        this.bigVisiblePoker.removeAllChildren()
    },
    updateVisiblePokers: function() {
        if (!Engine.getData().isUser(this.data.idx)) {
            var a = this.data.pokers, b = 1 === this.data.idx ? PlayerV.VISIBLE_POKER_R_X : PlayerV.VISIBLE_POKER_L_X, c = PlayerV.VISIBLE_POKER_Y, e = 20, g = PlayerV.VISIBLE_POKER_GAP;
            this.bigVisiblePokerCon.isVisible() && (c = b = 0, e = 49, g = PlayerV.BIG_VISIBLE_POKER_GAP);
            if (a && 0 < a.length)
                for (var h = b, i = 0, j, k = a.length; i < k; i++)
                    j = a[i], i === PlayerV.MAX_VISIBLE_POKERS && (h = b, c += e), Config.ANI_ARRANGE_POKER_ON ? j.to({x: h,y: c,time: 0.1}) : (j.setX(h), j.setY(c)), h += g;
            else
                this.removeVisiblePokers()
        }
    },
    removeVisiblePokers: function() {
        (!this.data || this.data && !Engine.getData().isUser(this.data.idx)) && this.visiblePokerCon.removeAllChildren()
    },setData: function(a) {
        this.data = a;
        this.repaint()
    },showAvatar: function() {
        this.avatar || (this.avatar = G.Image.create(), this.avatar.setX(15), this.avatar.setY(15), this.avatar.setScale(0.5));
        !this.avatar.parent && this.frame.addChild(this.avatar);
        this.data && this.data.icon ? this.data.icon && this.avatarId != this.data.icon && (this.avatarId = this.data.icon, this.avatar.setImage(A.getAvatar(this.data.icon)), 
        this.avatar.addEventListener(G.EVENT.CLICK, U.delegate(function(a) {
            this.showPlayerInfo();
            a.stopPropagation()
        }, this))) : (this.avatarId = null, this.avatar.setImage(), this.avatar.removeAllEventListeners())
    },hideAvatar: function() {
        this.avatar && this.avatar.parent && this.frame.removeChild(this.avatar)
    },showRoleAvatar: function() {
        this.frame.parent && this.removeChild(this.frame);
        this.playerName.parent && this.removeChild(this.playerName);
        this.createRoleAnimation()
    },hideRoleAvatar: function() {
        this.destoryRoleAnimation();
        !this.frame.parent && this.addChild(this.frame);
        !this.playerName.parent && this.addChild(this.playerName)
    },createRoleAnimation: function() {
        if (this.data && !(this.roleAnimation && b == this.roleSliceName)) {
            var a = 1 == this.data.idx ? 1 : -1, b = this.data.role == PlayerVO.DIZHU ? "地主" : "农民", c = this.data.sex == PlayerVO.MALE ? "男" : "女";
            this.destoryRoleAnimation();
            this.roleSliceName = b;
            var e = c + b, g = G.getSlice(e + "-头-默认"), h = G.getSlice(e + "-头-奸笑"), i = G.getSlice(e + "-头-愤怒"), b = G.getSlice("愤怒"), c = 0, c = "男地主" == e ? -40 : -25, j = g.rect[2], k = g.rect[2] / 
            2, l = 9 * (g.rect[3] / 10), m = [-k, l], e = G.Image.create({slice: G.getSlice(e + "-身体")});
            e.setY(60);
            e.setScale(a, 1);
            e.setX(1 == a ? -3 : j + 3);
            var n = [], o = G.Action.create({slice: h,rect: h.rect,label: "lab" + PlayerV.ROLE_ANIMATION_SMILE});
            o.setOrigin(k, l);
            o.setPos([m[0], m[1] + 3]);
            n.push(o);
            o = G.Action.create({slice: h,rect: h.rect});
            o.setOrigin(k, l);
            o.setPos(m);
            n.push(o);
            o = G.Action.create({slice: h,rect: h.rect});
            o.setOrigin(k, l);
            o.setPos([m[0], m[1] + 3]);
            n.push(o);
            h = G.Action.create({slice: h,rect: h.rect,gotoLabel: "end"});
            h.setOrigin(k, 
            l);
            h.setPos(m);
            n.push(h);
            h = G.Action.create({slice: i,rect: i.rect,label: "lab" + PlayerV.ROLE_ANIMATION_ANGER});
            h.setOrigin(k, l);
            h.setPos(m);
            h.setRotation(6);
            n.push(h);
            h = G.Action.create({slice: i,rect: i.rect});
            h.setOrigin(k, l);
            h.setPos(m);
            h.setRotation(0);
            n.push(h);
            h = G.Action.create({slice: i,rect: i.rect});
            h.setOrigin(k, l);
            h.setPos(m);
            h.setRotation(6);
            n.push(h);
            i = G.Action.create({slice: i,rect: i.rect,gotoLabel: "end"});
            i.setOrigin(k, l);
            i.setPos(m);
            i.setRotation(0);
            n.push(i);
            g = G.Action.create({slice: g,rect: g.rect,
                label: "end"});
            g.setOrigin(k, l);
            g.setPos(m);
            n.push(g);
            this.roleAnimation = G.Animation.create({actions: n,interval: Config.ANI_INTERVAL});
            this.roleAnimation.setMode(G.ANIMATION.MODE.END_STOP);
            this.roleAnimation.setScale(a, 1);
            this.roleAnimation.setX(j);
            this.roleAnimation.setY(c);
            this.roleAnimation.gotoAndStop("end");
            this.roleAnimationMC = G.Container.create();
            this.roleAnimationMC.addChild(this.roleAnimation);
            this.roleAnimationMC.addChild(e);
            this.addChild(this.roleAnimationMC);
            this.roleAnimationMC.addEventListener(G.EVENT.CLICK, 
            U.delegate(function(a) {
                this.showPlayerInfo();
                a.stopPropagation()
            }, this));
            this.removeChild(this.offline);
            this.roleAnimationMC.addChild(this.offline);
            c = [];
            j = G.Action.create({slice: b,rect: b.rect,label: "lab" + PlayerV.ROLE_ANIMATION_ANGER});
            j.setScale(0.7, 0.7);
            c.push(j);
            j = G.Action.create({slice: b,rect: b.rect});
            j.setScale(1, 1);
            c.push(j);
            j = G.Action.create({slice: b,rect: b.rect});
            j.setScale(0.7, 0.7);
            c.push(j);
            j = G.Action.create({slice: b,rect: b.rect,gotoLabel: "end"});
            j.setScale(1, 1);
            c.push(j);
            b = G.Action.create({slice: b,
                rect: b.rect,label: "end"});
            b.setVisible(!1);
            c.push(b);
            this.angerTag = G.Animation.create({actions: c,interval: Config.ANI_INTERVAL});
            this.angerTag.setMode(G.ANIMATION.MODE.END_STOP);
            this.angerTag.setX(1 == a ? 60 : 20);
            this.angerTag.setY(0);
            this.angerTag.gotoAndStop("end");
            this.roleAnimationMC.addChild(this.angerTag)
        }
    },destoryRoleAnimation: function() {
        this.roleAnimation && (this.roleAnimation.stop(), this.roleAnimation.destroy(), this.roleAnimation.parent && this.roleAnimation.parent.removeChild(this.roleAnimation), 
        this.roleAnimation = null, this.roleAnimationMC.destroy(), this.roleAnimationMC.parent && this.roleAnimationMC.parent.removeChild(this.roleAnimationMC), this.roleAnimationMC = null, this.addChild(this.offline))
    },playRoleAnimation: function(a) {
        if (Config.ANI_ROLE_ON)
            switch (this.roleAnimation || this.createRoleAnimation(), a) {
                case PlayerV.ROLE_ANIMATION_SMILE:
                    this.roleAnimation.gotoAndPlay("lab" + PlayerV.ROLE_ANIMATION_SMILE);
                    break;
                case PlayerV.ROLE_ANIMATION_ANGER:
                    this.roleAnimation.gotoAndPlay("lab" + PlayerV.ROLE_ANIMATION_ANGER), 
                    this.angerTag.gotoAndPlay("lab" + PlayerV.ROLE_ANIMATION_ANGER)
            }
    },showReady: function() {
        if (this.data) {
            this.ready || (this.ready = G.Image.create());
            var a = "状态图标-准备";
            (this.data.hasFlag(PlayerVO.FLAG_SHOW) || this.data.hasFlag(PlayerVO.FLAG_START_SHOW)) && (a = "状态图标-明牌准备");
            this.ready.setImage(G.getSlice(a));
            this.ready.setX(Config.PLAYER_READY_ICON_POSITIONS[2 * this.data.idx]);
            this.ready.setY(Config.PLAYER_READY_ICON_POSITIONS[2 * this.data.idx + 1]);
            !this.ready.parent && this.addChild(this.ready)
        }
    },hideReady: function() {
        this.ready && 
        this.ready.parent && this.removeChild(this.ready)
    },addGlow: function() {
    },hasFlag: function() {
        if (this.data.hasFlag(PlayerVO.FLAG_OFFLINE)) {
            switch (this.data.idx) {
                case 1:
                    this.offline.setX(10);
                    this.offline.setY(107);
                    break;
                case 2:
                    this.offline.setX(40), this.offline.setY(107)
            }
            this.offline.setVisible(!0)
        } else
            this.offline.setVisible(!1)
    },repaint: function() {
        U.log("--重绘用户信息视图--");
        this.playerNotVisablePoker();
        if (this.data)
            switch (this.hasFlag(), this.playerName.setText(this.data.name), this.data.state) {
                case PlayerVO.STATE_NONE:
                    this.showAvatar();
                    this.hideRoleAvatar();
                    this.hideMandate();
                    this.hideReady();
                    this.hidePokerCount();
                    this.closeBigVisiblePokers();
                    this.data == Engine.getData().user && (U.log("【PlayerV】重绘用户信息视图，用户为第一视图用户"), this.isFirstInTable && (U.log("【PlayerV】重绘用户信息视图，用户为第一视图用户且首次进入游戏"), this.frame.setX(Config.PLAYER_INIT_AVATAR_POSITION[0]), this.frame.setY(Config.PLAYER_INIT_AVATAR_POSITION[1]), this.playerName.setX(Config.PLAYER_INIT_AVATAR_POSITION[0]), this.playerName.setY(Config.PLAYER_INIT_AVATAR_POSITION[1] + 110), this.enterBtn && this.enterBtn.setY(-60)), 
                    this.showChatButton());
                    break;
                case PlayerVO.STATE_READY:
                    this.showAvatar();
                    this.hideRoleAvatar();
                    this.hideMandate();
                    this.showReady();
                    this.hidePokerCount();
                    this.removeCountDown();
                    this.data == Engine.getData().user && (this.isFirstInTable && (this.frame.setX(Config.PLAYER_INIT_AVATAR_POSITION[0]), this.frame.setY(Config.PLAYER_INIT_AVATAR_POSITION[1]), this.playerName.setX(Config.PLAYER_INIT_AVATAR_POSITION[0]), this.playerName.setY(Config.PLAYER_INIT_AVATAR_POSITION[1] + 110), this.ready.setX(Config.PLAYER_INIT_READY_ICON_POSITION[0]), 
                    this.ready.setY(Config.PLAYER_INIT_READY_ICON_POSITION[1]), this.enterBtn && this.enterBtn.setY(-60)), this.showChatButton());
                    break;
                case PlayerVO.STATE_GAME:
                    this.hideReady(), this.data == Engine.getData().user ? (this.isFirstInTable = !1, this.frame.setX(0), this.frame.setY(0), this.playerName.setX(0), this.playerName.setY(110), this.showChatButton(), this.enterBtn && this.enterBtn.setY(Engine.getData().state == GameVO.STATE_THE_CARDS ? -85 : -60)) : this.playerInVisablePoker(), Engine.getData().state == GameVO.STATE_THE_CARDS ? 
                    (this.hideAvatar(), this.showRoleAvatar()) : (this.showAvatar(), this.hideRoleAvatar()), this.data.hasFlag(PlayerVO.FLAG_MANAGED) ? this.showMandate() : this.hideMandate()
            }
        else
            this.playerName.setText(""), this.closeBigVisiblePokers(), this.hideAvatar(), this.hideBubble(), this.hideMandate(), this.hidePlayerInfo(), this.hidePokerCount(), this.hideReady(), this.hideRoleAvatar(), this.removeCountDown(), this.offline.setVisible(!1)
    },displayCount: function(a) {
        this.removeAlarmLeft();
        if (a && Engine.getData().state == GameVO.STATE_THE_CARDS && 
        this.data.count <= PlayerV.ALARM_LEFT)
            switch (this.data.idx) {
                case 1:
                    var a = 1, b = G.getPos("报警和高倍", "右报警动画"), c = b[0] - this.getX(), b = b[1] - this.getY();
                    this.showAlarmLeft(c, b, a);
                    break;
                case 2:
                    a = -1, b = G.getPos("报警和高倍", "左报警动画"), c = b[0] - this.getX(), b = b[1] - this.getY(), this.showAlarmLeft(c, b, a)
            }
        if (!this.data || this.data == Engine.getData().user)
            this.hidePokerCount();
        else {
            if (!this.countV_bg) {
                this.countV_bg;
                switch (this.data.idx) {
                    case 1:
                        this.countV_bg = G.Image.create({slice: G.getSlice("玩家牌数-右边")});
                        this.countV_bg.setX(this.frame.x + 
                        53);
                        break;
                    case 2:
                        this.countV_bg = G.Image.create({slice: G.getSlice("玩家牌数-左边")}), this.countV_bg.setX(this.frame.x + 19)
                }
                this.countV_bg.setY(this.frame.y + this.frame.height + 30);
                this.addChild(this.countV_bg);
                this.countV = G.Container.create();
                this.countV.setX(14);
                this.countV.setY(10);
                this.countV_bg.addChild(this.countV)
            }
            this.data.hasFlag(PlayerVO.FLAG_SHOW) || this.data.hasFlag(PlayerVO.FLAG_START_SHOW) ? this.hidePokerCount() : (!this.countV_bg.parent && this.addChild(this.countV_bg), UI.setNumber(this.countV, this.data.count, 
            UI.NUMBER_POKER));
            10 > this.data.count ? this.countV.setX(14) : this.countV.setX(8)
        }
    },hidePokerCount: function() {
        this.countV_bg && this.countV_bg.parent && this.removeChild(this.countV_bg)
    },showAlarmLeft: function(a, b, c) {
        Config.ANI_GAOJING_ON && (U.log("showAlarmLeft"), this.addChild(this.alarmLeft), this.alarmLeft.setX(a), this.alarmLeft.setY(b), this.alarmLeft.setScale(c, 1), this.alarmLeft.play())
    },removeAlarmLeft: function() {
        Config.ANI_GAOJING_ON && (this.alarmLeft.stop(), this.removeChild(this.alarmLeft))
    },showGambleBubble: function() {
        this.hideBubble();
        var a, b, c = 0;
        switch (this.data.idx) {
            case 1:
                c = -10;
                a = -190 * Engine.scale;
                b = 65 * Engine.scale;
                this.bubble = G.Image.create({slice: G.getSlice("对话泡-右边")});
                break;
            case 2:
                a = 150 * Engine.scale;
                b = 65 * Engine.scale;
                this.bubble = G.Image.create({slice: G.getSlice("对话泡-左边")});
                break;
            default:
                a = 150 * Engine.scale, b = -30 * Engine.scale, this.bubble = G.Image.create({slice: G.getSlice("对话泡-左边")})
        }
        this.bubble.setX(a);
        this.bubble.setY(b);
        this.addChild(this.bubble);
        this.setChildIndex(this.bubble, 999);
        var e;
        switch (this.data.act) {
            case CMD.ACTION_NOCALL:
                e = 
                G.Image.create({slice: G.getSlice("对话泡-不叫")});
                break;
            case CMD.ACTION_CALL:
                e = G.Image.create({slice: G.getSlice("对话泡-叫地主")});
                break;
            case CMD.ACTION_NOGRAB:
                e = G.Image.create({slice: G.getSlice("对话泡-不抢")});
                break;
            case CMD.ACTION_GRAB:
                e = G.Image.create({slice: G.getSlice("对话泡-抢地主")})
        }
        e && (this.bubble.addChild(e), e.setX((this.bubble.getWidth() - e.getWidth() >> 1) + c), e.setY((this.bubble.getHeight() - e.getHeight() >> 1) + 0))
    },showNoPlayBubble: function() {
        this.hideBubble();
        this.playRoleAnimation(PlayerV.ROLE_ANIMATION_ANGER);
        this.clearLastPokers();
        var a, b, c = 0;
        switch (this.data.idx) {
            case 1:
                c = -6;
                a = -190 * Engine.scale;
                b = 80 * Engine.scale;
                this.bubble = G.Image.create({slice: G.getSlice("对话泡-右边")});
                break;
            case 2:
                a = 150 * Engine.scale;
                b = 80 * Engine.scale;
                this.bubble = G.Image.create({slice: G.getSlice("对话泡-左边")});
                break;
            default:
                a = 150 * Engine.scale, b = -30 * Engine.scale, this.bubble = G.Image.create({slice: G.getSlice("对话泡-左边")})
        }
        var e = G.Image.create({slice: G.getSlice("对话泡-不出")});
        this.bubble.setX(a);
        this.bubble.setY(b);
        this.addChild(this.bubble);
        e && 
        (this.bubble.addChild(e), e.setX((this.bubble.getWidth() - e.getWidth() >> 1) + c), e.setY((this.bubble.getHeight() - e.getHeight() >> 1) + 0))
    },hideBubble: function() {
        this.bubble && (this.bubble.removeAllChildren(), this.removeChild(this.bubble))
    },showChatBubble: function(a) {
        if (this.data) {
            var b = [0, 0];
            this.chatLayer || (this.chatTxt = G.Text.create(), this.chatTxt.setFontSize(21), this.chatTxt.setHeight(40), this.chatTxt.setLineHeight(40), this.chatTxt.setPaddingLeft(8), this.chatWordsLayer = G.Container.create(), this.chatWordsLayer.setBg("#ccf0ff"), 
            this.chatWordsLayer.setOverflowHidden(!0), this.chatWordsLayer.setHeight(this.chatTxt.getHeight()), this.chatWordsButtomLayer = G.Container.create(), this.chatWordsButtomLayer.setBg("#a3e0ff"), this.chatWordsButtomLayer.setHeight(this.chatTxt.getHeight() / 2), this.chatWordsButtomLayer.setY(this.chatTxt.getHeight() / 2), this.chatWordsShadowLayer = G.Container.create(), this.chatWordsShadowLayer.setBg("#000000"), this.chatWordsShadowLayer.setOpacity(0.5), this.chatWordsShadowLayer.setBorderRadius(14), this.chatWordsShadowLayer.setHeight(this.chatWordsLayer.getHeight()), 
            this.chatWordsShadowLayer.setX(4), this.chatWordsShadowLayer.setY(4), this.chatBg = G.Image.create({slice: G.getSlice("对话泡-聊天")}), 1 == this.data.idx && this.chatBg.setScale(-1, 1), this.chatBg.setY(this.chatWordsLayer.getHeight()), this.chatLayer = G.Container.create(), this.chatLayer.setHeight(this.chatWordsLayer.getHeight() + this.chatBg.getHeight()), this.chatWordsLayer.addChild(this.chatWordsButtomLayer), this.chatWordsLayer.addChild(this.chatTxt), this.chatLayer.addChild(this.chatWordsShadowLayer), this.chatLayer.addChild(this.chatWordsLayer), 
            this.chatLayer.addChild(this.chatBg), this.chatWordsLayer.setBorderRadius(14));
            var c = this.getY() + this.frame.getY();
            switch (this.data.idx) {
                case 0:
                    this.chatBg.setX(20);
                    break;
                case 1:
                    b = [this.getX(), c];
                    break;
                case 2:
                    b = [this.getX() + this.frame.getWidth() + 10, c], this.chatBg.setX(20)
            }
            this.chatLayer.parent || this.parent && this.parent.addChild(this.chatLayer);
            6 > a.length && (a = "  " + a + "   ");
            this.chatTxt.setText(a);
            a = 11 * a.getLengthOfBytes() + 10;
            this.chatTxt.setWidth(a);
            this.chatWordsButtomLayer.setWidth(a);
            this.chatWordsLayer.setWidth(a);
            this.chatWordsShadowLayer.setWidth(a);
            this.chatLayer.setWidth(a);
            this.chatLayer.setVisible(!0);
            switch (this.data.idx) {
                case 1:
                    b[0] = b[0] - a - 10, this.chatBg.setX(this.chatWordsLayer.getX() + a - 20);
                case 2:
                    b[1] += 40;
                    break;
                default:
                    b = this.isFirstInTable ? [570, c] : [140, c]
            }
            this.chatLayer.setX(b[0]);
            this.chatLayer.setY(b[1]);
            this.chatTimeout && (clearTimeout(this.chatTimeout), this.chatTimeout = null);
            this.chatTimeout = setTimeout(U.delegate(function() {
                this.chatLayer.setVisible(false);
                clearTimeout(this.chatTimeout)
            }, this), 
            5E3)
        }
    },showChatButton: function() {
        this.enterBtn || (this.enterBtn = G.Button.create({imgUp: G.getSlice("图标-聊天-默认"),imgDown: G.getSlice("图标-聊天-点击"),callback: U.delegate(function() {
                this.data && (this.chatV || (this.chatV = new ChatV), this.chatV.show())
            }, this)}), this.enterBtn.setX(-14), this.enterBtn.setY(-60));
        !this.enterBtn.parent && this.addChild(this.enterBtn)
    },hideChatButton: function() {
        this.enterBtn && this.enterBtn.parent && this.removeChild(this.enterBtn)
    },showMandate: function() {
        this.data == Engine.getData().user ? (this.selfMandate || 
        (this.selfMandate = G.Image.create({slice: G.getSlice("托管小U")}), this.selfMandate.addEventListener(G.EVENT.CLICK, U.delegate(this._cancelMandateRequest, this)), this.selfMandate.addEventListener(G.EVENT.DRAG, U.delegate(this._cancelMandateRequest, this)), this.selfMandate.setX(Config.PLAYER_MANDATE_POSITION[0]), this.selfMandate.setY(Config.PLAYER_MANDATE_POSITION[1])), !this.selfMandate.parent && Engine.toolbarLayer.addChild(this.selfMandate)) : this.otherMandate.setVisible(!0)
    },hideMandate: function() {
        this.data == 
        Engine.getData().user ? this.selfMandate && this.selfMandate.parent && Engine.toolbarLayer.removeChild(this.selfMandate) : this.otherMandate && this.otherMandate.parent && this.otherMandate.setVisible(!1)
    },_cancelMandateRequest: function() {
        Net.request(CMD.MANDATE_REQUEST, {action: CMD.MANDATE_CANCEL})
    },clearLastPokers: function() {
        if (this.data && this.data.lastPlayedPokers) {
            for (var a = 0; a < this.data.lastPlayedPokers.length; a++) {
                var b = this.data.lastPlayedPokers[a];
                b.parent && b.parent.removeChild(b)
            }
            this.data.lastPlayedPokers = 
            null
        }
    },showOthersPlayPokers: function() {
        var a, b, c, e, g, h, i = 0.8 * Engine.scale, j = this.data;
        a = (b = j.playingPokers) ? b.length : 0;
        c = Rule.getType(j.playingPokers);
        this.updateVisiblePokers();
        c && (e = GroupType.getAnimation(c), Engine.animation.showAniByType(e, this.data.idx), e && this.playRoleAnimation(PlayerV.ROLE_ANIMATION_SMILE));
        this.hideBubble();
        U.log("playPoker:" + c);
        switch (this.data.idx) {
            case 1:
                this.clearLastPokers();
                var k = a;
                9 <= a && (k = 9);
                for (c = 0; c < a; c++) {
                    e = b[c];
                    e.setScale(i);
                    g = -130 * Engine.scale - 20 * k * Engine.scale + 
                    20 * (c % 9) * Engine.scale;
                    h = -70 * Engine.scale;
                    9 <= c && (h = -30 * Engine.scale);
                    if (j.pokers && 0 < j.pokers.length)
                        for (var l = 0; l < a - 1; l++) {
                            var m = this.visiblePokerCon.getChildIndex(b[l]);
                            this.visiblePokerCon.getChildIndex(b[l + 1]) < m && this.visiblePokerCon.setChildIndex(b[l + 1], m)
                        }
                    else
                        e.setX(g + 100 * Engine.scale), e.setY(h - 100 * Engine.scale), this.visiblePokerCon.addChild(e);
                    Config.ANI_PLAY_POKER_ON ? setTimeout(U.delegate(e.to, e), 10, {x: g,y: h,time: 0.1}) : (e.setX(g), e.setY(h))
                }
                break;
            case 2:
                this.clearLastPokers();
                for (c = 0; c < a; c++) {
                    e = 
                    b[c];
                    e.setScale(i);
                    g = 180 * Engine.scale + 20 * (c % 9) * Engine.scale;
                    h = -70 * Engine.scale;
                    9 <= c && (h = -30 * Engine.scale);
                    if (j.pokers && 0 < j.pokers.length)
                        for (l = 0; l < a - 1; l++)
                            m = this.visiblePokerCon.getChildIndex(b[l]), this.visiblePokerCon.getChildIndex(b[l + 1]) < m && this.visiblePokerCon.setChildIndex(b[l + 1], m);
                    else
                        e.setX(g - 100 * Engine.scale), e.setY(h - 100 * Engine.scale), this.visiblePokerCon.addChild(e);
                    Config.ANI_PLAY_POKER_ON ? setTimeout(U.delegate(e.to, e), 10, {x: g,y: h,time: 0.1}) : (e.setX(g), e.setY(h))
                }
                break;
            default:
                this.data.lastPlayedPokers && 
                0 < this.data.lastPlayedPokers.length && Utils.toLocalArray_v2(this.data.lastPlayedPokers, j.pokers);
                AI.analyzePlayerPokers(j);
                Engine.ob.notify(NT.ARRANGE_POKERS, !0);
                j.clickToPlayPokers = b;
                j.count = j.pokers.length - a;
                j.lastPlayedPokers = null;
                if (!j.clickToPlayPokers || 0 >= j.clickToPlayPokers.length) {
                    this.showNoPlayBubble();
                    this.displayCount(!0);
                    return
                }
                Utils.toLocalArray(j.pokers, j.clickToPlayPokers);
                j.deletePokers(j.clickToPlayPokers);
                setTimeout(U.delegate(this.showClickToPlayPokers, this), 500, j.clickToPlayPokers.slice());
                this.displayCount(!0);
                return
        }
        this.displayCount(!0);
        j.lastPlayedPokers = b
    },showClickToPlayPokers: function(a) {
        var b, c, e, g, h = 0.8 * Engine.scale, i = this.data;
        if ((b = a || i.clickToPlayPokers) && !(0 >= b.length)) {
            c = Rule.getType(b);
            a = b.length;
            c && (c = GroupType.getAnimation(c), Engine.animation.showAniByType(c, this.data.idx), c && this.playRoleAnimation(PlayerV.ROLE_ANIMATION_SMILE));
            this.hideBubble();
            this.clearLastPokers();
            e = [];
            for (c = 0; c < a - 1; c++) {
                var j = Engine.pokerContainer.getChildIndex(b[c]);
                Engine.pokerContainer.getChildIndex(b[c + 
                1]) < j && Engine.pokerContainer.setChildIndex(b[c + 1], j);
                e.push(j)
            }
            j = A.WIDTH - 73 >> 1;
            for (c = 0; c < a; c++) {
                var k = b[c];
                e = j + 20 * (c - 0.5 * a);
                g = (A.HEIGHT - Poker.HEIGHT * Engine.scale >> 1) * Engine.scale;
                Config.ANI_PLAY_POKER_ON ? k.to({x: e,y: g,scale: h,time: 0.2}) : (k.setX(e), k.setY(g), k.setScale(h))
            }
            Engine.ob.notify(NT.ARRANGE_POKERS);
            this.displayCount(!0);
            i.lastPlayedPokers = b
        }
    }});
PlayerV.PTR_WIDTH = 115 * Engine.scale;
PlayerV.PTR_HEIGHT = 145 * Engine.scale;
PlayerV.PTR_GAP = 18 * Engine.scale;
PlayerV.VISIBLE_POKER_L_X = 0;
PlayerV.VISIBLE_POKER_R_X = 0;
PlayerV.VISIBLE_POKER_Y = 0;
PlayerV.VISIBLE_POKER_GAP = 13;
PlayerV.BIG_VISIBLE_POKER_GAP = 23;
PlayerV.MAX_VISIBLE_POKERS = 10;
PlayerV.VISIBLE_POKER_SCALE = 0.4;
PlayerV.BIG_VISIBLE_POKER_SCALE = 0.77;
PlayerV.ALARM_LEFT = 2;
PlayerV.PORTRAIT_DIZHU = [[216, 0, 87, 87]];
PlayerV.PORTRAIT_M = [[126, 0, 87, 87]];
PlayerV.PORTRAIT_W = [[305, 0, 87, 87]];
PlayerV.PORTRAIT_FRAME = [8, 2, 115, 115];
PlayerV.PORTRAIT_GLOW = [2, 120, 155, 155];
PlayerV.ROLE_ANIMATION_SMILE = 1;
PlayerV.ROLE_ANIMATION_ANGER = 2;
Poker = G.Image.getClass().extend({init: function(a, b) {
        this.keyNamePre = "Poker";
        this.onSelected = null;
        this.org_y = this.org_x = 0;
        this.outOfDrag = !1;
        this.point = Number(a);
        this.type = 16 == this.point ? Poker.JOKERS : 17 == this.point ? Poker.JOKERB : b;
        this.selected = !1;
        this._super(arguments);
        this.setImage(this.getSlice());
        this.pokerMask = G.Image.create({slice: G.getSlice("牌-选中")});
        this.hasMask = !1;
        this.addEventListener(G.EVENT.CHOOSE, function() {
            U.log("Choose poker");
            this.outOfDrag = !0
        });
        this.addEventListener(G.EVENT.CLICK, U.delegate(this.onHeatAreaEvent, 
        this));
        this.disable()
    },getSlice: function() {
        var a = null, b = null;
        switch (this.point) {
            case 11:
                a = "J";
                break;
            case 12:
                a = "Q";
                break;
            case 13:
                a = "K";
                break;
            case 14:
                a = "A";
                break;
            case 15:
                a = "2";
                break;
            case 16:
            case 17:
                a = "";
                break;
            default:
                a = "" + this.point
        }
        switch (this.type) {
            case Poker.FANGKUAI:
                b = "方块";
                break;
            case Poker.HONGTAO:
                b = "红桃";
                break;
            case Poker.MEIHUA:
                b = "梅花";
                break;
            case Poker.HEITAO:
                b = "黑桃";
                break;
            case Poker.JOKERB:
                b = "大王";
                break;
            case Poker.JOKERS:
                b = "小王";
                break;
            default:
                U.error("Wrong poker type: "), U.error(this.type)
        }
        return G.getSlice("牌-" + 
        b + a)
    },toString: function() {
        return "{point:" + this.point + ", type:" + this.type.name + "}"
    },preSelected: function() {
        this.hasMask || (this.addChild(this.pokerMask), this.hasMask = !0)
    },unpreSelected: function() {
        this.hasMask && (this.removeChild(this.pokerMask), this.hasMask = !1)
    },select: function(a) {
        this.isEnable() && this.selected != a && (this.selected = a, a = this.y + (this.selected ? -15 : 15) * Engine.scale, Config.ANI_SELECT_POKER_ON ? this.to({y: a,time: 0.1}) : this.setY(a), Engine.ob.notify(NT.CHECK_BTN_ENABLE))
    },onHeatAreaEvent: function(a) {
        U.log("onHeatAreaEvent");
        if (!a || !(Engine.pokerContainer.preSelectedPokers && 1 !== Engine.pokerContainer.preSelectedPokers.length))
            this.outOfDrag = !0, this.unpreSelected(), this.select(!this.selected)
    }});
Poker.shuffle = function(a) {
    for (var b = 0, c = a.length; b < c; b++) {
        var e = Math.random() * (c - 1) >> 0, g = a[b];
        a[b] = a[e];
        a[e] = g
    }
    return a
};
Poker.newPack = function() {
    for (var a = [], b = 3; 15 >= b; b++)
        a.push(new Poker(b, Poker.FANGKUAI)), a.push(new Poker(b, Poker.MEIHUA)), a.push(new Poker(b, Poker.HONGTAO)), a.push(new Poker(b, Poker.HEITAO));
    a.push(new Poker(16));
    a.push(new Poker(17));
    return a
};
Poker.sortPoker = function(a, b) {
    return !a || !b ? 0 : b.point == a.point ? b.type.value - a.type.value : b.point - a.point
};
Poker.getPack = function(a) {
    for (var b = [], c = 0; c < a.length; c++)
        b.push(new Poker(a[c], Poker.FANGKUAI));
    return b
};
Poker.select = function(a, b) {
    if (a)
        for (var c = 0; c < a.length; c++)
            a[c].select(b)
};
Poker.image = null;
Poker.ORG_IMG_WIDTH = 0;
Poker.ORG_IMG_HEIGHT = 0;
Poker.WIDTH = 0;
Poker.HEIGHT = 0;
Poker.xx = 0;
Poker.yy = 0;
Poker.background = null;
Poker.selectedBg = null;
Poker.TOTAL = 54;
Poker.START = 3;
Poker.END = 17;
Poker.FANGKUAI = {name: "fangkuai",value: 0};
Poker.MEIHUA = {name: "meihua",value: 1};
Poker.HONGTAO = {name: "hongtao",value: 2};
Poker.HEITAO = {name: "heitao",value: 3};
Poker.JOKERS = {name: "jokers",value: 4};
Poker.JOKERB = {name: "jokerb",value: 5};
Poker.getTypeByValue = function(a) {
    switch (a) {
        case 0:
            return Poker.FANGKUAI;
        case 1:
            return Poker.MEIHUA;
        case 2:
            return Poker.HONGTAO;
        case 3:
            return Poker.HEITAO;
        case 4:
            return Poker.JOKERS;
        case 5:
            return Poker.JOKERB
    }
};
GambleContainer = G.Container.getClass().extend({init: function() {
        this.keyNamePre = "GambleContainer";
        this._super(arguments);
        this.setY(350);
        this.noCallBtn = G.TextButton.create({imgUp: G.getSlice("不叫-默认"),imgDown: G.getSlice("不叫-点击"),imgDisable: G.getSlice("不叫-禁点"),imgUpBg: G.getSlice("绿按扭小-默认"),imgDownBg: G.getSlice("绿按扭小-点击"),imgDisableBg: G.getSlice("按扭-禁点")});
        this.addChild(this.noCallBtn);
        this.noGrabBtn = G.TextButton.create({imgUp: G.getSlice("不抢-默认"),imgDown: G.getSlice("不抢-点击"),imgDisable: G.getSlice("不抢-禁点"),
            imgUpBg: G.getSlice("绿按扭小-默认"),imgDownBg: G.getSlice("绿按扭小-点击"),imgDisableBg: G.getSlice("按扭-禁点")});
        this.addChild(this.noGrabBtn);
        this.callBtn = G.TextButton.create({imgUp: G.getSlice("叫地主-默认"),imgDown: G.getSlice("叫地主-点击"),imgDisable: G.getSlice("叫地主-禁点"),imgUpBg: G.getSlice("红按扭小-默认"),imgDownBg: G.getSlice("红按扭小-点击"),imgDisableBg: G.getSlice("按扭-禁点")});
        this.addChild(this.callBtn);
        this.grabBtn = G.TextButton.create({imgUp: G.getSlice("抢地主-默认"),imgDown: G.getSlice("抢地主-点击"),imgDisable: G.getSlice("抢地主-禁点"),imgUpBg: G.getSlice("红按扭小-默认"),
            imgDownBg: G.getSlice("红按扭小-点击"),imgDisableBg: G.getSlice("按扭-禁点")});
        this.addChild(this.grabBtn);
        this.noCallBtn.setX(303);
        this.noGrabBtn.setX(this.noCallBtn.x);
        this.callBtn.setX(557);
        this.grabBtn.setX(this.callBtn.x);
        this.noCallBtn.callback = U.delegate(function() {
            Net.request(CMD.CALL_LANDLORD_REQUEST, {uid: Engine.data.user.uid,action: CMD.ACTION_NOCALL});
            this.hide()
        }, this);
        this.noGrabBtn.callback = U.delegate(function() {
            Net.request(CMD.CALL_LANDLORD_REQUEST, {uid: Engine.data.user.uid,action: CMD.ACTION_NOGRAB});
            this.hide()
        }, this);
        this.callBtn.callback = U.delegate(function() {
            Net.request(CMD.CALL_LANDLORD_REQUEST, {uid: Engine.data.user.uid,action: CMD.ACTION_CALL});
            this.hide()
        }, this);
        this.grabBtn.callback = U.delegate(function() {
            Net.request(CMD.CALL_LANDLORD_REQUEST, {uid: Engine.data.user.uid,action: CMD.ACTION_GRAB});
            this.hide()
        }, this);
        this.setVisible(!1)
    },show: function(a) {
        a ? (this.noCallBtn.setVisible(!0), this.noGrabBtn.setVisible(!1), this.callBtn.setVisible(!0), this.grabBtn.setVisible(!1)) : (this.noCallBtn.setVisible(!1), 
        this.noGrabBtn.setVisible(!0), this.callBtn.setVisible(!1), this.grabBtn.setVisible(!0));
        this.setVisible(!0)
    },hide: function() {
        Engine.data.userV.removeCountDown();
        this.setVisible(!1)
    }});
var GameResultVOultipleV = G.Container.getClass().extend({init: function(a) {
        this.keyNamePre = "GambleResultV";
        this._super(arguments);
        this.bg = G.Image.create({slice: G.getSlice("个人信息和总倍数界面-底框")});
        this.addChild(this.bg);
        for (var b = 0; 4 > b; b++) {
            var c = G.Image.create({slice: G.getSlice("界面切图a-05")});
            c.setX(50);
            c.setY(35 * b + 65);
            this.addChild(c)
        }
        this.arraw = G.Image.create({slice: G.getSlice("个人信息和总倍数界面-箭头")});
        this.arraw.setX(-20);
        this.arraw.setY(40);
        this.addChild(this.arraw);
        this.imgMultiple = G.Image.create({slice: G.getSlice("总倍数界面-总倍数")});
        this.imgMultiple.setX(this.bg.width - this.imgMultiple.width >> 1);
        this.imgMultiple.setY(25);
        this.addChild(this.imgMultiple);
        this.multiple = G.Container.create();
        this.multiple.setX(70);
        this.multiple.setY(70);
        this.addChild(this.multiple);
        for (b = 0; 8 > b; b++)
            c = G.Text.create({}), c.setColor("#fff"), c.setFontSize(24), c.setX(70), c.setY(30 + 48 * b), c.setWidth(250), this["m" + b] = c, delete c;
        this.setWidth(this.bg.width);
        this.setHeight(this.bg.height);
        this.setData(a)
    },setData: function(a) {
        this.data = a;
        this.repaint()
    },show: function() {
        A.popup.show(this, 
        {pos: [580, 168],bgColor: "rgba(0,0,0,0.0)"})
    },hide: function() {
        A.popup.hide(this)
    },repaint: function() {
        if (this.data) {
            this.multiple.removeAllChildren();
            for (var a = 0, b = 0; a < Math.min(8, this.data.multiples.length); a++)
                1 < this.data.multiples[a] ? this["m" + b].setText(GameResultVO.MULTIPLES_TEXTS[a] + "　X" + this.data.multiples[a]) : this["m" + b].setText(GameResultVO.MULTIPLES_TEXTS[a] + "　—"), this["m" + b].setX(120 * (b % 2)), this["m" + b].setY(35 * Math.floor(b / 2)), this.multiple.addChild(this["m" + b]), b++
        }
    }}), GameResultV = G.Container.getClass().extend({init: function(a) {
        this.keyNamePre = 
        "GambleResultV";
        this._super(arguments);
        var b;
        this.bg = G.Image.create();
        this.addChild(this.bg);
        this.card = G.Image.create();
        this.card.setX(-10);
        this.card.setY(68);
        this.addChild(this.card);
        this.multipleButton = G.Button.create({imgUp: G.getSlice("结算界面-总倍数按扭-默认"),imgDown: G.getSlice("结算界面-总倍数按扭-点击"),callback: U.delegate(function() {
                this.showMultipleV()
            }, this)});
        this.multipleButton.setX(251);
        this.multipleButton.setY(230);
        this.addChild(this.multipleButton);
        this.multipleText = G.Image.create({slice: G.getSlice("结算界面-总倍数")});
        this.multipleText.setX(7);
        this.multipleText.setY(6);
        this.multipleButton.addChild(this.multipleText);
        this.multipleNumber = G.Container.create();
        this.multipleNumber.setX(this.multipleText.x + this.multipleText.width - 5);
        this.multipleNumber.setY(this.multipleText.y);
        this.multipleNumber.setScale(1.2);
        this.multipleButton.addChild(this.multipleNumber);
        this.okBtnProperties = G.getSlice("红按扭中-默认");
        this.okBtn = G.TextButton.create({imgUp: G.getSlice("确定倒数-默认"),imgDown: G.getSlice("确定倒数-点击"),imgUpBg: G.getSlice("红按扭中-默认"),
            imgDownBg: G.getSlice("红按扭中-点击"),callback: U.delegate(this.onOk, this)});
        this.addChild(this.okBtn);
        for (var c = 0; 3 > c; c++)
            b = G.Image.create({slice: G.getSlice("结算界面-逃跑图标")}), b.setX(86), b.setY(41 * c + 318), b.setVisible(!1), this.addChild(b), this["iconFlee" + c] = b, b = G.Text.create(), b.setFontSize(24), b.setColor("#fff"), b.setWidth(280), b.setX(136), b.setY(41 * c + 328), b.setEllipsis(!0), this.addChild(b), this["txtName" + c] = b, b = G.Image.create(), b.setX(402), b.setY(41 * c + 328), this.addChild(b), this["iconRole" + c] = b, b = G.Text.create(), 
            b.setFontSize(24), b.setColor("#fff"), b.setWidth(120), b.setX(440), b.setY(41 * c + 328), this.addChild(b), this["txtMoney" + c] = b, b = G.Image.create({slice: G.getSlice("结算界面-限制分数图标")}), b.setY(41 * c + 323), b.setVisible(!1), this.addChild(b), this["iconLimit" + c] = b;
        this.setData(a);
        this.countdownInteger = Config.GAME_RESULT_SHOW_TIME;
        this.okBtnCountDownNum = G.Text.create();
        this.okBtnCountDownNum.setWidth(40);
        this.okBtnCountDownNum.setLineSpacing(10);
        this.okBtnCountDownNum.setColor("white");
        this.okBtnCountDownNum.setFontSize(36);
        this.okBtnCountDownNum.setTextAlign("center");
        this.okBtnCountDownNum.setWidth(40);
        U.log("【GameResultV】游戏结果倒计时显示");
        this.addChild(this.okBtnCountDownNum)
    },setData: function(a) {
        this.data = a;
        this.repaint()
    },show: function() {
        U.log("【GameResultV】显示游戏结果信息");
        Engine.ob.notify(NT.SET_MULTIPLE_VISIBLE, !1);
        var a = [this.x, this.y, this.width, this.height];
        A.popup.hide(this);
        A.popup.show(this, {pos: a,noRemove: !0});
        this.clearCountdown();
        this.countdownInteger = parseInt(Config.GAME_RESULT_SHOW_TIME, 10);
        Engine.getData().state = 
        GameVO.STATE_NONE;
        this.countdownTimerId = setInterval(U.delegate(this.displayCountdownNumber, this), 1E3);
        this.hideResultTimeoutId = setTimeout(U.delegate(this.hide, this), 1E3 * Config.GAME_RESULT_SHOW_TIME);
        this.setVisible(!0)
    },onOk: function() {
        this.hide()
    },hide: function() {
        U.log("【GameResultV】移除游戏结果信息");
        this.hideMultipleV();
        this.setVisible(!1);
        A.popup.hide(this);
        this.clearCountdown();
        A.showPush();
        Engine.ob.notify(NT.SET_MULTIPLE_VISIBLE, !0)
    },displayCountdownNumber: function() {
        U.log("【GameResultV】游戏结果倒计时处理");
        this.okBtnCountDownNum.setText(--this.countdownInteger)
    },clearCountdown: function() {
        this.hideResultTimeoutId && clearTimeout(this.hideResultTimeoutId);
        this.countdownTimerId && clearInterval(this.countdownTimerId)
    },showMultipleV: function() {
        this.gameResultMultiple || (this.gameResultMultiple = new GameResultVOultipleV);
        this.gameResultMultiple.setData(this.data);
        this.gameResultMultiple.show()
    },hideMultipleV: function() {
        this.gameResultMultiple && this.gameResultMultiple.hide()
    },repaint: function() {
        if (this.data) {
            UI.setNumber(this.multipleNumber, 
            this.data.getTotalMultiple(), UI.NUMBER_MULTIPLE);
            var a = 1 != this.data.result ? G.getSlice("结算界面-农民胜") : G.getSlice("结算界面-地主胜");
            this.bg.setImage(a);
            this.okBtnCountDownNum.setText(Config.GAME_RESULT_SHOW_TIME);
            this.x = A.WIDTH - a.rect[2] >> 1;
            this.y = 0;
            this.width = a.rect[2];
            this.height = a.rect[3];
            this.okBtn.setX(this.width - this.okBtnProperties.rect[2] >> 1);
            this.okBtn.setY(this.height - 20);
            this.okBtnCountDownNum.setX(this.okBtn.getX() + 102);
            this.okBtnCountDownNum.setY(this.okBtn.getY() + 18);
            this.setWidth(this.width);
            this.setHeight(this.height);
            for (a = 0; 3 > a; a++) {
                var b = this.data.getItem(a);
                this["txtName" + a].setText(b.name);
                this["txtMoney" + a].setText(0 < b.money1 ? "+" + b.money1 : b.money1);
                this["txtMoney" + a].setColor(0 < b.money1 ? "orange" : "yellow");
                this["iconRole" + a].setImage(G.getSlice(b.role == PlayerVO.DIZHU ? "结算界面-地主图标" : "结算界面-农民图标"));
                this["iconFlee" + a].setVisible(b.hasFlag(GameResultItemVO.FLAG_FLEE));
                this["iconLimit" + a].setVisible(b.hasFlag(GameResultItemVO.FLAG_LIMIT));
                this["iconLimit" + a].setX(this["txtMoney" + a].x + 15 * 
                this["txtMoney" + a].text.toString().length)
            }
        }
    }});
GameResultV.COUNTDOWN_INITIAL_INTEGER = 5;
ControlContainer = G.Container.getClass().extend({init: function() {
        this.keyNamePre = "ControlContainer";
        this._super(arguments);
        this.setY(340);
        this.ctlBar = G.Container.create();
        this.ctlBar.setWidth(520);
        this.ctlBar.setHeight(200);
        this.ctlBar.setX(220);
        this.ctlBar.setY(-220);
        this.addChild(this.ctlBar);
        this.skipBtn = G.TextButton.create({imgUp: G.getSlice("不出-默认"),imgDown: G.getSlice("不出-点击"),imgDisable: G.getSlice("不出-禁点"),imgUpBg: G.getSlice("绿按扭小-默认"),imgDownBg: G.getSlice("绿按扭小-点击"),imgDisableBg: G.getSlice("按扭-禁点")});
        this.skipBtn.setX(150);
        this.addChild(this.skipBtn);
        this.resetBtn = G.TextButton.create({imgUp: G.getSlice("重选-默认"),imgDown: G.getSlice("重选-点击"),imgDisable: G.getSlice("重选-禁点"),imgUpBg: G.getSlice("红按扭小-默认"),imgDownBg: G.getSlice("红按扭小-点击"),imgDisableBg: G.getSlice("按扭-禁点")});
        this.resetBtn.setX(400);
        this.addChild(this.resetBtn);
        this.tipBtn = G.TextButton.create({imgUp: G.getSlice("提示-默认"),imgDown: G.getSlice("提示-点击"),imgDisable: G.getSlice("提示-禁点"),imgUpBg: G.getSlice("红按扭小-默认"),imgDownBg: G.getSlice("红按扭小-点击"),
            imgDisableBg: G.getSlice("按扭-禁点")});
        this.tipBtn.setX(580);
        this.addChild(this.tipBtn);
        this.playBtn = G.TextButton.create({imgUp: G.getSlice("出牌-默认"),imgDown: G.getSlice("出牌-点击"),imgDisable: G.getSlice("出牌-禁点"),imgUpBg: G.getSlice("红按扭小-默认"),imgDownBg: G.getSlice("红按扭小-点击"),imgDisableBg: G.getSlice("按扭-禁点")});
        this.playBtn.setX(760);
        this.addChild(this.playBtn);
        this.showBtn = G.TextButton.create({imgUp: G.getSlice("明牌-默认"),imgDown: G.getSlice("明牌-点击"),imgUpBg: G.getSlice("绿按扭小-默认"),imgDownBg: G.getSlice("绿按扭小-点击"),
            callback: U.delegate(function() {
                this.showBtn.setVisible(!1);
                Net.request(CMD.SHOW_CARDS_REQUEST)
            }, this)});
        this.showBtn.setX(150);
        this.addChild(this.showBtn);
        this.skipBtn.callback = U.delegate(function() {
            Poker.select(Engine.getData().user.getSelectedPokers(), !1);
            Engine.ob.notify(NT.PLAY_SKIP, Engine.getData().user.idx)
        }, this);
        this.resetBtn.callback = U.delegate(function() {
            Poker.select(Engine.getData().user.getSelectedPokers(), !1)
        }, this);
        this.tipBtn.callback = U.delegate(function() {
            var a = Engine.getData().user.getSelectedPokers();
            Poker.select(a, !1);
            !Engine.getData().currentTips || 0 >= Engine.getData().currentTips.length ? Engine.getData().isFreePlay() || Engine.ob.notify(NT.PLAY_SKIP, Engine.getData().user.idx) : (a = Engine.getData().currentTips[Engine.getData().currentTip], Poker.select(a, !0), Engine.getData().currentTip++, Engine.getData().currentTip >= Engine.getData().currentTips.length && (Engine.getData().currentTip = 0))
        }, this);
        this.playBtn.callback = U.delegate(function() {
            var a = Engine.getData().user.getSelectedPokers();
            if (a && 0 < a.length)
                if (Engine.getData().currentTurnPokers) {
                    var b = 
                    Rule.compare(a, Engine.getData().currentTurnPokers);
                    0 < b ? Engine.ob.notify(NT.PLAY_POKER, Engine.getData().user.idx) : b === Rule.MSG_SMALLER ? (Engine.animation.showSmaller(), Poker.select(a, !1)) : Rule.MSG_WRONG_TYPE ? (Engine.animation.showWrongType(), Poker.select(a, !1)) : U.log("This should not happen: Rule.MSG_OTHER_ERROR")
                } else
                    Rule.getType(a) ? Engine.ob.notify(NT.PLAY_POKER, Engine.getData().user.idx) : (Engine.animation.showWrongType(), Poker.select(a, !1))
        }, this);
        this.ctlBar.addEventListener(G.EVENT.CLICK, this.playBtn.callback);
        this.setVisible(!1)
    },show: function() {
        Engine.getData().findTips();
        !Engine.getData().isUser(Engine.getData().lastWinner) && !(Engine.getData().currentTips && 0 < Engine.getData().currentTips.length) && Engine.animation.showNoBiggerPokers();
        this.setVisible(!0);
        this.showBtn.setVisible(Engine.getData().user.role === PlayerVO.DIZHU && 20 === Engine.getData().user.pokers.length && !Engine.getData().user.hasFlag(PlayerVO.FLAG_SHOW) && !Engine.getData().user.hasFlag(PlayerVO.FLAG_START_SHOW));
        Engine.ob.notify(NT.CHECK_BTN_ENABLE)
    },
    hide: function() {
        Engine.getData().userV.removeCountDown();
        Engine.getData().resetTips();
        this.setVisible(!1)
    }});
PokerContainer = G.Container.getClass().extend({init: function() {
        this.keyNamePre = "PokerContainer";
        this._super(arguments);
        this.rp = this.lp = this.otx1 = this.otx0 = null;
        this.cx = 0;
        this.lastLocalY = this.lastLocalX = this.chLast = this.chStart = null;
        this.isDragOutAction = !1;
        this.firstPokerFlag = this.preSelectedPokers = null;
        this.isDealing = !1;
        this.timeoutId;
        this.addEventListener(G.EVENT.CHOOSE, function(a) {
            U.log("PokerContainer Choose");
            var b = Engine.data.user.pokers;
            if (b[0] && b[1]) {
                var c = a.pageX - this.getGlobalLeft(), c = c / Engine.stageScale.scaleX, 
                a = a.pageY - this.getGlobalTop(), a = a / Engine.stageScale.scaleY;
                this.lastLocalX = c;
                this.lastLocalY = a;
                for (var a = b[1].x - b[0].x, a = 0 <= a ? a : 0, e = 0, g = b.length, h; e < g; e++)
                    if (h = b[e], h.x <= c && (h.x + a >= c || e == g - 1 && h.x < c)) {
                        this.firstPokerFlag = e;
                        break
                    }
            }
            this.preSelectedPokers = null
        });
        this.addEventListener(G.EVENT.DRAG_END, U.delegate(function(a) {
            U.log("PokerContainer DragEnd");
            this.lastLocalY = this.lastLocalX = null;
            if (this.preSelectedPokers && 0 < this.preSelectedPokers.length)
                if (1 === this.preSelectedPokers.length) {
                    var b = this.preSelectedPokers[0];
                    b.onHeatAreaEvent && b.onHeatAreaEvent()
                } else
                    for (var c = 0, e = this.preSelectedPokers.length; c < e; c++)
                        b = this.preSelectedPokers[c], this.isDragOutAction ? b.selected || b.onHeatAreaEvent && b.onHeatAreaEvent() : b.onHeatAreaEvent && b.onHeatAreaEvent();
            this.isDragOutAction && (a = a.pageY - this.getGlobalTop(), a /= Engine.stageScale.scaleY, a < Engine.pokerY - 0 && Engine.controlContainer.visible && Engine.controlContainer.playBtn.callback(), this.isDragOutAction = !1)
        }, this));
        this.addEventListener(G.EVENT.DRAG, U.delegate(function(a) {
            var b = 
            Engine.data.user.pokers, c = a.pageX - this.getGlobalLeft(), c = c / Engine.stageScale.scaleX, a = a.pageY - this.getGlobalTop(), a = a / Engine.stageScale.scaleY;
            if (!(a < Engine.pokerY)) {
                if (Math.abs(c - this.lastLocalX) < Math.abs(a - this.lastLocalY)) {
                    if (this.isDragOutAction = !0, !(a < this.lastLocalY)) {
                        this.lastLocalX = c;
                        this.lastLocalY = a;
                        return
                    }
                } else
                    this.isDragOutAction = !1;
                if (b[0] && b[1]) {
                    for (var a = b.length, e = b[1].x - b[0].x, e = 0 <= e ? e : 0, g = -1, h = 0, i; h < a; h++)
                        if (i = b[h], i.x <= c && i.x + e >= c) {
                            g = h;
                            break
                        }
                    c = this.firstPokerFlag;
                    e = g;
                    c > e && (h = c, 
                    c = e, e = h);
                    if (-1 != g && (!this.preSelectedPokers || this.preSelectedPokers.length != e - c + 1)) {
                        this.preSelectedPokers = b.slice(c, e + 1);
                        for (h = 0; h < a; h++)
                            i = b[h], h < c || h > e ? i.unpreSelected() : this.isDragOutAction || i.preSelected()
                    }
                }
            }
        }, this));
        this.addEventListener(G.EVENT.DOUBLE_CHOOSE, U.delegate(function(a) {
            for (var b = Engine.data.user.pokers, c = b.length, e = 0, g; e < c; e++)
                g = b[e], g.unpreSelected();
            this.isDragOutAction = !1;
            this.firstPokerFlag = -1;
            e = a.domEvent.touches[0];
            a = a.domEvent.touches[1];
            this.otx0 = e.pageX - this.getGlobalLeft();
            this.otx0 /= Engine.stageScale.scaleX;
            this.otx1 = a.pageX - this.getGlobalLeft();
            this.otx1 /= Engine.stageScale.scaleX;
            e = e.pageY - this.getGlobalTop();
            e /= Engine.stageScale.scaleY;
            a = a.pageY - this.getGlobalTop();
            a /= Engine.stageScale.scaleY;
            if (!(e < Engine.pokerY0 || a < Engine.pokerY1)) {
                if (this.otx0 > this.otx1)
                    e = this.otx0, this.otx0 = this.otx1, this.otx1 = e;
                else if (this.otx0 == this.otx1) {
                    this.lp = this.rp = -1;
                    U.log("this.otx0 == this.otx1, 操作取消");
                    return
                }
                for (e = 0; e < c; e++)
                    a = b[e].x, g = e < c - 1 ? b[e + 1].x - a : Poker.WIDTH, a <= this.otx0 && a + 
                    g >= this.otx0 ? this.lp = e : a <= this.otx1 && a + g >= this.otx1 && (this.rp = e);
                0 === this.lp && (this.lp = 1);
                this.rp === c - 1 && (this.rp = c - 2);
                this.chStart = b[0];
                this.chLast = b[c - 1]
            }
        }, this));
        this.addEventListener(G.EVENT.DOUBLE_DRAG, U.delegate(function(a) {
            if (!(0 > this.lp || 0 > this.rp)) {
                var b = Engine.data.user.pokers, c = b.length, e = a.domEvent.touches[1], a = a.domEvent.touches[0].pageX - this.getGlobalLeft(), a = a / Engine.stageScale.scaleX;
                if (e) {
                    e = e.pageX - this.getGlobalLeft();
                    e /= Engine.stageScale.scaleY;
                    if (a > e)
                        var g = a, a = e, e = g;
                    else if (a == 
                    e) {
                        U.log("tx0 == tx1");
                        return
                    }
                    g = Poker.WIDTH * Engine.stageScale.scaleX;
                    a < this.chStart.x + g && (a = this.chStart.x + g);
                    e > this.chLast.x - g && (e = this.chLast.x - g);
                    if (!(e <= a)) {
                        g = a - this.chStart.x;
                        0 > g && (g = 0);
                        var h = e - a;
                        0 > h && (h = 0);
                        var i = this.chLast.x - e;
                        0 > i && (i = 0);
                        g /= this.lp;
                        h /= this.rp - this.lp;
                        i /= c - this.rp - 1;
                        if (!(g > Poker.WIDTH || h > Poker.WIDTH || i > Poker.WIDTH))
                            if (!(20 > g || 20 > h || 20 > i)) {
                                var j, k;
                                for (k = 1; k < this.lp && 0 < g; k++)
                                    (j = b[k]) && j.setX(this.chStart.x + g * k);
                                for (k = this.lp; k < this.rp && 0 < h; k++)
                                    (j = b[k]) && j.setX(a + h * (k - this.lp));
                                for (k = this.rp; k < c - 1 && 0 < i; k++)
                                    (j = b[k]) && j.setX(e + i * (k - this.rp))
                            }
                    }
                }
            }
        }, this))
    },onPokerSelected: function(a) {
        a.selected && (a = Engine.data.findAutoFitTips(), Poker.select(a, !0))
    },clear: function() {
        U.log("【PokerContainer】清除容器内的牌");
        null !== this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null);
        this.removeAllChildren()
    },show: function() {
        this.setVisible(!0)
    },hide: function() {
        null !== this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null);
        this.setVisible(!1)
    },displayPokers: function(a) {
        this.clear();
        for (var b = a.length, c, e = 0; e < b; e++)
            d = a[e], d.name = "poker" + e, c = Engine.pokerX + e * Math.min(Engine.pokerMaxWidth / b, Engine.pokerMaxGap) >> 0, d.setX(c), d.setY(Engine.pokerY), d.org_x = c, d.org_y = d.y, this.addChild(d)
    },arrangePokers: function(a, b) {
        for (var c, e = Engine.pokerY, g, h = 0, i = a.length; h < i; h++)
            g = a[h], c = Engine.pokerX + h * Math.min(Engine.pokerMaxWidth / i, Engine.pokerMaxGap) >> 0, Config.ANI_ARRANGE_POKER_ON ? g.to({x: c,y: e,scale: 1,time: 0.2}) : (g.setX(c), g.setY(e), g.setScale(1)), g.org_x = c, g.org_y = e, g.enable(), g.selected = !1, 
            b && this.setChildIndex(g, h);
        c = h;
        if (b)
            for (; c < this.children.length; c++)
                this.setChildIndex(this.children[c], c)
    },dealTween_user: function(a, b, c) {
        this.clear();
        var e = 0, g;
        needTween = Config.ANI_DEAL_POKER_ON && c;
        for (g = Engine.data.players[a].pokers.length; e < g; e++) {
            c = Engine.data.players[a].pokers[e];
            c.name = "poker" + e;
            c.setX(A.WIDTH - Poker.WIDTH >> 1);
            c.setY(A.HEIGHT - Poker.HEIGHT >> 1);
            c.index = e + 1;
            this.addChild(c);
            c.addEventListener(G.EVENT.CLICK, U.delegate(this.onPokerSelected, this, c));
            c.org_x = Engine.pokerX + e * Math.min(Engine.pokerMaxWidth / 
            g, Engine.pokerMaxGap) >> 0;
            var h = this;
            needTween ? (this.isDealing = !0, this.timeoutId = setTimeout(U.delegate(c.to, c), Engine.interval_deal * e, {x: c.org_x,y: Engine.pokerY,time: 0.5,onEnd: function(a) {
                    a.index >= g && (h.isDealing = !1, b && b.call())
                },onStart: function(b) {
                    Engine.data.players[a].count = b.index;
                    Engine.data.playerVs[a].displayCount()
                }})) : (c.setX(c.org_x), c.setY(Engine.pokerY))
        }
        needTween || (Engine.data.players[a].count = Engine.data.players[a].pokers.length, Engine.data.playerVs[a].displayCount(), b && b.call())
    }});
SplashV = G.Container.getClass().extend({BUTTON_GRAP: 15,init: function() {
        this._super(arguments);
        this.setVisible(!1);
        this.keyNamePre = "SplashV";
        this._super(arguments);
        this.position = {x: Config.SPLASH_BUTTONS_POSITION[0],y: Config.SPLASH_BUTTONS_POSITION[1]};
        this.hasCountDown = !1;
        this.onHide = function() {
        };
        this.ob = U.Observer;
        var a = 0;
        this.switchTableBtn = G.TextButton.create({imgUp: G.getSlice("换座位-默认"),imgDown: G.getSlice("换座位-点击"),imgUpBg: G.getSlice("红按扭中-默认"),imgDownBg: G.getSlice("红按扭中-点击"),callback: U.delegate(function() {
                U.log("--点击了换座位--");
                this._hideStartBtn();
                this.switchTableBtn.setVisible(!1);
                setTimeout(U.delegate(function() {
                    Net.request(CMD.CHANGE_TABLE_REQUEST, null, function() {
                        Engine.ob.notify(NT.CHANGE_TABLE);
                        this.switchTip && (A.popup.isShow(this.switchTip) && A.popup.hide(this.switchTip), this.switchTip = null);
                        this.switchTimeoutId && (clearTimeout(this.switchTimeoutId), this.switchTimeoutId = null)
                    }, this, !1);
                    this.switchTimeoutId && (clearTimeout(this.switchTimeoutId), this.switchTimeoutId = null);
                    this.switchTip && (A.popup.isShow(this.switchTip) && 
                    A.popup.hide(this.switchTip), this.switchTip = null);
                    this.switchTimeoutId = setTimeout(U.delegate(function() {
                        U.log("--点击了换座位|倒计时处理--");
                        this.switchTip = new TipV({text: Msg.NET_REQUEST,onCancel: function() {
                                A.popup.hide(this.switchTip)
                            }});
                        A.popup.show(this.switchTip, {noRemove: true})
                    }, this), 2E3)
                }, this), 100)
            }, this)});
        this.switchTableBtn.setX(a);
        a += this.switchTableBtn.getWidth() + this.BUTTON_GRAP;
        this.showStartBtn = G.Button.create({imgUp: G.getSlice("明牌开始-默认"),imgDown: G.getSlice("明牌开始-点击"),callback: U.delegate(function() {
                U.log("--点击了明牌开始--");
                this._hideStartBtn();
                this.switchTableBtn.setX(this.btnContainer.getWidth() - this.switchTableBtn.getWidth() + 24 >> 1);
                Net.request(CMD.GAME_START_REQUEST, {flag: 1});
                G.SoundManager.setMusicOn(G.SoundManager.isMusicOn())
            }, this)});
        this.showStartBtn.setX(a);
        a += this.showStartBtn.getWidth() + this.BUTTON_GRAP;
        this.startBtn = G.TextButton.create({imgUp: G.getSlice("开始-默认"),imgDown: G.getSlice("开始-点击"),imgDisable: G.getSlice("开始-禁点"),imgUpBg: G.getSlice("红按扭小-默认"),imgDownBg: G.getSlice("红按扭小-点击"),imgDisableBg: G.getSlice("开始-禁点"),
            callback: U.delegate(function() {
                U.log("--点击了开始--");
                this._hideStartBtn();
                this.switchTableBtn.setX(this.btnContainer.getWidth() - this.switchTableBtn.getWidth() + 24 >> 1);
                Net.request(CMD.GAME_START_REQUEST, {flag: 0});
                G.SoundManager.setMusicOn(G.SoundManager.isMusicOn())
            }, this)});
        this.startBtn.setX(a);
        a += this.startBtn.getWidth() + this.BUTTON_GRAP;
        this.btnContainer = G.Container.create();
        this.btnContainer.addChild(this.showStartBtn);
        this.btnContainer.addChild(this.startBtn);
        this.btnContainer.addChild(this.switchTableBtn);
        this.btnContainer.setWidth(a - this.BUTTON_GRAP);
        this.btnContainer.setHeight(0);
        this.addChild(this.btnContainer)
    },show: function(a) {
        U.log("【SplashV】显示准备界面");
        this.setVisible(!0);
        this.gameModel = a.gameModel || GameVO.getInstance();
        this.onHide = a.onHide && U.isFunction(a.onHide) ? a.onHide : function() {
        };
        this._gameStatusChange();
        this.repaint()
    },hide: function() {
        U.log("【SplashV】隐藏准备界面");
        this.setVisible(!1);
        this._hideCountDownTimer();
        this.onHide()
    },repaint: function() {
        this.btnContainer.setX(this.position.x);
        this.btnContainer.setY(this.position.y)
    },
    _hideStartBtn: function() {
        this.startBtn.setVisible(!1);
        this.showStartBtn.setVisible(!1)
    },_gameStatusChange: function() {
        var a = this.gameModel.state == GameVO.STATE_NONE && this.gameModel.user && this.gameModel.user.state == PlayerVO.STATE_NONE;
        U.log("【SplashV】游戏状态改变, 游戏状态数量：" + GameVO.STATE_NONE);
        U.log("【SplashV】游戏状态改变, 用户状态数量：" + this.gameModel.user.state);
        this.startBtn.setVisible(a);
        this.showStartBtn.setVisible(a);
        this.switchTableBtn.setVisible(this.gameModel.state == GameVO.STATE_NONE);
        (a || this.startBtn.isVisible()) && 
        this.switchTableBtn.setX(0);
        this._playerStatusCheck()
    },_playerStatusCheck: function() {
        U.log("【SplashV】检查游戏玩家状态, 游戏玩家数量：" + this.gameModel.getPlayerCount());
        this.hasCountDown && (3 == this.gameModel.getPlayerCount() ? this.countDownTimer = UI.showCountDown(this, Config.SPLASH_COUNTDOWN_READY_POSITION, this.gameModel.countDown_3th, function() {
            UI.hideCountDown()
        }, this) : this._hideCountDownTimer())
    },_hideCountDownTimer: function() {
        this.countDownTimer && (clearInterval(this.countDownTimer), UI.hideCountDown())
    },_showGameNotice: function() {
        this.hideResultTimeoutId && 
        clearTimeout(this.hideResultTimeoutId);
        Engine.ob.notify(NT.SHOW_GAME_STATE)
    }});
ToolBarV = G.Container.getClass().extend({init: function() {
        this.settingV = null;
        this.keyNamePre = "ToolBarV";
        this._super(arguments);
        var a = G.getPos("主界面", "图标-商城-默认");
        this.shopBtn = G.Button.create({imgUp: G.getSlice("图标-商城-默认"),imgDown: G.getSlice("图标-商城-点击"),callback: U.delegate(function() {
                this._shopV || (this._shopV = new H.ShopWidget);
                A.stage.addChild(this._shopV);
                this._shopV.showShop({backgroundImage: A.RES["商城底图.jpg"]})
            }, this)});
        this.shopBtn.setX(a[0]);
        this.shopBtn.setY(a[1]);
        A.NO_SHOP || this.addChild(this.shopBtn);
        a = G.getPos("主界面", "图标-托管-默认");
        this.mandateBtn = G.Button.create({imgUp: G.getSlice("图标-托管-默认"),imgDown: G.getSlice("图标-托管-点击"),callback: U.delegate(function() {
                Engine.data.user.state == PlayerVO.STATE_GAME && (Engine.data.user.hasFlag(PlayerVO.FLAG_MANAGED) ? Net.request(CMD.MANDATE_REQUEST, {action: CMD.MANDATE_CANCEL}, null, this, !0) : Net.request(CMD.MANDATE_REQUEST, {action: CMD.MANDATE}, null, this, !0))
            }, this)});
        this.mandateBtn.setX(a[0]);
        this.mandateBtn.setY(a[1]);
        this.addChild(this.mandateBtn);
        a = G.getPos("主界面", "图标-设置-默认");
        this.settingBtn = G.Button.create({imgUp: G.getSlice("图标-设置-默认"),imgDown: G.getSlice("图标-设置-点击"),callback: U.delegate(function() {
                var a = SettingV.getInstance();
                a.repaint();
                var b = G.getPos("设置音乐", "系统界面-设置-底框");
                A.popup.show(a, {pos: b})
            }, this)});
        this.settingBtn.setX(a[0]);
        this.settingBtn.setY(a[1]);
        this.addChild(this.settingBtn);
        a = G.getPos("主界面", "图标-换场和返回大厅-默认");
        this.quitBtn = G.Button.create({imgUp: G.getSlice("图标-换场和返回大厅-默认"),imgDown: G.getSlice("图标-换场和返回大厅-点击"),callback: U.delegate(function() {
                var a = QuitV.getInstance();
                a.repaint();
                var b = G.getPos("换场和返回", "系统界面-换场和返回大厅-底框");
                A.popup.show(a, {pos: b})
            }, this)});
        this.quitBtn.setX(a[0]);
        this.quitBtn.setY(a[1]);
        this.addChild(this.quitBtn);
        this.lastPokers = G.Container.create();
        this.lastPokers.setX(382);
        this.lastPokers.setY(25);
        this.addChild(this.lastPokers);
        this.lastPokersLucky = G.Container.create();
        this.lastPokersLucky.setX(this.lastPokers.x);
        this.lastPokersLucky.setY(this.lastPokers.y);
        this.addChild(this.lastPokersLucky);
        var a = [G.Action.create({slice: G.getSlice("高倍1")}), G.Action.create({slice: G.getSlice("高倍2")})], 
        b = G.getPos("报警和高倍", "高倍");
        this.spark = G.Animation.create({actions: a,interval: Config.ANI_INTERVAL});
        this.spark.setX(b[0]);
        this.spark.setY(b[1]);
        this.addChild(this.spark);
        this.hideSpark(0);
        a = G.getPos("主界面", "主界面-底分");
        this.basicScoreText = G.Image.create({slice: G.getSlice("主界面-底分")});
        this.basicScoreText.setX(a[0]);
        this.basicScoreText.setY(a[1]);
        this.addChild(this.basicScoreText);
        this.basicScore = G.Container.create();
        this.basicScore.setX(this.basicScoreText.getX() + 54);
        this.basicScore.setY(this.basicScoreText.getY() + 
        3);
        this.basicScore.setScale(0.88);
        this.addChild(this.basicScore);
        a = G.getPos("主界面", "主界面-倍数");
        this.multipleText = G.Image.create({slice: G.getSlice("主界面-倍数")});
        this.multipleText.setX(a[0]);
        this.multipleText.setY(a[1]);
        this.addChild(this.multipleText);
        this.multipleScore = G.Container.create();
        this.multipleScore.setX(this.multipleText.x + 60);
        this.multipleScore.setY(this.multipleText.y);
        this.addChild(this.multipleScore)
    },show: function() {
        A.gameV.addChild(this)
    },hide: function() {
        this.hideSpark();
        this.parent && this.parent.removeChild(this)
    },
    setMultipleVisible: function(a) {
        this.multipleText.setVisible(a);
        this.multipleScore.setVisible(a);
        this.basicScoreText.setVisible(a);
        this.basicScore.setVisible(a);
        a || this.hideSpark()
    },setLastPokers: function() {
        this.removeLastPokers();
        for (var a = 0, b = Engine.data.lastThreePokers.length; a < b; a++) {
            var c = Engine.data.lastThreePokers[a], c = new Poker(c.point, c.type);
            c.setScale(0.6 * Engine.scale);
            c.setX(a * (0.6 * c.width + 10) * Engine.scale);
            c.setY(0);
            this.lastPokers.addChild(c)
        }
    },removeLastPokers: function() {
        this.lastPokers.removeAllChildren()
    },
    showSpark: function(a) {
        U.log("【TooBarV】showSpark 火花效果");
        100 > a || !1 == this.multipleScore.isVisible() ? (U.log("【TooBarV】showSpark 把火花效果隐藏"), this.hideSpark()) : this.spark && (U.log("【TooBarV】showSpark 把火花效果显示"), this.spark.setVisible(!0), this.spark.gotoAndPlay(0))
    },hideSpark: function() {
        U.log("【TooBarV】hideSpark 隐藏火花效果");
        this.spark && (this.spark.setVisible(!1), this.spark.stop())
    },setLastPokersLucky: function(a) {
        this.removeLastPokersLucky();
        var b = null, c = G.getPos("主界面", "底牌效果"), e = null, g = G.getPos("主界面", "底牌效果-倍数"), 
        h = null, i = G.getPos("主界面", "底牌效果-加倍底框");
        switch (a.multipleType) {
            case CMD.MULTIPLE_SLOTS_PAIR:
                b = G.Image.create({slice: G.getSlice("底牌效果-一双")});
                break;
            case CMD.MULTIPLE_SLOTS_BLACK_JOKER:
                b = G.Image.create({slice: G.getSlice("底牌效果-小王")});
                break;
            case CMD.MULTIPLE_SLOTS_RED_JOKER:
                b = G.Image.create({slice: G.getSlice("底牌效果-大王")});
                break;
            case CMD.MULTIPLE_SLOTS_PAIR_KING:
                b = G.Image.create({slice: G.getSlice("底牌效果-双王")});
                break;
            case CMD.MULTIPLE_SLOTS_STRAIGHT:
                b = G.Image.create({slice: G.getSlice("底牌效果-顺子")});
                break;
            case CMD.MULTIPLE_SLOTS_PAIR_FLUSH:
                b = 
                G.Image.create({slice: G.getSlice("底牌效果-同花")});
                break;
            case CMD.MULTIPLE_SLOTS_STRAIGHT_FLUSH:
                b = G.Image.create({slice: G.getSlice("底牌效果-同花顺")});
                break;
            case CMD.MULTIPLE_SLOTS_THREE:
                b = G.Image.create({slice: G.getSlice("底牌效果-三条")})
        }
        if (b) {
            switch (a.multiple) {
                case 2:
                    e = G.Image.create({slice: G.getSlice("底牌效果-2倍")});
                    break;
                case 3:
                    e = G.Image.create({slice: G.getSlice("底牌效果-3倍")});
                    break;
                case 4:
                    e = G.Image.create({slice: G.getSlice("底牌效果-4倍")});
                    break;
                case 5:
                    e = G.Image.create({slice: G.getSlice("底牌效果-5倍")});
                    break;
                default:
                    U.log("[ToolBarV][Error] 倍数没有给出")
            }
            h = 
            G.Image.create({slice: G.getSlice("底牌效果-加倍底框")});
            b && (this.lastPokersLucky.addChild(b), b.setX(c[0] - this.lastPokersLucky.getX()), b.setY(c[1] - this.lastPokersLucky.getY()));
            e && h && (this.lastPokersLucky.addChild(h), this.lastPokersLucky.addChild(e), h.setX(i[0] - this.lastPokersLucky.getX()), h.setY(i[1] - this.lastPokersLucky.getY()), e.setX(g[0] - this.lastPokersLucky.getX()), e.setY(g[1] - this.lastPokersLucky.getY()))
        }
    },removeLastPokersLucky: function() {
        this.lastPokersLucky.removeAllChildren()
    },setMultiple: function(a) {
        0 <= 
        a && (UI.setNumber(this.multipleScore, a, UI.NUMBER_MULTIPLE), this.showSpark(a))
    },setBasicScore: function(a) {
        0 <= a && UI.setNumber(this.basicScore, a, UI.NUMBER_MULTIPLE)
    }});
AnimationManager = Class.extend({init: function() {
        this.timeout = 1E3;
        this.tips_timeout = 2E3;
        this.tips_noBiggerPokers = G.Image.create({slice: G.getSlice("没有牌能大过上家")});
        this.tips_noBiggerPokers.setX(A.WIDTH - this.tips_noBiggerPokers.width >> 1);
        this.tips_noBiggerPokers.setY(280);
        this.noBiggerPokersTimeoutId = 0;
        this.tips_wrongType = G.Image.create({slice: G.getSlice("牌型不对")});
        this.tips_wrongType.setX(A.WIDTH - this.tips_wrongType.width >> 1);
        this.tips_wrongType.setY(280);
        this.wrongTypeTimeoutId = 0;
        this.tips_smaller = G.Image.create({slice: G.getSlice("牌不够大")});
        this.tips_smaller.setX(A.WIDTH - this.tips_smaller.width >> 1);
        this.tips_smaller.setY(280);
        this.smallerTimeoutId = 0;
        this.tips_pleaseChoose = G.Image.create({slice: G.getSlice("请选择要打出的牌")});
        this.tips_pleaseChoose.setX(A.WIDTH - this.tips_pleaseChoose.width >> 1);
        this.tips_pleaseChoose.setY(280);
        this.pleaseChooseTimeoutId = 0;
        var a, b, c, e, g;
        this.liandui = G.Image.create({slice: G.getSlice("连对")});
        this.liandui.setOrigin(this.liandui.getWidth() / 2, this.liandui.getHeight() / 2);
        this.shunzi = G.Image.create({slice: G.getSlice("顺子")});
        this.shunzi.setOrigin(this.shunzi.getWidth() / 2, this.shunzi.getHeight() / 2);
        a = G.Action.create({slice: G.getSlice("炸弹动画01")});
        b = G.Action.create({slice: G.getSlice("炸弹动画02")});
        c = G.Action.create({slice: G.getSlice("炸弹动画03")});
        e = G.Action.create({slice: G.getSlice("炸弹动画04")});
        g = G.Action.create({slice: G.getSlice("炸弹动画05")});
        this.zhadan = G.Animation.create({actions: [a, b, c, e, g],interval: Config.ANI_INTERVAL});
        this.zhadan.setMode(G.ANIMATION.MODE.END_DELETE);
        this.zhadan.gotoAndStop(0);
        this.zhadan.setX(A.WIDTH - this.zhadan.width >> 
        1);
        this.zhadan.setY(A.HEIGHT - this.zhadan.height >> 1);
        this.feiji = G.Image.create({slice: G.getSlice("飞机")});
        this.feiji.setY(A.HEIGHT - this.feiji.height >> 1);
        this.huojian = G.Image.create({slice: G.getSlice("火箭")});
        this.huojian.setX(A.WIDTH - this.huojian.width >> 1);
        this.againList = [];
        this.again = null
    },hideAllTips: function() {
        this.removePleaseChoose();
        this.removeWrongType();
        this.removeSmaller();
        this.removeNoBiggerPokers()
    },showMultipleAniByType: function(a) {
        if (Config.ANI_MULTIPLE_ON)
            switch (a) {
                case CMD.MULTIPLE_SHOW_START:
                case CMD.MULTIPLE_ROB_LANDLORD:
                case CMD.MULTIPLE_SLOTS_PAIR:
                case CMD.MULTIPLE_SLOTS_BLACK_JOKER:
                case CMD.MULTIPLE_SLOTS_RED_JOKER:
                case CMD.MULTIPLE_BOB:
                    setTimeout(U.delegate(this.showAgain, 
                    this, 2), 300);
                    break;
                case CMD.MULTIPLE_BOB_KING:
                    setTimeout(U.delegate(this.showAgain, this, 2), 500);
                    break;
                case CMD.MULTIPLE_SLOTS_PAIR_KING:
                case CMD.MULTIPLE_SLOTS_STRAIGHT:
                case CMD.MULTIPLE_SLOTS_PAIR_FLUSH:
                    setTimeout(U.delegate(this.showAgain, this, 3), 300);
                    break;
                case CMD.MULTIPLE_SHOW_READY:
                case CMD.MULTIPLE_SLOTS_STRAIGHT_FLUSH:
                case CMD.MULTIPLE_SLOTS_THREE:
                    setTimeout(U.delegate(this.showAgain, this, 5), 300)
            }
    },showAniByType: function(a, b) {
        if (Config.ANI_POKER_TYPE_ON) {
            var c = 0, e = 0, g = 1;
            switch (b) {
                case 0:
                    c = 
                    480;
                    e = 275;
                    g = 1;
                    break;
                case 1:
                    c = 615;
                    e = 142;
                    g = 0.5;
                    break;
                case 2:
                    c = 290, e = 142, g = 0.5
            }
            switch (a) {
                case GroupType.ANI_ZHADAN:
                    this.showZhadan();
                    break;
                case GroupType.ANI_HUOJIAN:
                    this.showHuojian();
                    break;
                case GroupType.ANI_SHUNZI:
                    this.showShunzi(c, e, g);
                    break;
                case GroupType.ANI_LIANDUI:
                    this.showLiandui(c, e, g);
                    break;
                case GroupType.ANI_FEIJI:
                    this.showFeiji()
            }
        }
    },showPleaseChoose: function() {
        U.log("showPleaseChoose");
        this.pleaseChooseTimeoutId ? clearTimeout(this.pleaseChooseTimeoutId) : A.gameV.addChild(this.tips_pleaseChoose);
        this.pleaseChooseTimeoutId = setTimeout(U.delegate(this.removePleaseChoose, this), this.tips_timeout)
    },removePleaseChoose: function() {
        A.gameV.removeChild(this.tips_pleaseChoose);
        this.pleaseChooseTimeoutId = 0
    },showWrongType: function() {
        U.log("showWrongType");
        this.wrongTypeTimeoutId ? clearTimeout(this.wrongTypeTimeoutId) : A.gameV.addChild(this.tips_wrongType);
        this.wrongTypeTimeoutId = setTimeout(U.delegate(this.removeWrongType, this), this.tips_timeout)
    },removeWrongType: function() {
        A.gameV.removeChild(this.tips_wrongType);
        this.wrongTypeTimeoutId = 0
    },showSmaller: function() {
        U.log("showSmaller");
        this.smallerTimeoutId ? clearTimeout(this.smallerTimeoutId) : A.gameV.addChild(this.tips_smaller);
        this.smallerTimeoutId = setTimeout(U.delegate(this.removeSmaller, this), this.tips_timeout)
    },removeSmaller: function() {
        A.gameV.removeChild(this.tips_smaller);
        this.smallerTimeoutId = 0
    },showNoBiggerPokers: function() {
        U.log("showNoBiggerPokers");
        this.noBiggerPokersTimeoutId ? clearTimeout(this.noBiggerPokersTimeoutId) : A.gameV.addChildAt(this.tips_noBiggerPokers, 
        1);
        this.noBiggerPokersTimeoutId = setTimeout(U.delegate(this.removeNoBiggerPokers, this), this.tips_timeout)
    },removeNoBiggerPokers: function() {
        A.gameV.removeChild(this.tips_noBiggerPokers);
        this.noBiggerPokersTimeoutId = 0
    },showHuojian: function() {
        U.log("showHuojian");
        A.gameV.addChild(this.huojian);
        this.huojian.setY(-1 * this.huojian.height);
        this.HuojianTime || (this.HuojianTime = setTimeout(U.delegate(this.huojian.to, this.huojian), 1, {y: this.zhadan.y - 102,time: 0.5,onEnd: U.delegate(this.removeHuojian, this)}))
    },removeHuojian: function() {
        clearTimeout(this.HuojianTime);
        this.HuojianTime = null;
        A.gameV.removeChild(this.huojian);
        this.showZhadan()
    },showFeiji: function() {
        U.log("showFeiji");
        A.gameV.addChild(this.feiji);
        this.feiji.setX(A.WIDTH);
        setTimeout(U.delegate(this.feiji.to, this.feiji), 0, {x: -this.feiji.width,time: 1,onEnd: U.delegate(this.removeFeiji, this)})
    },removeFeiji: function() {
        A.gameV.removeChild(this.feiji)
    },showZhadan: function() {
        U.log("showZhadan");
        A.gameV.addChild(this.zhadan);
        this.zhadan.gotoAndPlay(0)
    },showLiandui: function(a, b) {
        U.log("showLiandui");
        A.gameV.addChild(this.liandui);
        this.liandui.setX(a);
        this.liandui.setY(b);
        this.liandui.setScale(0.3);
        setTimeout(U.delegate(this.liandui.to, this.liandui), 0, {scale: 1,time: 0.2,effect: "ease-out",onEnd: U.delegate(this.bufferLiandui, this)})
    },bufferLiandui: function() {
        setTimeout(U.delegate(this.liandui.to, this.liandui), 0, {scale: 0.7,time: 0.2,effect: "ease-out",onEnd: U.delegate(this.delayLiandui, this)})
    },delayLiandui: function() {
        setTimeout(U.delegate(this.removeLiandui, this), 1E3)
    },removeLiandui: function() {
        A.gameV.removeChild(this.liandui)
    },
    showShunzi: function(a, b) {
        U.log("showLiandui");
        A.gameV.addChild(this.shunzi);
        this.shunzi.setX(a);
        this.shunzi.setY(b);
        this.shunzi.setScale(0.3);
        setTimeout(U.delegate(this.shunzi.to, this.shunzi), 0, {scale: 1,time: 0.2,effect: "ease-out",onEnd: U.delegate(this.bufferShunzi, this)})
    },bufferShunzi: function() {
        setTimeout(U.delegate(this.shunzi.to, this.shunzi), 0, {scale: 0.7,time: 0.2,effect: "ease-out",onEnd: U.delegate(this.delayShunzi, this)})
    },delayShunzi: function() {
        setTimeout(U.delegate(this.removeShunzi, this), 1E3)
    },
    removeShunzi: function() {
        A.gameV.removeChild(this.shunzi)
    },showAgain: function(a) {
        if (this.again)
            this.againList.push(a);
        else {
            var b = A.WIDTH / 2, c = A.HEIGHT / 2;
            switch (a) {
                case 2:
                    this.again = G.Image.create({slice: G.getSlice("加倍-乘2")});
                    break;
                case 3:
                    this.again = G.Image.create({slice: G.getSlice("加倍-乘3")});
                    break;
                case 5:
                    this.again = G.Image.create({slice: G.getSlice("加倍-乘5")})
            }
            this.again.setOrigin(this.again.getWidth() / 2, this.again.getHeight() / 2);
            U.log("showAgain");
            A.gameV.addChild(this.again);
            this.again.setX(b);
            this.again.setY(c);
            this.again.setScale(0.3);
            setTimeout(U.delegate(this.again.to, this.again), 0, {scale: 1,time: 0.1,effect: "ease-out",onEnd: U.delegate(this.bufferAgain, this)})
        }
    },bufferAgain: function() {
        setTimeout(U.delegate(this.again.to, this.again), 0, {scale: 0.7,time: 0.1,effect: "ease-out",onEnd: U.delegate(this.delayAgain, this)})
    },delayAgain: function() {
        setTimeout(U.delegate(this.removeAgain, this), 500)
    },removeAgain: function() {
        A.gameV.removeChild(this.again);
        this.again = null;
        0 < this.againList.length && this.showAgain(this.againList.shift())
    }});
UI = {images: null,lastPokers: null,lastPokersLucky: null,multipleText: null,multipleScore: null,showBubble: function(a, b, c, e, g) {
        if (a) {
            UI.bubble || (UI.bubble = G.Image.create(), c.addChild(UI.bubble));
            if ("noPlay" == b)
                UI.bubble.setImage(G.getSlice("按扭-不出-默认"));
            else if ("gamble0" == b)
                UI.bubble.setImage(G.getSlice("按扭-不叫-默认"));
            else if ("gamble1" == b)
                UI.bubble.setImage(G.getSlice("按扭-叫地主-默认"));
            else if ("gamble2" == b)
                UI.bubble.setImage(G.getSlice("按扭-不抢-默认"));
            else if ("gamble3" == b)
                UI.bubble.setImage(G.getSlice("按扭-抢地主-默认"));
            else
                return;
            UI.bubble.setX(e);
            UI.bubble.setY(g);
            UI.bubble.setVisible(!0)
        } else
            UI.bubble && UI.bubble.setVisible(!1)
    },setNumber: function(a, b, c) {
        a.removeAllChildren();
        for (var b = b.toString(), e = 0, g = 0; g < b.length; g++) {
            var h, i;
            c == UI.NUMBER_POKER || c == UI.NUMBER_COOLDOWN ? (h = "数字-牌数和倒数-", i = 0, 0 == g && 1 != b.length && (e = -4)) : (h = "数字-倍数和底分-", i = -4);
            h = G.Image.create({slice: G.getSlice(h + b[g])});
            a.addChild(h);
            h.setX(e + g * i);
            h.setY(0);
            e += h.width;
            if ((c == UI.NUMBER_POKER || c == UI.NUMBER_COOLDOWN) && 1 == b.length)
                e = 0
        }
        return a
    },hasCountDown: function() {
        return !!UI.countDown.parent
    },
    showCountDown: function(a, b, c, e, g) {
        UI.countDownIntervalId && clearInterval(UI.countDownIntervalId);
        UI.countDown || (UI.countDown = G.Image.create({slice: G.getSlice("图标-倒计时")}), UI.countDownNum = G.Container.create(), UI.countDownNum.setY(45), UI.countDown.addChild(UI.countDownNum), UI.countDownIntervalId = -1, UI.countingNum = 0);
        UI.countingNum = c;
        UI.countDownCallback = e;
        UI.countDownContext = g;
        a.addChild(UI.countDown);
        UI.countDownIntervalId = setInterval(UI.counting, 1E3);
        UI.counting();
        UI.setCountDownPosAndScale(b);
        return UI.countDownIntervalId
    },
    setCountDownPosAndScale: function(a) {
        UI.countDown.setX(a[0]);
        UI.countDown.setY(a[1]);
        UI.countDown.setScale(a[2])
    },counting: function() {
        0 >= UI.countingNum ? (UI.countDownCallback && (UI.countDownContext ? U.delegate(UI.countDownCallback, UI.countDownContext)() : UI.countDownCallback()), UI.hideCountDown()) : (UI.countingNum--, UI.countDownNum.setX(10 > UI.countingNum ? 40 : 35), UI.setNumber(UI.countDownNum, UI.countingNum, UI.NUMBER_COOLDOWN))
    },hideCountDown: function() {
        clearInterval(UI.countDownIntervalId);
        UI.countDown && 
        UI.countDown.parent && UI.countDown.parent.removeChild(UI.countDown)
    },NUMBER_POKER: 1,NUMBER_COOLDOWN: 2,NUMBER_MULTIPLE: 3,NUMBER_BOTTOM_SCORE: 4};
(function() {
    RoomV = G.Container.getClass().extend({itemRoom: A.ROOMS,init: function(a) {
            !this.keyNamePre && (this.keyNamePre = "RoomV");
            this._super(arguments);
            this.setWidth(A.WIDTH);
            this.setHeight(A.HEIGHT);
            var b = G.Image.create({slice: G.getSlice("选区-底图")});
            this.addChild(b);
            b = G.Image.create({slice: G.getSlice("选区-底框和消耗文字")});
            b.setPos(G.getPos("选区", "选区-底框和消耗文字"));
            this.addChild(b);
            this._buttons = [];
            for (var c = 0; c < this.itemRoom.length; c++) {
                var e = this.itemRoom[c], g = e.name, b = G.Button.create({imgUp: G.getSlice("选区" + 
                    g + "-默认"),imgDown: G.getSlice("选区" + g + "-点击"),callback: function() {
                        this.father.login(this.room)
                    }});
                b.room = e;
                b.father = this;
                b.setPos(G.getPos("选区", "选区" + g + "-默认"));
                this.addChild(b);
                this._buttons[c] = b;
                delete e;
                g
            }
            b = G.Button.create({imgUp: G.getSlice("退出按钮-默认"),imgDown: G.getSlice("退出按钮-点击"),callback: U.delegate(function() {
                    A.exitGame();//window.location.href='ddz.apk';
                }, this)});
            b.setPos(G.getPos("选区", "退出按钮-默认"));
            this.addChild(b);
            b = G.Button.create({imgUp: G.getSlice("帮助图标-默认"),imgDown: G.getSlice("帮助图标-点击"),callback: U.delegate(function() {
                    U.Observer.notify(NT.SHOW_HELP)
                }, 
                this)});
            b.setPos(G.getPos("选区", "帮助图标-默认"));
            this.addChild(b);
            this.enterGameFn = U.isFunction(a) ? a : function() {
            };
            U.Observer.addListener(NT.ENTER_GAME, this.loginSuccess, this);
            b = new HelpV;
            b.setVisible(!1);
            this.addChild(b);
            this._helpV = b
        },getRoomById: function(a) {
            for (var b = 0; b < this.itemRoom.length; b++) {
                var c = this.itemRoom[b];
                if (c.id == a)
                    return c
            }
            return null
        },login: function(a) {
            isNaN(a) || (a = this.getRoomById(a));
            a.open ? (U.Observer.notify(NT.SHOW_LOADING), this.progressLogin(a)) : (a = new AlertVO(AlertVO.ROOM_NOT_OPEN, 
            Msg.ROOM_NOT_OPEN, AlertVO.ALWAY_SHOW, 0), Net.ob.notify(NT.ALERT, a))
        },progressLogin: function(a) {
            GameVO.getInstance();
            U.log("【RoomV】_progressLogin::Engine.enterGame");
            this.enterGameFn(a)
        },loginSuccess: function(a) {
            U.Observer.notify(NT.SHOW_GAME);
            a && setTimeout(a, 250)
        },repaint: function() {
        },showHelp: function() {
            U.log("【RoomV】触发帮助显示");
            this._helpV.show()
        },show: function() {
            U.Observer.addListener(NT.SHOW_HELP, this.showHelp, this);
            this.setVisible(!0)
        },hide: function() {
            U.Observer.removeListener(NT.SHOW_HELP, this.showHelp);
            this.setVisible(!1)
        }})
})();
(function() {
    HelpV = G.Container.getClass().extend({helpItem: ["游戏规则", "牌型介绍", "牌型及胜负", "计分规则", "操作方式"],helpText: ['【发牌】： <br>    一副牌 54 张，一人17 张，留 3 张做底牌，在确定地主之前玩家不能看底牌。    <br>     【叫牌】：    <br>    叫牌按出牌的顺序轮流进行，叫牌时可以选择 "叫地主 " 、" 不叫 " 。如果有玩家选择 "叫地主 " 则立即结束叫牌，该玩家为地主；如果都"不叫"，则重新发牌，重新叫牌，直到有人"叫地主"为止 。    <br>     【第一个叫牌的玩家】：    <br>    1 、第一轮叫牌的玩家由系统随机选定。    <br>    2 、如果有玩家在叫牌前选择"明牌"，则第一个选择"明牌"的玩家优先获得叫牌权。    <br>    3 、如果有玩家在叫牌前选择"明牌"，且三名玩家都不选择"叫地主"，则系统选择第一个"明牌"的玩家为地主。    <br>     【抢地主】：    <br>    1 、当某位玩家叫完地主后，按照次序每位玩家均有且只有一次"抢地主"的机会。玩家选择"抢地主"后，如果没有其他玩家继续"抢地主"则地主权利属于该名"抢地主"的玩家。    <br>    2 、如果没有任何玩家选择"抢地主"，则地主权利属于"叫地主"的玩家。    <br>    3 、每"抢地主"一次，游戏倍数 *2 。    <br>    4 、凡是有过"不叫地主"操作的玩家无法进行"抢地主"的操作。    <br>     【明牌】：    <br>    1 、明牌为亮明手上所有牌进行游戏，主要分为二种："明牌开始"、"明牌"。    <br>    2 、明牌开始：在还没发牌时，就选择明牌并保持开始游戏，游戏倍数 *5 。    <br>    3 、明牌：在收完三张底牌后可以选择明牌并开始游戏，游戏倍数 *2 。    <br>    4 、若同时有多名玩家选择"明牌"则按照最大的明牌倍数计算。    <br>     【出牌】：    <br>    将三张底牌交给地主，并亮出底牌让所有人都能看到。地主首先出牌，然后按逆时针顺序依次出牌，轮到用户跟牌时，用户可以选择 " 不出 " 或出比上一个玩家大的牌。某一玩家出完牌时结束本盘。<br> <br> <br> <br> <br> <br> <br> <br>', "【牌型】：<br>火箭：即双王（大王和小王），最大的牌。<br>炸弹：四张同数值牌（如四个 7 ）。<br>单牌：单个牌（如红桃 5 ）。<br>对牌：数值相同的两张牌（如梅花 4+ 方块 4 ）。<br>三张牌：数值相同的三张牌（如三个 J ）。<br>三带一：数值相同的三张牌 + 一张单牌或一对牌。例如： 333+6 或 444+99<br>单顺：五张或更多的连续单牌（如： 45678 或 78910JQK ）。不包括 2 点和双王。<br>双顺：三对或更多的连续对牌（如： 334455 、 7788991010JJ ）。不包括 2 点和双王。<br>三顺：二个或更多的连续三张牌（如： 333444 、 555666777888 ）。不包括 2 点和双王。<br>飞机带翅膀：三顺＋同数量的单牌（或同数量的对牌）。<br>如： 444555+79 或 333444555+7799JJ<br>四带二：四张牌＋两手牌。（注意：四带二不是炸弹）。<br>如： 5555 ＋ 3 ＋ 8 或 4444 ＋ 55 ＋ 77 。<br><br><br><br><br><br><br><br><br>", 
            "【牌型的大小】：<br>火箭最大，可以打任意其他的牌。<br>炸弹比火箭小，比其他牌大。都是炸弹时按牌的分值比大小。<br>除火箭和炸弹外，其他牌必须要牌型相同且总张数相同才能比大小。<br>单牌按分值比大小，依次是 大王 > 小王 >2>A>K>Q>J>10>9>8>7>6>5>4>3 ，不分花色。<br>对牌、三张牌都按分值比大小。<br>顺牌按最大的一张牌的分值来比大小。<br>飞机带翅膀和四带二按其中的三顺和四张部分来比，带的牌不影响大小。<br> 【胜负判定 】：<br>任意一家出完牌后结束游戏，若是地主先出完牌则地主胜，否则另外两家胜。<br><br><br><br><br><br><br><br>", '【计分规则】：<br>在欢乐斗地主游戏中以"欢乐豆"做为游戏计分单位。<br>完成一盘游戏后玩家的欢乐豆可能会发生变化，同时每盘游戏结束后，系统将自动回收每位玩家一定数量的欢乐豆。<br>具体计算公式如下：<br>┗失败玩家的欢乐豆消耗：N*X+A<br>┗胜利玩家的欢乐豆奖励：N*X－A<br>┗系统回收的欢乐豆：根据不同游戏房间而不同<br>其中：<br>┗N=底分固定为5<br>┗X=游戏倍数=基本倍数*打牌倍数*房间倍数*特殊底牌倍数*玩家身份系数（农民=1地主=2）<br>┗基本倍数为15。<br>┗打牌倍数根据游戏行为计算。每抢地主一次 *2 、每炸弹 *2 、明牌 *2、开局明牌*5 、春天*2。<br>┗房间倍数根据不同房间的倍数决定。普通房间、8倍房间、50倍房间分别为1、8、50倍。<br>┗特殊底牌倍数根据3张底牌牌型决定，默认为1，其他见下表：<br>┗对子*2<br>┗小王*2<br>┗大王*2<br>┗双王*3<br>┗顺子*3<br>┗同花*3<br>┗同花顺*5<br>┗三条*5<br>┗A=系统每盘自动回收的欢乐豆数量，根据不同游戏房间而不同。<br>游戏结束后，玩家可获得的欢乐豆数量不只和游戏倍数有关，在某些情况下还有下列2点有关：<br>胜利玩家：<br>┗身上携带的欢乐豆数量决定其获胜后能获得的欢乐豆数量。<br>┗如只带了1000欢乐豆的人，在本局按实际应该赢取对方2000，但只能获得1000。<br>失败玩家：<br>┗在有的情况下失败玩家携带的欢乐豆数量不够扣时，只扣到0为止。<br>┗胜利玩家只能获得失败玩家所扣除的欢乐豆。<br><br><br><br><br><br>', 
            "【选牌】：<br>使用单指点击己方要出的牌或者通过单指滑动的方式连续选牌，松开手指后牌弹高表示选取成功。<br> 【出牌】：<br>选牌完毕后，点击“出牌”按钮或者使用单指将弹高的牌拖出牌区也可达到出牌的效果。<br> 【放大牌区】：<br>在己方牌区使用双指左右拖动，或者分别往两边移动均可放大己方牌区，便于选牌。<br> 【查看信息】：<br>点击玩家头像即可查看该玩家的信息。<br><br><br><br><br><br><br><br>"],init: function(a) {
            !this.keyNamePre && (this.keyNamePre = "HelpV");
            this._super(arguments);
            this.setWidth(Config.STAGE_WIDTH);
            this.setHeight(Config.STAGE_HEIGHT);
            var b;
            b = G.Image.create({slice: G.getSlice("帮助底图")});
            this.addChild(b);
            b = G.Button.create({imgUp: G.getSlice("退出按钮-默认"),imgDown: G.getSlice("退出按钮-点击"),
                callback: U.delegate(function() {
                    this.hide()
                }, this)});
            b.setPos(G.getPos("帮助界面", "退出按钮-默认"));
            this.addChild(b);
            this._buttons = [];
            this._texts = [];
            var c = G.getPos("帮助界面", "文字");
            b = G.Container.create();
            b.setPos(c);
            b.setOverflowHidden();
            this.addChild(b);
            this._hc = b;
            this._helpItemBg = G.Image.create({slice: G.getSlice("帮助-按钮点击")});
            this.addChild(this._helpItemBg);
            for (var e = 0; e < this.helpItem.length; e++) {
                var g = this.helpItem[e];
                b = G.ToggleButton.create({imgUp: G.getSlice(g + "-默认"),imgDown: G.getSlice(g + "-点击"),checkedImgUp: G.getSlice(g + 
                    "-点击"),checkedImgDown: G.getSlice(g + "-点击"),callback: function() {
                        this.father.change(this.index)
                    }});
                b.father = this;
                b.index = e;
                b.setPos(G.getPos("帮助界面", g + "-点击"));
                this.addChild(b);
                this._buttons[e] = b;
                b = G.DragPanel.create({});
                b.setWidth(c[2]);
                b.setHeight(c[3]);
                b.setVisible(!1);
                this._hc.addChild(b);
                var h = b;
                b = G.Text.create({});
                b.setWidth(c[2]);
                b.setLineSpacing(10);
                b.setColor("#663D27");
                b.setFontSize(22);
                b.setText(this.helpText[e]);
                h.setContent(b);
                this._texts[e] = h;
                delete h;
                delete g
            }
            this.repaint()
        },change: function(a) {
            for (var b = 
            this.helpItem.length - 1; 0 <= b; b--)
                this._buttons[b].setChecked(!1), this._texts[b].setVisible(!1);
            this._buttons[a].setChecked(!0);
            this._texts[a].setVisible(!0);
            this._helpItemBg.setPos([this._buttons[a].getX(), this._buttons[a].getY()], [20, 13])
        },addListener: function() {
        },removeListener: function() {
        },rebuild: function() {
        },hide: function() {
            this.setVisible(!1)
        },show: function() {
            this.setVisible(!0)
        },repaint: function() {
            this.change(0)
        }})
})();
(function() {
    GameV = G.Container.getClass().extend({init: function() {
            !this.keyNamePre && (this.keyNamePre = "GameV");
            this._super(arguments);
            this.setWidth(A.WIDTH);
            this.setHeight(A.HEIGHT);
            this.buildMainLayer();
            this.initPlayerViews()
        },repaint: function() {
            this.removeAllChildren();
            this.buildMainLayer(this);
            this.initPlayers()
        },show: function() {
            this.setVisible(!0)
        },hide: function() {
            this.setVisible(!1)
        },buildMainLayer: function() {
            U.log("【GameV】--创建主界面---");
            this.addChild(G.Image.create({slice: G.getSlice("主界面")}));
            var a = 
            G.Text.create({text: A.VERSION});
            a.setWidth(155);
            a.setColor("#fff");
            a.setTextAlign("right");
            a.setFontSize(12);
            a.setX(A.WIDTH - 160);
            a.setY(A.HEIGHT - 16);
            this.addChild(a);
            a = new PokerContainer;
            this.addChild(a);
            a.show();
            this.pokerContainer = a;
            a = new ToolBarV;
            this.addChild(a);
            var b = new SplashV({parentContainer: this,position: {x: Config.SPLASH_BUTTONS_POSITION[0],y: Config.SPLASH_BUTTONS_POSITION[1]}});
            b.hide();
            this.addChild(b);
            var c = new GambleContainer;
            this.addChild(c);
            var e = new ControlContainer;
            this.addChild(e);
            var g = new AnimationManager, h = new GameResultV;
            this.splashLayer = b;
            this.toolbarLayer = a;
            this.animation = g;
            this.gambleContainer = c;
            this.controlContainer = e;
            this.gameResultLayer = h;
            a = G.Clock.create({color: "#002a55"});
            a.play();
            a.setX(868);
            a.setY(298);
            this.addChild(a)
        },initPlayerViews: function() {
            U.log("【GameV】--添加主玩家视图--");
            var a = new PlayerV({idx: 0}), b = PlayerV.PTR_GAP * Engine.scale, c = A.HEIGHT - (PlayerV.PTR_GAP + PlayerV.PTR_HEIGHT + 70);
            a.setX(b);
            a.setY(c);
            this.mainPlayerV = a;
            this.addChild(a);
            U.log("【GameV】--添加右上角玩家视图--");
            var a = new PlayerV({idx: 1}), e = a.getVisiblePokerContainer(), b = A.WIDTH - (PlayerV.PTR_GAP + PlayerV.PTR_WIDTH), c = PlayerV.PTR_GAP * Engine.scale + 28;
            a.setX(b);
            a.setY(c);
            e.setX(A.WIDTH - 2 * PlayerV.PTR_GAP - e.getWidth());
            e.setY(PlayerV.PTR_GAP * Engine.scale + 28 + PlayerV.PORTRAIT_FRAME[3] + 30);
            this.rightConnerPlayerV = a;
            this.addChild(e);
            this.addChild(a);
            U.log("【GameV】--添加左上角玩家视图--");
            a = new PlayerV({idx: 2});
            e = a.getVisiblePokerContainer();
            b = PlayerV.PTR_GAP;
            c = PlayerV.PTR_GAP + 28;
            a.setX(b);
            a.setY(c);
            e.setX(2 * PlayerV.PTR_GAP);
            e.setY(PlayerV.PTR_GAP * Engine.scale + 28 + PlayerV.PORTRAIT_FRAME[3] + 30);
            this.leftConnerPlayerV = a;
            this.addChild(e);
            this.addChild(a)
        },getGameResultLayer: function() {
            return this.gameResultLayer
        },getToolbarLayer: function() {
            return this.toolbarLayer
        },getSplashLayer: function() {
            return this.splashLayer
        },getGambleContainer: function() {
            return this.gambleContainer
        },getAnimation: function() {
            return this.animation
        },getPokerContainer: function() {
            return this.pokerContainer
        },getControlContainer: function() {
            return this.controlContainer
        },
        getMainLayerV: function() {
            return this
        },getMainPlayerV: function() {
            return this.mainPlayerV
        },getRightConnerPlayerV: function() {
            return this.rightConnerPlayerV
        },getLeftConnerPlayerV: function() {
            return this.leftConnerPlayerV
        }})
})();
(function() {
    MainV = G.Container.getClass().extend({init: function(a, b) {
            !this.keyNamePre && (this.keyNamePre = "MainV");
            this._super(arguments);
            var c;
            c = new RoomV(a, b);
            c.setVisible(!0);
            this.addChild(c);
            this._roomV = c;
            c = new LoadingV;
            c.setVisible(!1);
            this.addChild(c);
            this._loadingV = c;
            Net.launchEngineCheck();
            this.addListener()
        },getGameV: function() {
            return this._gameV
        },getRoomV: function() {
            return this._roomV
        },rebuildGameView: function() {
            this._gameV && this.removeChild(this._gameV);
            var a = new GameV;
            a.hide();
            this.addChild(a);
            this._gameV = a;
            A.gameV = this._gameV
        },hide: function() {
            this.setVisible(!1)
        },show: function() {
            this.setVisible(!0)
        },repaint: function() {
            this.rebuildGameView()
        },_backToRoom: function() {
            U.log("【MainV】返回分区选择");
            Net.isConnected() && Net.disconnect();
            this._gameV && this._gameV.isVisible() && this._gameV.hide();
            this._loadingV.stop();
            this._roomV.show();
            U.Observer.notify(NT.HIDE_POPUPLAYER);
            Engine.stop()
        },_showGame: function() {
            U.log("【MainV】触发游戏界面显示");
            this.rebuildGameView();
            Engine.startup();
            setTimeout(U.delegate(function() {
                this._gameV.show();
                this._roomV.hide();
                this._loadingV.stop()
            }, this), 0)
        },_showLoading: function() {
            U.log("【MainV】触发载入界面显示")
        },_tableInfo: function() {
        },addListener: function() {
            U.log("【MainV】注册事件");
            U.Observer.addListener(NT.SHOW_HELP, this._showHelp, this);
            U.Observer.addListener(NT.BACK_TO_ROOM, this._backToRoom, this);
            U.Observer.addListener(NT.IN_TABLE, this._tableInfo, this);
            U.Observer.addListener(NT.SHOW_GAME, this._showGame, this);
            U.Observer.addListener(NT.SHOW_LOADING, this._showLoading, this)
        },removeListener: function() {
            U.Observer.removeListener(NT.SHOW_HELP, 
            this._showHelp);
            U.Observer.removeListener(NT.BACK_TO_ROOM, this._backToRoom);
            U.Observer.removeListener(NT.IN_TABLE, this._tableInfo);
            U.Observer.removeListener(NT.SHOW_GAME, this._showGame);
            U.Observer.removeListener(NT.SHOW_LOADING, this._showLoading)
        }})
})();
Utils = {printPokers: function(a) {
        for (var b = "[", c = 0; c < a.length; c++)
            b += a[c].point + ", ";
        U.log(b.substring(0, b.length - 2))
    },arrayContains: function(a, b) {
        if (!a && !b || 0 >= a.length && 0 >= b.length)
            return !0;
        if (!a || 0 >= a.length || !b || 0 >= b.length)
            return !1;
        for (var c = 0, e, g = 0, h = b.length; g < h; g++) {
            e = b[g];
            for (var i, j = 0; j < a.length; j++)
                if (i = a[j], e == i) {
                    c++;
                    break
                }
        }
        return c >= b.length ? !0 : !1
    },arrayNotContains: function(a, b) {
        if (!a && !b || 0 >= a.length && 0 >= b.length)
            return !1;
        if (!a || 0 >= a.length || !b || 0 >= b.length)
            return !0;
        for (var c, e = 0, g = b.length; e < 
        g; e++) {
            c = b[e];
            for (var h, i = 0; i < a.length; i++)
                if (h = a[i], c == h)
                    return !1
        }
        return !0
    },toLocalArray: function(a, b) {
        for (var c, e = 0; e < b.length; e++) {
            c = b[e];
            for (var g = 0, h; g < a.length; g++)
                if (h = a[g], c.point === h.point && c.type.value === h.type.value) {
                    b[e] = h;
                    break
                }
        }
    },toLocalArray_v2: function(a, b) {
        for (var c = 0, e, g; c < a.length; c++) {
            e = a[c];
            g = !1;
            for (var h, i = 0; i < b.length; i++)
                if (h = b[i], h.point === e.point && h.type.value === e.type.value) {
                    b[i] = e;
                    g = !0;
                    break
                }
            g || b.push(e)
        }
        b.sort(Poker.sortPoker)
    },ascStringLength: function(a) {
        var b = 0;
        if ("number" == 
        typeof a || "string" == typeof a)
            for (var a = a.toString(), c = 0; c < a.length; c++)
                b += 127 < a.charCodeAt(c) ? 2 : 1;
        return b
    },ascStringLeft: function(a, b) {
        var c = 0, e = 0;
        if ("number" == typeof a || "string" == typeof a) {
            a = a.toString();
            for (e = 0; e < a.length && !(c += 127 < a.charCodeAt(e) ? 2 : 1, c > b); e++)
                ;
        }
        return e
    }};
Emulator = {ob: U.Observer,intervalId: -1,players: [],lastThreePokers: [],currentTurn: -1,currentGamble: -1,landlord: -1,state: -1,multiple: 1967};
EM = window.EM || Emulator;
Emulator.init = function() {
    EM.intervalId = setInterval(Emulator.interval, 500);
    Emulator.ob.addListener(CMD.AUTHENTICATION, Emulator._authentication);
    Emulator.ob.addListener(CMD.CHANGE_TABLE_REQUEST, Emulator._changeTable);
    Emulator.ob.addListener(CMD.GAME_START_REQUEST, Emulator._gameStart);
    Emulator.ob.addListener(CMD.CALL_LANDLORD_REQUEST, Emulator._callLandlordRequestHandler);
    Emulator.ob.addListener(CMD.CARDS_REQUEST, Emulator._cardsRequestHandler);
    Emulator.ob.addListener(CMD.CHAT_REQUEST, Emulator._chatHandler);
    Emulator.ob.addListener(CMD.MANDATE_REQUEST, Emulator._mandateHandler)
};
Emulator.interval = function() {
    if (-1 != Emulator.state)
        if (Emulator.state == GameM.STATE_NONE)
            if (3 > Emulator.getPlayerCount())
                Emulator._playerInfo();
            else {
                if (3 > Emulator.getPlayerReadyCount()) {
                    var a = Emulator.getNoReadyPlayer();
                    if (a) {
                        var b = 0.5 < Math.random() ? a.flag : a.flag | PlayerM.FLAG_START_SHOW;
                        Emulator._playerStatusChange(a, PlayerM.STATE_READY, b);
                        return
                    }
                }
                if (3 <= Emulator.getPlayerReadyCount()) {
                    clearInterval(Emulator.intervalId);
                    Emulator.intervalId = -1;
                    Emulator._gameStatusChange(GameM.STATE_CALL_LANDLORD);
                    for (b = 
                    0; 3 > b; b++)
                        (a = Emulator.players[b]) && (a.state = PlayerM.STATE_GAME);
                    for (var a = Poker.newPack(), c, e, b = 0; 3 > b; b++)
                        e = EM.players[b], c = 17 * (2 + b), c = a.slice(c, c + 17), c.sort(Poker.sortPoker), e.pokers = c;
                    EM.players[0].pokers = Emulator._getCustomPokers();
                    EM.lastThreePokers = [new Poker(11, Poker.HEITAO), new Poker(11, Poker.MEIHUA), new Poker(9, Poker.HONGTAO)];
                    Emulator._ResCardsGiveCmd(EM.players[0].uid, EM.players[0].pokers, CMD.ENUM_MY_POKER);
                    EM.currentGamble = 0;
                    Emulator._toSomeoneGamble(EM.players[EM.currentGamble].uid, PlayerM.ACT_CALL_LANDLORD);
                    Emulator._sendBasicScore(100, 2);
                    Emulator._sendMultiple(EM.multiple)
                }
            }
        else
            Emulator.isOver() && Emulator._gameResult()
};
Emulator._getCustomPokers = function() {
    return [new Poker(14, Poker.FANGKUAI), new Poker(14, Poker.MEIHUA), new Poker(14, Poker.HONGTAO), new Poker(11, Poker.FANGKUAI), new Poker(10, Poker.FANGKUAI), new Poker(9, Poker.FANGKUAI), new Poker(9, Poker.MEIHUA), new Poker(5, Poker.FANGKUAI), new Poker(5, Poker.HEITAO), new Poker(4, Poker.HEITAO), new Poker(4, Poker.FANGKUAI), new Poker(4, Poker.HONGTAO)]
};
Emulator._getLoopNextPlayer = function(a) {
    return ++a % 3
};
Emulator._getPosByUid = function(a) {
    for (var b = 0; 3 > b; b++)
        if (EM.players[b].uid === a)
            return EM.players[b].pos
};
Emulator._cardsRequestHandler = function(a) {
    U.log("【Emulator】request  请求出牌, uid=" + a.uid);
    Net.toLocalPokers(a.cards);
    Emulator._getPosByUid(a.uid);
    setTimeout(Emulator._sendPlayCardsResponse, 1E3, a.uid, []);
    setTimeout("Emulator._toSomeonePlay(EM.players[EM.currentTurn].uid, PlayerM.ACT_THE_CARDS)", 2E3)
};
EM.toNext = function() {
    EM.currentTurn = EM._getLoopNextPlayer(EM.currentTurn);
    Emulator._toSomeonePlay(EM.players[EM.currentTurn].uid, PlayerM.ACT_THE_CARDS)
};
Emulator._callLandlordRequestHandler = function(a) {
    U.log("【Emulator】request  请求叫地主, uid=" + a.uid + ", action=" + a.action);
    switch (a.action) {
        case CMD.ACTION_NOCALL:
        case CMD.ACTION_NOGRAB:
        case CMD.ACTION_CALL:
        case CMD.ACTION_GRAB:
            Emulator._sendLast3PokersResponse(), EM.landlord = 0, Emulator._sendConfirmLandlordResponse(EM.players[EM.landlord].uid), Emulator._gameStatusChange(GameM.STATE_THE_CARDS), Emulator._sendPlayCardsResponse(EM.players[2].uid, [new Poker(4, Poker.HEITAO), new Poker(4, Poker.HONGTAO), new Poker(4, 
                Poker.FANGKUAI), new Poker(3, Poker.MEIHUA), new Poker(3, Poker.HONGTAO)]), EM.currentTurn = EM.landlord, Emulator._toSomeonePlay(EM.players[EM.currentTurn].uid, PlayerM.ACT_THE_CARDS)
    }
};
Emulator._chatHandler = function(a) {
    U.log("【Emulator】request  聊天");
    Net.request(CMD.CHAT_RESPONSE, {uid: Emulator.players[Emulator.MY_POS].uid,mtype: a.mtype,msg: a.msg})
};
Emulator._mandateHandler = function(a) {
    U.log("【Emulator】request  托管");
    Emulator._mandate(Emulator.players[Emulator.MY_POS], a.action)
};
Emulator._mandate = function(a, b) {
    Emulator._playerStatusChange(a, null, b == CMD.MANDATE ? a.flag | PlayerM.FLAG_MANAGED : a.flag & !PlayerM.FLAG_MANAGED)
};
Emulator._authentication = function() {
    U.log("【Emulator】request  验证");
    Emulator.state = GameM.STATE_NONE;
    Emulator._inTable()
};
Emulator._gameStart = function(a) {
    U.log("【Emulator】request  主玩家准备");
    var b = Emulator.players[Emulator.MY_POS];
    Emulator._playerStatusChange(Emulator.players[Emulator.MY_POS], PlayerM.STATE_READY, 1 == a.flag ? b.flag | PlayerM.FLAG_START_SHOW : b.flag)
};
Emulator._changeTable = function() {
    U.log("【Emulator】request  换桌请求");
    -1 == Emulator.intervalId && (Emulator.intervalId = setInterval(Emulator.interval, 1E3));
    Emulator._inTable();
    Emulator._playerStatusChange(Emulator.players[Emulator.MY_POS], 0, 0)
};
Emulator._inTable = function() {
    var a = Math.ceil(1E4 * Math.random());
    U.log("【Emulator】进入桌子  tid:1, uid:" + a);
    Emulator.players = [];
    Emulator.state = GameM.STATE_NONE;
    var a = {uid: a,name: "主玩家" + a,pos: Emulator.MY_POS,money1: Math.ceil(1E4 * Math.random()),winNum: 0,fleeNum: 0,failNum: 0,state: 0,icon: Math.floor(20 * Math.random()),sex: 1}, b = new PlayerM(a);
    Emulator.players[a.pos] = b;
    Net.request(CMD.TABLE_INFO_RESPONSE, {user: a})
};
Emulator._sendMsg = function(a) {
    U.log("【Emulator】服务器消息:", a);
    Net.request(CMD.SERVER_MSG_RESPONSE, {msgType: CMD.MSG_SYS,message: a,countdown: 10})
};
Emulator._sendMultiple = function(a) {
    U.log("【Emulator】发送倍数");
    Net.request(CMD.MULTIPLE_RESPONSE, {multipleType: CMD.MULTIPLE_SLOTS_RED_JOKER,total: a,multiple: 2})
};
Emulator._sendBasicScore = function(a, b) {
    U.log("【Emulator】发送底分");
    Net.request(CMD.GAME_CONFIG, {basicMultiple: a,basicScore: b})
};
Emulator._playerInfo = function() {
    var a = Math.ceil(1E4 * Math.random());
    U.log("【Emulator】玩家进入  uid:" + a);
    var a = {uid: a,name: "测试用户" + a,pos: Emulator.getEmptyPos(),money1: Math.ceil(1E4 * Math.random()),winNum: 0,fleeNum: 0,failNum: 0,state: 0,icon: Math.floor(20 * Math.random()),sex: 1}, b = new PlayerM(a);
    Emulator.players[a.pos] = b;
    Net.request(CMD.PLAYER_INFO_RESPONSE, {uid: 1,user: a})
};
Emulator._playerStatusChange = function(a, b, c) {
    if (a) {
        U.log("【Emulator】玩家准备  uid:" + a.uid);
        var e = {uid: a.uid};
        null != b && (a.state = e.state = b);
        null != c && (a.flag = e.flag = c);
        Net.request(CMD.PLAYER_STATUS_RESPONSE, e)
    }
};
Emulator._playerExit = function() {
    var a = Emulator.getRandomPlayer();
    null == Emulator.players[a.pos];
    a && Net.request(CMD.EXIT_TABLE_RESPONSE, {uid: a.uid})
};
Emulator._toSomeoneGamble = function(a, b) {
    U.log("【Emulator】玩家准备叫地主  uid:" + a);
    Net.request(CMD.CUR_ACTOR_RESPONSE, {uid: a,gameState: b})
};
Emulator._toSomeonePlay = function(a, b) {
    U.log("【Emulator】玩家准备出牌  uid:" + a);
    Net.request(CMD.CUR_ACTOR_RESPONSE, {uid: a,gameState: b,timeout: 99999})
};
Emulator._sendCallLandlordResponse = function(a, b) {
    U.log("【Emulator】玩家叫了地主  uid:" + a);
    Net.request(CMD.CALL_LANDLORD_RESPONSE, {uid: a,action: b,lastWinner: EM.players[0].uid})
};
Emulator._sendPlayCardsResponse = function(a, b) {
    U.log("【Emulator】玩家打出了牌  uid:" + a);
    Net.request(CMD.CARDS_RESPONSE, {uid: a,cards: Net.toNetCards(b),lastWinner: a})
};
Emulator._sendConfirmLandlordResponse = function(a) {
    U.log("【Emulator】确认地主  uid:" + a);
    Net.request(CMD.LANDLORD_RESPONSE, {uid: a})
};
Emulator._sendLast3PokersResponse = function() {
    U.log("【Emulator】发3张底牌");
    Net.request(CMD.CARDS_GIVE_RESPONSE, {cards: Net.toNetCards(EM.lastThreePokers),giveType: CMD.ENUM_BOTTOM_POKER})
};
Emulator._ResCardsGiveCmd = function(a, b, c) {
    U.log("【Emulator】发牌给玩家  uid:" + a);
    Net.request(CMD.CARDS_GIVE_RESPONSE, {uid: a,cards: Net.toNetCards(b),giveType: c})
};
Emulator._gameStatusChange = function(a) {
    Net.request(CMD.GAME_STATUS_RESPONSE, {uid: 1,gameState: a})
};
Emulator._gameResult = function() {
    for (var a = 0; 3 > a; a++) {
        var b = Emulator.players[a];
        b && (b.state = PlayerM.STATE_NONE)
    }
    Net.request(CMD.GAME_RESULT_RESPONSE, {uid: 1,result: Emulator.myWin() ? 1 : 2,multiples: [15, 10, 10, 2, 20, 1, 1],data: [{uid: Emulator.players[Emulator.MY_POS].uid,name: "张三",flag: GameResultItemM.FLAG_FLEE | GameResultItemM.FLAG_LIMIT,money1: -6522,totalMoney1: -1E4}, {uid: 2,name: "李四A",flag: GameResultItemM.FLAG_FLEE | GameResultItemM.FLAG_LIMIT,money1: 12345,totalMoney1: 1E4}, {uid: 3,name: "王五阿王五阿",flag: GameResultItemM.FLAG_FLEE | 
                GameResultItemM.FLAG_LIMIT,money1: -88888888,totalMoney1: 1E4}]})
};
Emulator.getPlayerCount = function() {
    for (var a = 0, b = 0; 3 > b; b++)
        Emulator.players[b] && a++;
    return a
};
Emulator.getPlayerReadyCount = function() {
    for (var a = 0, b = 0; 3 > b; b++) {
        var c = Emulator.players[b];
        c && 1 == c.state && a++
    }
    return a
};
Emulator.getEmptyPos = function() {
    for (var a = [0, 1, 2], b = 0; 3 > b; b++) {
        var c = Emulator.players[b];
        c && (a[c.pos] = -1)
    }
    for (b = 0; 3 > b; b++)
        if (-1 != a[b])
            return a[b];
    return -1
};
Emulator.getNoReadyPlayer = function() {
    for (var a = 0; 3 > a; a++) {
        var b = Emulator.players[a];
        if (b && b.state != PlayerM.STATE_READY && b != Emulator.players[Emulator.MY_POS])
            return b
    }
    return null
};
Emulator.getRandomPlayer = function() {
    for (var a = Math.floor(2 * Math.random()), b = 0, c = 0; 3 > c; c++) {
        var e = Emulator.players[c];
        if (e && e != Emulator.players[Emulator.MY_POS])
            if (b < a)
                b++;
            else
                return e
    }
    return null
};
Emulator.isOver = function() {
    for (var a = 0; 3 > a; a++) {
        var b = Emulator.players[a];
        if (b && b.pokers && 0 == b.pokers.length)
            return !0
    }
    return !1
};
Emulator.myWin = function() {
    return Emulator.players[Emulator.MY_POS].pokers && 0 == Emulator.players[Emulator.MY_POS].pokers.length
};
Emulator.MY_POS = 0;
Config.DEBUG_EMULATOR && Emulator.init();
A.showNotice = function() {
    this._noticeV = new H.NoticeWidget;
    A.stage.addChild(this._noticeV);
    this._noticeV.showNotice({width: A.WIDTH,bgOpacity: 0.3})
};
A.pushV;
A.showPush = function(a) {
    a || (a = 0);
    var b = 2 * A.WIDTH / 3;
    A.pushV || (A.pushV = new H.PushWidget);
    A.pushV.setX((A.WIDTH - b) / 2);
    A.pushV.setY((A.HEIGHT - 28) / 2);
    A.stage.addChild(A.pushV);
    A.pushV.showPush({width: b,fontSize: 24,bgOpacity: 0.3,isFirst: a})
};
A.getReconn = function(a, b) {
    if (!A.DEBUG_API) {
        var c = new TipWithCountdownV({text: Msg.NET_REQUEST,onCancel: function() {
                A.popup.hide(this)
            }});
        A.popup.show(c, {noRemove: !0});
        H.Api.getReconnect(function(e) {
            e.success && e.roomId && a && a.call(b || window, e.roomId);
            A.popup.hide(c)
        }, this)
    }
};
(function() {
    G.initPS(A.RES, Position, Slice);
    Engine.initPoker();
    A.stage = G.initCanvas({parent: A.ROOT,width: A.WIDTH,height: A.HEIGHT,fps: Config.FPS,style: {position: "absolute",zIndex: "999"}});
    H.Widget.setGlobalConfig({resources: A.PUB_RES,url: A.SERVER_URL,gameId: A.APP_ID,getAvatarFunc: A.getAvatar,stageWidth: A.WIDTH,stageHeight: A.HEIGHT});
    A.mainV = new MainV(function(a) {
        U.log("【main】进入游戏方法");
        if (a.open) {
            var b = new TipWithCountdownVO(Msg.NET_REQUEST, null, 20), c = new TipWithCountdownV(b);
            A.popup.show(c, {noRemove: !0});
            H.Api.enterGame(a.id, function(a) {
                a.success ? (Net.url = a.gameServerUrl, U.Observer.notify(NT.ENTER_GAME, U.delegate(function() {
                    U.Observer.notify(NT.HIDE_POPUPLAYER)
                }, this))) : (a = new Tip1V({text: a.error.message}), A.popup.show(a));
                A.popup.hide(c)
            }, this)
        } else
            c = new Tip1V({text: Msg.ROOM_NOT_OPEN}), A.popup.show(c)
    });
    A.mainV.hide();
    A.stage.addChild(A.mainV);
    A.fadeTipsLayer = G.Container.create();
    A.stage.addChild(A.fadeTipsLayer);
    A.popupLayer = G.Container.create();
    A.stage.addChild(A.popupLayer);
    FadeTipsManager.init(A.popupLayer);
    A.popup = new G.PopupManager({parent: A.popupLayer,width: A.WIDTH,height: A.HEIGHT});
    G.SoundManager.init({id: A.APP_ID,musics: Music});
    A.tips = new Tip1V(new Tip1VO(""));
    !window.IS_AC && A.setLoadingProgress(99);
    H.Api.init({url: A.SERVER_URL,gameId: A.APP_ID}, function(a) {
        a.success ? (Engine.uid = Number(a.uid), Net.ua = a.statParam.ua, Net.ch = a.statParam.ch, Net.nt = a.statParam.nt, Net.ptype = a.statParam.ptype, A.removeLoading(), A.mainV.show(), A.showRoom(), a = A.mainV.getRoomV(), A.getReconn(a.login, a)) : (U.log("初始化接口失败，原因：" + 
        a.error.message), a = new Tip1V({text: a.error.message,onOk: function() {
                A.exitGame()
            }}), A.popup.show(a, {noRemove: !0}))
    }, this);
    A.showRoom = function() {
        A.fadeTipsLayer.removeAllChildren();
        A.popupLayer.removeAllChildren();
        U.Observer.notify(NT.BACK_TO_ROOM)
    };
    A.exitGame = function() {
        !window.IS_AC && A.embedded ? window.parent.postMessage(JSON.stringify({action: "exit"}), "*") : window.IS_AC ? window.open(A.getQueryURL("backUrl"), "_blank") : window.location.href = A.BACK_URL
    };
    A.alertHandler = function(a) {
        if (a) {
            var b, c, e;
            b = [];
            0 < 
            a.countdown && (c = a.countdown);
            var g = function() {
                A.exit(AlertVO.ACTION_NONE)
            }, h = function() {
                U.Observer.notify(NT.BACK_TO_ROOM)
            };
            switch (a.action) {
                case CMD.SERVER_MSG_CALLBACK_BACKTOHALL:
                    e = g;
                    break;
                case CMD.SERVER_MSG_CALLBACK_BACKTOROOM:
                    e = h;
                    break;
                default:
                    e = h
            }
            switch (a.code) {
                case AlertVO.CODE_BACK_TO_ROOM:
                    h();
                    break;
                case AlertVO.CODE_QUIT:
                    g();
                    break;
                case AlertVO.CODE_SUCCESS:
                    break;
                case AlertVO.CODE_SERVER_CLOSE:
                    b.push(Msg.CODE_SERVER_CLOSE);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_IN_GAME:
                    b.push(Msg.CODE_IN_GAME);
                    break;
                case AlertVO.CODE_KICK:
                    b.push(Msg.CODE_KICK);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_SERVER_FULL:
                    b.push(Msg.CODE_SERVER_FULL);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_INVALID_USER:
                    b.push(Msg.CODE_INVALID_USER);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_NOT_ENOUGH_MONEY:
                    b.push(Msg.CODE_NOT_ENOUGH_MONEY);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_SYS_ERROR:
                    b.push(Msg.CODE_SYS_ERROR);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_NEW_KICK_OLD:
                    b.push(Msg.CODE_NEW_KICK_OLD);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_ESCAPE:
                    Net.disconnect();
                    break;
                case AlertVO.CODE_LIUJU_DISMISS:
                    b.push(Msg.CODE_LIUJU_DISMISS);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_LIUJU:
                    FadeTipsManager.show({text: Msg.CODE_LIUJU});
                    break;
                case AlertVO.CODE_TO_LONG_TO_START:
                    b.push(Msg.CODE_TO_LONG_TO_START);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_KICK_SELF:
                    b.push(Msg.CODE_KICK_SELF);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_KICK_SERVER:
                    b.push(Msg.CODE_KICK_SERVER);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_KICK_CLOSE:
                    b.push(Msg.CODE_KICK_CLOSE);
                    Net.disconnect();
                    break;
                case AlertVO.CODE_WRONG_POKERS:
                    break;
                default:
                    e = h
            }
            a.msgs && 0 < a.msgs.length && (b = b.concat(a.msgs));
            A.popup.hide(A.tips);
            0 < b.length && (a = new Tip1VO(b.join(""), e, c), A.tips = new Tip1V(a), setTimeout(function() {
                A.popup.show(A.tips, {posConst: A.popup.POS_CENTER,noRemove: !0})
            }, 100))
        }
    };
    U.Observer.addListener(NT.ALERT, A.alertHandler, this);
    U.Observer.addListener(NT.HIDE_POPUPLAYER, function() {
        A.popup.hideAll()
    });
    U.Observer.addListener(NT.SERVER_MSG, function(a) {
        if (a)
            switch (A.popup.hide(A.tips), a.msgType) {
                case CMD.MSG_SYS:
                    var b = {};
                    b.text = a.message;
                    0 < a.countdown && 
                    (b.countdown = a.countdown);
                    a.action === CMD.SERVER_MSG_CALLBACK_BACKTOHALL && (b.onOk = A.exit);
                    a.action === CMD.SERVER_MSG_CALLBACK_BACKTOROOM && (b.onOk = A.showRoom);
                    A.tips = new Tip1V(b);
                    a.action === CMD.SERVER_MSG_CALLBACK_BACKTOHALL || a.action === CMD.SERVER_MSG_CALLBACK_BACKTOROOM ? A.popup.show(A.tips, {noRemove: !0}) : A.popup.show(A.tips)
            }
    }, this);
    A.exit = function(a) {
        a == AlertVO.ACTION_AREA_LIST ? U.Observer.notify(NT.BACK_TO_ROOM) : (Net.disconnect(), A.exitGame())
    };
    A.showNotice()
})();
