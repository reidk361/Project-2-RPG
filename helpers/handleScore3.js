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
  } = require("./handleThreePerson");

  
  function handleDeath(score) {
    if (score<81&&score>60){
  
    }
  
  }
  
  async function handleScore1() {
    let threeOneAns = await threeOne();
    if (threeOneAns === "Sing a song") {
      score = score;
    } else if (threeOneAns === "Give the speech from Braveheart") {
      score = score - 2.5;
    } else if (threeOneAns === "Do nothing") {
      score = score - 5;
    }
  }
  
  async function handleScore2() {
    let threeTwoAns = await threeTwo();
    if (threeTwoAns === "Apply something cold to the burn") {
      score = score;
    } else if (threeTwoAns === "run around screaming") {
      score = score - 5;
    } else if (threeTwoAns === "stop, drop, and roll") {
      score = score - 2.5;
    }
  }
  
  async function handleScore3() {
    let threeThreeAns = await threeThree();
    if (threeThreeAns === "Put the boot on") {
      score = score - 5;
    } else if (threeThreeAns === "Throw the boot away'") {
      score = score - 2.5;
    } else if (threeThreeAns === 'Yell, "There is a snake in my boot!"') {
      score = score ;
    }
  }
  
  async function handleScore4() {
    let threeFourAns = await threeFour();
    if (threeFourAns === "His lunchable") {
      score = score - 2.5;
    } else if (threeFourAns === "His whiskey") {
      score = score;
    } else if (threeFourAns === "A story for bedtime") {
      score = score - 5;
    }
  }
  
  async function handleScore5() {
    let threeFiveAns = await threeFive();
    if (threeFiveAns === "Kill or be killed") {
      score = score ;
    } else if (threeFiveAns === "Wait to see if he gets better") {
      score = score - 5;
    } else if (threeFiveAns === "Run away") {
      score = score - 2.5;
    }
  }
  
  async function handleScore6() {
    let threeSixAns = await threeSix();
    if (threeSixAns === "Stop right away and rest") {
      score = score - 2.5;
    } else if (threeSixAns === "Keep going, you can rest when you are dead") {
      score = score - 5;
    } else if (threeSixAns === "Rest at the next safe spot") {
      score = score ;
    }
  }
  
  async function handleScore7() {
    let threeSevenAns = await threeSeven();
    if (threeSevenAns === "Fill your water jugs") {
      score = score;
    } else if (threeSevenAns === "Brush your teeth") {
      score = score - 2.5;
    } else if (threeSevenAns === "Wait till the next one to do anything") {
      score = score - 5;
    }
  }
  
  async function handleScore8() {
    let threeEightAns = await threeEight();
    if (threeEightAns === "Ignore it") {
      score = score;
    } else if (threeEightAns === "Keep it as a pet'") {
      score = score - 2.5;
    } else if (threeEightAns === "Eat it") {
      score = score -5;
    }
  }
  
  async function handleScore9() {
    let threeNineAns = await threeNine();
    if (threeNineAns === "Ginger") {
      score = score;
    } else if (threeNineAns === "Fennel") {
      score = score - 2.5;
    } else if (threeNineAns === "Beet") {
      score = score - 5;
    }
  }
 
  async function handleScore10() {
    let threeTenAns = await threeTen();
    if (threeTenAns === "Cedar") {
      score = score - 5;
    } else if (threeTenAns === "Aspen") {
      score = score;
    } else if (threeTenAns === "Oak") {
      score = score - 2.5;
    }
  }
  
  async function handleScore11() {
    let threeElevenAns = await threeEleven();
    if (threeElevenAns === "Your spit") {
      score = score - 5;
    } else if (threeElevenAns === "Honey") {
      score = score ;
    } else if (threeElevenAns === "Dirt") {
      score = score - 2.5;
    }
  }
  
  async function handleScore12() {
    let threeTwelveAns = await threeTwelve();
    if (threeTwelveAns === "Pull it out by the tail") {
      score = score - 2.5;
    } else if (threeTwelveAns === "Pull it out by the head") {
      score = score ;
    } else if (threeTwelveAns === "Let it fall out on its own") {
      score = score - 5;
    }
  }
  
  async function handleScore13() {
    let threeThirteenAns = await threeThirteen();
    if (threeThirteenAns === "Keep a log of food") {
      score = score - 2.5;
    } else if (threeThirteenAns === "Make a ration chart") {
      score = score ;
    } else if (threeThirteenAns === "Just keep on keeping on") {
      score = score - 5;
    }
  }
  
  async function handleScore14() {
    let threeFourteenAns = await threeFourteen();
    if (threeFourteenAns === "Can plumbs for later") {
      score = score ;
    } else if (threeFourteenAns === "Eat a bunch right now") {
      score = score - 2.5;
    } else if (threeFourteenAns === "Ignore it") {
      score = score - 5;
    }
  }
  
  
  

  
  
  
  async function handleQuestion(){
    await handleScore1();
    await handleScore2();
    await handleScore3();
    await handleScore4();
    await handleScore5();
    await handleScore6();
    await handleScore7();
    await handleScore8();
    await handleScore9();
    await handleScore10();
    await handleScore11();
    await handleScore12();
    await handleScore13();
    await handleScore14();
    
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
      
      
  }