const sumAll = function(a, b) {
     if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    a < 0 || b < 0 ||
    !Number.isInteger(a) || !Number.isInteger(b)
  ) {
    return 'ERROR';
  }

  // Swap if a is greater than b
  if (a > b) {
    [a, b] = [b, a];
  }

  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
