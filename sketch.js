const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball,chain,ground;
var engine,world;
var box1,box2,box3,box4,box5,box6;
var bgImg;
var  monster;

function preload(){
bgImg = loadImage("gamingbackground1.jpg")

}

function setup() {
    createCanvas(1500,600)
    
    

    engine= Engine.create();
    world = engine.world;
    
    ground = new Ground(500,400,1000,20);

    box1 = new Box(600,350,70,70);
    box2 = new Box(670,350,70,70);
    box3 = new Box(740,350,70,70);
    box4 = new Box(635,280,70,70);
    box5 = new Box(705,280,70,70);
    box6 = new Box(670,210,70,70);
   
    ball = new Ball(400,300,150,150);
    chain = new Chain(ball.body,{x:400 , y: 100});
    monster = new Monster(800, 380, 100, 200);
}
function draw() {
    background(bgImg)
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display()
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ball.display();
    chain.display();
    monster.display()
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY})
}