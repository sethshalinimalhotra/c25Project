
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


	engine = Engine.create();
	world = engine.world;

	//creating paper , dustbin and  ground
	paper = new Paper(100,450,40);
	dustbin = new Dustbin();
	ground = new Ground(width/2, 670, width, 20);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  ground.display();
  paper.display();
  dustbin.display();
  drawSprites();
 
}
//if up arrow key is pressed apply force to paper
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25});
  
	}
}




