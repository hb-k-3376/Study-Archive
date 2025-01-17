export {};

// 1. 필수 매개변수 (Required Parameters)
function addNumber(x: number, y: number): number {
  return x + y;
}

// addNumber(1); // 에러 발생: 두개의 인수가 필요한데 1개만 제공
// addNumber(1,2,3) // 에러 발생: 두개의 인수가 필요한데 3개가 제공됨

// 2. 선택적 매개변수 (Optional Parameters)
function printUserInfo(name: string, age?: number): string {
  if (age !== undefined) {
    return `${name}은(는) ${age}살 입니다.`;
  }
  return `${name}입니다.`;
}

// 3. 기본값 매개변수 (Default Parameters)
function greet(name: string, greeting: string = '안녕하세요'): string {
  return `${greeting}, ${name}님!`;
}

// 4. 나머지 매개변수 (Rest Parameters)
function calculateTotal(...number: number[]): number {
  return number.reduce((sum, num) => sum + num, 0);
}

// 5. 매개변수 구조 분해 (Parameters Destructing)
function printCoordinates({ x, y }: { x: number; y: number }): void {
  console.log(`x: ${x}, y: ${y}`);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// 실습 문제:
// 1. 쇼핑 카트의 총 가격을 계산하는 함수를 만드세요.
//    - 첫 번째 매개변수: 상품 가격들의 배열
//    - 두 번째 매개변수: 할인율 (선택적, 기본값 0)
//    - 세 번째 매개변수: 배송비 (선택적, 기본값 3000)

const getTotalAmount = (items: number[], discountRate?: number, shippingFee: number = 3000): number => {
  const total = items.reduce((sum, item) => sum + item, 0);

  if (!discountRate) {
    return total + shippingFee;
  }
  return total * (total * discountRate) + shippingFee;
};

// 2. 사용자 프로필을 생성하는 함수를 만드세요.
//    - 필수: name, email
//    - 선택: age, address
//    - 구조 분해 할당 사용

const createProfile = ({
  name,
  email,
  age,
  address,
}: {
  name: string;
  email: string;
  age?: number;
  address?: string;
}) => {};

// 3. 학생의 평균 점수를 계산하는 함수를 만드세요.
//    - 첫 번째 매개변수: 학생 이름
//    - 나머지 매개변수: 점수들
const getAverage = (name: string, ...scores: number[]) => {
  const total = scores.reduce((sum, num) => sum + num, 0);
  return total / scores.length;
};
