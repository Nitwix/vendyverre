var gameState = {
	create : function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);

		initMap(); //appelle la fonction se trouvant dans initMap.js	

		initPlayer(); //appelle la fonction se trouvant dans initPlayer.js

		initNPC("Greg","greg",128,416); // dans initPNC, mis à l'index 0 dans npcs
		
		addDialogBox();

		addSnow(); //voir weather.js

		addFSButton(); //voir fullscreen.js

		initInput(); //init l'objet input (utilisé dans updatePlayer)

		fadeIn(); //voir fadeIn.js



	},

	update: function(){
		game.physics.arcade.collide(player, collision);

		updatePlayer();

		overlap(npcs[0],"... Salut");


	},
	render: function(){
	}

}