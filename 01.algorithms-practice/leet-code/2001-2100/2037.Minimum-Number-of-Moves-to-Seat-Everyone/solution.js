/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b); // 오름 차순 정렬
  students.sort((a, b) => a - b); // 오름 차순 정렬
  let move = 0;
  for (let i = 0; i < seats.length; i++) {
    move += Math.abs(seats[i] - students[i]); // 학생과 좌석의 거리 의 합
  }

  return move;
};
