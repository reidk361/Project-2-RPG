//5 People Questions

const e = require("express");
const inquirer = require("inquirer");



function fiveOne () {
    console.log("Question 5.01");
    inquirer.prompt([
        {
            name: 5.01,
            type: "list",
            message: "What month do you leave Oregon?",
            choices: ['May', 'July', 'December',]
        },
    ])
}
//point order -0, -2.5, -5 
async function handleScore(){
    let score = 100;
    let fiveOneAns = await fiveOne();
    if (fiveOneAns === 'May'){
        score = score;}
        else if (fiveOneAns === 'July'){
            score = score - 2.5;}
        else if (fiveOneAns === 'December'){
            score = score - 5;
        }

    }
console.log(handleScore);

function fiveTwo () {
    console.log("Question 5.02");
    inquirer.prompt([
        {
            name: 5.02,
            type: "list",
            message: "You are running out of daylight. What should you prioritize?",
            choices: ['Food', 'Water', 'Warmth',]
        },
    ])
}
//point order -5, -2.5, -0

async function handleScore(){
    let score = 100;
    let fiveTwoAns = await fiveTwo();
    if (fiveTwoAns === 'Food'){
        score = score - 5;}
        else if (fiveTwoAns === 'Water'){
            score = score - 2.5;}
        else if (fiveTwoAns === 'Warmth'){
            score = score;
        }

    }
console.log(handleScore);

function fiveThree () {
    console.log("Question 5.03");
    inquirer.prompt([
        {
            name: 5.03,
            type: "list",
            message: "You are out food and looking for insects to eat, which ones should you avoid?",
            choices: ['Big ones', 'Bright ones', 'Ugly ones',]
        },
    ])
}
//point order -5, -0, -2.5

async function handleScore(){
    let score = 100;
    let fiveThreeAns = await fiveThree();
    if (fiveThreeAns === 'Big ones'){
        score = score - 5;}
        else if (fiveThreeAns === 'Bright ones'){
            score = score;}
        else if (fiveThreeAns === 'Ugly ones'){
            score = score - 2.5;
        }

    }
console.log(handleScore);

function fiveFour () {
    console.log("Question 5.04");
    inquirer.prompt([
        {
            name: 5.04,
            type: "list",
            message: "You come to a river to cross. What should you do?",
            choices: ['Cross at the first point I come to', 'Walk down the river to see if it moves slower at another point', 'Climb to a high point to look at the the depth of the water',]
        },
    ])
}
//point order -5, -2.5, -0

async function handleScore(){
    let score = 100;
    let fiveFourAns = await fiveFour();
    if (fiveFourAns === 'Cross at the first point I come to'){
        score = score - 5;}
        else if (fiveFourAns === 'Walk down the river to see if it moves slower at another point'){
            score = score - 2.5;}
        else if (fiveFourAns === 'Climb to a high point to look at the the depth of the water'){
            score = score;
        }

    }
console.log(handleScore);

function fiveFive () {
    console.log("Question 5.05");
    inquirer.prompt([
        {
            name: 5.05,
            type: "list",
            message: "Your family is complaining. What should you do?",
            choices: ['Yell at them', 'Make fun of them', 'Lie to them that everything is going to be alright',]
        },
    ])
}
//point order -5, -2.5, -0

function fiveSix () {
async function handleScore(){
    let score = 100;
    let fiveFiveAns = await fiveFive();
    if (fiveFiveAns === 'Yell at them'){
        score = score - 5;}
        else if (fiveFiveAns === 'Make fun of them'){
            score = score - 2.5;}
        else if (fiveFiveAns === 'Lie to them that everything is going to be alright'){
            score = score;
        }

    }
}

console.log(handleScore);

function fiveSix () {
    console.log("Question 5.06");
    inquirer.prompt([
        {
            name: 5.06,
            type: "list",
            message: "You come to a bushel of berries. Which of these wild berries are safe when ripe and cooked, but can cause nausea when eaten off of the bush?",
            choices: ['Golden Currants', 'Elderberries', 'Raspberries',]
        },
    ])
}
//point order -5, -0, -2.5

async function handleScore(){
    let score = 100;
    let fiveSixAns = await fiveSix();
    if (fiveSixAns === 'Golden Currants'){
        score = score - 5;}
        else if (fiveSixAns === 'Elderberries'){
            score = score ;}
        else if (fiveSixAns === 'Raspberries'){
            score = score - 2.5;
        }

    }
console.log(handleScore);

function fiveSeven () {
    console.log("Question 5.07");
    inquirer.prompt([
        {
            name: 5.07,
            type: "list",
            message: "You hear a storm in the distance. How can you determine the distance of an oncoming storm?",
            choices: ['By the time between flashes of lightning and claps of thunder', 'By the loudness of the thunder', 'By the length of the lightning bolt',]
        },
    ])
}
//point order -0, -5, -2.5

async function handleScore(){
    let score = 100;
    let fiveSevenAns = await fiveSeven();
    if (fiveSevenAns === 'By the time between flashes of lightning and claps of thunder'){
        score = score;}
        else if (fiveSevenAns === 'By the loudness of the thunder'){
            score = score - 5;}
        else if (fiveSevenAns === 'By the length of the lightning bolt'){
            score = score - 2.5;
        }

    }
console.log(handleScore);

function fiveEight () {
    console.log("Question 5.08");
    inquirer.prompt([
        {
            name: 5.08,
            type: "list",
            message: "You come to a stream and need drinking water. What should you do?",
            choices: ['Boil the water before drinking it', 'Filter the water through a sock', 'Have someone else drink it first to see if they get sick',]
        },
    ])
}
//point order -0, -5, -2.5

async function handleScore(){
    let score = 100;
    let fiveEightAns = await fiveEight();
    if (fiveEightAns === 'Boil the water before drinking it'){
        score = score;}
        else if (fiveEightAns === 'Filter the water through a sock'){
            score = score - 5;}
        else if (fiveEightAns === 'Have someone else drink it first to see if they get sick'){
            score = score - 2.5;
        }

    }
console.log(handleScore);

function fiveNine () {
    console.log("Question 5.09");
    inquirer.prompt([
        {
            name: 5.09,
            type: "list",
            message: "You are running low on supplies and may need to forage. What do lush vegetation and swarming insects often indicate?",
            choices: ['Dead animals', 'Water', 'Fertile soil',]
        },
    ])
}
//point order -5, -0, -2.5

async function handleScore(){
    let score = 100;
    let fiveNineAns = await fiveNine();
    if (fiveNineAns === 'Dead animals'){
        score = score - 5;}
        else if (fiveNineAns === 'Water'){
            score = score;}
        else if (fiveNineAns === 'Fertile soil'){
            score = score - 2.5;
        }

    }
console.log(handleScore);

function fiveTen () {
    console.log("Question 5.10");
    inquirer.prompt([
        {
            name: 5.10,
            type: "list",
            message: "You are low on water because you spilled a jug of water. Which symptom determines if you are experiencing severe dehydration?",
            choices: ['Dry mouth', 'Rapid Heartbeat', 'Vomiting and diarrhea',]
        },
    ])
}
//point order -2.5, -5, -0

async function handleScore(){
    let score = 100;
    let fiveTenAns = await fiveTen();
    if (fiveTenAns === 'Dry mouth'){
        score = score - 2.5;}
        else if (fiveTenAns === 'Rapid Heartbeat'){
            score = score - 5;}
        else if (fiveTenAns === 'Vomiting and diarrhea'){
            score = score;
        }

    }
console.log(handleScore);

function fiveEleven () {
    console.log("Question 5.11");
    inquirer.prompt([
        {
            name: 5.11,
            type: "list",
            message: "One of your children found a snake and picked it up. What feature of the snake is used to determine if the snake is venomous?",
            choices: ['Tail', 'Eyes', 'Tongue',]
        },
    ])
}
//point order -2.5, -0, -5

async function handleScore(){
    let score = 100;
    let fiveElevenAns = await fiveEleven();
    if (fiveElevenAns === 'Tail'){
        score = score - 2.5;}
        else if (fiveElevenAns === 'Eyes'){
            score = score;}
        else if (fiveElevenAns === 'Tongue'){
            score = score - 5;
        }

    }
console.log(handleScore);

function fiveTwelve () {
    console.log("Question 5.12");
    inquirer.prompt([
        {
            name: 5.12,
            type: "list",
            message: "You are low on food. Which insect is the most popular edible insect in the world?",
            choices: ['Ant', 'Grasshopper', 'Beetle',]
        },
    ])
}
//point order -5, -2.5, -0

async function handleScore(){
    let score = 100;
    let fiveTwelveAns = await fiveTwelve();
    if (fiveTwelveAns === 'Ant'){
        score = score - 5;}
        else if (fiveTwelveAns === 'Grasshopper'){
            score = score - 2.5;}
        else if (fiveTwelveAns === 'Beetle'){
            score = score;
        }

    }
console.log(handleScore);

function fiveThirteen () {
    console.log("Question 5.13");
    inquirer.prompt([
        {
            name: 5.13,
            type: "list",
            message: "You are starting to get lost, you swear you have passed that rock before. If you're facing the sun at noon in the Northern Hemisphere, walking toward it will take you in what direction?",
            choices: ['North', 'East', 'South',]
        },
    ])
}
//point order -5, -2.5, -0

async function handleScore(){
    let score = 100;
    let fiveThirteenAns = await fiveThirteen();
    if (fiveThirteenAns === 'North'){
        score = score - 5;}
        else if (fiveThirteenAns === 'East'){
            score = score - 2.5;}
        else if (fiveThirteenAns === 'South'){
            score = score;
        }

    }
console.log(handleScore);

function fiveFourteen () {
    console.log("Question 5.14");
    inquirer.prompt([
        {
            name: 5.14,
            type: "list",
            message: "You still are not sure where you are going and your family is shaming you for it. How do you know when the bright side of the moon is in the west?",
            choices: ['When the moon is full', 'When the moon rises after midnight', 'When the moon rises before sunset.',]
        },
    ])
}
//point order -5, -2.5, -0

async function handleScore(){
    let score = 100;
    let fiveFourteenAns = await fiveFourteen();
    if (fiveFourteenAns === 'When the moon is full'){
        score = score - 5;}
        else if (fiveFourteenAns === 'When the moon rises after midnight'){
            score = score - 2.5;}
        else if (fiveFourteenAns === 'When the moon rises before sunset.'){
            score = score;
        }

    }
console.log(handleScore);

function fiveFifteen () {
    console.log("Question 5.15");
    inquirer.prompt([
        {
            name: 5.15,
            type: "list",
            message: "You tried letting your conscience be your guide, but you don’t really have one. What should you use to help you find true north?",
            choices: ['Moss', 'Wind speed', 'Your instinct',]
        },
    ])
}
//point order -0, -2.5, -5

async function handleScore(){
    let score = 100;
    let fiveFifteenAns = await fiveFifteen();
    if (fiveFifteenAns === 'Moss'){
        score = score ;}
        else if (fiveFifteenAns === 'Wind speed'){
            score = score - 2.5;}
        else if (fiveFifteenAns === 'Your instinct'){
            score = score - 5;
        }

    }
console.log(handleScore);

function fiveSixteen () {
    console.log("Question 5.16");
    inquirer.prompt([
        {
            name: 5.16,
            type: "list",
            message: "You could really go for some sushi right about now. What's the easiest way to catch fish in a survival situation?",
            choices: ['Bare hands', 'Spear fishing', 'Traps and snares',]
        },
    ])
}
//point order -5, -0, -2.5

async function handleScore(){
    let score = 100;
    let fiveSixteenAns = await fiveSixteen();
    if (fiveSixteenAns === 'Bare hands'){
        score = score - 5;}
        else if (fiveSixteenAns === 'Spear fishing'){
            score = score;}
        else if (fiveSixteenAns === 'Traps and snares'){
            score = score - 2.5;
        }

    }
console.log(handleScore);

function fiveSeventeen () {
    console.log("Question 5.17");
    inquirer.prompt([
        {
            name: 5.17,
            type: "list",
            message: "You need to make a fire to boil water for your French press. What unlikely object can you make fire from?",
            choices: ['Ice', 'Water', 'Rocks',]
        },
    ])
}
//point order -0, -5, -2.5

async function handleScore(){
    let score = 100;
    let fiveSeventeenAns = await fiveSeventeen();
    if (fiveSeventeenAns === 'Ice'){
        score = score;}
        else if (fiveSeventeenAns === 'Water'){
            score = score - 5;}
        else if (fiveSeventeenAns === 'Rocks'){
            score = score - 2.5;
        }

    }
console.log(handleScore);

function fiveEighteen () {
    console.log("Question 5.18");
    inquirer.prompt([
        {
            name: 5.18,
            type: "list",
            message: "Your shelter does not offer much shelter. Which of the following can kill you?",
            choices: ['Frostbite', 'Sun burn', 'Hypothermia',]
        },
    ])
}
//point order -2.5, -5, -0

async function handleScore(){
    let score = 100;
    let fiveEighteenAns = await fiveEighteen();
    if (fiveEighteenAns === 'Frostbite'){
        score = score - 2.5;}
        else if (fiveEighteenAns === 'Sun burn'){
            score = score - 5;}
        else if (fiveEighteenAns === 'Hypothermia'){
            score = score;
        }

    }
console.log(handleScore);

function fiveNineteen () {
    console.log("Question 5.19");
    inquirer.prompt([
        {
            name: 5.19,
            type: "list",
            message: "You are thirsty. What would you drink if you are dehydrated?",
            choices: ['Fresh water', 'Your tears', 'Coffee',]
        },
    ])
}
//point order -0, -5, -2.5

async function handleScore(){
    let score = 100;
    let fiveNineteenAns = await fiveNineteen();
    if (fiveNineteenAns === 'Fresh water'){
        score = score;}
        else if (fiveNineteenAns === 'Your tears'){
            score = score - 5;}
        else if (fiveNineteenAns === 'Coffee'){
            score = score - 2.5;
        }

    }
console.log(handleScore);

function fiveTwenty () {
    console.log("Question 5.20");
    inquirer.prompt([
        {
            name: 5.20,
            type: "list",
            message: "You are starting to realize this was a mistake. If you need to send an emergency smoke signal how should you signal?",
            choices: ['Bursts of three quick puffs', 'Long puff, short puff, long puff', 'Three long puffs',]
        },
    ])
}
//point order -0, -5, -2.5

async function handleScore(){
    let score = 100;
    let fiveTwentyAns = await fiveTwenty();
    if (fiveTwentyAns === 'Bursts of three quick puffs'){
        score = score;}
        else if (fiveTwentyAns === 'Long puff, short puff, long puff'){
            score = score - 5;}
        else if (fiveTwentyAns === 'Three long puffs'){
            score = score -2.5;
        }

    }
console.log(handleScore);

function fiveTwentyOne () {
    console.log("Question 5.21");
    inquirer.prompt([
        {
            name: 5.21,
            type: "list",
            message: "You realize you have plenty of water but not much food -- good time to get that body you have always wanted. How long can a healthy human go without food as long as they have water?",
            choices: ['Three days', 'Three weeks', 'One week',]
        },
    ])
}
//point order -5, -0, -2.5

async function handleScore(){
    let score = 100;
    let fiveTwentyOneAns = await fiveTwentyOne();
    if (fiveTwentyOneAns === 'Three days'){
        score = score - 5;}
        else if (fiveTwentyOneAns === 'Three weeks'){
            score = score - 2.5;}
        else if (fiveTwentyOneAns === 'One week'){
            score = score;
        }

    }
console.log(handleScore);

function fiveTwentyTwo () {
    console.log("Question 5.22");
    inquirer.prompt([
        {
            name: 5.22,
            type: "list",
            message: "Now you are low on water. How many days can the human body go without water?",
            choices: ['Three days', 'Eight days', 'Fourteen days',]
        },
    ])
}
//point order -0, -2.5, -5

async function handleScore(){
    let score = 100;
    let fiveTwentyTwoAns = await fiveTwentyTwo();
    if (fiveTwentyTwoAns === 'Three days'){
        score = score ;}
        else if (fiveTwentyTwoAns === 'Eight days'){
            score = score - 2.5;}
        else if (fiveTwentyTwoAns === 'Fourteen days'){
            score = score - 5;
        }
    }
console.log(handleScore);

module.exports = {fiveOne, fiveTwo, fiveThree, fiveFour, fiveFive, fiveSix, fiveSeven, fiveEight, fiveNine, fiveTen, fiveEleven, fiveTwelve, fiveThirteen, fiveFifteen, fiveSixteen, fiveSeventeen, fiveEighteen, fiveNineteen, fiveTwenty, fiveTwentyOne, fiveTwentyTwo}