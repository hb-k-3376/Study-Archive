/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let one = m - 1; // nums1의 마지막 요소가 있는 인덱스
  let two = n - 1; // nums2의 마지막 요소가 있는 인덱스
  let three = m + n - 1;

  // 둘 중 하나라도 먼저 소진 된다면 반복문을 중단한다.
  while (one >= 0 && two >= 0) {
    // nums1 이 더 큰 경우
    if (nums1[one] > nums2[two]) {
      nums1[three] = nums1[one];
      one--;
    }
    // nums1이 작거나 같은 경우
    else {
      nums1[three] = nums2[two];
      two--;
    }
    three--;
  }
  // 만약 two가 남아있는 경우
  if (two >= 0) {
    for (let i = 0; i <= two; i++) {
      nums1[i] = nums2[i];
    }
  }
};
