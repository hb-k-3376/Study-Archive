# LeetCode 705. Design HashSet

## 문제 설명

해시셋을 설계하는 문제입니다.

내장 해시 테이블 라이브러리를 사용하지 않고 `MyHashSet` 클래스를 설계해야 합니다:

- `void add(key)`: 해시셋에 값 key를 삽입합니다.
- `bool contains(key)`: 해시셋에 값 key가 존재하는지 확인합니다.
- `void remove(key)`: 해시셋에서 값 key를 제거합니다. key가 존재하지 않으면 아무것도 하지 않습니다.

### 예제

**Example 1:**

Input: ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"] [[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output: [null, null, null, true, false, null, true, null, false]

설명:

- MyHashSet myHashSet = new MyHashSet();
- myHashSet.add(1); // set = [1]
- myHashSet.add(2); // set = [1, 2]
- myHashSet.contains(1); // return True
- myHashSet.contains(3); // return False (찾을 수 없음)
- myHashSet.add(2); // set = [1, 2]
- myHashSet.contains(2); // return True
- myHashSet.remove(2); // set = [1]
- myHashSet.contains(2); // return False (이미 제거됨)

## 제한사항

- 0 <= key <= 10^6
- 최대 10^4번의 add, remove, contains 호출이 있음

## 문제 풀이

자바스크립트 객체를 이용해서 set을 만들어 보았다.
add 는 간단하게 입력받은 key 값으로 key:value로 설정해서 값을 찾을 때 키값으로 바로 찾게 하였고
remove는 delete 연산자를 이용해서 삭제하고
contains는 key in , hasOwnProperty 함수를 이용해서 있는지 없는지 판별하였다.
