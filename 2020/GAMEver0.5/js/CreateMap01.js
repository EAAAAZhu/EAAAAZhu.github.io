GameBox = {
	oP: {},

	bPos: {},
	target: {},
	aMap: [{ //第一关地图
			map: [
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 1, 0, 1,
				1, 0, 1, 0, 0, 0, 1, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 4, 1, 4, 4, 0, 1,
				1, 0, 1, 0, 1, 0, 1, 0, 0, 4, 4, 4, 1, 4, 4, 4, 0, 1,
				1, 1, 0, 0, 0, 0, 0, 1, 0, 4, 4, 1, 4, 1, 4, 4, 0, 1,
				1, 0, 0, 0, 1, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 1,
				1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4, 4, 1, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
			],
			BoxPos: [{
				x: 1,
				y: 2
			}, {
				x: 3,
				y: 2
			}, {
				x: 5,
				y: 2
			}, {
				x: 7,
				y: 2
			}, {
				x: 4,
				y: 3
			}, {
				x: 1,
				y: 4
			}, {
				x: 3,
				y: 4
			}, {
				x: 5,
				y: 4
			}, {
				x: 7,
				y: 4
			}, {
				x: 3,
				y: 6
			}, {
				x: 5,
				y: 6
			}],
			Equip01Pos: [{
				x: 4,
				y: 1
			}],
			Equip01: [],
			boxs: [],
			pPos: {
				x: 1,
				y: 16
			}
		},
		{ //第二关地图
			map: [
				10, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				10, 10, 10, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				10, 1, 1, 1, 1, 1, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 1,
				10, 1, 0, 1, 5, 4, 4, 4, 4, 1, 4, 4, 4, 1, 4, 4, 1, 1,
				1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 1, 4, 1,
				1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1,
				1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1,
				1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 1, 4, 4, 1,
				1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1,
				1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1,
				1, 1, 4, 1, 1, 4, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
				1, 4, 4, 5, 1, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
				1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1,
				1, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
				1, 3, 4, 4, 1, 4, 1, 4, 4, 1, 4, 4, 1, 1, 1, 5, 4, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
			],
			BoxPos: [{
				x: 4,
				y: 1
			}, {
				x: 2,
				y: 3
			}, {
				x: 2,
				y: 5
			}, {
				x: 3,
				y: 10
			}, {
				x: 8,
				y: 7
			}, {
				x: 16,
				y: 16
			}, {
				x: 7,
				y: 2
			}, {
				x: 16,
				y: 6
			}],
			Equip01Pos: [],
			Equip01: [],
			boxs: [],
			pPos: {}
		}, { //第三关地图
			map: [
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 10, 12, 12, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 11, 2, 1,
				1, 1, 1, 1, 11, 1, 10, 10, 10, 10, 10, 10, 10, 1, 10, 1, 1, 1,
				1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 10, 10, 1, 10, 1, 1, 1,
				1, 1, 1, 1, 11, 1, 10, 10, 10, 10, 10, 10, 1, 1, 10, 10, 10, 1,
				1, 1, 1, 1, 11, 1, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1,
				1, 1, 1, 1, 12, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1,
				1, 10, 10, 10, 10, 10, 10, 10, 10, 1, 11, 1, 10, 10, 10, 1, 1, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1,
				1, 10, 1, 10, 1, 10, 1, 10, 1, 1, 11, 1, 1, 10, 1, 10, 1, 1,
				1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1,
				1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1,
				1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1,
				1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1,
				1, 1, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1,
				1, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1,
				1, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
			],
			BoxPos: [],
			Equip01Pos: [{
				x: 1,
				y: 1
			}],
			Equip01: [],
			boxs: [],
			pPos: {}
		}, { //第四关地图
			map: [
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 14, 10, 2, 1,
				1, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 1, 1,
				1, 10, 11, 10, 13, 10, 11, 10, 12, 10, 11, 10, 12, 10, 11, 10, 1, 1,
				1, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 1, 1,
				1, 10, 11, 10, 11, 10, 13, 10, 12, 10, 11, 10, 12, 10, 11, 10, 1, 1,
				1, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 1, 1,
				1, 10, 13, 10, 11, 10, 11, 10, 12, 10, 13, 10, 12, 10, 11, 10, 1, 1,
				1, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 1, 1,
				1, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 12, 10, 11, 10, 1, 1,
				1, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 1, 1,
				1, 10, 11, 10, 12, 10, 11, 10, 12, 10, 11, 10, 12, 10, 11, 10, 1, 1,
				1, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 1, 1,
				1, 10, 11, 10, 12, 10, 13, 10, 12, 10, 11, 10, 12, 10, 11, 10, 1, 1,
				1, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 1, 1,
				1, 10, 13, 10, 12, 10, 11, 10, 12, 10, 11, 10, 12, 10, 11, 10, 1, 1,
				1, 3, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
			],
			BoxPos: [],
			Equip01Pos: [{
				x: 1,
				y: 1
			}],
			Equip01: [],
			boxs: [],
			pPos: {}
		},
	],

	setPos: function(obj, x, y) { //设置位置
		obj.x = x;
		obj.y = y;
		//		startMove(obj,{left:obj.x * 32,top:obj.y * 32},function(){},10);
		obj.style.left = obj.x * 32 + 'px';
		obj.style.top = obj.y * 32 + 'px';
	},

	getPos: function(obj) { //获取位置
		return {
			x: obj.x,
			y: obj.y
		}
	},

	createMap: function(gk) { //创建地图
		oGameTitle.innerHTML = '神秘领域第' + (this.num + 1) + '关';
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
			if(gk.map[i] == 5) {
				this.target[oLi.offsetLeft + '.' + oLi.offsetTop] = '3';
			}
		}

		this.createMan(gk);
	},

	//	createObj:function(gk,objs,objpos,classname){
	//		for(var i = 0; i < gk[objpos].length; i++) {
	//			var oDiv = document.createElement('div');
	//			oDiv.className = classname;
	//			oDiv.style.left = gk[objpos].x * 32 + 'px';
	//			oDiv.style.top = gk[objpos].y * 32 + 'px';
	//			this.oParent.appendChild(oDiv);
	//			objs.push(oDiv);
	//		}
	//	},

	createMan: function(gk) { //创建主角
		this.oP = document.createElement('div');
		this.oP.className = 'person4';
		this.setPos(this.oP, gk.pPos.x, gk.pPos.y);
		this.oParent.appendChild(this.oP);
		this.createBox(gk);
		this.createEquip01(gk);
		//		timer=setInterval(function(){GameBox.createItem01(gk)},30);
	},

	createBox: function(gk) { //添加可推动石块
		for(var i = 0; i < gk.BoxPos.length; i++) {
			var oDiv = document.createElement('div');
			oDiv.className = 'box';
			oDiv.style.left = gk.BoxPos[i].x * 32 + 'px';
			oDiv.style.top = gk.BoxPos[i].y * 32 + 'px';
			this.oParent.appendChild(oDiv);
			this.aMap[this.num].boxs.push(oDiv);
		}
	},

	createEquip01: function(gk) { //添加宝箱
		for(var i = 0; i < gk.Equip01Pos.length; i++) {
			var oDiv = document.createElement('div');
			oDiv.className = 'equip01';
			if(getIceShoes && this.num == 0) {
				oDiv.className = 'equip02';
			}
			if(getYinJian && this.num == 2) {
				oDiv.className = 'equip02';
			}
			if(getBaohumo && this.num == 3) {
				oDiv.className = 'equip02';
			}
			oDiv.style.left = gk.Equip01Pos[i].x * 32 + 'px';
			oDiv.style.top = gk.Equip01Pos[i].y * 32 + 'px';
			baoxiang[this.num] = oDiv;
			this.oParent.appendChild(oDiv);
			this.aMap[this.num].Equip01.push(oDiv);
		}
	},

	personRun: function(iJson) { //人物运动
		var x = this.oP.x + iJson.x; //人物位置坐标参数
		var y = this.oP.y + iJson.y;
		var bx = x + iJson.x; //石块位置坐标参数
		var by = y + iJson.y;

		//		if(this.aMap[this.num].Equip01Pos[i]) {
		for(var i = 0; i < this.aMap[this.num].Equip01.length; i++) { //开宝箱
			if(this.aMap[this.num].Equip01Pos[i].x == x && this.aMap[this.num].Equip01Pos[i].y == y) {
				var This = this;
				if(this.aMap[this.num].Equip01[i]) {
					onkeyup = function(ev) {
						var oEvent = ev || event;
						if(oStatu.style.display == 'block' || oEquipment.style.display == 'block' || oMessage.style.display == 'block' || oGetItem.style.display == 'block') {} else if(This.aMap[This.num].Equip01Pos[i]) {
							if((This.oP.x == This.aMap[This.num].Equip01Pos[i].x + 1 && This.oP.className == 'person2') || (This.oP.x == This.aMap[This.num].Equip01Pos[i].x - 1 && This.oP.className == 'person4') || (This.oP.y == This.aMap[This.num].Equip01Pos[i].y + 1 && This.oP.className == 'person1') || (This.oP.y == This.aMap[This.num].Equip01Pos[i].y - 1 && This.oP.className == 'person3')) {
								if(oEvent.keyCode == 90) {

									if(This.num == 0) {
										if(!getIceShoes) {

											baoxiang[This.num].className = 'equip02';
											var txt = '获得宝贝--火焰披风';
											getTip(oGetItem, txt, 10, 10);
											This.aMap[This.num].Equip01[i] = false;
											getIceShoes = true;
										} else if(getIceShoes) {
											baoxiang[This.num].className = 'equip02';
											var innerstr = '<span class="Face01"></span><div class="MesTxt">这个宝箱是空的！！</div>'
											getTip(oMessage, innerstr, 30, 10);
										}
									}
									if(This.num == 2) {
										if(!getYinJian) {

											baoxiang[This.num].className = 'equip02';
											var txt = '获得宝贝--银剑';
											getTip(oGetItem, txt, 10, 10);
											This.aMap[This.num].Equip01[i] = false;
											getYinJian = true;
										} else if(getYinJian) {
											baoxiang[This.num].className = 'equip02';
											var innerstr = '<span class="Face01"></span><div class="MesTxt">这个宝箱是空的！！</div>'
											getTip(oMessage, innerstr, 30, 10);
										}
									}
									if(This.num == 3) {
										if(!getBaohumo) {

											baoxiang[This.num].className = 'equip02';
											var txt = '获得宝贝--保护膜';
											getTip(oGetItem, txt, 10, 10);
											This.aMap[This.num].Equip01[i] = false;
											getBaohumo = true;
										} else if(getBaohumo) {
											baoxiang[This.num].className = 'equip02';
											var innerstr = '<span class="Face01"></span><div class="MesTxt">这个宝箱是空的！！</div>'
											getTip(oMessage, innerstr, 30, 10);
										}
									}
								}
							}
						}
					}

				}
				this.setPos(this.oP, x - iJson.x, y - iJson.y);
				return;
			}
		}
		//		}

		if(this.aMap[this.num].map[this.colsNum * y + x] == 4) { //冰块地形
			if(!getIceShoes) {
				PersonStatu.HP -= 10;
				var txt = '受到10点伤害';
				getTip(oGetItem, txt, 10, 10);
			}

			IsGameover();

		}
		//		if(this.aMap[this.num].map[this.colsNum * y + x] == 5) {														//测试用
		//			this.target = [];
		//			this.aMap[this.num].boxs = [];
		//			this.aMap[this.num].Equip01 = [];
		//			this.oParent.innerHTML = '';
		//			this.aMap[this.num].map[this.colsNum * y + x + 1] = 2;
		//			this.createMap(this.aMap[this.num]);
		//		}
		if(this.aMap[this.num].map[this.colsNum * y + x] == 1) { //墙体
			return;
		}
		if(this.aMap[this.num].map[this.colsNum * y + x] == 11) { //怪物1
			var monster01 = {
				HP: 20,
				ATK: 15,
				DEF: 10,
				EXP: 9
			};
			//			obj = monsterList.monster01;
			this.Fight(monster01);

			IsGameover();
			if(PersonStatu.HP > 0) {
				IsLevelUp();
				var str = this.oP.className;
				this.target = [];
				this.aMap[this.num].boxs = [];
				this.aMap[this.num].Equip01 = [];
				this.oParent.innerHTML = '';
				this.aMap[this.num].map[this.colsNum * y + x] = 10;
				this.createMap(this.aMap[this.num]);
				this.oP.className = str;
			}
		}
		if(this.aMap[this.num].map[this.colsNum * y + x] == 12) { //怪物2
			var monster01 = {
				HP: 30,
				ATK: 50,
				DEF: 5,
				EXP: 30
			};
			this.Fight(monster01);

			IsGameover();
			if(PersonStatu.HP > 0) {
				IsLevelUp();
				var str = this.oP.className;
				this.target = [];
				this.aMap[this.num].boxs = [];
				this.aMap[this.num].Equip01 = [];
				this.oParent.innerHTML = '';
				this.aMap[this.num].map[this.colsNum * y + x] = 10;
				this.createMap(this.aMap[this.num]);
				this.oP.className = str;
			}

		}
		if(this.aMap[this.num].map[this.colsNum * y + x] == 13) { //怪物3
			var monster01 = {
				HP: 200,
				ATK: 20,
				DEF: 30,
				EXP: 50
			};
			this.Fight(monster01);

			IsGameover();
			if(PersonStatu.HP > 0) {
				IsLevelUp();
				var str = this.oP.className;
				this.target = [];
				this.aMap[this.num].boxs = [];
				this.aMap[this.num].Equip01 = [];
				this.oParent.innerHTML = '';
				this.aMap[this.num].map[this.colsNum * y + x] = 10;
				this.createMap(this.aMap[this.num]);
				this.oP.className = str;
			}

		}
		if(this.aMap[this.num].map[this.colsNum * y + x] == 14) { //BOSS
			var monster01 = {
				HP: 300,
				ATK: 50,
				DEF: 50,
				EXP: 250
			};
			this.Fight(monster01);

			IsGameover();
			if(PersonStatu.HP > 0) {
				IsLevelUp();
				var str = this.oP.className;
				this.target = [];
				this.aMap[this.num].boxs = [];
				this.aMap[this.num].Equip01 = [];
				this.oParent.innerHTML = '';
				this.aMap[this.num].map[this.colsNum * y + x] = 10;
				this.createMap(this.aMap[this.num]);
				this.oP.className = str;
			}

		}
		this.setPos(this.oP, x, y);
		for(var i = 0; i < this.aMap[this.num].boxs.length; i++) { //推动石头
			if(this.impactCheck(this.oP, this.aMap[this.num].boxs[i])) {
				if(this.aMap[this.num].map[this.colsNum * by + bx] == 1) { //石头撞墙
					this.setPos(this.oP, x - iJson.x, y - iJson.y);
					return;
				}
				for(var k = 0; k < this.aMap[this.num].Equip01Pos.length; k++) { //石头撞宝箱
					if(this.aMap[this.num].Equip01Pos[k].x == bx && this.aMap[this.num].Equip01Pos[k].y == by) {
						this.setPos(this.oP, x - iJson.x, y - iJson.y);
						return;
					}
				}
				this.setPos(this.aMap[this.num].boxs[i], bx, by);
				for(var j = 0; j < this.aMap[this.num].boxs.length; j++) { //石头撞石头
					if((i != j && this.impactCheck(this.aMap[this.num].boxs[i], this.aMap[this.num].boxs[j]))) {
						this.setPos(this.oP, x - iJson.x, y - iJson.y);
						this.setPos(this.aMap[this.num].boxs[i], bx - iJson.x, by - iJson.y);
						return;
					}
				}
				if(this.target[this.aMap[this.num].boxs[i].offsetLeft + '.' + this.aMap[this.num].boxs[i].offsetTop] == 3) { //石头压住开关
					this.aMap[this.num].boxs[i].ok = true;
					sucLen = 0;
					for(var n = 0; n <= 4; n++) {

						if(this.aMap[this.num].boxs[n].ok) {
							sucLen++;
						}
						if(sucLen == 3) { //开关全部被压住
							var message01 = '<span class="Face01"></span><div class="MesTxt">发生了什么？？？</div>';
							var message02 = '<span class="Face01"></span><div class="MesTxt">这些怪物是？？</div>';
							var message03 = '<span class="Face01"></span><div class="MesTxt">也许那本笔记能派上用场</div>';
							var message04 = '可以从菜单中查看怪物信息';
							oHeimu.style.display = 'block';
							startMove(oHeimu, {
								opacity: 100
							}, 100, function() {
								GameBox.nextLevel(); //偷偷换到下一张地图
								startMove(oHeimu, {
									opacity: 0
								}, 30, function() {
									getTip(oMessage, message01, 40, 10, function() {
										getTip(oMessage, message02, 40, 10, function() {
											getTip(oMessage, message03, 40, 10, function() {
												getTip(oGetItem, message04, 40, 10);
											});
										});
									});
									oGetItem.style.display = 'none';
									oHeimu.style.display = 'none';
								});
							});
						}
					}
				} else { //石头从开关上推开
					this.aMap[this.num].boxs[i].ok = false;
				}

				//				break;
			}

		}
		if(this.target[this.oP.offsetLeft + '.' + this.oP.offsetTop] == 1) { //过关判定
			this.nextLevel();
		}
		if(this.target[this.oP.offsetLeft + '.' + this.oP.offsetTop] == 2) { //过关判定
			this.prevLevel();
		}

	},

	nextLevel: function() { //移动到下一层
		this.target = [];
		this.aMap[this.num].boxs = [];
		this.aMap[this.num].Equip01 = [];
		this.oParent.innerHTML = '';
		this.num++;
		if(!this.aMap[this.num]) {
			var message01 = '<span class="Face01"></span><div class="MesTxt">这里是！！出口？？？</div>';
			var message02 = '<span class="Face02"></span><div class="MesTxt">感谢您试玩本游戏</div>';
			var message03 = '<span class="Face02"></span><div class="MesTxt">本游戏测试关卡到此全部结束！</div>';
			var message04 = '<span class="Face02"></span><div class="MesTxt">最后祝您身体健康！！再见！！</div>';

			var endMessage01 = '制作人：胡麒';
			var endMessage02 = '图片资源来源：RPG MAKER VX ACE';
			var endMessage03 = '标题背景音乐：Music boxLey-Line of Twilight time';
			var endMessage04 = '游戏中背景音乐：おてんば恋娘';
			var endMessage05 = '结尾背景音乐：Victory';
			var endMessage06 = 'Thanks for playing!';
			var endMessage07 = '点击回到标题!';
			oHeimu.style.display = 'block';

			oBgSound.pause();
			oBgSound01.play();
			oBgSound01.loop = 'loop';
			startMove(oHeimu, {
				opacity: 100
			}, 30, function() {});

			getTip(oMessage, message01, 300, 300, function() {
				getTip(oMessage, message02, 300, 300, function() {
					getTip(oMessage, message03, 300, 300, function() {
						getTip(oMessage, message04, 300, 300, function() {
							startMove(oEnd, {
								'top': 0
							}, 1000, function() {
								setTimeout(function() {
									startMove(oEnd, {
										'opacity': 0
									}, 1000, function() {
										oGetItem.style.background = 'black';
										oGetItem.style.display = 'block';
										getTip(oGetItem, endMessage01, 300, 300, function() {
											getTip(oGetItem, endMessage02, 300, 300, function() {
												getTip(oGetItem, endMessage03, 300, 300, function() {
													getTip(oGetItem, endMessage04, 300, 300, function() {
														getTip(oGetItem, endMessage05, 300, 300, function() {
															getTip(oGetItem, endMessage06, 1000, 5000, function() {
																history.go(0);
															});
														});
													});
												});
											});
										});
									});
								}, 1000);
							});
						});
					});
				});
			});
			//			setTimeout(function() {
			//				getTip(oMessage, message01, 30, 30);
			//				setTimeout(function() {
			//					getTip(oMessage, message02, 300, 300);
			//					setTimeout(function() {
			//						getTip(oMessage, message03, 300, 300);
			//						setTimeout(function() {
			//							getTip(oMessage, message04, 300, 300);
			//							setTimeout(function() {
			//								startMove(oEnd, {
			//									'top': 0
			//								}, 1000, function() {
			//									setTimeout(function() {
			//										startMove(oEnd, {
			//											'opacity': 0
			//										}, 1000, function() {
			//											oGetItem.style.background = 'black';
			//											oGetItem.style.display = 'block';
			//											getTip(oGetItem, endMessage01, 300, 300, function() {
			//												getTip(oGetItem, endMessage02, 300, 300, function() {
			//													getTip(oGetItem, endMessage03, 300, 300, function() {
			//														history.go(0);
			//													});
			//												});
			//											});
			//										});
			//									}, 5500);
			//								});
			//							}, 4500);
			//						}, 4000);
			//					}, 3500);
			//				}, 3000);
			//			}, 1000);

			return false;
		}
		this.createMap(this.aMap[this.num]);
		this.setPos(this.oP, 2, 16);

	},

	prevLevel: function() { //移动到上一层
		this.target = [];
		this.aMap[this.num].boxs = [];
		this.aMap[this.num].Equip01 = [];
		this.oParent.innerHTML = '';
		this.num--;
		this.createMap(this.aMap[this.num]);
		this.setPos(this.oP, 15, 1);
	},

	impactCheck: function(obj1, obj2) { //碰撞检测
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

	Fight: function(obj) { //战斗
		var obj01 = obj;
		var danmage = 0;
		while(obj01.HP > 0) {
			if(getYinJian) {
				obj01.HP -= PersonStatu.ATK;
			} else {
				obj01.HP -= (PersonStatu.ATK - obj01.DEF);
			}

			if(getBaohumo) {
				PersonStatu.HP -= ((obj01.ATK - PersonStatu.DEF) / 2);
				danmage += parseInt((obj01.ATK - PersonStatu.DEF) / 2);
				IsGameover();

			} else {
				PersonStatu.HP -= (obj01.ATK - PersonStatu.DEF);
				danmage += (obj01.ATK - PersonStatu.DEF);
				IsGameover();
			}
			if(PersonStatu.HP <= 0) {
				break;
			}
		}

		PersonStatu.EXP += obj01.EXP;
		if(danmage<=0){
			danmage=0;
		}
		var txt = '受到' + danmage + '点伤害,提升' + obj01.EXP + '点经验';
		getTip(oGetItem, txt, 10, 10);

	},

	ini: function(oParent, num) { //地图初始化
		this.oParent = oParent;
		this.num = num;
		var gk = this.aMap[num];
		this.createMap(gk);
		var self = this;
		keyFun(self);
		oGameStart.onclick = function() {
			oGameBox.style.display = 'block';
			GameBox.ini(oGameBox, 0);
			this.parentNode.style.display = 'none';
		}

		aItemMenu[0].onclick = function() { //回到游戏
			this.parentNode.style.display = 'none';
		}
		aItemMenu[1].onclick = function() { //打开状态栏
			this.parentNode.style.display = 'none';
			oStatu.style.display = 'block';
			oLv.innerHTML = PersonStatu.LV;
			oHp.innerHTML = PersonStatu.HP;
			oMhp.innerHTML = '/' + PersonStatu.MHP;
			oMp.innerHTML = PersonStatu.MP;
			oMmp.innerHTML = '/' + PersonStatu.MMP;
			oAtk.innerHTML = PersonStatu.ATK;
			oDef.innerHTML = PersonStatu.DEF;
			oExp.innerHTML = PersonStatu.EXP;
			oNexp.innerHTML = '/' + PersonStatu.UPEXP;
		}
		aEquip[4].onclick = aItemMenu[2].onclick = function() { //打开怪物信息列表
			oMainMenu.style.display = 'none';
			oEquipTips.style.display = 'none';
			oMonsterMessageList.innerHTML = '';
			var flag11 = true;
			var flag12 = true;
			var flag13 = true;
			var flag14 = true;
			oMonsterMessageList.innerHTML += '<li><span>怪物</span><span>生命值</span><span>攻击</span><span>防御</span><span>经验值</span></li>';
			for(var i = 0; i < self.aMap[self.num].map.length; i++) {
				if(self.aMap[self.num].map[i] == 11 && flag11) {
					oMonsterMessageList.innerHTML += '<li><span class="pos11"></span><span>20</span><span>15</span><span>10</span><span>9</span></li>';
					flag11 = false;
				}
				if(self.aMap[self.num].map[i] == 12 && flag12) {
					oMonsterMessageList.innerHTML += '<li><span class="pos12"></span><span>30</span><span>50</span><span>5</span><span>30</span></li>';
					flag12 = false;
				}
				if(self.aMap[self.num].map[i] == 13 && flag13) {
					oMonsterMessageList.innerHTML += '<li><span class="pos13"></span><span>200</span><span>20</span><span>30</span><span>50</span></li>';
					flag13 = false;
				}
				if(self.aMap[self.num].map[i] == 14 && flag14) {
					oMonsterMessageList.innerHTML += '<li><span class="pos14"></span><span>300</span><span>50</span><span>50</span><span>250</span></li>';
					flag14 = false;
				}
			}
			if(aMonsterMessageList.length == 1) {
				oMonsterMessageList.innerHTML += '<li>这层没有怪物！！</li>';
			}
			oMonsterMessage.style.display = 'block';
		}
		aItemMenu[3].onclick = function() { //打开装备栏
			oMainMenu.style.display = 'none';
			oEquipment.style.display = 'block';
			if(getIceShoes) {
				aEquip[0].innerHTML = '<span class="IceShoes"></span>火焰披风';
				aEquip[0].style.color = 'gold';
			}
			if(getYinJian) {
				aEquip[1].innerHTML = '<span class="YinJian"></span>银剑';
				aEquip[1].style.color = 'gold';
			}
			if(getBaohumo) {
				aEquip[2].innerHTML = '<span class="BaoHumo"></span>保护膜';
				aEquip[2].style.color = 'gold';
			}
			if(getMonsterBook) {
				aEquip[4].innerHTML = '<span class="MonsterBook"></span>怪物手册';
				aEquip[4].style.color = 'gold';
			}
			if(getHa) {
				aEquip[5].innerHTML = '<span class="Ha"></span>膜法指南';
				aEquip[5].style.color = 'gold';
			}
		}
		aItemMenu[4].onclick = function() {
			history.go(0);
		}

	}

}