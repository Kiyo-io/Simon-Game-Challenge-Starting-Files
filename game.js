//CURRENTLY ON STEP 8 IN PROJECT TO FINALIZE
//1.LOOP nextSequence to play after user correctly repeats gamepasttern asrray
//the users pattern is stored in user userClickedPattern so game pattern and userpattern must be compared and equal each other before game repeats the game pattern array via animations with an added level and added randomchosencolor

// VARIABLES FOR FUNCTIONS
var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour;

var level = 0;

var currentlevel = level;

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

  //jQuery Step 3 this selects the ids in the html and prompted with the result of the random color chosen triggers the relevant button in HTML to flash
  $("#" + randomChosenColour)
    .delay(100)
    .fadeOut()
    .fadeIn("slow");

  $("h1").text("Level " + level);
}

// START GAME FUNCTION
// detects the correct key press to start the Game UI function called nextSequence
$(document).keydown(function start(event) {
  if (event.key === "a") {
    nextSequence();
    level++;
  } else {
    alert(
      "Oops! Wrong Key 😣 Press A Key to Start Playing with the Simon Says AI!"
    );
    console.log(event.key);
  }
});

// DETECTING USER CLICK
// Seperate Handler/Event Function that detects the user's click on each button
$(".btn").click(function (event) {
  var userChosenColour = event.target.id;

  console.log(userChosenColour);

  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);
});

// USER CLICK Switch
// Handler/Event Function that detects users click and plays corresponding sound and an animation---sound based on click. Key =target id

$(".btn").click(function (event) {
  switch (event.target.id) {
    case "red":
      // SOUND ON USER CLICK
      var redBtn = new Audio("sounds/red.mp3");
      redBtn.play();
      //　ADDING ANIMATIONS FOR USER CLICKS
      $("#red").addClass("pressed");
      setTimeout(function () {
        $(".btn").removeClass("pressed");
      }, 100);
      // NEXT LEVEL AFTER USER CLICK
      checkAnswer();
      break;

    case "green":
      var greenBtn = new Audio("sounds/green.mp3");
      greenBtn.play();

      $("#green").addClass("pressed");

      setTimeout(function () {
        $(".btn").removeClass("pressed");
      }, 100);
      checkAnswer();
      break;

    case "yellow":
      var yellowBtn = new Audio("sounds/yellow.mp3");
      yellowBtn.play();

      $("#yellow").addClass("pressed");

      setTimeout(function () {
        $(".btn").removeClass("pressed");
      }, 100);
      checkAnswer();
      break;

    case "blue":
      var blueBtn = new Audio("sounds/blue.mp3");
      blueBtn.play();

      $("#blue").addClass("pressed");

      setTimeout(function () {
        $(".btn").removeClass("pressed");
      }, 100);
      checkAnswer();
      break;

    default:
      var wrongBtn = new Audio("sounds/wrong.mp3");
      wrongBtn.play();

      break;
  }
});

function checkAnswer(currentlevel) {
  if (userClickedPattern === gamePattern) {
    console.log("success");
  } else {
    console.log("wrong");
  }
}
