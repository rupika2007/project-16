
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //createCanvas=(400,400);
   monkey=createSprite(80,355,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(200,393,600,10);
  ground.x=ground.width/2
  ground.scale=1.4
  ground.veloityX=-6;
  
   bananaGroup=new Group();
   obstacleGroup=new Group();
   monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  //monkey.debug = true
score=0;
}

function draw() {
   background("green")
  text("Score: "+ score, 20,20);
  console.log(monkey.y);
  //scoring
    score = score + Math.round(getFrameRate()/60);
    
if(keyDown("space")&& monkey.y >= 230)  {
        monkey.velocityY = -12;
}
   //add gravity
  monkey.velocityY =monkey.velocityY + 0.8
  monkey.collide(ground);
  spawnbanana();
  spawnobstacle();
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    ground.velocityX=0;
    monkey.velocitY=0;
    obstacleGroup.setLifetimeEach(-1)
    bananaGroup.setLifetimeEach(-1)
    score=0;
   }
  if (monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach(); 
    
      }
  drawSprites();
}
function spawnbanana(){
  if(frameCount%150===0){
  
  banana=createSprite(600,200,20,20);
  banana.velocityX=-5;
  banana.addImage(bananaImage);
  banana.y=Math.round(random(200,300));
  banana.scale=0.1
  monkey.depth=banana.depth=1
  banana.lifetime=200;
  bananaGroup.add(banana);
  }
}
function spawnobstacle(){
  if(frameCount%300===0){
  
  obstacle=createSprite(600,350,20,20);
  obstacle.velocityX=-5;
  obstacle.addImage(obstacleImage);; 
  obstacle.scale=0.2;
  obstacle.lifetime=300;
  obstacleGroup.add(obstacle);
  }
}



