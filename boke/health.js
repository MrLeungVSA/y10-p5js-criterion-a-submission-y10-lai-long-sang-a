var health;


function preloadHealth()
{


}

function setupHealth()
{
	health = 300;
}

function drawHealth(setGameOverCanvasID)
{
	var x = 900;

	fill(255,0,0);
	rect(x,70,health,80);
	fill(0,0,0);
	textSize(50)
	text(health/50+"HP",x+60,120)
	strokeWeight(1);
	if (health <= 1)
	{
		canvasID = setGameOverCanvasID;
	}

	Health();
}

function deductHealth(amount)
{
	health = health - amount;
}

function Health()
{
  image(quek,800,0)
  if (tik == 1100){
    deductHealth(50);
    round = 2
  }
}
