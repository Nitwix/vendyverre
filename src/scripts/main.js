var config = {
	width: 800,
	height: 600,
	antialias: false,
	renderer: Phaser.CANVAS,
	
};

var game = new Phaser.Game(config);

//déclaration des variables
var music;
var snowEmitter;
var map;
//couches de la map test
var fond;
var souches;
var feuilles;
var snow;
var snowman;

//adding the states
game.state.add("boot", bootState);
game.state.add("preload", preloadState);
game.state.add("mainTitle", mainTitleState);
game.state.add("game", gameState);

game.state.start("boot");