#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startGame from '../../src/index.js';

const mainTask = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
const round = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  console.log(`'Question: ${number}'`);
  const userAnswer = readlineSync.question('Your answer: ');
  const ifRightAnswer = 'Correct!';
  const ifWrongAnswer = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
  const resultRound = userAnswer === rightAnswer ? 1 : 0;
  console.log(resultRound === 1 ? ifRightAnswer : ifWrongAnswer);
  return resultRound;
};
startGame(mainTask, round);
