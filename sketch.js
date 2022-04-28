
var trex ,trex_running;
var ground;

function preload()
{
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(50,150,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  ground = createSprite(0, 200, 1500, 20);
}

function draw(){
  background("black");

  movement();
  trex.collide(ground);
  drawSprites();
}

function movement()
{
  if (keyDown("space"))
  {
    trex.y = trex.y - 10;
  }

  trex.velocityY = trex.velocityY + 0.5;
}
