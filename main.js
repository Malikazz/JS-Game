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

let input = new Input();
function setup() 
{
    
    score = new Score(100,15, gameWidth, gameHeight);
    difficulty = new Difficulty(score.PointToDisplay)
    // this creates a gameboard with Canvas
    this.createCanvas(gameWidth, gameHeight);
    //This makes a new player 
    player = new Player();
    //This creates the enemy(s)
    for(let i = 0; i < 4; i++)
    {
        enemy.push(new Enemy(spawnX, spawnY));
        spawnX += 50;
    }
    // Creates Bullets for the play to use
    for(let i = 0; i < 4; i++)
    {
        bullet.push(new Bullet(player.x,player.y));
    }

    //Dont remeber what this does will have to read through code
    //to understand
    bulletLength = bullet.length;
    enemyLength = enemy.length;
};

//Base Function for P5
function draw() 
{
    //Color for Canvas
    background(169, 169, 169);
    //Calls show function in player
    // Currently not testing a move function anywere for player
    // Probably because the place is moved by input and not on 
    // a turn based fuction
    player.show();

    //Runs show fuction and move fuction for each enemy
    for (let i = 0; i < enemy.length; i++)
    {
        
        //If any enemy has died respawn him at the start
        if(enemy[i].isActive)
        {
            enemy[i].show();
            enemy[i].move();
        }
        else
        {
            enemy[i].x = spawnX
            enemy[i].y = spawnY
            enemy[i].isActive = true;
        }
    }

    // runs show fuction and move fucntion for each enemy
    for (let i = 0; i < bulletLength; i++)
    {
        bullet[i].show();
        bullet[i].move(); 
    }
    input.inputTest();
    score.DisplayScore();
    difficulty.ModifyDifficulty(score.PointToDisplay)
};
    


