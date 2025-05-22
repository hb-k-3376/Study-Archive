/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  // 이미 계산한 값을 저장
  const ways = {
    1: 1,
    2: 2,
  };
  // n 에 대한 값을 구하기 위해서느 n-1 , n-2 까지 ways을 채워야한다.
  // ways에 1부터 n까지의 경우의 수를 모두 저장 후 마지막에 ways[n]의 값을 리턴한다.
  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  return ways[n];
};

/**
 * 재쉬함수를 사용하여 구현 한 결과
 *
 * @param {number} n
 * @return {number}
 */
var recursiveFn = function (n) {
  // 계산 결과 저장
  const memo = {};

  const dp = (x) => {
    if (memo[x] !== undefined) return memo[x];

    if (x === 1) return 1;
    if (x === 2) return 2;

    memo[x] = dp(x - 1) + dp(x - 2);

    return memo[x];
  };

  return dp(n);
};
