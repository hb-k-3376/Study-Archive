const ROLE_CONFIG = {
  ADMIN: ['PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'PENDING'],
  MANAGER: ['PROCESSING', 'SHIPPED'],
  STAFF: ['PROCESSING'],
};

const STATUS_MASSAGE = {
  PROCESSING: ({ id }) => `주문(${id})이 처리 중입니다.`,
  SHIPPED: ({ id }) => `주문(${id})이 발송되었습니다.`,
  DELIVERED: ({ id }) => `주문(${id})이 배송완료되었습니다.`,
};

const solution = (order, newStatus, user) => {
  const canUpdate = checkRole(user, newStatus);
  if (!canUpdate) throw new Error('권한이 없습니다.');

  checkAbleToChangeOrderStatus(order, newStatus);

  checkStockQuantity(order, newStatus);

  const notification = alarmMessage(order, newStatus);

  const updatedItems = updateStock(order, newStatus);

  const resultOrder = {
    ...updatedItems,
    updatedAt: new Date(),
    updatedBy: user.id,
    status: newStatus,
  };

  return { resultOrder, notification };
};

// 상태 변경 권한 확인
const checkRole = (user, newStatus) => {
  return ROLE_CONFIG[user.role].includes(newStatus);
};

// 상태 변경 가능 여부 확인
const checkAbleToChangeOrderStatus = (order, newStatus) => {
  if (order.status === 'DELIVERED' || order.status === 'CANCELLED') {
    throw new Error('완료된 주문은 상태를 변경할 수 없습니다.');
  }

  if (order.status === 'PENDING' && newStatus === 'DELIVERED') {
    throw new Error('잘못된 상태 변경입니다.');
  }
};

const checkStockQuantity = (order, newStatus) => {
  if (newStatus === 'PROCESSING') {
    order.items.forEach((item) => {
      if (item.stockQuantity < item.orderQuantity) {
        throw new Error(`${item.id}의 재고가 부족합니다.`);
      }
    });
  }
};
const alarmMessage = (order, newStatus) => {
  const statusCreator = STATUS_MASSAGE[newStatus];
  return statusCreator(order);
};

const updateStock = (order, newStatus) => {
  if (newStatus === 'PROCESSING') {
    return {
      ...order,
      item: order.items.map((item) => {
        return {
          ...item,
          stockQuantity: item.stockQuantity - item.orderQuantity,
        };
      }),
    };
  }
  return order;
};
