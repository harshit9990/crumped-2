
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(400,680,800,20);
	//Create the Bodies Here.
	paper = new Paper(200,400,30,30);
	dustbin1 = new Dustbin(600,650,20,200);
	dusbin2 = new Dustbin(400,590,200,20);
	dustbin3 =new Dustbin(600,510,20,200);
	dustbin3 = new Dustbin;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ground.display();  
 paper.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();


}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}

}


