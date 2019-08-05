// list of questions
var allQuestion = [
    question1 = {
        quastionList: "The Largest Lake In The World",
        answer: ["Sevan (Armenia)", "Great Salt Lake (United States)", "Superior (United States)", "Victoria (Kenya)"],
        answCorrect: 2,
        image: "assets/images/lake.gif"
    },
    question2 = {
        quastionList: "How Many Children Can Have a Spouse In China?",
        answer: ["As much as they can (want)", "No more than 2", "At least 3", "Just 1"],
        answCorrect: 1,
        image: "assets/images/kids.gif"
    },
    question3 = {
        quastionList: "Tallest Buildings In The World",
        answer: ["Burj Khalifa (Dubai)", "Lotte World Tower (Seoul)", "Shanghai Tower (Shanghai)", "Wells Fargo Center (Salt Lake City)"],
        answCorrect: 0,
        image: "assets/images/building.gif"
    },
    question4 = {
        quastionList: "What Was the First Christian Nation?",
        answer: ["Jerusalem", "Greece", "Armenia", "Israel"],
        answCorrect: 2,
        image: "assets/images/khor.jpg"
    },
    question5 = {
        quastionList: "The Highest Mountain In The World",
        answer: ["Godwin-Austen (China)", "Everest (Nepal)", "Makalu (Nepal)", "Nanga Parbat (Pakistan)"],
        answCorrect: 1,
        image: "assets/images/everest.gif"
    },
    question6 = {
        quastionList: "The Biggest Nightclub In The World",
        answer: ["Pacha Ibiza (Spain)", "Green Valley (Brasil)", "Amnesia Ibiza (Spain)", "Octagon (South Korea)"],
        answCorrect: 0,
        image: "assets/images/club.gif"
    },
    question7 = {
        quastionList: "The Longest Rivers In The World",
        answer: ["Mississippi-Missouri (USA)", "Amazon (Peru)", "Yangtze (China)", "Nile (Sudan)"],
        answCorrect: 3,
        image: "assets/images/river.gif"
    },
    question8 = {
        quastionList: "The longest bridge in the world",
        answer: ["Bang Na Expressway (Thailand)", "Hangzhou Bay Bridge (China)", "Danyang–Kunshan Grand Bridge (Shanghai)", "Lake Pontchartrain Causeway (USA)"],
        answCorrect: 2,
        image: "assets/images/bridge.gif"
    },
    question9 = {
        quastionList: "The tallest trees in the world",
        answer: ["The General Sherman (USA)", "Hyperion (USA)", "White Knight (Australia)", "Centurion (Australia)"],
        answCorrect: 1,
        image: "assets/images/tree.gif"
    },

    question10 = {
        quastionList: "The fastest animal in the world",
        answer: ["Frigate Bird", "Cheetah", "Peregrine Falcon", "White Throated Needletail"],
        answCorrect: 2,
        image: "assets/images/falcon.gif"
    },
    question11 = {
        quastionList: "The Smallest Countries In The World",
        answer: ["Monaco", "Nauru", "San Marino", "Vatican"],
        answCorrect: 3,
        image: "assets/images/vatican.gif"
    },
    question12 = {
        quastionList: "The largest aircraft in the world",
        answer: ["Airbus A300-600ST Beluga", "Antonov An-225 Mriya", "Boeing 747-8", "Airbus A380-800"],
        answCorrect: 1,
        image: "assets/images/plane.gif"
    }


];

var time = 25; // time

var correctCount = 0; // count correct answers

var incorrectCount = 0; // count incorrect answers

var unaswered = 0; // count unaswered answers

var array = []; // input questions in array

var gameTime; // for timer

for (var i = 0; i < allQuestion.length; i++) {
    array.push(allQuestion[i]);
}

var numArray = Math.floor(Math.random() * array.length); // choice question
var numQuestion = array[numArray]; // choice question
var correctAnswer = numQuestion.answer[numQuestion.answCorrect]; // correct answer

// play again
function newGame() {
    $('#timer').html("");
    $('#correctAnswer').html("");
    $('#question').html("ALL DONE!");

    for (var i = 0; i < numQuestion.answer.length; i++) {
        $('#answer' + (i + 1)).html("");
        $('#answer' + (i + 1)).data("");
    }
    $('.answersAll').html("");;
    $('#correct').html("Correct answers: " + correctCount);
    $('#incorrect').html("Incorrect answers: " + incorrectCount);
    $('#unanswered').html("Unanswered: " + unaswered);
    $('#startover').html("Start Over?");
    for (var i = 0; i < allQuestion.length; i++) {
        array.push(allQuestion[i]);
    }
    numArray = Math.floor(Math.random() * array.length);
    numQuestion = array[numArray];
    correctAnswer = numQuestion.answer[numQuestion.answCorrect];
}

// start play
function reset() {
    $('#timer').html("Time remaining " + time + " seconds");
    $('#question').html(numQuestion.quastionList);

    for (var i = 0; i < numQuestion.answer.length; i++) {
        $('#answer' + (i + 1)).html(numQuestion.answer[i]);
        $('#answer' + (i + 1)).data("value", numQuestion.answer[i]);
    }
    correctAnswer = numQuestion.answer[numQuestion.answCorrect]

    timer();
}


// timer
function timer() {
    clearInterval(gameTime);
    gameTime = setInterval(decrement, 1000);
}

function decrement() {
    time--;
    if (time < 10) {
        time = "0" + time;
    }
    $('#timer').html("Time remaining " + time + " seconds");

    // next question if time's up
    if (time === "0" + 0) {
        unaswered++;
        clearInterval(gameTime);
        $('#question').html("Time's up!");
        $('#correctAnswer').html("Correct answer is " + correctAnswer);

        correct();
        time = 25;

        if (array.length === 1) {
            setTimeout(function() {
                newGame();
            }, 5000)
        } else {
            setTimeout(function() {
                resetAll();
                reset();
                $('#correctAnswer').html("");

            }, 5000)

        }

    }
}

// function for the next question 
function resetAll() {
    array = array.filter(function(item) { // no-repeat question
        return item !== numQuestion;
    });
    numArray = Math.floor(Math.random() * array.length);
    numQuestion = array[numArray];
    time = 25;
    $('.answersAll').html("");
    $('#correctAnswer').html("");

}

// function to shows correct answer and image
function correct() {
    $('#timer').html("Time remaining " + time + " seconds");
    for (var i = 0; i < numQuestion.answer.length; i++) {
        $('#answer' + (i + 1)).html("");
        $('#answer' + (i + 1)).data("");
    }
    $('.answersAll').html("<img src =" + numQuestion.image + ">");


}


$(document).ready(function() {


    // for start the game push start
    $('#start').on("click", function() {
        $('#start').hide();
        reset();

    });


    // questions
    $('.answers').on("click", function() {

        var check = $(this).data('value');

        // next question if answer is correct
        if (correctAnswer === check) {
            correctCount++;
            clearInterval(gameTime);
            $('#question').html("Correct!");

            correct();

            if (array.length === 1) {
                setTimeout(function() {
                    newGame();
                }, 5000)
            } else {
                setTimeout(function() {
                    resetAll();
                    reset();
                }, 5000)
            }

        } else {
            // next question if answer is incorrect
            incorrectCount++;
            clearInterval(gameTime);
            $('#question').html("Nope!");
            $('#correctAnswer').html("Correct answer is " + correctAnswer);

            correct();

            if (array.length === 1) {
                setTimeout(function() {
                    newGame();
                }, 5000)
            } else {
                setTimeout(function() {
                    resetAll();
                    reset();
                }, 5000)
            }
        }
    });
    $('#startover').on("click", function() {
        $('#correct').html("");
        $('#incorrect').html("");
        $('#unanswered').html("");
        $('#startover').html("");
        correctCount = 0;
        incorrectCount = 0;
        unaswered = 0;

        reset();

    });


});