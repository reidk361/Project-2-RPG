const {
  fiveOne,
  fiveTwo,
  fiveThree,
  fiveFour,
  fiveFive,
  fiveSix,
  fiveSeven,
  fiveEight,
  fiveNine,
  fiveTen,
  fiveEleven,
  fiveTwelve,
  fiveThirteen,
  fiveFourteen,
  fiveFifteen,
  fiveSixteen,
  fiveSeventeen,
  fiveEighteen,
  fiveNineteen,
  fiveTwenty,
  fiveTwentyOne,
  fiveTwentyTwo,
} = require("./handleFivePerson");

let score = 100;

async function handleScore1() {
  let fiveOneAns = await fiveOne();
  console.info(fiveOneAns);
  if (fiveOneAns.one === "May") {
    score = score;
  } else if (fiveOneAns.one === "July") {
    score = score-2.5;
  } else if (fiveOneAns.one === "December") {
    score = score-5;
  }
  console.info(score);
}

async function handleScore2() {
  let fiveTwoAns = await fiveTwo();
  if (fiveTwoAns.two === "Food") {
    score = score - 5;
  } else if (fiveTwoAns.two === "Water") {
    score = score - 2.5;
  } else if (fiveTwoAns.two === "Warmth") {
    score = score;
  }
  console.info(score);
}

async function handleScore3() {
  let fiveThreeAns = await fiveThree();
  if (fiveThreeAns.three === "Big ones") {
    score = score - 5;
  } else if (fiveThreeAns.three === "Bright ones") {
    score = score;
  } else if (fiveThreeAns.three === "Ugly ones") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore4() {
  let fiveFourAns = await fiveFour();
  if (fiveFourAns.four === "Cross at the first point I come to") {
    score = score - 5;
  } else if (
    fiveFourAns.four ===
    "Walk down the river to see if it moves slower at another point"
  ) {
    score = score - 2.5;
  } else if (
    fiveFourAns.four ===
    "Climb to a high point to look at the the depth of the water"
  ) {
    score = score;
  }
  console.info(score);
}

async function handleScore5() {
  let fiveFiveAns = await fiveFive();
  if (fiveFiveAns.five === "Yell at them") {
    score = score - 5;
  } else if (fiveFiveAns.five === "Make fun of them") {
    score = score - 2.5;
  } else if (
    fiveFiveAns.five === "Lie to them that everything is going to be alright"
  ) {
    score = score;
  }
  console.info(score);
}

async function handleScore6() {
  let fiveSixAns = await fiveSix();
  if (fiveSixAns.six === "Golden Currants") {
    score = score - 5;
  } else if (fiveSixAns.six === "Elderberries") {
    score = score;
  } else if (fiveSixAns.six === "Raspberries") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore7() {
  let fiveSevenAns = await fiveSeven();
  if (
    fiveSevenAns.seven ===
    "By the time between flashes of lightning and claps of thunder"
  ) {
    score = score;
  } else if (fiveSevenAns.seven === "By the loudness of the thunder") {
    score = score - 5;
  } else if (fiveSevenAns.seven === "By the length of the lightning bolt") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore8() {
  let fiveEightAns = await fiveEight();
  if (fiveEightAns.eight === "Boil the water before drinking it") {
    score = score;
  } else if (fiveEightAns.eight === "Filter the water through a sock") {
    score = score - 5;
  } else if (
    fiveEightAns.eight === "Have someone else drink it first to see if they get sick"
  ) {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore9() {
  let fiveNineAns = await fiveNine();
  if (fiveNineAns.nine === "Dead animals") {
    score = score - 5;
  } else if (fiveNineAns.nine === "Water") {
    score = score;
  } else if (fiveNineAns.nine === "Fertile soil") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore10() {
  let fiveTenAns = await fiveTen();
  if (fiveTenAns.ten === "Dry mouth") {
    score = score - 2.5;
  } else if (fiveTenAns.ten === "Rapid Heartbeat") {
    score = score - 5;
  } else if (fiveTenAns.ten === "Vomiting and diarrhea") {
    score = score;
  }
  console.info(score);
}

async function handleScore11() {
  let fiveElevenAns = await fiveEleven();
  if (fiveElevenAns.eleven === "Tail") {
    score = score - 2.5;
  } else if (fiveElevenAns.eleven === "Eyes") {
    score = score;
  } else if (fiveElevenAns.eleven === "Tongue") {
    score = score - 5;
  }
  console.info(score);
}

async function handleScore12() {
  let fiveTwelveAns = await fiveTwelve();
  if (fiveTwelveAns.twelve === "Ant") {
    score = score - 5;
  } else if (fiveTwelveAns.twelve === "Grasshopper") {
    score = score - 2.5;
  } else if (fiveTwelveAns.twelve === "Beetle") {
    score = score;
  }
  console.info(score);
}

async function handleScore13() {
  let fiveThirteenAns = await fiveThirteen();
  if (fiveThirteenAns.thirteen === "North") {
    score = score - 5;
  } else if (fiveThirteenAns.thirteen === "East") {
    score = score - 2.5;
  } else if (fiveThirteenAns.thirteen === "South") {
    score = score;
  }
  console.info(score);
}

async function handleScore14() {
  let fiveFourteenAns = await fiveFourteen();
  if (fiveFourteenAns.fourteen === "When the moon is full") {
    score = score - 5;
  } else if (fiveFourteenAns.fourteen === "When the moon rises after midnight") {
    score = score - 2.5;
  } else if (fiveFourteenAns.fourteen === "When the moon rises before sunset.") {
    score = score;
  }
  console.info(score);
}

async function handleScore15() {
  let fiveFifteenAns = await fiveFifteen();
  if (fiveFifteenAns.fifteen === "Moss") {
    score = score;
  } else if (fiveFifteenAns.fifteen === "Wind speed") {
    score = score - 2.5;
  } else if (fiveFifteenAns.fifteen === "Your instinct") {
    score = score - 5;
  }
  console.info(score);
}

async function handleScore16() {
  let fiveSixteenAns = await fiveSixteen();
  if (fiveSixteenAns.sixteen === "Bare hands") {
    score = score - 5;
  } else if (fiveSixteenAns.sixteen === "Spear fishing") {
    score = score;
  } else if (fiveSixteenAns.sixteen === "Traps and snares") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore17() {
  let fiveSeventeenAns = await fiveSeventeen();
  if (fiveSeventeenAns.seventeen === "Ice") {
    score = score;
  } else if (fiveSeventeenAns.seventeen === "Water") {
    score = score - 5;
  } else if (fiveSeventeenAns.seventeen === "Rocks") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore18() {
  let fiveEighteenAns = await fiveEighteen();
  if (fiveEighteenAns.eighteen === "Frostbite") {
    score = score - 2.5;
  } else if (fiveEighteenAns.eighteen === "Sun burn") {
    score = score - 5;
  } else if (fiveEighteenAns.eighteen === "Hypothermia") {
    score = score;
  }
  console.info(score);
}

async function handleScore19() {
  let fiveNineteenAns = await fiveNineteen();
  if (fiveNineteenAns.nineteen === "Fresh water") {
    score = score;
  } else if (fiveNineteenAns.nineteen === "Your tears") {
    score = score - 5;
  } else if (fiveNineteenAns.nineteen === "Coffee") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore20() {
  let fiveTwentyAns = await fiveTwenty();
  if (fiveTwentyAns.twenty === "Bursts of three quick puffs") {
    score = score;
  } else if (fiveTwentyAns.twenty === "Long puff, short puff, long puff") {
    score = score - 5;
  } else if (fiveTwentyAns.twenty === "Three long puffs") {
    score = score - 2.5;
  }
  console.info(score);
}

async function handleScore21() {
  let fiveTwentyOneAns = await fiveTwentyOne();
  if (fiveTwentyOneAns.twentyOne === "Three days") {
    score = score - 5;
  } else if (fiveTwentyOneAns.twentyOne === "Three weeks") {
    score = score - 2.5;
  } else if (fiveTwentyOneAns.twentyOne === "One week") {
    score = score;
  }
  console.info(score);
}

async function handleScore22() {
  let fiveTwentyTwoAns = await fiveTwentyTwo();
  if (fiveTwentyTwoAns.twentyTwo === "Three days") {
    score = score;
  } else if (fiveTwentyTwoAns.twentyTwo === "Eight days") {
    score = score - 2.5;
  } else if (fiveTwentyTwoAns.twentyTwo === "Fourteen days") {
    score = score - 5;
  }
  console.info(score);
}

module.exports = {
    handleScore1,
    handleScore2,
    handleScore3,
    handleScore4,
    handleScore5,
    handleScore6,
    handleScore7, 
    handleScore8,
    handleScore9,
    handleScore10,
    handleScore11,
    handleScore12,
    handleScore13,
    handleScore14,
    handleScore15,
    handleScore16,
    handleScore17,
    handleScore18,
    handleScore19,
    handleScore20,
    handleScore21,
    handleScore22
}