var inc = 0.1;
var t_inc = 0.005;
var scl = 10;
var nparts = 1000;
var cols, rows;
var zoff = 0;
var bDrawGrid = false;
var particles = [];
var flowfield;
var couleur = 0;

console.log(document.currentScript.getAttribute("src"));

function setup() {

    const sketchId = 'sketch-1';
    const contWidth = document.getElementById(sketchId).offsetWidth;
    let cnv = createCanvas(contWidth, 400).parent(sketchId);
    
    cols = floor(width / scl);
    rows = floor(height / scl);
    // Création duchamps de force (pas de var° temporelle)
    flowfield = new Array(cols * rows);
    
    strokeWeight(1)
    
    slider = createSlider(0.001, 0.25, 0.05, 0.01).parent(sketchId).class('p5-form');
    btn_new = createButton('Re-generate').parent(sketchId).class('p5-form')
    cb_field = createCheckbox('View perlin noise grid', false).parent(sketchId).class('p5-form');
    cb_field.changed(checkBoxLatch);
    cb_time = createCheckbox('Time evolution (3D noise)', true).parent(sketchId).class('p5-form');
    btn_new.mousePressed(genNewGrid);

    // slider.parent(sketchId).class('p5-form');
    // btn_new.parent(sketchId).class('p5-form');
    // cb_field.parent(sketchId).class('p5-form');
    // cb_time.parent(sketchId).class('p5-form');

    // zoff += inc/2;
    // Création des particules
    for (let i = 0; i < nparts; i++) {
        particles[i] = new Particle()
    }

    fr = createP('');
    colorMode(HSB,255);

    background(250);
  }
  
function draw() {
    inc = slider.value()
    
    if (bDrawGrid) {
        background(250,50)
    } else {
        background(250,5)
    }
    gridUpdate();

    couleur = couleur + t_inc;
    particles.forEach(p => {
        p.follow(flowfield)
        p.update();
        p.edges();
        p.draw(floor(360*noise(couleur)));
    });

    fr.html('Framerate : ' + floor(frameRate()))
}

function genNewGrid() {
   // Reset particules pos and velocity
   particles.forEach(p => {
       p.pos = createVector(random(width), random(height))    
       p.vel = createVector(0,0)
   });
   // Change noiseSeed
   noiseSeed(floor(random(255)))
   background(255)
  }

function gridUpdate() {
    var yoff = 0;
    for (let y = 0; y < rows; y++) {
        var xoff = 0;
        for (let x = 0; x < cols; x++) {
            var index = (x + y * cols);
            var r = noise(xoff, yoff, zoff) * TWO_PI * 2;
            var v = p5.Vector.fromAngle(r);
            v.setMag(0.5)
            flowfield[index] = v
            xoff += inc;

             // Grid grey view of perlin noise resolution
            if (bDrawGrid) {
                var g = (r*0.5)/TWO_PI*255
                fill(g,250,250,128)
                rect(x*scl, y*scl, scl, scl)
            
                stroke(255,128);
                push();
                translate(x * scl, y * scl);
                rotate(v.heading());
                line(0,0, scl, 0);
                pop();
            }
        }
        yoff += 1.5*inc;
    }
    zoff += t_inc * cb_time.checked(); // inc/5; //
    bDrawGrid = cb_field.checked();
}

function checkBoxLatch() {
    bDrawGrid = cb_field.checked();
}