//creates the player and keeps track of location
function Player() {
    this.xSpeed = 2;
    this.ySpeed = -2;
    this.x = gameWidth / 2;
    this.y = gameHeight / 2;
    
    this.show = function() {
        fill (000);
        rect(this.x, this.y, 11, 11);
    }

    this.move = function(){
    
    }
}