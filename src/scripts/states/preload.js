var preloadState = {
	preload: function(){
		//load images
		game.load.image("loadingBar", "assets/sprites/loading/loadingBar.png");
		
		//load spritesheets
		game.load.image("mainTitle", "assets/sprites/mainMenu/mainTitle.png");
		game.load.spritesheet("playButton", "assets/sprites/mainMenu/playButton.png", 64, 50);
		game.load.image("fsButton", "assets/sprites/mainMenu/fullscreen.png")


		game.load.spritesheet("snowflakes","assets/sprites/snowflakes.png",16,16);
		game.load.spritesheet("smoke","assets/sprites/game/smoke.png",32,16);
		game.load.image("terrain","assets/sprites/game/Terrain.png",32,32);
		game.load.image("snowman","assets/sprites/game/snowman.png",32,64); //juste pour le test_map
		game.load.image("maisons","assets/sprites/game/maison.png",32,32);
		game.load.spritesheet("player","assets/sprites/game/player.png",32,64);
		
		//load music
		game.load.audio("title","assets/music/title.wav");
		
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