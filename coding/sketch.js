let coreElements = []
let starDegree = 45
let yuanshiR = 100

// Meteor
let meteorLayer;
let meteorCount = 50;
let minLength = 15;
let maxLength = 40;
let minWeight = 0.5;
let maxWeight = 2;
let angleDeg = 145;

function setup() {
	createCanvas(windowWidth, windowHeight);
	// create a meteor layer
	meteorLayer = createGraphics(windowWidth, windowHeight);
	drawMeteorLayer();

	background(0);
	angleMode(DEGREES);
	//Background with random little stars
	for (let i = 0; i <= 1000; i++) {
		fill(255, random(0, 255))
		circle(random(width), random(height), random(0, 5))
	}

	stroke(255);
	push();
	translate(width / 2, height / 2);
	let totalR = random(100, 200)
	//Draw a random star at the bottom for decoration
	push()
	rotate(random(360))
	drawStar(0, 0, totalR / 1.9)
	pop()

	//Draw all the concentric circles
	coreElements = new createMutipleCircle(0, 0, totalR)
	coreElements.drawLine()
	coreElements.diverPoint()
	coreElements.randomPoint()
	coreElements.drawTriangle(90)
	coreElements.drawTriangle(-90)
	coreElements.drawMoon()
	coreElements.lineCircle()
	coreElements.decorationCircle()
	//daw the star in the middle
	drawStar(-totalR / 9, 0, totalR / 9)
	pop()


}

function draw() {

}
// Six gradient circles
function drawRadialGradientCircle(x, y, r, innerColor, outerColor) {
	for (let i = r; i > 0; i--) {
		let t = map(i, 0, r, 1, 0);
		let c = lerpColor(outerColor, innerColor, t);
		fill(c);
		noStroke();
		ellipse(x, y, i * 2, i * 2);
	}
}

// Meteor
function drawMeteorLayer() {
	meteorLayer.clear();
	meteorLayer.noStroke();

	for (let i = 0; i < meteorCount; i++) {
		let x = random(width);
		let y = random(height);
		let len = random(minLength, maxLength);
		let weight = random(minWeight, maxWeight);

		let localAngle = angleDeg + random(-5, 5);
		let angleRad = radians(localAngle);

		meteorLayer.push();
		meteorLayer.translate(x, y);
		meteorLayer.rotate(angleRad);

		// Meteor head
		meteorLayer.fill(255, 200);
		meteorLayer.ellipse(0, 0, weight * 1.5);

		// Meteor tail
		for (let j = 0; j < len; j++) {
			let alpha = map(j, 0, len, 180, 20);
			meteorLayer.fill(255, alpha);
			meteorLayer.ellipse(j * 0.3, j, weight);
		}
		meteorLayer.pop();
	}
}

//draw star by ‘shape’
function drawStar(starX, starY, starSize) {
	fill(255)
	for (let j = 0; j < 3; j++) {
		fill(255)
		let r = map(j, 0, 2, starSize, starSize / 3)
		beginShape()
		for (let i = 0; i <= 8; i++) {
			if (i == 0 || i == 4 || i == 8) {
				a = starSize / 3
			} else {
				a = 0
			}
			let bigStarX = cos(starDegree * i - 90) * (r + a) * 3 / 2 + starX
			let bigStarY = sin(starDegree * i - 90) * (r + a) * 3 / 2 + starY
			let circleX = cos(starDegree * i - 90) * (starSize + a) * 1.7 + starX
			let circleY = sin(starDegree * i - 90) * (starSize + a) * 1.7 + starY

			let smallStarX = cos(starDegree * i - 67.5) * r / 3 + starX
			let smallStarY = sin(starDegree * i - 67.5) * r / 3 + starY
			// line(0,0,x1*width,y1*width)

			vertex(bigStarX, bigStarY)
			vertex(smallStarX, smallStarY)
			if (starSize / 9 < 5) {
				circle(circleX, circleY, starSize / 9)
			}

		}
		endShape()
	}
}

//Control all concentric circles with the same center and size.
class createMutipleCircle {
	constructor(centerX, centerY, centerSize) {
		this.x = centerX
		this.y = centerY
		this.size = centerSize
	}
	//draw the moon
	drawMoon() {
		noStroke()
		for (let j = 0; j < 3; j++) {
			if (j % 2 == 0) {
				fill(0)
			} else {
				fill(255)
			}
			let smallMoon = this.size / 6
			circle(this.x - (this.size / 2 - (this.size - j * smallMoon) / 2), this.y, this.size - j * smallMoon)
		}
	}
	//Line made of circles
	lineCircle() {
		for (let j = 0; j < 360 / 2; j++) {
			let lineCircleX1 = cos(j * 2) * this.size / 2 * 1.32 + this.x;
			let lineCircleX2 = sin(j * 2) * this.size / 2 * 1.32 + this.y;
			if (random() > 0.0176) {

				fill(255);
				circle(lineCircleX1, lineCircleX2, this.size / 100);
			} else {
				fill(255);
				circle(lineCircleX1, lineCircleX2, random(this.size / 25, this.size / 13));
			}
		}

	}
	//There is a circle of dots between two circular lines
	decorationCircle() {
		push()
		noStroke()
		noFill()
		let zhouSize = this.size * 1.075
		circle(this.x, this.y, zhouSize)
		pop()
		push()
		strokeWeight(1)
		stroke(255)
		noFill()
		circle(this.x, this.y, zhouSize * 0.97)
		pop()
		push()
		strokeWeight(1)
		stroke(255)
		noFill()
		circle(this.x, this.y, zhouSize * 1.07)
		pop()
		for (let j = 0; j < 360 / 6; j++) {
			let zhouX1 = cos(j * 6) * zhouSize / 1.95 + this.x;
			let zhouY1 = sin(j * 6) * zhouSize / 1.95 + this.y;
			fill(255)
			circle(zhouX1, zhouY1, 3)
		}
	}
	//Draw different triangles by angle control, and it is related to the size of the circle.
	drawTriangle(d) {
		noFill()
		stroke(255, 100)
		strokeWeight(3)
		let sr = (this.size * 1.15) * 2
		push()
		circle(this.x, this.y, sr)
		pop()

		//gradient circle
		beginShape();
		for (let j = 0; j < 6; j++) {
			let sx1 = cos(120 * j - d) * (sr / 2) + this.x;
			let sy1 = sin(120 * j - d) * (sr / 2) + this.y;
			vertex(sx1, sy1);
			push();
			let starSize = random(this.size / 4, this.size / 3);
			if (d < 0) {
				let innerColor = color(255, 255, 255, 255);
				let outerColor = color(0, 0, 0, 255);
				for (let j = 0; j < 6; j++) {
					drawRadialGradientCircle(sx1, sy1, random(starSize / (j + 1) / 2 * 1.8), innerColor, outerColor);
				}
			} else {
				let innerColor1 = color(0, 0, 0, 150);
				let outerColor1 = color(255, 255, 255,);
				for (let j = 0; j < 6; j++) {
					drawRadialGradientCircle(sx1, sy1, random(starSize / (j + 1) / 2 * 1.8), innerColor1, outerColor1);
				}
			}
			fill(255)
			//Draw the center star
			drawStar(sx1, sy1, random(3, starSize / 5))
			pop();
		}
		endShape()
	}
	//Lines radiating from a circle
	drawLine() {
		let drawLineDegree = 45
		for (let j = 0; j < 8; j++) {
			for (let i = 0; i < 6; i++) {
				let b = random(0, 35)
				push()
				strokeWeight(1)
				stroke(255, 200)

				let x1 = cos(drawLineDegree * j - 67.5 - i * random(2.5)) * this.size * random(2, 3) + this.x
				let y1 = sin(drawLineDegree * j - 67.5 - i * random(2.5)) * this.size * random(2, 3) + this.y
				line(this.x, this.y, x1, y1)
				pop()
			}
		}
		push()
		fill(0)
		noStroke()
		circle(this.x, this.y, this.size * 1.15)
		pop()

	}
	//The ordered points of the outermost circle.
	diverPoint() {
		for (let j = 0; j < 360; j++) {
			for (let i = 0; i < 6; i++) {
				let c = map(i, 0, 5, 50, 25)
				push()
				noStroke()
				fill(255)
				let pointR = this.size / 2.2
				let x1 = cos(j * 3) * pointR / 1.3 * (4 - i / 10) + this.x
				let y1 = sin(j * 3) * pointR / 1.3 * (4 - i / 10) + this.y
				circle(x1, y1, pointR / c)
				pop()
			}
		}
	}
	//Draw random points.
	randomPoint() {
		push()
		fill(255, 50)
		for (let j = 1; j < 100; j++) {
			for (let i = 0; i < 360; i += j / 20) {
				let dianR = map(j, 1, 100, this.size * 2.34 / 2, this.size / 2);
				let r = random(dianR, this.size * 2.34 / 2);
				let angle = random(0, i * 360 - j);
				let dianX = cos(angle) * r + this.x;
				let dianY = sin(angle) * r + this.y;
				noStroke();
				circle(dianX, dianY, random(this.size / 200, this.size / 40));
			}
		}
		pop()
	}
}








