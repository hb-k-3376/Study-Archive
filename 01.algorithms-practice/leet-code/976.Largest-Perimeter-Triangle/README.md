## 문제 설명

Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

### Example 1:

Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.

#### Example 2:

Input: nums = [1,2,1,10]
Output: 0
Explanation:
You cannot use the side lengths 1, 1, and 2 to form a triangle.
You cannot use the side lengths 1, 1, and 10 to form a triangle.
You cannot use the side lengths 1, 2, and 10 to form a triangle.
As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.

## 제한사항

3 <= nums.length <= 104
1 <= nums[i] <= 106

## 문제 풀이

처음에 이문제를 만났을떄는 조합을 이용해서 풀어보려고 했다.
왜냐면 여러개의 요소들을 3가지로 묶어서 그값들이 삼격형이 되는지 확인 후 이후 프로세스를 진행하려고 했기 떄문이다.
하지만 삼각형의 특징과 가장 큰 삼각형을 구하라라는 말을 생각해 보면 조합으로 풀지 않아도 쉽게 풀 수 있는 방법이 존재한다.

삼각형의 조건은 가장큰 변은 나머지 변의 합보다 작아야한다. 그 말은 내림차순으로 배열을 정렬한 후 앞부터 3자리씩 슬라이딩 윈도우 알고리즘으로 삼각형이 맞는지 확인해가면
된다.
