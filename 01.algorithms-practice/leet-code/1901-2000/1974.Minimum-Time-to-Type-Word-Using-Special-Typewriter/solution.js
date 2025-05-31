/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let step = 0; // 이동 거리
  let pointer = 'a'.charCodeAt(); // 초기 포인터

  for (const c of word) {
    const target = c.charCodeAt(); // 이동할 자판
    // 타겟과 현재 위치가 같을 경우 넘어감
    if (pointer === target) continue;
    const dist = Math.abs(target - pointer); // 이동할 거리 측정

    if (dist > 13) {
      // 이동할 거리가 13보다 멀면 시계 반대 방향으로 이동
      step += 26 - dist;
    }
    // 이동할 거리가 13과 같거나 작은 경우는 시계 방향으로 이동
    else {
      step += dist;
    }

    pointer = target; // 포인터 이동
  }

  return step + word.length;
};
