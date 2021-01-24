#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();
console.log('What number is missing in the progression?');
const round = () => {
  const startNumber = Math.round(Math.random() * 10) + 1;
  const rProg = Math.round(Math.random() * 10) + 1;
  const arrayOfQ = [];
  const newArray = (number, count = 0) => {
    const newCount = count;
    const start = number;
    if (newCount === 10) { return arrayOfQ; }
    arrayOfQ.push(start);
    const newStart = start + rProg;
    const newNewCount = newCount + 1;
    return newArray(newStart, newNewCount);
  };
  newArray(startNumber);
  const numberOfHide = Math.floor(Math.random() * 10);
  const even = arrayOfQ[numberOfHide];
  arrayOfQ[numberOfHide] = '..';
  console.log(`Question: ${arrayOfQ}`);
  const userAnswer = readlineSync.question('Your answer: ');
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
