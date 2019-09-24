// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var result = new ListNode(0),
    l = result,
    m = l1,
    n = l2,
    carry = 0;
  while (m || n) {
    const add = ((m && m.val) || 0) + ((n && n.val) || 0) + carry;
    l.next = new ListNode(add % 10);
    l = l.next;
    carry = add > 9 ? 1 : 0;
    m = (m && m.next) || null;
    n = (n && n.next) || null;
  }
  if (carry) {
    l.next = new ListNode(1);
  }
  return result.next;
};
