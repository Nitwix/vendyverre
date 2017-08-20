function addDialogBox(){
	dialogBox = game.add.sprite((game.camera.width)/2,(game.camera.height)/2,"dialogBox");	
	dialogBox.anchor.setTo(0.5);
	dialogBox.fixedToCamera = true;
	dialogBox.visible = false;
}

function dialog(npc){
	dialogBox.visible = true;
	npc.bulle.button.animations.stop();
	npc.bulle.button.frame = 2;
	//alert("hello");

}

function endDialog(){
	dialogBox.visible = false;
	
}

function initButton(x,y){
	button = game.add.sprite(x,y,"dialogButton");
	button.animations.add("waiting",[0,1],4);
	button.play("waiting",4,true);
}
