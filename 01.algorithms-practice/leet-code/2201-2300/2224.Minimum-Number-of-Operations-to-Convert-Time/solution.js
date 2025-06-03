/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  const [hh1, mm1] = current.split(':');
  const [hh2, mm2] = correct.split(':');

  const gap = hh2 * 60 + mm2 - (hh1 * 60 + mm1);

  // 갭을 구하고, 주어진 60, 15, 5, 1으로 correct 시간까지 올리는데 최소한의 step을 구하는 건데,
  // gap / 60을 하면 1차로 60으로 나누고 그루 60을 나눈 나머지를 다시 15로 나누고 다시 15로 나눈 나머지를 5로 나누고 마지막으로
  // 5로 나눈 나머지를 합하면 된다.

  return Math.floor(gap / 60) + Math.floor((gap % 60) / 15) + Math.floor((gap % 15) / 5) + (gap % 5);
};
