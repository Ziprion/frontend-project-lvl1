#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();
console.log('What is the result of the expression?');
const round = () => {
  const numberOne = Math.round(Math.random() * 10) + 1;
  const numberTwo = Math.round(Math.random() * 10) + 1;
  const numberOfOperator = Math.floor(Math.random() * 3);
  const operators = ['-', '+', '*'];
  const operator = operators[numberOfOperator];
  console.log(`Question: ${numberOne} ${operator} ${numberTwo}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const even = [];
  even[0] = numberOne - numberTwo;
  even[1] = numberOne + numberTwo;
  even[2] = numberOne * numberTwo;
  const positiveReturn = 'Correct!';
  const negativeReturn = `'${userAnswer}' is wrong answer ;(. Correct answer was '${even[numberOfOperator]}'.`;
  const resultRound = Number(userAnswer) === even[numberOfOperator] ? 1 : 0;
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
