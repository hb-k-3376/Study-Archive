// 다음 코드는 장바구니의 총 금액을 계산하는 함수입니다.
function calculateCart(cartItems, userType) {
  let total = 0;
  let discount = 0;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].type === 'BOOK') {
      total += cartItems[i].price * cartItems[i].quantity;
      if (cartItems[i].isNew) {
        discount += cartItems[i].price * cartItems[i].quantity * 0.1;
      } else {
        discount += cartItems[i].price * cartItems[i].quantity * 0.2;
      }
    } else if (cartItems[i].type === 'ELECTRONICS') {
      total += cartItems[i].price * cartItems[i].quantity;
      if (cartItems[i].price > 100000) {
        discount += cartItems[i].price * cartItems[i].quantity * 0.05;
      }
    } else {
      total += cartItems[i].price * cartItems[i].quantity;
    }
  }

  if (userType === 'VIP') {
    discount += total * 0.05;
  }

  return total - discount;
}

// 테스트용 데이터
const cart = [
  { type: 'BOOK', name: '리액트 기초', price: 45000, quantity: 1, isNew: true },
  { type: 'ELECTRONICS', name: '노트북', price: 1200000, quantity: 1 },
  { type: 'CLOTHING', name: '티셔츠', price: 30000, quantity: 2 },
];
