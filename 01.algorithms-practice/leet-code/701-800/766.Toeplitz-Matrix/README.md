# LeetCode 766. Toeplitz Matrix

## 문제 설명

m x n 행렬 `matrix`가 주어집니다. 행렬이 Toeplitz 행렬인지 확인해야 합니다.

Toeplitz 행렬은 왼쪽 위에서 오른쪽 아래로 향하는 모든 대각선상의 원소들이 같은 값을 가지는 행렬입니다. 즉, `matrix[i][j] == matrix[i+1][j+1]`이 모든 유효한 `i`와 `j`에 대해 성립해야 합니다.

### 예제

**Example 1:**

- Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
- Output: true
- 설명: 대각선 [1], [2,2], [3,3], [4], [5,5], [9]에서 각 대각선의 모든 원소가 같습니다.

**Example 2:**

- Input: matrix = [[1,2],[2,2]]
- Output: false
- 설명: 대각선 [1,2]에서 원소들이 다릅니다.

## 제한사항

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 20
- 0 <= matrix[i][j] <= 99

## 문제 풀이

Toeplitz 행열을 오른쪽 아래로 인덱스를 이동하면 같은 숫자로 이루어진 행렬이다.
쉽게 설명한다면 ? matrix[i][j] === matrix[i+1][j+1]이 되는 조건이다.
생각해봐야할 것은 마지막 row와 마지막 el는 +1을 해주기 떄문에 반복문이 끝까지 돌지 않아야한다는 것이다.
