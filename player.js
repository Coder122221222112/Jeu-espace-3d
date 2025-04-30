class Player {
    constructor() {
      this.x = 0;
      this.z = 250;
      this.iz = 0;
      this.vx = 0;
      this.viz = 0;
      this.max_speed = 3;
      this.y = 150;
      this.hp =5;
      this.projectiles = [];
    }
    draw() {
      push()  
      translate(this.x, this.y, this.z);
      rotateZ(this.iz);
      ambientMaterial(100, 120, 255);
      noStroke();
      scale(10);
      rotateX(180)
      rotateY(-90)
      model(ship);
      pop()

      for (let i = 0;i < this.projectiles.length; i++){
        this.projectiles[i].draw();
      }
    }
    move() {
      this.iz = this.iz + this.viz;
      this.iz = this.iz * 0.8;
      this.x = this.x + this.vx;
      this.vx = this.vx * 0.99;
      this.viz = this.viz * 0.8;

      for (let i = 0;i < this.projectiles.length; i++){
        this.projectiles[i].move();
      }
    }
    keyboard() {
      if (keyIsDown(LEFT_ARROW)) {
        this.vx = -this.max_speed;
        this.viz = -4.99;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.vx = this.max_speed;
        this.viz = 4.99;
      }
      if (keyIsDown(32)){
        this.shoot()
      }
    }
    isColliding(asteroid) {
      let marge_x = 50;
      let marge_y = 50;
      if (asteroid.z > 200) {
        if (asteroid.x > this.x - marge_x && asteroid.x < this.x + marge_x) {
          if (asteroid.y > this.y - marge_y && asteroid.y < this.y + marge_y) {
            asteroid.z = random(-3000, -2000)
            return true;
          }
        }
      } else {
        return false;
      }
    }
    // shoot() {
    //     let p = new Projectile(this.x, this.y, this.z);
    //     this.projectiles.push(p)
    }
  }
  