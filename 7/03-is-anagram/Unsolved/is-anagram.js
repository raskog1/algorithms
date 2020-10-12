// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
  const sortA = strA.split("").sort();
  const sortB = strB.split("").sort();
  if (sortA.join("") === sortB.join("")) {
    return true;
  }
  return false;
};

// Solved on 10/12/2020
