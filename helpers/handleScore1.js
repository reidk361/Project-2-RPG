const {
    oneOne,
    oneTwo,
    oneThree,
    oneFour,
    oneFive,
    oneSix,
  } = require("./handleOnePerson");

  

  
  function handleDeath(score) {
    if (score<81&&score>60){
  
    }
  
  }
  
  async function handleScore1() {
    let oneOneAns = await oneOne();
    if (oneOneAns === "Pat your self on the back") {
      score = score - 5;
    } else if (oneOneAns === "Do random acts of kindness for your self") {
      score = score - 2.5;
    } else if (oneOneAns === "Remind your self that Oregon is worth dying for") {
      score = score ;
    }
  }
  
  async function handleScore2() {
    let oneTwoAns = await oneTwo();
    if (oneTwoAns === "You see a Welcome to Oregon sign") {
      score = score 
    } else if (oneTwoAns === "You see someone in skinny jeans acting pretentious") {
      score = score - 2.5;
    } else if (oneTwoAns === "You can feel it in your bones") {
      score = score - 5;
    }
  }
  
  async function handleScore3() {
    let oneThreeAns = await oneThree();
    if (oneThreeAns === "A walking stick") {
      score = score ;
    } else if (oneThreeAns === "Stopping to smell the roses") {
      score = score - 2.5;
    } else if (oneThreeAns === "A spring in your step'") {
      score = score - 5;
    }
  }
  
  async function handleScore4() {
    let oneFourAns = await oneFour();
    if (oneFourAns === "Face up stream") {
      score = score ;
    } else if (oneFourAns === "Swim under the water") {
      score = score - 2.5;
    } else if (oneFourAns === "Go fast") {
      score = score - 5;
    }
  }
  
  async function handleScore5() {
    let oneFiveAns = await oneFive();
    if (oneFiveAns === "Push through") {
      score = score - 5;
    } else if (oneFiveAns === "Rest") {
      score = score ;
    } else if (oneFiveAns === "Hop") {
      score = score - 2.5;
    }
  }
  
  async function handleScore6() {
    let oneSixAns = await oneSix();
    if (oneSixAns === "Washington") {
      score = score - 2.5;
    } else if (oneSixAns === "California") {
      score = score - 5;
    } else if (oneSixAns === "Idaho") {
      score = score ;
    }
  }
  


  
  
  
  async function handleQuestion(){
    await handleScore1();
    await handleScore2();
    await handleScore3();
    await handleScore4();
    await handleScore5();
    await handleScore6();
   
    
  }
  
  handleQuestion();
  
  module.exports = {
      handleScore1,
      handleScore2,
      handleScore3,
      handleScore4,
      handleScore5,
      handleScore6,
    
      
      
  }