GameBox = {
	oP: {},
	PersonStatu: {
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
	},
	target: {},
	boxs: [],
	aMap: [{
			map: [
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
			],
			BoxPos: [{
				x: 5,
				y: 5
			}, ],
			pPos: {
				x: 10,
				y: 16
			}
		},
		{
			map: [
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
			],
			BoxPos: [{
				x: 5,
				y: 5
			}, ],
			pPos: {
				x: 10,
				y: 16
			}
		}
	],

	setPos: function(obj, x, y) {
		obj.x = x;
		obj.y = y;
		obj.style.left = obj.x * 32 + 'px';
		obj.style.top = obj.y * 32 + 'px';
	},

	getPos: function(obj) {
		return {
			x: obj.x,
			y: obj.y
		}
	},

	createMap: function(gk) {
		document.title = '当前第' + (this.num + 1) + '关';
		this.colsNum = Math.sqrt(gk.map.length);
		this.oParent.style.width = this.colsNum * 32 + 'px';
		for(var i = 0; i < gk.map.length; i++) {
			var oLi = document.createElement('li');
			oLi.className = 'pos' + gk.map[i];
			this.oParent.appendChild(oLi);
			if(gk.map[i] == 2) {
				this.target[oLi.offsetLeft + '.' + oLi.offsetTop] = '1';
			}
			if(gk.map[i] == 3) {
				this.target[oLi.offsetLeft + '.' + oLi.offsetTop] = '2';
			}
		}
		this.createMan(gk);
	},

	createMan: function(gk) {
		this.oP = document.createElement('div');
		this.oP.className = 'person2';
		this.setPos(this.oP, gk.pPos.x, gk.pPos.y);
		this.oParent.appendChild(this.oP);
		this.createBox(gk);
	},

	createBox: function(gk) {
		for(var i = 0; i < gk.BoxPos.length; i++) {
			var oDiv = document.createElement('div');
			oDiv.className = 'box';
			oDiv.style.left = gk.BoxPos[i].x * 32 + 'px';
			oDiv.style.top = gk.BoxPos[i].y * 32 + 'px';
			this.oParent.appendChild(oDiv);
			this.boxs.push(oDiv);
		}
	},

	personRun: function(iJson) {
//		var gk = this.aMap[this.num];
//		var map = gk.map;
		var x = this.oP.x + iJson.x;
		var y = this.oP.y + iJson.y;
		var bx = x + iJson.x;
		var by = y + iJson.y;
		if(this.aMap[this.num].map[this.colsNum * y + x] == 1) {
			return;
		}
		this.setPos(this.oP, x, y);
		for(var i = 0; i < this.boxs.length; i++) {
			if(this.impactCheck(this.oP, this.boxs[i])) {
				if(this.aMap[this.num].map[this.colsNum * by + bx] == 1) {
					this.setPos(this.oP, x - iJson.x, y - iJson.y);
					return;
				}
				this.setPos(this.boxs[i], bx, by);
				for(var j = 0; j < this.boxs.length; j++) {
					if(this.boxs[i] != this.boxs[j] && this.impactCheck(this.boxs[i], this.boxs[j])) {
						this.setPos(this.oP, x - iJson.x, y - iJson.y);
						this.setPos(this.boxs[i], bx - iJson.x, by - iJson.y);
						this.aMap[this.num].BoxPos
						return;
					}
				}
				//				break;
			}
			if(this.target[this.oP.offsetLeft + '.' + this.oP.offsetTop] == 1) { //过关判定
				this.nextLevel();
			}
			if(this.target[this.oP.offsetLeft + '.' + this.oP.offsetTop] == 2) { //过关判定
				this.prevLevel();
			}
		}
	},

	nextLevel: function() {
		this.target = [];
		this.boxs = [];
		this.oParent.innerHTML = '';
		this.num++;
		if(!this.aMap[this.num]) {
			alert('恭喜您已通关！！！');
			return false;
		}
		this.createMap(this.aMap[this.num]);
		this.setPos(this.oP, 15, 3);
	},

	prevLevel: function() {
		this.target = [];
		this.boxs = [];
		this.oParent.innerHTML = '';
		this.num--;
		this.createMap(this.aMap[this.num]);
	},

	impactCheck: function(obj1, obj2) {
		var l1 = obj1.offsetLeft;
		var t1 = obj1.offsetTop;
		var r1 = l1 + obj1.offsetWidth;
		var b1 = t1 + obj1.offsetHeight;
		var l2 = obj2.offsetLeft;
		var t2 = obj2.offsetTop;
		var r2 = l2 + obj2.offsetWidth;
		var b2 = t2 + obj2.offsetHeight;
		if(b1 <= t2 || l1 >= r2 || t1 >= b2 || r1 <= l2) {
			return false;
		} else {
			return true;
		}
	},

	Fight: function() {
		this.PersonStatu.HP -= 10;
	},

	ini: function(oParent, num) {
		this.oParent = oParent;
		this.num = num;
		var gk = this.aMap[num];
		this.createMap(gk);
		var self = this;
		keyFun(self);
		var oGameStart = document.getElementById('GameStart');
		var oGameBox = document.getElementById('yxbox');
		var oMainMenu = document.getElementById('MainMenu');
		var aItemMenu = oMainMenu.getElementsByTagName('input');
		var oStatu = document.getElementById('Statu');
		var aBtnInStatu = oStatu.getElementsByTagName('input');

		var oLv = document.getElementById('lv');
		var oHp = document.getElementById('hp');
		var oMhp = document.getElementById('mhp');
		var oMp = document.getElementById('mp');
		var oMmp = document.getElementById('mmp');
		var oAtk = document.getElementById('atk');
		var oDef = document.getElementById('def');
		var oExp = document.getElementById('exp');
		var oNexp = document.getElementById('nexp');

		this.Fight();
		oGameStart.onclick = function() {
			oGameBox.style.display = 'block';
			GameBox.ini(oGameBox, 0);
			this.parentNode.style.display = 'none';
		}

		aItemMenu[0].onclick = function() {
			this.parentNode.style.display = 'none';
		}
		aItemMenu[1].onclick = function() {
			this.parentNode.style.display = 'none';
			oStatu.style.display = 'block';
			oLv.innerHTML = self.PersonStatu.LV;
			oHp.innerHTML = self.PersonStatu.HP;
			oMhp.innerHTML = '/' + self.PersonStatu.MHP;
			oMp.innerHTML = self.PersonStatu.MP;
			oMmp.innerHTML = '/' + self.PersonStatu.MMP;
			oAtk.innerHTML = self.PersonStatu.ATK;
			oDef.innerHTML = self.PersonStatu.DEF;
			oExp.innerHTML = self.PersonStatu.EXP;
			oNexp.innerHTML = '/' + self.PersonStatu.UPNEEDEXP;
		}
		aItemMenu[4].onclick = function() {
			history.go(0);
			oGameStart.style.display = 'none';
		}
		aBtnInStatu[0].onclick = function() {
			this.parentNode.parentNode.parentNode.style.display = 'none';
			oMainMenu.style.display = 'block';
		}
		aBtnInStatu[1].onclick = function() {
			this.parentNode.parentNode.parentNode.style.display = 'none';
		}

	}

}