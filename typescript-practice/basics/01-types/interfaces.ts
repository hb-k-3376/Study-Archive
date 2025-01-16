export {};

// 기본적인 인터페이스
interface Person {
  name: string;
  age: number;
}

// 인터 페이스를 사용하는 객체 생성
const person1: Person = {
  name: 'Kim',
  age: 33,
  // 다른 속성 추가시 에러 발생
};

// 선택적 속성 (Optional Properties)
interface Car {
  brand: string;
  model: string;
  year?: number; // ? 는 이 속성이 있어도 없어도 된다는 의미이다.
}

const myCar: Car = {
  brand: 'Toyota',
  model: 'Camry',
  // year는 선택적이므로 없어도 된다.
};

// 앍기 전용 속성 (Readonly Properties)
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 30 에러 발생

// 함수 타입을 가진 인터페이스
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;
const multiply: MathFunc = (x, y) => x * y;

// 타입 별칭 ( Type Alias )
// 인터페이스와 비슷하지만 더 다양한 타입을 정의할 수 있다.
type StringOrNumber = string | number;
type PersonType = {
  name: string;
  age: number;
};
