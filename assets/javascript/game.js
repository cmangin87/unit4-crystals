        var wins = 0;
        var losses = 0;
        var target = Math.floor(Math.random() * 101) + 19;
        $("#targetnumber").text(target);

        var blueCrystal = Math.floor(Math.random() * 11) + 1;
        var redCrystal = Math.floor(Math.random() * 11) + 1;
        var greenCrystal = Math.floor(Math.random() * 11) + 1;
        var yellowCrystal = Math.floor(Math.random() * 11) + 1;

        $("#gameWins").html(wins);
        $("#gameLosses").html(losses);

        userScore = 0;
        $("#currentScore").text(userScore);

        function restartGame() {


            target = Math.floor(Math.random() * 101) + 19;
            $("#targetnumber").text(target);
            blueCrystal = Math.floor(Math.random() * 11) + 1;
            redCrystal = Math.floor(Math.random() * 11) + 1;
            greenCrystal = Math.floor(Math.random() * 11) + 1;
            yellowCrystal = Math.floor(Math.random() * 11) + 1;

            userScore = 0;
            $("#currentScore").text(userScore);

        }



        function winner() {
            alert("You win!");
            wins++;
            $("#wins").text(wins);
            restartGame();
        }

        function loser() {
            alert("You lose!");
            losses++;
            $("#losses").text(losses);
            restartGame();
        }

        $("#blue").on("click", function () {
            userScore = userScore + blueCrystal;
            console.log("New user score: " + userScore);
            $("#currentScore").text(userScore);


            if (userScore == target) {
                winner();
            } else if (userScore > target) {
                loser();
            }
        });


        $("#red").on("click", function () {
            userScore = userScore + redCrystal;
            console.log("New user score: " + userScore);
            $("#currentScore").text(userScore);


            if (userScore == target) {
                winner();
            } else if (userScore > target) {
                loser();
            }
        })


        $("#green").on("click", function () {
            userScore = userScore + greenCrystal;
            console.log("New user score: " + userScore);
            $("#currentScore").text(userScore);


            if (userScore == target) {
                winner();
            } else if (userScore > target) {
                loser();
            }
        })

        $("#yellow").on("click", function () {
            userScore = userScore + yellowCrystal;
            console.log("New user score: " + userScore);
            $("#currentScore").text(userScore);


            if (userScore == target) {
                winner();
            } else if (userScore > target) {
                loser();
            }
        });