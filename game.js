//Step 2
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour;

// Mapping button colors to audio files
var audioMap = {
  red: new Audio("sounds/red.mp3"),
  blue: "sounds/blue.mp3",
  green: "sound/green.mp3",
  yellow: "sound/yellow.mp3",
};

// Function to play audio for a specific button color
function playAudio(color) {
  var audio = new Audio(audioMap[color]);
  audio.play();
}
//Successful
// Switch statement to set randomChosenColour
//Switch statement is inside of fucntion so that it can use the result from the randomNumber variable ie. the inital result of the fucntion otherwise the switch statement won't know what the randomNumber variable is valued as if the function is and so cannot continue the the code ie. act on the switch statement
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  console.log(randomNumber);

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
  console.log(randomChosenColour);
  // This code that I incorporated adds the result of the random Chosen Colour to the gamePattern array
  gamePattern.push(randomChosenColour);

  console.log(gamePattern);

  // Play audio for the chosen color
  playAudio(randomChosenColour);

  //jQuery Step 3 this selects the ids in the html and applies the result of the random color chosen triggering the relevant button in HTML
  $("#" + randomChosenColour)
    .delay(100)
    .fadeOut()
    .fadeIn("slow");
}

nextSequence();
