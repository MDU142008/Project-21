
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftWall;
var rightWall;
var world;
var radio = 40;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var options = {
  isStatic:true
  };
  
  var ball_options={
	restitution : 0.3,
	friction: 0 ,
	density: 1.2,
  isStatic: false
  };

  ground = Bodies.rectangle(width/2,670,width,20,options);
  World.add(world,ground);

  leftWall = Bodies.rectangle(600,600,20,120,options);
  World.add(world,leftWall);
  
  rightWall = Bodies.rectangle(700,600,20,120,options);
  World.add(world,rightWall);
  
  ball = Bodies.circle(260,100,30,ball_options);
  World.add(world,ball);

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
 rect(ground.position.x,ground.position.y,width,20);
 rect(leftWall.position.x,leftWall.position.y,20,120);
 rect(rightWall.position.x,rightWall.position.y,20,120);
 ellipse(ball.position.x,ball.position.y,30);
 


}


function keyPressed(){
 if(keyCode === LEFT_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85});
 }
}
