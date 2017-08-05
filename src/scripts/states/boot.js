var bootState = {
	create: function(){
		game.stage.backgroundColor = "#53adfd";
		game.state.start("preload");

		//setting custom properties
		game.cProps = {};
		
	},

	render: function(){
		game.debug.text("Booting...", 300, 300);
	}
};