// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverse = function(str) {
  let chars = str.split("");
  let reverse = [];
  for (let i = chars.length; i >= 0; i--) {
    reverse.push(chars[i]);
  }
  return reverse.join("");
};

// Solved on 10/10/2020
