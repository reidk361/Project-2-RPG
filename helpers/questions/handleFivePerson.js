//5 People Questions

const inquirer = require("inquirer");



function fiveOne () {
    console.log("Question 5.01");
    return inquirer.prompt([
        {
            name: "one",
            type: "list",
            message: "What month do you leave Oregon?",
            choices: ['May', 'July', 'December',]
        },
    ])
}
//point order -0, -2.5, -5 


function fiveTwo () {
    console.log("Question 5.02");
    return inquirer.prompt([
        {
            name: "two",
            type: "list",
            message: "You are running out of daylight. What should you prioritize?",
            choices: ['Food', 'Water', 'Warmth',]
        },
    ])
}
//point order -5, -2.5, -0

function fiveThree () {
    console.log("Question 5.03");
    return inquirer.prompt([
        {
            name: "three",
            type: "list",
            message: "You are out food and looking for insects to eat, which ones should you avoid?",
            choices: ['Big ones', 'Bright ones', 'Ugly ones',]
        },
    ])
}
//point order -5, -0, -2.5

function fiveFour () {
    console.log("Question 5.04");
    return inquirer.prompt([
        {
            name: "four",
            type: "list",
            message: "You come to a river to cross. What should you do?",
            choices: ['Cross at the first point I come to', 'Walk down the river to see if it moves slower at another point', 'Climb to a high point to look at the the depth of the water',]
        },
    ])
}
//point order -5, -2.5, -0

function fiveFive () {
    console.log("Question 5.05");
    return inquirer.prompt([
        {
            name: "five",
            type: "list",
            message: "Your family is complaining. What should you do?",
            choices: ['Yell at them', 'Make fun of them', 'Lie to them that everything is going to be alright',]
        },
    ])
}
//point order -5, -2.5, -0

function fiveSix () {
    console.log("Question 5.06");
    return inquirer.prompt([
        {
            name: "six",
            type: "list",
            message: "You come to a bushel of berries. Which of these wild berries are safe when ripe and cooked, but can cause nausea when eaten off of the bush?",
            choices: ['Golden Currants', 'Elderberries', 'Raspberries',]
        },
    ])
}
//point order -5, -0, -2.5

function fiveSeven () {
    console.log("Question 5.07");
    return inquirer.prompt([
        {
            name: "seven",
            type: "list",
            message: "You hear a storm in the distance. How can you determine the distance of an oncoming storm?",
            choices: ['By the time between flashes of lightning and claps of thunder', 'By the loudness of the thunder', 'By the length of the lightning bolt',]
        },
    ])
}
//point order -0, -5, -2.5

function fiveEight () {
    console.log("Question 5.08");
    return inquirer.prompt([
        {
            name: "eight",
            type: "list",
            message: "You come to a stream and need drinking water. What should you do?",
            choices: ['Boil the water before drinking it', 'Filter the water through a sock', 'Have someone else drink it first to see if they get sick',]
        },
    ])
}
//point order -0, -5, -2.5

function fiveNine () {
    console.log("Question 5.09");
    return inquirer.prompt([
        {
            name: "nine",
            type: "list",
            message: "You are running low on supplies and may need to forage. What do lush vegetation and swarming insects often indicate?",
            choices: ['Dead animals', 'Water', 'Fertile soil',]
        },
    ])
}
//point order -5, -0, -2.5

function fiveTen () {
    console.log("Question 5.10");
    return inquirer.prompt([
        {
            name: "ten",
            type: "list",
            message: "You are low on water because you spilled a jug of water. Which symptom determines if you are experiencing severe dehydration?",
            choices: ['Dry mouth', 'Rapid Heartbeat', 'Vomiting and diarrhea',]
        },
    ])
}
//point order -2.5, -5, -0

function fiveEleven () {
    console.log("Question 5.11");
    return inquirer.prompt([
        {
            name: "eleven",
            type: "list",
            message: "One of your children found a snake and picked it up. What feature of the snake is used to determine if the snake is venomous?",
            choices: ['Tail', 'Eyes', 'Tongue',]
        },
    ])
}
//point order -2.5, -0, -5

function fiveTwelve () {
    console.log("Question 5.12");
    return inquirer.prompt([
        {
            name: "twelve",
            type: "list",
            message: "You are low on food. Which insect is the most popular edible insect in the world?",
            choices: ['Ant', 'Grasshopper', 'Beetle',]
        },
    ])
}
//point order -5, -2.5, -0

function fiveThirteen () {
    console.log("Question 5.13");
    return inquirer.prompt([
        {
            name: "thirteen",
            type: "list",
            message: "You are starting to get lost, you swear you have passed that rock before. If you're facing the sun at noon in the Northern Hemisphere, walking toward it will take you in what direction?",
            choices: ['North', 'East', 'South',]
        },
    ])
}
//point order -5, -2.5, -0

function fiveFourteen () {
    console.log("Question 5.14");
    return inquirer.prompt([
        {
            name: "fourteen",
            type: "list",
            message: "You still are not sure where you are going and your family is shaming you for it. How do you know when the bright side of the moon is in the west?",
            choices: ['When the moon is full', 'When the moon rises after midnight', 'When the moon rises before sunset.',]
        },
    ])
}
//point order -5, -2.5, -0

function fiveFifteen () {
    console.log("Question 5.15");
    return inquirer.prompt([
        {
            name: "fifteen",
            type: "list",
            message: "You tried letting your conscience be your guide, but you don???t really have one. What should you use to help you find true north?",
            choices: ['Moss', 'Wind speed', 'Your instinct',]
        },
    ])
}
//point order -0, -2.5, -5

function fiveSixteen () {
    console.log("Question 5.16");
    return inquirer.prompt([
        {
            name: "sixteen",
            type: "list",
            message: "You could really go for some sushi right about now. What's the easiest way to catch fish in a survival situation?",
            choices: ['Bare hands', 'Spear fishing', 'Traps and snares',]
        },
    ])
}
//point order -5, -0, -2.5

function fiveSeventeen () {
    console.log("Question 5.17");
    return inquirer.prompt([
        {
            name: "seventeen",
            type: "list",
            message: "You need to make a fire to boil water for your French press. What unlikely object can you make fire from?",
            choices: ['Ice', 'Water', 'Rocks',]
        },
    ])
}
//point order -0, -5, -2.5

function fiveEighteen () {
    console.log("Question 5.18");
    return inquirer.prompt([
        {
            name: "eighteen",
            type: "list",
            message: "Your shelter does not offer much shelter. Which of the following can kill you?",
            choices: ['Frostbite', 'Sun burn', 'Hypothermia',]
        },
    ])
}
//point order -2.5, -5, -0

function fiveNineteen () {
    console.log("Question 5.19");
    return inquirer.prompt([
        {
            name: "nineteen",
            type: "list",
            message: "You are thirsty. What would you drink if you are dehydrated?",
            choices: ['Fresh water', 'Your tears', 'Coffee',]
        },
    ])
}
//point order -0, -5, -2.5

function fiveTwenty () {
    console.log("Question 5.20");
    return inquirer.prompt([
        {
            name: "twenty",
            type: "list",
            message: "You are starting to realize this was a mistake. If you need to send an emergency smoke signal how should you signal?",
            choices: ['Bursts of three quick puffs', 'Long puff, short puff, long puff', 'Three long puffs',]
        },
    ])
}
//point order -0, -5, -2.5

function fiveTwentyOne () {
    console.log("Question 5.21");
    return inquirer.prompt([
        {
            name: "twentyOne",
            type: "list",
            message: "You realize you have plenty of water but not much food -- good time to get that body you have always wanted. How long can a healthy human go without food as long as they have water?",
            choices: ['Three days', 'Three weeks', 'One week',]
        },
    ])
}
//point order -5, -0, -2.5

function fiveTwentyTwo () {
    console.log("Question 5.22");
    return inquirer.prompt([
        {
            name: "twentyTwo",
            type: "list",
            message: "Now you are low on water. How many days can the human body go without water?",
            choices: ['Three days', 'Eight days', 'Fourteen days',]
        },
    ])
}
//point order -0, -2.5, -5

module.exports = {fiveOne, fiveTwo, fiveThree, fiveFour, fiveFive, fiveSix, fiveSeven, fiveEight, fiveNine, fiveTen, fiveEleven, fiveTwelve, fiveThirteen, fiveFourteen, fiveFifteen, fiveSixteen, fiveSeventeen, fiveEighteen, fiveNineteen, fiveTwenty, fiveTwentyOne, fiveTwentyTwo}