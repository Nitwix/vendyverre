function updatePlayer(player){
	player.body.velocity.x = 0;


	if(input.left.isDown){
		player.body.velocity.x = -100;
		player.play("walkLeft");
	}

	if(input.right.isDown){
		player.body.velocity.x = 100;
		player.play("walkRight");
	}
}