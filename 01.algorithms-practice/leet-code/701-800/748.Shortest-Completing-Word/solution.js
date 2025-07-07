/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const map = new Map();
  // 분포도 조사
  for (const c of licensePlate) {
    // 숫자가 아닌 경우에만 map에 담음
    if (c.match(/[a-zA-Z]/)) {
      const lowerChar = c.toLowerCase();
      map.set(lowerChar, (map.get(lowerChar) ?? 0) + 1);
    }
  }

  let shortWord = 'aaaaaaaaaaaaaaa';

  // words를 반복문을 돌려서 단어 하나씩 체크
  for (const word of words) {
    const copied = structuredClone(map);
    // 꺼낸 단어를 글자 단위로 체크
    for (const c of word) {
      const lowerChar = c.toLowerCase();
      if (copied.has(lowerChar)) {
        // 매칭 되는 글자를 하나씩 빼준다.
        copied.set(lowerChar, copied.get(lowerChar) - 1);

        // 요소가 0이 되면 요소를 아예 삭제
        if (copied.get(lowerChar) === 0) {
          copied.delete(lowerChar);
        }
      }
    }
    // 요소가 전부 지워져서 map의 사이즈가 0이면
    if (copied.size === 0) {
      shortWord = shortWord.length > word.length ? word : shortWord;
    }
  }
  return shortWord;
};

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var 최적화 = function (licensePlate, words) {
  const map = new Map();
  // 분포도 조사
  for (const c of licensePlate) {
    // 숫자가 아닌 경우에만 map에 담음
    if (c.match(/[a-zA-Z]/)) {
      const lowerChar = c.toLowerCase();
      map.set(lowerChar, (map.get(lowerChar) ?? 0) + 1);
    }
  }

  let minLength = Number.MAX_SAFE_INTEGER;
  let result = '';
  // words를 반복문을 돌려서 단어 하나씩 체크
  for (const word of words) {
    const check = new Map();
    let isMatched = true;
    if (minLength > check.length) {
      for (const c of word) {
        const lowerChar = c.toLowerCase();
        if (map.has(lowerChar)) {
          check.set(lowerChar, (check.get(lowerChar) ?? 0) + 1);
        }
      }

      for (const [key, value] of check) {
        if (map.get(key) !== value) {
          isMatched = false;
          break;
        }
      }

      if (isMatched) {
        result = word;
        minLength = word.length;
      }
    }
  }
};
