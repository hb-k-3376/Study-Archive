# LeetCode 349. Intersection of Two Arrays

## 문제 설명

두 배열의 교집합을 구하는 문제입니다.

두 정수 배열 nums1과 nums2가 주어졌을 때, 두 배열의 교집합을 반환해야 합니다. 결과의 각 요소는 유일해야 하며, 결과를 어떤 순서로 반환해도 됩니다.

### 예제

**Example 1:**

- Input: nums1 = [1,2,2,1], nums2 = [2,2]
- Output: [2]

**Example 2:**

- Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
- Output: [9,4]
- 설명: [4,9]도 정답입니다.

## 제한사항

- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000

## 문제 풀이

우선 두개의 배열의 중복을 set으로 제거 한뒤
하나의 set을 배열로 변경한뒤 반복문을 돌면서 다른 하나의 set.has로 값을 찾으면 된다.
