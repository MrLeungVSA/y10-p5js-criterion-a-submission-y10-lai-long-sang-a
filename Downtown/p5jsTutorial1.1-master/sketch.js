function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(500,500);
  
}

function draw()
{
  //create a background using RGB values
  background(255,0,0)

  // change the paint brush to a specific color according to RGB values
  fill(255,0,0);
  stroke(0,0,0)
  strokeWeight(10)
  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(0,0,100,100);

  fill(255,0,0)
  stroke(0,0,0)
  strokeWeight(10)
  rect(400,400,100,100);
  
  fill(255,0,0)
  stroke(0,0,0)
  strokeWeight(10)
  rect(200,200,100,100);

  fill(255,0,0)
  rect(400,0,100,100);

  fill(255,0,0)
  rect(0,400,100,100);




}