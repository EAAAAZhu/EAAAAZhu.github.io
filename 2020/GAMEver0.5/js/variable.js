var oGameStart = document.getElementById('GameStart');
var oGameBox = document.getElementById('yxbox');
var oMainMenu = document.getElementById('MainMenu');
var oStatu = document.getElementById('Statu');
var oEquipment = document.getElementById('Equipment');
var oEqList = oEquipment.getElementsByTagName('ul')[0];
var oMessage = document.getElementById('Messages');
var oGetItem = document.getElementById('getItem');
var oEquipTips = document.getElementById('equipTips');
var oGameover = document.getElementById('gameover');
var oHeimu = document.getElementById('HeiMu');
var oBody = document.getElementsByTagName('body')[0];
var oMonsterMessage = document.getElementById('monsterMessage');
var oMonsterMessageList = oMonsterMessage.getElementsByTagName('ul')[0];
var oGameTitle = document.getElementById('GameTitle');
var oHeimu = document.getElementById('HeiMu');
var oEnd = document.getElementById('endTxt');
var oGetItem = document.getElementById('getItem');
var can = document.getElementById('canvas01');
var ctx = can.getContext("2d");
var w = can.width = window.innerWidth;
var h = can.height = window.innerHeight;


window.onresize = function() {
	var w = can.width = window.innerWidth;
	var h = can.height = window.innerHeight;
}

var oBgSound01 = document.getElementById('bgSound01');
var oBgSoundOp = document.getElementById('bgSoundOP');
var oBgSound=document.getElementById('bgSound');
oBgSoundOp.play();
oBgSoundOp.loop='loop';

var aItemMenu = oMainMenu.getElementsByTagName('input');
var aEquip = oEqList.getElementsByTagName('li');
var aBtnInEquip = oEquipment.getElementsByTagName('input');
var aBtnInStatu = oStatu.getElementsByTagName('input');
var aMonsterMessageList = oMonsterMessageList.getElementsByTagName('li');

var key_press = {};
var oPLeft = false;
var oPRight = false;
var oPUp = false;
var oPDown = false;

var baoxiang = {};
var boxsPos = {};

var sucLen = 0;
//状态
var oLv = document.getElementById('lv');
var oHp = document.getElementById('hp');
var oMhp = document.getElementById('mhp');
var oMp = document.getElementById('mp');
var oMmp = document.getElementById('mmp');
var oAtk = document.getElementById('atk');
var oDef = document.getElementById('def');
var oExp = document.getElementById('exp');
var oNexp = document.getElementById('nexp');

//装备
var getIceShoes = false;
var getYinJian = false;
var getBaohumo = false;
var getMonsterBook = true;
var getHa = true;

//人物
var PersonStatu = {
	HP: 200,
	MHP: 200,
	MP: 100,
	MMP: 100,
	ATK: 20,
	DEF: 10,
	LV: 1,
	EXP: 0,
	UPNEEDEXP: 100,
	UPEXP: 100
};
//怪物
var monsterList = {
	monster01: {
		HP: 20,
		ATK: 20,
		DEF: 10,
		EXP: 10
	}
};