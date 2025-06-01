## 문제 설명

There are n availabe seats and n students standing in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

You may perform the following move any number of times:

Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

Note that there may be multiple seats or students in the same position at the beginning.

### Example 1:

Input: seats = [3,1,5], students = [2,7,4]
Output: 4
Explanation: The students are moved as follows:

- The first student is moved from position 2 to position 1 using 1 move.
- The second student is moved from position 7 to position 5 using 2 moves.
- The third student is moved from position 4 to position 3 using 1 move.
  In total, 1 + 2 + 1 = 4 moves were used.

### Example 2:

Input: seats = [4,1,5,9], students = [1,3,2,6]
Output: 7
Explanation: The students are moved as follows:

- The first student is not moved.
- The second student is moved from position 3 to position 4 using 1 move.
- The third student is moved from position 2 to position 5 using 3 moves.
- The fourth student is moved from position 6 to position 9 using 3 moves.
  In total, 0 + 1 + 3 + 3 = 7 moves were used.

### Example 3:

Input: seats = [2,2,6,6], students = [1,3,2,6]
Output: 4
Explanation: Note that there are two seats at position 2 and two seats at position 6.
The students are moved as follows:

- The first student is moved from position 1 to position 2 using 1 move.
- The second student is moved from position 3 to position 6 using 3 moves.
- The third student is not moved.
- The fourth student is not moved.
  In total, 1 + 3 + 0 + 0 = 4 moves were used.

## 제한사항

n == seats.length == students.length
1 <= n <= 100
1 <= seats[i], students[j] <= 100

## 문제 분석

학생과 좌석이 같은 갯수를 가지고 있으며, 학생들이 으로 이동하는 최소한의 거리를 측정하는 문제이다.
각 좌석의 위치와 학생에 위치가 주진다.

학생이 좌석에 앉기 까지 최소한의 이동을 구하려면 우선 학생과 좌석을 서로 가장 가까운 위치를 매칭시켜야한다.

두 배열을 같은 차순으로 정렬하면 학생들과 좌석들은 서로가 가장 가까운 곳으로 위치 하게 된다. 그후 서로의 위치에 대한 이동 절대값을 구해 더해주면 된다
