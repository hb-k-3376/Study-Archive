export {};

// 제네릭 없이 특정 타입만 처리하는 함수
function getFirstNumberElement(arr: number[]): number {
  return arr[0];
}

function getFirstStringElement(arr: string[]): string {
  return arr[0];
}

// 제네릭을 사용한 범용적인 함수
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numbers = [1, 2, 3, 4, 5];
const strings = ['a', 'b', 'c', 'd'];
console.log(getFirstElement<number>(numbers)); // 1
console.log(getFirstElement<string>(strings)); // a

// 여러 개의 타입 매개변수 사용
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// 제네릭 인터페이스
interface Box<T> {
  value: T;
  getValue(): T;
}

// 제네릭 인터페이스 구현

class NumberBox implements Box<number> {
  constructor(public value: number) {}

  getValue(): number {
    return this.value;
  }
}

// 제네릭 제약 조건(Constraints)
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

// 제약 조건이 있는 제네릭 사용 예시
console.log(logLength('hello')); // 5
console.log(logLength([1, 2, 3, 4])); // 4
// console.log(logLength(123)); // 에러 : number 타입에는 length 속성이 없음

////////////////////////////////////////////////////////////////////////////////////
// 실습 문제:
// 1. Stack<T> 클래스를 구현해보세요
//    - push, pop, peek, isEmpty 메서드 구현
//    - 제네릭을 사용하여 어떤 타입이든 저장할 수 있도록 구현
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
// 2. KeyValuePair<K, V> 인터페이스와 이를 구현하는 클래스를 만드세요
//    - key와 value를 저장
//    - getKey, getValue, setValue 메서드 구현
interface KeyValuePair<K, V> {
  key: K;
  value: V;
  getKey(): K;
  getValue(key: K): V;
  setValue(key: K, value: V): void;
}

// 3. filter<T> 함수를 구현해보세요
//    - 배열과 필터 함수를 받아서 필터링된 배열을 반환
//    - 제네릭을 사용하여 어떤 타입의 배열이든 처리할 수 있도록 구현
