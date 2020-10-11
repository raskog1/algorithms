// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
  let words = str.split(" ");
  let long = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > long.length) {
      long = words[i];
    }
  }
  return long;
};

// Solved on 10/10/2020
