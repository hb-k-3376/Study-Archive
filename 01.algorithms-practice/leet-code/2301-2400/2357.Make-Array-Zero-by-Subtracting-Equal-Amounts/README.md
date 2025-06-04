## 문제 설명

You are given a non-negative integer array nums. In one operation, you must:

Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
Subtract x from every positive element in nums.
Return the minimum number of operations to make every element in nums equal to 0.

### Example 1:

Input: nums = [1,5,0,3,5]
Output: 3
Explanation:
In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].

### Example 2:

Input: nums = [0]
Output: 0
Explanation: Each element in nums is already 0 so no operations are needed.

## 제한사항

1 <= nums.length <= 100
0 <= nums[i] <= 100

## 문제 풀이

0을 제외한 양의 정수들 중 가장 작은 값을 나머지 요소들에게 빼면서 배열의 모든 요소들을 0 으로 만드는데 드는 최소 비용을 구하는 문제이다.
단순하게 생각해보면? 0을 제외한 요소를찾아서 그요소와 그 뒤에 존재하는 요소들을 전부 빼면서 반복분들 돌리면 된다. 0이 아닌 요소를찾을때마다 카운트 업을 해주면되는데.
이 방식은 너무 비효율적이다 우선 0이 아닌 요소를 찾는데 반복을을 돌려야하며 찾게 되면 찾은 요소의 인덱스 부터 끝 인덱스까지 반복문들 돌령한다 (이중 반복문)
하지만 여기서 우리는 하나의 패턴을 알 수 있다. 0이 아닌 요소를 찾을때마다 카운트 업을 해준다. 0이 아닌 양의 정수요소를 만나면 연산을 해야해기 떄문에
처음부터 0을 제외한 요소의 갯수가 정답이 되는것이다. 하지만 여기서도 고려해야할 사항이 있다. 중복값은 어떻게 처리하느냐? 중복값은 몇개가 있던지 하나의 연산으로 0으로 처리가 된다.
그래서 우리는 0과 중복값을 제외한 요소의 Length를 반환하면 된다.
