export {};

function processOrder(order, action, user) {
  let message = '';
  let isAllowed = false;

  // 권한 확인
  if (user.type === 'ADMIN') {
    isAllowed = true;
  } else if (user.type === 'MANAGER' && action === 'approve') {
    isAllowed = true;
  }

  if (!isAllowed) {
    return { success: false, message: '권한이 없습니다.' };
  }

  // 주문 금액 계산
  let totalAmount = 0;
  for (let item of order.items) {
    let itemPrice = item.price;
    if (item.type === 'FOOD') {
      itemPrice = itemPrice * 1.1; // 식품의 경우 10% 할증
    }
    if (item.discount) {
      itemPrice = itemPrice * 0.9; // 할인 상품 10% 할인
    }
    totalAmount += itemPrice * item.quantity;
  }

  // 주문 처리
  if (action === 'approve') {
    if (totalAmount > 1000000) {
      return { success: false, message: '100만원 이상 주문은 처리할 수 없습니다.' };
    }
    order.status = 'APPROVED';
    message = '주문이 승인되었습니다.';
  } else if (action === 'reject') {
    order.status = 'REJECTED';
    message = '주문이 거절되었습니다.';
  }

  return {
    success: true,
    message: message,
    totalAmount: totalAmount,
  };
}

// 테스트용 데이터
const order = {
  id: 'ORDER_001',
  status: 'PENDING',
  items: [
    { type: 'FOOD', price: 10000, quantity: 2, discount: false },
    { type: 'ELECTRONICS', price: 50000, quantity: 1, discount: true },
  ],
};

const user = {
  id: 'USER_001',
  type: 'MANAGER',
};
