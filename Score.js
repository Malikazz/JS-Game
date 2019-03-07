function Score (startingScore,textSize, gameWidth, gameHieght){
    //Seed starting score (its not a const incase we want 
    //saved games later this way we can pass that data)
    StartingScore = startingScore;
    KilledEnemyValue = 100;
    KilledBossValue = 1000;
    PointsToDisplay = StartingScore;
    TextSize = textSize;
  
    //Call this when an enemy is killed
    this.KilledEnemy = function ()
    {

    };


    //call this when a boss is killed
    this.KilledBoss = function ()
    {

    };

    this.DisplayScore = function ()
    {
        fill(0)
        text("Points: " + PointsToDisplay, 20, 300)
    };


}