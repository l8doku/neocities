var c1;
var c2;

function setup() {
  createCanvas(500, 500);
  background(100);
  stroke(0, 0, 0, 255);
  c1 = color(255, 204, 0); 
  c2 = color(160, 43, 201); 

  // fill everything with cicrles
  // fillWithCircles();
}


function draw() {
  ellipse(mouseX, mouseY, 10, 10);
  drawCircle(mouseX, mouseY, c1, c2);
}


function drawCircle(x, y, c1, c2) {
  maxRadius = random(16,23);
  circleNumber = random(3,6);
  minRadius = 8;
  rads = [];
  for (let i = 0; i < circleNumber; i++) {
    rads[i] = random(minRadius, maxRadius);
  }
  rads.sort()
  for (let i = 0; i < circleNumber; i++) {
    if (i % 2 == 0) {
      fill(c1);
    }
    else{
      fill(c2);
    }
    ellipse(x, y, rads[i], rads[i]);
  }
  

}

// function fillWithCircles() {

// }