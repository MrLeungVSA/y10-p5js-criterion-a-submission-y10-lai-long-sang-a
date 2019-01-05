var V = 1
var S = 1
var A 
var round = 1
var tik = 10
var R = 1
var F = 1
var GG = false
var Oof 
var Question = ["which is the correct syntax?","what is a variable?","which is a javascript comment?","What data type is true?","If var is blank, is it null?","Is\"123\"a string?","can you modify const?"]
var Desround = ["Round 1","Round 2","Round 3","Round 4","Round 5","Round 6","Round 7","Final Round"]
var right = ["var \"meme223\" = string","A container for data","//","Boolean","No","Yes","No"]
var wrong = ["var string = \"meme223\"","A operator","--!>","Integer","Yes","No","Yes"]
var gam = 0
var Ques = 0
var HP = 200
var quek
var canvasID
var Hour
var beck
let score = 0

function preloadShooter()
{

  A = loadSound("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/fortnite-despacito-extended.mp3");
  Oof = loadSound("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/roblox-death-sound-oof.mp3")
  quek = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/fa84fb21a5b6401.png")
  Hour = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/Starting.png")
  beck = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/New%20Piskel%20(1).png")
  qback = loadImage("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/code%20img/New%20Piskel.png")
 // Hour = loadGif("Hourglass35.gif");
}

function setupShooter()
{
  A.play();
  createCanvas(1200,600);
  noCursor()
  setupHealth()
  setupTimer()

  canvasID = 0;
}

function drawShooter()
{
  if (canvasID == 0)
  {
	  background(beck)
	  fill(0,255,0)
	  showQuestion()
	  Health()
    SCRE()
	  if (mouseX > V - 50 && mouseX < V + 50 && mouseY > S && mouseY < S + 100 && mouseIsPressed)
	  {
	    Oof.play();
	    round = 2
	    gam ++
      score += 50
	    resetTiming()
	  }
        if (mouseX > R - 50 && mouseX < R + 50 && mouseY > F && mouseY < F + 100 && mouseIsPressed)
    {
      Oof.play();
      round = 2
      gam ++
      fill(255,5,5)
      text("Wrong Answer!",R+50,F+50)
      fill(0,255,0)
      deductHealth(50);
      resetTiming()
    }
//	  Timing()
	  nxt()
    bounce()
	  dude(V-20,S,58,30,0)
    text(right[Ques],V,S)
	  dude(R-20,F,0,255,0)
    text(wrong[Ques],R,F)
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
  image(qback,600-125,80)
  text(Question[Ques],600-100,300-100)
  if (Ques > 7){
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

function SCRE()
{
  textSize(50)
  text("Score:"+score,0,150)
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
