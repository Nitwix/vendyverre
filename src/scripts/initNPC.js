var npcs = []; 

function initNPC(name,spritesheetName,x,y,text){
	npc = game.add.sprite(x,y,spritesheetName);
	npc.anchor.setTo(0.5,1);
	
	npc.dialogs = {};
	

	bulle = game.add.sprite(x,y-64,"dialogIntro");
	bulle.anchor.setTo(0.5,1);
	bulle.visible = false;
	npc.bulle = bulle;
	
	
	initButton(x+64,y-64);
	button.alignTo(bulle,Phaser.RIGHT_CENTER,-15,2);
	npc.bulle.button = button;

	dialogZone = game.add.sprite(x,y,"overlap");
	dialogZone.anchor.setTo(0.5,1);
	dialogZone.visible = false;
	npc.bounds = dialogZone;

	npc.text = game.add.text(npc.x-32,npc.y-96,"",{fill : '#ffffff'});
	npc.text.alignTo(bulle,Phaser.LEFT_CENTER,-5,10);
	npc.text.fontSize = 14;

	npc.frame = 1;
	npc.name = name;
	npc.animations.add("iddle",[12,13,14,15,16],7);

	npcs.push(npc);
}



function overlap(npc,coucouTXT){
	if (checkOverlap(player,npc.bounds))
	{  
		npc.bulle.visible = true;
		npc.text.text = coucouTXT;
		button.visible = true;
		if(input.enter.isDown){
			dialog(npcs[0]);
		}

	}
	else
	{
		npc.bulle.visible = false;
		npc.bulle.button.play("waiting");
		npc.text.text = "";
		button.visible = false;

	}
}

function checkOverlap(spriteA, spriteB) {

	var boundsA = spriteA.getBounds();
	var boundsB = spriteB.getBounds();

	return Phaser.Rectangle.intersects(boundsA,boundsB);

}
