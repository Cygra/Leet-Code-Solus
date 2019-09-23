/**
 * @param {string} s
 * @return {boolean}
 */
/** v1 */
var isValid = function(s) {
  var len = s.length;
  var map = { ")": "(", "]": "[", "}": "{" };
  var stack = [];
  for (i = 0; i < len; i++) {
    var c = s.charAt(i);
    const pair = map[c];
    if (pair) {
      const top = stack.pop() || "";
      if (top !== pair) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
};
