var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1200,400);
  speed=random(55,90);
  weight=random(400,1100)
  car=createSprite(100,200,30,30);//changed y position of car from 100 --> 200 so that it can come in contact with wall.
  car.velocityX=speed;
  car.shapeColor="blue";

  wall=createSprite(1100,200,60,height/2);
  wall.shapeColor="orange";

  
}

function draw() {
  background("black");  
  drawSprites();
  
 // speed=random(55,90);
  //weight=random(400,1500); 

 // car.velcotiyX=speed;
  
   deformation = 0.5 * weight * speed * speed / 22500;

if(wall.x-car.x < car.width/2 + wall.width/2){
    
    if(deformation<100){
      car.shapeColor="green";
      text("Good for Passengers", 800,200);
      //car.velocityX=0
    }
    if (deformation>100 && deformation<180){
      car.shapeColor="yellow";
      text("Average for Passengers", 800,200);
      //car.velocityX=0 ;
    }
    if(deformation>180){
      car.shapeColor="red";
      text("Lethal for Passengers", 800,200);
      //car.velocityX=0
    }
    car.velocityX=0;
  }
}
