var Ez
var Hrd
var Mid
var Red
var Gren
var EzHov
var HrdHov
var MedHov
function preloadIntro()
{
	Ez = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/button_easy-mode.png');	
	Mid = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/button_mediocre-mode.png');	
	Hrd = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/button_hard-mode.png');	
	EzHov = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/Easy%20Click.png');
	HrdHov = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/HArd%20Click.png');
	MedHov = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/Medium%20Click.png');
	pick = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/diff.png");
}

function setupIntro()
{
	buttonMainMenuEasyX = 200;
	buttonMainMenuEasyY = 100;
	noCursor();
}

function drawIntro()
{
	Red = map(mouseY,0,600,0,255)
	Gren = map(mouseY,0,600,255,0)
	background(Red,0,Gren);

	stroke(0,0,0)
	fill(100,0,0)
	strokeWeight(3)
	triangle(100,mouseY,100,0)
	triangle(500,mouseY,500,0)
	stroke(255,0,0)
	rect(100,mouseY,50,2)
	rect(500-50,mouseY,50,2)	

	if (mouseX > buttonMainMenuEasyX-10 && mouseX < buttonMainMenuEasyX+200 && mouseY > buttonMainMenuEasyY-50 && mouseY < buttonMainMenuEasyY+25)
	{
		image(EzHov,buttonEasyBackX-10,buttonEasyBackY-50);

		if (mouseIsPressed)
		{
		CanvasID = 3;
		}
		
	}
	else
	{
		image(Ez,buttonEasyBackX-10,buttonEasyBackY-50);
	}

	if (mouseX > buttonMainMenuEasyX-10 && mouseX < buttonMainMenuEasyX+200 && mouseY > buttonMainMenuEasyY+100 && mouseY < buttonMainMenuEasyY+ 180)
	{
		image(MedHov,buttonEasyBackX-10,buttonEasyBackY+100);

		if (mouseIsPressed)
		{
		CanvasID = 3;
		}
		
	}
	else
	{
		image(Mid,buttonEasyBackX-10,buttonEasyBackY+100);
	}	
	
	if (mouseX > buttonMainMenuEasyX-10 && mouseX < buttonMainMenuEasyX+200 && mouseY > buttonMainMenuEasyY+250 && mouseY < buttonMainMenuEasyY+ 330)
	{
		image(HrdHov,buttonEasyBackX-10,buttonEasyBackY+250);

		if (mouseIsPressed)
		{
		CanvasID = 3;
		}
		
	}
	else
	{
		image(Hrd,buttonEasyBackX-10,buttonEasyBackY+250);
	}	

	stroke(0,0,0)
	strokeWeight(5)
	rect(mouseX-50,mouseY,100,2)
	rect(mouseX,mouseY-50,2,100)
	ellipse(mouseX,mouseY,20,20);

	image(pick,550,0)
}


function mousepressed()
{


}