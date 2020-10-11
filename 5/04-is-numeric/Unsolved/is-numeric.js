// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function(str) {
  const digits = str.split("");
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = [".", "-", "+"];
  let value = 0;
  let period = 0;
  let indicator = 0;

  if (numbers.indexOf(digits[0]) < 0 && operators.indexOf(digits[0]) < 0)
    return false;

  if (numbers.indexOf(digits[0]) > -1) value++;
  if (digits[0] === ".") period++;
  if (digits[0] === "-" || digits[0] === "+") indicator++;

  for (let i = 1; i < digits.length; i++) {
    if (numbers.indexOf(digits[i]) > -1) {
      value++;
    } else if (operators.indexOf(digits[i]) > -1) {
      if (digits[i] === ".") period++;
      if (period > 1) return false;
      if (digits[i] === "-" || digits[i] === "+") return false;
      if (indicator > 1) return false;
    }
  }
  console.log(str + " " + value);
  if (value > 0) {
    return true;
  } else if (value === 0) return false;
};

// Solved on 10/10/2020
// Ugliest code I have ever written
