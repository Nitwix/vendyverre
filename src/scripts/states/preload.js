var preloadState = {
	preload: function(){
		//load images
		game.load.image("loadingBar", "assets/sprites/loadingBar.png");
		
		//load spritesheets
		game.load.spritesheet("playButton", "assets/sprites/playButton.png", 64, 50);
		game.load.spritesheet("snowflakes","assets/sprites/snowflakes.png",16,16);
		game.load.image("terrain","assets/sprites/Terrain.png",32,32);
		game.load.image("snowman","assets/sprites/snowman.png",32,64); //juste pour le test_map
		game.load.spritesheet("player","assets/sprites/player.png",32,64);
		
		//load music
		game.load.audio("mainTitle","assets/music/MainTitle.wav");
		
		//load tilemap
		game.load.tilemap("mainMap","assets/maps/test.json",null,Phaser.Tilemap.TILED_JSON);
	},
	
	create: function(){
		var loadingBar = game.add.sprite(368, 284, "loadingBar");
		game.stage.backgroundColor = "#fff";
		
		game.load.setPreloadSprite(loadingBar);
		
		game.state.start("mainTitle");
	}
}