var button2X;
var button2Y;

function setup()
{
  createCanvas(700,700);
  button2X = 450-200;
  button2Y = 50;

  
}

function draw()
{
	background(125,125,125)


	if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+50)
	{
	
	 	fill(255,0,0);    
	  	stroke(0,0,0);
	  	strokeWeight(20);

	  	rect(350-350,350-350,700,700);

		fill(255,0,0);    
		stroke(0,0,0);
		strokeWeight(10);

		rect(350-300,350-300,600,600);
		text("Ksi Logan",350-300,350-300);

		fill(255,0,0);    
		stroke(0,0,0);
		strokeWeight(10);

		rect(350-250,350-250,500,500);
		text("Yes Papa",350-250,350-250);

		fill(255,0,0);    
		stroke(0,0,0);
		strokeWeight(10);

		rect(350-200,350-200,400,400);
		text("Staging a fight?",350-200,350-200);

		fill(255,0,0);    
		stroke(0,0,0);
		strokeWeight(10);

		rect(350-150,350-150,300,300);
		text("No papa 中國人是大大",350-150,350-150);

		fill(255,0,0);    
		stroke(0,0,0);
		strokeWeight(10);

		rect(350-100,350-100,200,200);
		text("Telling Lies?",350-100,350-100);

		fill(255,0,0);    
		stroke(0,0,0);
		strokeWeight(10);

		rect(350-50,350-50,100,100);
		text("No papa",350-50,350-50);

		fill(255,0,0);    
		stroke(0,0,0);
		strokeWeight(10);

		rect(350-25/2,350-25/2,25,25);
		text("Open Your Wallets",450,450);	
	
	}
	else
	{
		fill(0,0,255);
		stroke(0,0,0);
		rect(10,10,100,50);		
	}

	fill(255,255,255);
	textSize(12);
	text("Nou",35,40);




	fill(200,200,255);
	rect(button2X+300,button2Y+300,100,50);

	if (mouseX > button2X + 350 && mouseX < button2X + 300 && mouseY > button2Y + 350 && mouseY < button2Y+300)
	{
		fill(248,89,255);
		stroke(51,70,190);
		textSize(120);
		text("U HV LIGMA",button2X-250,button2Y+350);
		text("U HV LIGMA",0,200)
		text("U HV LIGMA",0,300)
		text("U HV LIGMA",0,500)
		text("U HV LIGMA",0,600)
		text("U HV LIGMA",0,700)
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("click here :P",button2X+300,button2Y+300);
	}



}