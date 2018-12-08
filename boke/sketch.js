var V = 1
var S = 1
var A 
var round = 1
var tik = 10
var R = 1
var F = 1
var GG = false
var Oof 
var Question = ["which is the correct syntax?","what is a arguement?","which is a parameter","What is a function"]
var Desround = ["Round 1","Round 2","Round 3","Round 4","Round 5","Round 6","Round 7","Final Round"]
var gam = 0
var Ques = 0
var HP = 200
var quek
var canvasID
var Hour
var beck

function preload()
{

  A = loadSound("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/fortnite-despacito-extended.mp3");
  Oof = loadSound("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/roblox-death-sound-oof.mp3")
  quek = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/fa84fb21a5b6401.png")
  Hour = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/Starting.png")
  beck = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/beck.png")
 // Hour = loadGif("Hourglass35.gif");
}

function setup()
{
  A.play();
  createCanvas(1200,600);
  noCursor()
  setupHealth()
  setupTimer()

  canvasID = 0;
}

function draw()
{
  if (canvasID == 0)
  {
	  background(beck)
	  fill(0,255,0)
	  showQuestion()
	  Health()
	  if (mouseX > V - 50 && mouseX < V + 50 && mouseY > S && mouseY < S + 100 && mouseIsPressed)
	  {
	    Oof.play();
	    round = 2
	    gam ++

	    resetTiming()
	  }
//	  Timing()
	  nxt()
    bounce()
	  dude(V*2,S*2,58,30,0)
	  dude(R*2,F*2,0,255,0)
	  cross()
	  manageTime(0,400)
	  drawHealth(-1)
  }

  if (canvasID == -1){
    textSize(32)
    strokeWeight(5)
    textSize(200)
    textAlign(CENTER)
    text("GAMEOVER",600,300)

  }
  if (gam == 7){
    gam = 0
  }
}

function showQuestion()
{
  textSize(20)
  strokeWeight(2)
  text(Question[Ques],600-100,300-100)
  if (Ques == 3){
  	Ques = 0
  }
}

function dude(x,y,r,g,b)
{
  fill(r,g,b)
  strokeWeight(5)
  rect(x-20,y,50,100)
  ellipse(x+5,y,50,50)
}

function cross()
{
  fill(255,0,0)
  stroke(0,0,0)
  strokeWeight(5)
  rect(mouseX-50,mouseY,100,2)
  rect(mouseX,mouseY-50,2,100)
  ellipse(mouseX,mouseY,20,20);
}

function resetTiming()
{
	resetTimer()
	strokeWeight(40)
	if (round == 2 )
	{
		V = random(0,1000)
		S = random(100,500)
		R = random(0,1000)
		F = random(100,500)
	}

}

function bounce()
{

  var x = 320;
  var y = 180;
  var xspeed = 5;
  var yspeed = 2;
  var r = 25;
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
}

function nxt()
{
  if (round == 2)
  {
    textSize(32)
    strokeWeight(5)
    textSize(150)
    textAlign(CENTER)
    text(Desround[gam],600,300)
    Ques ++
    round = 1
  }
}
