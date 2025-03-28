/**
 * 变量
 */
var canvasWidth,canvasHeight;//画布尺寸
var boxWidth=23,boxHeight=23;//方块尺寸


var boxCount=4;//方块数量

var startX=0,startY=0;//第一个方块的初始位置

var startPointX=0,startPointY=0;//初始方块组位置

var endX=0,endY=0;//终点位置

var minY;//固定方块区域的最小值

var moveBlocks=[];//方块组
var deadBlocks={};//固定方块对象

 
var colors=["red","brown","yellow","blue"];//为方块赋以不同颜色

var orientation={down:0,right:1,left:2};//移动方向

var timer;//定时器

var isOver=false;//游戏是否结束

var newscores=0;//最新分数

var oA=document.getElementById('a');//音乐

var oWrap=document.getElementById('wrapper');//电视屏幕

var videoOpen=false;//电视开关

var oOpen=document.getElementById('open');//电视按钮

var oC=document.getElementById("myCanvas");

var oC2=document.getElementById("newBlock");

//获取绘制环境
oGc=oC.getContext("2d");

oGc2=oC2.getContext("2d");