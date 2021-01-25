#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const round = () => {
  const numberNew = Math.round(Math.random() * 100) + 1;
  const evenNumber = (number) => {
    if (number < 2) { return 'no'; }
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) { return 'no'; }
    }
    return 'yes';
  };
  const even = evenNumber(numberNew);
  console.log(`Question: ${numberNew}`);
  const userAnswer = readlineSync.question('Your answer: ');
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
