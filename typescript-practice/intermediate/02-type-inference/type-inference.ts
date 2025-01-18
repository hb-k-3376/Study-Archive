export {};

// 1. 변수 타입 추론
let message = 'Hello'; // 자동으로 string 타입으로 추론
// message = 42  // 에러 : string 타입에 number를 할당할 수 없음

// 배열 타입 추론
let number = [1, 2, 3]; // number[]로 추론
let mixed = [1, 'hello', true]; // (string | number | boolean)[] 로 추론

// 2. 객체 타입 추론
let user = {
  name: 'kim',
  age: 25,
  isStudent: true,
}; // {name: string, age: number, isStudent : boolean} 으로 추론

// 3. 함수 반환 타입 추론
function add(x: number, y: number) {
  // 반환 타입으로 number로 추론
  return x + y;
}

// 화살표 함수의 타입 추론
const multiply = (x: number, y: number) => x * y; // 반환 타입 number로 추론

// 4. 제네릭 타입 추론
function firstElement<T>(arr: T[]) {
  // 반환 타입 T로 추론
  return arr[0];
}
let first = firstElement([1, 2, 3]); /// first는 number로 추론
let first2 = firstElement(['2', '3']); /// first2는 string 추론

// 5. 상황에 따른 타입 추론 (Contextual typing)
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button); // MouseEvent로 추론 됨
  //console.log(mouseEvent.notExist) // Error: 존재하지 않는 property
};

///////////////////////////////////////////////////////////////
// 실습 문제:
// 1. 다음 코드의 타입이 어떻게 추론되는지 주석으로 작성해보세요
let items = [1, 'two', 3, 'four', true]; // (number | string | boolean)[]
let result = items.filter((item) => typeof item === 'string'); // string[]

// 2. 다음 함수의 반환 타입이 어떻게 추론되는지 설명해보세요
function processInput(input: string | number) {
  if (typeof input === 'string') {
    return input.toUpperCase();
  }
  return input * 2;
}
// (string | number)

// 3. 다음 제네릭 함수의 타입 매개변수가 어떻게 추론되는지 설명해보세요
function merge<T, U>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}
// obj1 { name: 'kim'}
// obj2 {age: 25}
// return {name: 'kim', age: 25} = // {name: string, age: number}
