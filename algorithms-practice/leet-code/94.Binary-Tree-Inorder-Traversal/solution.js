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
  // 재귀 적으로 처리하는 방법
  const dfs = (node, result = []) => {
    // 기저 조건
    if (node === null) return result;
    // 먼저 왼쪽 서브 트리를 우선으로 탐색한다.
    // 값이 null이 나올때 까지 계속 깊게 깊게 탐색하고
    // null 즉 오른쪽 서브 트리가 없으면 빠져온다.
    dfs(node.left, result);

    // 빠저나온 후 해당 값을 저장
    result.push(node.val);

    // 그리고 오른쪽 서브트리를 탐색한다.
    // 마찬가지고 없으면 빠져나온다
    dfs(node.right, result);

    return result;
  };

  return dfs(node);
};
