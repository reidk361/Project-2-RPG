const inquirer = require("inquirer");

oneOne = () => {
    console.log("Question 1.01");
    inquirer.prompt([
        {
            name: 1.01,
            type: "list",
            message: "You are all alone. How can you keep your moral up?",
            choices: ['Pat your self on the back', 'Do random acts of kindness for your self', 'Remind your self that Oregon is worth dying for',]
        },
    ])
}
//point order -5, -2.5, -0 

oneTwo = () => {
    console.log("Question 1.02");
    inquirer.prompt([
        {
            name: 1.02,
            type: "list",
            message: "You are getting close to Oregon. What is a way to tell you have arrived? ",
            choices: ['You see a Welcome to Oregon sign', 'You see someone in skinny jeans acting pretentious', 'You can feel it in your bones',]
        },
    ])
}
//point order -0, -2.5, -5

oneThree = () => {
    console.log("Question 1.03");
    inquirer.prompt([
        {
            name: 1.03,
            type: "list",
            message: "Your tranpertation is no longer working. You have to travel my foot now, what will help your walk?",
            choices: ['A walking stick', 'Stopping to smell the roses', 'A spring in your step',]
        },
    ])
}
//point order -0, -2.5, -5

oneFour = () => {
    console.log("Question 1.04");
    inquirer.prompt([
        {
            name: 1.04,
            type: "list",
            message: "You come to a river. What is the safest way to cross?",
            choices: ['Face up stream', 'Swim under the water', 'Go fast',]
        },
    ])
}
//point order -0, -2.5, -5

oneFive = () => {
    console.log("Question 1.05");
    inquirer.prompt([
        {
            name: 1.05,
            type: "list",
            message: "You sprained your ankle. What should you do?",
            choices: ['Push through', 'Rest', 'Hop',]
        },
    ])
}
//point order -5, -0, -2.5

oneSix = () => {
    console.log("Question 1.06");
    inquirer.prompt([
        {
            name: 1.06,
            type: "list",
            message: "You have made it to Oregon and realize it is overrated and not very original. Where should you travel to next?",
            choices: ['Washington', 'California', 'Idaho',]
        },
    ])
}
//point order -2.5, -5, -0


module.exports = {oneOne, oneTwo, oneThree, oneFour, oneFive, oneSix};