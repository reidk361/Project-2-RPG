const { handleQuestion5 } = require("./score/handleScore5");
const { handleQuestion4 } = require("./score/handleScore4");
const { handleQuestion3 } = require("./score/handleScore3");
const { handleQuestion2 } = require("./score/handleScore2");
const { handleQuestion1 } = require("./score/handleScore1");

// async function startGame() {
//   while (score >= 81) {
//     await handleQuestion5();
//     if (score<80){
//         break;
//     }
//   }
//   while (score <= 80 && score >= 61) {
//     await handleQuestion4();
//     if (score<60) {
//         break;
//     }
//   }
//   while (score <= 60 && score >= 41) {
//     await handleQuestion3();
//   }
//   while (score <= 40 && score >= 21) {
//     await handleQuestion2();
//   }
//   while (score <= 20 && score >= 1) {
//     await handleQuestion1();
//   }
//   if (score === 0) {
//     console.info("Everyone died and you did not make it Oregon. \n GAME OVER");
//   }
// }

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