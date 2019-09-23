// Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

// You may assume that each input would have *exactly* one solution, and you may not use the same element twice.

// Example:
// > Given nums = [2, 7, 11, 15], target = 9,
// >
// > Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/** v1 */
var twoSum = function(nums, target) {
  var l = nums.length;
  var hash = {};
  for (var i = 0; i < l; i++) {
    if (typeof hash[nums[i]] !== "undefined") {
      return [hash[nums[i]], i];
    }
    hash[target - nums[i]] = i;
  }
};

/** v2 */
var twoSum = function(nums, target) {
  var map = new Map();
  var l = nums.length;
  for (var i = 0; i < l; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
    map.set(nums[i], i);
  }
};
