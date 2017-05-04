//creates the player and keeps track of location
function Player() {
    this.xSpeed = 1;
    this.ySpeed = -1;
    this.x = gameWidth / 2;
    this.y = gameHeight / 2;
    
this.draw = function() {
        fill (000);
        rect(this.x, this.y, 11, 11);
    }
}