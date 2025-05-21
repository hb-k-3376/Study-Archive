## 문제 설명

Given an integer array nums and an integer k, modify the array in the following way:

choose an index i and replace nums[i] with -nums[i].
You should apply this process exactly k times. You may choose the same index i multiple times.

Return the largest possible sum of the array after modifying it in this way.

### Example 1:

Input: nums = [4,2,3], k = 1
Output: 5
Explanation: Choose index 1 and nums becomes [4,-2,3].

### Example 2:

Input: nums = [3,-1,0,2], k = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].

### Example 3:

Input: nums = [2,-3,-1,5,-4], k = 2
Output: 13
Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].

## 제한사항

1 <= nums.length <= 104
-100 <= nums[i] <= 100
1 <= k <= 104

## 문제 풀이

간단히 문제를 풀어보자. -100 ~ 100 사이의 정수들이 포함된 배열이 주어지고 해당 요소들의 값을 음수에서 정수 , 정수에서 음수로 변경할 수 있는 횟수 k개 주어진다
k 번 정수와 음수를 변경하고 합한 수 중 가장 큰 수 를 구하라는 말이다 You may choose the same index i multiple times. 하나의 요소를 여러번 뒤집을 수 있다고도 한다.

음수가 여러개 라면 가장 큰 음수부터 작은 수 까지 k번 뒤집으면 확실히 합한 수 를 가장 크게 만들 수 있지만, 만약 모든 수를 음수로 변경 했다고 해도 k 의 횟수가 남아있다면,
제일 작은 양수를 음수로 변경해주면 된다.

여기서 하나의 요소를 여러번 뒤집어도 된다고 하니 남아았는 횟수가 짝수면 값은 그대로일 것이고 홀수라면 한번만 뒤집어주면 된다.

아주 간단.
