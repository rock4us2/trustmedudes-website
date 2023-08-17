let bubbles = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 50; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 40);
        let bubble = new Bubble(x, y, r);
        bubbles.push(bubble);
    }

function draw() {
        background(220);
        }
