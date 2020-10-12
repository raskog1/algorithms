// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function(arr1, arr2) {
  let sorted = [];
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] <= arr2[0] || arr2.length === 0) {
      sorted.push(arr1[0]);
      arr1.splice(0, 1);
    } else if (arr2[0] <= arr1[0] || arr1.length === 0) {
      sorted.push(arr2[0]);
      arr2.splice(0, 1);
    }
  }
  return sorted;
};

// Solved on 10/12/2020
