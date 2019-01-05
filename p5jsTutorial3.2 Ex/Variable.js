


  function drawVariable()
  {
    background(255,255,255)
    turnPage()
    console.log(ARR)
  }


function turnPage(){
    image(pegg[ARR],10,0)
    if (ARR == 6){
      CanvasID = 8
    }
}

function keyReleased() {
  ARR++
 // return false;
}