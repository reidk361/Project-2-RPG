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
  fiveFifteen,
  fiveSixteen,
  fiveSeventeen,
  fiveEighteen,
  fiveNineteen,
  fiveTwenty,
  fiveTwentyOne,
  fiveTwentyTwo,
} = require("./handleFivePerson");

function handleDeath(score) {
  if (score<81&&score>60){

  }

}

async function handleScore1() {
  let fiveOneAns = await fiveOne();
  if (fiveOneAns === "May") {
    score = score;
  } else if (fiveOneAns === "July") {
    score = score - 2.5;
  } else if (fiveOneAns === "December") {
    score = score - 5;
  }
}

async function handleScore2() {
  let fiveTwoAns = await fiveTwo();
  if (fiveTwoAns === "Food") {
    score = score - 5;
  } else if (fiveTwoAns === "Water") {
    score = score - 2.5;
  } else if (fiveTwoAns === "Warmth") {
    score = score;
  }
}

async function handleScore3() {
  let fiveThreeAns = await fiveThree();
  if (fiveThreeAns === "Big ones") {
    score = score - 5;
  } else if (fiveThreeAns === "Bright ones") {
    score = score;
  } else if (fiveThreeAns === "Ugly ones") {
    score = score - 2.5;
  }
}

async function handleScore4() {
  let fiveFourAns = await fiveFour();
  if (fiveFourAns === "Cross at the first point I come to") {
    score = score - 5;
  } else if (
    fiveFourAns ===
    "Walk down the river to see if it moves slower at another point"
  ) {
    score = score - 2.5;
  } else if (
    fiveFourAns ===
    "Climb to a high point to look at the the depth of the water"
  ) {
    score = score;
  }
}

async function handleScore5() {
  let fiveFiveAns = await fiveFive();
  if (fiveFiveAns === "Yell at them") {
    score = score - 5;
  } else if (fiveFiveAns === "Make fun of them") {
    score = score - 2.5;
  } else if (
    fiveFiveAns === "Lie to them that everything is going to be alright"
  ) {
    score = score;
  }
}

async function handleScore6() {
  let fiveSixAns = await fiveSix();
  if (fiveSixAns === "Golden Currants") {
    score = score - 5;
  } else if (fiveSixAns === "Elderberries") {
    score = score;
  } else if (fiveSixAns === "Raspberries") {
    score = score - 2.5;
  }
}

async function handleScore7() {
  let fiveSevenAns = await fiveSeven();
  if (
    fiveSevenAns ===
    "By the time between flashes of lightning and claps of thunder"
  ) {
    score = score;
  } else if (fiveSevenAns === "By the loudness of the thunder") {
    score = score - 5;
  } else if (fiveSevenAns === "By the length of the lightning bolt") {
    score = score - 2.5;
  }
}

async function handleScore8() {
  let fiveEightAns = await fiveEight();
  if (fiveEightAns === "Boil the water before drinking it") {
    score = score;
  } else if (fiveEightAns === "Filter the water through a sock") {
    score = score - 5;
  } else if (
    fiveEightAns === "Have someone else drink it first to see if they get sick"
  ) {
    score = score - 2.5;
  }
}

async function handleScore9() {
  let fiveNineAns = await fiveNine();
  if (fiveNineAns === "Dead animals") {
    score = score - 5;
  } else if (fiveNineAns === "Water") {
    score = score;
  } else if (fiveNineAns === "Fertile soil") {
    score = score - 2.5;
  }
}

async function handleScore10() {
  let fiveTenAns = await fiveTen();
  if (fiveTenAns === "Dry mouth") {
    score = score - 2.5;
  } else if (fiveTenAns === "Rapid Heartbeat") {
    score = score - 5;
  } else if (fiveTenAns === "Vomiting and diarrhea") {
    score = score;
  }
}

async function handleScore11() {
  let fiveElevenAns = await fiveEleven();
  if (fiveElevenAns === "Tail") {
    score = score - 2.5;
  } else if (fiveElevenAns === "Eyes") {
    score = score;
  } else if (fiveElevenAns === "Tongue") {
    score = score - 5;
  }
}

async function handleScore12() {
  let fiveTwelveAns = await fiveTwelve();
  if (fiveTwelveAns === "Ant") {
    score = score - 5;
  } else if (fiveTwelveAns === "Grasshopper") {
    score = score - 2.5;
  } else if (fiveTwelveAns === "Beetle") {
    score = score;
  }
}

async function handleScore13() {
  let fiveThirteenAns = await fiveThirteen();
  if (fiveThirteenAns === "North") {
    score = score - 5;
  } else if (fiveThirteenAns === "East") {
    score = score - 2.5;
  } else if (fiveThirteenAns === "South") {
    score = score;
  }
}

async function handleScore14() {
  let fiveFourteenAns = await fiveFourteen();
  if (fiveFourteenAns === "When the moon is full") {
    score = score - 5;
  } else if (fiveFourteenAns === "When the moon rises after midnight") {
    score = score - 2.5;
  } else if (fiveFourteenAns === "When the moon rises before sunset.") {
    score = score;
  }
}

async function handleScore15() {
  let fiveFifteenAns = await fiveFifteen();
  if (fiveFifteenAns === "Moss") {
    score = score;
  } else if (fiveFifteenAns === "Wind speed") {
    score = score - 2.5;
  } else if (fiveFifteenAns === "Your instinct") {
    score = score - 5;
  }
}

async function handleScore16() {
  let fiveSixteenAns = await fiveSixteen();
  if (fiveSixteenAns === "Bare hands") {
    score = score - 5;
  } else if (fiveSixteenAns === "Spear fishing") {
    score = score;
  } else if (fiveSixteenAns === "Traps and snares") {
    score = score - 2.5;
  }
}

async function handleScore17() {
  let fiveSeventeenAns = await fiveSeventeen();
  if (fiveSeventeenAns === "Ice") {
    score = score;
  } else if (fiveSeventeenAns === "Water") {
    score = score - 5;
  } else if (fiveSeventeenAns === "Rocks") {
    score = score - 2.5;
  }
}

async function handleScore18() {
  let fiveEighteenAns = await fiveEighteen();
  if (fiveEighteenAns === "Frostbite") {
    score = score - 2.5;
  } else if (fiveEighteenAns === "Sun burn") {
    score = score - 5;
  } else if (fiveEighteenAns === "Hypothermia") {
    score = score;
  }
}

async function handleScore19() {
  let fiveNineteenAns = await fiveNineteen();
  if (fiveNineteenAns === "Fresh water") {
    score = score;
  } else if (fiveNineteenAns === "Your tears") {
    score = score - 5;
  } else if (fiveNineteenAns === "Coffee") {
    score = score - 2.5;
  }
}

async function handleScore20() {
  let fiveTwentyAns = await fiveTwenty();
  if (fiveTwentyAns === "Bursts of three quick puffs") {
    score = score;
  } else if (fiveTwentyAns === "Long puff, short puff, long puff") {
    score = score - 5;
  } else if (fiveTwentyAns === "Three long puffs") {
    score = score - 2.5;
  }
}

async function handleScore21() {
  let fiveTwentyOneAns = await fiveTwentyOne();
  if (fiveTwentyOneAns === "Three days") {
    score = score - 5;
  } else if (fiveTwentyOneAns === "Three weeks") {
    score = score - 2.5;
  } else if (fiveTwentyOneAns === "One week") {
    score = score;
  }
}

async function handleScore22() {
  let fiveTwentyTwoAns = await fiveTwentyTwo();
  if (fiveTwentyTwoAns === "Three days") {
    score = score;
  } else if (fiveTwentyTwoAns === "Eight days") {
    score = score - 2.5;
  } else if (fiveTwentyTwoAns === "Fourteen days") {
    score = score - 5;
  }
}

async function handleQuestion(){
  await handleScore1();
  await handleScore2();
}

handleQuestion();

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