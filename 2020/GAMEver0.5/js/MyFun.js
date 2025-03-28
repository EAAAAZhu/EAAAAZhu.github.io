function myAddEvent(obj, ev, fn) {
	if(obj.attachEvent) {
		obj.attachEvent('on' + ev, fn);
	} else {
		obj.addEventListener(ev, fn, false);
	}
}

function IsGameover() {
	if(PersonStatu.HP <= 0) {
		var str01 = '你已经死了！';
		oGetItem.innerHTML = str01;
		oGetItem.style.display = 'block';
		startMove(oGetItem, {
			opacity: 100
		}, 30, function() {
			startMove(oGetItem, {
				opacity: 0
			}, 30, function() {
				oGameover.style.width = window.innerWidth + 'px';
				oGameover.style.height = window.innerHeight + 'px';
				oGameover.style.display = 'block';
				oGameover.onclick = function() {
					history.go(0);
				}
				return;
			});
		});
	}
}
//		if(this.PersonStatu.HP <= 0) {
//				var str01 = '你已经死了！';
//				oGetItem.innerHTML = str01;
//				oGetItem.style.display = 'block';
//				startMove(oGetItem, {
//					opacity: 100
//				}, 30, function() {
//					startMove(oGetItem, {
//						opacity: 0
//					}, 30, function() {
//						oGetItem.style.display = 'none';
//						history.go(0);
//					});
//				});
//				history.go(0);
//			}

function IsLevelUp() {
	if(PersonStatu.EXP >= PersonStatu.UPEXP) {
		PersonStatu.EXP = PersonStatu.EXP - PersonStatu.UPEXP;
		PersonStatu.UPEXP += 50;
		PersonStatu.MHP += 50;
		PersonStatu.MMP += 25;
		PersonStatu.HP = PersonStatu.MHP;
		PersonStatu.MP = PersonStatu.MMP;
		PersonStatu.ATK += 5;
		PersonStatu.DEF += 3;
		PersonStatu.LV += 1;
		var message01 = '恭喜，等级提升！'
		getTip(oGetItem, message01, 20, 20);
	}
	PersonStatu.UPNEEDEXP = PersonStatu.UPEXP - PersonStatu.EXP;
}
//	IsLevelUp: function() {
//		if(PersonStatu.EXP >= PersonStatu.UPEXP) {
//			PersonStatu.EXP = PersonStatu.EXP - PersonStatu.UPEXP;
//			PersonStatu.UPEXP += 50;
//			PersonStatu.MHP += 50;
//			PersonStatu.MMP += 25;
//			PersonStatu.HP = PersonStatu.MHP;
//			PersonStatu.MP = PersonStatu.MMP;
//			PersonStatu.ATK += 5;
//			PersonStatu.DEF += 3;
//			PersonStatu.LV += 1;
//			var message01 = '恭喜，等级提升！'
//			this.getTip(oGetItem, message01, 20, 20);
//		}
//		PersonStatu.UPNEEDEXP = PersonStatu.UPEXP - PersonStatu.EXP;
//	},

function getTip(obj, message01, spe01, spe02, fnEnd) {
	obj.style.display = 'block';
	obj.innerHTML = message01;
	startMove(obj, {
		opacity: 100
	}, spe01, function() {
		startMove(obj, {
			opacity: 0
		}, spe02, function() {
			obj.style.display = 'none';
			if(fnEnd) fnEnd();
		});
	});
}
//	getTip: function(obj, message01, spe01, spe02) {
//		obj.style.display = 'block';
//		obj.innerHTML = message01;
//		startMove(obj, {
//			opacity: 100
//		}, spe01, function() {
//			startMove(obj, {
//				opacity: 0
//			}, spe02, function() {
//				obj.style.display = 'none';
//			});
//		});
//	},

//aEquip[0].onmouseover = function(ev) {
//	var oEvent = ev || event;
//	var txt = '';
//	oEquipTips.style.display = 'block';
//	oEquipTips.style.left = oEvent.clientX + 3 + 'px';
//	oEquipTips.style.top = oEvent.clientY + 3 + 'px';
//	if(getIceShoes) {
//		oEquipTips.style.color = 'red';
//		txt = '感觉好热啊！';
//	} else {
//		txt = '你还没有这个宝贝';
//	}
//	oEquipTips.innerHTML = txt;
//	aEquip[0].onmousemove = function() {
//		oEquipTips.style.left = oEvent.clientX + 3 + 'px';
//		oEquipTips.style.top = oEvent.clientY + 3 + 'px';
//	}
//}
function equipTips(ev, txt, flag) {
	var oEvent = ev || event;
	var message = '';
	oEquipTips.style.display = 'block';
	oEquipTips.style.left = oEvent.clientX + 3 + 'px';
	oEquipTips.style.top = oEvent.clientY + 3 + 'px';
	if(flag) {
		oEquipTips.style.color = 'red';
		message = txt;
	} else {
		message = '你还没有这个宝贝';
	}
	oEquipTips.innerHTML = message;
}

//创建雨滴类
function Drops() {

}

//添加原型方法
Drops.prototype = {
	init: function() { //初始化雨滴对象
		this.x = Radom(0, w); //随机坐标
		this.y = 0;
		this.vy = Radom(4, 10); //下落速度
		this.maxH = Radom(0.7 * h, 0.9 * h);
		this.r = 1;
		this.vr = 1;
		this.a = 1; //透明度
		this.va = 0.96;
	},
	Draw: function() {

		if(this.y > this.maxH) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
			ctx.strokeStyle = 'rgba(0,0,255,' + this.a + ')';
			ctx.stroke();
		} else {
			ctx.fillStyle = 'blue';
			ctx.fillRect(this.x, this.y, 3, 10);
		}
		this.upDate();
	},
	upDate: function() {
		if(this.y <= this.maxH) this.y += this.vy;
		else {
			if(this.a > 0.03) {
				this.r += this.vr;
				if(this.r > 50) {
					this.a *= this.va;
				}
			} else {
				this.init();
			}
		}
	}
}
/*
var drop = new Drops(); //实例化一个雨滴对象
drop.init();
drop.Draw();
*/

var drops = [];

//实例化50个雨滴对象
for(i = 0; i < 5000; i++) {
	(function(j) {
		setTimeout(function() {
			var drop = new Drops();
			drop.init();
			drops.push(drop);
		}, j * 200);
	}(i))
}

//绘制
function Animation() {
	//绘制透明层
	//				ctx.clearRect(0,0,w,h);
	ctx.fillStyle = 'rgba(0,0,0,0.1)';
	ctx.fillRect(0, 0, w, h);
	//				ctx.fillstyle="rgba(0,0,0,0.1)";
	//				ctx.fillRect(0,0,w,h);
	for(var i = 0; i < drops.length; i++) {
		drops[i].Draw();
	}
}

setInterval(Animation, 30);

//生成随机数
function Radom(min, max) {
	return Math.random() * (max - min) + min; //产生min~max之间的随机数
}