const ERROR_MESSAGE = {
  AFTER_ORDER: '상품 구매 후에만 리뷰를 작성할 수 있습니다.',
  OVER_30DAYS: '구매 후 30일이 지난 상품은 리뷰를 작성할 수 없습니다.',
  HAS_NOT_OWNERSHIP: '자신의 리뷰만 수정할 수 있습니다.',
  OVER_THREE_TIME: '리뷰는 최대 3회까지만 수정할 수 있습니다.',
  MINIUM_10_CHAR: '리뷰는 최소 10자 이상 작성해야 합니다.',
  WRONG_POINT: '평점은 1-5 사이여야 합니다.',
  HAS_NOT_DELETE_ROLE: '리뷰 삭제 권한이 없습니다.',
  FAILED: '실패하였습니다.',
};

const COMMON_MESSAGE = {
  POSTED: '리뷰가 등록되었습니다.',
  MODIFIED: '리뷰가 수정되었습니다.',
  DELETE: '리뷰가 삭제되었습니다.',
};
const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
const REVIEW_COUNT = 3;
const REVIEW_TIME_LIMIT = 30;
const MINIUM_LENGTH = 10;
const REVIEW_POINT = {
  MINIUM: 1,
  MAXIMUM: 5,
};

const reviewValidator = {
  create: {
    validatePurchase: async (user, review) => {
      const order = await findOrder(user.id, review.productId);
      if (!order) {
        throw Error(`ERROR : ${ERROR_MESSAGE.AFTER_ORDER}`);
      }
      return order;
    },
    validateTimeLimit: (order) => {
      const now = new Date();
      const orderDate = new Date(order.completedAt);
      const daysSinceOrder = (now - orderDate) / MILLISECONDS_IN_DAY;
      if (daysSinceOrder > REVIEW_TIME_LIMIT) {
        throw Error(`ERROR : ${ERROR_MESSAGE.OVER_30DAYS}`);
      }
      return true;
    },
    validator: async (user, review) => {
      try {
        const order = await validatePurchase(user, review);
        validateTimeLimit(order);
        return { success: true };
      } catch (error) {
        return {
          success: false,
          message: '실패!',
        };
      }
    },
  },

  update: {
    validateOwnerShip: (review, user) => {
      if (review.userId !== user.id) {
        throw Error(`ERROR : ${ERROR_MESSAGE.HAS_NOT_OWNERSHIP}`);
      }
    },
    validateReviewCount: (review) => {
      if (review.updateCount >= REVIEW_COUNT) {
        throw Error(`ERROR : ${ERROR_MESSAGE.OVER_THREE_TIME}`);
      }
    },

    validator: (review, user) => {
      try {
        validateOwnerShip(review, user);
        validateReviewCount(review);

        return {
          success: true,
        };
      } catch (error) {
        return {
          success: false,
          message: `ERROR : ${error}`,
        };
      }
    },
  },

  delete: {
    validateDelete: (review) => {
      if (review.userId !== user.id && user.role !== 'ADMIN') {
        throw Error(`ERROR : ${ERROR_MESSAGE.HAS_NOT_DELETE_ROLE}`);
      }
    },
    validator: async (review) => {
      try {
        await validateDelete(review);
        return {
          success: true,
        };
      } catch (error) {
        return {
          success: false,
          message: `ERROR : ${error}`,
        };
      }
    },
  },
};

const reviewContentValidator = (review) => {
  if (review.content.length > MINIUM_LENGTH) {
    return { success: false, message: ERROR_MESSAGE.MINIUM_10_CHAR };
  }
  if (review.rating < REVIEW_POINT.MINIUM || review.rating > REVIEW_POINT.MAXIMUM) {
    return { success: false, message: ERROR_MESSAGE.WRONG_POINT };
  }
};

const updateReview = {
  create: {
    updateReview: (review) => {
      return {
        ...review,
        createDate: new Date(),
        updateCount: 0,
      };
    },

    validator: (review) => {
      try {
        const updatedReview = updateReview(review);

        return {
          success: true,
          updatedReview,
          message: COMMON_MESSAGE.POSTED,
        };
      } catch (error) {
        return {
          success: false,
          message: ERROR_MESSAGE.FAILED,
        };
      }
    },
  },

  update: {
    updateReview: (review) => {
      return {
        ...review,
        createDate: new Date(),
        updateCount: review.updateCount + 1,
      };
    },
    validator: (review) => {
      try {
        const updatedReview = updateReview(review);

        return {
          success: true,
          updatedReview,
          message: COMMON_MESSAGE.MODIFIED,
        };
      } catch (error) {
        return {
          success: false,
          message: ERROR_MESSAGE.FAILED,
        };
      }
    },
  },
  delete: {
    validator: (review) => {
      try {
        deleteReview(review.id);

        return {
          success: true,
          message: COMMON_MESSAGE.DELETE,
        };
      } catch (error) {
        return {
          success: false,
          message: ERROR_MESSAGE.FAILED,
        };
      }
    },
  },
};

const solution = (review, action, user) => {
  const roleValidator = reviewValidator[action];
  const hasRole = roleValidator(user, review);

  if (!hasRole.success) {
    throw Error(`ERROR : ${hasRole.message}`);
  }

  const result = reviewContentValidator(review);
  if (!result.success) {
    throw Error(`ERROR : ${result.message}`);
  }

  const reviewValidator = updateReview[action];
  const reviewResult = reviewValidator(review);

  if (reviewResult) {
    updateProductRating(review.productId);
  }

  return {
    success: true,
    message: reviewResult.message,
  };
};
