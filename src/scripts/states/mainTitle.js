var mainTitleState = {
	create: function(){
		game.stage.backgroundColor = "#000";
		music = game.add.audio("mainTitle",1,true);
		music.play();
		
		
//création des flocons
		snowEmitter = game.add.emitter(game.world.centerX,-30,500);
		snowEmitter.makeParticles("snowflakes",[0,1,2,3,4,5,6,7,8]);
		snowEmitter.maxParticleScale = 1;
		snowEmitter.minParticleScale = 0.3;
		snowEmitter.setYSpeed(20, 100);
		snowEmitter.gravity = 0;
		snowEmitter.width = game.world.width * 1.5;
		snowEmitter.minRotation = 0;
		snowEmitter.maxRotation = 40;
		snowEmitter.start(false,12000,10);

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