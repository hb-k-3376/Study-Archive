// 1, 할인 설정을 명확하게 정의
// 할인율은 '얼마나 할인하는지'를 직관적으로 표현
const DISCOUNT_CONFIG = {
  GRADE: {
    GOLD: 0.1, // 10% 할인
    SILVER: 0.5, // 5% 할인
  },
  SEASON: {
    1: 0.2, // 20% 할인
    12: 0.2, // 20% 할인
  },
  BULK: {
    THRESHOLD: 10, // 10개 이상 구매시
    RATE: 0.07, // 7% 할인
  },
};

// 2. 각 할인 전략을 독립적인 함수로 정의
const discountStrategies = {
  grade: (price, user) => {
    const discountRate = DISCOUNT_CONFIG.GRADE[user.grade] ?? 0;
    return {
      type: 'GRADE',
      discountRate,
      originalPrice: price,
      discountAmount: price * discountRate,
      finalPrice: price * (1 - discountRate),
    };
  },
  season: (price, date) => {
    const month = date.getMonth() + 1;
    const discountRate = DISCOUNT_CONFIG.SEASON[month] ?? 0;
    return {
      type: 'SEASON',
      discountRate,
      originalPrice: price,
      discountAmount: price * discountRate,
      finalPrice: price * (1 - discountRate),
    };
  },
  bulk: (price, quantity) => {
    const isBulk = quantity >= DISCOUNT_CONFIG.BULK.THRESHOLD;
    const discountRate = isBulk ? DISCOUNT_CONFIG.BULK.RATE : 0;
    return {
      type: 'BULK',
      discountRate,
      originalPrice: price,
      discountAmount: price * discountRate,
      finalPrice: price * (1 - discountRate),
    };
  },
  special: (price, specialDiscount = 0) => {
    return {
      type: 'SPECIAL',
      discountRate: specialDiscount / price,
      originalPrice: price,
      discountAmount: specialDiscount,
      finalPrice: price - specialDiscount,
    };
  },
};

// 함수형 프로그래밍의 파이프라인(Pipeline) 패턴 적용
// 파이프라인 패턴은 순차적인 단계를 걸쳐 값을 받아오는 패턴이다.
// 1. 이전 단계의 결과를 받아서
// 2. 자신의 작업을 수행하고
// 3. 다음 단계로 결과를 전달 한다.
const applyDiscounts = (price, discounts) => {
  // 매개변수로 받은 price는 기존 price이다.

  // 매개변수로 받은 price를 let 변수에 담는다.
  let currentPrice = price;
  const appliedDiscounts = [];

  // discounts로 받은  discountStrategies들을
  // for문을 통해 순차적으로 실행하고
  // 결과로받은 값들을 appliedDiscounts 배열에 담는다.
  // 그리고 currentPrice에 결과값들을 갱신한다.
  // 그러면 다음 discount 함수가 갱신된 currentPrice를 들고 다시 함수를 돌린다.
  for (const discount of discounts) {
    const result = discount(currentPrice);
    appliedDiscounts.push(result);
    currentPrice = result.finalPrice;
  }

  return {
    originalPrice: price,
    finalPrice: currentPrice,
    discounts: appliedDiscounts,
    totalDiscountAmount: price - currentPrice,
    totalDiscountRate: ((price - currentPrice) / price).toFixed(4),
  };
};

// 답
const solution = (product, user, date) => {
  const discounts = [
    (price) => {
      discountStrategies.season(price, date);
    },
    (price) => {
      discountStrategies.bulk(price, product.quantity);
    },
    (price) => {
      discountStrategies.special(price, product.specialDiscount);
    },
    (price) => {
      discountStrategies.grade(price, user);
    },
  ];

  const result = applyDiscounts(product.price, discounts);
  if (result < product.minimumPrice) {
    return {
      ...result,
      finalPrice: product.minimumPrice,
      adjustedForMinimum: true,
    };
  }

  return {
    ...result,
    adjustedForMinimum: false,
  };
};
