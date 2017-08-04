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
		game.camera.follow(player);
		
		addSnow();
		
		
	},
	update: function(){
		game.physics.arcade.collide(player,collision);
	}

}