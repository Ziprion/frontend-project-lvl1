#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startGame from '../../src/index.js';

const mainTask = 'What is the result of the expression?';
const round = () => {
  const numberOne = Math.floor(Math.random() * 100) + 1;
  const numberTwo = Math.floor(Math.random() * 100) + 1;
  const numberOfOperator = Math.floor(Math.random() * 3);
  const operators = ['-', '+', '*'];
  const operator = operators[numberOfOperator];
  console.log(`'Question: ${numberOne} ${operator} ${numberTwo}'`);
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
startGame(mainTask, round);
