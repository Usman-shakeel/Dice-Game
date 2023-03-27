var dices = [
  "&#9856;",
  "&#9857;",
  "&#x2682;",
  "&#x2683;",
  "&#9860;",
  "&#9861;",
];
var attempts = 0;


function rollDice(number) {
  attempts++;
  var randomIndex = Math.floor(Math.random() * dices.length);
  var newDice = dices[randomIndex];
//   console.log(newDice);
  document.querySelector("#dice").innerHTML = newDice;

  var playerNumber = number;
  console.log(playerNumber);



  document.getElementById("attempts").innerHTML = attempts;
  console.log("attempts:" + attempts);
  if (attempts === 10) {
    document.querySelector(".result span").innerHTML = "Player " + playerNumber + " Loss!";
    console.log("You Loss!");
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

  if (playerNumber === diceValue) {
    console.log("You Won!");
    var winPercentage = attempts;
    document.querySelector(".percentage span").innerHTML = (attempts/10*100 + "%");
    attempts = 0;
    document.querySelector(".result span").innerHTML = "Player " + playerNumber + " Won!";
  }
  else {
    document.querySelector(".result span").innerHTML = "Yet to decide!";
  }

  
}