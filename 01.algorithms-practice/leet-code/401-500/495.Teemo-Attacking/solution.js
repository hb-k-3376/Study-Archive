/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
// var findPoisonedDuration = function (timeSeries, duration) {
//   let damage = 0; // 데미지 누산

//   for (let i = 0; i < timeSeries.length; i++) {
//     //  다음요소가 존재한다면?
//     if (timeSeries[i + 1]) {
//       const gap = timeSeries[i + 1] - timeSeries[i]; // 공격의 텀 계산
//       damage += gap >= duration ? duration : gap;
//     } else {
//       // 마지막 공격은 duration 전부
//       damage += duration;
//     }
//   }

//   return damage;
// };

var findPoisonedDuration = function (timeSeries, duration) {
  let damage = 0; // 데미지 누산

  for (let i = 0; i < timeSeries.length - 1; i++) {
    const gap = timeSeries[i + 1] - timeSeries[i]; // 공격의 텀 계산
    damage += Math.min(gap, duration);
  }

  return damage + duration;
};
