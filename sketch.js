//set up matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//create variables for game objects
var engine, world;
var ground, stand1, stand2;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var b17, b18, b19, b20, b21, b22, b23, b24, b25;
var polygon, slingshot;

function setup(){
    //create the canvas
    createCanvas(900,400);

    //create the engine and world
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    //create the ground and stands
    ground = new Ground(450,390,900,20);
    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);
    //create the blocks
        //stand 1 
            //level 1
            b1 = new Block(300,275,30,40);
            b2 = new Block(330,275,30,40);
            b3 = new Block(360,275,30,40);
            b4 = new Block(390,275,30,40);
            b5 = new Block(420,275,30,40);
            b6 = new Block(450,275,30,40);
            b7 = new Block(480,275,30,40);
            //level 2
            b8 = new Block(330,235,30,40);
            b9 = new Block(360,235,30,40);
            b10 = new Block(390,235,30,40);
            b11 = new Block(420,235,30,40);
            b12 = new Block(450,235,30,40);
            //level 3
            b13 = new Block(360,195,30,40);
            b14 = new Block(390,195,30,40);
            b15 = new Block(420,195,30,40);
            //level 4
            b16 = new Block(390,155,30,40);
        //stand 2
            //level 1
            b17 = new Block(640,175,30,40);
            b18 = new Block(670,175,30,40);
            b19 = new Block(700,175,30,40);
            b20 = new Block(730,175,30,40);
            b21 = new Block(760,175,30,40);
            //level 2
            b22 = new Block(670,135,30,40);
            b23 = new Block(700,135,30,40);
            b24 = new Block(730,135,30,40);
            //level 3
            b25 = new Block(700,95,30,40);
    //create the polygon and sling    
    polygon = new Polygon(50,200);
    slingshot = new Slingshot(polygon.body,{x:100,y:200});
}

function draw(){
    
    //give the background a colour
    background(55,45,45);
    
    //write the instructions
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

    //display the ground and stands
    ground.display();
    stand1.display();
    stand2.display();
    //display the
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    fill("pink");
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    fill("turquoise");
    b13.display();
    b14.display();
    b15.display();
    fill("grey");
    b16.display();
    fill("skyblue");
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    fill("turquoise");
    b22.display();
    b23.display();
    b24.display();
    fill("pink")
    b25.display();
    
    polygon.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}
  
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(polygon.body);
    }
}