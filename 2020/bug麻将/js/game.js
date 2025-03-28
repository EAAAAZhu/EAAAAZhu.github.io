//桌牌
var tableCard=new Array()
//玩家数组
var players=new Array()
var indexofplayer=0
//桌牌
var Cardplay=null
function choose(img){
	img.style.width=50+'px'
	img.style.height=60+'px'
}
function lose(img){
	img.style.width=43+'px'
	img.style.height=55+'px'
}
function player(name){
	this.name=name;
	//this.card=new Array();
	this.div=document.getElementById(this.name)
	this.sondiv=new Array()
	//筒子
	//this.card[0]=new Array();
	this.sondiv[0]=document.getElementById("tongzi")
	//条子
	//this.card[1]=new Array();
	this.sondiv[1]=document.getElementById("tiaozi")
	//万字
	//this.card[2]=new Array();
	this.sondiv[2]=document.getElementById("wanzi")
	//风
	//this.card[3]=new Array();
	this.sondiv[3]=document.getElementById("fengzi")
	//中发白
	//this.card[4]=new Array();
	this.sondiv[4]=document.getElementById("zhongfabai")

	this.getCard=function(){
		var index=0
		var index1=0
		while(true){
			var index=parseInt(Math.random()*(tableCard.length))
			if(tableCard[index].length!=0){
			var index1=parseInt(Math.random()*(tableCard[index]).length)
			break;
			}
		}switch(this.name){
			case 'mySelf':
				this.sondiv[index].innerHTML+='<img src="img/'+tableCard[index][index1]+'.png" id="'+tableCard[index][index1]+'" onmouseout="lose(this)" onmouseover="choose(this)" onclick="putCard(this)"/>'
			break;
			case 'frontPlayer':
				this.div.innerHTML+='<img src="img/bj1.jpg" onclick="putCard(this)" id="'+tableCard[index][index1]+'"/>'
			break
			case 'leftPlayer':
				this.div.innerHTML+='<img src="img/cm1.jpg" onclick="putCard(this)" id="'+tableCard[index][index1]+'"/>'
			break
			case 'rightPlayer':
				this.div.innerHTML+='<img src="img/cm2.jpg" onclick="putCard(this)" id="'+tableCard[index][index1]+'"/>'
			break
			}
		tableCard[index].splice(index1,1)
	};
}

function putCard(img){
		var path=img.getAttribute("id")
		Cardplay.innerHTML+='<img src="img/'+path+'.png" />'
		img.parentNode.removeChild(img)
		indexofplayer++
		players[indexofplayer].getCard()
		if(indexofplayer==3){
			indexofplayer=-1
		}
}


function start(){
	Cardplay=document.getElementById("playcard")
	tableCard=[//t筒子
				['t1','t2','t3','t4','t5','t6','t7','t8','t9',
				't1','t2','t3','t4','t5','t6','t7','t8','t9',
				't1','t2','t3','t4','t5','t6','t7','t8','t9',
				't1','t2','t3','t4','t5','t6','t7','t8','t9'],
				//s条子
				['s1','s2','s3','s4','s5','s6','s7','s8','s9',
				's1','s2','s3','s4','s5','s6','s7','s8','s9',
				's1','s2','s3','s4','s5','s6','s7','s8','s9',
				's1','s2','s3','s4','s5','s6','s7','s8','s9'],
				//w万字
				['w1','w2','w3','w4','w5','w6','w7','w8','w9',
				'w1','w2','w3','w4','w5','w6','w7','w8','w9',
				'w1','w2','w3','w4','w5','w6','w7','w8','w9',
				'w1','w2','w3','w4','w5','w6','w7','w8','w9'],
				//东南西北
				['1','2','3','4',
				'1','2','3','4',
				'1','2','3','4',
				'1','2','3','4'],
				//中发白
				['a','b','c',
				'a','b','c',
				'a','b','c',
				'a','b','c']
	]
	//初始化玩家
	var mySelf=new player('mySelf')
	var frontPlayer=new player('frontPlayer')
	var leftPlayer=new player('leftPlayer')
	var rightPlayer=new player('rightPlayer')
	players.push(mySelf)
	players.push(rightPlayer)
	players.push(frontPlayer)
	players.push(leftPlayer)
	//初始化手牌
	for(i=0;i<13;i++){
		players[0].getCard()
		players[1].getCard()
		players[2].getCard()
		players[3].getCard()
	}
	players[0].getCard()
	
}
