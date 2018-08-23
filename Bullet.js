function Bullet(x,y){
    this.x = x;
    this.y = y;
    this.isActive = false;
    
    //Moves the bullet up till the end of the screen
    this.move = function(){
        if (this.isActive === true && this.x <= gameWidth && this.x >= 0 && this.y >= 0 && this.y <= gameHeight){
            this.y = this.y - 2;
            for(i = 0; i < enemyLength; i++){
                if (this.x - enemy[i].x <= 1 && this.y - enemy[i].y <= 1){
                console.log("HIT" + enemy[i]);
                this.isActive = false;
                enemy[i].isActive = false;
                console.log(enemy[i]);
                break;

                }
            }
        }
        else if(this.x < 0 || this.x > gameWidth || this.y < 0 || this.y > gameHeight){
            this.x = player.x + 5;
            this.y = player.y;
            this.isActive = false;
        }
        else if(this.isActive === false){
            this.x = player.x + 5;
            this.y = player.y;
        }
    }
    
    //show bullet
    this.show = function (){
        if (this.isActive === true){
        fill(255);
        rect(this.x, this.y, 1, 3);
        }   
    }
}