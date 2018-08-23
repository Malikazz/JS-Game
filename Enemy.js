function Enemy(x,y){
    let timeOne = 1000;
    let eSpeed = 500;
    this.x = x;
    this.y = y;
    this.isActive = true;
    let eWidth = 30;
    let eHeight = 30;
    let spawnX = x;
    let spawnY = y;
    
    // Shows the enemy if they is no enemy present at the spawn
    this.show = function(){
        if(this.isActive === true){
        fill (333);
        triangle(this.x,this.y,this.x + eWidth / 2,this.y + eHeight,this.x + eWidth, this.y)
        }    
    };

    //moves right till it hits the end then moves down
    this.move = function(){
        if (this.isActive === true && millis() - timeOne >= eSpeed && this.x + eWidth < gameWidth && this.y < gameHeight + eHeight){
            this.x = this.x + 1;
        
        }
        
        else if (this.isActive === true && millis() - timeOne >= eSpeed && this.x + eWidth >= gameWidth - 1){
            this.y = this.y + eHeight;
            this.x = 1;
        }
        else if (this.isActive === true && millis() - timeOne >= eSpeed && this.y + eHeight >= gameHeight){
            this.isActive = false;
            this.x = 1;
            this.y = 10;
            //console.log("It happened" + this.x + this.y + this.isActive)
        }
    }
}