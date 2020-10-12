// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[i] === arr[j]) {
        return false;
      }
      j++;
    }
  }
  return true;
};

// Solved on 10/12/2020
