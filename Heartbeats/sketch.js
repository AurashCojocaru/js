const particleCount = 500;
const particlesPerFrame = 3;
let particles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background('rgb(30, 81, 76)');

    //add
    for(let i = 0; i < particlesPerFrame; i++) {
        particles.push(new Particle());
    }

    //display
    for(let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].isOutOfDisplay()) {
            particles.splice(i, 1);
        } else {
            particles[i].update();
            particles[i].show();
        }
    }
}

class Particle {
    constructor() {
        this.x = random(0, 1920);
        this.y = 1080;
        this.diameter = 16;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.color = color(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
    }

    isOutOfDisplay() {
        return this.x < 0 || this.x > window.innerWidth || this.y < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    show() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.diameter);
    }

    getRadius() {
        return this.diameter / 2;
    }
}