var pageN = 0
var page
let timer = 1
let turn = false
var ARR = 0
var pegg

function preloadTutorial()
{
  page = new Array(pageN);
  page[0] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/1.png");
  page[1] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/1.png");
  page[2] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/2.png");
  page[3] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/3.png");
  page[4] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/4.png");
  page[5] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/4.png");

  pegg = new Array(ARR);
  pegg[0] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/one.png");
  pegg[1] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/one.png");
  pegg[2] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/two.png");
  pegg[3] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/three.png");
  pegg[4] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/four.png");
  pegg[5] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/five.png");
  pegg[6] = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/five.png");
}
function setupTutorial()
{
  createCanvas(1200,600)
}

function drawTutorial()
{
  background(255,255,255)
  image(page[pageN],0,0);

  if (pageN >= 5){
  	CanvasID = 2
  }

}

  function mouseReleased() {
    pageN ++
}


