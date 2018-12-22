/*
Canvas ID == 1 == Intro
Canvas ID == 2 == Mainmenu
Cancas ID == 3 == Easy
Canvas ID == 4 == Hard

*/
var CanvasID;
var Mode = 0 


function preload()
{
	preloadIntro();
	preloadMainmenu();
	preloadEasy();
	preloadHArd();
	preloadTutorial();
	preloadVariable();
}

function setup()
{
	setupIntro();
	setupMainmenu();
	setupEasy();
	setupHArd();
	setupTutorial();
	setupVariable();

	CanvasID = 1;

	createCanvas(1200,600);
}

function draw()
{

	if (CanvasID == 1)
	{
		drawMainmenu();
	} 

	if (CanvasID == 3)
	{
		drawEasy();
	} 

	if (CanvasID == 2)
	{
		drawIntro();
	} 

	if (CanvasID == 4)
	{
		drawHard();
	} 

	if (CanvasID == 5)
	{
		drawMedium();
	} 

	if (CanvasID == 6)
	{
		drawVariable();
	}

	if (CanvasID == 7)
	{
		drawTutorial();
	}

	if (CanvasID == 8)
	{
		drawShooter();
	}
}

function mouseRealeased()
{
	if (canvasID == -1)
	{
		canvasID = 1;
	}
	if (canvasID == -2)
	{
		canvasID = 2;
	}

}