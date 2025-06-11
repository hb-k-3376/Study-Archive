/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const answer = []; // 정답 변수
  let start = 0; // 시작 포인터

  for (let i = 1; i < nums.length; i++) {
    // 연속된 숫자면 pass
    if (nums[i - 1] - nums[i] === -1) {
      continue;
    }
    // 만약 단일 숫자면 바로 저장하고 pass
    if (nums[start] === nums[i - 1]) {
      answer.push(String(nums[start]));
      start = i; // 다음 포인터로 이동
      continue;
    }

    // 위와 같은 조건에 걸리지 않으면 연속된 숫자였다가 연속이 끝난 상태
    answer.push(`${nums[start]}->${nums[i - 1]}`);
    start = i; // 다음 포인터로 이동
  }

  // 마지막 인덱스 처리
  if (start === nums.length - 1) {
    answer.push(String(nums[start]));
  } else {
    answer.push(`${nums[start]}->${nums[nums.length - 1]}`);
  }
  return answer;
};
