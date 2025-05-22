// 03-classes/inheritance.ts
export {};

// 기본 클래스 (부모 클래스)
class Animal {
  constructor(protected name: string) {}

  public makeSound(): string {
    return 'Some sound';
  }

  protected getType(): string {
    return 'Animal';
  }
}

// 자식 클래스
class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name); // 부모 클래스의 생성자 호출
    this.breed = breed;
  }

  // 메서드 오버라이딩
  public makeSound(): string {
    return 'Woof! Woof!';
  }

  // 새로운 메서드 추가
  public fetch(): string {
    return `${this.name}이(가) 공을 가져옵니다!`;
  }

  // protected 메서드 사용
  public introduce(): string {
    return `저는 ${this.getType()}이고, 품종은 ${this.breed}입니다.`;
  }
}

// 추상 클래스
abstract class Shape {
  constructor(protected color: string) {}

  // 추상 메서드 (자식 클래스에서 반드시 구현해야 함)
  abstract getArea(): number;

  // 일반 메서드
  getColor(): string {
    return this.color;
  }
}

// 추상 클래스 구현
class Circle extends Shape {
  constructor(color: string, private radius: number) {
    super(color);
  }

  // 추상 메서드 구현
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// 실습 문제:
// 1. Vehicle 추상 클래스를 만들고, Car와 Bicycle 클래스로 구현해보세요
//    - Vehicle: start(), stop() 추상 메서드
//    - protected brand, model 속성
//    - getInfo() 일반 메서드

// 2. Employee 클래스를 만들고, Manager와 Developer 클래스를 상속받아 구현해보세요
//    - protected salary, id 속성
//    - calculateBonus() 메서드를 각각 다르게 구현
//    - 직무별 특별한 메서드 추가

// 3. BankAccount 추상 클래스를 만들고, CheckingAccount와 SavingsAccount로 구현해보세요
//    - deposit(), withdraw() 추상 메서드
//    - protected balance 속성
//    - getBalance() 일반 메서드
