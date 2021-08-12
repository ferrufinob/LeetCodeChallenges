//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

// Brute Force O(n^2)
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; i < nums.length; j++)
//       if (nums[i] + nums[j] === target) {
//         return console.log([i, j]);
//       }
//   }
// };

twoSum([2, 7, 11, 15], 9);

// Big O(n) -> we are only visiting each number once
const twoSum = function (nums, target) {
  const comp = new Map(); // key: value
  // calculate outside so that the length does not get re-counted every time there is an iteration in the loop
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    // check if that number already exists in our map
    if (comp[nums[i] >= 0]) {
      return [comp[(nums[i], i)]];
    }
    // saving compliment of that number, not number itself
    comp[target - nums[i]] = i;
  }
  return [];
};
