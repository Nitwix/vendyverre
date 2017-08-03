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

//adding the states
game.state.add("boot", bootState);
game.state.add("preload", preloadState);
game.state.add("mainTitle", mainTitleState);

game.state.start("boot");