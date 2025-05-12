/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitDP = function (prices) {
  // 동적 프그래밍
  const len = prices.length;
  // 각 날에 대한 최대 이윤을 저장하는 배열
  const dp = Array(len).fill(0);

  // 첫날을 기준으로
  let minPrice = prices[0];

  for (let i = 1; i < len; i++) {
    // 첫쩃날은 0 두번쨋날 부터 지금 가격과 지금까지 가장 낮은 가격을 빼서 더 큰 값을 저장
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);

    // 오늘 가격과 현재까지 가장 낮은 가격중 더 낮은 가격 저장
    minPrice = Math.min(minPrice, prices[i]);
  }
  return dp[len - 1];
};

// 그냥 알고리즘
var maxProfit = function (prices) {
  // 가장 작은 값
  let minPrice = Infinity;
  // 현재까지 가장 큰 이윤
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // 현재 작은 값과 작은 값 이면 초기화
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // 현재 최대 이윤 보다 더 큰 이윤이 나면
    else if (maxProfit < prices[i] - minPrice) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};
