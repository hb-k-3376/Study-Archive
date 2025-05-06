var romanToInt = function (s) {
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
    const current = matchNum[char];
    const next = i < s.length - 1 ? matchNum[s[i + 1]] : 0;

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};

/**
 * 우선 해시테이블로 값을 만들어준다.
 * 이 로마숫자의 규칙은 지금 숫자와 다음 숫자를 비교해서 지금숫자가 더 크면  더해주고 작으면 빼주면 쉽게 값을 구할 수 있다.
 * 현재 값을 해시 테이블에 매칭하여 값을 가져오고 다음 값을 또 해시 테이블에서 가져오는데 만약 다음 숫자가 없다면 (지금 값이 제일 마지막인 값)
 * 다음 값이 0이므로 현재 값을 다해준다.
 */
