// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false

var multiplyInto20 = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[i] * arr[j] === 20) {
        return true;
      }
      j++;
    }
  }
  return false;
};

// Solved on 10/12/2020
