function initPlayer(){
	player = game.add.sprite(0,416,"player");
	player.anchor.setTo(0.5,1);
	player.frame = 1;
	game.physics.enable(player,Phaser.Physics.ARCADE);
	player.body.collideWorldBounds = true;
	game.camera.follow(player,Phaser.Camera.FOLLOW_PLATFORMER);

	var animSpeed = 7; //utilisé pour définir la vitesse des animations ci-dessous
	player.animations.add("walkRight", [0,1,2], animSpeed);
	player.animations.add("walkLeft", [3,4,5], animSpeed);

	player.cProps = {}; //proprietés perso du sprite (custom props)
	
	player.cProps.speed = 150;

	player.cProps.gRight = true; //going right = true
}