// 상수 분리 및 매직 넘버 제거
const DISCOUNT_CONFIG = {
  NEW_BOOK: 0.1,
  OLD_BOOK: 0.2,
  EXPENSIVE_ELECTRONICS: 0.05,
  VIP: 0.05,
};
// 할인이 적용될 ELECTRONICS price
const DISCOUNT_ELECTRONICS_PRICE = 100000;

// discountStrategies
// strategy 패턴을 사용하여 코드는 더욱 간결하고
// 코드의 확장성을 높였다
const discountStrategies = {
  BOOK: ({ isNew }) => (isNew ? DISCOUNT_CONFIG.NEW_BOOK : DISCOUNT_CONFIG.OLD_BOOK),
  ELECTRONICS: ({ price }) => (price > DISCOUNT_ELECTRONICS_PRICE ? DISCOUNT_CONFIG.EXPENSIVE_ELECTRONICS : 0),
};

// solution
const solution = (cartItems, userType) => {
  const totalAmount = getTotalAmount(cartItems);
  const discountAmount = getDiscountAmount(cartItems);
  const isVIP = checkVIP(userType);

  const VIPdiscount = isVIP ? totalAmount * DISCOUNT_CONFIG.VIP : totalAmount;

  return VIPdiscount - discountAmount;
};

// 합계를 구하는 함수
const getTotalAmount = (cart) => {
  return cart.price * cart.quantity;
};

// 할인된 값을 구하는 함수
const getDiscountAmount = (cart) => {
  // strategy 패턴을 사용하여 코드는 더욱 간결하고
  // 코드의 확장성을 높였다
  const totalAmount = getTotalAmount(cart);
  const totalDiscountAmount = cart.reduce((acc, item) => {
    const strategy = discountStrategies[item.type];
    const discountRate = strategy ? strategy(item) : 0;
    return acc - totalAmount * discountRate;
  }, totalAmount);

  return totalAmount - totalDiscountAmount;
};

// vip 체크
const checkVIP = (userType) => {
  return userType === 'VIP';
};
