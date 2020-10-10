// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
  let j = str.length;
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < j; i++) {
    if (lowerStr[i] !== lowerStr[j - 1]) {
      return false;
    }
    j--;
  }
  return true;
};

// Solved on 10/9/2020
// Clever solution in Solved that splits the str, reverses it, and joins it
// Then compares the reversed string to the first string
