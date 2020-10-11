// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
  let digits = n.toString().split("");
  let result = "";
  for (let i = 0; i < digits.length; i++) {
    let counter = 1;
    let j = 1;
    while (digits[i] === digits[i + j]) {
      counter++;
      j++;
    }
    i += j - 1;
    result += counter;
    result += digits[i];
  }
  return parseInt(result);
};

// Solved on 10/10/2020
// This gave me some difficulty
