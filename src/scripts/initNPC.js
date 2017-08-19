var npcs = []; 
//var text;
//var text2;

function initNPC(name,spritesheetName,x,y){
	npc = game.add.sprite(x,y,spritesheetName);
	npc.anchor.setTo(0.5,1);
	
	dialogZone = game.add.sprite(x,y,"overlap");
	dialogZone.anchor.setTo(0.5,1);
	dialogZone.visible = false;
	npc.bounds = dialogZone;
	npc.text = game.add.text(npc.x-32,npc.y-96,"",{fill : '#ffffff'});
	//text = game.add.text(16, 16, 'Overlapping: false', { fill: '#ffffff' });
	//text2 = game.add.text(32,32,bounds,{ fill: '#ffffff'});

	
	npc.frame = 1;
	game.physics.enable(npc,Phaser.Physics.ARCADE);
	npc.name = name;
	npc.animations.add("iddle",[12,13,14,15,16],7);
	
	npcs.push(npc);
	

}



function overlap(npc,npcBounds){
	if (checkOverlap(player,npcBounds))
    {
        //text.text = 'Overlapping: true';
		npc.text.text = "coucou Test"
    }
    else
    {
		npc.text.text = "";
        //text.text = 'Overlapping: false';
    }
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
	var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA,boundsB);

}
