## 문제 설명

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

## 제한사항

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

## 문제 풀이

이 문제는 투포인트로 쉽게 구현 할 수 있다.
haystack의 랭스와 needle의 랭스를 뺀 만큼 반복문을 돌리는데 빼는 이유는
needle이 haystack의 부분 문자열이 될수 있는 조건 중 마지막 까지 needle 랭스만 큼의 자리를 확보하야하기 떄문이다
예를 들어서 needle의 length는 3인데 haystack를 탐색 중 마지막에서 2 자리까지 온다면 이미 부분 문자열을 갖고 있지 않기 떄문이다.
또한 윈도우 슬라이딩 기법을 사용하여 한단계씩 needle의 랭스 만큼 비교했다
