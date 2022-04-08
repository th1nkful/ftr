import readline from 'readline';

import commands from './commands';
import messages from './messages';
import getCountState, { NumberState } from './lib/getCountState';

import isFibonacciNumber from './lib/isFibonacciNumber';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface State {
  count: NumberState;
  timer?: NodeJS.Timer;
  interval?: number;
}

const state:State = {
  count: {},
  timer: undefined,
  interval: undefined,
};

const runInterval = () => {
  if (state.interval && !state.timer) {
    state.timer = setInterval(() => {
      const output = getCountState(state.count);
      if (output) {
        console.log(`>> ${output}`);
      }
    }, state.interval * 1000);
  }
};

const processInput = (userInput:string):false | string => {
  if (userInput === commands.quit) {
    rl.close();
    return false;
  }

  if (userInput === commands.halt) {
    if (state.timer) {
      clearInterval(state.timer);
      state.timer = undefined;
    }

    return messages.halted;
  }

  if (userInput === commands.resume) {
    runInterval();
    return messages.resumed;
  }

  const inputAsInt = Number.parseInt(userInput, 10);
  if (!Number.isInteger(inputAsInt)) {
    return messages.notNumber;
  }

  let message = '';
  if (isFibonacciNumber(inputAsInt)) {
    message += `${messages.fib}\n`;
  }

  // make sure there is a spot to add to
  if (!state.count[String(inputAsInt)]) {
    state.count[String(inputAsInt)] = 0;
  }

  state.count[String(inputAsInt)] += 1;

  // Appending messages here decouples the creation of the response
  // from actually giving the response back
  message += messages.nextNumber;
  return message;
};

rl.on('close', () => {
  const output = getCountState(state.count);
  console.log(`>> ${output}`);

  console.log(messages.bye);
  process.exit(0);
});

const loopCommandPrompts = (prompt:string = '>> '):void => {
  rl.question(`${prompt}\n`, (userInput) => {
    const nextPrompt = processInput(userInput);
    if (nextPrompt) {
      loopCommandPrompts(nextPrompt);
    }
  });
};

const start = () => {
  rl.question(`${messages.frequency}\n`, (userInput) => {
    const inputAsInt = Number.parseInt(userInput, 10);
    if (Number.isInteger(inputAsInt)) {
      state.interval = inputAsInt;
      runInterval();

      loopCommandPrompts(messages.firstNumber);
      return;
    }

    console.log(messages.notNumber);
    start();
  });
};

start();
