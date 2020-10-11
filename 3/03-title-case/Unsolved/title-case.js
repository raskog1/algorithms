// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
};

// Solved on 10/9/2020
// Had to look up substring method, in this case it returns the remaining
// string starting at index of 1.  You can enter a second parameter which
// would return the string between two indexes.
// words[i].substring(1, 4) would return indexes 1, 2, and 3
