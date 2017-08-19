function addSnow(){
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
}

function removeSnow(){
	snowEmitter.kill();
	//let snowTween = game.add.tween
}

function addSmoke(x,y){
	smokeEmitter = game.add.emitter(x,y,8);
	smokeEmitter.width = 32;
	smokeEmitter.height = 16;
	smokeEmitter.makeParticles("smoke",[0,1]);
	smokeEmitter.maxParticleScale = 0.9;
	smokeEmitter.minParticleScale = 0.5;
	smokeEmitter.setYSpeed(-20,-30);
	smokeEmitter.gravity = 0;
	smokeEmitter.minRotation = 0;
	smokeEmitter.maxRotation = 10;
	//smokeEmitter.particleBringToTop = true;
	smokeEmitter.enableBody = true;
	smokeEmitter.start(false,1700,500);
	
}