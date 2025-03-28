// 找到元素
// 开始界面
var startdiv=document.getElementById('startdiv');
//游戏界面
var playdiv=document.getElementById('playdiv');
//初使分数
var scorelabel=document.getElementById('scorelabel');
//暂停界面
var pausediv=document.getElementById('pausediv');
//结束界面
var enddiv=document.getElementById('enddiv');
//游戏结束的分数
var playscore=document.getElementById('playscore');

/*创建飞机类，飞机图片，有速度，离边框的距离，得到的分数，销毁时间，销毁时换图片*/
function plan(hp,X,Y,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc){
	this.planX=X;//定位距离
	this.planY=Y;
	this.imagenode=null;
	this.planhp=hp;
	this.planscore=score;
	this.plansizeX=sizeX;
	this.plansizeY=sizeY;
	this.planboomimage=boomimage;
	this.planisdie=false;
	this.plandietimes=0;
	this.plandietime=dietime;
	this.plansudu=sudu;

	this.init=function(){
		this.imagenode=document.createElement("img");
		this.imagenode.style.left=this.planX+"px";
		this.imagenode.style.top=this.planY+"px";
		this.imagenode.src=imagesrc;
		playdiv.appendChild(this.imagenode);
	}
	this.init();
}

//创建本方飞机
function ourplan(X,Y){
	var imagesrc="image/wdfj.gif";
	plan.call(this,1,X,Y,66,80,0,660,0,"image/bffjbx.gif",imagesrc);
	this.imagenode.setAttribute('id','ourplan');
}
//子弹:随着飞机移动，子弹跟着移动(也跟鼠标移动事件有关)
	//图片，速度，发射频率，碰到飞机子弹消失
function bullet(X,Y,sizeX,sizeY,imagesrc){
	this.bulletX=X;
	this.bulletY=Y;
	
}
	var imagenode=null;
	var bullents=document.createElement("img");
	bullents.src="image/bullet1.png";
	playdiv.appendChild(bullents);
	bullents.style.left="150px";
	bullents.style.top="485px";

//创建我方飞机,飞机图片，有速度，离边框的距离，得到的分数，销毁时间，销毁时换图片
	//img.src='image/wdfj.gif';
	// playdiv.innerHTML+='<img src="image/wdfj.gif" id="ourplan"></img>';
	var selfplan=ourplan(120,485);
	var ourPlan=document.getElementById('ourplan');
	//alert(ourPlan.offsetLeft);offsetLeft距离父级元素左边的距离
	
	//鼠标移动事件--当鼠标在本方飞机上的时候，飞机要跟着鼠标移动
	//本方飞机的大小
	// selfplanX=ourPlan.offsetWidth;
	// selfplanY=ourPlan.offsetHeight;
	var yidong=function(){
			var oevent=window.event;
			ourPlan.style.left=oevent.clientX-500-30+'px';
			ourPlan.style.top=oevent.clientY-40+'px';
			bullents.style.left=oevent.clientX-500+'px';
			bullents.style.top=oevent.clientY-50+'px';
			
			// var bullentfashe=oevent.clientY-50+'px';
			// setInterval(function(){
			// 	for (var i = 0; i < 10; i++) {
			// 		if (oevent.clientY>0) {
			// 		bullents.style.top=oevent.clientY-50-i*10+'px';
			// 	}
				
			// }
			// },1000);
				
		}
	//判断边界
	
	var bianjie=function(){
		var oevent=window.event;
		var bodyobjX=oevent.clientX;
		var bodyobjY=oevent.clientY;
		if (bodyobjX<500||bodyobjX>820||bodyobjY>568) {
			playdiv.removeEventListener('mousemove',yidong,true);
		} else {
			playdiv.addEventListener('mousemove',yidong,true);
		}
	}


//点击开始游戏跳到游戏界面
function begin(){
	startdiv.style.display='none';
	playdiv.style.display='block';
	
	bianjie();
}