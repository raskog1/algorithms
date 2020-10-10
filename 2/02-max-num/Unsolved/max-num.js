// Write code to return the largest number in the given array

var maxNum = function(arr) {
  return Math.max(...arr); // Spread operator picks out everything from the array
};

// or

var maxNum = function(arr) {
  let max = 0; // let max = arr[0] would be better here in case all negative numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// Solved 10/9/2020
