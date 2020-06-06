/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!Array.isArray(nums) || nums.length === 0) return -1;
  var low = 0,
    high = nums.length - 1;
  while (low <= high) {
    if (nums[low] === target) return low;
    if (nums[high] === target) return high;
    var mid = low + ((high - low) >> 1);
    if (nums[mid] === target) return mid;
    if (
      (target < nums[0] && target > nums[mid]) ||
      (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0]))
    ) {
      low = mid + 1;
    } else high = mid - 1;
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 4), 0);
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 5), 1);
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 6), 2);
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 7), 3);
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8), 4);
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 1), 5);
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 2), 6);
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 3), 7);
console.log(search([1, 2, 3, 4, 5, 6], 4), 3);
console.log(search([5, 1, 2, 3, 4], 1), 1);
console.log(search([8, 9, 2, 3, 4], 9), 1);
