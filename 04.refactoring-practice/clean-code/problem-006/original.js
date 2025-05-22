function calculateDiscount(product, user, date) {
  let finalPrice = product.price;

  // 회원 등급별 할인
  if (user.grade === 'GOLD') {
    finalPrice = finalPrice * 0.9;
  } else if (user.grade === 'SILVER') {
    finalPrice = finalPrice * 0.95;
  }

  // 시즌 할인
  const month = date.getMonth() + 1;
  if (month === 12 || month === 1) {
    finalPrice = finalPrice * 0.8;
  }

  // 대량 구매 할인
  if (product.quantity >= 10) {
    finalPrice = finalPrice * 0.93;
  }

  // 특별 할인 상품
  if (product.specialDiscount) {
    finalPrice = finalPrice - product.specialDiscount;
  }

  // 최소 판매가 보다 낮아질 수 없음
  if (finalPrice < product.minimumPrice) {
    finalPrice = product.minimumPrice;
  }

  return finalPrice;
}

// 테스트 데이터
const product = {
  id: 'P001',
  name: '겨울 자켓',
  price: 100000,
  quantity: 1,
  specialDiscount: 5000,
  minimumPrice: 50000,
};

const user = {
  id: 'U001',
  grade: 'GOLD',
};
