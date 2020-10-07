  var PLAY=1;
  var END=0;
  var gameState=1;

  var sword,swordImage
  var fruit1,fruit2,fruit3,fruit4;
  var monster,monsterImage;
  var fruitGroup,enemyGroup;
  var gameover,gameoverImage;

  var score=0;

function preload(){
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage =loadAnimation("alien1.png","alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png")
 knifeSound = loadSound("knifeSwooshSound.mp3")
  gameoverSound = loadSound("gameover.mp3")
}

function setup()
{
  createCanvas(450,450);
  sword = createSprite(40,200,20,20);  
  sword.addImage(swordImage);
  sword.scale=0.7;
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}

function draw(){
 background("lightyellow");
  
if(gameState === PLAY){
  Enemy();
  fruits();
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
     
if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+1;
  knifeSound.play();
   fruit.velocityX = -(4+3* score/3)
  }
 else if(enemyGroup.isTouching(sword)){
  gameState = END;
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.velocityX=0;
    enemyGroup.velocityX=0;
    sword.addImage(gameoverImage);
    sword.scale=1.5;
    sword.x=225;
    sword.y=225;
  gameoverSound.play();
   
   }
   }
  drawSprites();
  text("Score:"+score,330,40);
  
}

function fruits(){
  
 if(World.frameCount%80===0){ 
  fruit=createSprite(400,200,20,20);
   position = Math.round(random(1, 2));
  fruit.scale=0.2;
   
 var r=Math.round(random(1,4)); 
  if(r ===1 ) {
  fruit.addImage(fruit1);
  } else if (r === 2){
    fruit.addImage(fruit2)
  } else if (r === 3){
    fruit.addImage(fruit3)
  } else if (r === 4){
    fruit.addImage(fruit4)
  }
   fruit.y=Math.round(random(50,340));
   fruit.velocityX=-7;
   fruit.setlifetime=100;
   
   fruitGroup.add(fruit);
  if(position == 1) {
   fruitGroup.x = 0;
   fruitGroup.setVelocityXEach(5);
   if(score >= 4) {
   fruitGroup.setVelocityXEach(10);} }
   else {
  if(position == 2) {
   fruitGroup.x = 400;
   fruitGroup.setVelocityXEach(-7);
   if(score >= 4) {
   fruitGroup.setVelocityXEach(-10);}} }
     
    fruit.y = Math.round(random(10, 390));
    fruit.velocityX = -7;
    fruit.setLifetime = 100;
   
    fruitGroup.add(fruit); }}

function Enemy(){
  
 if(World.frameCount%100===0){ 
 monster=createSprite(400,200,20,20);
 monster.addAnimation("moving",monsterImage);
 monster.y=Math.round(random(100,300)); 
 monster.velocityX=-(8+(score/10));
 monster.setlifetime=50;
   
 enemyGroup.add(monster);  
}
}
