/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  // 계산 된 값을 저장하는 객체
  const cache = {};
  let count = 0; // 연산 카운트

  return function (...args) {
    // 전달 받은 파라미터를 키로 사용하기 위해 string으로 변환
    // map의 키 값으로 사용해야한다.
    const key = JSON.stringify(args);
    // cache에 키가 있는지 없는지 확인
    // 있다면 결과를 바로 리턴
    if (key in cache) {
      return cache[key];
    }
    // 연산 카운트 업
    count++;
    // 연산 apply(this, args) 를 이용해서 호출하는 이유는
    // fn이 객체 메소드이고 객체 안에서 요소를 참조하는 경우 this값을 전달하기 위해서
    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
