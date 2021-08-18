//3 People Questions

const inquirer = require("inquirer");

function threeOne () {
    console.log("Question 3.01");
    inquirer.prompt([
        {
            name: 3.01,
            type: "list",
            message: "You only have three people left in your group and moral is low. How should you bost moral?",
            choices: ['Sing a song', 'Give the speech from Braveheart', 'Do nothing',]
        },
    ])
}
//point order -0, -2.5, -5 

function threeTwo () {
    console.log("Question 3.02");
    inquirer.prompt([
        {
            name: 3.02,
            type: "list",
            message: "You burned your hand building a fire. What should you do?",
            choices: ['Apply something cold to the burn', 'run around screaming', 'stop, drop, and roll',]
        },
    ])
}
//point order -0, -5, -2.5 

function threeThree () {
    console.log("Question 3.03");
    inquirer.prompt([
        {
            name: 3.03,
            type: "list",
            message: "There is a snake in your boot. What should you do?",
            choices: ['Put the boot on', 'Throw the boot away', 'Yell, "There is a snake in my boot!"',]
        },
    ])
}
//point order -5, -2.5, -0 

function threeFour () {
    console.log("Question 3.04");
    inquirer.prompt([
        {
            name: 3.04,
            type: "list",
            message: "You meet a traveler on the road who wants to trade for some of your food. What should ask from him? ",
            choices: ['His lunchable', 'His whiskey', 'A story for bedtime',]
        },
    ])
}
//point order -2.5, -0, -2.5 

function threeFive () {
    console.log("Question 3.05");
    inquirer.prompt([
        {
            name: 3.05,
            type: "list",
            message: "The traveler is starting to act funny. You realize he is turning into a zombie. What should you do?",
            choices: ['Kill or be killed', 'Wait to see if he gets better', 'Run away',]
        },
    ])
}
//point order -0, -5, -2.5 

function threeSix () {
    console.log("Question 3.06");
    inquirer.prompt([
        {
            name: 3.06,
            type: "list",
            message: "You are very tired from traveling. What should you do?",
            choices: ['Stop right away and rest', 'Keep going, you can rest when you are dead', 'Rest at the next safe spot',]
        },
    ])
}
//point order -2.5, -5, -0 

function threeSeven () {
    console.log("Question 3.07");
    inquirer.prompt([
        {
            name: 3.07,
            type: "list",
            message: "You come to a fesh spring. What should you do?",
            choices: ['Fill your water jugs', 'Brush your teeth', 'Wait till the next one to do anything',]
        },
    ])
}
//point order -0, -2.5, -5 

function threeEight () {
    console.log("Question 3.08");
    inquirer.prompt([
        {
            name: 3.08,
            type: "list",
            message: "You find a stray dog. What should you do?",
            choices: ['Ignore it', 'Keep it as a pet', 'Eat it',]
        },
    ])
}
//point order -0, -2.5, -5 

function threeNine () {
    console.log("Question 3.09");
    inquirer.prompt([
        {
            name: 3.09,
            type: "list",
            message: "You have an upset stomach. Which of these roots will help settle stomach?",
            choices: ['Ginger', 'Fennel', 'Beet',]
        },
    ])
}
//point order -0, -2.5, -5 

function threeTen () {
    console.log("Question 3.10");
    inquirer.prompt([
        {
            name: 3.10,
            type: "list",
            message: "The sun is starting to burn you. What tree exudes a white powder that can be used as sunscreen?",
            choices: ['Cedar', 'Aspen', 'Oak',]
        },
    ])
}
//point order -5, -0, -2.5 

function threeEleven () {
    console.log("Question 3.11");
    inquirer.prompt([
        {
            name: 3.11,
            type: "list",
            message: "You got stung by a bee. What is a natural way to help the bee sting?",
            choices: ['Your spit', 'Honey', 'Dirt',]
        },
    ])
}
//point order -5, -0, -2.5 

function threeTwelve () {
    console.log("Question 3.12");
    inquirer.prompt([
        {
            name: 3.12,
            type: "list",
            message: "You notice you have a tick in your arm. How should you remove it?",
            choices: ['Pull it out by the tail', 'Pull it out by the head', 'Let it fall out on its own',]
        },
    ])
}
//point order -2.5, -0, -5 

function threeThirteen () {
    console.log("Question 3.13");
    inquirer.prompt([
        {
            name: 3.13,
            type: "list",
            message: "You have not been paying attention to how much food people have been eating and now you are low. What should you do?",
            choices: ['Keep a log of food', 'Make a ration chart', 'Just keep on keeping on',]
        },
    ])
}
//point order -2.5, -0, -5 

function threeFourteen () {
    console.log("Question 3.14");
    inquirer.prompt([
        {
            name: 3.14,
            type: "list",
            message: "You are noticing a plumb tree. What should you do?",
            choices: ['Can plumbs for later', 'Eat a bunch right now', 'Ignore it',]
        },
    ])
}
//point order -0, -2.5, -5 

module.exports = {threeOne, threeTwo, threeThree, threeFour, threeFive, threeSix, threeSeven, threeEight, threeNine, threeTen, threeEleven, threeTwelve, threeThirteen, threeFourteen};