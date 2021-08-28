const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(670, 100, 70, 70);
  box8 = new Box(670, 100, 70, 70);
  box9 = new Box(670, 100, 70, 70);
  box10 = new Box(740, 100, 70, 70);
  box11 = new Box(740, 100, 70, 70);
  box12 = new Box(740, 100, 70, 70);
  box111 = new Box(600, 100, 70, 70);
  box222 = new Box(900, 100, 70, 70);
  box333 = new Box(900, 100, 70, 70);
  box444 = new Box(900, 100, 70, 70);
  box555 = new Box(600, 100, 70, 70);
  box666 = new Box(600, 100, 70, 70);
  box777 = new Box(670, 100, 70, 70);
  box888 = new Box(670, 100, 70, 70);
  box999 = new Box(670, 100, 70, 70);
  box101010 = new Box(740, 100, 70, 70);
  box111111 = new Box(740, 100, 70, 70);
  box121212 = new Box(740, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box111.display();
  box222.display();
  box333.display();
  box444.display();
  box555.display();
  box666.display();
  box777.display();
  box888.display();
  box999.display();
  box101010.display();
  box111111.display();
  box121212.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){

  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY});

}