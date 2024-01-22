var buttonColours = ["red", "blue", "green", "yellow"];

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
