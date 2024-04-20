/*const calctempamplitudenew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];
    if (typeof curtemp !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudenew = calctempamplitudenew([3, 7, 23, 999], [3, 4, 65]);
console.log(amplitudenew);

const measurekelvin = function () {
  const measurement = {
    temp: "temp",
    unit: "CELSIUS",
    value: Number(prompt("degree celsius:")),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measurekelvin());*/

secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // when there is no output
  if (!guess) {
    displaymessage("no number!");
    //when player wins
  } else if (guess === secretNumber) {
    displaymessage("correct number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //when number is wrong number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "too high" : "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymessage("you are lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
  //when number is too high
  /*else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game!";
      document.querySelector(".score").textContent = 0;
    }
    // when number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }*/
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displaymessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
