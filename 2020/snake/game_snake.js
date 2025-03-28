/**
 *@game ̰����
 *@author lemon156
 *2016/11/22-24
 */


        //��ȡ��ʼ����
        var start=document.getElementById('start');
        //��ȡ��ͣ����
        var pause=document.getElementById('pause');
        //��ȡ����
        var score = document.getElementById('score');
        //��ȡ��ͼ
        var snakeMap = document.getElementById('snakeMap');
        //��������
        var rowNumber = 30;
        //��������
        var colNumber = 30;
        //���õ�ͼ�Ŀ�,��
        snakeMap.style.width = colNumber * 20 + 'px';
        snakeMap.style.height = rowNumber * 20 + 'px';
        var arrMap = [];//��¼��ͼ�е���
        var direction = 'right';// ��¼����
        var changeDir = true ;//���õ�������Ƿ�ı䷽��
        var timerDelay;//����һ����ʱ��
        var timerMove;//����һ����ʱ��
        //�����ߵ�λ��
        var x = 2;
        var y = 0;
        //ʳ�������
        var foodX = 0;
        var foodY = 0;
        var scoreNum = 0;//��¼����
        var pauseMove=false;//��ͣ��Ϸ
        //���õ�ͼ�еĵ�Ԫ��
        Map();
        console.log(arrMap)
        var snakeBody = [];//��������
        var level=150;//Ĭ����Ϸ�ȼ�Ϊ��ģʽ
        var gameoverFlag=false;//��Ϸ������־
        var isStart=false;//��Ϸ��ʼ

        
        //Ϊҳ����Ӽ����¼�
        document.onkeydown = function (e) {
            //��� changeDir ֵΪ false, ��ֱ�����������¼�
            if (!changeDir){
                return;
            }
            var event = window.event||e;
            //����������ƶ�,���ҵ���󰴼�,�����κβ���
            if (direction == 'right' && event.keyCode == (37||65) ) {
                return;
            } else if (direction == 'left' && event.keyCode == (39||68) ){
                return;
            }else if (direction == 'top' && event.keyCode == (40||83) ){
                return;
            }else if (direction == 'bottom' && event.keyCode == (38||87) ){
                return;
            }
            //console.log(e.keyCode);
            //alert(e.keyCode);
            //��������Ʒ���
            switch (event.keyCode) {
                case 65:{
                    direction = 'left';
                    break;
                }
                case 37:{
                    direction = 'left';
                    break;
                }
                case 87:{
                    direction = 'top';
                    break;
                }
                case 38:{
                    direction = 'top';
                    break;
                }
                case 68:{
                    direction = 'right';
                    break;
                }
                case 39:{
                    direction = 'right';
                    break;
                }
                case 83:{
                    direction = 'bottom';
                    break;
                }
                case 40:{
                    direction = 'bottom';
                    break;
                }
                default:{
                    break;
                }
            }
            //Ϊ�˱�����ٶԴ˵�����򰴼�(�޸ķ���)
            //��ֹ���� bug
            changeDir = false;
            //300�����,��bool ��ֵ��ֵΪ true;
            timerDelay = setTimeout(function () {
                changeDir = true;
            },100)
        }

        createMenu();
        setTimeout(function(){
        	clearScreen();
        	createLemon();
        },2000);
        //���ҳ����������
        document.addEventListener('click',function(e){
            
            switch(e.target.id){
                case 'easy': level=150;break;
                case 'diff': level=100;break;
                case 'h_diff': level=80;break;
            }
            if (e.target.id=='start') {
                clearLightBox();
                clearInterval(timerMove);//��ֹ������������ʼ��������bug
                createStart();
                if (!isStart) {
                    setTimeout(function(){

                        isStart=true;
                        if (!pauseMove||gameoverFlag) {//�ж��Ƿ�������ͣ
                            clearSnakeBody();
                            clearScreen();
                            clearInterval(timerMove);
                            ranFood();
                            createSnakeBody();
                            snakeMove();
                            gameoverFlag=false;//��Ϸ������־
                        }else{
                            clearLightBox();
                            snakeMove();
                        }
                    },1000);
                }else{
                    
                    clearLightBox();
                    snakeMove();
                }
                //�ж��Ƿ�������ʼ

            }if(e.target.id=='pause'){//��Ϸ��ͣ
                if(!gameoverFlag){
                    pauseMove=true;
                    isStart=false;
                    clearInterval(timerMove);
                    createPause();
                }else{
                    createGameOver();
                }
            }
              
        })//��Ϸ���ƣ���ʼ����ͣ



        //�����
        function ranNum (min,max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        //���ʳ��
        function ranFood () {
            foodX = ranNum(0,colNumber - 1);
            foodY = ranNum(0,rowNumber - 1);
            //�ж�ʳ���λ���Ƿ��������غ�
            if (arrMap[foodY][foodX].className == 'col activeSnake') {
                ranFood();//�������ʳ��
            } else {
                //���������ʳ��������ɫ
                arrMap[foodY][foodX].className = 'col food';
            }
        }
        
        //��Ϸ�����������
        function clearSnakeBody(){
            for(var i=0;i<rowNumber;i++)
                for (var j = 0; j < colNumber; j++) {
                    arrMap[j][i].className='';
                    arrMap[j][i].className='col';
                }
            snakeBody.length=0;
            x=2;
            y=0;
            ranFood();
            scoreNum=0;
            score.innerHTML=0;
            //�����һ����Ϸ����¼�ķ����޸�ΪĬ�ϵ������˶��ķ���
            direction='right';
            changeDir=true;
            //����ʼ���������޸�Ϊ��ʼ
            start.value="��ʼ��Ϸ";


        }

        //��������
        function createSnakeBody(){
            for (var i = 0;i < 3;i++){
                //����������ɫ
                arrMap[0][i].className = 'col activeSnake';
                snakeBody[i] = arrMap[0][i];
            }
        }

        //���ɵ�ͼ�ĺ���
        function Map(){
            for (var i = 0;i < rowNumber;i++) {
                //������
                var rowDiv = document.createElement('div');
                //������� class ��
                rowDiv.className = 'row';
                //���Ԫ�ؽڵ�
                snakeMap.appendChild(rowDiv);
                var arrRow = [];//��¼���е�ÿһ����Ԫ��
                for (var j = 0; j < colNumber;j++) {
                    var colDiv = document.createElement('div');
                    colDiv.className = 'col';
                    rowDiv.appendChild(colDiv);
                    arrRow.push(colDiv);
                }
                //�����������Ԫ��
                arrMap.push(arrRow);
            }
        }

        //snakeMove�ߵ��ƶ�
        function snakeMove () {
            timerMove = setInterval (function(){
                //�����ʱ��
                clearTimeout(timerDelay);
                //Ϊ�˷�ֹ�´ε�����������¼�
                changeDir = true;
                //�ж����ƶ��ķ���
                switch (direction) {
                    case 'right':{
                        x++;
                        break;
                    }
                    case 'left':{
                        x--;
                        break;
                    }
                    case 'top':{
                        y--;
                        break;
                    }
                    case 'bottom':{
                        y++;
                        break;
                    }
                    default:{
                        break;
                    }
                }
                //������Χ
                if (x >= colNumber||x < 0 || y >= rowNumber || y < 0){
                    //alert('game over');
                    clearInterval(timerMove);
                    createGameOver();
                    start.value="���¿�ʼ";
                    gameoverFlag=true;
                    isStart=false;
                    return;
                }
                //�����Լ�
                for (var i = 0;i < snakeBody.length;i++) {
                    //����ʱ�ƶ�֮�����ͷλ�ú��ٴ�֮ǰ�������������ڵ� div �Ƚ�,�����ͬ,��˵���Ե�����
                    if (snakeBody[i] == arrMap[y][x]) {
                        //alert('game over');
                        //�ر����ƶ��Ķ�ʱ��
                        clearInterval (timerMove);
                        createGameOver();
                        gameoverFlag=true;
                        //�����������滻Ϊ���¿�ʼ
                        start.value="���¿�ʼ";
                        isStart=false;
                        return;// ��ֹ����ִ��
                    }

                }
                //�ж�ǰ���Ƿ���ʳ��
                if (foodX == x && foodY == y) {
                    arrMap[y][x].className = 'col activeSnake';
                    //����ߵĳ���
                    snakeBody.push(arrMap[y][x]);
                    //�ӷ�
                    scoreNum++;
                    score.innerHTML = scoreNum;
                    //���ʳ��
                    ranFood();
                }else {
                    //ɾ����β
                    snakeBody[0].className = 'col';
                    snakeBody.shift();
                    //������ͷ
                    arrMap[y][x].className = 'col activeSnake';
                    snakeBody.push(arrMap[y][x]);
                }
            },level) 
        }
        //������������ʳ��֮������ĸ���
        function clearLightBox(){
            for (var i = 0; i < arrMap.length; i++) 
                for (var j = 0; j < arrMap.length; j++) {
                    if(arrMap[i][j].className!='col activeSnake'){
                        if (arrMap[i][j].className!='col food') {
                            arrMap[i][j].className='col';
                        }else{
                            arrMap[i][j].className='col food';
                        }
                        
                    }
                };
        }

        //����
        function clearScreen(){
            for (var i = 0; i < arrMap.length; i++) 
                for (var j = 0; j < arrMap.length; j++) {          
                    arrMap[i][j].className='col';                    
                }
        }//ȫ�����