#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();
console.log('Find the greatest common divisor of given numbers.');
const round = () => {
  const numberOne = Math.round(Math.random() * 100) + 1;
  const numberTwo = Math.round(Math.random() * 100) + 1;
  console.log(`Question: ${numberOne} ${numberTwo}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const fnGcd = (a, b) => (b === 0 ? a : fnGcd(b, a % b));
  const even = fnGcd(numberOne, numberTwo);
  const positiveReturn = 'Correct!';
  const negativeReturn = `'${userAnswer}' is wrong answer ;(. Correct answer was '${even}'.`;
  const resultRound = Number(userAnswer) === even ? 1 : 0;
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
