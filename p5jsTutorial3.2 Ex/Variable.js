var Scroll = 0
var pegg

function preloadVariable()
{
  page = new Array(pageN);
  page[0] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/1.png");
  page[1] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/1.png");
  page[2] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/2.png");
  page[3] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/3.png");
  page[4] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/4.png");
  page[5] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/4.png");
}

function setupVariable()
{
  createCanvas(1200,600)
}

  function drawVariable()
  {
    background(255,255,255)
    image(pegg[Scroll],10,0)
    if (Scroll >= 6){
    	CanvasID = 8
    }
  }



  function mousePressed() {
    Scroll ++
}


