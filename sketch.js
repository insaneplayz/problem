const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,canvas;
var bgimg;
var bird,bimg,bird2
//var obs,obspng;
var test


function preload(){
    bgimg = loadImage("bg.jpg")
    bimg = loadImage("bird.png")
}
function setup(){
canvas =  createCanvas(windowWidth,windowHeight);

engine = Engine.create();
world = engine.world;

ball = new Bird(200,100,200,150);

//bird = createSprite(200,200,200,200);
////bird.addImage(bimg)
//World.add(world, bird)

}
function draw(){
  background(bgimg);
 
  Engine.update(engine);
 
  ball.display();


 
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(bird, bird.position, {x: 1, y: -1});
	}
 
 drawSprites();
}
