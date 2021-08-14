
//AG Code

const inquirer = require("inquirer");

//5 People Questions


fiveOne = () => {
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

fiveTwo = () => {
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

fiveThree = () => {
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

fiveFour = () => {
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

fiveFive = () => {
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

fiveSix = () => {
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

fiveSeven = () => {
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

fiveEight = () => {
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

fiveNine = () => {
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

fiveTen = () => {
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

fiveEleven = () => {
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

fiveTwelve = () => {
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

fiveThirteen = () => {
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

fiveFourteen = () => {
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

fiveFifteen = () => {
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

fiveSixteen = () => {
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

fiveSeventeen = () => {
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

fiveEighteen = () => {
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

fiveNineteen = () => {
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

fiveTwenty = () => {
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

fiveTwentyone = () => {
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

fiveTwentytwo = () => {
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



//4 People Questions

fourOne = () => {
    console.log("Question 4.01");
    inquirer.prompt([
        {
            name: 4.01,
            type: "list",
            message: "You want to make a blade for survival and to look super cool. Which of the following is an essential tool to make a blade?",
            choices: ['Rocks', 'Branches', 'Fire',]
        },
    ])
}
//point order -0, -5, -2.5 

fourTwo = () => {
    console.log("Question 4.02");
    inquirer.prompt([
        {
            name: 4.02,
            type: "list",
            message: "You'll need to attach your emergency blade to some kind of handle. Which of these makes the best emergency rope?",
            choices: ['A vine', 'Tree bark', 'Your extra rope you take with you everywhere',]
        },
    ])
}
//point order -2.5, -5, -0 

fourThree = () => {
    console.log("Question 4.03");
    inquirer.prompt([
        {
            name: 4.03,
            type: "list",
            message: "It is another cold night. To avoid hypothermia, which of the following is a great way to generate heat?",
            choices: ['Drink sweet liquids', 'Wear tight clothes', 'Run a few miles',]
        },
    ])
}
//point order -0, -5, -2.5

fourFour = () => {
    console.log("Question 4.04");
    inquirer.prompt([
        {
            name: 4.04,
            type: "list",
            message: "You stepped in a puddle and now your feet are wet. If your feet stay wet for a prolonged period, you can develop immersion foot or:",
            choices: ['Athlete’s foot', 'Trench foot', 'Diabetic foot',]
        },
    ])
}
//point order -2.5, -0, -5 

fourFive = () => {
    console.log("Question 4.05");
    inquirer.prompt([
        {
            name: 4.05,
            type: "list",
            message: "You are turned around once again. What everyday object is used to signal for help in emergency situations?",
            choices: ['Toothbrush', 'Belt', 'Mirror',]
        },
    ])
}
//point order -5, -2.5, -0 

fourSix = () => {
    console.log("Question 4.06");
    inquirer.prompt([
        {
            name: 4.06,
            type: "list",
            message: "You are starting to hear voices again. What should you do?",
            choices: ['Do whatever they tell you', 'Tell someone you are not well', 'Ignore the voices',]
        },
    ])
}
//point order -5, -0, -2.5 

fourSeven = () => {
    console.log("Question 4.07");
    inquirer.prompt([
        {
            name: 4.07,
            type: "list",
            message: "You need to make a fire but it is raining. Where can you find dry tinder?",
            choices: ['Under moss', 'Under leaves', 'On top of rocks',]
        },
    ])
}
//point order -0, -2.5, -5 

fourEight = () => {
    console.log("Question 4.08");
    inquirer.prompt([
        {
            name: 4.08,
            type: "list",
            message: "As you set up camp for the night you spot a cougar. If it attacks you what should you do?",
            choices: ['Play dead', 'Scream', 'Fight back',]
        },
    ])
}
//point order -2.5, -5, -0 

fourNine = () => {
    console.log("Question 4.09");
    inquirer.prompt([
        {
            name: 4.09,
            type: "list",
            message: "You cut your hand whittling. What percent of blood loss will likely cause death?",
            choices: ['40%', '2%', '25%',]
        },
    ])
}
//point order -0, -5, -2.5 

fourTen = () => {
    console.log("Question 4.10");
    inquirer.prompt([
        {
            name: 4.10,
            type: "list",
            message: "You decide to go hunting. Do you tell your family your plan?",
            choices: ['Yes', 'No', 'Maybe so',]
        },
    ])
}
//point order -0, -5, -2.5 

fourEleven = () => {
    console.log("Question 4.11");
    inquirer.prompt([
        {
            name: 4.11,
            type: "list",
            message: "While hunting you spot a buck, you scare it off. What should you do next?",
            choices: ['Give chase', 'Watch and see where it goes', 'Start shooting as fast as you can at it',]
        },
    ])
}
//point order -2.5, -0, -5 

fourTwelve  = () => {
    console.log("Question 4.12");
    inquirer.prompt([
        {
            name: 4.12,
            type: "list",
            message: "You have lost your direction while hunting. How should you try to find your sense of direction?",
            choices: ['Move quickly it any direction', 'Look around for something familiar', 'Curl up in a ball and rock back and forth',]
        },
    ])
}
//point order -2.5, -0, -5 

fourThirteen  = () => {
    console.log("Question 4.13");
    inquirer.prompt([
        {
            name: 4.13,
            type: "list",
            message: "You spot another deer in the distance, but it is getting late. What should you do?",
            choices: ['Return to your family and try again another day', 'Keep hunting', 'Start shooting at the far away deer',]
        },
    ])
}
//point order -0, -2.5, -5 

fourFourteen  = () => {
    console.log("Question 4.14");
    inquirer.prompt([
        {
            name: 4.14,
            type: "list",
            message: "You are a bad hunter and came back with nothing. How do you keep the morale up?",
            choices: ['Tell a funny story', 'Tell your family you miss 100% of the shots you don’t take', 'Remind everyone that tomorrow is a new day',]
        },
    ])
}
//point order -2.5, -5, -0 

fourFifteen  = () => {
    console.log("Question 4.15");
    inquirer.prompt([
        {
            name: 4.15,
            type: "list",
            message: "While on your journey a family member breaks their leg and can no longer walk. What should you do?",
            choices: ['Leave them behind', 'Rest and create a plan', 'Tell them what doesn’t kill them will make them stronger',]
        },
    ])
}
//point order -5, -0, -2.5 

fourSixteen  = () => {
    console.log("Question 4.16");
    inquirer.prompt([
        {
            name: 4.16,
            type: "list",
            message: "There is a town nearby and you can rest and resupply. What should you do first?",
            choices: ['Find a hotel', 'Get a haircut', 'Get hammered drunk',]
        },
    ])
}
//point order -0, -2.5, -5 

fourSeventeen  = () => {
    console.log("Question 4.17");
    inquirer.prompt([
        {
            name: 4.17,
            type: "list",
            message: "Now that you are in a town again you think Oregon sounds overrated and overrun by hipsters. Do you keep heading to Oregon?",
            choices: ['Yes, it is the only place that I will be happy', 'No, Washington sounds better', 'Undecided, lets see how I feel tomorrow',]
        },
    ])
}
//point order -0, -5, -2.5 

fourEighteen  = () => {
    console.log("Question 4.18");
    inquirer.prompt([
        {
            name: 4.18,
            type: "list",
            message: "While in town you are challenged to a gentleman’s duel for insulting the barkeep's mother. What should you do?",
            choices: ['Meet for the duel and show the whole town you are not scared', 'Get your family and run for Oregon', 'Insult more people’s mothers so you can have multiple duels',]
        },
    ])
}
//point order -2.5, -0, -5 
