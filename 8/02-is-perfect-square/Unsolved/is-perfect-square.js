// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
  if (num === 0) return true;
  let half = Math.ceil(num / 2);
  while (half >= 0) {
    if (num / half === half) {
      return true;
    }
    half--;
  }
  return false;
};

// Solved on 10/12/2020
