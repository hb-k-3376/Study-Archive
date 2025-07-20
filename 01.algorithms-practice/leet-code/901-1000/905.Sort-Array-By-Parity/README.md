# LeetCode 905. Sort Array By Parity

## 문제 설명

정수 배열 nums가 주어졌을 때, 모든 짝수 정수를 배열의 앞부분으로 이동시키고 그 뒤에 모든 홀수 정수가 오도록 하세요.

이 조건을 만족하는 어떤 배열이든 반환하면 됩니다.

### 예제

**Example 1:**

- Input: nums = [3,1,2,4]
- Output: [2,4,3,1]
- 설명: [4,2,3,1], [2,4,1,3], [4,2,1,3]도 모두 유효한 답입니다.

**Example 2:**

- Input: nums = [0]
- Output: [0]

## 제한사항

- 1 <= nums.length <= 5000
- 0 <= nums[i] <= 5000

## 문제 풀이

투포인터를 활용해서 풀었더 evenPointer와 oddPointer를 만들고 evenPointer는 인덱스 0에 oddPointer는 nums의 마지막인덱스를 가리키고 nums의 길이 만큼의 answer 배열을 만든다 그리고 반복문을 돌아 nums[i]가 짝수 인지 홀수인이 판단 후 짝수라면 answer[evenPointer]에 저장하고 evenPointer++; 를 홀수라면 반대로 answer[oddPointer]를 저장하고 oddPointer--;를 해준다 반복문이 종료되면 짝수는 앞쪽에 홀수는 뒤쪽에 분포하게 된다.
