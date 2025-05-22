function cancelOrder(order, user) {
  // 주문 취소 가능 여부 확인
  if (order.status === 'DELIVERED') {
    throw new Error('배송 완료된 주문은 취소할 수 없습니다.');
  }

  const now = new Date();
  const orderDate = new Date(order.orderDate);
  const daysSinceOrder = (now - orderDate) / (1000 * 60 * 60 * 24);

  if (daysSinceOrder > 7) {
    return {
      success: false,
      message: '주문 후 7일이 지난 주문은 취소할 수 없습니다.',
    };
  }

  // 권한 확인
  if (user.id !== order.userId && user.role !== 'ADMIN') {
    return {
      success: false,
      message: '주문 취소 권한이 없습니다.',
    };
  }

  // 환불 금액 계산
  let refundAmount = order.totalAmount;

  // 배송 준비 중인 경우 10% 차감
  if (order.status === 'PREPARING') {
    refundAmount = refundAmount * 0.9;
  }

  // 재고 복구
  for (let item of order.items) {
    item.product.stock += item.quantity;
    // 재고 변경 로그
    console.log(`상품 ${item.product.id} 재고 ${item.quantity}개 복구`);
  }

  // 주문 상태 변경
  order.status = 'CANCELLED';
  order.cancelDate = new Date();
  order.refundAmount = refundAmount;

  return {
    success: true,
    message: '주문이 취소되었습니다.',
    refundAmount,
  };
}

// 테스트용 데이터
const order = {
  id: 'ORDER_001',
  userId: 'USER_001',
  status: 'PREPARING',
  orderDate: '2024-01-10',
  totalAmount: 50000,
  items: [
    {
      product: { id: 'PRODUCT_001', stock: 10 },
      quantity: 2,
    },
  ],
};

const user = {
  id: 'USER_001',
  role: 'USER',
};
