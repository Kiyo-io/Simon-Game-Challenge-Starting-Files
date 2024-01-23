//Step 2
var gamePattern = [];
//Successful
var buttonColours = ["red", "blue", "green", "yellow"];
//Successful
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
}

nextSequence();

var randomChosenColour;

switch (randomNumber) {
  case 0:
    randomChosenColour = buttonColours[0];
    break;

  case 1:
    randomChosenColour = buttonColours[1];
    break;

  case 2:
    randomChosenColour = buttonColours[2];
    break;

  case 3:
    randomChosenColour = buttonColours[3];
    break;

  default:
    console.error("Oops! Invalid Random Number!");
}

function addToGamePattern(randomChosenColour) {
  gamePattern.push(randomChosenColour);

  console.log(gamePattern);
}

//jQuery Step 3

function (randomChosenColour) {
  $("#red").delay(100).fadeOut().fadeIn("slow");
};

$("#blue").delay(100).fadeOut().fadeIn("slow");

$("#yellow").delay(100).fadeOut().fadeIn("slow");

$("#green").delay(100).fadeOut().fadeIn("slow");


// $("#red").click(
// var redAudio = new Audio("sounds/red.mp3");
// redAudio.play();
