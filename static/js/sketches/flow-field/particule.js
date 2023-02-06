function Particle() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0.5-random(),0.5-random()); // p5.Vector.random2D(); // 
    this.acc = createVector(0,0);
    this.prevPos = this.pos.copy();
    this.speedlimit = 4;
    this.update = function() {
        this.prevPos = this.pos.copy()
        this.vel.add(this.acc);
        this.vel.limit(this.speedlimit)
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.follow = function(vectors) {
        // Recherche du vecteur de la grille correspondant
        // à la position de la particule
        var x = floor(this.pos.x / scl)
        var y = floor(this.pos.y / scl)
        var index = x +y * cols
        var force = vectors[index];
        this.applyForce(force);
    }

    this.applyForce = function(force) {
        this.acc.add(force)
    }

    this.draw = function(h, s=200) {
        // stroke(h,127+h/2,200,20);
        stroke(h, s, 255);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        // point(this.pos.x, this.pos.y);
    }

    this.edges = function() {
        if (this.pos.x > width) { this.pos.x = 0; this.prevPos = this.pos.copy() }
        if (this.pos.x <0) { this.pos.x = width; this.prevPos = this.pos.copy() }
        if (this.pos.y > height) { this.pos.y = 0; this.prevPos = this.pos.copy() }
        if (this.pos.y < 0 ) { this.pos.y = height; this.prevPos = this.pos.copy() }
    }
}