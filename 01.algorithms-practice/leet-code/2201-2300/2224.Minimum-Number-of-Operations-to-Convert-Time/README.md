## 문제 설명

You are given two strings current and correct representing two 24-hour times.

24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times.

Return the minimum number of operations needed to convert current to correct.

### Example 1:

Input: current = "02:30", correct = "04:35"
Output: 3
Explanation:
We can convert current to correct in 3 operations as follows:

- Add 60 minutes to current. current becomes "03:30".
- Add 60 minutes to current. current becomes "04:30".
- Add 5 minutes to current. current becomes "04:35".
  It can be proven that it is not possible to convert current to correct in fewer than 3 operations.

### Example 2:

Input: current = "11:00", correct = "11:01"
Output: 1
Explanation: We only have to add one minute to current, so the minimum number of operations needed is 1.

## 제한사항

current and correct are in the format "HH:MM"
current <= correct

## 문제 풀이

현재 시간( current ) 시간와 타겟 시간( correct )의 차이를 구하는 데, 제한 사항에 current <= correct 조건이 있기 떄문에
날이 넘어가는 조건은 배제 할 수 있다 그렇다면, 시간을 분으로 파싱하여 ( \* 60 ) 하고 연산하면 한번에 연산으로 차이를 구할 수 있다.
차이를 구한 다음 60, 15, 5, 1로 카운트를 하면 된다.
