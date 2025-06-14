## 문제 설명

Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

### Example 1:

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

## 제한사항

1 <= nums.length <= 10^4
-10^5 <= nums[i] <= 10^5
0 <= left <= right < nums.length
At most 10^4 calls will be made to sumRange.

## 문제 풀이

NumArray라는 클래스를 만들어서 sumRange라는 함수를 호출해서
sumRange(0,4) 만큼의 배열의 인덱스 (부분 수열)의 합을 반환하는 문제인데
**At most 10^4 calls will be made to sumRange.** 10_000번이 넘는 호출을 할거라는 전제 조건이있다.
이럴 경우는 연산한 값을 저장해 놓고 같은 연산이 들어가면 저장되어있는 값을 바로 반환해주면 된다.
하지만 더 좋은 방법이있는데 미리 각 인덱스마다 누적 합을 만들어 클래스에 저장해 놓고
2,4 와 같은 인덱스들이 들어오면 누적합배열에서 값을 꺼내서 바로 리턴하면 되는 문제이다.
이때 유의 해야할 것은 누적합 배열을 만들고
단순하게 누적합배열[4] - 누적합배열[2]를하면 정답을 도출해낼수 없다.
누적합을 생각해보면 시작하는 누적합에는 지금 현재 인덱스의 값도 포함되어있다.
예를 들어서
[1,2,3,4,5]의 누적합 배열은
[1,3,6,10,15]인데 여기서 sumRange(2,4)를한다면? 3과 10이 된다.
2+3+4 = 9인데 7이 된다. 이유가 뭘까?
누적합은 left(나)의 값도 포함된 값이다. 그래서 만약 단순하게
right -left를 하면 그냥배열의 나는 이 합에 포함되지 않는다는 말이다.
