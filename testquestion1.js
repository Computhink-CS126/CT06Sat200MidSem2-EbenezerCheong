function setup() {
    createCanvas(600, 400);
    background(0, 0, 0);
}
function draw(){
    stroke("red");
    strokeWeight("10");
    fill("black")
    circle (120, 200, 100);
    triangle(240, 250, 360, 250, 300, 150);
    rect(430, 150, 100, 100);
}