//1 People Questions

const inquirer = require("inquirer");

function oneOne () {
    console.log("Question 1.01");
    return inquirer.prompt([
        {
            name: "one",
            type: "list",
            message: "You are all alone. How can you keep your moral up?",
            choices: ['Pat your self on the back', 'Do random acts of kindness for your self', 'Remind your self that Oregon is worth dying for',]
        },
    ])
}
//point order -5, -2.5, -0 

function oneTwo () {
    console.log("Question 1.02");
    return inquirer.prompt([
        {
            name: "two",
            type: "list",
            message: "You are getting close to Oregon. What is a way to tell you have arrived? ",
            choices: ['You see a Welcome to Oregon sign', 'You see someone in skinny jeans acting pretentious', 'You can feel it in your bones',]
        },
    ])
}
//point order -0, -2.5, -5

function oneThree () { 
    console.log("Question 1.03");
    return inquirer.prompt([
        {
            name: "three",
            type: "list",
            message: "Your transportation is no longer working. You have to travel my foot now, what will help your walk?",
            choices: ['A walking stick', 'Stopping to smell the roses', 'A spring in your step',]
        },
    ])
}
//point order -0, -2.5, -5

function oneFour () {
    console.log("Question 1.04");
    return inquirer.prompt([
        {
            name: "four",
            type: "list",
            message: "You come to a river. What is the safest way to cross?",
            choices: ['Face up stream', 'Swim under the water', 'Go fast',]
        },
    ])
}
//point order -0, -2.5, -5

function oneFive () {
    console.log("Question 1.05");
    return inquirer.prompt([
        {
            name: "five",
            type: "list",
            message: "You sprained your ankle. What should you do?",
            choices: ['Push through', 'Rest', 'Hop',]
        },
    ])
}
//point order -5, -0, -2.5

function oneSix () {
    console.log("Question 1.06");
    return inquirer.prompt([
        {
            name: "six",
            type: "list",
            message: "You have made it to Oregon and realize it is overrated and not very original. Where should you travel to next?",
            choices: ['Washington', 'California', 'Idaho',]
        },
    ])
}
//point order -2.5, -5, -0


module.exports = {oneOne, oneTwo, oneThree, oneFour, oneFive, oneSix};