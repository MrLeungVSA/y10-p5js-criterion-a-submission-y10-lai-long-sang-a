var imageEasyBack;
var imageEasyTitle;
var rainbow = {
	R : 1,
	G : 1,
	B : 1,
};

var buttonEasyBackX;
var buttonEasyBackY;


function preloadEasy()
{
	imageEasyBack = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonBack.png');	
	imageEasyTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleEasyGame.png');	

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
	fill(rainbow.R-rainbow.G,rainbow.G,88)
	rect(mouseX-50,mouseY,100,2)
	rect(mouseX,mouseY-50,2,100)
	strokeWeight(5)
	fill(rainbow.R,rainbow.G,rainbow.B)
	stroke(rainbow.R,rainbow.G,5)
	ellipse(mouseX,mouseY,20,20);


	image(imageEasyTitle,300,50);


}