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
  const negativeReturn = `'${userAnswer}' is wrong answer ;(. Correct answer was '${even}'.`;
  const resultRound = userAnswer === even ? 1 : 0;
  console.log(resultRound === 1 ? positiveReturn : negativeReturn);
  return resultRound;
};
const game = (count) => {
  let countWin = count;
  if (countWin === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const score = round();
  if (score === 0) {
    return console.log(`Let's try again, ${userName}!`);
  }
  countWin += 1;
  return game(countWin);
};
game(0);
