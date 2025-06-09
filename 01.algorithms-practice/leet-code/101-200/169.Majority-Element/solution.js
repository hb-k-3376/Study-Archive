/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hash = {};

  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }

  return +Object.entries(hash).sort((a, b) => b[1] - a[1])[0][0];
};

var boyerMoore = function (nums) {
  // 보이어 무어 투표 알고리즘은 상쇄라는 개념을 생각하면 쉽다
  // 전제 조건은 과반수 이상인 값이 존배하기 떄문에 과반수 요소 - 나머지 를 해도
  // 카운트는 0 보다 크기 때문에 상쇄를 할 수 있다.

  let count = 0; // 카운트
  let candidate = 0; // 후보자

  for (const num of nums) {
    // 카운트가 0일이면 후보자를 교체한다.
    // 첫번쨰 반복은 제일 첫번째 후보자를 첫번쨰 요소로 등록된다.
    if (count === 0) {
      candidate === num;
    }
    // 등록된 후보자와 요소가 같다면 +1 을 아니라면 -1을 해준다.
    // 이때 카운트가 0이 되면 후보자를 교체할 수 도 있다.
    count += candidate === num ? 1 : -1;
  }
  return candidate;
};
