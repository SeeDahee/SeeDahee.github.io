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
  canvas = createCanvas(windowWidth, windowHeight * 2);
  canvas.position(0, 0);
  canvas.style('z-index','-1');
  frameRate(60);
}


function draw()
{
	
	noStroke();
	
	xoff = xoff + 0.01;
	angle += .6;
  var n = noise(xoff) * 750;

	fill('#d15700');
	stroke('#ff7514');
  rect(angle,0,40,n);

  // stroke(255);
  strokeWeight(.75);

  rect(angle+4,0,40,n);

}
