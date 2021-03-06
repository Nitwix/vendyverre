var mainTitleState = {
	create: function(){
		game.stage.backgroundColor = "#70C8F0";
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

		music = game.add.audio("title",1,true);
		music.play();

		var cX = game.world.centerX; //to be able to place things

		var title = game.add.sprite(cX, 0, "mainTitle");
		title.anchor.setTo(0.5, 0); //place l'ancre du sprite au milieu de celui-ci
		title.width = 800;
		title.height = 450;

		addFSButton(); //voir fullscreen.js

		
		//création des flocons
		addSnow(); //voir weather.js

		var playButton = game.add.button(cX - 100, 300,"playButton",
			function(){
				game.state.start("game");
				music.stop();
			}, this, 0, 1, 2, 3);

		playButton.width = 200;
		playButton.height = 100;
	},


	render: function(){
		//game.debug.text("Vendyverre", 350, 280);

	}
}