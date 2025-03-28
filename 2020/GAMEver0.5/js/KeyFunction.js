
function keyFun(Json) {
	onkeydown = function(ev) {
		var oEvent = ev || event;
		
		
		if(oMainMenu.style.display == 'block' && oStatu.style.display != 'block') {
			switch(oEvent.keyCode) {
				case 88:
					oMainMenu.style.display = 'none';
					break;
			}
		} else if(oStatu.style.display == 'block') {
			switch(oEvent.keyCode) {
				case 88:
					oStatu.style.display = 'none';
					oMainMenu.style.display = 'block';
					break;
			}
		} else if(oEquipment.style.display == 'block') {
			switch(oEvent.keyCode) {
				case 88:
					oEquipment.style.display = 'none';
					oMainMenu.style.display = 'block';
					break;
			}
		}else if(oMonsterMessage.style.display == 'block') {
			switch(oEvent.keyCode) {
				case 88:
					oMonsterMessage.style.display = 'none';
					oMainMenu.style.display = 'block';
					break;
			}
		}else if(oMessage.style.display == 'block'){}
		else if(oGetItem.style.display == 'block'){}
		else if(oHeimu.style.display == 'block'){}
		else {
			switch(oEvent.keyCode) {
				case 88:
					oMainMenu.style.display = 'block';
					break;
				case 37: //left
					Json.oP.className = 'person2';
					Json.personRun({
						x: -1,
						y: 0
					});
					break;
				case 38: //up
					if(!getHa){
						Json.PersonStatu.EXP+=15;
						Json.IsLevelUp();
					}
					Json.oP.className = 'person1';
					Json.personRun({
						x: 0,
						y: -1
					});
					break;
				case 39: //right
					Json.oP.className = 'person4';
					Json.personRun({
						x: 1,
						y: 0
					});
					break;
				case 40: //down
					Json.oP.className = 'person3';
					Json.personRun({
						x: 0,
						y: 1
					});
					break;
				default:
					break;
			}
		}

	}
}