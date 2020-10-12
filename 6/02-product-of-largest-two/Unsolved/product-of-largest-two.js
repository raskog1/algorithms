// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
  const max = Math.max(...arr);
  const virtual = arr;
  virtual.splice(virtual.indexOf(max), 1);
  const submax = Math.max(...virtual);
  return max * submax;
};

// Solved on 10/11/2020
