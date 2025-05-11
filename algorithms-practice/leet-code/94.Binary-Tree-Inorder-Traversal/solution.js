/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 반복문으로 처리

  const result = []; // 결과 값 반환을 위한 배열
  const stack = []; // 처리할 노드를 스택 구조로 저장
  let current = root; // 현재 처리할 노드

  // current가 비어있지 않거나 stack에 처리할 노드가 남아있으면 반복
  while (current !== null || stack.length > 0) {
    // 현재 왼쪽 노드가 마지막이 아니라면
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    // 만 왼쪽 아래 노드를 찾게되면 내부 반복문이 끝내게 되고
    // stack에는 왼쪽 노드들이 얕은 순서에서 깊은 순서로 정렬되어있다
    // stack 구조로 사용하기 떄문에 마지막에 들어온 가장 깊은 노드부터 사용
    current = stack.pop();

    result.push(current.val); // 값 저장
    // 가장 깊은 노드의 오른쪽 노드가 비어있다면 (null) 내부 반복을 하지않고 바로 stack에 다음 노드를
    // 처리 하겠지만, 노드가 있다면 오른쪽 노드의 왼쪽을 내부 반복으로 가장 깊은 노드까지 stack에 담아 반복한다.
    current = current.right;
  }

  return result;
};

var inorderTraversal = function (root) {
  // 재귀적으로 처리
  const dfs = (node, result = []) => {
    // 노드가 비어있다면 result 배열을 바로 리턴
    if (node === null) return result;
    // 중위 순환 방법이기 때문에 왼쪽 부터
    dfs(node.left, result);
    // 가장 깊은 왼쪽 노드를 만나게 되면 result에 저장
    result.push(node.val);
    // 오른쪽 노드를 다음으로 탐색
    dfs(node.right, result);

    return result;
  };
  return dfs(root);
};
