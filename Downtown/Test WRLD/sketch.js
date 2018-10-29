var r = 0
var g = 0
var b = 0

function setup()
{
  createCanvas(600,600)
  background(r,g,b);

}

function draw()
{
  noStroke()
  fill(r,g,b);
  ellipse(mouseX,mouseY,10,10);
  r = r + 1;
  g = g + 3;
  b = b + 4;
  if (r == 255)
  	r = 1
  if (g == 255)
  	g = 2
  if (b == 255)
  	b = 3  
}
function mousePressed() {
  if (mouseIsPressed) {
    background(100,100,100);

}

