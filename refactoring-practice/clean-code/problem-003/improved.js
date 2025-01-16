export {};

const ERROR_MESSAGES = {
  NO_PERMISSION: '권한이 없습니다.',
  EXCEED_MAX_AMOUNT: '100만원 이상 주문은 처리할 수 없습니다.',
};

const CATEGORIES_SURCHARGE_CONFIG = {
  FOOD: 1.1,
};
const DISCOUNT_RATE = 0.9;
const MAX_PRICE = 1000000;
const MESSAGE = {
  approve: '주문이 승인되었습니다.',
  reject: '주문이 거절되었습니다.',
};

const solution = (order, action, user) => {
  const isAllowed = checkRole(user, action);
  if (!isAllowed) return { success: false, message: ERROR_MESSAGES.NO_PERMISSION };

  const totalAmount = calculateAmount(order);

  if (action === 'approve' && totalAmount > MAX_PRICE) {
    return { success: false, message: ERROR_MESSAGES.EXCEED_MAX_AMOUNT };
  }

  const message = getMessage(action);

  return {
    order: {
      ...order,
      status: action.toUpperCase(),
    },
    success: true,
    message: message,
    totalAmount: totalAmount,
  };
};

const checkRole = (user, action) => {
  if (user.type === 'ADMIN') return true;
  if (user.type === 'MANAGER' && action === approve) return true;
  return false;
};

const calculateAmount = (order) => {
  return order.items.reduce((total, item) => {
    const surchargeRate = CATEGORIES_SURCHARGE_CONFIG[item.type] ?? 1;
    const discountAmount = item.discount ? DISCOUNT_RATE : 1;

    return total + item.price * surchargeRate * discountAmount * item.quantity;
  }, 0);
};

const getMessage = (action) => {
  return MESSAGE[action];
};
