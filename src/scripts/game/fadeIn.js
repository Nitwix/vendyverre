function fadeIn(){
	var bb = game.add.graphics(0,0); //black box that covers the whole screen
	bb.beginFill("#000000", 1);
	bb.drawRect(0, 0, game.camera.width, game.camera.width);

	var bbtween = game.add.tween(bb);
	bbtween.to({alpha: 0}, 1000, null, true);
	bbtween.onComplete.add(function(){
		game.camera.shake();
	});
}