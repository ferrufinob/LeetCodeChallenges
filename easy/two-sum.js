//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

// Brute Force O(n^2)
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; i < nums.length; j++)
      if (nums[i] + nums[j] === target) {
        return console.log([i, j]);
      }
  }
};

twoSum([2, 7, 11, 15], 9);

// Better --> Explore Map
