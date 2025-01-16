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
