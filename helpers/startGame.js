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

let score = 100;

async function handleQuestion(){
    await handleScore1;
    await handleScore2;
}

handleQuestion();