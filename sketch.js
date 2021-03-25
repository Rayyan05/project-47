const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thief
var lazer1
var lazer2
var barrier
var PLAY = 1
var END = 0
var gameState = PLAY




function preload(){
  Bg = loadImage("Background.GIF")
  thief1 = loadImage("thief.png")
  star1 = loadImage("Star.webp")
  guard = loadImage("Guard.png")
  arrow1 = loadImage("arrow0.png")
  key = loadImage("key.jpg")
}


function setup() {
  createCanvas(1200,6000);


  engine = Engine.create();
    world = engine.world;



  thief = createSprite(1100,5880,30,30)
  thief.addImage(thief1)
  thief.scale = 0.1

  lazer1 = createSprite(400,5600,800,5)
  lazer1.velocityY = 2
  lazer1.shapeColor='red'
 

  lazer2 = createSprite(800,5300,800,5)
  lazer2.velocityY = -2
  lazer2.shapeColor='red'



  barrier = createSprite(100,5100,2400,5)
  barrier.visible = false

  barrier2 = createSprite(100,5700,2400,5)
  barrier2.visible = false

  end1 = createSprite(600,5000,250,50)

  black1 = createSprite(100,4100,30,30)
  black1.addImage(guard)
  black1.velocityX = 6
  black1.scale = 0.1
 

 

 barrier3 = createSprite(5,4500,5,1000)
 barrier3.visible = false

 barrier4 = createSprite(1195,4500,5,1000)
 barrier4.visible = false

 black2 = createSprite(1100,4600,30,30)
 black2.addImage(guard)
 black2.velocityX = -6
 black2.scale = 0.1
 

 black3 = createSprite(600,4300,30,30)
 black3.addImage(guard)
 black3.velocityY = -6
 black3.scale = 0.1


 black4 = createSprite(900,3000,30,30)
 black4.addImage(guard)
 //black3.velocityY = -6
 black4.scale = 0.1


 black5 = createSprite(400,2700,30,30)
 black5.addImage(guard)
 //black3.velocityY = -6
 black5.scale = 0.1



 


 

 end2 = createSprite(600,3800,250,50)


lazer3 = createSprite(500,3280,5,1000)
lazer3.shapeColor='red'



lazer3.velocityY = 7



lazer4 = createSprite(650,3285,5,1000)
lazer4.shapeColor='red'
lazer4.velocityY = 7


lazer5 = createSprite(400,2200,800,5)
lazer5.shapeColor = 'red'
lazer5.velocityX = 7



lazer6 = createSprite(800,3000,800,5)
lazer6.shapeColor = 'red'
lazer6.velocityX = -7


lazer7 = createSprite(400,500,800,5)
lazer7.shapeColor = 'red'
lazer7.velocityX = 18

lazer8 = createSprite(400,300,800,5)
lazer8.shapeColor = 'red'
lazer8.velocityX = 18

lazer9 = createSprite(400,400,800,5)
lazer9.shapeColor = 'red'
lazer9.velocityX = 18





barrier5 = createSprite(600,3600,1000,5)
barrier5.visible = false


barrier6= createSprite(600,2000,1000,5)
barrier6.visible = false


barrier7 = createSprite(5,2900,5,2000)
barrier7.visible = false


barrier8 = createSprite(1195,2900,5,2000)
barrier8.visible = false


barrier9 = createSprite(600,3900,600,5)
barrier9.visible = false


barrier10 = createSprite(600,4800,600,5)

barrier10.visible = false

barrier11 = createSprite(5,470,5,600)
barrier12 = createSprite(1195,470,5,600)

end3 = createSprite(600,1700,250,50)




wall1 = createSprite(750,1400,450,5)
wall2  =createSprite(550,1250,5,450)
wall3  =createSprite(750,1100,5,400)
wall4 = createSprite(400,900,650,5)
wall5 = createSprite(400,1030,400,5)
wall6 = createSprite(930,1300,450,5)


key1 = createSprite(300,930,30,30)
key1.addImage(key)
key1.scale = 0.5
  

 


  
}

function draw() {
  background(Bg);  

  if(gameState === PLAY){
    lazer1.bounceOff(barrier)
    lazer2.bounceOff(barrier)
    lazer2.bounceOff(barrier2)
    lazer1.bounceOff(barrier2)
    black1.bounceOff(barrier3)
    black1.bounceOff(barrier4)
    black2.bounceOff(barrier3)
    black2.bounceOff(barrier4)
    lazer3.bounceOff(barrier5)
    lazer3.bounceOff(barrier6)
    lazer4.bounceOff(barrier5)
    lazer4.bounceOff(barrier6)
    lazer5.bounceOff(barrier7)
    lazer5.bounceOff(barrier8)
    lazer5.bounceOff(barrier7)
    lazer6.bounceOff(barrier8)
    lazer6.bounceOff(barrier7)
    lazer7.bounceOff(barrier11)
    lazer7.bounceOff(barrier12)
    lazer8.bounceOff(barrier11)
    lazer8.bounceOff(barrier12)
    lazer9.bounceOff(barrier11)
    lazer9.bounceOff(barrier12)
    black3.bounceOff(barrier9)
    black3.bounceOff(barrier10)
  
    Engine.update(engine);

  
    //keyPressed();
   
  
    if(end1.isTouching(thief)){
      noStroke();
      textSize(35)
      fill("red")
      text("Congradulations on crossing the first level.That was easy wasn't it." , 100, 4700)
      text("Best of luck for the rest of the rounds",300,4760)
    }
  
    if(keyDown("w")){
      thief.y = thief.y-5
    
    }
  
    if(keyDown("s")){
      thief.y = thief.y+5
    }
  
    if(keyDown("a")){
      thief.x = thief.x-5
    }
  
    
    if(keyDown("d")){
      thief.x = thief.x+5
    }
  
    if(keyDown("t")){
      var temp_arrow = createArrow();
    
      temp_arrow.addAnimation("arrow",arrow1);
      temp_arrow.y = thief.y;
    }

    if(thief.isTouching(key1)){
      lazer7.velocityX = 0
      lazer8.velocityX = 0
      lazer9.velocityX = 0
    }
 


    if(lazer1.isTouching(thief)){
      gameState = END;
    }

    if(lazer2.isTouching(thief)){
      gameState = END;
    }

    if(lazer3.isTouching(thief)){
      gameState = END;
    }

    if(lazer4.isTouching(thief)){
      gameState = END;
    }

    if(lazer5.isTouching(thief)){
      gameState = END;
    }

    if(lazer6.isTouching(thief)){
      gameState = END;
    }

    if(black1.isTouching(thief)){
      gameState = END
    }

    if(black2.isTouching(thief)){
      gameState = END
    }

    if(black3.isTouching(thief)){
      gameState = END
    }

    if(black4.isTouching(thief)){
      gameState = END
    }

    if(black5.isTouching(thief)){
      gameState = END
    }





  
  }

    if(gameState === END){
     lazer1.velocityY = 0
     lazer2.velocityY = 0
     lazer3.velocityY = 0
     lazer3.velocityX = 0
     lazer4.velocityY = 0
     lazer5.velocityY = 0
     lazer5.velocityX = 0
     lazer6.velocityY = 0
     lazer6.velocityX = 0


     black1.velocityX = 0
     black1.velocityY = 0
     black2.velocityX = 0
     black2.velocityY = 0
     black3.velocityX = 0
     black3.velocityY = 0
     black4.velocityY = 0
     black4.velocityX = 0
     black5.velocityX = 0
     black5.velocityY = 0
    }
 

  
   





 






  drawSprites();

  noStroke();
  textSize(35)
  fill("white")
  text("Start" , 600, 5940)
}



function createArrow(){
  arrow = createSprite(thief.x,thief.y,20,20);
  arrow.velocityY = -6;
  arrow.scale = 0.6;
  arrow.lifetime = 100
  return arrow;
}



