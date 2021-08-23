const { handleQuestion5 } = require("./score/handleScore5");
const { handleQuestion4 } = require("./score/handleScore4");
const { handleQuestion3 } = require("./score/handleScore3");
const { handleQuestion2 } = require("./score/handleScore2");
const { handleQuestion1 } = require("./score/handleScore1");


async function startGame() {
    
    if (await handleQuestion5()==="win"){
        return;
    }
    if (await handleQuestion4()==="win"){
        return;
    }
    if (await handleQuestion3()==="win"){
        return;
    }
    if (await handleQuestion2()==="win"){
        return;
    }
    if (await handleQuestion1()==="win"){
        return;
    }
}

startGame();