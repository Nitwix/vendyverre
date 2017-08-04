var gameState = {
	create : function(){
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
		collision.resizeWorld();
	}

}