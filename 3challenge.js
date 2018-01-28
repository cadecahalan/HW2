background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(200,230), 100, 80);
  beginShape();
		vertex(random(30,80), random(20,70));
		vertex(random(85,135), random(30,80));
		vertex(random(85,135), random(65,115));
		vertex(random(30,80), random(30,80));
		endShape(CLOSE);
}
