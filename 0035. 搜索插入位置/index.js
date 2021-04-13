/** 暴力解 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0 || target <= nums[0]) return 0
  const len = nums.length
  if (target > nums[len - 1]) return len
  let i
  for (i = 0; i < len; i ++) {
      if (nums[i] >= target) {
          break
      }
  }
  return i
};

/** 二分法 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {

    const mid = ((right - left) >> 1) + left

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1 // 右端点左移
    } else {
      left = mid + 1 // 左端点右移
    }
  }

  return left
};
