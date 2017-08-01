var mainTitleState = {
	create: function(){
		game.stage.backgroundColor = "#000";
		
		var playButton = game.add.button(game.world.centerX - 64, 300,"playButton",
			function(){
				game.state.start("gameState");
			}, this, 0, 1, 2, 3);
		
		playButton.width = 400;
		playButton.height = 200;
	},
	
	
	render: function(){
		game.debug.text("Vendyverre", 270, 280);
		
	}
}