
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
background(230);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,450,70);
	dustbin = new Dustbin();
	ground = new Ground(width/2, 670, width, 20);
	
	
	
	Engine.run(engine);
  
}


function draw() {
	background("white");
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80});
  
	}
}




