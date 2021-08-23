const figlet = require("figlet");
const chalk = require('chalk');

function loseMembers(num) {
    console.info(chalk.yellow(`You lost a member of your family. \nYou are down to ${chalk.underline.bold(num)} members.`));
}

function alone() {
    console.info(chalk.red("You lost your last family member. \nIt's just you now. \nGood Luck..."));
}

function gameWin() {
    figlet('Congrats!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(chalk.green.bold(data));
    });
}

function gameLose() {
    figlet('You Died of Dysentery', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(chalk.red.bold(data));
    });
}

module.exports = {
    loseMembers,
    alone,
    gameWin,
    gameLose,
}