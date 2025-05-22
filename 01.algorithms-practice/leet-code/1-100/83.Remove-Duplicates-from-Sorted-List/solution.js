/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head;

  let current = head;

  // current 값이 빈값일 때 반복문 종료
  while (current !== null && current.next !== null) {
    // 현재 값과 다음 값이 같을때 (중복)
    if (current.val === current.next.val) {
      current.next = current.next.next;
    }
    // 중복이 아닐때
    else {
      current = current.next;
    }
  }
  return head;
};
