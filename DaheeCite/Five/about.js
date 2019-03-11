var canvas;
var mic;
var addition;
var moreAdd;
var n; 
var o;

var waveOne = 0.0;
var waveTwo = 0.0;

var addition = 0;
var moreAdd = 0;

function windowResized() 
{
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight * 2);
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
  
  
  waveOne = waveOne + 0.01;
	waveTwo = waveTwo + 0.04;
  addition += 1;
  moreAdd += 2;
  
  var n = noise(waveOne) * 1000;
  var o = noise(waveTwo) * 200



  stroke(80,110,10);
	fill(30,130,50);
  rect(addition,0,50,n);

	// stroke(80,110,10);
  // fill(30,130,50);
  // rect(moreAdd,200,40,n);

	
}
