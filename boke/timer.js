var maxTime;
var resetTime;
var lastRecordedTime;


function setupTimer()
{
	frameRate(30);

	// modify this for when you want to countdown from.
	maxTime = 3;
	resetTime = false;

}

function manageTime(x,y)
{
	if (resetTime == false)
	{
		resetTime = true;
		lastRecordedTime = frameCount + maxTime * 30;
	}
	else
	{
		if (frameCount >= lastRecordedTime)
		{
			resetTime = false;

			// uses function from health.js
			deductHealth(50);

//			canvasID++;
			Ques++;
//			typingBox.value("");
		}
	}
	showTimeBar(0,0);
}

function resetTimer()
{
	resetTime = false;
}

function showTimeBar(x,y)
{
	fill(255,255,255);
	rect(x,15,(lastRecordedTime - frameCount)*15,50);
	textSize(18);
	fill(0,0,0);
	image(Hour,0,0,100,100)
	strokeWeight(1)
	//var s = int((lastRecordedTime - frameCount) / 30 + 1);
	//text("Time Remaining: "+s*2,x+30,y+30);
	textSize(12);

//	if (gif.loaded()) {
//    image(gif, 0, 0);
//  }
}