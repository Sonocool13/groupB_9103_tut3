//Control all concentric circles with the same center and size.
class createMultipleCircle {
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
    strokeWeight(this.size / 200)
    stroke(255)
    noFill()
    circle(this.x, this.y, zhouSize * 0.97)
    pop()
    push()
    strokeWeight(this.size / 200)
    stroke(255)
    noFill()
    circle(this.x, this.y, zhouSize * 1.07)
    pop()
    for (let j = 0; j < 360 / 6; j++) {
      let zhouX1 = cos(j * 6) * zhouSize / 1.95 + this.x;
      let zhouY1 = sin(j * 6) * zhouSize / 1.95 + this.y;
      fill(255)
      circle(zhouX1, zhouY1, this.size / 40)
    }
  }
  //Draw different triangles by angle control, and it is related to the size of the circle.
  drawTriangle(d) {
    noFill()
    stroke(255, 100)
    strokeWeight(this.size / 80)
    let sr = (this.size * 1.15) * 2
    let starSize = random(this.size / 4, this.size / 3);

    let points = []
    beginShape();
    for (let j = 0; j < 4; j++) {
      let sx1 = cos(120 * j - d) * (sr / 2) + this.x;
      let sy1 = sin(120 * j - d) * (sr / 2) + this.y;
      if (j < 3) {
        points.push(createVector(sx1, sy1));
      }
      vertex(sx1, sy1);
      //gradient circle
      push();

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

      pop();
    }
    endShape()
    //Draw the center star
    push()
    blendMode(LIGHTEST)
    for (let pt of points) {
      drawStar(pt.x, pt.y, random(starSize / 5, starSize / 4), random(360))
    }
    pop()
  }


  //Lines radiating from a circle
  drawLine() {
    let drawLineDegree = 45
    for (let j = 0; j < 8; j++) {
      for (let i = 0; i < 6; i++) {
        let b = random(0, 35)
        push()
        strokeWeight(this.size / 200)
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
