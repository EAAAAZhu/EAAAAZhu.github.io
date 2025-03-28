/**
 *随机生成方块组
 */

//最小方块单元对象,构造函数
function  Box(x,y,w,h,pointX,pointY,style) {

    this.x=x;
    this.y=y;//数组坐标

    this.w=w;
    this.h=h;//尺寸

    this.pointX=pointX;
    this.pointY=pointY;//坐标

    this.style=style;
    this.draw=DrawBox;//画出小方块
    this.clear=ClearBox;
}

//画出小方块
function DrawBox(){

    oGc.beginPath();
    oGc.strokeStyle="black";
    oGc.lineWidth=1;
    oGc.strokeRect(this.pointX,this.pointY,this.w,this.h);
    oGc.fillStyle=this.style;
    oGc.fillRect(this.pointX,this.pointY,this.w,this.h);
    oGc.closePath()
}

//清除小方块
 function  ClearBox() {

    oGc.clearRect(this.pointX-1,this.pointY-1,this.w+2,this.h+2);
}

//生成方块组
function  GenerateBlocks() {

    var curX=startX*boxWidth+startPointX;//92.5

    var curY=startPointY;//6.5

    var box=new Box(startX,startY,boxWidth,boxHeight,curX,curY,colors[0]);

    moveBlocks=[box];

    for(var i=1;i<boxCount;i++)
    {
        var emptyBlocks=[];//空白数组，等待放入新的方块

        for(var h=0;h<moveBlocks.length;h++)
        {
            var curBox=moveBlocks[h];

            //在初始方块右边创建一个新的方块
            var rightBox=new Box(curBox.x+1,curBox.y);//当前方块右侧位置
            if(ContainsBox(rightBox,moveBlocks))
            {
                emptyBlocks.push(rightBox);
            }

            //在初始方块下边创建一个新的方块
            var underBox=new Box(curBox.x,curBox.y+1);//当前方块下方位置
            if(ContainsBox(underBox,moveBlocks))
            {
                emptyBlocks.push(underBox);
            }
        }

        if(emptyBlocks.length>0)
        {
            //随机选择emptyBlocks数组中的元素
            //随机产生0~emptyBlocks.length之间的一个数
            var r=Math.floor(Math.random()*emptyBlocks.length);

            var emptyBlock=emptyBlocks[r];

            curX=emptyBlock.x*boxWidth+startPointX;

            curY=emptyBlock.y*boxHeight+startPointY;

            var curBox=new Box(emptyBlock.x,emptyBlock.y,boxWidth,boxHeight,curX,curY,colors[i]);

            moveBlocks.push(curBox);
        }

    }
}

//判断当前方块所处位置是否为空
    function  ContainsBox(box,blocks) {

    for(var i=0;i<blocks.length;i++)
    {
        var curBox=blocks[i];

        if(curBox.x==box.x&&curBox.y==box.y)
        {
            return false;
        }
    }
    return true;
}




//获取按键值
function getCode(event) {

    var ev=ev||event;
    switch (ev.keyCode)
    {
        case 65:
            Left();//左移
            break;

         case 68:
            Right();//右移
            break;
        case 87:
            Transfer();//旋转
            break;

        case 83:
            Down();//快速下降
            break;   
        case 13:
            Reply();//重新开始
            break; 
    }

    return false;
}
