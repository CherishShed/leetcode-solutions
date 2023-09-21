// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function (nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    let remain = nums.indexOf(target - nums[i]);
    if (remain != -1 && remain != i) return [i, remain];
  }
};
