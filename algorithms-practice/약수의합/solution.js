export {};

function solution(n) {
  const answer = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer.push(i);

      if (i !== n / i) {
        answer.push(n / i);
      }
    }
  }
  return answer.reduce((sum, cur) => sum + cur, 0);
}

/**
 * 이 문제를 n의 약수를 전부 구한 후 합한 값을 반환하는 문제인데, 약수란? 1과 자기 자신 같이 두개의 수룰 곱하여 n(자신이)
 * 나오는 수들을 말한다. 상항 서로 짝을 이루며, 내가 푼 접근법은 약수는 작은수 와 큰수로 나눌수 있다 16의 약수는 (4,4)와 같은 수는 제외
 * 작은 수들은 상항 n의 제곱근 보다 작다는 성질이있기 떄믄에 Math.sqrt 함수로 제곱근을 구한 후 제곱근의 약수를 구하면 n의 약수의 절반을 구할수 있고
 *
 * 아래 조건문으로 n/i로 반대짝을 구한다 if(i !== n/i) 조건식을건 이유는 (4,4)와 같은 중복된 약수를 막기 위해서
 *
 */
