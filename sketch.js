
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,200,250,30);
	ground.shapeColor=color(45,45,45);
	

	bobObject1= new bob(400,200,40);
	bobObject2= new bob(400,200,40);
    bobObject3= new bob(400,200,40);
	bobObject4= new bob(400,200,40);
	
	

	Engine.run(engine);

	//rope1=new ropeclass(bobObject1.body,ground.body,-bobDiameter*2, 0);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  //rope1.display();

  drawSprites();
 
}



