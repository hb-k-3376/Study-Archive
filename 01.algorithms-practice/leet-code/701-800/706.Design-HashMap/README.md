# LeetCode 706. Design HashMap

## 문제 설명

해시맵을 설계하는 문제입니다.

내장 해시 테이블 라이브러리를 사용하지 않고 `MyHashMap` 클래스를 설계해야 합니다:

- `void put(key, value)`: 해시맵에 (key, value) 쌍을 삽입합니다. key가 이미 존재하면 value를 업데이트합니다.
- `int get(key)`: 지정된 key의 value를 반환합니다. key가 존재하지 않으면 -1을 반환합니다.
- `void remove(key)`: key와 해당 value를 해시맵에서 제거합니다. key가 존재하지 않으면 아무것도 하지 않습니다.

### 예제

**Example 1:**

Input: ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"] [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output: [null, null, null, 1, -1, null, 1, null, -1]

설명:

- MyHashMap myHashMap = new MyHashMap();
- myHashMap.put(1, 1); // 해시맵은 [[1,1]]
- myHashMap.put(2, 2); // 해시맵은 [[1,1], [2,2]]
- myHashMap.get(1); // return 1, 해시맵은 [[1,1], [2,2]]
- myHashMap.get(3); // return -1 (찾을 수 없음), 해시맵은 [[1,1], [2,2]]
- myHashMap.put(2, 1); // 해시맵은 [[1,1], [2,1]] (기존 값 업데이트)
- myHashMap.get(2); // return 1, 해시맵은 [[1,1], [2,1]]
- myHashMap.remove(2); // key 2와 그 값을 제거, 해시맵은 [[1,1]]
- myHashMap.get(2); // return -1 (찾을 수 없음), 해시맵은 [[1,1]]

## 제한사항

- 0 <= key, value <= 10^6
- 최대 10^4번의 put, get, remove 호출이 있음

## 문제 풀이

객체를 활용해서 문제를 풀었다.
get 함수를 구현할 때 this.map[key]에 값이없다면 undefined를 반환하기 떄문에 nullish 문법인 ?? 으로 -1을 반환하게만들었다.
