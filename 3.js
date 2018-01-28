background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(200,230), 100, 80);
  ellipse(random(width), random(height), random(30, 75));
}
