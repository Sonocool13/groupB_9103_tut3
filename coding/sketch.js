let segments=[]
let degree =45
let a=0
let yuanshiR =100
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	//------------------------------
	angleMode(DEGREES);
for(let i=0;i<=1000;i++){
	fill(255,random(0,255))
	circle(random(width),random(height),random(0,5))
}
	//------------------------------------------

	//------------------------------------------
	stroke(255)
		//------------------------------------------

				translate(width/2,height/2)

			segments=new createMutipleCircle(0,0,random(100,200))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        



		segments.drawLine()
		segments.diverPoint()
		segments.randomPoint()
		segments.sanjiaoxin(90)
		segments.sanjiaoxin(-90)

		segments.moon()
	segments.lineCircle()
		segments.zhou()
	

	// drawStar(-25,0,25)
}

function draw() {
	
}

//星星
function drawStar(starX,starY,starSize){
	fill(255)
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
		endShape()
}
}


class createMutipleCircle{
	constructor(centerX,centerY,centerSize) {
	this.x = centerX
	this.y = centerY
	this.size = centerSize
		}
	//---------
	moon(){
	noStroke()
for(let j=0;j<3;j++){
	if(j%2==0){
		fill(0)}else{
			fill(255)
		}
	let smallMoon=this.size/6
	circle(this.x-(this.size/2-(this.size-j*smallMoon)/2),this.y,this.size-j*smallMoon)
	}
}
//---------
lineCircle(){
	for(let j=0;j<360;j++){
		let lineCircleX1 = cos(j)*this.size/2*1.32+this.x;
		let lineCircleX2 = sin(j)*this.size/2*1.32+this.y;
	if (random() > 0.0176) {
		
  fill(255);
  circle(lineCircleX1, lineCircleX2,this.size/100);
} else {
	  fill(255);
 circle(lineCircleX1, lineCircleX2, random(this.size/25,this.size/13));
}	
}
}		
//---------	
	//有问题
zhou(){
	push()
	// strokeWeight(5)
	// 	stroke('green')
	noStroke()
	noFill()
	let zhouSize=this.size*1.075
circle(this.x,this.y,zhouSize)
			pop()
	push()
	strokeWeight(1)
		stroke(255)
	noFill()
circle(this.x,this.y,zhouSize*0.97)
			pop()
	push()
	strokeWeight(1)
		stroke(255)
	noFill()
circle(this.x,this.y,zhouSize*1.07)
			pop()
	for(let j=0;j<360/6;j++){
		let zhouX1 = cos(j*6)*zhouSize/1.95+this.x;
		let zhouY1 = sin(j*6)*zhouSize/1.95+this.y;
		fill(255)
circle(zhouX1,zhouY1,3)
	}
}
//---------	
	sanjiaoxin(d){
	noFill()
	stroke(255,100)
	strokeWeight(3)
let sr=(this.size*1.15)*2
	push()
	circle(this.x,this.y,sr)
	 	pop()
		beginShape()
 for(let j=0;j<4;j++){
		let sx1 = cos(120*j-d)*(sr/2)+this.x;
		let sy1 = sin(120*j-d)*(sr/2)+this.y;
	 vertex(sx1,sy1)
	 push()
	 fill(255)
	 circle(sx1,sy1,random(this.size/4))
	 pop()
}
	endShape()
}
	//-----
	drawLine(){
		let drawLineDegree=45
		for(let j=0;j<8;j++){
			for(let i=0;i<6;i++){
		let b =random(0,35)
	push()
	 strokeWeight(1)
	 stroke(255,200)
				
	let x1 = cos(drawLineDegree*j- 67.5-i*random(2.5))*this.size*random(2,3)+this.x
		let y1 = sin(drawLineDegree*j- 67.5-i*random(2.5))*this.size*random(2,3)+this.y
		line(this.x,this.y,x1,y1)
	pop()
			}
	}
		push()
				fill(0)
				noStroke()
				circle(this.x,this.y,this.size*1.15)
				pop()

	}
	//------------
	diverPoint(){
		for(let j=0;j<360;j++){
			for(let i=0;i<6;i++){
		let c = map(i,0,5,50,25)
	push()
	 noStroke()
		fill(255)
let pointR = this.size/2.2
	let x1 = cos(j*3)*pointR/1.3*(4-i/10)+this.x
		let y1 = sin(j*3)*pointR/1.3*(4-i/10)+this.y
		circle(x1,y1,pointR/c)
	pop()
			}
	}
	}
	//-----------
	randomPoint(){
		push()
  fill(255,50)
  for (let j = 1; j < 100; j++) {
    for (let i = 0; i < 360; i += j / 20) {
      let dianR = map(j, 1, 100, this.size*2.34 / 2, this.size / 2);
      let r = random(dianR, this.size*2.34/2);         
      let angle = random(0,i*360-j);                              
      let dianX = cos(angle) * r+this.x;
      let dianY = sin(angle) * r+this.y;
      noStroke();
      circle(dianX, dianY, random(this.size/200, this.size/40));
    }
  }
	pop()
	}
	//--------
}








