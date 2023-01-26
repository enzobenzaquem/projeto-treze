var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  //função para o coelho se mover
  rabbit.x = World.mouseX; 

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  var select_sprites = Math.round(random(1,3));
 if (frameCount % 80 == 0) {
  if (select_sprites == 1) {
    createApples();
  } else if (select_sprites == 2) {
    createOrange();
  } else if (select_sprites == 3);
    createRed(); 
} 


} 

function createApples() {
apple = createSprite (random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale = 0.07;
apple.velocityY = 3; 
apple.lifetime = 150;
} 

function createOrange() {
orangeleaves = createSprite (random(50, 350),40, 10, 10);
orangeleaves.addImage(orangeImg);
orangeleaves.scale = 0.08;
orangeleaves.velocityY = 3;
orangeleaves.lifetime = 150;
}

function createRed() {
redleaves = createSprite (random(50, 350),40, 10, 10);
redleaves.addImage(redImg);
redleaves.scale = 0.06;
redleaves.velocityY = 3; 
redleaves.lifetime = 150; 
} 
  