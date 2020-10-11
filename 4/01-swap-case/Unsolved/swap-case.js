// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
  let letters = str.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toUpperCase()) {
      letters[i] = letters[i].toLowerCase();
    } else {
      letters[i] = letters[i].toUpperCase();
    }
  }
  return letters.join("");
};

// Solved on 10/10/2020
