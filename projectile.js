class Projectile {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    draw() {
      push()
      translate(this.x, this.y, this.z)
      rotateY(90);
      cylinder(20, 100);
      pop()
    }
  
    move() {
      this.z = this.z - 15;
    }
  }
  