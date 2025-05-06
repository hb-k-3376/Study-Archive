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
