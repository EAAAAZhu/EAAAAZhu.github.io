oGameStart.onclick = function() {
	oBgSoundOp.pause();
	oBgSound.play();
	oBgSound.loop='loop';
	can.style.display='none';
	oGameBox.style.display = 'block';
	oGameTitle.style.display='block';
	GameBox.ini(oGameBox, 0);
	this.style.display = 'none';
	var message01 = '<span class="Face01"></span><div class="MesTxt">我的名字是李狗蛋</div>';
	var message02 = '<span class="Face01"></span><div class="MesTxt">被我们村长请求来这里寻找宝藏</div>';
	var message03 = '<span class="Face01"></span><div class="MesTxt">但是现在我迷路了，出口到底在哪</div>';
	var message04 = '获得怪物手册，获得膜法指南';
	var message05 = '↑、↓、←、→控制人物移动，X键打开/关闭菜单,靠近宝箱时按Z键打开------单击此处以继续游戏';
	oMessage.style.display = 'block';
	oMessage.innerHTML = message01;
	startMove(oMessage, {
		opacity: 100
	}, 30, function() {
		startMove(oMessage, {
			opacity: 0
		}, 10, function() {
			oMessage.innerHTML = message02;
			startMove(oMessage, {
				opacity: 100
			}, 30, function() {
				startMove(oMessage, {
					opacity: 0
				}, 10, function() {
					oMessage.innerHTML = message03;
					startMove(oMessage, {
						opacity: 100
					}, 30, function() {
						startMove(oMessage, {
							opacity: 0
						}, 10, function() {
							oGetItem.innerHTML = message04;
							oGetItem.style.display = 'block';
							startMove(oGetItem, {
								opacity: 100
							}, 30, function() {
								startMove(oGetItem, {
									opacity: 0
								}, 10, function() {
									oGetItem.innerHTML = message05;
									startMove(oGetItem, {
										opacity: 100
									}, 30, function() {
										oGetItem.onclick = function() {
											startMove(oGetItem, {
												opacity: 0
											}, 10, function() {
												oGetItem.style.display = 'none';
											});
										}

										oMessage.style.display = 'none';
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

oGameStart.onmouseover=function(){
//	oGameStart.style.color='green';
//	oGameStart.style.fontSize='60px';
	startMove(oGameStart,{fontSize:60},30);
}

oGameStart.onmouseout=function(){
//	oGameStart.style.color='green';
//	oGameStart.style.fontSize='60px';
	startMove(oGameStart,{fontSize:40},30);
}

aItemMenu[0].onclick = function() {
	this.parentNode.style.display = 'none';
//	can.style.display='none';
//	oGameTitle.style.display='block';
}

aItemMenu[3].onclick = function() {
	oMainMenu.style.display = 'none';
	oEquipment.style.display = 'block';
}

aItemMenu[4].onclick = function() {
	history.go(0);
	oGameStart.style.display = 'none';
}
aBtnInStatu[0].onclick = aBtnInEquip[0].onclick = function() {
	this.parentNode.parentNode.parentNode.style.display = 'none';
	oMainMenu.style.display = 'block';
}
aBtnInStatu[1].onclick = aBtnInEquip[1].onclick = function() {
	this.parentNode.parentNode.parentNode.style.display = 'none';
}

aEquip[0].onmouseover = function(ev) {
	var txt = '';
	txt = '感觉好热啊！';
	equipTips(ev,txt,getIceShoes);
}
aEquip[1].onmouseover = function(ev) {
	var txt = '';
	txt = '巨硬材质合金打造，可贯穿护甲！';
	equipTips(ev,txt,getYinJian);
}
aEquip[2].onmouseover = function(ev) {
	var txt = '';
	txt = '巨硬材质合金打造，受到战斗伤害减半！';
	equipTips(ev,txt,getBaohumo);
}

aEquip[4].onmouseover = function(ev) {
	var txt = '';
	txt = '某人的日记，记录着这里生活着的怪物的信息';
	equipTips(ev,txt,getMonsterBook);
}

aEquip[5].onmouseover = function(ev) {
	var txt = '';
	txt = '获得长者的人生经验';
	equipTips(ev,txt,getHa);
}

aEquip[0].onmousemove = aEquip[1].onmousemove = aEquip[2].onmousemove = aEquip[3].onmousemove = aEquip[4].onmousemove = aEquip[5].onmousemove = function(ev) {
	var oEvent=ev||event;
	oEquipTips.style.left = oEvent.clientX + 3 + 'px';
	oEquipTips.style.top = oEvent.clientY + 3 + 'px';
}
aEquip[0].onmouseout = aEquip[1].onmouseout = aEquip[2].onmouseout = aEquip[3].onmouseout = aEquip[4].onmouseout = aEquip[5].onmouseout = function() {
	oEquipTips.style.display = 'none';
}
document.onmousemove = function(ev) {
	var oEvent = ev || event;
	oEquipTips.style.left = oEvent.clientX + 3 + 'px';
	oEquipTips.style.top = oEvent.clientY + 3 + 'px';

	return false;
}