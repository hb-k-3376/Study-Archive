# LeetCode 908. Smallest Range I

## 문제 설명

정수 배열 nums와 정수 k가 주어집니다.

한 번의 연산에서, 0 <= i < nums.length인 임의의 인덱스 i를 선택하고 nums[i]를 nums[i] + x로 변경할 수 있습니다. 여기서 x는 [-k, k] 범위의 정수입니다.

각 인덱스 i에 대해 이 연산을 최대 한 번씩 적용할 수 있습니다.

nums의 점수는 nums에서 최대값과 최소값의 차이입니다.

각 인덱스에 대해 위에서 언급한 연산을 최대 한 번씩 적용한 후 nums의 최소 점수를 반환하세요.

### 예제

**Example 1:**

- Input: nums = [1], k = 0
- Output: 0
- 설명: 점수는 max(nums) - min(nums) = 1 - 1 = 0입니다.

**Example 2:**

- Input: nums = [0,10], k = 2
- Output: 6
- 설명: nums를 [2, 8]로 변경합니다. 점수는 max(nums) - min(nums) = 8 - 2 = 6입니다.

**Example 3:**

- Input: nums = [1,3,6], k = 3
- Output: 0
- 설명: nums를 [4, 4, 4]로 변경합니다. 점수는 max(nums) - min(nums) = 4 - 4 = 0입니다.

## 제한사항

- 1 <= nums.length <= 10^4
- 0 <= nums[i] <= 10^4
- 0 <= k <= 10^4

## 문제 풀이

배열의 최소값과 최대값을 구한 뒤 최소값에는 +k를 최대값에는 -k를 해준다.
그 후 min값이 max값보다 큰 경우는 교집합이 존재한다는 얘기로 0을 반환하고
아니라면 교집합이 없기 떄문에 max - min을 해주면 된다.
