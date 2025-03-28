var Game = Game || {};

Game.context = null;
Game.fps = 60;
Game.speed = 250; //旋转速度
Game.nailSpeed = 30; //针的速度
Game.center = 250; // 圆心坐标
Game.cirradius = 100;
Game.smciradius = 15;
Game.num = 1; // 针的编号
Game.targetNum = 15; // 每个关卡的目标数
Game.nail = 0; // 针的步长
Game.nailLen = 100; // 针的长度
Game.angels = [0]; //各针停留时的角度数组
Game.radian = 0; // 旋转弧度
Game.insertStat = false;
Game.isStart = false;
Game.level = 1;
Game.PI2 = Math.PI * 2;

function GameStyle(c) {
	this.color = "#000000"
	if(c) {
		this.color = c;
	}
}

Game.init = function() {
	console.log("init");
	
	Game.circularStyle = new GameStyle();
	Game.nailStyle = new GameStyle();

	var canvas = document.getElementById("canvas");
	Game.context = canvas.getContext("2d");
	if(!Game.context) {
		alert("你的浏览器不支持canvas!");
		return;
	}
	/**
	 * 事件绑定
	 */
	canvas.onclick = Game.insert;
	var $start = $("#start");
	var $insert = $("#insert");
	var $reset = $("#reset");

	$start.click(function() {
		Game.isStart = !Game.isStart;
		Game.start();
	});
	$insert.click(Game.insert);
	$reset.click(Game.reset);

	Game.drawCenter();
	Game.drawPoint();
	Game.drawNail();
}

Game.start = function(e) {
	console.log("start");
	if(Game.isStart) {
		this.interval = setInterval(this.update, 1000 / this.fps);
	}
}

Game.update = function() {
	Game.context.clearRect(0, 0, Game.context.canvas.width, Game.context.canvas.height);
	Game.context.save();

	Game.drawCenter();
	if(Game.insertStat) {
		Game.drawInsert();
	} else {
		Game.drawPoint();
	}
	Game.drawNail();

	Game.context.restore();
	Game.isGameOver();

	Game.radian += Math.PI / Game.speed; // 更新旋转弧度
}

/**
 * 中心圆
 */
Game.drawCenter = function() {
	// 大圆
	Game.context.fillStyle = Game.circularStyle.color;
	Game.context.translate(Game.center, Game.center);
	Game.context.rotate(Game.radian);
	Game.context.translate(-Game.center, -Game.center);

	Game.context.beginPath();
	Game.context.arc(Game.center, Game.center, Game.cirradius, 0, Game.PI2);
	var to = Game.center + Game.cirradius;
	Game.context.moveTo(Game.center, to);
	Game.context.lineTo(Game.center, to + Game.nailLen);
	Game.context.closePath();
	Game.context.fill();
	Game.context.stroke();

	//眼睛
	Game.context.beginPath();
	Game.context.arc(225, 230, 8, 0, Game.PI2);
	Game.context.arc(275, 230, 8, 0, Game.PI2);
	Game.context.closePath();
	Game.context.fillStyle = "#f00";
	Game.context.fill();
	//嘴巴
	Game.context.beginPath();
	Game.context.arc(250, 270, 8, 0, Math.PI);
	Game.context.closePath();
	Game.context.lineWidth = 3;
	Game.context.strokeStyle = "#f00";
	Game.context.fillStyle = "#f00";
	Game.context.fill();
	Game.context.stroke();
}

/**
 * 发射点
 */
Game.drawPoint = function() {
	Game.context.fillStyle = Game.nailStyle.color;
	Game.context.beginPath();
	var r = 350;
	var arcX = Math.sin(Game.radian) * r;
	var arcY = (1 - Math.cos(Game.radian)) * r;
	Game.context.arc(Game.center + arcX, 600 - arcY, Game.smciradius, 0, Game.PI2, true);
	Game.context.closePath();
	Game.context.fill();
	Game.context.fillStyle = "#FFFFFF";
	Game.context.fillText(Game.num, 247 + arcX, 605 - arcY);
}

/**
 * 中心圆上的针
 */
Game.drawNail = function() {
	for(var j = 0; j <= this.angels.length; j++) {
		this.context.fillStyle = Game.nailStyle.color;
		this.context.beginPath();
		var ang = this.angels[j];
		Game.context.arc((Game.center + Math.sin(ang) * 215), (250 + Math.cos(ang) * 215), Game.smciradius, 0, Game.PI2);
		Game.context.moveTo(Game.center + Math.sin(ang) * 200, 450 - (200 * (1 - Math.cos(ang))));
		Game.context.lineTo(Game.center + Math.sin(ang) * 100, 450 - (200 - Math.cos(ang) * 100));

		Game.context.closePath();
		Game.context.fill();
		Game.context.stroke();

		Game.context.fillStyle = "#FFFFFF";
		Game.context.fillText(j, 247 + Math.sin(ang) * 215, 605 - (350 - Math.cos(ang) * 215));
	}
}

/**
 * 插入动画
 */
Game.drawInsert = function() {
	Game.context.fillStyle = Game.nailStyle.color;
	if((350 - (Game.nail + 1) * Game.nailSpeed) >= 215) {
		Game.context.beginPath();
		var r = (350 - Game.nail * Game.nailSpeed);
		Game.context.arc(250 + Math.sin(Game.radian) * r, 600 - (350 - Math.cos(Game.radian) * r), Game.smciradius, 0, Game.PI2);
		Game.context.closePath();
		Game.context.fill();
		Game.context.fillStyle = "#FFFFFF";
		Game.context.fillText(Game.num, 247 + Math.sin(Game.radian) * r, 605 - (350 - Math.cos(Game.radian) * r));
		Game.nail++;
	} else {
		Game.angels[Game.num] = Game.radian;
		Game.num++;
		Game.nail = 0;
		Game.insertStat = false;
	}
}

Game.insert = function(e) {
	console.log("insert");
	if(Game.isStart) {
		Game.insertStat = true;
		if(Game.speed > 50) {
			Game.speed--;
		}
	}
}

//判断游戏有没有结束
Game.isGameOver = function() {
	for(var j = 0; j < this.angels.length; j++) {
		if((Math.abs(Math.sin((this.angels[this.num - 1] - this.angels[j]) / 2)) < 3 / 43) && (j != this.num - 1)) {
			this.gameOver();
			return;
		}
	}
	//判断闯关是否成功
	if(Game.num >= Game.targetNum) {
		this.success();
	}
}

//游戏结束
Game.gameOver = function() {
	console.log('gameOver');
	this.stop();
	this.fail();
}

Game.stop = function() {
	console.log("stop");
	if(this.interval) {
		clearInterval(this.interval);
	}
}

Game.success = function() {
	console.log("success");
	Game.level++;
	Game.stop();
	
	$("#success").show();
}
//游戏失败提示
Game.fail = function() {
	console.log("fail");
	var op = document.getElementsByTagName('p')[0];
	var odiv = document.getElementById('fail');

	op.innerHTML = '啊哦~第'+Game.level+'关过不去';
	odiv.style.display = 'block';
}
Game.reset = function(e) {
	console.log("reset");
	$("#success").hide();
	$("#fail").hide();
	Game.angels = [0];
	Game.insertStat = false;
	Game.nail = 0;
	Game.radian = 0;
	Game.num = 1;
	//	Game.init();
	Game.start();
}

$(function() {
	window.onload = Game.init;

	$('#changBg li').click(function() {
		$('body').css({
			'background': 'url(images/' + $(this).attr('id') + '.png)',
			'background-size': 'cover'
		});
	});

	$('#centerColor li').click(function() {
		Game.circularStyle.color = $(this).css("background-color");
		Game.drawCenter();
		
	});
	$('#nailColor li').click(function() {
		Game.nailStyle.color = $(this).css("background-color");
		Game.drawPoint();
		Game.drawNail();
	});

	var $success = $("#success");

	var $yes = $("#success .yes");
	var $no = $("#success .no");
	$yes.click(function() {
		var le=document.getElementById('le');
		le.innerHTML=Game.level;
		$success.hide();
		Game.reset();
		Game.targetNum -=4;
		if(Game.targetNum<=6){
			Game.targetNum=6;
		}
		if(Game.speed >50) {
			Game.speed -= 50;
		} else {
			Game.speed = 50;
		}
	});
	$no.click(function() {
		$success.hide();
		Game.reset();
	});
})