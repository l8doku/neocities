var c1;
var c2;
var w;
var h;

function setup() {
  w = 1900;
  h = 1080;
  createCanvas(w, h);
  background(100);
  noStroke();
  // stroke(0, 0, 0, 255);
  //0, 122, 204
  // c1 = color(255, 204, 0); 
  c1 = color(255, 255, 255); 
  // c2 = color(160, 43, 201); 
  c2 = color(0, 122, 204); 

  // fill everything with cicrles
  fillWithCircles(w, h, 25000);
}


function draw() {
//  ellipse(mouseX, mouseY, 10, 10);
  // drawCircle(mouseX, mouseY, c1, c2);
}


function drawCircle(x, y, c1, c2) {
  maxRadius = random(30,50);
  circleNumber = random(3,7);
  minRadius = 15;
  rads = [];
  for (let i = 0; i < circleNumber; i++) {
    rads[i] = random(minRadius, maxRadius);
  }
  //rads.sort()
  rads.sort(function(a, b){return b-a});
  for (let i = 0; i < circleNumber; i++) {
    if (i % 2 == 0) {
      fill(c1);
    }
    else{
      fill(get_c2(w,x));
    }
    ellipse(x, y, rads[i], rads[i]);
  }
  

}

function fillWithCircles(w, h, num) {
  for (let i = 0; i < num; i++) {
    xr = random(w);
    yr = random(h);
    drawCircle(xr, yr, c1, c2);
  }
}

function get_c2(w, x) {
  let alpha = x/w;
  return color(0, 204 * alpha + (1-alpha) * 122, 122 * alpha + (1-alpha) * 204); 
}