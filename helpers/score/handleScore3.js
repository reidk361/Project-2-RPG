const {
  threeOne,
  threeTwo,
  threeThree,
  threeFour,
  threeFive,
  threeSix,
  threeSeven,
  threeEight,
  threeNine,
  threeTen,
  threeEleven,
  threeTwelve,
  threeThirteen,
  threeFourteen,
} = require("../questions/handleThreePerson");

const { gameWin, gameLose } = require("../handleGameOver");

let score = 60;

async function handleScore1() {
  let threeOneAns = await threeOne();
  if (threeOneAns.one === "Sing a song") {
    score = score;
  } else if (threeOneAns.one === "Give the speech from Braveheart") {
    score = score - 2.5;
  } else if (threeOneAns.one === "Do nothing") {
    score = score - 5;
  }
}

async function handleScore2() {
  let threeTwoAns = await threeTwo();
  if (threeTwoAns.two === "Apply something cold to the burn") {
    score = score;
  } else if (threeTwoAns.two === "run around screaming") {
    score = score - 5;
  } else if (threeTwoAns.two === "stop, drop, and roll") {
    score = score - 2.5;
  }
}

async function handleScore3() {
  let threeThreeAns = await threeThree();
  if (threeThreeAns.three === "Put the boot on") {
    score = score - 5;
  } else if (threeThreeAns.three === "Throw the boot away'") {
    score = score - 2.5;
  } else if (threeThreeAns.three === 'Yell, "There is a snake in my boot!"') {
    score = score;
  }
}

async function handleScore4() {
  let threeFourAns = await threeFour();
  if (threeFourAns.four === "His lunchable") {
    score = score - 2.5;
  } else if (threeFourAns.four === "His whiskey") {
    score = score;
  } else if (threeFourAns.four === "A story for bedtime") {
    score = score - 5;
  }
}

async function handleScore5() {
  let threeFiveAns = await threeFive();
  if (threeFiveAns.five === "Kill or be killed") {
    score = score;
  } else if (threeFiveAns.five === "Wait to see if he gets better") {
    score = score - 5;
  } else if (threeFiveAns.five === "Run away") {
    score = score - 2.5;
  }
}

async function handleScore6() {
  let threeSixAns = await threeSix();
  if (threeSixAns.six === "Stop right away and rest") {
    score = score - 2.5;
  } else if (threeSixAns.six === "Keep going, you can rest when you are dead") {
    score = score - 5;
  } else if (threeSixAns.six === "Rest at the next safe spot") {
    score = score;
  }
}

async function handleScore7() {
  let threeSevenAns = await threeSeven();
  if (threeSevenAns.seven === "Fill your water jugs") {
    score = score;
  } else if (threeSevenAns.seven === "Brush your teeth") {
    score = score - 2.5;
  } else if (threeSevenAns.seven === "Wait till the next one to do anything") {
    score = score - 5;
  }
}

async function handleScore8() {
  let threeEightAns = await threeEight();
  if (threeEightAns.eight === "Ignore it") {
    score = score;
  } else if (threeEightAns.eight === "Keep it as a pet'") {
    score = score - 2.5;
  } else if (threeEightAns.eight === "Eat it") {
    score = score - 5;
  }
}

async function handleScore9() {
  let threeNineAns = await threeNine();
  if (threeNineAns.nine === "Ginger") {
    score = score;
  } else if (threeNineAns.nine === "Fennel") {
    score = score - 2.5;
  } else if (threeNineAns.nine === "Beet") {
    score = score - 5;
  }
}

async function handleScore10() {
  let threeTenAns = await threeTen();
  if (threeTenAns.ten === "Cedar") {
    score = score - 5;
  } else if (threeTenAns.ten === "Aspen") {
    score = score;
  } else if (threeTenAns.ten === "Oak") {
    score = score - 2.5;
  }
}

async function handleScore11() {
  let threeElevenAns = await threeEleven();
  if (threeElevenAns.eleven === "Your spit") {
    score = score - 5;
  } else if (threeElevenAns.eleven === "Honey") {
    score = score;
  } else if (threeElevenAns.eleven === "Dirt") {
    score = score - 2.5;
  }
}

async function handleScore12() {
  let threeTwelveAns = await threeTwelve();
  if (threeTwelveAns.twelve === "Pull it out by the tail") {
    score = score - 2.5;
  } else if (threeTwelveAns.twelve === "Pull it out by the head") {
    score = score;
  } else if (threeTwelveAns.twelve === "Let it fall out on its own") {
    score = score - 5;
  }
}

async function handleScore13() {
  let threeThirteenAns = await threeThirteen();
  if (threeThirteenAns.thirteen === "Keep a log of food") {
    score = score - 2.5;
  } else if (threeThirteenAns.thirteen === "Make a ration chart") {
    score = score;
  } else if (threeThirteenAns.thirteen === "Just keep on keeping on") {
    score = score - 5;
  }
}

async function handleScore14() {
  let threeFourteenAns = await threeFourteen();
  if (threeFourteenAns.fourteen === "Can plumbs for later") {
    score = score;
  } else if (threeFourteenAns.fourteen === "Eat a bunch right now") {
    score = score - 2.5;
  } else if (threeFourteenAns.fourteen === "Ignore it") {
    score = score - 5;
  }
}

async function handleQuestion3() {
  while (score > 40) {
    await handleScore1();
    if (score <= 40) {
      break;
    }
    await handleScore2();
    if (score <= 40) {
      break;
    }
    await handleScore3();
    if (score <= 40) {
      break;
    }
    await handleScore4();
    if (score <= 40) {
      break;
    }
    await handleScore5();
    if (score <= 40) {
      break;
    }
    await handleScore6();
    if (score <= 40) {
      break;
    }
    await handleScore7();
    if (score <= 40) {
      break;
    }
    await handleScore8();
    if (score <= 40) {
      break;
    }
    await handleScore9();
    if (score <= 40) {
      break;
    }
    await handleScore10();
    if (score <= 40) {
      break;
    }
    await handleScore11();
    if (score <= 40) {
      break;
    }
    await handleScore12();
    if (score <= 40) {
      break;
    }
    await handleScore13();
    if (score <= 40) {
      break;
    }
    await handleScore14();
    if (score <= 40) {
      break;
    }
    if (score > 40) {
      gameWin();
      return "win";
    }
  }  
}

module.exports = {
  handleQuestion3
};
