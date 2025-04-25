let asteroids = [];
let player;
let ship;
let typing;
let score = 0;

function preload() {
  ship = loadModel("./ship.obj");
  typing = loadFont ("./typing.ttf")
}

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  angleMode(DEGREES);
  textFont(typing)

  for (let i = 0; i < 100; i++) {
    asteroids[i] = new Asteroid();
  }
  player = new Player();
}

function draw() {
  background(0);
  ambientLight(100);
  directionalLight(255, 255, 255, 1, 0.5, 0);

  textSize(50)
  text("Score :"+score, -innerWidth/2 + 50,-innerHeight/2 + 50);

  textSize(40)
  text("Vie :"+player.hp, -innerWidth/2 + 100,-innerHeight/2 + 100);

  if (player.hp < 0){
    gameOver();
  }
  

  for (let i = 0; i < 100; i++) {
    asteroids[i].draw();
    asteroids[i].move();
    let col = player.isColliding(asteroids[i])
    if (col){
        player.hp = player.hp - 1
    }
    
  }

  player.draw();
  player.move();
  player.keyboard();

  if (player.hp < 0){
    gameOver();
  }
}

function gameOver(){
    textSize(72);
    text("Game Over !", 0, 0);
    noLoop();
}