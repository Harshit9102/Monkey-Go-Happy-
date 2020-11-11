
var monkey , monkey_running;
var bg,bgImage;
var fake_ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup; 
var ObstacleGroup;
var score;

var survival_time;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bgImage = loadImage("Jungle bg.jpg");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  
  bg = createSprite(300,200,1,1);
  bg.addImage(bgImage);
  bg.scale=1.2;
  bg.velocityX=-3;
  
  
monkey = createSprite(50,330,1,1);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  fake_ground = createSprite(200,370,400,10);
  fake_ground.visible=false;
  
  FoodGroup = new Group();
  ObstacleGroup = new Group();
  
  edges=createEdgeSprites();
}


function draw() {
    background("skyblue");

  if(bg.x<80){
    bg.x=bg.width/2;
  }
    
  if(keyDown("space")&&monkey.y>320){
    monkey.velocityY=-10;
  }
  
  monkey.velocityY=monkey.velocityY+0.5;
  
  monkey.collide(edges);
  monkey.collide(fake_ground);
  
  spawn_banana();
  spawn_obstacles();
  
  drawSprites();
  
  text(mouseX+","+mouseY,mouseX,mouseY);
  
   stroke("black");
  textSize(20);
  fill("black");
  survival_time=Math.ceil(frameCount/frameRate());
  text("Survival Time= "+survival_time,100,50);
}

function spawn_banana(){
  if(frameCount%100===0){
    banana = createSprite(450,450,1,1);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.y=Math.round(random(200,290));
    banana.lifetime=100;
    FoodGroup.add(banana);
  }
}

function spawn_obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(450,345,1,1);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-7;
    obstacle.lifetime=80;
    ObstacleGroup.add(obstacle);
  }
}



