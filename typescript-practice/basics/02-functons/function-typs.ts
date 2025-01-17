export {};

// 기본적인 함수 타입 선언
// 매개변수와 반환값의 타입을 명시적으로 지정합니다.
function greet(name: string): string {
  return `Hello, ${name}`;
}

// 화살표 함수 사용
const multiply = (x: number, y: number): number => {
  return x * y;
};

// 선택적 매개변수
// lastName은 선택적이므로 제공하지 않아도 된다.
const createFullName = (firstName: string, lastName?: string): string => {
  // lastName이 제공되지 않았을 때를 대비한 조건문
  return lastName ? `${firstName} ${lastName}` : firstName;
};

// 기본값 매개변수
// greeting의 기본값은 "Hello"
const sayHello = (name: string, greeting: string = 'Hello'): string => {
  return `${greeting}, ${name}`;
};

// 나머지 매개변수 (Rest Parameters)
// 여러 개의 숫자를 반아서 합계를 계산합니다.
const sum = (...numbers: number[]): number => {
  return numbers.reduce((total, num) => total + num, 0);
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// 실습 문제:
// 1. 다음 함수를 구현해보세요:
//    calculateArea라는 함수를 만들고, 두 가지 방식으로 동작하게 해보세요
//    - 원의 넓이: 반지름 하나만 받아서 계산 (π * r²)
//    - 사각형의 넓이: 가로, 세로 두 개의 값을 받아서 계산
const calculateArea = (x: number, y: number): number => {
  return x * y;
};

// 2. 학생의 점수들을 받아서 평균을 계산하는 함수를 만들어보세요
//    - 반드시 하나 이상의 점수가 제공되어야 합니다
//    - 점수는 0점 이상 100점 이하여야 합니다
//    - 평균은 소수점 첫째 자리까지만 반환합니다
const getAverage = (...number: number[]): number => {
  const total = number.reduce((total, num) => total + num, 0);
  return Number((total / number.length).toFixed(1));
};

// 3. 사람의 이름과 나이를 받아서 자기소개 문장을 만드는 함수를 작성해보세요
//    - 나이는 선택적으로 받습니다
//    - 나이가 제공되면 "안녕하세요, 저는 00살의 000입니다."
//    - 나이가 없으면 "안녕하세요, 저는 000입니다."
const introduce = (name: string, age?: number): string => {
  return age ? ` 안녕하세요 저는 ${age}살의 ${name}입니다.}` : ` 안녕하세요 저는 ${name}입니다.}`;
};
