// list of questions
var allQuestion = [
    question1 = {
        quastionList: "The Largest Lake In The World",
        answer: ["Sevan (Armenia)", "Great Salt Lake (United States)", "Superior (United States)", "Victoria (Kenya)"],
        answCorrect: 2,
        image: "assets/images/lake.gif",
        information: "It is the largest amongst all of the North American Great Lakes, with a total surface area of 82,414 square kilometers. At its furthest extent, Lake ... is about 563 km long, 257 km wide, and attains a maximum depth of 406 m. Via the St. Mary’s River and the Soo Locks, water from Lake ... flows outward into Lake Huron."
    },
    question2 = {
        quastionList: "How Many Children Can One Have In China?",
        answer: ["As much as they can (want)", "No more than 2", "At least 3", "Just 1"],
        answCorrect: 1,
        image: "assets/images/kids.gif",
        information: "Few years ago they could have only one",
    },
    question3 = {
        quastionList: "The Tallest Building In The World",
        answer: ["Burj Khalifa (Dubai)", "Lotte World Tower (Seoul)", "Shanghai Tower (Shanghai)", "Wells Fargo Center (Salt Lake City)"],
        answCorrect: 0,
        image: "assets/images/building.gif",
        information: "Standard height: 828 meters (2717 feet), Floor count: 163, Year built: 2010",
    },
    question4 = {
        quastionList: "What Was the First Christian Nation?",
        answer: ["Jerusalem", "Greece", "Armenia", "Israel"],
        answCorrect: 2,
        image: "assets/images/khor.jpg",
        information: "In 2018 this country celebrated the 2800th anniversary of its capital"
    },
    question5 = {
        quastionList: "The Highest Mountain In The World",
        answer: ["Godwin-Austen (China)", "Everest (Nepal)", "Ararat (Armenia)", "Nanga Parbat (Pakistan)"],
        answCorrect: 1,
        image: "assets/images/everest.gif",
        information: "The peak of Mount ... is 8,850 meters (29,035 feet) above sea level. No other mountain on Earth has a higher altitude."
    },
    question6 = {
        quastionList: "The Biggest Nightclub In The World",
        answer: ["Pacha Ibiza (Spain)", "Green Valley (Brasil)", "Amnesia Ibiza (Spain)", "Octagon (South Korea)"],
        answCorrect: 0,
        image: "assets/images/club.gif",
        information: "The capacity of 3000 people makes ... one of the largest clubs in the world."
    },
    question7 = {
        quastionList: "The Longest River In The World",
        answer: ["Mississippi-Missouri (USA)", "Amazon (Peru)", "Yangtze (China)", "Nile (Sudan)"],
        answCorrect: 3,
        image: "assets/images/river.gif",
        information: "An international river shared by 11 countries in Africa, the length is 6,693 km "
    },
    question8 = {
        quastionList: "The Longest Bridge In The world",
        answer: ["Bang Na Expressway (Thailand)", "Hangzhou Bay Bridge (China)", "Danyang–Kunshan Grand Bridge (Shanghai)", "Lake Pontchartrain Causeway (USA)"],
        answCorrect: 2,
        image: "assets/images/bridge.gif",
        information: "The bridge opened in June 2011, spans 102.4 miles (165 kilometers)."
    },
    question9 = {
        quastionList: "The Tallest Tree In The World",
        answer: ["The General Sherman (USA)", "Hyperion (USA)", "White Knight (Australia)", "Centurion (Australia)"],
        answCorrect: 1,
        image: "assets/images/tree.gif",
        information: "The tallest trees in the world are redwoods (Sequoia sempervirens), which tower above the ground in California. These trees can easily reach heights of 300 feet (91 meters)."
    },

    question10 = {
        quastionList: "The Fastest Animal In The World",
        answer: ["Frigate Bird", "Cheetah", "Peregrine Falcon", "White Throated Needletail"],
        answCorrect: 2,
        image: "assets/images/falcon.gif",
        information: "The fastest bird and in fact the fastest animal on the planet, when in its hunting dive, the stoop, in which it soars to a great height, then dives steeply at speeds of over 322 kph (200 mph)."
    },
    question11 = {
        quastionList: "The Smallest Country In The World",
        answer: ["Monaco", "Nauru", "San Marino", "Vatican"],
        answCorrect: 3,
        image: "assets/images/vatican.gif",
        information: "The world's smallest country also known as the Holy See. With only 0.44 square kilometers. It is also home to the biggest church in the world – St. Peter's Basilica, which holds some of the most significant artworks of the Renaissance such as The Pieta and the Creation of Adam."
    },
    question12 = {
        quastionList: "The Largest Aircraft In The World",
        answer: ["Airbus A300-600ST Beluga", "Antonov An-225 Mriya", "Boeing 747-8", "Airbus A380-800"],
        answCorrect: 1,
        image: "assets/images/plane.gif",
        information: "Empty weight: 285,000 kilograms, Length: 84 meters, Wingspan: 88.4 meters, First flight: 1988"
    }


];

var allTask = 100; // for proggres bar

var copmleteTask = 0; // for proggres bar

var hint1Bool = true;

var hint2Bool = true;

var time = 25; // time

var sec = 0; // check time

var correctCount = 0; // count correct answers

var incorrectCount = 0; // count incorrect answers

var unaswered = 0; // count unaswered answers

var arrayQuestion = []; // input questions in array

var gameTime; // for timer

for (var i = 0; i < allQuestion.length; i++) {
    arrayQuestion.push(allQuestion[i]);
}

var numArray = Math.floor(Math.random() * arrayQuestion.length); // choice question
var numQuestion = arrayQuestion[numArray]; // choice question
var correctAnswer = numQuestion.answer[numQuestion.answCorrect]; // correct answer

var numberHint;

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
        arrayQuestion.push(allQuestion[i]);
    }
    numArray = Math.floor(Math.random() * arrayQuestion.length);
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

    if (hint1Bool) {
        $('#hint1').show();
        $('#hint1').html("Hint1");
    }

    if (hint2Bool) {
        $('#hint2').show();
        $('#hint2').html("Hint2");
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
    sec = parseInt(time);
    if (sec <= 9) {
        $('#hint1').hide();
        $('#hint2').hide();
    }


    if (sec === 0) {
        unaswered++;
        clearInterval(gameTime);
        $('#question').html("Time's up!");
        $('#correctAnswer').html("Correct answer is " + correctAnswer);

        correct();
        time = 25;

        if (arrayQuestion.length === 1) {
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
    arrayQuestion = arrayQuestion.filter(function(item) { // no-repeat question
        return item !== numQuestion;
    });
    numArray = Math.floor(Math.random() * arrayQuestion.length);
    numQuestion = arrayQuestion[numArray];
    time = 25;
    $('.answersAll').html("");
    $('#correctAnswer').html("");
    $('#hint1').hide();
    $('#hint2').hide();

}


// functuon for proggres bar
function task() {
    copmleteTask += 5;
    var precent = (copmleteTask / allTask) * 100;
    if (precent > 100) {
        precent = 100;
    }

    $('.progress-label').text(copmleteTask.toFixed(0) + "%");
    $(function() {
        $("#progressbar").progressbar({
            value: precent
        });
    });
    if (precent >= 100) {
        copmleteTask = 0;
        $('#progressbar').hide();
    } else {
        setTimeout(task, 250);
    }
}

// function to shows correct answer and image
function correct() {
    $('#timer').html("Time remaining " + time + " seconds");
    for (var i = 0; i < numQuestion.answer.length; i++) {
        $('#answer' + (i + 1)).html("");
        $('#answer' + (i + 1)).data("");
    }
    $('.answersAll').html("<img src =" + numQuestion.image + ">");
    $('#hint1').html("");
    $('#hint2').html("");

    $('#progressbar').show();
    task();


}

$('#progressbar').hide();


$('#container').prepend('<div id="hint1">Hint1</div>');


$('#container').prepend('<div id="hint2">Hint2</div>');

$('#hint1').hide();
$('#hint2').hide();


$(document).ready(function() {


    // for start the game push start
    $('#start').on("click", function() {
        $('#start').hide();
        reset();


        $('#hint1').show();
        $('#hint2').show();


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

            if (arrayQuestion.length === 1) {
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

            if (arrayQuestion.length === 1) {
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
        $('#hint1').show();
        $('#hint2').show();
        correctCount = 0;
        incorrectCount = 0;
        unaswered = 0;
        hint1Bool = true;
        hint2Bool = true;
        reset();

    });

    $('#hint1').on("click", function() {
        for (var i = 0; i < numQuestion.answer.length; i++) {
            numberHint = Math.floor(Math.random() * 4);

            if (numQuestion.answCorrect !== numberHint) {
                $('#answer' + (i + 1)).html("");
                break;
            }
        }
        $('#hint1').hide();
        hint1Bool = false;
    });



    $('#hint2').on("click", function() {
        for (var i = 0; i < numQuestion.answer.length; i++) {
            $('#answer' + (i + 1)).hide();
        }
        $('.answersAll').html("<p>" + numQuestion.information + "</p>")
        $('#hint2').hide();
        hint2Bool = false;

        setTimeout(function() {
            $('.answersAll').html("");
            for (var i = 0; i < numQuestion.answer.length; i++) {
                $('#answer' + (i + 1)).show();
            }
        }, 5000)

    });


});