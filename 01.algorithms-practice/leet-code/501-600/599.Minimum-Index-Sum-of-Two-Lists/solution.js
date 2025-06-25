/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const list1Map = new Map();
  const list2Map = new Map();

  for (let i = 0; i < list1.length; i++) {
    list1Map.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    list2Map.set(list2[i], i);
  }

  let min = Infinity;
  let answer = [];

  for (const item of list1) {
    if (list2Map.has(item)) {
      const sum = list1Map.get(item) + list2Map.get(item);

      if (min > sum) {
        min = sum;
        answer = [item];
      } else if (min === sum) {
        answer.push(item);
      }
    }
  }

  return answer;
};
