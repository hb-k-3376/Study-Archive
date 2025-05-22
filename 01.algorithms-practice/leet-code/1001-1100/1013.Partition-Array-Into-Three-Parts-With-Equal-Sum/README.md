## 문제 설명

Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

### Example 1:

Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

### Example 2:

Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false

### Example 3:

Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

## 제한사항

3 <= arr.length <= 5 \* 104
-104 <= arr[i] <= 104

## 문제 풀이

주어진 배열을 3개로 나누었을때 각각 3 part의 합이 같은지를 체크하는 문제이다.
그리고 주어진 조건을 보면
i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])
i+ 1 < j 이 조건의 의미는 i <- 는 두번째 파트의 시작 이고 + 1 은 각 파트마다 분명하게 하나의 요소가 존재해여한다는 의미이다.
즉 하나의 배열을 3개로 나눈 후 각 파트의 합이 같이야 하며 각 파트에는 하나 이상의 요소가 있어야 한다는 의미이다.

필요 조건으로 우선 모든 배열의 합이 % 3으로 딱 나누어떨어지는지 확인해여한다.
만약 모든 합이 3으로 딱 나누어 떨어지지 않는다면. 애초에 이 문제의 정답으로 성립이 되지 않기 떄문,
그 후, 각 파트에 요소가 하나 이상이 존재하는지 확인하면 된다.
