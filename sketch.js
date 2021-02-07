const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var ball;
var engine, world;

var players=[];
var divisions=[];
var plinkos=[];

var divisionHeight=300;



function setup() {
  createCanvas(480,700);
  engine = Engine.create();
    world = engine.world;


    for(var k=0;k<=width;k=k+80){

      divisions.push(new Division (k,height-divisionHeight/2,
        10,divisionHeight))
      }
      
      for(var j=40;j<width;j=j+50){
        plinkos.push(new Plinko(j,75,20));
      }

for (var a=40;a<width;a=a+50){
  plinkos.push(new Plinko(a,295,20));
}


    //  if (frameCount%60===0){
   //     players.push(new Player(random(width/2-10,width/2+10,10,10)));
  //    }
    
    for(var j=15;j<width-10;j=j+50){
      plinkos.push(new Plinko(j,175,20));
    }

ground = new Ground (240,690,480,25);




}

function draw() {
  background("lightblue");  

for(var k=0;k<divisions.length;k++){
  divisions[k].display();
}

for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
}

if(ball != null){
  ball.display();
}


  Engine.update(engine);
 
  
  

ground.display();


}

function mousePressed(){

ball = new Player(mouseX,10,15);


}







