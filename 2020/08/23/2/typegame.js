var screen=document.getElementsByClassName('screen')[0];
var fail=document.getElementsByClassName('fail')[0];
var success=document.getElementsByClassName('success')[0];
var letter=document.getElementsByClassName('letter');
var score=document.getElementsByClassName('score')[0];
var height=document.documentElement.clientHeight;
var over=document.getElementById('over');
var begin=document.getElementById('begin');
var oSpan=document.getElementsByTagName('span');
var audio=document.getElementById('audio');
var throw1=document.getElementById('throw1');
var first=document.getElementById('first');
var second=document.getElementById('second');
var third=document.getElementById('third');
var scorend=0;
var timer=null;
var dir=10;
var inter=1000;
//开始游戏，根据屏幕大小加载最初页面
initGame();
function initGame(){  
  var width=document.documentElement.clientWidth;
  screen.style.width=width+"px";
  screen.style.height=height+"px";
}
var i=0;
//创建字母
function createLetter(){
  //unicode编码，从65到91
  if(i>29){return ;} 
  var randomnum=Math.floor(Math.random()*26+65);
  //对应的A-Z
  var randomletter=String.fromCharCode(randomnum);
  //出现时从顶部出现的位置
  var top1=-Math.round(Math.random()*100);
  //出现时从左边的位置
  var left1=Math.round(Math.random()*1000); 
  oSpan[i]=screen.appendChild(document.createElement('span'));
  oSpan[i].setAttribute('class','letter');
  oSpan[i].innerHTML=randomnum;
  oSpan[i].style.background='url(img/'+randomletter+'.png)';
  oSpan[i].style.left=left1+'px';
  oSpan[i].style.top=top1+'px';
  toMove(oSpan[i],'top',dir,height); 
  i++;
}
function toMove(obj,attr,step,target,endFn) {          
 //obj:需要移动的对象    
  step=parseInt(getStyle(obj,attr))<target?step:-step;    
  //attr:要移动的方向 step:移动的速度  
  clearInterval(obj.timer);               
  //target:目标位置 endFn:移动完成后执行的函数
  obj.timer=setInterval(function(){
    var speed=parseInt(getStyle(obj,attr))+step;
    if(speed<target&&step<0||speed>target&&step>0){
      speed=target;
      stopGame();
    }
    obj.style[attr]=speed+'px';
    if(speed==target){
      clearInterval(obj.timer);
      endFn&&endFn();
    }
  },50);
}
function getStyle (obj, attr){                
//obj：对象 ，    attr：要获取元素什么方向的位置。
  return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
//开始游戏
function startGame(){
  i=0;
  first.style.display='none';
  second.style.display='none';
  third.style.display='none';
  success.style.display='none';
  clearInterval(timer);
  timer=null;
  fail.style.display='none';
  scorend=0;
  score.innerText='0';
  //定时产生字母
  timer=setInterval(function(){
  createLetter();
  },inter);
  
}
begin.onclick=startGame;
//键盘按键删除字母，分数+1
document.onkeydown=function(e){
      var code=e.keyCode;     
     for(var j=0;j<oSpan.length;j++){
       if(oSpan[j].innerHTML==code){
        screen.removeChild(oSpan[j]);
        scorend++;
        score.innerText=scorend;
        if(throw1.paused){
		  	throw1.play();
		  }	
     }
   }
  if(inter%100==0){
         accelerate();
  }
  if(scorend==30){
     stopGame();
     success.style.display='block';
     fail.style.display='none';
  }
};
//结束游戏
function stopGame(){
  clearInterval(timer);
  first.style.display='block';
  second.style.display='block';
  third.style.display='block';
  fail.style.display='block';
  if(audio.paused){
  	audio.play();
  }
}  
over.onclick=stop;
//通过加速产生字母
function accelerate(){
  inter-=50;
}
//初级玩家
first.onclick=firstClick;
function firstClick(){
  inter=1000;
  dir=10;
}
//中级玩家，加快步长
second.onclick=secondClick;
function secondClick(){
  inter=1000;
  dir=18;
}
//高级玩家，加速掉落
third.onclick=thirdClick;
function thirdClick() {
  inter=700;
  dir=18;
}

