var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":3,"version":"giPLvnLIzsX5mwhuHK3yp7SFUlvY06_c","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"CktYdd8KqiPnjjQ94SYbf01Chy_HTc5e","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"jwouu6I0rKbGs624QXUZEMDAnC5Nn8n7","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Game States
var PLAY=1;
var END=0;
var gameState=1;


var Survival=0;


var monkey = createSprite(62,356,20,50);
monkey.setAnimation("monkey");
monkey.scale=0.15;


//create a ground sprite
var ground = createSprite(200,380,800,20);
ground.x = ground.width /2;

//create Obstacle and Cloud Groups
var ObstaclesGroup = createGroup();
var bananaGroup = createGroup();

var survivalTime=0;
 stroke("black");
 textSize(20);
 fill("black");

function draw() {
  
  background(255);
  
 if (World.frameCount % 25 === 0) {
   Survival = Survival +1;
 }
  text("Survival Time : "+Survival,100,50);
  
  //add gravity              
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  //move the ground
    ground.velocityX = -10;
    
    
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space") && monkey.y>=322){
   monkey.velocityY=-15 ;
    
  }
  
  
    food();
    obstacles();
    
   
    //console.log(monkey.y);
   drawSprites();
     
  
}

function food() {
  //write code here to spawn the clouds
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(227,224,40,10);
    banana.y = randomNumber(120,250);
    banana.setAnimation("Banana");
    banana.scale = 0.07;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 80;
    
    
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}


  function obstacles() {
  //write code here to spawn the clouds
  if (World.frameCount % 300 === 0) {
    var obstacles = createSprite(150,350,40,10);
    
    obstacles.setAnimation("Stone");
    obstacles.scale = 0.15;
    obstacles.velocityX = -3;
    
     //assign lifetime to the variable
    obstacles.lifetime = 80;
    
    
    
    //add each cloud to the group
    ObstaclesGroup.add(obstacles);
  }
  
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
