//Mondrian Concerto
colorMode(HSB);
noStroke();

function setup() {
  createCanvas(400, 400);
  background (10);
}

function draw() {
 fill(random(180,240), 50, 100);
 rect (5, 5, 100, 100)
 
 fill(random(270,330), 50, 100); 
 rect (110, 5, 235, 100);
  
 fill(random(0,60), 50, 100);
 rect (5, 110, 150, 170)
  
 fill(random(180,240), 50, 100);
 rect (5, 285, 150, 110)
  
 fill(random(180,240), 50, 100);
 rect (160, 110, 50, 50)
  
 fill(random(0,60), 50, 100);
 rect (215, 110, 130, 170)
  
 fill(random(180,240), 50, 100);
 rect (215, 285, 130, 110)
  
 fill(random(270,330), 50, 100); 
 rect (160, 165, 50, 175)
 
 fill(random(0,60), 50, 100);
 rect (160, 345, 50, 50)
}
