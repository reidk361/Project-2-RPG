const {
  fourOne,
  fourTwo,
  fourThree,
  fourFour,
  fourFive,
  fourSix,
  fourSeven,
  fourEight,
  fourNine,
  fourTen,
  fourEleven,
  fourTwelve,
  fourThirteen,
  fourFourteen,
  fourFifteen,
  fourSixteen,
  fourSeventeen,
  fourEighteen,
} = require("../questions/handleFourPerson");

const { gameWin, gameLose } = require("../handleGameOver");

let score = 60;

async function handleScore1() {
  let fourOneAns = await fourOne();
  console.info(fourOneAns);
  if (fourOneAns.one === "Rocks") {
    score = score;
  } else if (fourOneAns.one === "Fire") {
    score = score - 2.5;
  } else if (fourOneAns.one === "Branches") {
    score = score - 5;
  }
  console.info(score);
}

async function handleScore2() {
  let fourTwoAns = await fourTwo();
  if (fourTwoAns.two === "Tree bark") {
    score = score - 5;
  } else if (fourTwoAns.two === "A vine") {
    score = score - 2.5;
  } else if (fourTwoAns.two === "Your extra rope you take with you everywhere") {
    score = score;
  }
  console.info(score);
}

async function handleScore3() {
  let fourThreeAns = await fourThree();
  if (fourThreeAns.three === "Wear tight clothes") {
    score = score - 5;
  } else if (fourThreeAns.three === "Drink sweet liquids") {
    score = score;
  } else if (fourThreeAns.three === "Run a few miles") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore4() {
  let fourFourAns = await fourFour();
  if (fourFourAns.four === "Diabetic foot") {
    score = score - 5;
  } else if (fourFourAns.four === "Athlete’s foot") {
    score = score - 2.5;
  } else if (fourFourAns.four === "Trench foot") {
    score = score;
  }
  console.info(score);
}

async function handleScore5() {
  let fourFiveAns = await fourFive();
  if (fourFiveAns.five === "Toothbrush") {
    score = score - 5;
  } else if (fourFiveAns.five === "Belt") {
    score = score - 2.5;
  } else if (fourFiveAns.five === "Mirror") {
    score = score;
  }
  console.info(score);
}

async function handleScore6() {
  let fourSixAns = await fourSix();
  if (fourSixAns.six === "Do whatever they tell you") {
    score = score - 5;
  } else if (fourSixAns.six === "Tell someone you are not well") {
    score = score;
  } else if (fourSixAns.six === "Ignore the voices") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore7() {
  let fourSevenAns = await fourSeven();
  if (fourSevenAns.seven ==="Under moss") {
    score = score;
  } else if (fourSevenAns.seven === "On top of rocks") {
    score = score - 5;
  } else if (fourSevenAns.seven === "Under leaves") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore8() {
  let fourEightAns = await fourEight();
  if (fourEightAns.eight === "Fight back") {
    score = score;
  } else if (fourEightAns.eight === "Scream") {
    score = score - 5;
  } else if (fourEightAns.eight ==="Play dead") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore9() {
  let fourNineAns = await fourNine();
  if (fourNineAns.nine === "2%") {
    score = score - 5;
  } else if (fourNineAns.nine === "40%") {
    score = score;
  } else if (fourNineAns.nine === "25%") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore10() {
  let fourTenAns = await fourTen();
  if (fourTenAns.ten === "Maybe so") {
    score = score - 2.5;
  } else if (fourTenAns.ten === "No") {
    score = score - 5;
  } else if (fourTenAns.ten === "Yes") {
    score = score;
  }
  console.info(score);
}

async function handleScore11() {
  let fourElevenAns = await fourEleven();
  if (fourElevenAns.eleven === "Give chase") {
    score = score - 2.5;
  } else if (fourElevenAns.eleven === "Watch and see where it goes") {
    score = score;
  } else if (fourElevenAns.eleven === "Start shooting as fast as you can at it") {
    score = score - 5;
  }
  console.info(score);
}

async function handleScore12() {
  let fourTwelveAns = await fourTwelve();
  if (fourTwelveAns.twelve === "Curl up in a ball and rock back and forth") {
    score = score - 5;
  } else if (fourTwelveAns.twelve === "Move quickly it any direction") {
    score = score - 2.5;
  } else if (fourTwelveAns.twelve === "Look around for something familiar") {
    score = score;
  }
  console.info(score);
}

async function handleScore13() {
  let fourThirteenAns = await fourThirteen();
  if (fourThirteenAns.thirteen === "Start shooting at the far away deer") {
    score = score - 5;
  } else if (fourThirteenAns.thirteen === "Keep hunting") {
    score = score - 2.5;
  } else if (fourThirteenAns.thirteen === "Return to your family and try again another day") {
    score = score;
  }
  console.info(score);
}

async function handleScore14() {
  let fourFourteenAns = await fourFourteen();
  if (fourFourteenAns.fourteen === "Tell your family you miss 100% of the shots you don’t take") {
    score = score - 5;
  } else if (fourFourteenAns.fourteen === "Tell a funny story") {
    score = score - 2.5;
  } else if (fourFourteenAns.fourteen === "Remind everyone that tomorrow is a new day") {
    score = score;
  }
  console.info(score);
}

async function handleScore15() {
  let fourFifteenAns = await fourFifteen();
  if (fourFifteenAns.fifteen === "Rest and create a plan") {
    score = score;
  } else if (fourFifteenAns.fifteen === "Tell them what doesn’t kill them will make them stronger") {
    score = score - 2.5;
  } else if (fourFifteenAns.fifteen === "Leave them behind") {
    score = score - 5;
  }
  console.info(score);
}

async function handleScore16() {
  let fourSixteenAns = await fourSixteen();
  if (fourSixteenAns.sixteen === "Get hammered drunk") {
    score = score - 5;
  } else if (fourSixteenAns.sixteen === "Find a hotel") {
    score = score;
  } else if (fourSixteenAns.sixteen === "Get a haircut") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore17() {
  let fourSeventeenAns = await fourSeventeen();
  if (fourSeventeenAns.seventeen === "Yes, it is the only place that I will be happy") {
    score = score;
  } else if (fourSeventeenAns.seventeen === "No, Washington sounds better") {
    score = score - 5;
  } else if (fourSeventeenAns.seventeen === "Undecided, lets see how I feel tomorrow") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore18() {
  let fourEighteenAns = await fourEighteen();
  if (fourEighteenAns.eighteen === "Meet for the duel and show the whole town you are not scared") {
    score = score - 2.5;
  } else if (fourEighteenAns.eighteen === "Insult more people’s mothers so you can have multiple duels") {
    score = score - 5;
  } else if (fourEighteenAns.eighteen === "Get your family and run for Oregon") {
    score = score;
  }
  console.info(score);
}

async function handleQuestion4() {
  while (score > 60) {
    await handleScore1();
    if (score <= 60) {
      break;
    }
    await handleScore2();
    if (score <= 60) {
      break;
    }
    await handleScore3();
    if (score <= 60) {
      break;
    }
    await handleScore4();
    if (score <= 60) {
      break;
    }
    await handleScore5();
    if (score <= 60) {
      break;
    }
    await handleScore6();
    if (score <= 60) {
      break;
    }
    await handleScore7();
    if (score <= 60) {
      break;
    }
    await handleScore8();
    if (score <= 60) {
      break;
    }
    await handleScore9();
    if (score <= 60) {
      break;
    }
    await handleScore10();
    if (score <= 60) {
      break;
    }
    await handleScore11();
    if (score <= 60) {
      break;
    }
    await handleScore12();
    if (score <= 60) {
      break;
    }
    await handleScore13();
    if (score <= 60) {
      break;
    }
    await handleScore14();
    if (score <= 60) {
      break;
    }
    await handleScore15();
    if (score <= 60) {
      break;
    }
    await handleScore16();
    if (score <= 60) {
      break;
    }
    await handleScore17();
    if (score <= 60) {
      break;
    }
    await handleScore18();
    if (score <= 60) {
      break;
    }
    if (score > 60) {
      gameWin();
      return "win";
    }
  }  
}

module.exports = {
  handleQuestion4
};
