# LeetCode 350. Intersection of Two Arrays II

## 문제 설명

두 배열의 교집합을 구하는 문제입니다 (중복 허용).

두 정수 배열 nums1과 nums2가 주어졌을 때, 두 배열의 교집합을 반환해야 합니다. 결과에서 각 요소는 두 배열에서 나타나는 최소 횟수만큼 포함되어야 하며, 결과를 어떤 순서로 반환해도 됩니다.

### 예제

**Example 1:**

- Input: nums1 = [1,2,2,1], nums2 = [2,2]
- Output: [2,2]

**Example 2:**

- Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
- Output: [4,9]
- 설명: [9,4]도 정답입니다.

## 제한사항

- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000

## 문제 풀이

배열중 하나를 map으로 분포도를 조사하고,
다른 배열을 반복문들 돌려서 상쇄 시켜 상쇄가 되는 요소를 result에 포함 시키면 된다.
