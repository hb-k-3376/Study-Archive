export {};

// 1. 기본 타입들
// 문자열
let firstName: string = 'kim';
let greeting: string = `Hello, ${firstName}`;

// 숫자 타입
let age: number = 25; // 정수
let height: number = 175.5; //소수
let binary: number = 0b101; //2진수
let hex: number = 0xf00d; // 16진수

// Boolean 타입
let isStudent: boolean = true;

// 배열 타입
let number: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ['hello', 'world'];

//튜플 타입 (고정된 길이와 타입을 가진 배열)
let tuple: [string, number, string] = ['age', 25, ''];

// void 타입 (아무것도 반환하지 않는 함수의 반환 타입)
const sayHello = (): void => {
  console.log('hello!');
};

// any 타입 (모든 타입을 허용 - 되도록 사용을 피하는 것이 좋음)
let anyValue: any = 5;
anyValue = 'string';
