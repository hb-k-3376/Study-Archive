export {};

// 기본적인 클래스 선언
class Person {
  // 클래스 프로퍼티 (맴버 변수)
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 매서드
  introduce(): string {
    return `안녕하세요, 저는 ${this.name}이고, ${this.age}살 입니다.`;
  }
}

// 접근 제어자 (Access Modifiers)
class Student {
  // private : 클래스 내부에서만 사용 가능
  private studentId: string;
  // protected : 클래스와 상속받은 자식 클래스에서 접근 가능
  protected grade: number;
  //public : 어디서나 접근 가능 (기본값)
  public name: string;

  constructor(studentId: string, name: string, grade: number) {
    this.studentId = studentId;
    this.name = name;
    this.grade = grade;
  }

  // private 메서드
  private validateGrade(grade: number): boolean {
    return grade >= 1 && grade <= 12;
  }
  //public 메서드
  public getStudentInfo(): string {
    return `학번: ${this.studentId}, 이름: ${this.name}, 학년: ${this.grade}`;
  }
}

// 읽기 전용 속성
class Circle {
  // readonly: 초기화 후 변경 불가
  readonly radius: number;
  readonly pi: number = 3.14;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return this.pi * this.radius * this.radius;
  }
}

// 실습 문제:
// 1. Bank 클래스를 만들어보세요:
//    - private balance 속성
//    - public deposit(amount: number) 메서드
//    - public withdraw(amount: number) 메서드
//    - private validateAmount(amount: number) 메서드
//    - public getBalance() 메서드

class Bank {
  private balance: number;
  public deposit(amount: number) {}
  public withdraw(amount: number) {}
  private validateAmount(amount: number) {}
  public getBalance() {}
}

// 2. Product 클래스를 만들어보세요:
//    - readonly id: string
//    - public name: string
//    - private price: number
//    - public discount(percent: number) 메서드
//    - public getPrice() 메서드
class Product {
  readonly id: string;
  public name: string;
  private price: number;
  public discount(percent: number) {}
  public getPrice() {}
}

// 3. Logger 클래스를 만들어보세요 (싱글톤 패턴):
//    - private static instance: Logger
//    - private constructor()
//    - public static getInstance(): Logger
//    - public log(message: string): void
class Logger {
  private static instance: Logger;
  private constructor() {}
  public static getInstance(): Logger {
    return this.instance;
  }
  public log(message: string): void {}
}
