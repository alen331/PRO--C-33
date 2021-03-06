var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var gameState = "play";
var particle;
var divisionHeight=300;
var score =0;
var turn =0;
var mous;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 


function draw() {
  background("black");
  textSize(20);
    text("SCORE - "+score,100,50);

  text("500",25,550);
  text("points",15,570);

  text("500",100,550);
  text("points",90,570);

  text("500",185,550);
  text("points",170,570);

  text("500",265,550);
  text("points",255,570);

  text("100",345,550);
  text("points",335,570);

  text("100",425,550);
  text("points",415,570);

  text("100",505,550);
  text("points",495,570);

  text("200",585,550);
  text("points",575,570);

  text("200",665,550);
  text("points",655,570);

  text("200",745,550);
  text("points",735,570);
 //text("Score : "+score,20,30);

  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

       if(particle!==null){
      particle.display();
    }
  
}

function mousePressed(){
  if(gameState== "play"){
    
    count++;
 particle=new Particle(mouseX,10,10,10);
  }
}