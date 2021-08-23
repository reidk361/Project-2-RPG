const { rules, title, game } = require('./helpers/startGame');

function init () {
    title();
    setTimeout(rules, 1000);
    setTimeout(game, 14000);
}

init();