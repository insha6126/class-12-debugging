var trex ,trex_running;
var ground
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(100,170,50,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5

  edges = createEdgeSprites();
ground=createSprite(200,180,400,20);

 
}

function draw(){
  background("lightgrey");

  if(keyDown("space")){
    trex.velocityY = -8;
  }
  trex.velocityY = trex.velocityY + 1;

  trex.collide(ground);

  drawSprites();
  

}
