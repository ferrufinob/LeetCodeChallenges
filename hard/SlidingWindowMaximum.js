// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

//! Constraints:
// 1 <= nums.length <= 10^5
// - 10^4 <= nums[i] <= 10^4;
// 1 <= k <= nums.length;

const maxSlidingWindow = function (nums, k) {
  let result = [];

  // check params
  if (nums.length == 0) {
    return result;
  }
  if (k > nums.length) {
    return result;
  }

  let window_ = [];
  // find out max for first window
  for (let i = 0; i < k; i++) {
    while (window_.length > 0 && nums[i] >= nums[window_[window_.length - 1]]) {
      window_.pop();
    }
    window_.push(i);
  }
  result.push(nums[window_[0]]);

  for (let i = k; i < nums.length; i++) {
    // remove all numbers that are smaller than current number
    // from the tail of the list
    while (window_.length > 0 && nums[i] >= nums[window_[window_.length - 1]]) {
      window_.pop();
    }

    // remove first number if it doesn't fall in the window anymore
    if (window_.length > 0 && window_[0] <= i - k) {
      window_.shift();
    }
    window_.push(i);
    result.push(nums[window_[0]]);
  }
  return result;
};

const array = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(maxSlidingWindow(array, 3));
