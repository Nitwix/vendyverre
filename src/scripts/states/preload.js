var preloadState = {
	preload: function(){
		//load images
		game.load.image("loadingBar", "assets/sprites/loadingBar.png");
		
		//load spritesheets
		game.load.spritesheet("playButton", "assets/sprites/playButton.png", 64, 32);
		game.load.spritesheet("snowflakes","assets/sprites/snowflakes.png",16,16);
		
		//load music
		game.load.audio("mainTitle","assets/music/MainTitle.wav");
	},
	
	create: function(){
		var loadingBar = game.add.sprite(368, 284, "loadingBar");
		game.stage.backgroundColor = "#fff";
		
		game.load.setPreloadSprite(loadingBar);
		
		game.state.start("mainTitle");
	}
}