// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
  const digits = str.split("");
  let ones = 0;
  let zeros = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "1") {
      ones++;
    } else if (digits[i] === "0") {
      zeros++;
    }
  }
  return ones === zeros;
};

// Solved on 10/12/2020
