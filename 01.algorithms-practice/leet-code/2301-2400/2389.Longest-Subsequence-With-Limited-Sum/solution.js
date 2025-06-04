/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  const answer = []; // 반환 배열

  for (const query of queries) {
    let sum = 0; // 누적 합산
    let count = 0; // 누적 합산 횟수 카운트

    for (const num of nums) {
      // query의 값이 누적합산보다 크거나 같으면 계속 누적합산
      // 왜 같을때도 누적합산을 하는가?
      // 같은떄노 누적 합산을 해야지 다음 반복문에서 아래 조건문에 걸리지 않기 떄문에
      if (query >= sum + num) {
        sum += num;
        count++;
      }
      // 누적 합산이 query보다 큰 경우 반복문 종료
      else {
        break;
      }
    }

    answer.push(count);
  }

  return answer;
};

// 이진 트리 탐색으로도 이 문제를 더 효율적으로 해결할 수 있다.
var binarySearch = function (nums) {
  const accArr = [0];
  // 누적 합 배열
  for (let num of nums) {
    accArr.push(accArr[accArr.length - 1] + num);
  }

  const answer = [];

  for (let query of queries) {
    let start = 0;
    let end = accArr.length - 1;

    while (start < end) {
      const mid = Math.floor((start + end + 1) / 2);

      if (accArr[mid] <= query) {
        start = mid;
      } else {
        end = mid - 1;
      }
    }

    answer.push(start);
  }

  return answer;
};
