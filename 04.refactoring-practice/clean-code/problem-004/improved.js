const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
const REFUND_STRATEGY = {
  PREPARING: 0.9,
};

const STATUS_CONFIG = {
  CANCELLED: 'CANCELLED',
  DELIVERED: 'DELIVERED',
  PREPARING: 'PREPARING',
};

const MESSAGE_CONFIG = {
  CANCEL: '주문이 취소 되었습니다.',
  CAN_NOT_CANCEL: '배송 완료된 주문은 취소할 수 없습니다.',
  NO_ACCESS: '주문 취소 권한이 없습니다.',
  OVER_TIME: '주문 후 7일이 지난 주문은 취소할 수 없습니다.',
  ALREADY_DELIVERED: '배송 완료된 주문은 취소할 수 없습니다.',
};

const solution = () => {
  validateCancellation(order, user);
  // 주문 취소금액
  const refundAmount = getRefundAmount(order);

  // 재고 복구
  const restored = restoreQuantity(order);

  return {
    order: {
      ...order,
      status: STATUS_CONFIG.CANCELLED,
      cancelData: new Date(),
      refundAmount: refundAmount,
      items: restored,
    },
    success: true,
    message: MESSAGE_CONFIG.CANCEL,
    refundAmount: refundAmount,
  };
};

// 권한 체크
const checkRole = (order, user) => {
  return user.id === order.userId || user.role === 'ADMIN';
};

// 주문 기간 체크
const getDaysSinceOrder = (order) => {
  const now = new Date();
  const orderDate = new Date(order.orderDate);
  return (now - orderDate) / MILLISECONDS_IN_DAY;
};

const getRefundAmount = (order) => {
  const totalAmount = order.totalAmount;
  const refundRate = REFUND_STRATEGY[order.status] ?? 1;
  return totalAmount * refundRate;
};

const restoreQuantity = (order) => {
  return order.items.map((item) => {
    console.log(`상품 ${item.product.id} 재고 ${item.quantity}개 복구`);
    return {
      ...item,
      product: {
        ...item.product,
        stock: item.product.stock + item.quantity,
      },
    };
  });
};

const validateCancellation = (order, user) => {
  if (order.status === STATUS_CONFIG.DELIVERED) {
    return {
      success: false,
      message: MESSAGE_CONFIG.ALREADY_DELIVERED,
    };
  }
  const hasRole = checkRole(order, user);
  if (!hasRole) {
    return {
      success: false,
      message: MESSAGE_CONFIG.NO_ACCESS,
    };
  }
  const daysSinceOrder = getDaysSinceOrder(order);
  if (daysSinceOrder > 7) {
    return {
      success: false,
      message: MESSAGE_CONFIG.OVER_TIME,
    };
  }
};
