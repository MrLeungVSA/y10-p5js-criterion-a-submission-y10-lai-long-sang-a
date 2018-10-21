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
			text("Song",button2X-200,button2Y);
			text("Song",0,200)
			text("Song",0,300)
			text("Song",0,500)
			text("Song",0,600)
			text("Song",0,700)					
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
	text("House",215,40);

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
			text("1",500,300);
			text("2",500,400);
			text("3",500,500);
			text("4",500,600);
			text("5",500,700);
		}

		rect(button2X,button2Y,100,50);
		textSize(120);
		fill(255,255,255);
		stroke(0,0,0);
		text("Alphabet",0,300);
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