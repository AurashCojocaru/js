const circlesCount = 22;
const bigCircle = 75;
const smallCircle = 11;
const step = 0.07;

var sldFactor, cbShowCircles, offset, bigCircleHalf, x = 0,
    showBigCircles = true;

function setup() {
    createCanvas(850, 850);
    sldFactor = createSlider(0, 10, 6, 0.5)
    sldFactor.position(10, 870)
    cbShowCircles = createCheckbox("Show big circles", true)
    cbShowCircles.changed(function () {
        showBigCircles = this.checked()
    });
    sldFactor.position(10, 890)
    bigCircleHalf = bigCircle / 2;
    offset = bigCircleHalf + bigCircle * step;
}

function draw() {
    background(220);

    for (var i = 0; i < circlesCount; i++) {
        for (var j = 0; j < circlesCount; j++) {
            if (showBigCircles) {
                fill(0, 0, 0, 0);
                stroke(0);
                strokeWeight(0.5);
                ellipse(offset * i, offset * j, bigCircle);
            }

            fill(100);
            stroke(50);
            strokeWeight(0.1);
            ellipse(offset * i + bigCircleHalf * sin(x + step * (i + j) * sldFactor.value()),
                offset * j + bigCircleHalf * cos(x + step * (i + j) * sldFactor.value()),
                smallCircle);
        }
    }

    x += step;
    if (x > TWO_PI) {
        x = 0;
    }
}