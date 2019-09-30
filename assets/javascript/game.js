$(document).ready(function() {
   
    var target = Math.floor(Math.random()*101+19);
    
    $("#targetnumber").text(target);

        var blueCrystal = Math.floor(Math.random()*11+1);
        var redCrystal = Math.floor(Math.random()*11+1);
        var greenCrystal = Math.floor(Math.random()*11+1);
        var yellowCrystal = Math.floor(Math.random()*11+1);


        var userScore = 0;
        var wins = 0;
        var losses = 0;


    $("#gameWins").text(wins);
    $("#gameLosses").text(losses);


    function reset() {
        target = Math.floor(Math.random()*101+19);
        userScore = 0;
        console.log("target number: " + target);
        $("#targetnumber").text(target);
        

        blueCrystal = Math.floor(Math.random()*11+1);
        redCrystal = Math.floor(Math.random()*11+1);
        greenCrystal = Math.floor(Math.random()*11+1);
        yellowCrystal = Math.floor(Math.random()*11+1);
    }

    function winner() {
        alert("You win!");
        wins++;
        console.log("Wins: " + wins);
       $("#gameWins").text(wins);
        reset();
    }

    function loser() {
        alert("You lose!");
        losses++;
        console.log("Losses: " + losses);
        $("#gameLosses").text(wins);
        reset();
    }

    $("#blue").on("click", function(){
        userScore = userScore + blueCrystal;
        console.log("New user score: " + userScore);
        $("#userScore").text(userScore);
        

        if (userScore == target) {
            winner();
        }
        else if (userScore > target) {
            loser();
        }
    })


    $("#red").on("click", function(){
        userScore = userScore + redCrystal;
        console.log("New user score: " + userScore);
        $("#userScore").text(userScore);
        

        if (userScore == target) {
            winner();
        }
        else if (userScore > target) {
            loser();
        }
    })


    $("#green").on("click", function(){
        userScore = userScore + greenCrystal;
        console.log("New user score: " + userScore);
        $("#userScore").text(userScore);
        

        if (userScore == target) {
            winner();
        }
        else if (userScore > target) {
            loser();
        }
    })

    $("#yellow").on("click", function(){
        userScore = userScore + yellowCrystal;
        console.log("New user score: " + userScore);
        $("#userScore").text(userScore);
        

        if (userScore == target) {
            winner();
        }
        else if (userScore > target) {
            loser();
        }
    })
})