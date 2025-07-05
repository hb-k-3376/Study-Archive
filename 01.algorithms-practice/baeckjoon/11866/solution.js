/**
 *
 * @param {number} n
 * @param {number} k
 */
var solution = function (n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  const answer = [arr[k - 1]]; // 인덱스 기준으로 첫번째 값 target 값

  let pointer = k - 1; // 현재 인덱스 위치 저장

  arr = [...arr.slice(0, pointer), ...arr.slice(pointer + 1)]; // slice를 이용해서 k-1 인덱스값 제거
  // answer.length === n 되는 순간 반복문 종료
  while (answer.length < n) {
    pointer = pointer + k - 1; // -1을 하는 이유 : 인덱스 기준으로 제거 하기 때문에
    const index = pointer % arr.length; // 남아있는 배열은 순회
    answer.push(arr[index]);

    arr = [...arr.slice(0, index), ...arr.slice(index + 1)]; // 인덱스 제거

    pointer = index; // 지금 위치하는 인덱스 값 포인터에 저장
  }

  return answer;
};

console.log(solution(7, 3));
