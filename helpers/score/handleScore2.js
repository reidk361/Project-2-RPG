const {
  twoOne,
  twoTwo,
  twoThree,
  twoFour,
  twoFive,
  twoSix,
  twoSeven,
  twoEight,
  twoNine,
  twoTen,
} = require("../questions/handleTwoPerson");

const { gameWin, gameLose } = require("../handleGameOver");

let score = 40;

async function handleScore1() {
  let twoOneAns = await twoOne();
  if (twoOneAns.one === "You might scare the fish") {
    score = score - 5;
  } else if (twoOneAns.one === "The water might have sand and dirt in it") {
    score = score - 2.5;
  } else if (twoOneAns.one === "The water may contain bacteria") {
    score = score;
  }
  console.info(score);
}

async function handleScore2() {
  let twoTwoAns = await twoTwo();
  if (twoTwoAns.two === "Hepatitis B") {
    score = score - 2.5;
  } else if (twoTwoAns.two === "Lyme") {
    score = score;
  } else if (twoTwoAns.two === "Black plague") {
    score = score - 5;
  }
  console.info(score);
}

async function handleScore3() {
  let twoThreeAns = await twoThree();
  if (twoThreeAns.three === "One hour") {
    score = score - 2.5;
  } else if (twoThreeAns.three === "One minute") {
    score = score;
  } else if (twoThreeAns.three === "One day") {
    score = score - 5;
  }
  console.info(score);
}

async function handleScore4() {
  let twoFourAns = await twoFour();
  if (twoFourAns.four === "Your hands") {
    score = score - 5;
  } else if (twoFourAns.four === "Your boots") {
    score = score;
  } else if (twoFourAns.four === "Your pants") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore5() {
  let twoFiveAns = await twoFive();
  if (twoFiveAns.five === "Wash off the area") {
    score = score;
  } else if (twoFiveAns.five === "Scratch the area") {
    score = score - 5;
  } else if (twoFiveAns.five === "Ignore the rash") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore6() {
  let twoSixAns = await twoSix();
  if (twoSixAns.six === "24 minutes") {
    score = score - 2.5;
  } else if (twoSixAns.six === "24 hours") {
    score = score;
  } else if (twoSixAns.six === "24 days") {
    score = score - 5;
  }
  console.info(score);
}

async function handleScore7() {
  let twoSevenAns = await twoSeven();
  if (twoSevenAns.seven === "A horseshoe shaped rash") {
    score = score - 5;
  } else if (twoSevenAns.seven === "A bulls eye shaped rash") {
    score = score;
  } else if (twoSevenAns.seven === "A star shaped rash") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore8() {
  let twoEightAns = await twoEight();
  if (twoEightAns.eight === "Sleep with it under you pillow") {
    score = score - 5;
  } else if (twoEightAns.eight === "String it up between two trees") {
    score = score;
  } else if (twoEightAns.eight === "Burry it") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore9() {
  let twoNineAns = await twoNine();
  if (twoNineAns.nine === "Dirt") {
    score = score - 5;
  } else if (twoNineAns.nine === "Pine needles") {
    score = score;
  } else if (twoNineAns.nine === "Tree sap") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore10() {
  let twoTenAns = await twoTen();
  if (twoTenAns.ten === "Blow on them") {
    score = score - 5;
  } else if (
    twoTenAns.ten === "Heat stones in the fire and put the stones in you boots"
  ) {
    score = score;
  } else if (twoTenAns.ten === "Hang them up") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleQuestion2() {
  while (score > 20) {
    await handleScore1();
    if (score <= 20) {
      break;
    }
    await handleScore2();
    if (score <= 20) {
      break;
    }
    await handleScore3();
    if (score <= 20) {
      break;
    }
    await handleScore4();
    if (score <= 20) {
      break;
    }
    await handleScore5();
    if (score <= 20) {
      break;
    }
    await handleScore6();
    if (score <= 20) {
      break;
    }
    await handleScore7();
    if (score <= 20) {
      break;
    }
    await handleScore8();
    if (score <= 20) {
      break;
    }
    await handleScore9();
    if (score <= 20) {
      break;
    }
    await handleScore10();
    if (score <= 20) {
      break;
    }
    if (score > 20) {
      gameWin();
      return "win";
    }
  }  
}

module.exports = {
  handleQuestion2,
};
