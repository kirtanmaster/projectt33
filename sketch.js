
var bg,snowimage;

function preload(){
  bg=loadImage("snow2.jpg");
  snowimage=loadImage("snow5.webp")
}




function setup() {
  createCanvas(2000,800);
  
}

function draw() {
  background(bg);
  if(frameCount%35===0){
    var snow=createSprite(100,-20);
    snow.x=Math.round(random(20,1800));
    snow.addImage(snowimage);
    snow.velocityY=3;
    
    snow.scale=0.15;
    snow.lifetime=350;
  }
  

  drawSprites();
}