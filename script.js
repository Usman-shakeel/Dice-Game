var dices = [
  "&#9856;",
  "&#9857;",
  "&#x2682;",
  "&#x2683;",
  "&#9860;",
  "&#9861;",
];
var attempts = 0;


function rollDice() {
  attempts++;
  var randomIndex = Math.floor(Math.random() * dices.length);
  var newDice = dices[randomIndex];
//   console.log(newDice);
  document.querySelector(".dice-img").innerHTML = newDice;



  document.getElementById("attempts").innerHTML = attempts;
  console.log("attempts:" + attempts);
  if (attempts >= 10) {
    attempts = 0;
  }


  var diceValue;
  if (newDice === "&#9856;") {
    diceValue = 1;
  } else if (newDice === "&#9857;") {
    diceValue = 2;
  } else if (newDice === "&#x2682;") {
    diceValue = 3;
  } else if (newDice === "&#x2683;") {
    diceValue = 4;
  } else if (newDice === "&#9860;") {
    diceValue = 5;
  } else if (newDice === "&#9861;") {
    diceValue = 6;
  }
  console.log("Dice appared as" + ' ' + diceValue);
}

// function rollDice(playerNumber) {
//     console.log("Player " + playerNumber + " was clicked");
//     // Rest of the code for rolling the dice
//   }

//   var playerNumber = rollDice(number);
//   console.log(playerNumber);
  