// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

function numIdenticalPairs(nums: number[]): number {
  let count: number = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] === nums[j]) {
        count = count + 1;
      }
    }
  }
  return count;
}
