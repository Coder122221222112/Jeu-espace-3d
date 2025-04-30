class Asteroid {
    constructor() {
      this.x = random(innerHeight, innerWidth);
      this.y = random(-600, 600);
      this.z = random(-3000, -2000);
      this.size = random(25, 50);
      this.angle = random(0, 100);
      this.color = [200, 20, 255]
    }
    draw() {
      push();
      ambientMaterial(this.color);
      translate(this.x, this.y, this.z);
      rotateX(this.angle);
      rotateY(this.angle);
      rotateZ(this.angle);
      noStroke();
      box(this.size);
      pop();
    }
  
    move() {
      this.z = this.z + 15;
      if (this.z > 400) {
        this.z = random(-3000, -2000);
        score = score +1
      }
    }
  }
  