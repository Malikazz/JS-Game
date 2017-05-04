var player;
var gameHeight = 400;
var gameWidth = 400;
var bullet = [];
let test = true;

// base function for p5
function setup() {
    createCanvas(gameWidth, gameHeight);
    player = new Player();
    for(i = 0; i <= 50; i++){
        bullet.push(new Bullet(player.x,player.y));
        console.log(bullet[i])
    }
    input = new Input();
}

//Base Function for P5
function draw() {
    background(169, 169, 169);
    player.draw();
    for (i = 0; i < bullet.length; i++){
        bullet[i].show();
        bullet[i].move();
    }
    input.inputTest();
}
    


