function Difficulty(score){
    this.Score = score;
    this.modifier = 0;

    this.ModifyDifficulty = function()
    {
        modifier = Score / 1000;
        if (modifier < 1)
        {
            console.log("New Enemy")
            enemy.push(new Enemy(1,10))
        }
    }
}