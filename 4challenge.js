//Random Abstract Mondrian
colorMode(HSB);


function setup() {
  createCanvas(400, 400);
}

strokeWeight (4);

while (true) {
 background(0, 0, 255, 0.1);
 fill(0, 100, 100);
 rect (random (width), random (height), 100, 100);
 fill(60, 100, 100);
 rect (random (width), random (height), 150, 50);
 fill(240, 100, 100);
 rect (random (width), random (height), 50, 50);
  
 var lineHoriz = random(height)
 line (0, lineHoriz, 400, lineHoriz);
  
 fill(0, 100, 100);
 rect (random (width), random (height), 100, 100);
 fill(60, 100, 100);
 rect (random (width), random (height), 150, 50);
 fill(240, 100, 100);
 rect (random (width), random (height), 50, 50);
  
 var lineVert = random(width)
 line (lineVert, 0, lineVert, 400);
}
