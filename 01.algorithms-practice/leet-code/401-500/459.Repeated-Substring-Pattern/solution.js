/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length < 2) return false; // 문자열의 길이드 1이하라면 반복문 패턴이 될수 없다.
  const factors = [1]; // 1을 미리 추가해 준다. 이유는 1의 자리로 쭉 반복패턴을 보일수 있기 때문에

  // 약수 구하는 공식
  for (let i = 2; i <= Math.sqrt(s.length); i++) {
    if (s.length % i === 0) {
      factors.push(i);

      if (i !== s.length / i) {
        factors.push(s.length / i);
      }
    }
  }

  // 구해진 약수로 해당 인수 만큼 문자열을 자르고 페어를 이루는 약수로 repeat
  for (let i = 0; i < factors.length; i++) {
    const factor = factors[i];

    const str = s.slice(0, factor).repeat(s.length / factor);
    if (str === s) return true;
  }

  return false;
};
