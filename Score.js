function Score (startingScore,textSize, gameWidth, gameHeight){
    //Seed starting score (its not a const incase we want 
    //saved games later this way we can pass that data)
    this.StartingScore = startingScore;
    this.KilledEnemyValue = 100;
    this.KilledBossValue = 1000;
    this.PointsToDisplay = this.StartingScore;
    this.extSize = textSize;
    this.GameWidth = gameWidth;
    this.GameHeight= gameHeight;
    //Call this when an enemy is killed
    this.KilledEnemy = function ()
    {
        this.PointsToDisplay += this.KilledEnemyValue;
    };


    //call this when a boss is killed
    this.KilledBoss = function ()
    {
        this.PointsToDisplay += this.KilledBossValue;
    };

    this.DisplayScore = function ()
    {
        fill(0);
        text("Points: " + this.PointsToDisplay, 5, this.GameHeight -5);
    };


}