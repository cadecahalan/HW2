colorMode(HSB);

while (true) {
  var lineColorX = random(width);
  stroke(lineColorX, 100, 100);
  line(lineColorX, random(height), lineColorX, random (height));
}
