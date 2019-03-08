function Difficulty(){
    this.modifier = 1;

    this.ModifyDifficulty = function(score)
    {
        this.modifier += score / 1000;
        if (this.modifier > 1)
        {
            console.log("New Enemy")
            enemy.push(new Enemy(1,10))
        }
    }
}