// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
  let words = str.split(" ");
  words[0] = words[0][0].toLowerCase() + words[0].substring(1);
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join("");
};

// Solved on 10/11/2020
