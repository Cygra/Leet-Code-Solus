Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
>Input: 123  
>Output: 321

Example 2:
>Input: -123  
>Output: -321

Example 3:
>Input: 120  
>Output: 21

Note:

Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2<sup>31</sup>,  2<sup>31</sup> − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var r = parseInt(Math.abs(x).toString().split('').reverse().join(''))
  const reversed =  (x.toString().split('')[0] === '-') ? -1*r : r
  return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0
}
```
