/**
 * 变量准备、键盘事件、背景音乐
 */

//准备变量
function Prepare() {
    var oC=document.getElementById("myCanvas");

    //画布尺寸
    canvasWidth=oC.width;

    canvasHeight=oC.height;

    //方块到右边的终点位置
    endX=Math.floor(canvasWidth/boxWidth-1) ;//12

    //方块到下边的终点位置
    endY=Math.floor(canvasHeight/boxHeight-1);//18

    //初始方块位置
    startPointX=canvasWidth%boxWidth/2;//0.5

    startPointY=canvasHeight%boxHeight/2;//6.5

    //初始方块数组位置
    startX=Math.floor((endX-4)/2);//4

    //固定方块区域最小值
    minY=endY;
}

//添加音乐
function addMusic(){

    oA.src='music/bgmusic.mp3';

    oA.play();
}

//重新开始
function  Reply() {

    var oScores=document.getElementById('scores');

    //防止用户快速点击 
    clearInterval(timer);

    minY=endY;

    isOver=false;

    //得分清0
        
    oScores.innerHTML=0;

    //清空固定方块对象
    deadBlocks=[];

    //清空画布
    oGc.clearRect(0,0,canvasWidth,canvasHeight);

    startDown();//开始下降

    addMusic();
}

//开始下降
function  startDown() {

    GenerateBlocks();//生成方块对象

    DrawBlocks(moveBlocks);//画出方块

    var MAX=GetMaxPoint(moveBlocks);

    //将方块复制到缩略图中
    var oImg=oGc.getImageData(92.5,6.5,(MAX.maxX-3)*23,(MAX.maxY+1)*23);

    oGc2.clearRect(0,0,120,120);

    oGc2.putImageData(oImg,14,14);

    console.log(moveBlocks);
    //console.log(deadBlocks);

    timer=setInterval(Down,500);//开启定时器让方块下降
}

//绘制当前方块组
function DrawBlocks(blocks) {
    for(var i=0;i<blocks.length;i++)
    {
        blocks[i].draw();
    }
}

//初始化程序
function Init() {
 
    //防止用户快速开关电视屏幕
    clearInterval(timer);

    Prepare();

    startDown();

    window.addEventListener("keydown",getCode,false);
}

//开关机
function open(){

    var oScores=document.getElementById('scores');

    if (!videoOpen){

        oOpen.style.backgroundImage='url(img/btn2.gif)';

    }else{

        oOpen.style.backgroundImage='url(img/btn1.gif)';
    }
    
    videoOpen=!videoOpen;


    if (videoOpen) {

        //开启电视屏幕
        oWrap.style.display='block';

        window.onkeydown=function (ev){

            var ev=ev||event;

            if (ev.keyCode==13) {

                addMusic();
                Init();
            }
        }
    }else{

        //清空画布
        oGc.clearRect(0,0,oC.width,oC.height);

        oGc2.clearRect(0,0,oC2.width,oC2.height);

        //关闭定时器
        clearInterval(timer);

        //关闭电视屏幕
        oWrap.style.display='none';

        //关闭音乐
        oA.src='';
        oA.load();

        //得分清0
        oScores.innerHTML=0;
    }
}