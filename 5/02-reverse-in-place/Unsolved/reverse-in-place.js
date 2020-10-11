// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
    arr.splice(i, 1);
  }
  return arr;
};

// Solved on 10/10/2020
