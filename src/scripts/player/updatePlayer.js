function updatePlayer(){
	player.body.velocity.x = 0;

	if(input.left.isDown){
		player.body.velocity.x = -player.cProps.speed; //définit dans initPlayer.js
		player.play("walkLeft");
		player.cProps.gRight = false;
		return;
	}

	if(input.right.isDown){
		player.body.velocity.x = player.cProps.speed;
		player.play("walkRight");
		player.cProps.gRight = true;
		return;
	}
	
	if(player.cProps.gRight){
		player.frame = 1;
	}else{
		player.frame = 4;
	}
	
}
