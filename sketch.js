const Bodies = Matter.Bodies;
const Body = Matter.Bodies;
const Engine = Matter.Engine;
const World =Matter.World;

var engine,world;
var walking;
var umbrella;
var maxDrops = 100;
var dropImg;
var drops=[];
var thunder,thunder1,thunder2,thunder3,thunder4;

function preload(){
    walking = loadAnimation("walking_1-300x300.png","walking_2-300x300.png","walking_3-300x300.png","walking_4-300x300.png","walking_5-300x300.png","walking_6-300x300.png","walking_7-300x300.png","walking_8-300x300.png");
    dropImg = loadImage("drop-removebg-preview-20x20.png")
    thunder1 = loadImage("1.png")
    thunder2 = loadImage("2.png")
    thunder3 = loadImage("3.png")
    thunder4 = loadImage("4.png")

}

function setup(){
   createCanvas(500,800)
   engine = Engine.create()
   world = engine.world;
   umbrella = new Umbrella(250,670,120)
  
   
   if(frameCount%150===0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400),random(0,200),10))
    }          
    }
 
  //Engine.run(engine)
}

function draw(){
    Engine.update(engine)
    background("black")
    umbrella.display()
    
    for(var j=0; j<maxDrops; j++){
        drops[j].drawEllipse()
        drops[j].updatePosition();
       
    }
    
    if(frameCount%60===0){
        image(thunder1,random(150,350),random(0,10),200,200)
    }

   drawSprites(); 
   
}   

