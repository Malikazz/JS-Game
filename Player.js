//creates the player and keeps track of location
function Player() {
    this.xSpeed = 2;
    this.ySpeed = -2;
    //This sets the players spawn to the center of the game field
    //This may get changed to be more like missle defense but 
    //leaving it atm.
    this.x = gameWidth / 2;
    this.y = gameHeight / 2;
    
    //Draws a square with a size of 11px X 11px
    this.show = function() {
        fill (000);
        rect(this.x, this.y, 11, 11);
    }
    //Does nothing was made to possibly save a movement but is currently
    //handled in the main function.
    this.move = function(){
    
    }
}