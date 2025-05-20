var romanToInt = function (s) {
  // 해시 테이블로 매칭할 값들을 정의한다.
  const matchNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // 현재 값을 출력
    const current = matchNum[char];
    // 다음 값을 출력 만약 마지막 반복문이라면 0 을 반환
    const next = i < s.length - 1 ? matchNum[s[i + 1]] : 0;
    // 지금 값과 다음 값을 비교하여 연산
    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};
