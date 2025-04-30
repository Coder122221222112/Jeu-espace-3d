class Projectile {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    draw() {
      push()
      translate(this.x, this.y, this.z)
      rotateY(180);
      cylinder(20, 50);
      pop()
    }
  
    move() {
      this.z = this.z - 15;
      if (this.z > 4000) {
        this.z = z;
    }
  }
  