var location1 = 3;
var location1 = 4;
var location1 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// GAME LOGIC

while (isSunk == false) {
    guess = prompt ("Ready, Aim, Fire! (Enter number 0-6)");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!")
    }else {
        guesses = guesses + 1;

        if(guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("hit!")

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleShip!")
            }
        }else {
            alert("Miss!")
        }
    }
}

var stats = "You sank my battleship at " + guesses + "guesses," + "and Your Accuracy is; " + (3/guesses);
alert(stats);