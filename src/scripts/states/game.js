var gameState = {
	create : function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		map = this.game.add.tilemap("mainMap");
		map.addTilesetImage("Terrain","terrain");
		map.addTilesetImage("snowman","snowman");

		fond = map.createLayer("fond");
		fond.resizeWorld();

		souches = map.createLayer("sapins");
		souches.resizeWorld();

		snow = map.createLayer("sol");
		snow.resizeWorld();

		feuilles = map.createLayer("feuilles");
		feuilles.resizeWorld();

		snowman = map.createLayer("snowman");
		snowman.resizeWorld();
		
		collision = map.createLayer("collision");
		map.setCollisionByExclusion([], true, collision);
		collision.resizeWorld();
		collision.visible = false;		
		
		player = game.add.sprite(0,480,"player");
		player.frame = 1;
		game.physics.enable(player,Phaser.Physics.ARCADE);
		player.body.collideWorldBounds = true;
		game.camera.follow(player);

		player.animations.add("walkRight", [0,1,2], 3);
		player.animations.add("walkLeft", [3,4,5], 3);
		
		addSnow();

		initInput(); //init l'objet input (utilisé dans updatePlayer)
		
	},

	update: function(){
		game.physics.arcade.collide(player,collision);

		updatePlayer(player);
	}

}