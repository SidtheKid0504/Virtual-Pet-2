//Create variables here
var dogImg, happyDogImg, dog;
var database, foodS, foodStock;
var food;

function preload()
{
  dogImg = loadImage("images/Dog.png")
  happyDogImg = loadImage("images/happydog.png")
}

function setup() {
  createCanvas(1000, 500);
  food = new Food()
  dog = createSprite(250, 400, 50, 50);
  dog.scale = 0.25;
  dog.addImage(dogImg);

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", food.getFoodStock);
  feedButton = createButton('Feed Dog')
  feedButton.position(450, 150)
  addFoodButton = createButton("Add Food");
  addFoodButton.position(600, 150)
  
}

function draw() {  
  background(46, 139, 87)
  drawSprites();
  textSize(25);
  fill(245, 245, 255);
  text("Press the Up_Arrow Key to Feed Walter", 25, 50);
  text("Food Stock: " + foodS, 150, 250);
  text()
  food.display();
  
 
  feedButton.mousePressed(() => { 
    food.deductFoodStock()
  })
  
  

  
  addFoodButton.mousePressed(() => {
    food.addFood()

  })    
}




