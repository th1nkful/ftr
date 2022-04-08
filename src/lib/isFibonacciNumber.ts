const fibCache:{ [key:number]: boolean } = {};

const maxFib = 1000;

const isFibonacciNumber = (num:number):boolean => {
  if (num < 0) {
    return false;
  }

  if (num <= 3) {
    return true;
  }

  // If we have already calculated the fib number for this
  // then we should skip doing it again
  if (fibCache[num]) {
    return fibCache[num];
  }

  let a = 0;
  let b = 1;
  let c = a + b;
  let fibNum = 1;

  while (c <= num && fibNum < maxFib) {
    fibNum += 1;

    if (c === num) {
      fibCache[num] = true;
      return true;
    }

    a = b;
    b = c;
    c = a + b;

    // Pre-emptively cache the result to make it faster
    // if the same num is entered again, still run through the
    // loop over again for new numbers or non-matching ones
    fibCache[c] = true;
  }

  fibCache[num] = false;
  return false;
};

export default isFibonacciNumber;
