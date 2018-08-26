function Input(){
    let timeOne = 1000;
 //Tests if a key is down then if the player is on the play screen, then looks for keycodes and adds or subtracts to move charcter. Also checks for spacebar and if its pressed it fires bullets on a 1/4 sec timer.
    this.inputTest = function() {
         if (keyIsPressed === true){
            
            //console.log("x = " + player.x+ " y = " + player.y)
            
            // move up
            if (keyIsDown(38) && player.y > 0){
                player.y = player.y + player.ySpeed;
            }
            
            //move down
            if (keyIsDown(40) && player.y < gameHeight - 10){
                player.y = player.y - player.ySpeed;
            }
            
            //move left
            if (keyIsDown(37) && player.x > 0){
                 player.x = player.x - player.xSpeed;
            }

            //move right
            if (keyIsDown(39) && player.x < gameWidth - 10){
                player.x = player.x + player.xSpeed;
            }
            
            //shoots bullet by making it active maybe need more here, checks time to slow bullet shooting.
            
            if (keyIsDown (32) &&  millis() - timeOne >= 250){
                console.log("SHOOT");
                let a = bullet.length;
                for (i = 0; i < a; i++){
                    if(bullet[i].isActive === false){
                        bullet[i].isActive = true;
                        timeOne = millis();
                        break;
                    }
                }
            }
        }
    }
 }


 