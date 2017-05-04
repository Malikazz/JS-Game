 function Input(){
 
 //Tests if a key is down then if the player is on the play screen, then looks for keycodes and adds or subtracts to move charcter.
    this.inputTest = function() {
         if (keyIsPressed === true){
            
            console.log("x = " + player.x+ " y = " + player.y)
            
            // move up
            if (keyIsDown(38) && player.y > 0){
                player.y = player.y + player.ySpeed;
            }
            
            //move down
            if (keyIsDown (40) && player.y < 790){
                player.y = player.y - player.ySpeed;
            }
            
            //move left
            if (keyIsDown (37) && player.x > 0){
                player.x = player.x - player.xSpeed;
            }

            //move right
            if (keyIsDown (39) && player.x < 790){
                player.x = player.x + player.xSpeed;
            }
            
            //shoots bullet by making it active maybe need more here
            if (keyCode == 32){
                console.log("SHOOT")
                let a = bullet.length;
                for (i = 0; i < a; i++){
                    console.log(bullet[i]);
                    if(bullet[i].isActive === false){
                        bullet[i].isActive = true;
                        break;
                    }
                }
            }
        }
    }
 }


 