var fixRect, movingRect;
function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(600, 200, 30, 80);
  fixedRect.shapeColor = "Green";
  movingRect = createSprite(300,100,50,30);
  movingRect.shapeColor = "Green";
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      movingRect.shapeColor = "Red";
      fixedRect.shapeColor = "Red";
    }
    else{
      movingRect.shapeColor = "Green";
      fixedRect.shapeColor = "Green";
  }
  drawSprites();
}