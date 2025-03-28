/**
 * 1)控制方块组下落，并检测方块组是否碰撞
 *
 * 2)方块旋转与方块消除
 */

//移动方块组
function move(blocks,curOrientation){

    //清空上一个方块组
    for(var i=0;i<blocks.length;i++)
    {
        var curBlock=blocks[i];

        curBlock.clear();
    }

    //画出新的方块组
    for( i=0;i<blocks.length;i++)
    {
        var curBlock=blocks[i];

        switch (curOrientation)
        {
            case 0://下移
                curBlock.y++;
                curBlock.pointY+=curBlock.h;
                break;
            case 1://右移
                curBlock.x++;
                curBlock.pointX+=curBlock.w;
                break;
            case 2://左移
                curBlock.x--;
                curBlock.pointX-=curBlock.w;
                break;

        }
        curBlock.draw();//画出当前方块
    }
}


//找到最右边的方块和最下边的方块
function  GetMaxPoint(blocks){

    var maxX=blocks[0].x,maxY=blocks[0].y;

    for(var i=1;i<blocks.length;i++)
    {
        if(blocks[i].x>maxX)
        {
            maxX=blocks[i].x;
        }
        if(blocks[i].y>maxY)
        {
            maxY=blocks[i].y;
        }
    }
    return {maxX:maxX,maxY:maxY};
}


//找到最左边的方块和最上边的方块
function  GetMinPoint(blocks){

    var minX=blocks[0].x,minY=blocks[0].y;

    for(var i=1;i<blocks.length;i++)
    {
        if(blocks[i].x<minX)
        {
            minX=blocks[i].x;
        }
        if(blocks[i].y<minY)
        {
            minY=blocks[i].y;
        }
    }
    return {minX:minX,minY:minY};
}


//方块下降
function  Down(){

    if(isOver) return;      

    var maxPoint=GetMaxPoint(moveBlocks);

    if(maxPoint.maxY>=minY-1)
    {
    	//发生碰撞或与下面的方块发生碰撞，关闭定时器，停止下降
        if(maxPoint.maxY==endY||CanCrashUnderBlock())
        {
           	clearInterval(timer);

            var minPoint=GetMinPoint(moveBlocks);

            //判断minY的值，重新计算固定方块区域的最小值
            if(minY>minPoint.minY)
            {
                minY=minPoint.minY;
            }

            /*找到每一行的小方块，在deadBlocks对象为每一行创建一个数组，存入该行所有的小方块*/
            for(var i=0;i<moveBlocks.length;i++)
            {
                var key="row:"+moveBlocks[i].y;

                if(deadBlocks[key])
                {
                    deadBlocks[key].push(moveBlocks[i]);
                }else
                {
                    deadBlocks[key]=[moveBlocks[i]];
                }
            }

            //消除方块
            Eliminate(minPoint.minY,maxPoint.maxY);

            if(minY>1){

                startDown();
            }
            else{

            	isOver=true;

            	if(isOver){

            		//结束音乐
            		oA.src='music/sfx_gameover.wav';

            		oA.load();

            		oA.play();

            	}

        		oGc.beginPath();

                oGc.fillStyle="red";
                
                oGc.font='60px impact';

                var w=oGc.measureText('游戏结束').width;

                oGc.fillText('游戏结束',(oC.width-w)/2,(oC.height-60)/2);

                oGc.closePath();
            }
            return;
        }
    }

    move(moveBlocks,orientation.down);
}


//左移
function Left() {
    var minPoint=GetMinPoint(moveBlocks);
    var maxPoint=GetMaxPoint(moveBlocks);
    if((maxPoint.maxY<minY&&minPoint.minX>0)||(maxPoint.maxY>=minY&&minPoint.minX>0&&!CanCrashLeftBlock()))
    {
        move(moveBlocks,orientation.left);
    }
}

//右移
function Right() {

    var maxPoint=GetMaxPoint(moveBlocks);

    if((maxPoint.maxY<minY&&maxPoint.maxX<endX)||(maxPoint.maxY>=minY&&maxPoint.maxX<endX

    	&&!CanCrashRightBlock()))
    {
        move(moveBlocks,orientation.right);
    }
}

//是否碰到下面方块
function CanCrashUnderBlock() {

    for(var i=0;i<moveBlocks.length;i++)
    {
        var curBlock=moveBlocks[i];  

        if(curBlock.y+1>=minY)
        {
            var key="row:"+(curBlock.y+1);

            if(deadBlocks[key])
            {
               for(var h=0;h<deadBlocks[key].length;h++)
               {
                   if(curBlock.x==deadBlocks[key][h].x)
                   {
                        return true;
                   }
               }
            }
        }
    }
    return false;
}

//是否会碰撞到左边方块
function CanCrashLeftBlock() {
    for(var i=0;i<moveBlocks.length;i++)
    {
        var curBlock=moveBlocks[i];
        if(curBlock.y>=minY)
        {
            var key="row:"+curBlock.y;
            if(deadBlocks[key])
            {
                for(var h=0;h<deadBlocks[key].length;h++)
                {
                    if(curBlock.x-1==deadBlocks[key][h].x)
                    {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}


//是否会碰撞到右边方块
function CanCrashRightBlock() {
    for(var i=0;i<moveBlocks.length;i++)
    {
        var curBlock=moveBlocks[i];
        if(curBlock.y>=minY)
        {
            var key="row:"+curBlock.y;
            if(deadBlocks[key])
            {
                for(var h=0;h<deadBlocks[key].length;h++)
                {
                    if(curBlock.x+1==deadBlocks[key][h].x)
                    {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

 //旋转
function Transfer(){
    var minPoint=GetMinPoint(moveBlocks);
    var maxPoint=GetMaxPoint(moveBlocks);
    var relativeX=maxPoint.maxX-minPoint.minX;
    var copyBlocks=[];
    for(var i=0;i<moveBlocks.length;i++)
    {
        var curBlocks=moveBlocks[i];
        var cloneBlocks=new Box(curBlocks.x,curBlocks.y,curBlocks.h,curBlocks.w,curBlocks.pointX,curBlocks.pointY,curBlocks.style);
        cloneBlocks.y =relativeX-( curBlocks.x-minPoint.minX)+minPoint.minY;
        cloneBlocks.x =(curBlocks.y - minPoint.minY)+minPoint.minX;
        cloneBlocks.pointX=cloneBlocks.x*cloneBlocks.w+startPointX;
        cloneBlocks.pointY=cloneBlocks.y*cloneBlocks.h+startPointY;
        if(cloneBlocks.y<minY)
        {
            if(cloneBlocks.x>=0&&cloneBlocks.y<=endY)
            {
                copyBlocks.push(cloneBlocks);
            }else
            {
                return;
            }
        }else
        {
            if(cloneBlocks.x>=0&&cloneBlocks.y<=endY)
            {
                var key="row:"+cloneBlocks.y;
                var deadArray=deadBlocks[key];
                if(deadArray)
                {
                    for(var h=0;h<deadArray.length;h++)
                    {
                        if(cloneBlocks.x==deadArray[h].x)
                        {
                            return;
                        }
                    }

                }
                copyBlocks.push(cloneBlocks);
            }else {
                return;
            }

        }
    }

    for(i=0;i<moveBlocks.length;i++)
    {
        moveBlocks[i].clear();

    }
    DrawBlocks(copyBlocks);
    moveBlocks=copyBlocks;
}

//消除方块
function  Eliminate(sy,ey) {

	var oScores=document.getElementById('scores');

    for(var i=sy;i<=ey;i++)
    {
        var key="row:"+i;

        if(deadBlocks[key]&&deadBlocks[key].length==endX+1)
        {
        	//分数累加
        	newscores+=10;

        	oScores.innerHTML=newscores; 

        	if(newscores>=50){

        		isOver=true;

        		//通关音乐
    		   	oA.src='music/sfx_gamepass.wav';

        		oA.load();

        		oA.play();

        		oGc.beginPath();
        		
                oGc.fillStyle="red";
                
                oGc.font='60px impact';

                var w=oGc.measureText('恭喜过关').width;

                oGc.fillText('恭喜过关',(oC.width-w)/2,(oC.height-60)/2);

                oGc.closePath();

        	} 	
            for(var h=0;h<deadBlocks[key].length;h++)
            {
            	//清除该行中的所有的小方块
                deadBlocks[key][h].clear();
            }
            //清空该行所对应的数组
            delete deadBlocks[key];

            //上一行的小方块下移一行
            for(h=i-1;h>=minY;h--)
            {
                key="row:"+h;

                if(deadBlocks[key])
                {
                    var nextKey="row:"+(h+1);

                    deadBlocks[nextKey]=deadBlocks[key];

                    delete deadBlocks[key];

                    for(var j=0;j<deadBlocks[nextKey].length;j++)
                    {
                        var curBlock=deadBlocks[nextKey][j];

                        curBlock.clear();

                        curBlock.y++;

                        curBlock.pointY+=curBlock.h;

                        curBlock.draw();
                    }
                }
            }
            minY--;
        }
    }
}