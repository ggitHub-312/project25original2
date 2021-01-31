
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustBin1, dustBin2, dustBin3;
var paperObject;
var groundObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustBin1 = new Dustbin(650,500,130,150);
	//dustBin2 = new Dustbin(500,640,200,10);
	//dustBin3 = new Dustbin(490,500,10,150);
	paperObject = new Paper(50,150,70);
	groundObject = new Ground(0,650,800,25);
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	
  
  background("lightblue");

  groundObject.display();
  dustBin1.display();
  //dustBin2.display();
 // dustBin3.display();

  paperObject.display();
  

 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:15,y:-20})
	}
}

