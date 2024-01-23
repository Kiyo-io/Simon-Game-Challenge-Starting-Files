// VARIABLES FOR FUNCTIONS
var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour;

// GAME UI
// Switch statement to set randomChosenColour and play corresponding sound for color
//Switch statement is inside of fucntion so that it can use the result from the randomNumber variable ie. the inital result of the fucntion otherwise the switch statement won't know what the randomNumber variable is valued as if the function is and so cannot continue the the code ie. act on the switch statement
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  console.log(randomNumber);

  switch (randomNumber) {
    case 0:
      randomChosenColour = buttonColours[0];
      var redBtn = new Audio("sounds/red.mp3");
      redBtn.play();
      break;

    case 1:
      randomChosenColour = buttonColours[1];
      var blueBtn = new Audio("sounds/blue.mp3");
      blueBtn.play();

      break;

    case 2:
      randomChosenColour = buttonColours[2];
      var greenBtn = new Audio("sounds/green.mp3");
      greenBtn.play();
      break;

    case 3:
      randomChosenColour = buttonColours[3];
      var yellowBtn = new Audio("sounds/yellow.mp3");
      yellowBtn.play();
      break;

    default:
      console.error("Oops! Invalid Random Number!");
  }
  console.log(randomChosenColour);
  // This code that I incorporated adds the result of the random Chosen Colour to the gamePattern array
  gamePattern.push(randomChosenColour);

  console.log(gamePattern);

  //jQuery Step 3 this selects the ids in the html and applies the result of the random color chosen triggering the relevant button in HTML
  $("#" + randomChosenColour)
    .delay(100)
    .fadeOut()
    .fadeIn("slow");
}

nextSequence();

// DETECTING USER CLICK
// Seperate Handler/Event Function that detects the user's click on each button
$(".btn").click(function (event) {
  var userChosenColour = event.target.id;

  console.log(userChosenColour);

  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);
});
// USER CLICK SOUND
// Handler/Event Function that detects users click and plays corresponding sound based on click. Key =target id

$(".btn").click(function (event) {
  switch (event.target.id) {
    case "red":
      var redBtn = new Audio("sounds/red.mp3");
      redBtn.play();

      break;

    case "green":
      var greenBtn = new Audio("sounds/green.mp3");
      greenBtn.play();
      break;

    case "yellow":
      var yellowBtn = new Audio("sounds/yellow.mp3");
      yellowBtn.play();

      break;

    case "blue":
      var blueBtn = new Audio("sounds/blue.mp3");
      blueBtn.play();

      break;

    default:
      var wrongBtn = new Audio("sounds/wrong.mp3");
      wrongBtn.play();

      break;
  }
});

//　ADDING ANIMATIONS
