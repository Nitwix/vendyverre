function addFSButton(){
	var fsButton = game.add.button(game.camera.width - 10,   10, "fsButton",
		function(){
			if(game.scale.isFullScreen){
				game.scale.stopFullScreen();
			}else{
				game.scale.startFullScreen(false); //antialas = false
			}
		}, this);

	fsButton.anchor.setTo(1,0);
	fsButton.width = 40;
	fsButton.height = 40;
	fsButton.fixedToCamera = true;
}