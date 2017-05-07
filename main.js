var player;
var enemy = [];
var gameHeight = 400;
var gameWidth = 400;
var bullet = [];
let test = true;
let bulletLength;
// base function for p5
function setup() {
    createCanvas(gameWidth, gameHeight);
    player = new Player();
    for(i = 0; i <= 50; i++){
        bullet.push(new Bullet(player.x,player.y));
    }
        for(i = 0; i <= 5; i++){
        enemy.push(new Enemy(enemy.xRange, enemy.yRange));
        }
    input = new Input();
    bulletLength = bullet.length;
}

//Base Function for P5
function draw() {
    background(169, 169, 169);
    player.draw();
    for (i = 0; i < enemy.length; i++){
        enemy[i].show();
        enemy[i].move();
    }
    for (i = 0; i < bulletLength; i++){
        bullet[i].show();
        bullet[i].move();
    }
    input.inputTest();
}
    


