/**
 * 숫자로만 이루어진 배열 nums 가 주어 지고, i가 nums 의 인덱스 라고 했을때,  중간 값(최솟값과 최댓값의 사이) 에 가장 가까운 값 nums[i]의 인덱스 를 구하세요. 만약 동일한 값 이 있다면 더 큰 인덱스 값 을 반환 하세요.
 */
const getTheClosestIndex = (nums) => {
  const max = Math.max(...nums); // 최댓값
  const min = Math.min(...nums); // 최솟값

  const middle = (max + min) / 2; // 중간값

  if (nums.includes(middle)) return nums.indexOf(middle); // 중간 값이 존재한다면 바로 인덱스 반환

  let minGap = Math.abs(nums[0] - middle); // 기준 값

  let closestIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    const gap = Math.abs(nums[i] - middle); // 인덱스 별 gap

    // 현재 gap이 더작거나 값이 같은데 인덱스가 더 큰 경우
    if (gap < minGap || (gap === minGap && i > closestIndex)) {
      minGap = gap;
      closestIndex = i;
    }
  }

  return closestIndex;
};
