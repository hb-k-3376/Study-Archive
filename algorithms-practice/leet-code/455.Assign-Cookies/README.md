## 문제 설명

Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

## 제한사항

1 <= g.length <= 3 _ 104
0 <= s.length <= 3 _ 104
1 <= g[i], s[j] <= 231 - 1

## 문제 풀이

쿠키 사이즈 배열과 아이들이 원하는 쿠키의 사이즈 배열이 있고
아이들이 원하는 쿠키의 사이즈보다 쿠키가 크거나 같으면 아이들은 만족한다.
쿠키는 아이 한명당 하나 씩만 가질수 있다.

투포인터를 이용해서 만족스러운 쿠키를 가질 수 있는 최대의 아이가 몇명인지 구하는 문제이다.
쿠키와 아이를 오른차순으로 정렬하고 아이와 쿠키를 매칭하여 조건 (cookie > child)을 만족하면 다음 쿠키와 아이로 넘어간다.
만약 매칭이 안되면 다음쿠키로 넘긴다.
