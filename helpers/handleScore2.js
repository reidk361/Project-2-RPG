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
  } = require("./handleTwoPerson");




  
  function handleDeath(score) {
    if (score<81&&score>60){
  
    }
  
  }
  
  async function handleScore1() {
    let twoOneAns = await twoOne();
    if (twoOneAns === "You might scare the fish") {
      score = score - 5;
    } else if (twoOneAns === "The water might have sand and dirt in it") {
      score = score - 2.5;
    } else if (twoOneAns === "The water may contain bacteria") {
      score = score ;
    }
  }
  
  async function handleScore2() {
    let twoTwoAns = await twoTwo();
    if (twoTwoAns === "Hepatitis B") {
      score = score -2.5;
    } else if (twoTwoAns === "Lyme") {
      score = score ;
    } else if (twoTwoAns === "Black plague") {
      score = score - 5;
    }
  }
  
  async function handleScore3() {
    let twoThreeAns = await twoThree();
    if (twoThreeAns === "One hour") {
      score = score -2.5;
    } else if (twoThreeAns === "One minute") {
      score = score ;
    } else if (twoThreeAns === "One day") {
      score = score - 5;
    }
  }
  
  async function handleScore4() {
    let twoFourAns = await twoFour();
    if (twoFourAns === "Your hands") {
      score = score - 5;
    } else if (twoFourAns === "Your boots") {
      score = score;
    } else if (twoFourAns === "Your pants") {
      score = score - 2.5;
    }
  }
  
  async function handleScore5() {
    let twoFiveAns = await twoFive();
    if (twoFiveAns === "Wash off the area") {
      score = score ;
    } else if (twoFiveAns === "Scratch the area") {
      score = score - 5;
    } else if (twoFiveAns === "Ignore the rash") {
      score = score - 2.5;
    }
  }
  
  async function handleScore6() {
    let twoSixAns = await twoSix();
    if (twoSixAns === "24 minutes") {
      score = score - 2.5;
    } else if (twoSixAns === "24 hours") {
      score = score ;
    } else if (twoSixAns === "24 days") {
      score = score - 5;
    }
  }
  
  async function handleScore7() {
    let twoSevenAns = await twoSeven();
    if (twoSevenAns === "A horseshoe shaped rash") {
      score = score - 5;
    } else if (twoSevenAns === "A bulls eye shaped rash") {
      score = score ;
    } else if (twoSevenAns === "A star shaped rash") {
      score = score - 2.5;
    }
  }
  
  async function handleScore8() {
    let twoEightAns = await twoEight();
    if (twoEightAns === "Sleep with it under you pillow") {
      score = score - 5;
    } else if (twoEightAns === "String it up between two trees") {
      score = score ;
    } else if (twoEightAns === "Burry it") {
      score = score - 2.5;
    }
  }
  
  async function handleScore9() {
    let twoNineAns = await twoNine();
    if (twoNineAns === "Dirt") {
      score = score - 5;
    } else if (twoNineAns === "Pine needles") {
      score = score ;
    } else if (twoNineAns === "Tree sap") {
      score = score - 2.5;
    }
  }
 
  async function handleScore10() {
    let twoTenAns = await twoTen();
    if (twoTenAns === "Blow on them") {
      score = score - 5;
    } else if (twoTenAns === "Heat stones in the fire and put the stones in you boots") {
      score = score ;
    } else if (twoTenAns === "Hang them up") {
      score = score - 2.5;
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
    
      
      
  }