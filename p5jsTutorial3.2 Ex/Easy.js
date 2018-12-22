var imageEasyBack;
var Confirm;
var rainbow = {
	R : 1,
	G : 1,
	B : 1,
};
var buttonEasyBackX;
var buttonEasyBackY;
let W = 10
let L

function preloadEasy()
{
	imageEasyBack = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonBack.png');	
	Confirm = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/New%20Piskel.png");

}

function setupEasy()
{
	buttonEasyBackX = 190;
	buttonEasyBackY = 110;
    CanvasID = 3;	
    noCursor();

}

function drawEasy()
{

	rainbow.R = mouseX
	rainbow.G = mouseY
	rainbow.B = rainbow.R - rainbow.G
	background(100,100,100,25);

	if (mouseX > 451 && mouseX < 773 && mouseY > 146 && mouseY < 280 && mouseIsPressed)
	{
		W = W+10
	}

	if (W > 1200){
		CanvasID = 6
	}

	if (mouseX > 451 && mouseX < 773 && mouseY > 146+300 && mouseY < 280+300 && mouseIsPressed)
	{
		CanvasID = 2
	}

	rect(0,0,W,100)
	image(Confirm,600-220,-100)
	fill(255,255,255)
	rect(146+320,420,773-451,200)
	text("Back",146+350,451+50)

	fill(rainbow.R-rainbow.G,rainbow.G,88)
	rect(mouseX-50,mouseY,100,2)
	rect(mouseX,mouseY-50,2,100)
	strokeWeight(5)
	fill(rainbow.R,rainbow.G,rainbow.B)
	stroke(rainbow.R,rainbow.G,5)
	ellipse(mouseX,mouseY,20,20);
}