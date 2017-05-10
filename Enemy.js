function Enemy(x,y){
    let timeOne = 1000;
    let eSpeed = 500;
    this.x = x;
    this.y = y;
    this.isActive = true;
    let eWidth = 30;
    let eHeight = 30;
    let spawnX = x;
    
    // Shows the enemy if they is no enemy present at the spawn
    this.show = function(){
        fill (333)
        triangle(this.x,this.y,this.x + eWidth / 2,this.y + eHeight,this.x + eWidth, this.y)
    }

    //moves right till it hits the end then moves down
    this.move = function(){
        if (this.isActive === true && millis() - timeOne >= eSpeed && this.x + eWidth < gameWidth && this.y < gameHeight + eHeight){
            this.x = this.x + 1;
        
        }
        
        else if (this.isActive === true && millis() - timeOne >= eSpeed && this.x + eWidth >= gameWidth - spawnX){
            this.y = this.y + eHeight;
            this.x = spawnX;
        }
    }
}