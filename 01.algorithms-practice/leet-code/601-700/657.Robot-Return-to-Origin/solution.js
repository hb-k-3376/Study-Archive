// /**
//  * @param {string} moves
//  * @return {boolean}
//  */
// var judgeCircle = function (moves) {
//   const map = {};

//   for (const move of moves) {
//     map[move] = (map[move] ?? 0) + 1;
//   }

//   return map['U'] === map['D'] && map['L'] === map['R'];
// };
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;
  for (const move of moves) {
    switch (move) {
      case 'U':
        y -= 1;
        break;
      case 'D':
        y += 1;
        break;
      case 'R':
        x += 1;
        break;
      case 'L':
        x -= 1;
        break;
    }
  }

  return x === 0 && y === 0;
};
