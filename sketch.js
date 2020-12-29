const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var sling;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
 var score = 0;
 var bg;

function setup(){
    createCanvas(1200,1000);
  var  engine =Engine.create();
    world = engine.world;

    //create the bodies here
    ground=new Ground(200,100,1000,30);
    sling=new Slingshot(200,100);
    box1=new Box(270,275);
    box2=new Box(330,275);
    box3=new Box(360,275);
    box4=new Box(390,275);
    box5=new Box(420,275);
    box6=new Box(450,275);
    box7=new Box(480,275);
    box8=new Box(330,235);
    box9=new Box(360,235);
    box10=new Box(390,235);
    box11=new Box(420,235);
    box12=new Box(450,235);
    box13=new Box(360,195);
    box14=new Box(390,195);
    box15=new Box(420,195);
    box16=new Box(390,155);
   
  text("SCORE :",score++,750,40)

    Engine.run(engine);

}

function draw(){
    rectMode(CENTER);
    background(0);


    drawSprities();
  ground.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box14.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();


}

async function getbackground(){
  var response=await fetch("http://worldclockapi.com/api/json/est/now");
  console.log(response);
  var responseJSON=await response.json();
  console.log(responseJSON)
  var dateTime=responseJSON.currentDateTime
  console.log(dateTime);
  var hour=dateTime.slice(11,13);
  console.log(hour);

  if(hour>=6 && hour<=19){
      bg=255
  }
  else{
      bg=0
  }

  backgroundImg=loadImage(bg);
  console.log(backgroundImg);
}