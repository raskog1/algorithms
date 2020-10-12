// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
  const lower = str.toLowerCase().split("");
  let results = {};

  for (let i = 0; i < lower.length; i++) {
    let count = 1;
    let j = i;
    while (j < lower.length) {
      j++;
      if (lower[i] === lower[j]) {
        count++;
        lower.splice(j, 1);
        j--;
      }
    }
    results[lower[i]] = count;
  }
  return results;
};

// Solved on 10/11/2020
