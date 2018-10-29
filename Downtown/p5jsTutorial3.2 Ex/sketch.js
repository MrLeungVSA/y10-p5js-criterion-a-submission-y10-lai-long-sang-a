/*
Canvas ID == 1 == Intro
Canvas ID == 2 == Mainmenu
Cancas ID == 3 == Easy
Canvas ID == 4 == Hard

*/
var CanvasID;

function preload()
{
	preloadIntro();
	preloadMainmenu();
	preloadEasy();
	preloadHArd();
}

function setup()
{
	setupIntro();
	setupMainmenu();
	setupEasy();
	setupHArd();

	CanvasID = 1;

	createCanvas(600,600);
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