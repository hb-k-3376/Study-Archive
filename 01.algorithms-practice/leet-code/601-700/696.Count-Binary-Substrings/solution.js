/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let slow = 0;

  const arr = [];

  for (let fast = 1; fast <= s.length; fast++) {
    const startNum = s[slow];

    if (startNum !== s[fast]) {
      arr.push(fast - slow);
      startNum = s[fast];
      slow = fast;
    }
  }

  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    count += Math.min(arr[i], arr[i - 1]);
  }

  return count;
};

// 최적화된 방법
var fn = function (s) {
  let count = 0;
  let prevCount = 0;
  let currentCount = 1;

  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      currentCount++;
    } else {
      count += Math.min(currentCount, prevCount);
      prevCount = currentCount;
      currentCount = 1;
    }
  }
};
