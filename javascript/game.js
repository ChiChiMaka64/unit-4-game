var crystal1 ="images/pink-crystal.jpg";
var crystal2 ="images/blue-crystal.jpg";
var crystal3 ="images/purple-crystal.jpg";
var crystal4 ="images/gold-crystal.jpg";
var wins=0;
var losses=0;
var score=0;

var numberStart=19;
var numberEnd=120;
var number=[];
while (numberStart <= numberEnd -1){
    number.push(numberStart++);
}



var RandomNumber= getRandomInt(numberStart, numberEnd);
var crystal1Number = getRandomInt(1, 12);
var crystal2Number = getRandomInt(1, 12);
var crystal3Number = getRandomInt(1, 12);
var crystal4Number = getRandomInt(1, 12);

$("#crystal1").on("click", function() {
  console.log($(this));
  score=score+crystal1Number;
});

$("#crystal2").on("click", function() {
    console.log($(this));
    score=score+crystal2Number;
  });
 
  $("#crystal3").on("click", function() {
    console.log($(this));
    score=score+crystal3Number;
  });

  $("#crystal4").on("click", function() {
    console.log($(this));
    score=score+crystal4Number;
  });


 /**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min )) + min;
}