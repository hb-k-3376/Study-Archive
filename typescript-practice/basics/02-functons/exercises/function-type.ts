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
