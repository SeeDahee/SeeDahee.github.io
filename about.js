// THINGS TO ADD  
// - Make the circles fade after somet ime so you have like a mouse trail
//play with circle sizes
//you just need some more interactive component to your website


var c1, c2;
let trail = [];
let a = 0;
let b = 0;

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight*2);
}


function setGradient(c1, c2) 
{
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1.5);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 2.08);
  canvas.position(0, 0);
  canvas.style('z-index','-1');
  frameRate(60);
  c1 = color(255, 204, 0);
  c2 = color(255);
  setGradient(c1, c2);
}



function draw() {

  trail.push([mouseX, mouseY]);
   for(let i = 0; i < trail.length; i++) {
   noFill();
   stroke('#ff7514');
   line(trail[i][0], trail[i][1], mouseX, mouseY);
     if(a > 250) {
       trail.shift();
       a = 0;
     }
     a += 3;
  }
}