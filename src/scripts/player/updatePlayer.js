function updatePlayer(player){
	player.body.velocity.x = 0;


	if(input.left.isDown){
		player.body.velocity.x = -player.cProps.speed; //définit dans initPlayer.js
		player.play("walkLeft");
	}

	if(input.right.isDown){
		player.body.velocity.x = player.cProps.speed;
		player.play("walkRight");
	}
}
