const circlesCount = 22;
const bigCircle = 75;
const smallCircle = 11;
const step = 0.07;

var slider, offset, bigCircleHalf, x = 0;

function setup() {
    createCanvas(850, 850);
    slider = createSlider(0, 10, 6, 0.5)
    bigCircleHalf = bigCircle / 2;
    offset = bigCircleHalf + bigCircle % 10;
}

function draw() {
    background(220);
    
    for (var i = 0; i < circlesCount; i++) {
        for (var j = 0; j < circlesCount; j++) {
            fill(0, 0, 0, 0);
            stroke(0);
            strokeWeight(0.5);
            ellipse(offset * i, offset * j, bigCircle);

            fill(100);
            stroke(50);
            strokeWeight(0.1);        
            ellipse(offset * i + bigCircleHalf * sin(x + step * (i + j) * slider.value()), 
                offset * j + bigCircleHalf * cos(x + step * (i + j) * slider.value()),
                smallCircle);
        }
    }

    x += step;
}