function guessingGame() {
  const rand = Math.round(Math.random() * 100 - 1 + 1) + 1;
  let guess;
  let feedback;
  const message = document.querySelector("#mess");

  //Refresh page to get new number
  document.querySelector("#game").addEventListener("submit", (e) => {
    e.preventDefault();
    guess = parseInt(document.getElementById("guess").value);

    //check if guess is between 1 and 100
    if (guess < 101 && guess > 0) {
      if (rand > guess) {
        feedback = "YOu guess too low";
        message.classList.remove("Winner");
        message.classList.add("error");
      } else if (rand < guess) {
        feedback = "You were too high";
        message.classList.remove("Winner");
        message.classList.add("error");
      } else {
        feedback = "You Won!!!!!";
        message.classList.add("Winner");
        message.classList.remove("error");
      }
    } else if (guess > 100 && guess < 1) {
      feedback = "Guess a nu,mber btween 1 and 100";
      message.classList.add("error");
      message.classList.remove("Winner");
    } else {
      feedback = "Enter a number";
      message.classList.remove("error");
      message.classList.remove("Winner");
    }

    document.querySelector("#mess").innerHTML = feedback;
  });
}
guessingGame();
