//Mathy Challenge 

function setup() {
  createCanvas(340, 340);
}

var slopeLine1 = 40
var slopeLine2 = 60
var slopeLine3 = 20

while (true){
  line(slopeLine1, slopeLine1, slopeLine2, slopeLine3);
  slopeLine1 = slopeLine1 + 1;
  slopeLine2 = slopeLine2 + 1;
  slopeLine3 = slopeLine3 + 1;
}
  
