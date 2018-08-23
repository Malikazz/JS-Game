let player;
let enemy = [];
let gameHeight = 400;
let gameWidth = 400;
let bullet = [];
let test = true;
let bulletLength;
let enemyLength;
let spawnX = 1;
let spawnY =10;
// base function for p5
function setup() {
    createCanvas(gameWidth, gameHeight);
    player = new Player();
        for(i = 0; i < 4; i++){
        enemy.push(new Enemy(spawnX, spawnY));
        spawnX += 50;
    }
    
    for(i = 0; i <= 50; i++){
        bullet.push(new Bullet(player.x,player.y));
    }
    input = new Input();
    bulletLength = bullet.length;
    enemyLength = enemy.length;
}

//Base Function for P5
function draw() {
    background(169, 169, 169);
    player.show();
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
    


