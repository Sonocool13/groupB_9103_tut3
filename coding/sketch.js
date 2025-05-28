let degree=45
let a=0
let yuanshiR =100
function setup() {
 createCanvas(windowWidth, windowHeight);
 background(0);
   angleMode(DEGREES);

 //------------------------------------------
  translate(width/2,height/2)
  stroke(255)
 //------------------------------------------
 // noStroke()

 //------------------------------------------
 for(let j=0;j<8;j++){
   for(let i=0;i<6;i++){
  let b =random(50)
 push()
  strokeWeight(1)

 let x1 = cos(degree*j- 67.5-i*random(3))*yuanshiR/3+0
  let y1 = sin(degree*j- 67.5-i*random(3))*yuanshiR/3+0
  line(0,0,x1*b,y1*b)
 pop()
   }
 }
  //------------------------------------------
 for(let j=0;j<360;j++){
   for(let i=0;i<6;i++){
  let c = map(i,0,5,50,25)
 push()
  noStroke()
  fill(255)

 let x1 = cos(j*3)*yuanshiR/1.3*(4-i/10)+0
  let y1 = sin(j*3)*yuanshiR/1.3*(4-i/10)+0
  circle(x1,y1,yuanshiR/c)
 pop()
   }
 }
 
//------------------------------------------ 
 moon(0,0,200)
 drawStar(-25,0,25)
 lineCircle(0,0,280,1)
 lineCircle(0,0,480,1)
 zhou(0,0,215)

}

function draw() {
 
 
}


function drawStar(starX,starY,starSize){
 fill(255)
//星星
for(let j=0;j<3;j++){
  if(j%2 !==0){
  fill(0)}else{
   fill(255)
  }
   let r =map(j,0,2,starSize,starSize/3)
    beginShape()
 for(let i=0;i<=8;i++){
if(i==0||i==4||i==8){
 a=starSize/3
}else{
  a=0
 }
  let x = cos(degree*i- 90)*(r+a)*3/2+starX
  let y = sin(degree*i- 90)*(r+a)*3/2+starY
  let circleX = cos(degree*i- 90)*(starSize+a)*1.7+starX
  let circleY = sin(degree*i- 90)*(starSize+a)*1.7+starY
  
  let x1 = cos(degree*i- 67.5)*r/3+starX
  let y1 = sin(degree*i- 67.5)*r/3+starY
  // line(0,0,x1*width,y1*width)
 
  vertex(x,y)
  vertex(x1,y1)

  circle(circleX,circleY,2)
  
 
 }
  endShape()}
}


function moon(moonX,moonY,moonSize){
 noStroke()
for(let j=0;j<3;j++){
 if(j%2==0){
  fill(0)}else{
   fill(255)
  }
 
 let smallMoon=moonSize/6
 circle(moonX-(moonSize/2-(moonSize-j*smallMoon)/2),moonY,moonSize-j*smallMoon)
 }
}

function lineCircle(lineCircleX,lineCircleY,lineCircleR,lineCircleSize){
 for(let j=0;j<360;j++){
  let lineCircleX1 = cos(j)*lineCircleR/2+lineCircleX;
  let lineCircleX2 = sin(j)*lineCircleR/2+lineCircleY;

 if (random() > 0.0176) {
  fill(255);
  circle(lineCircleX1, lineCircleX2, lineCircleSize);
} else {
  // moon(lineCircleX1, lineCircleX2, random(lineCircleSize*10,lineCircleSize*20));
 circle(lineCircleX1, lineCircleX2, random(lineCircleSize*10,lineCircleSize*20));
}
 }
}
function zhou(zhouX,zhouY,zhouR){
 push()
 strokeWeight(20)
  stroke(0)
 noFill()
circle(zhouX,zhouY,zhouR)
   pop()
 push()
 strokeWeight(1)
  stroke(255)
 noFill()
circle(zhouX,zhouY,zhouR-5)
   pop()
 push()
 strokeWeight(1)
  stroke(255)
 noFill()
circle(zhouX,zhouY,zhouR+16)
   pop()
 for(let j=0;j<360/6;j++){
  let zhouX1 = cos(j*6)*zhouR/1.95+zhouX;
  let zhouY1 = sin(j*6)*zhouR/1.95+zhouY;
  fill(255)
circle(zhouX1,zhouY1,3)

 }

}


