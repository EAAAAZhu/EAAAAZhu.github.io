// 找到元素
// 开始界面
var startdiv=document.getElementById('startdiv');
//游戏界面
var playdiv=document.getElementById('playdiv');
//初使分数
var scorelabel=document.getElementById('label');
//暂停界面
var pausediv=document.getElementById('pausediv');
//结束界面
var enddiv=document.getElementById('enddiv');
//游戏结束的分数
var playscore=document.getElementById('playscore');
var body=document.getElementsByTagName('body')[0];
//初始分数为0
var scores=0;

var set=null;
function begin(){
	startdiv.style.display='none';
	playdiv.style.display='block';
	
	set=setInterval(start,20);
}


//初始化
function plan(hp,X,Y,sizeX,sizeY,score,sudu,bommimage,imagesrc){
	this.planhp=hp;
	this.x=X;//left，top值
	this.y=Y;
	this.selfsizeX=sizeX;
	this.selfsizeY=sizeY;
	this.planscore=score;
	this.plansudu=sudu;//飞机的移动速度
	this.imagenode=null;
	this.planboomimage=bommimage;
	this.imagesrc=imagesrc;
	this.planisdie=false;

	//移动行为
	this.planmove=function(){
		this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+'px';
		//console.log(this.plansudu)
	}

	this.init=function(){
		this.imagenode=document.createElement('img');
		this.imagenode.src=imagesrc;
		this.imagenode.style.left=this.x+'px';
		this.imagenode.style.top=this.y+'px';
		playdiv.appendChild(this.imagenode);
	}
	this.init();
}


//创建本方飞机
var selfplan= new ourplan(120,485);

function ourplan(X,Y){
	plan.call(this,1,X,Y,60,80,0,0,"image/bffjbx.gif",'image/wdfj.gif');
	this.imagenode.setAttribute('id','ourplan');	
}

//找到本方飞机
var ourPlan=document.getElementById('ourplan');
//设置本方飞机移动
	var yidong=function(){
		var oevent=window.event;
		ourPlan.style.left=oevent.clientX-500-30+'px';
		ourPlan.style.top=oevent.clientY-40+'px';
	}

	//判断是否要添加移动事件
	function bianjie(){
		var oevent=window.event;
		if (oevent.clientX<505||oevent.clientX>815||oevent.clientY>568) {
			playdiv.removeEventListener('mousemove',yidong,true);
		}
		else{
			playdiv.addEventListener('mousemove',yidong,true);
		}
	
	}
	//为本方飞机添加移动事件
	playdiv.addEventListener('mousemove',yidong,true);
	body.addEventListener('mousemove',bianjie,true);

//暂停：暂停界面显示，移除飞机移动
var flag=0;
	var zanting=function(){
		if (flag==0) {
			//暂停时把移动事件清除，清除定时器
			pausediv.style.display='block';
			playdiv.removeEventListener("mousemove",yidong,true);
			body.removeEventListener("mousemove",bianjie,true);
			clearInterval(set);
			flag=1;
		}
		else{
			pausediv.style.display='none';
			playdiv.addEventListener("mousemove",yidong,true);
			body.addEventListener("mousemove",bianjie,true);
			set=setInterval(start,20);
			flag=0;
		}
		
	}

	//鼠标点击暂停
	ourPlan.addEventListener('click',zanting,true);
	var pausedivjixu=pausediv.getElementsByTagName('button')[0];
	pausedivjixu.addEventListener('click',zanting,true);


//创建子弹
function bullet(X,Y,sizeX,sizeY,imagesrc){
	this.bullX=X;
	this.bullY=Y;
	this.bullsizeX=sizeX;
	this.bullsizeY=sizeY;
	this.bulletimage=null;

	 this.bulletmove=function(){
        this.bulletimage.style.top=this.bulletimage.offsetTop-20+"px";
    }

	this.init=function(){
		this.bulletimage=document.createElement('img');
		this.bulletimage.src=imagesrc;
		this.bulletimage.style.left=this.bullX+'px';
		this.bulletimage.style.top=this.bullY+'px';
		playdiv.appendChild(this.bulletimage);
	}
	this.init();
}
//创建一颗子弹
function oddbullet(X,Y){
	bullet.call(this,X,Y,6,14,"image/bullet1.png");
}


// 创建敌方飞机,left值是随机的，top值固定
function random(min,max){
	return Math.floor(min+Math.random()*(max-min));
}
function enemy(hp,a,b,sizeX,sizeY,score,sudu,bommimage,imagesrc){
	plan.call(this,hp,random(a,b),0,sizeX,sizeY,score,sudu,bommimage,imagesrc);
}


//让背景图片从左上角开始显示
var backgroundPositionY=0;
//敌方飞机数组
var enemys=[];
//子弹数组
var bullets=[];
//设置一个空数据
var num=0;
//防止生成大中小飞机时出现问题
var num1=0;
//整体部分
function start(){
	//根据背景图显示的位置来随机产生出子弹和敌方飞机
	playdiv.style.backgroundPositionY=backgroundPositionY+'px';
	backgroundPositionY+=0.5;
	if (backgroundPositionY==568) {
		backgroundPositionY=0;
	}
	num++;

	//创建子弹
	if (num%5==0) {
		bullets.push(new oddbullet(parseInt(ourPlan.style.left)+31,parseInt(ourPlan.style.top)-10));
	}
	var bulletslen=bullets.length;
	for (var i = 0; i < bulletslen; i++) {
		bullets[i].bulletmove();
	
	//当子弹超出边界时，删除子弹
	if (bullets[i].bulletimage.offsetTop<0) {
			playdiv.removeChild(bullets[i].bulletimage);
			bullets.splice(i,1);
			bulletslen--;
		}
	}


	// 随机产生敌方飞机
	if (num==20) {
		num1++;
		//中飞机
		if (num1%5==0) {
			enemys.push(new enemy(90,25,274,46,60,3000,2,"image/zfjbz.gif",'image/enemy3_fly_1.png'));
		}
		//大飞机
		if (num1%12==0) {
			enemys.push(new enemy(50,57,210,110,164,5000,1,"image/dfjbz.gif",'image/enemy2_fly_1.png'));
		}
		else{
				enemys.push(new enemy(130,19,284,34,24,1000,4,"image/xfjbz.gif",'image/enemy1_fly_1.png'));
		}
		num=0;
	}

	//敌方飞机数组
	var enemylen=enemys.length;
	for (var j = 0; j < enemylen; j++) {
		//当飞机被子弹打中，飞机就没有移动行为了，所以要判断敌方飞机是否死亡
		if (enemys[j].planisdie!=true) {
			enemys[j].planmove();
		}
		
		//当飞机超过边界时且没有碰撞事件发生，删除敌方飞机
		if (enemys[j].imagenode.offsetTop>568) {
			playdiv.removeChild(enemys[j].imagenode);
			enemys.splice(j,1);
			enemylen--;
		}

		//判断敌方飞机是否已死亡，死亡则删除这个节点
		if (enemys[j].planisdie==true) {
			enemys[j].planhp+=5;
				if (enemys[j].planhp==200) {
					playdiv.removeChild(enemys[j].imagenode);
					enemys.splice(j,1);
					enemylen--;
				}
		}
	}
	
	

//	碰撞事件,1.飞机互相碰撞，2.子弹打到敌方飞机
	for (var k = 0; k < bulletslen; k++) {
		for (var g = 0; g < enemylen; g++) {
			if (enemys[g].planisdie==false) {

				//飞机互相碰撞,先判断left值
				
				if ((enemys[g].imagenode.offsetLeft+enemys[g].selfsizeX>=selfplan.imagenode.offsetLeft)&&(enemys[g].imagenode.offsetLeft<=selfplan.imagenode.offsetLeft+selfplan.selfsizeX)) {

					//第二步判断top值
					if ((enemys[g].imagenode.offsetTop+enemys[g].selfsizeY>=selfplan.imagenode.offsetTop+40)&&(enemys[g].imagenode.offsetTop<=selfplan.imagenode.offsetTop+selfplan.selfsizeY-20)) {

						//引入爆炸图片
						selfplan.imagenode.src="image/bffjbx.gif";
						//移动事件移除
						playdiv.removeEventListener('mousemove',yidong,true);
						body.removeEventListener("mousemove",bianjie,true);

						//结束框弹出
						enddiv.style.display='block';
						//最终分数
						playscore.innerHTML=scores;
						//清除
						clearInterval(set);

					}


				}
			
				
			}

			//判断子弹与敌方飞机碰撞
			if (bullets[k].bulletimage.offsetLeft+bullets[k].bullsizeX>enemys[g].imagenode.offsetLeft&&bullets[k].bulletimage.offsetLeft<enemys[g].imagenode.offsetLeft+enemys[g].selfsizeX) {

				//敌方飞机换图片，随后消失
				enemys[g].imagenode.src=enemys[g].planboomimage;
				//敌方飞机死亡，planisdie要改为true
				enemys[g].planisdie=true;
				scores+=enemys[g].planscore;
				scorelabel.innerHTML=scores;
				playdiv.removeChild(bullets[k].bulletimage);
				bullets.splice(k,1);
				bulletslen--;
				break;
			}

		}

		
	}

	


}

//继续之后重新加载，回到首页
function jixu(){
	// playdiv.addEventListener("mousemove",bianjie,true);
	// pausediv.style.display='none';
	location.reload(true);
}
