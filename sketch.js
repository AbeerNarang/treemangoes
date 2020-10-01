const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree,treeImg;
var stone;
var mng,mng1,mng2,mng3,mng4,mng5,mng6,mng7,mng8,mng9,mng10;
var chain1;

function preload()
{
treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(800,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400,395,800,10);
	boy = new Boy(200,350,130,170);
	stone = new Stone(160,305,15);
	mng1 = new Mango(650,30,40); 
	mng2 = new Mango(550,50,40); 
	mng3 = new Mango(600,80,40); 
	mng4 = new Mango(520,110,40); 
	mng5 = new Mango(600,130,40); 
	mng6 = new Mango(680,80,40); 
	mng7 = new Mango(750,160,40); 
	mng8 = new Mango(480,150,40); 
	mng9 = new Mango(680,150,40); 
	mng10 = new Mango(550,180,40); 
	chain1 = new Chain(stone.body,{x:160,y:305});
	tree = createSprite(600,220,10,10);
  tree.addImage("tree.png",treeImg);
  tree.scale = 0.35;
  tree.depth = 0.1;
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(200);
  drawSprites();
  ground.display();
  boy.display();
  stone.display();
  mng1.display();
  mng2.display();
  mng3.display();
  mng4.display();
  mng5.display();
  mng6.display();
  mng7.display();
  mng8.display();
  mng9.display();
  mng10.display();
  chain1.display();

  function detectCollision(stone,mng){
	mp = mng.body.position
	sp = stone.body.position 
 
	var distance=dist(sp.x,sp.y,mp.x,mp.y)
	if(distance<= stone.radius + mng.radius){
	Matter.Body.setStatic(mng.body,false);	   
	}
 
  }
  
  detectCollision(stone,mng1);
  detectCollision(stone,mng2);
  detectCollision(stone,mng3);
  detectCollision(stone,mng4);
  detectCollision(stone,mng5);
  detectCollision(stone,mng6);
  detectCollision(stone,mng7);
  detectCollision(stone,mng8);
  detectCollision(stone,mng9);
  detectCollision(stone,mng10);

}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}



	function mouseReleased(){
	chain1.fly();
  }