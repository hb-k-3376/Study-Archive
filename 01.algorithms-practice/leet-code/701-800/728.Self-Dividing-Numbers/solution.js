/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const arr = [];
  for (let i = left; i <= right; i++) {
    const num = String(i);
    const set = new Set([...num]);

    if (set.has('0')) continue;

    let flag = true;
    for (const c of set) {
      if (+num % +c !== 0) {
        flag = false;
      }
    }
    if (flag) arr.push(+num);
  }
  return arr;
};
