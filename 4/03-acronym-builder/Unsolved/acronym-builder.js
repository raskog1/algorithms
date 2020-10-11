// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
  let acronym = "";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    acronym += words[i][0].toUpperCase();
  }
  return acronym;
};

// Solved on 10/10/2020
