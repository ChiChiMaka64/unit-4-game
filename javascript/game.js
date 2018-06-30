var crystal1 = "images/pink-crystal.jpg";
var crystal2 = "images/blue-crystal.jpg";
var crystal3 = "images/purple-crystal.jpg";
var crystal4 = "images/gold-crystal.jpg";
var wins = 0;
var losses = 0;
var score = 0;

var numberStart = 19;
var numberEnd = 120;
var number = [];
//while (numberStart <= numberEnd - 1) {
// number.push(numberStart++);
//}



var RandomNumber
var crystal1Number 
var crystal2Number
var crystal3Number
var crystal4Number 

StartNewGame()

$("#crystal1").on("click", function () {
    console.log($(this));
    score = score + crystal1Number;
    $("#Total-Score").text(score)
    ProgressChecker()
});


$("#crystal2").on("click", function () {
    console.log($(this));
    score = score + crystal2Number;
    $("#Total-Score").text(score)
    ProgressChecker()
});

$("#crystal3").on("click", function () {
    console.log($(this));
    score = score + crystal3Number;
    $("#Total-Score").text(score);
    ProgressChecker();
});

$("#crystal4").on("click", function () {
    console.log($(this));
    score = score + crystal4Number;
    $("#Total-Score").text(score)
    ProgressChecker()
});

function ProgressChecker() {
    if (RandomNumber === score) {
        alert("You Won!");
        wins++;
        $("#Wins").text(wins);
        StartNewGame();
    }
    if (score > RandomNumber) {
        alert("You Lose. Try Again.")
        losses++;
        $("#Losses").text(losses);
        StartNewGame();
    }
}

function StartNewGame() {
    RandomNumber = getRandomInt(numberStart, numberEnd);
    $("#Random-Number").text(RandomNumber)
    crystal1Number = getRandomInt(1, 12);
    crystal2Number = getRandomInt(1, 12);
    crystal3Number = getRandomInt(1, 12);
    crystal4Number = getRandomInt(1, 12);
    score=0;
    $("#Total-Score").text(score)

}



/**
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}