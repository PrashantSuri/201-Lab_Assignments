"use strict";
var questions = ["Do I live in Hyderabad?", "Do I work for Amazon?", "Do I like Seattle?", "Do I like Java language?", 
                "Do I like Pizza?",
                "Guess no. of countries I have visited. You will get 4 chances for this",
                "Name one of the country I had visited. Options are USA, Brazil, Japan, Singapore, & Canada"];
var answers = ["y", "y", "n", "n", "y",3,["USA","Brazil","Canada"]];
var countries = "";
var correct = 0;
var i, j = 0;
var attemptsLeft = 3;
//alert(answers[6].length);
alert("Welcome! Let's play a guessing game so that you can know me better. First five questions have to be answered in Y/N & rest will require numeric/word input");
for (i=0;i<questions.length;i++) {
//    alert(i);
    var guess = prompt(questions[i]);
    console.log(questions[i] + " = " + guess);
    if (guess === null) {
        var retry = prompt("It seems you clicked cancel. Type 'Y' if you want to try again");
        if (retry === null || retry.trim().toLowerCase() !== "y") {
            alert("Thanks for visiting");
            break;
        } 
        else {
            i--;
            continue;
        }
    }
    else if (i < 5) {
        if (guess.toLowerCase() === answers[i]) {
            alert("Correct");
            correct++;
        }
        else {
            alert("Sorry, incorrect guess");
        }
    }
    else if (i===5) {
        while (attemptsLeft >= 0) {
            console.log("No. of attempts remaining - " + attemptsLeft + " " + guess + answers[i]);
            if (parseInt(guess) === answers[i]) {
                alert("You have guessed it correctly.");
                correct++;
                break;
            }
            else if (attemptsLeft > 0) {
                if (guess < answers[i]) {
                    attemptsLeft--;
                    guess = prompt("I have seen more than " + guess + " country/countries. Please try again");
                }
                else if (guess > answers[i]) {
                    attemptsLeft--;
                    guess = prompt("I wish I could have seen " + guess + " countries. Please try again");
                }
                else if (isNaN(guess)) {
                    attemptsLeft--;
                    guess = prompt("Please use only numbers. Please try again");
                }
            }
            else {
            alert("You were not able to guess. I have visited " + answers[i] + " countries.");
            break;
            }
        }
    }
    else if (i>5) {
        for (j=0;j<answers[i].length;j++) {
            if (guess === answers[i][j]) {
                alert("You have guessed it correctly.");
                correct++;
                break;
            }
            else {
                console.log("Incorrect answer: " + guess);
                countries = countries + ", " + answers[i][j]; 
                if (j===2) {
                    alert("Incorrect answer. I have visited" + countries);
                    break;
                }
            }
        }
    }
}
alert("You guessed " + correct + " out of " + questions.length + " answers correctly");
