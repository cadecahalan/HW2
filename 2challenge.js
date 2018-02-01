//Mathy Challenge 

function setup() {
  createCanvas(400, 400);
}

while (true){
 var lineHoriz = random(height)
 var lineHoriz2 = lineHoriz - 2*lineHoriz
 var lineWidth = random(width)
 var lineWidth2 = lineWidth + lineHoriz
 line (lineWidth, lineHoriz, lineWidth2, lineHoriz2);
}
