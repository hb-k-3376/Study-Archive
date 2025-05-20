/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// hash map, set으로 풀이
var hasCycle = function (head) {
  const hash = new Map();

  // head가 마지막일 때 까지 반복
  while (head !== null) {
    // 만약 hash에 중복된 값이 있다면 순환 리스트임
    if (hash.has(head)) {
      return true;
    }
    // hash에 현재 head 저장
    hash.set(head, true);
    //   다음으로 헤드 이동
    head = head.next;
  }
  // head가 null 이면 순환 리스트 아님.
  return false;
};

// 투 포인터 방식 느린 포인터 빠른 포인터
var twoPointer = function (head) {
  // 지금 해더가 null or 다음 해더가 null 이면 순환이 아님.
  if (head === null || head.next === null) return false;

  let slow = head; // 느린 포인터 (거북이)
  let fast = head; // 빠른 포인터 (토끼)

  // 토끼를 체크하는 이유는 거북이보다 토끼가 무조건 null에 먼저 도달할 수 있으며,
  // fast.next도 체크하는 이유는 fast.next.next 두칸 씩 이동하는데,
  // fast.next가 null이라면 fast.next는 .next 요소 자체가 없기 때문에 타입에러를 방지
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
