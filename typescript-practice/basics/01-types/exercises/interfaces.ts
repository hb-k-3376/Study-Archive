export {};
// 실습 문제:
// 1. Student 인터페이스를 만들어보세요.
//    - name (문자열)
//    - grade (숫자)
//    - subjects (문자열 배열)
//    - graduationYear (선택적 속성, 숫자)
interface Student {
  name: string;
  grade: number;
  subjects: Array<string>;
  graduationYear?: number;
}

// 2. Rectangle 인터페이스를 만들고 면적을 계산하는 함수를 추가해보세요.
interface Rectangle {
  w: number;
  h: number;
  getArea(): number;
}

const myRectangle: Rectangle = {
  w: 10,
  h: 20,
  getArea() {
    return this.w * this.h;
  },
};
// 3. 유니온 타입을 사용하는 타입 별칭을 만들어보세요:
//    - Status 타입: "pending" | "completed" | "failed"
type Status = 'pending' | 'completed' | 'failed';
