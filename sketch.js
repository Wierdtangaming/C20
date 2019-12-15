var rect_moving,rect_fixed;
var rect1,rect2;

function setup() {
  createCanvas(800,400);

  rect_fixed = createSprite(400, 200, 75, 75);
  rect_moving = createSprite(400, 200, 50, 50);

  rect1 = createSprite(600, 300, 50, 50);
  rect2 = createSprite(200, 300, 50, 50);

  rect1.shapeColor = "green";
  rect2.shapeColor = "white";

  rect1.velocityX = -5;
  rect2.velocityX = 5; 
}

function draw() {
  background(0,0,0); 
  rect_moving.x = World.mouseX;
  rect_moving.y = World.mouseY;
  
  if (rect_moving.x - rect_fixed.x < rect_moving.width/2 + rect_fixed.width/2 && 
      rect_fixed.x - rect_moving.x < rect_moving.width/2 + rect_fixed.width/2 &&
      rect_moving.y - rect_fixed.y < rect_moving.height/2 + rect_fixed.height/2 && 
      rect_fixed.y - rect_moving.y < rect_moving.height/2 + rect_fixed.height/2 
      ) {
      rect_moving.shapeColor  = "red";
      rect_fixed.shapeColor = "red";
  }
  else {
    rect_moving.shapeColor  = "blue";
    rect_fixed.shapeColor = "blue";

  }

  if (rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && 
    rect2.x - rect1.x < rect1.width/2 + rect2.width/2) {
      rect1.velocityX = rect1.velocityX * (-1);
      rect2.velocityX = rect2.velocityX * (-1);
          

  }
  else if (rect1.y - rect2.y < rect1.height/2 + rect2.height/2 && 
           rect2.y - rect1.y < rect1.height/2 + rect2.height/2) {
      rect1.velocityY = rect1.velocityY * (-1);
      rect2.velocityY = rect2.velocityY * (-1);
          

  }
  drawSprites();
}