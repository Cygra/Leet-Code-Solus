Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:
> Input: 121  
> Output: true

Example 2:
> Input: -121  
> Output: false  
> Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
> Input: 10
> Output: false
> Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:

Coud you solve it without converting the integer to a string?

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var arr = x.toString().split('')
  var len = arr.length
  if (arr[0] === '-') return false
  var result = []
  var l = (len%2===0) ? (len/2) : ((len+1)/2)
  for (var i = 0; i < l; i++) {
    if (arr[i] === arr[len-1-i]) {
      result.push(0)
    } else {
      result.push(1)
    }
  }
  return !result.includes(1)
};
```
