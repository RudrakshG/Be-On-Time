var player,player_img;
var back_img;
var cardboard1,cardboard6;
var car,car_img;
var office,office_img;
var winner,wboy;
var Score=200;

function preload(){
  player_img=loadImage("Player.png");
office_img=loadImage("office.png");
  back_img=loadImage("back.png");
car_img=loadImage("car.png","car-Copy.png","car-Copy(2).png");
winner=loadImage("winnerboy.png")
}

function setup(){
canvas= createCanvas(displayWidth - 20, displayHeight - 30);
player=createSprite(displayWidth/1.1 + 30, displayHeight/1.2);
player.addImage("play",player_img);
player.scale=0.2;

office=createSprite(displayWidth/19 + 30,displayHeight/12.7);
office.addImage(office_img);

cardboard1=createSprite(displayWidth/1.1 + 30,displayHeight/1.4,130,20);
cardboard1.velocityX=-3;
cardboard2=createSprite(displayWidth/1.5 + 30,displayHeight/1.4,130,20);
cardboard2.velocityX=3;
cardboard3=createSprite(displayWidth/2 + 30,displayHeight/1.4,130,20);
cardboard3.velocityX=3;
cardboard4=createSprite(displayWidth/3 + 30,displayHeight/1.4,130,20);
cardboard4.velocityX=3
cardboard5=createSprite(displayWidth/4.5 + 30,displayHeight/1.4,130,20);
cardboard5.velocityX=-3 
//cardboard6=createSprite(displayWidth/5 + 30,displayHeight/1.4,130,20);
//cardboard6.velocity=-3
cardboard6=createSprite(displayWidth/8 + 30,displayHeight/1.4,130,20);
cardboard6.velocityX=-3
cardboard7=createSprite(displayWidth/15 + 30,displayHeight/1.4,130,20);
cardboard7.velocityX=-3;
cardboard8=createSprite(displayWidth/1.1 + 30,displayHeight/2,130,20);
cardboard8.velocityX=-3;

cardboard9=createSprite(displayWidth/1.5 + 30,displayHeight/2,130,20);
cardboard9.velocityX=3;
cardboard10=createSprite(displayWidth/2 + 30,displayHeight/2,130,20);
cardboard10.velocityX=3;
cardboard11=createSprite(displayWidth/3 + 30,displayHeight/2,130,20);
cardboard11.velocityX=3
cardboard12=createSprite(displayWidth/4.5 + 30,displayHeight/2,130,20);
cardboard12.velocityX=-3 
//cardboard6=createSprite(displayWidth/5 + 30,displayHeight/2,130,20);
//cardboard6.velocity=-3
cardboard13=createSprite(displayWidth/8 + 30,displayHeight/2,130,20);
cardboard13.velocityX=-3
cardboard13=createSprite(displayWidth/15 + 30,displayHeight/2,130,20);
cardboard13.velocityX=-3;









car=createSprite(displayWidth/1.2 + 30,displayHeight/13)
car.addImage(car_img);
}

function draw(){
  //font(Calibia);
  
  fill(rgb(24,119,24));
  textSize(40);
  text("Your Time Left:" + Score,displayWidth/2.9 + 30,displayHeight/10);
  edges=createEdgeSprites();
  //console.log(car.displayWidth);
  background(rgb(198,135,103));
  image(back_img,0,-displayHeight*0,displayWidth/1, displayHeight*1);
  if(player.isTouching(car)){
    player.visible=false;
  }
  if(car.isTouching(office)){
    car.visible=false;
wboy=createSprite(displayWidth/7 + 30,displayHeight/9);
wboy.addImage(winner);
wboy.scale=0.1;
  }

  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  
  player.bounceOff(edges[2]);
 
  player.bounceOff(edges[3]);

  cardboard1.bounceOff(edges[0]);
  cardboard1.bounceOff(edges[1]);
  cardboard1.bounceOff(edges[2]);
  cardboard1.bounceOff(edges[3]);

  cardboard2.bounceOff(edges[0]);
  cardboard2.bounceOff(edges[1]);
  cardboard2.bounceOff(edges[2]);
  cardboard2.bounceOff(edges[3]);

  cardboard3.bounceOff(edges[0]);
  cardboard3.bounceOff(edges[1]);
  cardboard3.bounceOff(edges[2]);
  cardboard3.bounceOff(edges[3]);

 cardboard4.bounceOff(edges[0]);
 cardboard4.bounceOff(edges[1]);
 cardboard4.bounceOff(edges[2]);
 cardboard4.bounceOff(edges[3]);

 
 cardboard5.bounceOff(edges[0]);
 cardboard5.bounceOff(edges[1]);
 cardboard5.bounceOff(edges[2]);
 cardboard5.bounceOff(edges[3]);
 
 cardboard6.bounceOff(edges[0]);
 cardboard6.bounceOff(edges[1]);
 cardboard6.bounceOff(edges[2]);
 cardboard6.bounceOff(edges[3]);

 cardboard7.bounceOff(edges[0]);
 cardboard7.bounceOff(edges[1]);
 cardboard7.bounceOff(edges[2]);
 cardboard7.bounceOff(edges[3]);

 cardboard8.bounceOff(edges[0]);
 cardboard8.bounceOff(edges[1]);
 cardboard8.bounceOff(edges[2]);
 cardboard8.bounceOff(edges[3]);

 cardboard9.bounceOff(edges[0]);
 cardboard9.bounceOff(edges[1]);
 cardboard9.bounceOff(edges[2]);
 cardboard9.bounceOff(edges[3]);
 
 cardboard10.bounceOff(edges[0]);
 cardboard10.bounceOff(edges[1]);
 cardboard10.bounceOff(edges[2]);
 cardboard10.bounceOff(edges[3]);

 cardboard11.bounceOff(edges[0]);
 cardboard11.bounceOff(edges[1]);
 cardboard11.bounceOff(edges[2]);
 cardboard11.bounceOff(edges[3]);

 cardboard12.bounceOff(edges[0]);
 cardboard12.bounceOff(edges[1]);
 cardboard12.bounceOff(edges[2]);
 cardboard12.bounceOff(edges[3]);

 cardboard13.bounceOff(edges[0]);
 cardboard13.bounceOff(edges[1]);
 cardboard13.bounceOff(edges[2]);
 cardboard13.bounceOff(edges[3]);




  player.bounceOff(cardboard1);
cardboard2.bounce(cardboard1);
cardboard3.bounce(cardboard2);
cardboard4.bounce(cardboard3);
cardboard5.bounce(cardboard4);
cardboard5.bounce(cardboard6);
cardboard7.bounce(cardboard6);

cardboard8.bounce(cardboard9);
cardboard9.bounce(cardboard10);
cardboard10.bounce(cardboard11);
cardboard11.bounce(cardboard12);
cardboard12.bounce(cardboard13);
player.bounceOff(cardboard2);
player.bounceOff(cardboard3);
player.bounceOff(cardboard4);
player.bounceOff(cardboard5);
player.bounceOff(cardboard6);
player.bounceOff(cardboard7);
player.bounceOff(cardboard8);
player.bounceOff(cardboard9);
player.bounceOff(cardboard10);
player.bounceOff(cardboard11);
player.bounceOff(cardboard12);
player.bounceOff(cardboard13);

textSize(50);
fill(rgb(24,119,24));
text("Be On Time Papa",displayWidth/2.9 + 30,displayHeight/13)



  if(keyIsDown(LEFT_ARROW)){
    player.velocityX=-3;
  }
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX=0;
  }
  if(keyIsDown(UP_ARROW)){
    player.velocityY=-3;
  }
  if(keyWentUp(UP_ARROW)){
    player.velocityY=0;
  }

  if(keyIsDown(DOWN_ARROW)){
    player.velocityY=3;
  }
  if(keyWentUp(DOWN_ARROW)){
    player.velocityY=0;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.velocityX=3;
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX=0;
  }
  if(keyDown("K")){
    car.velocityX=-5;
  }
  if(keyWentUp("k")){
    car.velocityX=0;
  }
  

  drawSprites();
}
/*function keyPressed(){
  if(keyCode === 65){
    car.velocityX=-4;
  }
 
}
function keyWentUp(){
  if(keyCode === 65){
    car.velocityX=0;
  }
}*/