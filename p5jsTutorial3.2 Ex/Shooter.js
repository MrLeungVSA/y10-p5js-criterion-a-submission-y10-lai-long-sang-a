var V = 1
var S = 1
var A 
var round = 1
var tik = 10
var R = 1
var F = 1
var GG = false

function preloadShooter()
{
  A = loadSound("https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/fortnite-despacito-extended.mp3");
}

function setupShooter()
{
  A.play();
  resizeCanvas(1200,600)
  noCursor()
}

function drawShooter()
{
  background(0,0,225)

  Timing()
  fill(0,255,0)
  if (mouseX > V - 50 && mouseX < V + 50 && mouseY > S && mouseY < S + 100 && mouseIsPressed)
  {
    round = 2
  }
  nxt()
  gameover()
  dude(V,S,255,0,0)
  dude(R,F,0,255,0)
  cross()
  if (GG == true){
    textSize(32)
    strokeWeight(5)
    textSize(200)
    textAlign(CENTER)
    text("GAMEOVER",600,300)
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

function Timing()
{
  strokeWeight(40)
  line(0,20,tik,20)
  tik = tik + 10
  if (tik == 1200)
  {
    tik = 10
    V = random(0,1000)
    S = random(100,500)
    R = random(0,1000)
    F = random(100,500)
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
    text("NEXT ROUND",600,300)
    round = 1
    tik = 1150
  }
}

function gameover()
{
  if (tik == 1100){
    tik = tik* -1
    if (tik < 5){
      GG = true
    }
  }
}