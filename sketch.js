var fixedrect, movingrect;

function setup() {
  createCanvas(1200,400);
  fixedrect = createSprite(200, 200, 50, 50);
  fixedrect.shapeColor = "Green";
  fixedrect.debug = true;
  movingrect = createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "Green";
  movingrect.debug = true;
}

function draw() {
  background(0);  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY

  if(fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2&&movingrect.x-fixedrect.x<=fixedrect.width/2+movingrect.width/2&&fixedrect.y-movingrect.y<=fixedrect.width/2+movingrect.width/2&&movingrect.y-fixedrect.y<=fixedrect.width/2+movingrect.width/2){
    fixedrect.shapeColor = "Blue";
    movingrect.shapeColor = "Blue";
  }
  else{
    fixedrect.shapeColor = "Green";
    movingrect.shapeColor = "Green";
  }
  drawSprites();
}