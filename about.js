this.focus();// means you don't have to click on the canvas to use the keyboard

let g;
let a;
function setup() {
  createCanvas(400, 400);
  let inset = 40;
  let columns = 5;
  let rows = 5;
  /* Optional: The number of columns and rows is the same because
     the canvas width and height are the same.  But if the canvas
     width and height are different, things break. Change the gridSize      calculation so that it builds square cells to fit the 
     larger dimension. */
  let gridSize = (width - 2 * inset) / columns;
  g = new Grid(columns, rows, gridSize, inset);

  a = new Agent(0, 0);
  g.drawAgent(a);
}

function draw() {
  background(220);
  g.addStuff(a);
  g.draw();
  g.drawAgent(a);
}

function keyPressed() {
  if (keyCode === UP_ARROW) a.moveUp();
  else if (keyCode === LEFT_ARROW) a.moveLeft();
  else if (keyCode === RIGHT_ARROW) a.moveRight();
  else if (keyCode === DOWN_ARROW) a.moveDown();
} 


