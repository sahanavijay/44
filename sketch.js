var canvas;
var jungle, pc_image, npc_image;
var bro_image, jungle_image;
var  player, playerCount;
var pc, point, junk,bro;

function preload() 
{
  jungle = loadImage("Background.png");
  pc_image= loadImage("player.png");
  npc_image= loadImage("Npc1.png")
  bro = loadImage("bro.png")
}

function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight);
  jungle = createSprite(400,100,400,20);
  jungle.addImage("jungle",jungle_image);
  jungle.scale=0.3
  jungle.x = width /2;

  pc = createSprite(50,200,20,50);
  pc.addAnimation("running", pc_running);
  pc.addAnimation("collided", pc_collided);
  pc.scale = 0.15;
  pc.setCollider("circle",0,0,300);

  bro = createSprite(90,200,20,50);
  bro.addAnimation("collided",bro_collided);
  bro.scale = 0.15;
    
  invisibleGround = createSprite(400,350,1600,10);
  invisibleGround.visible = false;

}

function draw() 
{
  background(jungle);
  drawSprites();
}