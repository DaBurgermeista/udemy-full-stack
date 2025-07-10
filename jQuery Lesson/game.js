const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).on("keypress", function () {
  nextSequence();
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  animatePress(userChosenColor);
  playSound(userChosenColor);
  userClickedPattern.push(userChosenColor);
});

function nextSequence() {
  level++;
  $("#level-title").text(`Level ${level}`);

  var randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  gamePattern.push(buttonColors[randomNumber]);
  gamePattern.forEach((btn) => {
    buttonAnimation(btn);
  });
}

function buttonAnimation(key) {
  $(`#${key}`).fadeOut().fadeIn();
}

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(() => {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}

function playSound(key) {
  switch (key) {
    case "blue":
      var bs = new Audio("sounds/blue.mp3");
      bs.play();
      break;
    case "red":
      var rs = new Audio("sounds/red.mp3");
      rs.play();
      break;
    case "green":
      var gs = new Audio("sounds/green.mp3");
      gs.play();
      break;
    case "yellow":
      var ys = new Audio("sounds/yellow.mp3");
      ys.play();
      break;
    default:
      break;
  }
}
