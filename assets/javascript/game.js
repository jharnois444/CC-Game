$(document).ready(function(){

var totalScore=0;
var wins=0;
var losses=0;

//Generate random goal score.
var targetRand = Math.floor(Math.random() * 120) + 19;

//Append random goal score html to targetScore id
$("#targetScore").text(targetRand);

//Display total score.
$("#totalScore").text(totalScore);

//Assign each crystal a value between 1 and 12
var greenCrystal = Math.floor(Math.random() * 11) + 1;
var pinkCrystal = Math.floor(Math.random() * 11) + 1;
var turquoiseCrystal = Math.floor(Math.random() * 11) + 1;
var yellowCrystal = Math.floor(Math.random() * 11) + 1;


//Display wins and losses
$("#winsLosses").text(wins + " | " + losses);

//Reset the game
function reset() {
    var targetRand = Math.floor(Math.random() * 120) + 19;
    console.log(targetRand);
    $("#targetScore").text(targetRand);
    var greenCrystal = Math.floor(Math.random() * 11) + 1;
    var pinkCrystal = Math.floor(Math.random() * 11) + 1;
    var turquoiseCrystal = Math.floor(Math.random() * 11) + 1;
    var yellowCrystal = Math.floor(Math.random() * 11) + 1;
        totalScore = 0;
    // console.log(totalScore);
    $("#totalScore").text(totalScore);
}

//Add wins 
function win(){
    alert("You win!");
    wins++
    $("#winsLosses").text(wins + " | " + losses);
    reset();
}

//Add Losses
function lose(){
    alert("You lose");
    losses++
    $("#winsLosses").text(wins + " | " + losses);
    reset();
}

//Jewel click functionality
    $("#greenCrystal").on("click", function(e) {
        e.preventDefault();
  // Clicking the button triggers an alert message.
  totalScore = totalScore + greenCrystal;
      console.log("New totalScore = " + totalScore);
      $("#totalScore").text(totalScore);

      //Conditionals for win or lose
      if (totalScore === targetRand) {
          win();
      }
      else if (totalScore > targetRand) {
          lose();
      }
      
    });

    $("#pinkCrystal").on("click", function(e) {
        e.preventDefault();
  // Clicking the button triggers an alert message.
  totalScore = totalScore + pinkCrystal;
  console.log("New totalScore = " + totalScore);
  $("#totalScore").text(totalScore);

  //Conditionals for win or lose
  if (totalScore === targetRand) {
      win();
  }
  else if (totalScore > targetRand) {
      lose();
  }
  
});

    $("#turquoiseCrystal").on("click", function(e) {
        e.preventDefault();
  // Clicking the button triggers an alert message.
  totalScore = totalScore + turquoiseCrystal;
  console.log("New totalScore = " + totalScore);
  $("#totalScore").text(totalScore);

  //Conditionals for win or lose
  if (totalScore === targetRand) {
      win();
  }
  else if (totalScore > targetRand) {
      lose();
  }
  
});

    $("#yellowCrystal").on("click", function(e) {
        e.preventDefault();
  // Clicking the button triggers an alert message.
  totalScore = totalScore + yellowCrystal;
  console.log("New totalScore = " + totalScore);
  $("#totalScore").text(totalScore);

  //Conditionals for win or lose
  if (totalScore === targetRand) {
      win();
  }
  else if (totalScore > targetRand) {
      lose();
  }
  
});


});



