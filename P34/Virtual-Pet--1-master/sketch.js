//Create variables here
var dog, happyDog, database, foodS, foodStock,di1,di2;

function preload(){
di1 = loadImage("images/dogImg.png")	
di2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('food')
  foodStock.on("value",readStock)
  dog = createSprite(250,280);
  dog.addImage(di1)
  dog.scale = 0.4
  

  
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  dog.addImage(di2)  
  writeStock(foodS)
} 
  drawSprites();
  //add styles here
  fill(0)
  text("foodremining "+ foodS,170,100)
  textSize(13)
  stroke(7)
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}


 function readStock(data){
  foodS = data.val();

}

function writeStock(x){
  if(x<=0)
  x = 0
  else
  x = x-1
  database.ref('/').update({
    food:x
  })

}


