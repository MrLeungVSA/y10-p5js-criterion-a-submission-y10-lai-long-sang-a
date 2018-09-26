var button2X;
var button2Y;

function setup()
{
  createCanvas(700,700);
  button2X = 200;
  button2Y = 100;

  
}

function draw()
{
	background(125,125,125)


	// Example 1: easy to understand - Start

	if (mouseX > 200 && mouseX < 200 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);		
		if (mouseIsPressed == true)
		{
			fill(248,89,255);
			stroke(51,70,190);
			textSize(120);
			text("U HV LIGMA",button2X-200,button2Y);
			text("U HV LIGMA",0,200)
			text("U HV LIGMA",0,300)
			text("U HV LIGMA",0,500)
			text("U HV LIGMA",0,600)
			text("U HV LIGMA",0,700)					
		}
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);		
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Balls",215,40);

	// Example 1: easy to understand - End




	// Example 2: less code but harder to understand - Start

	strokeWeight(3);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(248,89,255);
		if (mouseIsPressed)
		{
			fill(255,0,0);
			stroke(0,0,0);
			textSize(120);
			text("Balls",400,300);
		}

		rect(button2X,button2Y,100,50);
		textSize(120);
		fill(255,255,255);
		stroke(0,0,0);
		text("LIGMA",0,300);
	}
	else
	{
		fill(255,113,53);
		rect(button2X,button2Y,100,50);
		textSize(12);
		fill(255,255,255);
		stroke(0,0,0);
		text("Options",button2X+30,button2Y+30);
	}


	// Example 2: less code but harder to understand - End


}