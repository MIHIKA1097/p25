
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,side1,side2,side3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);
  side1=new Side(275,370,15,150);
  side2=new Side(329,370,100,15);
  side3=new Side(370,370,15,150); 
  paper=new Paper(200,370);
  ground=new Ground(200,390,400,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 side1.display();
 side2.display();
 side3.display();
 paper.display();
ground.display();
 keyPressed();
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}	 
}


