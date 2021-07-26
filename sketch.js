var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var treasureCollection;
var gameOver,gameOverImg;


function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameOverImg =loadImage("gameOver.png");
}

function setup(){
  gameOver = createSprite(windowWidth/2,windowHeight/2);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;
  createCanvas(500,500);
// Moving background
path=createSprite(windowWidth/2,windowHeight/2);
path.addImage(pathImg);
path.velocityY = 4;
path.depth = 0


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
boy.depth = 1
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {
  
createCanvas(windowWidth,windowHeight)
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection= treasureCollection+ 50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection= treasureCollection+ 50;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection+ 50;
      
    }else{
      if(swordGroup.isTouching(boy)) {

        gameOver.visible = true;
        treasureCollection = 0;
        boy.velocity= 0;
        cashG.velocityEach = 0;
        jwelleryG.velocityEach = 0;
        diamondsG.velocityEach = 0;
    }
  }

  drawSprites();
  textSize(20);
  fill(156);
  text("Treasure: "+ treasureCollection,(windowWidth/2)-50,50);

}

function createCash(){
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(0, windowWidth),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
  if (cashG.isTouching (boy) ){
    cashG.destroyEach();
    treasureCollection= treasureCollection+ 50;
}
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(0, windowWidth),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamonds.depth = 1
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 100 == 0) {
  var jwellery = createSprite(Math.round(random(0, windowWidth),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwellery.depth = 1
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(0, windowWidth),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  sword.depth = 1
  swordGroup.add(sword);
  }

}