/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]); // unit으로 내림 차순 정렬

  let answer = 0,
    boxCount = 0;

  for ([box, unit] of boxTypes) {
    if (boxCount < truckSize) {
      // 아직 박스 싣을 수 있으면
      if (truckSize - boxCount >= box) {
        // 현재 박스를 전부 싣을 수 있으면
        answer += box * unit;
        boxCount += box;
      } else {
        // 싣을 수 있는 박스만
        answer += (truckSize - boxCount) * unit;
        break; // 최대로 싣어서 바로 반복문 탈출
      }
    }
  }

  return answer;
};

var 간결한_방법 = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]); // unit으로 내림 차순 정렬

  return boxTypes.reduce((units, [boxes, unitPerBox]) => {
    const take = Math.min(boxes, truckSize); // 지금 싣을 수 있는 박스 수 체크
    truckSize -= take; // truckSize 값 업데이트
    return units + take * unitPerBox;
  }, 0);
};
