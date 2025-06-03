let coreElements = []
let starDegree = 45
let yuanshiR = 100
let overallTexture
function preload() {
	overallTexture = loadImage("assets/Texture.png")
}
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
	for (let i = 0; i <= 2000; i++) {
		noStroke()
		fill(255, random(0, 255))
		circle(random(width), random(height), random(0, width / 320))
	}
	//meteor img layer
	image(meteorLayer, 0, 0);

	stroke(255);
	push();

	translate(width / 2, height / 2);
	let totalR = width / 6

	//Draw a random star at the bottom for decoration
	push()
	rotate(random(360))
	drawStar(0, 0, totalR / 1.9, 0)
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
	drawStar(-totalR / 9, 0, totalR / 9, 0)
	pop()
	//Use multiple mode to add a layer of texture
	push()
	blendMode(MULTIPLY)
	image(overallTexture, 0, 0, width, height)
	pop()

}

function draw() {

}

//As the canvas size changes
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup()
}








