var dice1 = document.querySelector("#dice1 img");
var dice2 = document.querySelector("#dice2 img");
var rollBtn = document.getElementById("roll-btn");
var result = document.getElementById("main-title");
var numbers = [];
var winner = 0;
rollBtn.addEventListener("click", function (e) {
  numbers[0] = Math.round(Math.random() * 5) + 1;
  numbers[1] = Math.round(Math.random() * 5) + 1;
  dice1.setAttribute("src", "/images/dice" + numbers[0] + ".png");
  dice2.setAttribute("src", "/images/dice" + numbers[1] + ".png");
  if (numbers[0] > numbers[1]) {
    winner = 1;
  } else if (numbers[0] < numbers[1]) {
    winner = 2;
  } else {
    winner = 3;
  }
  if (winner === 1) {
    result.innerText = "Player 1 Wins";
  } else if (winner === 2) {
    result.innerText = "Player 2 Wins";
  } else {
    result.innerText = "Draw";
  }
});
