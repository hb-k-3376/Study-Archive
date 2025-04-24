export {};

function solution(schedules, timeLogs, startDay) {
  let count = 0;
  timeLogs.forEach((log, index) => {
      const mapping = {};
      let isOnTime = true;
      // 요일 별로 맵핑
      
      log.forEach((time,i) => {
          mapping[(i+startDay-1)%7+1] = time;
      })
      
      let onTime = schedules[index];
      let hour = Math.floor(onTime/100);
      let min = onTime%100 + 10;
      
      if(min >= 60) {
          min -= 60;
          hour += 1;
      }
      onTime = hour*100 + min;

      for(const [day, time] of Object.entries(mapping)) {
          if(+day < 6) {
              if(time > onTime) {
                  isOnTime = false;
                  break;
              }
          }
      }
      if(isOnTime) count ++;
  })
  return count
}

/**
 * 먼저 주어진 TimeLogs와 startDay를 매핑합니다.
 * 요일이 1(월) 부터 7(일) 요일까지 이므로 startDay 부터 7까지 순환하고 다시 다음 인덱스 부터는 1(월)으로 돌아올 수 있도록 
 * (i + startDay -1 ) % 7 +1 로직을 만들어줌니다 이떄 i + startDay -1 을 해주는 이유는 인덱스는 log가 0-6 인덱스를 갖기 떄문에 -1을 하려 요일을 마춰주고
 *  다시 +1을 해주는 이유는 1-7을 요일이라고 정해주었기 때문 
 * 
 * 그 후 schedules에 요소들을 + 10을 해준다 (문제에서 +10분까지 인정해주기 때문에) 
 * 이 로직은 단순하게 1030처럼 값이 주어지기 떄문에 10과 30을 나누고 30에 +10을 해주지만 만약이 값이 60을 넘어가면 시간 부분을 +1을 해주어야한다.
 * 
 * 
 * 그 다음 만들어 놓은 mapping 객체를 이용해서 값을 비교해주면 되는데 먼저 토(6) 일(7) 은 제외기 때문에 +day < 6 조건을 걸어주고
 * onTime 보다 실제 시간이 크디면 inOnTime 값을 false로 바꾼다 break를 하는 이유는 하나라도 false면
 * 카운트를 하지 않기 때문에
 */