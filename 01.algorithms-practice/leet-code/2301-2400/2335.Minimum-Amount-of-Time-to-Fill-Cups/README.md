## 문제 설명

You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.

You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups.

### Example 1:

Input: amount = [1,4,2]
Output: 4
Explanation: One way to fill up the cups is:
Second 1: Fill up a cold cup and a warm cup.
Second 2: Fill up a warm cup and a hot cup.
Second 3: Fill up a warm cup and a hot cup.
Second 4: Fill up a warm cup.
It can be proven that 4 is the minimum number of seconds needed.

### Example 2:

Input: amount = [5,4,4]
Output: 7
Explanation: One way to fill up the cups is:
Second 1: Fill up a cold cup, and a hot cup.
Second 2: Fill up a cold cup, and a warm cup.
Second 3: Fill up a cold cup, and a warm cup.
Second 4: Fill up a warm cup, and a hot cup.
Second 5: Fill up a cold cup, and a hot cup.
Second 6: Fill up a cold cup, and a warm cup.
Second 7: Fill up a hot cup.

### Example 3:

Input: amount = [5,0,0]
Output: 5
Explanation: Every second, we fill up a cold cup.

## 제한사항

amount.length == 3
0 <= amount[i] <= 100

## 문제 풀이

매 순간 가장 많이 남은 컵과 두번쨰로 많이 남은 컵을 두컵씩 채워나가다 보면 결국 모든 컵이 채워질 수도 있고, 하나의 컵만 남게 된다.
수학적으로 접근하게 되다면
가장 많은 컵 >= 나머지 두 컵의 합 이라면 가장 많은 컵을 채우면서 나머지 컵에 동시에 채우면 모드 채워지기 떄문에 가장많은 컵만큼 채우면 되지만,
반대로 가장 많은 컵 < 나머지 두 컵의 합 이라면, 모든 컵의 합을 2로 나눈 후 반올림 하면 닶을 구할 수 있다.
하지만 프로그래밍 적인 논리를 연습해보면, 매 순간 가장많이 남은 컵과 두번째 컵을 구해서 균일하게 두 컵씩 채우다가 하나의 컵만 남게되면 해당 컵 만큼을 채워주면 된다.
