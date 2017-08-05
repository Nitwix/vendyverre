var gameState = {
	create : function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		initMap(); //appelle la fonction se trouvant dans initMap.js	
		
		initPlayer(); //appelle la fonction se trouvant dans initPlayer.js
		
		addSnow();

		initInput(); //init l'objet input (utilisé dans updatePlayer)
		
	},

	update: function(){
		game.physics.arcade.collide(player,collision);

		updatePlayer();
	}

}