var movingRect, fixedRect

function setup() {
  createCanvas(400,400);

  fixedRect = createSprite(200,200,50,50)
  fixedRect.shapeColor = "green"
  fixedRect.debug = true
  movingRect = createSprite(300,200,80,30)
  movingRect.shapeColor = "green"
  movingRect.debug = true
}

function draw() {
  background("black");  

  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  console.log(movingRect.x-fixedRect.x)

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
    ){
  movingRect.shapeColor= "red"
  fixedRect.shapeColor= "red"
  }

else{
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"
}
  drawSprites();
}