function setup() {
    createCanvas(600, 600);
    background(220);
}

function draw() {
let circleColour = 255 ; 
    for ( let i = 1 ; i < 11 ; i++ ) {
        fill(255, 255 , (circleColour - (25.5 * i)));
        circle ((50 * i), (50 * i), 50);
    }
}
