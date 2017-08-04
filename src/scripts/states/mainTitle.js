var mainTitleState = {
	create: function(){
		game.stage.backgroundColor = "#000";
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

		music = game.add.audio("title",1,true);
		music.play();
		
		
//création des flocons
		addSnow(); //voir weather.js

		var playButton = game.add.button(game.world.centerX - 200, 300,"playButton",
			function(){
				game.state.start("game");
				music.stop();
			}, this, 0, 1, 2, 3);

		playButton.width = 400;
		playButton.height = 200;
	},


	render: function(){
		game.debug.text("Vendyverre", 350, 280);

	}
}