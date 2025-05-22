function handleReview(review, action, user) {
  let message = '';

  // 리뷰 작성/수정 권한 확인
  if (action === 'create') {
    const order = findOrder(user.id, review.productId);
    if (!order) {
      return { success: false, message: '상품 구매 후에만 리뷰를 작성할 수 있습니다.' };
    }

    const orderDate = new Date(order.completedAt);
    const now = new Date();
    const daysSinceOrder = (now - orderDate) / (1000 * 60 * 60 * 24);

    if (daysSinceOrder > 30) {
      return { success: false, message: '구매 후 30일이 지난 상품은 리뷰를 작성할 수 없습니다.' };
    }
  } else if (action === 'update') {
    if (review.userId !== user.id) {
      return { success: false, message: '자신의 리뷰만 수정할 수 있습니다.' };
    }

    if (review.updateCount >= 3) {
      return { success: false, message: '리뷰는 최대 3회까지만 수정할 수 있습니다.' };
    }
  }

  // 리뷰 내용 검증
  if (review.content.length < 10) {
    return { success: false, message: '리뷰는 최소 10자 이상 작성해야 합니다.' };
  }

  if (review.rating < 1 || review.rating > 5) {
    return { success: false, message: '평점은 1-5 사이여야 합니다.' };
  }

  // 리뷰 처리
  if (action === 'create') {
    review.createDate = new Date();
    review.updateCount = 0;
    message = '리뷰가 등록되었습니다.';

    // 상품 평점 업데이트
    updateProductRating(review.productId);
  } else if (action === 'update') {
    review.updateDate = new Date();
    review.updateCount += 1;
    message = '리뷰가 수정되었습니다.';

    // 상품 평점 업데이트
    updateProductRating(review.productId);
  } else if (action === 'delete') {
    if (review.userId !== user.id && user.role !== 'ADMIN') {
      return { success: false, message: '리뷰 삭제 권한이 없습니다.' };
    }

    deleteReview(review.id);
    message = '리뷰가 삭제되었습니다.';

    // 상품 평점 업데이트
    updateProductRating(review.productId);
  }

  return {
    success: true,
    message: message,
  };
}

// 상품 평점 업데이트 함수
function updateProductRating(productId) {
  const reviews = findReviewsByProductId(productId);
  if (reviews.length === 0) return;

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  updateProductAverageRating(productId, averageRating);
}

// 테스트용 데이터
const review = {
  id: 'REVIEW_001',
  productId: 'PRODUCT_001',
  userId: 'USER_001',
  rating: 4,
  content: '아주 좋은 상품입니다.',
  createDate: null,
  updateDate: null,
  updateCount: 0,
};

const user = {
  id: 'USER_001',
  role: 'USER',
};
