// Write a function that takes an unsorted array of positive and unique integers and returns the number missing from the array

var missingNumber = function (nums) {
    if (nums.length < 1) return 0;
    for (let i = 0; i <= (Math.max(...nums) + 1); i++) {
        if (nums.indexOf(i) < 0) {
            return i;
        }
    }
};

// Solved on 10/14/2020