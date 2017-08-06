function initMap(){
	map = this.game.add.tilemap("mainMap");
	map.addTilesetImage("Terrain","terrain");
	map.addTilesetImage("snowman","snowman");
	map.addTilesetImage("maison","maisons");

	fond = map.createLayer("fond");
	fond.resizeWorld();

	souches = map.createLayer("sapins");
	souches.resizeWorld();

	snow = map.createLayer("sol");
	snow.resizeWorld();

	maisons = map.createLayer("maisons");
	maisons.resizeWorld();

	detailsM1 = map.createLayer("detailsM1");
	detailsM1.resizeWorld();

	detailsM2 = map.createLayer("detailsM2");
	detailsM2.resizeWorld();

	detailsM3 = map.createLayer("detailsM3");
	detailsM3.resizeWorld();

	feuilles = map.createLayer("feuilles");
	feuilles.resizeWorld();

	snowman = map.createLayer("snowman");
	snowman.resizeWorld();

	collision = map.createLayer("collision");
	map.setCollisionByExclusion([], true, collision);
	collision.resizeWorld();
	collision.visible = false;
}
