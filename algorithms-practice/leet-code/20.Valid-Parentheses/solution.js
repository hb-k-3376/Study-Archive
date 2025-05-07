/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  // 우선 괄호들을 매칭하기 위한 해시맵을 만든다.
  const map = {
    ']': '[',
    '}': '{',
    ')': '(',
  };
  // string  arr으로 변환
  const bracketArr = s.split('');
  // 값을 저장할 스택
  const stack = [];

  for (let i = 0; i < bracketArr.length; i++) {
    const bracket = bracketArr[i];

    // 열린 괄호 인 경우
    if (map[bracket] === undefined) {
      // 스택에 저장
      stack.push(bracket);
    }
    // 닫힌 괄호 인 경우
    else {
      //  스택에 값이 없는 경우거나 stack의 마지막 값과 현재 값이 매칭이 안되는 경우
      if (stack.length === 0 || stack.pop() !== map[bracket]) {
        return false;
      }
    }
    return stack.length === 0;
  }
}
