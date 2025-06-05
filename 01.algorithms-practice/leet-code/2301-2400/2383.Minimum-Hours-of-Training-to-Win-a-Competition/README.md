## 문제 설명

You are entering a competition, and are given two positive integers initialEnergy and initialExperience denoting your initial energy and initial experience respectively.

You are also given two 0-indexed integer arrays energy and experience, both of length n.

You will face n opponents in order. The energy and experience of the ith opponent is denoted by energy[i] and experience[i] respectively. When you face an opponent, you need to have both strictly greater experience and energy to defeat them and move to the next opponent if available.

Defeating the ith opponent increases your experience by experience[i], but decreases your energy by energy[i].

Before starting the competition, you can train for some number of hours. After each hour of training, you can either choose to increase your initial experience by one, or increase your initial energy by one.

Return the minimum number of training hours required to defeat all n opponents.

### Example 1:

Input: initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1]
Output: 8
Explanation: You can increase your energy to 11 after 6 hours of training, and your experience to 5 after 2 hours of training.
You face the opponents in the following order:

- You have more energy and experience than the 0th opponent so you win.
  Your energy becomes 11 - 1 = 10, and your experience becomes 5 + 2 = 7.
- You have more energy and experience than the 1st opponent so you win.
  Your energy becomes 10 - 4 = 6, and your experience becomes 7 + 6 = 13.
- You have more energy and experience than the 2nd opponent so you win.
  Your energy becomes 6 - 3 = 3, and your experience becomes 13 + 3 = 16.
- You have more energy and experience than the 3rd opponent so you win.
  Your energy becomes 3 - 2 = 1, and your experience becomes 16 + 1 = 17.
  You did a total of 6 + 2 = 8 hours of training before the competition, so we return 8.
  It can be proven that no smaller answer exists.

### Example 2:

Input: initialEnergy = 2, initialExperience = 4, energy = [1], experience = [3]
Output: 0
Explanation: You do not need any additional energy or experience to win the competition, so we return 0.

## 제한사항

n == energy.length == experience.length
1 <= n <= 100
1 <= initialEnergy, initialExperience, energy[i], experience[i] <= 100

## 문제 풀이

에너지 부터 생각해보자
내가 가진 에너지를 소모해서 상대 에너지를 전부 소진 시키야한다.부족한 에너지는 휴식을 통해서 +1을 할 수 있으면,
상대가 가진 모든 에너지를 합하고 내 에너지를 뺐을때?의 값을 구하면 쉽게 최종적으로 필요한 에너지를 구할 수 있을 것이다.
initialEnergy = 5, energy = [1,4,3,2] 라면?
5 - 1 = 4
4 - 4 = 0 여기서 우리는 +1 이 필요하다 5 - 4 = 1
1 - 3 = -2 여기서 우리는 +3 이 필요하다 4 - 3 = 1
1 - 2 = -1 여기서 우리는 +2 이 필요하다 3 - 2 = 1
우리는 총 에너지를 위한 휴식 6이 필요하다! 간단하게 계산 해보면 1+4+3+2 = 10
10 - 5 = 5
5+1 = 6 이공식을 이용하면 쉽게 필요한 에너지를 위한 휴식을 구할 수 있다.

경험치를 구현해보자 경험치도 상대방 경험치보다 크면 상대를 이길수 있다.
initialExperience = 3, experience = [2,6,3,1] 라면?
3 > 2 이기 떄문에 3 + 5
5 > 6 은 거짓이다 6보다 커지기 위해서는 + 2, 7 > 6 이기 때문에 총 13
13 > 3 은 16
16 > 1 은 17
우리는 +2 두번만 쉬면 된다. 이대로 직접 시뮬레이션을 돌려서 값을 구하면 된다.
