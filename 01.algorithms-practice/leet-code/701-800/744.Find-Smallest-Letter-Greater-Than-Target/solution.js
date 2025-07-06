/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2);
    const midChar = letters[middleIndex];

    if (midChar <= target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return letters[left] ?? letters[0];
};
