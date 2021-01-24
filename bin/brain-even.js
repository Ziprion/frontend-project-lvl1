#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();
console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
const round = () => {
    const evenNumber = Math.round(Math.random() * 100) + 1;
    console.log(`Question: ${evenNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const even = evenNumber % 2 === 0 ? 'yes' : 'no';
    const positiveReturn = 'Correct!';
    const negativeReturn = `'${userAnswer}' is wrong answer ;(. Correct answer was '${even}'.\n` + `Let's try again, ${userName}!`
    const resultRound = userAnswer == even ? 1 : 0;
    console.log(resultRound === 1 ? positiveReturn : negativeReturn); 
    return resultRound;
  };
const game = (count = 0) => {
    if (count === 3) {
        return console.log(`Congratulations, ${userName}!`);
    }
    const score = round();
    if (score === 0) {
        return;
    }
    count += 1;
    game(count);
}
game();
