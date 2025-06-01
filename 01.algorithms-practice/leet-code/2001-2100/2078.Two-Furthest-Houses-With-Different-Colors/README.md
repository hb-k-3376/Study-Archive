## 문제 설명

There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

Return the maximum distance between two houses with different colors.

The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

### Example 1:

![그림](https://assets.leetcode.com/uploads/2021/10/31/eg1.png)

Input: colors = [1,1,1,6,1,1,1]
Output: 3
Explanation: In the above image, color 1 is blue, and color 6 is red.
The furthest two houses with different colors are house 0 and house 3.
House 0 has color 1, and house 3 has color 6. The distance between them is abs(0 - 3) = 3.
Note that houses 3 and 6 can also produce the optimal answer.

### Example 2:

![그림](https://assets.leetcode.com/uploads/2021/10/31/eg2.png)

Input: colors = [1,8,3,8,3]
Output: 4
Explanation: In the above image, color 1 is blue, color 8 is yellow, and color 3 is green.
The furthest two houses with different colors are house 0 and house 4.
House 0 has color 1, and house 4 has color 3. The distance between them is abs(0 - 4) = 4.

### Example 3:

Input: colors = [0,1]
Output: 1
Explanation: The furthest two houses with different colors are house 0 and house 1.
House 0 has color 0, and house 1 has color 1. The distance between them is abs(0 - 1) = 1.

## 제한사항

n == colors.length
2 <= n <= 100
0 <= colors[i] <= 100
Test data are generated such that at least two houses have different colors.

## 문제 분석

가장 거리가 먼 조건은 어떤 조건일까?
가장 거리가 먼 조건은 인덱스 0 부터 마지막 인덱스 까지 일 것이다.
그 두번재로 가장 거리가 먼 조건은? 0부터 마지막 인덱스 -1 이거나 마지막인덱스 부터 인덱스 1 까지 일 것이다.
우리는 두가지 경우를 둘다 구하고 그 두값을 비교하여 더 거리가 먼 곳을 return 하면 가장 거리가 먼 색이 다른 집의 거리를 구할 수 있을 것이다.
