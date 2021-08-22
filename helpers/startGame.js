const {
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
} = require("./handleScore5");

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
    await handleScore15();
    await handleScore16();
    await handleScore17();
    await handleScore18();
    await handleScore19();
    await handleScore20();
    await handleScore21();
    await handleScore22();
}

handleQuestion();


if (score>=81){"./handleFivePerson" }
else if (score<=80 && score >= 61){"./handleFourPerson" }
else if (score<=60 && score >= 41){"./handleThreePerson" }
else if (score<=40 && score >=21){"./handleTwoPerson" }
else if (score<=20 && score >= 1){"./handleOnePerson"}
else {"./GameOver"}