const simonGame = (function (doc) {
  const power = false;
  const start = false;
  const strict = false;
  const gamePattern = [];
  const userInput = [];

  const audioElement1 = document.querySelector("#sound1");
  const audioElement2 = document.querySelector("#sound2");
  const audioElement3 = document.querySelector("#sound3");
  const audioElement4 = document.querySelector("#sound4");
  const button1 = document.querySelector("#btn-1");
  const button2 = document.querySelector("#btn-2");
  const button3 = document.querySelector("#btn-3");
  const button4 = document.querySelector("#btn-4");
  

  //SOUND GENERATOR FUNCTION
  function playSound(val) {
    let audioElement;
    switch (val) {
      case 1:
        audioElement = audioElement1;
        break;
      case 2:
        audioElement = audioElement2;
        break;
      case 3:
        audioElement = audioElement3;
        break;
      case 4:
        audioElement = audioElement4;
        break;
      default:
        alert("Something Went Wrong!");
    }
    audioElement.pause();
    audioElement.currentTime = 0.07;
    audioElement.play();
  }

  //generate random number between 0-3 and append to the gamePattern
  function nextLevel() {
    gamePattern.push(Math.floor(Math.random() * 4)+1);
  }

  //play gamePattern
  function playPattern() {
    gamePattern.forEach((element) => {
      playSound(element);
    });
  }

  //handle a function that can press a square for the computer and the user
  function press1(isUserInput = false) {
    console.log(`pressing 1`);
    if (isUserInput) {
        userInput.push(1)
    }
    playSound(1)
    button1.classList.add('pressedBlue')
  }
  function press2(isUserInput = false) {
    console.log(`pressing 2`);
    if (isUserInput) {
        userInput.push(2)
    }
    playSound(2)
    button1.classList.add('pressedRed')
  }
  function press3(isUserInput = false) {
    console.log(`pressing 3`);
    if (isUserInput) {
        userInput.push(3)
    }
    playSound(3)
    button1.classList.add('pressedGreen')
  }
  function press4(isUserInput = false) {
    console.log(`pressing 4`);
    if (isUserInput) {
        userInput.push(4)
    }
    playSound(4)
    button1.classList.add('pressedYellow')
  }

  //add user input to userInput array
  function addUserEntry(squareNum) {
    userInput.push(squareNum);
  }
  //compare gamePattern and userInput
  function checkAgainstGamePattern() {

  }
  //reset the gamePattern and user array
  function reset() {
    simonGame.start = false;
  }

  return {
    power,
    start,
    playPattern,
  };
})(document);

const power = document.querySelector("#on-off");
power.addEventListener("click", () => {
  simonGame.playSound(1);
  // simonGame.power = !simonGame.power
  // simonGame.start = false;
  // simonGame.gamePattern = []
});
