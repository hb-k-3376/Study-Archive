/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  cost.sort((a, b) => b - a);

  let total = 0;
  for (let i = 0; i < cost.length; i++) {
    if ((i + 1) % 3 !== 0) {
      // 3의 배수로 카운팅이 안되게 (i+1)을 해준 이유는? 인덱스는 0부터 시작힉 뗴문에 3의 배수로 마춰주기 위해
      total += cost[i]; // 가격 카운팅
    }
  }
  return total;
};
