const {
  oneOne,
  oneTwo,
  oneThree,
  oneFour,
  oneFive,
  oneSix,
} = require("../questions/handleOnePerson");

const { gameWin, gameLose } = require("../handleGameOver");

let score = 20;

async function handleScore1() {
  let oneOneAns = await oneOne();
  if (oneOneAns.one === "Pat your self on the back") {
    score = score - 5;
  } else if (oneOneAns.one === "Do random acts of kindness for your self") {
    score = score - 2.5;
  } else if (oneOneAns.one === "Remind your self that Oregon is worth dying for") {
    score = score;
  }
  console.info(score);
}

async function handleScore2() {
  let oneTwoAns = await oneTwo();
  if (oneTwoAns.two === "You see a Welcome to Oregon sign") {
    score = score;
  } else if (
    oneTwoAns.two === "You see someone in skinny jeans acting pretentious"
  ) {
    score = score - 2.5;
  } else if (oneTwoAns.two === "You can feel it in your bones") {
    score = score - 5;
  }
  console.info(score);
}

async function handleScore3() {
  let oneThreeAns = await oneThree();
  if (oneThreeAns.three === "A walking stick") {
    score = score;
  } else if (oneThreeAns.three === "Stopping to smell the roses") {
    score = score - 2.5;
  } else if (oneThreeAns.three === "A spring in your step'") {
    score = score - 5;
  }
  console.info(score);
}

async function handleScore4() {
  let oneFourAns = await oneFour();
  if (oneFourAns.four === "Face up stream") {
    score = score;
  } else if (oneFourAns.four === "Swim under the water") {
    score = score - 2.5;
  } else if (oneFourAns.four === "Go fast") {
    score = score - 5;
  }
  console.info(score);
}

async function handleScore5() {
  let oneFiveAns = await oneFive();
  if (oneFiveAns.five === "Push through") {
    score = score - 5;
  } else if (oneFiveAns.five === "Rest") {
    score = score;
  } else if (oneFiveAns.five === "Hop") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore6() {
  let oneSixAns = await oneSix();
  if (oneSixAns.six === "Washington") {
    score = score - 2.5;
  } else if (oneSixAns.six === "California") {
    score = score - 5;
  } else if (oneSixAns.six === "Idaho") {
    score = score;
  }
  console.info(score);
}

async function handleQuestion1() {
  while (score > 0) {
  await handleScore1();
  if (score <= 0) {
    gameLose();
    break;
  }
  await handleScore2();
  if (score <= 0) {
    gameLose();
    break;
  }
  await handleScore3();
  if (score <= 0) {
    gameLose();
    break;
  }
  await handleScore4();
  if (score <= 0) {
    gameLose();
    break;
  }
  await handleScore5();
  if (score <= 0) {
    gameLose();
    break;
  }
  await handleScore6();
  if (score <= 0) {
    gameLose();
    break;
  }
  if (score > 0) {
    gameWin();
    break;
  }
  }
}

module.exports = {
  handleQuestion1,
};
