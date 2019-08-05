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
    }
];

var time = 25;
var correctCount = 0;
var incorrectCount = 0;
var unaswered = 0;



var array = [];

for (var i = 0; i < allQuestion.length; i++) {
    array.push(allQuestion[i]);
}

var numArray = Math.floor(Math.random() * array.length);
var numQuestion = array[numArray];
var correctAnswer = numQuestion.answer[numQuestion.answCorrect];


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

var gameTime;

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
        console.log("time's up");

    }
}

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


function correct() {
    $('#timer').html("Time remaining " + time + " seconds");
    for (var i = 0; i < numQuestion.answer.length; i++) {
        $('#answer' + (i + 1)).html("");
        $('#answer' + (i + 1)).data("");
    }
    $('.answersAll').html("<img src =" + numQuestion.image + ">");


}


$(document).ready(function() {

    $('#start').on("click", function() {
        $('#start').hide();
        reset();

    });
    console.log(array);

    // console.log(time);



    $('.answers').on("click", function() {

        var check = $(this).data('value');

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