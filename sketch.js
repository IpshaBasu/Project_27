
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    roof = new Roof(100, 30, 500, 50);
    bobObject1 = new Bob(250, 500, 30);
    bobObject2 = new Bob(300, 500, 30);
    bobObject3 = new Bob(350, 500, 30);
    bobObject4 = new Bob(400, 500, 30);
    bobObject5 = new Bob(450, 500, 30);
	rope1 = new Rope(bobObject1.body, roof.body, -80, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -40, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 40, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 80, 0);
    Engine.run(engine)
}


function draw() {
  background("gray");
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  

  
  drawSprites();
 
}



