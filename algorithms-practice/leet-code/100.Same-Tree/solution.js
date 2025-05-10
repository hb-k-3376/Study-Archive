/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 재귀 적으로 푼 문제
var isSameTree = function (p, q) {
  // 둘다 null이면 true
  if (p === null && q === null) return true;
  // 둘중 하나만 null 인 경우 false
  if (p === null || q === null) return false;
  // 값 이 다른 경우
  if (p.val !== q.val) return false;

  return isSameTree(q.right, p.right) && isSameTree(q.left, p.left);
};
// 큐를 이용한 탐색은 bfs 넓이 우선 탐색이다.
var isSameTreeQueue = function (p, q) {
  const queue = [[p, q]];

  while (queue.length > 0) {
    const [node1, node2] = queue.shift;

    // 둘다 비어있는 노드면 다음 반복으로 넘어간다.
    if (node1 === null && node2 === null) {
      continue;
    }
    // 노드 두개중 하나만 비어있거나 값이 다른 경우 false
    if (node1 === null || node2 === null || node1.val !== node2.val) {
      return false;
    }
    // 왼쪽
    queue.push([p.left, q.left]);
    // 오른쪽
    queue.push([p.right, q.right]);
  }
};
