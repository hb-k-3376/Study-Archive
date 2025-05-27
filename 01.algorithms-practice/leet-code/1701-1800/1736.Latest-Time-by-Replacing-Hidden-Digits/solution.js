/**
 * @param {string} time
 * @return {string}
 *
 * 우선 가장 일반적인 조건문으로 문제를 풀어보겠다.
 */

var maximumTime = function (time) {
  const [hh, mm] = time.split(':');

  const [h1, h2] = hh;
  let answer = '';
  /**
   * h1는 h2가 4보다 작으면 2를
   * h2가 >=4 면 1이 최댓 값이다.
   */
  if (h1 === '?') {
    // h1이 ? 이면
    if (h2 !== '?' && h2 >= '4') {
      answer += '1';
    } else {
      answer += '2';
    }
  } else {
    answer += h1;
  }

  /**
   * h2는 h1이 1이면 9,
   * h1이 2라면 3이 최대 값이다.
   */
  if (h2 === '?') {
    if (answer[0] === '2') {
      answer += '3';
    } else {
      answer += '9';
    }
  } else {
    answer += h2;
  }

  answer += ':';

  const [m1, m2] = mm;

  /**
   * m1의 조건을 다시 생각해보면,
   * m2가 어떤 값이 오던지 5가 최대 값이된다.
   */
  if (m1 === '?') {
    answer += '5';
  } else {
    answer += m1;
  }

  /**
   * m2의 조건은 어떤값이 오던지 9가 최대값이다.
   */
  if (m2 === '?') {
    answer += '9';
  } else {
    answer += m2;
  }

  return answer;
};
/**
 *  브루탈 탐색 방법으로 좀거 가독성있게 코드를 만들 수 있다.
 */
var 브루탈탐색방법 = function (time) {
  const [hh, mm] = time.split(':');
  let numH;
  let numM;

  /**
   * hh 부분
   * 9부터 내림 차순으로 ?를 replace를 사용해서 ?를 치환하면서 갑을 변경해간다.
   * replace의 특징은 인덱스 기준으로 가장 앞에 있는 ? 만 치환을하며 변환된 값을 return 한다.
   * 원본은 유지된다
   *
   * < 24 조건을 주어서  replace로 치환한 값을 비교해 24보다 작다면 바로 반복문을 빠져나오면 된다.
   */
  for (let i = 9; i >= 0; i--) {
    if (hh === '??') {
      numH = '23';
      break;
    }
    numH = Number(hh.replace('?', i));
    if (numH < 24) {
      break;
    }
  }

  /**
   * mm 부분
   */
  for (let i = 9; i >= 0; i--) {
    if (mm === '??') {
      numM = '59';
      break;
    }
    numM = Number(mm.replace('?', i));
    if (numM < 60) {
      break;
    }
  }

  return `${String(numH).padStart(2, '0')}:${String(numM).padStart(2, '0')}`;
};
