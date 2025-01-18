const DISCOUNT_CONFIG = {
  GOLD: 0.9,
  SILVER: 0.95,
};

const SEASON_DISCOUNT_CONFIG = {
  1: 0.8,
  12: 0.8,
};

const BULK_DISCOUNT_EACH = 10;
const BULK_DISCOUNT_RATE = 0.93;

const DISCOUNT_STRATEGY = {
  season: (price, month) => {
    return price * (1 - (SEASON_DISCOUNT_CONFIG[month] ?? 0));
  },
  bulk: (price, quantity) => {
    const discountRate = quantity >= BULK_DISCOUNT_EACH ? BULK_DISCOUNT_RATE : 0;
    return price * (1 - discountRate);
  },
  special: (price, specialDiscount) => {
    return price - (specialDiscount ?? 0);
  },
};

const calculatePrice = (price) => {
  return price;
};

const withGradeDiscount = (fn) => {
  return function (price, user) {
    const price = fn(price);
    const discountRate = DISCOUNT_CONFIG[user.grade] ?? 1;
    return price * discountRate;
  };
};

const solution = (product, user, date) => {
  const month = date.getMonth() + 1;
  const seasonDiscountAmount = DISCOUNT_STRATEGY.season(product.price, month);
  const bulkDiscountAmount = DISCOUNT_STRATEGY.bulk(product.price, product.quantity);
  const specialDiscountAmount = DISCOUNT_STRATEGY.special(product.price, product.specialDiscount);
  const discountAmountWithSeasonBulkSpecial =
    product.price - seasonDiscountAmount - bulkDiscountAmount - specialDiscountAmount;

  const calculateGradePrice = withGradeDiscount(calculatePrice);
  const gradePrice = calculateGradePrice(discountAmountWithSeasonBulkSpecial);

  if (gradePrice < product.minimumPrice) {
    return product.minimumPrice;
  }
  return gradePrice;
};
