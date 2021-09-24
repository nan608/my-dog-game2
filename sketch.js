var newX=200

function preload(){
  dog1image = loadImage("Dog 2.png")
  dog2image = loadImage("dog 1.png")
  boneimage = loadImage("bone ..png")
  milkimage = loadImage("milk.png")
}
function setup() {

  createCanvas(1200,800);
 dog1 = createSprite(20, 100, 20, 100);
 dog2 = createSprite(20,300,20,100);
 dog2.addImage(dog1image);
 dog2.scale = 0.2;
 dog1.addImage(dog2image);

 dog1.scale = 0.5;
 dog1.velocityX = 1;
 dog2.velocityX = 1;
 foodgroup = new Group()

 for(var i=0; i<45; i++){
   if(i%3==0){
  bone1=new Bone (newX,random([250,300,350,400,450,500,550]))
  foodgroup.add(bone1.body)}

  if(i%7===0){
  milk1=new Milk (newX,random([250,300,400,450,500,550]))
  foodgroup.add(milk1.body)}

  
 
  newX+=50
 }


 
}

function draw() {
  background(0);  
  drawSprites();
 camera .position.x = dog2.x+200
  if(keyDown("right")){
   
    dog2.x+=80;
  }
  
    if(frameCount%30===0){
      dog1.velocityX += 0.5;
    }

}
