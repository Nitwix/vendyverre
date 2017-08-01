var bootState = {
	preload: function(){
		//loading image 
	},

	create: function(){
		game.stage.backgroundColor = "#53adfd";
		game.state.start("preload");
	},

	render: function(){
		game.debug.text("Booting...", 300, 300);
	}
};