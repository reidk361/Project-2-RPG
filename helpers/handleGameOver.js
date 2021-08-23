const figlet = require("figlet");


function gameWin(){
    figlet('Congrats!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
}

function gameLose(){
    figlet('You Died of Dysentery', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
}

module.exports = {
    gameWin,
    gameLose,
}