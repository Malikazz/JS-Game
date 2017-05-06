var player;
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
    input = new Input();
    bulletLength = bullet.length;
}

//Base Function for P5
function draw() {
    background(169, 169, 169);
    player.draw();
    for (i = 0; i < bulletLength; i++){
        bullet[i].show();
        bullet[i].move();
    }
    input.inputTest();
}
    


