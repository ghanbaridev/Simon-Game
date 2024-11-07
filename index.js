var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randonnumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randonnumber];
    gamePattern.push(randomChosenColour);
}

$("button #randomChosenColour").fadeout(100).fadeiin(100);