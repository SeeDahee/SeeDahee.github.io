var canvas;
var mic;
var angle;

var xoff = 0.0;
var angle = 0;

function windowResized() 
{
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() 
{
	// fill(243, 237, 218);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index','-1');
  frameRate(60);
}


function draw()
{
	
	noStroke();
	
	xoff = xoff + 0.01;
	angle += 1;
  var n = noise(xoff) * 700;

	stroke(80,110,10);
	fill(30,130,50);
  rect(angle,0,40,n);


}
