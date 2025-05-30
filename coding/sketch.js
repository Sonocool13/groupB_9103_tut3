let degree=45
let a=0
let yuanshiR =100
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	//------------------------------
// 	fill(255,50)
// 	noStroke()
		
// 	for(let i=0;i<width;i+=12){
// 		let v =random(0,10)
// 		let v1 =random(0,10)
// 		for(let o=0;o<100;o+=0.6){
			
// 		circle(i*v,i*v1-o*3,5-o/15)
	
// }}
	angleMode(DEGREES);
for(let i=0;i<=1000;i++){
	fill(255,random(0,255))
	circle(random(width),random(height),random(0,5))
}
	//------------------------------------------
		translate(width/2,height/2)
	
	//------------------------------------------
	// noStroke()
		push()
  // circle(0, 0, 700);
fill(255,50)
for (let j = 1; j < 100; j++) {
    for (let i = 0; i < 360; i += j / 20) {
      let dianR = map(j, 1, 100, 468 / 2, 200 / 2); // 半径范围从大到小
      let r = random(dianR - 5, 468/2);             // 稍微随机一下半径
      let angle = random(0,i*360-j);                                // 使用均匀角度
      let dianX = cos(angle) * r;
      let dianY = sin(angle) * r;
      // fill(0);
      noStroke();
      circle(dianX, dianY, random(1, 5));
    }
  }
	pop()
	//----------
	stroke(255)
	//------------------------------------------
	// noFill()
	// for(let i=0;i<7;i++){
	// circle(0,0,470+i*(8+i/3))
		
	// 	}
	//------------------------------------------
	for(let j=0;j<8;j++){
			for(let i=0;i<6;i++){
		let b =random(0,35)
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
	sanjiaoxin(0,0,470,90)
	sanjiaoxin(0,0,470,-90)
	drawStar(-25,0,25)
	lineCircle(0,0,280,1)
	// lineCircle(0,0,480,1)
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
circle(lineCircleX1, lineCircleX2, random(lineCircleSize*5,lineCircleSize*10));
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
function sanjiaoxin(sx,sy,sr,d){
	noFill()
	stroke(255,100)
	strokeWeight(3)

	push()
	lineCircle(sx,sy,sr,1)
	pop()

		beginShape()
for(let j=0;j<4;j++){
		let sx1 = cos(120*j-d)*(sr/2)+sx;
		let sy1 = sin(120*j-d)*(sr/2)+sy;
	vertex(sx1,sy1)
    push()
	fill(255)
	circle(sx1,sy1,random(10,50))
	pop()
// 	 if(d>0&j==0){
// 	 push()
// 		 noStroke()
// 		 for(i=0;i<4;i++){
// 	  lineCircle(sx1,sy1,sr/i/3,1)
// 			 }
// 	 pop()}
// 	 if(d>0&j==1){
// 	 push()
// 		 stroke(255)
// 		 for(i=0;i<14;i++){
// 			 fill(255,50*i)
// 	  circle(sx1,sy1,sr*1.5/i/3)
// 			 }
// 	 pop()}
// 	 if(d>0&j==2){
// 	 push()
// 		 stroke(255)
// 			  moon(sx1,sy1,sr/3)
// 	 pop()}

// 	 if(d<0){
// 	 push()
// 		 noStroke()
// 			   for(i=0;i<14;i++){
// 			 fill(255,50*i)
// 	  circle(sx1,sy1,sr/i/7)
// 			 }
	 // pop()}
}
	endShape()
		
}


