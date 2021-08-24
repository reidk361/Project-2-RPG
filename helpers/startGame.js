const { handleQuestion5 } = require("./score/handleScore5");
const { handleQuestion4 } = require("./score/handleScore4");
const { handleQuestion3 } = require("./score/handleScore3");
const { handleQuestion2 } = require("./score/handleScore2");
const { handleQuestion1 } = require("./score/handleScore1");
const figlet = require("figlet");
const chalk = require('chalk');

function rules(){
    setTimeout(function(){console.info(chalk.green("You are taking a long trek to Oregon."));},2000);
    setTimeout(function(){console.info(chalk.green("You and your family will be faced with much peril while traveling."));},4000);
    setTimeout(function(){console.info(chalk.green(`Your caravan will start off with ${chalk.cyan.underline("100")} points.`));},6000);
    setTimeout(function(){console.info(chalk.green(`For every ${chalk.yellow.underline("20")} points you lose, you will lose a family member.`));},8000);
    setTimeout(function(){console.info(chalk.green(`When you reach ${chalk.red.underline("0")} points, you lose.`));},10000);
    setTimeout(function(){console.info(chalk.green("Good luck! \n"));},12000);
}

function title(){
    figlet('The Long Oregon Hike', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.info(chalk.green.bold(data));
    });
}

async function game() {
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

module.exports = {
    rules,
    title,
    game,
}