/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  var result = "",
    i = 0;
  while (strs.every(str => str.charAt(i))) {
    var current = strs[0].charAt(i);
    if (strs.every(str => str.charAt(i) === current)) {
      result += current;
    } else {
      break;
    }
    i++;
  }
  return result;
};
