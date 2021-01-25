import greeting from './cli.js';

const game = (user, b, coun = 0) => {
  const userName = user;
  const round = b;
  const count = coun;
  if (count === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  if (round() === 0) {
    return console.log(`Let's try again, ${userName}!`);
  }
  return game(userName, round, count + 1);
};
const startGame = (a, b) => {
  const mainTask = a;
  const round = b;
  const userName = greeting();
  console.log(mainTask);
  return game(userName, round);
};
export default startGame;
