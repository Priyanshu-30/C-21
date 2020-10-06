var fixedRect, movingRect;
var go1,go2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1=createSprite(800,400,60,60);
  go1.shapeColor = "tan";
  go2=createSprite(500,400,60,60);
  go2.shapeColor = "tan";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,go1)){
    go1.shapeColor="tan";
    movingRect.shapeColor="purple";
  }
  else{
    go1.shapeColor="red";
    movingRect.shapeColor="green";

  }
  drawSprites();
}
