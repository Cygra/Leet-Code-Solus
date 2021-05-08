# Leet-Code-Solus

Leet Code Solutions Repo

---

## 数组类问题

- 双指针， `i` 在头，`j` 在尾
  - `if (...) i++ else j --`
- 双指针，一个比一个快一步
- 动态规划
- 滑动窗口
  - 219
- 不使用额外空间
  - 用数组本身来记录
    - 正负？加和？

## 链表类问题

- 递归
- 单向遍历
- 快慢指针
  - 一个比一个早走 n 步
    - 19
    - 160
  - 一个一次走一步，一个一次走两步
- 不要节省变量，能用就用
- 可以添加假的头结点
- 用 Map

- 涉及到逆序的，考虑用栈

- 为了快速知道一个元素在不在一个 Array里，可以用 Set

---

### 二分查找

```js
// 升序里找第一个 target
var left = 0
var right = nums.length - 1
while (left <= right) {
  const mid = Math.floor((left + right) / 2)
  if (nums[mid] < target) {
    left = mid + 1
  } else {
    right = mid - 1
  }
}
```

```js
// 升序里找第一个比 target 大的
var left = 0
var right = nums.length - 1
while (left <= right) {
  const mid = Math.floor((left + right) / 2)
  if (nums[mid] > target) {
    right = mid - 1
  } else {
    left = mid + 1
  }
}
```
