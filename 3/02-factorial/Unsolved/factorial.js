// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  if (num === 0) return 1;
  let facto = 1;
  let x = 1;
  while (x <= num) {
    facto *= x;
    x++;
  }
  return facto;
};

// Solved 10/9/200
