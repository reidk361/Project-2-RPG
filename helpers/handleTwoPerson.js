const inquirer = require("inquirer");

function twoOne () {
    console.log("Question 2.01");
    inquirer.prompt([
        {
            name: 2.01,
            type: "list",
            message: "You see a fresh stream and do not want to take the time to boil water. Why should you avoid drinking out of streams?",
            choices: ['You might scare the fish', 'The water might have sand and dirt in it', 'The water may contain bacteria',]
        },
    ])
}
//point order -5, -2.5, -0 

function twoTwo () {
    console.log("Question 2.02");
    inquirer.prompt([
        {
            name: 2.02,
            type: "list",
            message: "You notice another tick on your arm. What kind of desease can you contract from ticks?",
            choices: ['Hepatitis B', 'Lyme', 'Black plague',]
        },
    ])
}
//point order -2.5, -0, -5 

function twoThree () {
    console.log("Question 2.03");
    inquirer.prompt([
        {
            name: 2.03,
            type: "list",
            message: "You decide to boil some the water from the stream. How long do you need to let the water boil before it is safe to drink?",
            choices: ['One hour', 'One minute', 'One day',]
        },
    ])
}
//point order -2.5, -0, -5 

function twoFour () {
    console.log("Question 2.04");
    inquirer.prompt([
        {
            name: 2.04,
            type: "list",
            message: "You have a poison oak rash. Where are the oils from plants such as poison ivy likely to collect?",
            choices: ['Your hands', 'Your boots', 'Your pants',]
        },
    ])
}
//point order -5, -0, -2.5 

function twoFive () {
    console.log("Question 2.05");
    inquirer.prompt([
        {
            name: 2.05,
            type: "list",
            message: "The posin oak rash is getting worse. How should you treat your posin oak rash?",
            choices: ['Wash off the area', 'Scratch the area', 'Ignore the rash',]
        },
    ])
}
//point order -0, -5, -2.5 

function twoSix () {
    console.log("Question 2.06");
    inquirer.prompt([
        {
            name: 2.06,
            type: "list",
            message: "You are worried about the tick bite you got. How long does it take for a tick to tranmit Lyme disease?",
            choices: ['24 minutes', '24 hours', '24 days',]
        },
    ])
}
//point order -2.5, -0, -5 

function twoSeven () {
    console.log("Question 2.07");
    inquirer.prompt([
        {
            name: 2.07,
            type: "list",
            message: "The tick bite is looking worse. What is an indicator of a serious tick bite?",
            choices: ['A horseshoe shaped rash', 'A bulls eye shaped rash', 'A star shaped rash',]
        },
    ])
}
//point order -5, -0, -2.5 

function twoEight () {
    console.log("Question 2.08");
    inquirer.prompt([
        {
            name: 2.08,
            type: "list",
            message: "You spot bear tracks in the area you are planning on camping overnight. How should you protect your food?",
            choices: ['Sleep with it under you pillow', 'String it up between two trees', 'Burry it',]
        },
    ])
}
//point order -5, -0, -2.5 

function twoNine () {
    console.log("Question 2.09");
    inquirer.prompt([
        {
            name: 2.09,
            type: "list",
            message: "You notice you keep getting bit by mosquitos. What can you use for mosquito repelent?",
            choices: ['Dirt', 'Pine needles', 'Tree sap',]
        },
    ])
}
//point order -5, -0, -2.5 

function twoTen () {
    console.log("Question 2.10");
    inquirer.prompt([
        {
            name: 2.10,
            type: "list",
            message: "Your boots are soaking wet. What is a quick way to dry them?",
            choices: ['Blow on them', 'Heat stones in the fire and put the stones in you boots', 'Hang them up',]
        },
    ])
}
//point order -5, -0, -2.5 


module.exports = {twoOne, twoTwo, twoThree, twoFour, twoFive, twoSix, twoSeven, twoEight, twoNine, twoTen};