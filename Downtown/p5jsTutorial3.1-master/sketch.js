var buttonNothing;
var buttonHoverOver;
var buttonClick;
var imgCatInMug;
var button2X;
var button2Y;

function preload()
{

	imgCatInMug = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/p5jsTutorial3.1-master/maxresdefault.jpg');

	buttonClick = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/p5jsTutorial3.1-master/machester%20untitled/AT.png');
	buttonHoverOver = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/p5jsTutorial3.1-master/machester%20untitled/B4.png');
	buttonNothing = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/p5jsTutorial3.1-master/machester%20untitled/well.png');

}

function setup()
{
	createCanvas(1200,800);

	button2X = 1;
	button2Y = 1;
  
}

function draw()
{
	background(125,125,125)


	// Example 1: easy to understand - Start

	// Example 1: easy to understand - End




	// Example 2: less code but harder to understand - Start

	strokeWeight(3);



	if (mouseX > button2X && mouseX < button2X + 800-50 && mouseY > button2Y && mouseY < button2Y+600-50)
	{
		image(buttonHoverOver,button2X,button2Y);
		if (mouseIsPressed)
		{
			image(buttonClick,button2X,button2Y);
		}
	}
	else
	{
		image(imgCatInMug,button2X,button2Y,1280/1.75,720/1.75);
	}


	// Example 2: less code but harder to understand - End


}