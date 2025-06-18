/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const keyboards = [
    new Set('qwertyuiop'.split('')), // 줄 바꿈
    new Set('asdfghjkl'.split('')), // 줄 바꿈
    new Set('zxcvbnm'.split('')), // 줄 바꿈
  ];

  return words.filter((word) => {
    const lowerWord = word.toLowerCase();
    const firstChar = lowerWord[0];

    const targetKeyboard = keyboards.filter((kb) => kb.has(firstChar));

    return [...lowerWord].every((char) => targetKeyboard.has(char));
  });
};
