// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  let count = 0;
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    const x = lowerStr[i];
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
      count++;
    }
  }
  return count;
};

// Solved on 10/9/2020
