// 현재 코드: 주문 상태 변경과 관련 작업을 처리하는 함수입니다.
function handleOrderStatus(order, newStatus, user) {
  let canUpdate = false;
  let notification = '';

  // 상태 변경 권한 확인
  if (user.role === 'ADMIN') {
    canUpdate = true;
  } else if (user.role === 'MANAGER' && (newStatus === 'PROCESSING' || newStatus === 'SHIPPED')) {
    canUpdate = true;
  } else if (user.role === 'STAFF' && newStatus === 'PROCESSING') {
    canUpdate = true;
  }

  if (!canUpdate) {
    throw new Error('권한이 없습니다.');
  }

  // 상태 변경 가능 여부 확인
  if (order.status === 'DELIVERED' || order.status === 'CANCELLED') {
    throw new Error('완료된 주문은 상태를 변경할 수 없습니다.');
  }

  if (order.status === 'PENDING' && newStatus === 'DELIVERED') {
    throw new Error('잘못된 상태 변경입니다.');
  }

  // 재고 확인
  if (newStatus === 'PROCESSING') {
    for (let item of order.items) {
      if (item.stockQuantity < item.orderQuantity) {
        throw new Error('재고가 부족합니다.');
      }
    }
  }

  // 상태 변경 시 알림 설정
  if (newStatus === 'PROCESSING') {
    notification = `주문(${order.id})이 처리 중입니다.`;
  } else if (newStatus === 'SHIPPED') {
    notification = `주문(${order.id})이 발송되었습니다.`;
  } else if (newStatus === 'DELIVERED') {
    notification = `주문(${order.id})이 배송완료되었습니다.`;
  }

  // 재고 업데이트
  if (newStatus === 'PROCESSING') {
    for (let item of order.items) {
      item.stockQuantity -= item.orderQuantity;
    }
  }

  order.status = newStatus;
  order.updatedAt = new Date();
  order.updatedBy = user.id;

  return {
    order,
    notification,
  };
}

// 테스트 데이터
const order = {
  id: 'ORD001',
  status: 'PENDING',
  items: [
    { id: 'ITEM1', orderQuantity: 2, stockQuantity: 5 },
    { id: 'ITEM2', orderQuantity: 1, stockQuantity: 3 },
  ],
  updatedAt: null,
  updatedBy: null,
};

const user = {
  id: 'USR001',
  role: 'MANAGER',
};
