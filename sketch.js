
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4,mango5,mango6;
var stone;
var ground;
var boy,boyImg;
var tree;

function preload()
{
   boyImg = loadImage("boy.png");
	
}

function setup() {
	createCanvas(1800, 800);

	engine = Engine.create();

	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(300,790,10000,10);

	        // image(this.image,950,5,800,800);


	tree = new Tree(1300,250,650,650);

	stone = new Stone(300,600,100);

	mango1 = new Mango(1300,100,70);
	mango2 = new Mango(1100,100,70);
	mango3 = new Mango(1550,100,70);
	mango4 = new Mango(1400,30,70);
	mango5 = new Mango(1230,200,70);

	boy = createSprite(400,660,10,10);
	boy.scale = 0.2;

	boy.addImage("boy.png",boyImg)

    rope = new Rope(stone.body,{x:300,y:560})

	Engine.run(engine);
  
}


function draw() {

	background("white");

	// Engine.update(engine);

  rectMode(CENTER);
 

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);

   tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
drawSprites();
  stone.display();
  rope.display();



  
 
 
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectollision(stone,mango)
{
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r)
	{
		Matter.Body.setStatic(Lmango.body,false);

	}

}


function mouseDragged()
{
	console.log("stone");
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased()
{
	console.log("fly")
   rope.fly()
}


