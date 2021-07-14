
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper1=new Paper(200,650)
    slingShot=new SlingShot(paper1.body,{x:200,y:200})
	Engine.run(engine);
	
}





function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine)
 

  groundObject.display();
  dustbinObj.display();
  paper1.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    slingShot.fly()
}





