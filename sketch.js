// monte carlo pi approximation
let d;
let count=0;
let r;
let distance, pdist;
let result;
let inner=0;
let span;
let p;
document.getElementById("test").style.color = "#FFF";
document.getElementById("test").style.font = "italic bold 20px serif";

function setup() {
  canv = createCanvas(400, 400);
  canv.style("display", "inline-block");
  background(100);
  noFill();
  stroke(255);
  strokeWeight(2);
  rect(0,0,width, height);
  d = width;
  circle(width/2,height/2,d);
  r = width/2;
  fill(255);
  div1 = createDiv("Total Points:");
  div1.style('color', '#FFF');
  div2 = createDiv("Inner Circle Points:");
  div2.style('color', '#FFF');
  let p = createSpan("π ≈ ");
  span = createSpan("Test");
  p.style('color', '#FFF');
  span.style('color', '#FFF');
  div3 = createDiv("π Actual Value: 3.14159265359");
}

function draw() {
  translate(width/2,height/2);
  a = 0;
  for (let i=0; i<= 500+a;i++) {
    randomPoints();
    result = (4*inner)/count;
  }
  div1.html("Total Points: " + count,false);
  div2.html("Inner Circle Points: " + inner,false);
  span.html(result, false);
  a += 200;
}

function randomPoints() {
  let x = random(-200, 200);
  let y = random(-200, 200);
  distance = r*r;
  pdist = ((x*x)+(y*y));
  if (pdist > distance) {
    stroke(255,0,0);
  } else {
    stroke(0,255,0);
    inner++;
  }
  point(x,y);
  count++;
}