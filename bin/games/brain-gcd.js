#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startGame from '../../src/index.js';

const mainTask = 'Find the greatest common divisor of given numbers.';
const round = () => {
  const numberOne = Math.floor(Math.random() * 100) + 1;
  const numberTwo = Math.floor(Math.random() * 100) + 1;
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
startGame(mainTask, round);
