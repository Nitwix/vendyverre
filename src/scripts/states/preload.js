var preloadState = {
	preload: function(){
		//load images
		game.load.image("loadingBar", "assets/sprites/loadingBar.png");
		
		//load spritesheets
		game.load.spritesheet("playButton", "assets/sprites/playButton.png", 64, 32);
	},
	
	create: function(){
		var loadingBar = game.add.sprite(368, 284, "loadingBar");
		game.stage.backgroundColor = "#fff";
		
		game.load.setPreloadSprite(loadingBar);
		
		game.state.start("mainTitle");
	}
}