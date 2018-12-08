var dankintro
var loading = 0
var PH = false

function preloadMainmenu()
{
	dankintro = loadImage('https://raw.githubusercontent.com/MrLeungVSA/y10-p5js-criterion-a-submission-y10-lai-long-sang-a/master/Images4code/600x600bb.jpg');	

}

function setupMainmenu()
{
  CanvasID = 1;	
}


function drawMainmenu()
{
	image(dankintro,0,0)
	Xstart();
	Load();
	ChangeCanvas();

}

function Xstart(){

	if (mouseIsPressed){
		PH = true 
	}
}


function Load(){
	if (PH == true){

		strokeWeight(2)
		fill(10, 105, 153)
		textSize(30)
		textFont('monospace')
		text("Loading....",50,500)
		stroke(10, 105, 153)
		strokeWeight(20)
		line(0,550,loading,550)
		loading = loading + 2;


	}
}
function ChangeCanvas(){

	if (loading == 600)
	{
		CanvasID = 2;
	}
}