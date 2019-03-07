function Score (startingScore,textSize, gameWidth, gameHeight){
    //Seed starting score (its not a const incase we want 
    //saved games later this way we can pass that data)
    StartingScore = startingScore;
    KilledEnemyValue = 100;
    KilledBossValue = 1000;
    PointsToDisplay = StartingScore;
    TextSize = textSize;
    GameWidth = gameWidth;
    GameHeight= gameHeight;
    //Call this when an enemy is killed
    this.KilledEnemy = function ()
    {
        PointsToDisplay += KilledEnemyValue;
    };


    //call this when a boss is killed
    this.KilledBoss = function ()
    {
        PointsToDisplay += KilledBossValue;
    };

    this.DisplayScore = function ()
    {
        fill(0)
        text("Points: " + PointsToDisplay, 5, GameHeight -5)
    };


}