var twoSum = function (nums, target) {
  // 먑 객체를 선언
  const map = new Map();

  // nums 배열 탐색
  for (let i = 0; i < nums.length; i++) {
    // 보수 계산
    const complement = target - nums[i];

    // map에 보수가 있나 확인 후 있으면 return
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    // 배열의 el을 맵에 저장 [ el : index ]
    map.set(nums[i], i);
  }
};
