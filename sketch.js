var btm;
var bg = 'black'

function setup() {
  createCanvas(windowWidth, windowHeight);
btm = createElement('button', 'click me');
  btm.position(20,20);
  btm.mousePressed(
    function(){
      bg = color(random(255), random(255), random(255));
    }
  )
}


function draw() {
  background(bg);
}