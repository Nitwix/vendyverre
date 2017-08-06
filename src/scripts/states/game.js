var gameState = {
	create : function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		initMap(); //appelle la fonction se trouvant dans initMap.js	
		
		initPlayer(); //appelle la fonction se trouvant dans initPlayer.js
		
		addSnow(); //voir weather.js

		addFSButton(); //voir fullscreen.js

		initInput(); //init l'objet input (utilisé dans updatePlayer)

		fadeIn(); //voir fadeIn.js
		
	},

	update: function(){
		game.physics.arcade.collide(player,collision);

		updatePlayer();
	}

}