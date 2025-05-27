## 문제 설명

You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).

The valid times are those inclusively between 00:00 and 23:59.

Return the latest valid time you can get from time by replacing the hidden digits.

### Example 1:

Input: time = "2?:?0"
Output: "23:50"
Explanation: The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50.
Example 2:

Input: time = "0?:3?"
Output: "09:39"

#### Example 3:

Input: time = "1?:22"
Output: "19:22"

## 제한사항

time is in the format hh:mm.
It is guaranteed that you can produce a valid time from the given string.

## 문제 풀이

시간이 hh:mm 포멧으로 주어지고, ?로 비어진 수가 1개에서 ~ 4개로 랜덤으로 주어질때 가장 늦은 시간을 구하는 문제인데,
중요하게 생각해야할 부분은

1. h1은 h2가 4미만이면 2 4이상이면 1이 된다.
2. h2는 h1이 1이면 9 2면 3이된다.
3. m1은 항상 5가 최대 값이다.
4. m2는 항상 9가 최대 값이다.

hh:mm 포멧에서 가장 큰 수는 23:59이다
이 조건을 생각해서 코드를 만들면 된다.
