/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 새로운 연결 리스트를 생성
  const dummy = new ListNode(-1);
  // dummy 값은 반환할때 시작할 시작 포인트로 사용하기 위해 연결 해더 이동을 위한 값 생성
  let current = dummy;

  // 두 연결 리스트 중 하나만 끝에 도달하면 반복을 멈춘다.
  while (list1 !== null && list2 !== null) {
    // list1의 현재 노드 값이 작은 경우
    if (list1.val < list2.val) {
      // 다음 노드에 값이 작은 노드 저장
      current.next = list1;
      // 현재 list1의 노드값이 사용되었으므로 다음으로 헤더 이동( 포인터 이동 )
      list1 = list1.next;
    }
    // list2의 현재 노드 값이 작은 경우
    else {
      current.next = list2;
      list2 = list2.next;
    }
    // 저장하고 있는 노드 리스트의 헤더(포인터) 이동
    current = current.next;
  }

  // 만약 list1이 끝나지 않은 경우 ( list2가 끝난 경우)
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
};
